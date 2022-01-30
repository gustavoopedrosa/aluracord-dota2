import { Box, Button, Text, TextField, Image } from "@skynexui/components"
import { useRouter } from 'next/router'
import React from "react"
import appConfig from "../config.json"

function Titulo(props) {
    const Tag = props.tag || 'h1'

    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
            `}
            </style>
        </>
    );
}

// Componente react ----------- Utilizado para o tutorial
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de Volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    //const username = 'gustavoopedrosa';
    const [username, setUsername] = React.useState('gustavoopedrosa')
    const router = useRouter()
    
    console.log(router)

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp287905.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: 'rgba(0,0,0, .7)',
                        border: '2px solid',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault() 
                            router.push(`/chat?username=${username}`)
                            // Um modo de mudar de página
                            // window.location.href = '/chat'
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', 
                        }}
                    >
                        <Titulo tag="h2" >Join the battle!</Titulo>
                        <Text variant="body3" styleSheet={{ 
                                marginBottom: '32px', 
                                color: appConfig.theme.colors.neutrals[300],
                            }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            onChange={function (event){
                                // Onde ta o valor?
                                const valor = event.target.value
                                // Trocar o valor da variavel uasndo react
                                setUsername(valor)
                            }}
                            placeholder='Nome de usuário'
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                            styleSheet={{backgroundColor: 'rgba(0,0,0, .7)',}}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[700],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: 'rgba(0,0,0, .7)',
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}