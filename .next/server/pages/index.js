"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\nfunction Titulo(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"37ea659f08ae8803\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"37ea659f08ae8803\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// Componente react ----------- Utilizado para o tutorial\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de Volta!</Titulo>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    //const username = 'gustavoopedrosa';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('gustavoopedrosa');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(router);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                backgroundImage: 'url(https://wallpapercave.com/wp/wp287905.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(event) {\n                            event.preventDefault();\n                            router.push('/chat');\n                        // Um modo de mudar de página\n                        // window.location.href = '/chat'\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                onChange: function(event) {\n                                    // Onde ta o valor?\n                                    const valor = event.target.value;\n                                    // Trocar o valor da variavel uasndo react\n                                    setUsername(valor);\n                                },\n                                placeholder: username,\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[700]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 137,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                                lineNumber: 144,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/luiz_/Projetos/Alura/aluracord/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS9ELG9FQUFvQzs0QkFDakQrQixZQUFZLEVBQUUsQ0FBTTs0QkFDcEJpQyxJQUFJLEVBQUUsQ0FBQzs0QkFDUEMsU0FBUyxFQUFFLENBQU87d0JBQ3RCLENBQUM7O3dHQUVBcEUsdURBQUs7Z0NBQ0ZtQixVQUFVLEVBQUUsQ0FBQztvQ0FDVGUsWUFBWSxFQUFFLENBQUs7b0NBQ25CVSxZQUFZLEVBQUUsQ0FBTTtnQ0FDeEIsQ0FBQztnQ0FDRHlCLEdBQUcsR0FBRyxtQkFBbUIsRUFBRXhELFFBQVEsQ0FBQyxJQUFJOzs7Ozs7d0dBRTNDZixzREFBSTtnQ0FDRCtDLE9BQU8sRUFBQyxDQUFPO2dDQUNmMUIsVUFBVSxFQUFFLENBQUM7b0NBQ1QyQixLQUFLLEVBQUUzQyxvRUFBb0M7b0NBQzNDb0IsZUFBZSxFQUFFcEIsb0VBQW9DO29DQUNyRGdDLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQzFCLENBQUM7MENBRUFyQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdXJhY29yZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCJcblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSdcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAke1RhZ30ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXX07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuLy8gQ29tcG9uZW50ZSByZWFjdCAtLS0tLS0tLS0tLSBVdGlsaXphZG8gcGFyYSBvIHR1dG9yaWFsXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbi8vICAgICAvLyBKU1hcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4vLyAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgVm9sdGEhPC9UaXR1bG8+XG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XG4gICAgLy9jb25zdCB1c2VybmFtZSA9ICdndXN0YXZvb3BlZHJvc2EnO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJ2d1c3Rhdm9vcGVkcm9zYScpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDI4NzkwNS5qcGcpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2hhdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW0gbW9kbyBkZSBtdWRhciBkZSBww6FnaW5hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25kZSB0YSBvIHZhbG9yP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcm9jYXIgbyB2YWxvciBkYSB2YXJpYXZlbCB1YXNuZG8gcmVhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNzAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsInVzZVJvdXRlciIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiVGl0dWxvIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsIm9uQ2hhbmdlIiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Dota 2 version","theme":{"colors":{"primary":{"100":"#FADDB3","200":"#F6C479","300":"#F4B352","400":"#F2A32C","500":"#E6900F","600":"#C0780C","700":"#99600A","800":"#734807","900":"#4D3004","050":"#FDEED9"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();