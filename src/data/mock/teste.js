[
    {
        "id": "header",
        "style": {
            "backgroundColor": "white"
        },
        "parts": [
            {
                "style": {
                    "backgroundColor": "#F3F3F7",
                    "height": 24,
                    "padding": "0 8px",
                    "color": "#707070"
                },
                "parts": [
                    {
                        "type": "IconText",
                        "icon": "point",
                        "text": "100+ lojas",
                        "info": "Mais de 100 lojas espalhadas pelo Brasil"
                    },
                    {
                        "type": "TextLinkOptions",
                        "options": [
                            {
                                "text": "Meus Desejos",
                                "link": "/about"
                            },
                            {
                                "text": "Entrar",
                                "link": "https://www.google.com"
                            },
                            {
                                "text": "Registrar",
                                "link": "/about"
                            }
                        ]
                    }
                ]
            },
            {
                "style": {
                    "backgroundColor": "white",
                    "padding": 8
                },
                "parts": [
                    {
                        "type": "LogoImage",
                        "style": {
                            "margin": "0 8px 0 0",
                            "height": 60
                        },
                        "src": "/static/imgs/logo_coca_cola.png",
                        "srcMobile": "/static/imgs/coca_mob_logo.png"
                    },
                    {
                        "type": "Section",
                        "style": {
                            "flexWrap": "nowrap",
                            "flex": "11 auto"
                        },
                        "parts": [
                            {
                                "type": "SearchInput",
                                "icon": "search",
                                "style": {
                                    "flex": "11 auto",
                                    "margin": "0 8px"
                                }
                            },
                            {
                                "type": "ShoppingCart",
                                "style": {
                                    "color": "#be1221",
                                    "flex": 1,
                                    "marginLeft": 8
                                },
                                "styleMobile": {
                                    "color": "#F00000",
                                    "flex": 1,
                                    "marginLeft": 8
                                },
                                "icon": "shop"
                            }
                        ]
                    }
                ]
            },
            {
                "style": {
                    "backgroundColor": "white",
                    "padding": "0 16px"
                },
                "parts": [
                    {
                        "type": "HoverMenu",
                        "options": [
                            {
                                "header": "Eletro",
                                "options": [
                                    {
                                        "text": "Geladeira",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Fogão",
                                        "link": "/about"
                                    }
                                ]
                            },
                            {
                                "header": "Celular",
                                "options": [
                                    {
                                        "text": "Motorola",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Samsung",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "LG",
                                        "link": "/about"
                                    }
                                ]
                            },
                            {
                                "header": "Game",
                                "options": [
                                    {
                                        "text": "PS4",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "XBox",
                                        "link": "/about"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "IconText",
                "icon": "heart",
                "text": "235+ Likes"
            }
        ]
    },
    {
        "id": "content",
        "style": {
            "backgroundColor": "white"
        },
        "parts": [
            {
                "style": {
                    "backgroundColor": "#F3F3F7",
                    "padding": "0 16px",
                    "color": "#707070",
                    "flexWrap": "wrap",
                    "justifyContent": "space-around",
                    "alignItems": "stretch"
                },
                "stylePart": {
                    "margin": "8px 16px 16px 8px",
                    "minWidth": 200
                },
                "parts": [
                    {
                        "type": "ApiRest",
                        "url": "https: //us-central1-bumblebeesbx.cloudfunctions.net/product",
                        "typeComponent": "ProductCard"
                    }
                ]
            }
        ]
    },
    {
        "id": "footer",
        "style": {
            "backgroundColor": "#2b303c"
        },
        "parts": [
            {
                "style": {
                    "backgroundColor": "#F3F3F7",
                    "height": 24,
                    "padding": "0 16px",
                    "color": "#707070"
                },
                "parts": [
                    {
                        "type": "IconText",
                        "text": ""
                    },
                    {
                        "type": "IconText",
                        "icon": "mail",
                        "text": "coca@soft.com.br",
                        "info": "Entre em contato conosco."
                    }
                ]
            },
            {
                "style": {
                    "backgroundColor": "transparent",
                    "minHeight": 24,
                    "color": "#707070",
                    "padding": "24px 16px"
                },
                "parts": [
                    {
                        "type": "HeaderVerticalMenu",
                        "style": {
                            "backgroundColor": "transparent"
                        },
                        "styleHeader": {
                            "fontSize": "1.3em",
                            "color": "#E0E0E0"
                        },
                        "styleItem": {
                            "fontSize": "1em",
                            "color": "#E0E0E0"
                        },
                        "options": [
                            {
                                "header": "MEU PERFIL",
                                "options": [
                                    {
                                        "text": "Meu Cadastro",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Meus Pedidos",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "LG",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Nokia xpto asdfk asdfkj ",
                                        "link": "/about"
                                    }
                                ]
                            },
                            {
                                "header": "INSTITUCIONAL",
                                "options": [
                                    {
                                        "text": "Sobre Nós",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Política de Privacidade",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Termos de Uso",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Regulamento e Promoções",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Trabalhe Conosco",
                                        "link": "/about"
                                    }
                                ]
                            },
                            {
                                "header": "ATENDIMENTO",
                                "options": [
                                    {
                                        "text": "Fale Conosco",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Dúvidas Frequentes",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Pagamento",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Troca e Devolução",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Entrega",
                                        "link": "/about"
                                    }
                                ]
                            },
                            {
                                "header": "SERVIÇOS",
                                "options": [
                                    {
                                        "text": "Lista de Presentes",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Guia de Ofertas",
                                        "link": "/about"
                                    },
                                    {
                                        "text": "Chat Online",
                                        "link": "/about"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
