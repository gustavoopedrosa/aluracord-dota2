import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import React from 'react';
import appConfig from '../config.json';
import ButtonSticker from '../src/components/ButtonSticker/index.js'

// Como fazer AJAX: https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU1NTE3MiwiZXhwIjoxOTU5MTMxMTcyfQ.fd5pBZO-3HYzVTn0AWL3XVX-g_PmOegNY9HMlALZs3k'
const SUPABASE_URL = 'https://lvvzxnpwsppwlrtqwzgd.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function escutaMensagensEmTempoReal(adicionaMensagem) {
    return supabaseClient
        .from('mensagens')
        .on('INSERT', (reposta) => {
            adicionaMensagem(reposta.new)
        })
        .subscribe()
}

export default function ChatPage() {
    const usuarioLogado = useRouter().query.username
    const [mensagem, setMensagem] = React.useState('')
    const [listaMensagens, setListaMensagens] = React.useState([])

    React.useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                setListaMensagens(data)
            })

        const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
            // Quero reusar um valor de referencia (objeto/array) 
            // Passar uma função pro setState

            // setListaDeMensagens([
            //     novaMensagem,
            //     ...listaDeMensagens
            // ])
            setListaMensagens((valorAtualDaLista) => {
                return [
                    novaMensagem,
                    ...valorAtualDaLista,
                ]
            });
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [])

    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Temq ue adicionar o texto na listagem

    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if caso seja enter pra limpar a variavel)
    - [ ] Lista de mensagens
    
    */

    function handleNovaMensagem(novaMensagem) {
        const msg = {
            //id: listaMensagens.length + 1, -- Não será mais necessário pq o id vem do supabase
            texto: novaMensagem,
            de: usuarioLogado

        }

        supabaseClient
            .from('mensagens')
            .insert([
                //tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
                msg
            ])
            .then(({ data }) => {

            })
        setMensagem('')
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://wallpapercave.com/wp/wp287905.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                backgroundPosition: 'center',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header user={usuarioLogado} />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList mensagens={listaMensagens} />

                    {/* Aqui foi o treinamento do método map */}

                    {/* {listaMensagens.map((mensagemAtual, i) => {
                        console.log(mensagemAtual)
                        return (
                            <li key={i}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault()
                                    handleNovaMensagem(mensagem)
                                }
                            }}
                            onChange={(event) => {
                                setMensagem(event.target.value)
                            }}
                            value={mensagem}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        {/* Callback */}
                        <ButtonSticker
                            onStickerClick={(sticker) => {
                                handleNovaMensagem(`:sticker: ${sticker}`)
                            }
                            } />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header(props) {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }} >
                <Text variant='heading5' styleSheet={{ flexBasis: '100%', marginBottom: '20px' }}>
                    Bem vindo, {props.user}!
                </Text>
                <Text variant='heading5' styleSheet={{selfAlign: 'center', flexGrow: '100%'}}>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto.startsWith(':sticker:')
                            ? (
                                <Image
                                    src={mensagem.texto.replace(':sticker:', '')}
                                    width={100}
                                />
                            )
                            : (
                                mensagem.texto
                            )
                        }
                    </Text>
                )
            })}
        </Box>
    )
}