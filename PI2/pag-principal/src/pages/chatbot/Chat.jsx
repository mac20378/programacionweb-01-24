import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#8a2be2',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#8a2be2',  
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
};

const chatStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const pageStyle = {
    backgroundImage: 'linear-gradient( 0deg, rgba(235, 51, 10, 0.815), rgba(207, 34, 216, 0.563)), url("media3/portada.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};

export default class Chat extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div style={pageStyle}>
                    <div style={chatStyle}>
                        <ChatBot 
                            steps={[
                                {
                                    id: "1",
                                    message: "¡Hola! ¿Cuál es tu nombre?",
                                    trigger: "2"
                                },
                                {
                                    id: "2",
                                    user: true,
                                    validator: (value) => {
                                        if (/^[A-Z][a-z]{2,15}$/.test(value)) {
                                            return true;
                                        }
                                        return 'Por favor, introduce tu nombre con la primera letra mayúscula.';
                                    },
                                    trigger: "3"
                                },
                                {
                                    id: "3",
                                    message: "Hola, {previousValue}, ¡un gusto conocerte!",
                                    trigger: "4"
                                },
                                {
                                    id: "4",
                                    message: "¿Tienes alguna duda sobre sexualidad?",
                                    trigger: "5"
                                },
                                {
                                    id: "5",
                                    options: [
                                        {value: "y", label: "Sí", trigger: "6A"},
                                        {value: "n", label: "No", trigger: "6B"},
                                    ]
                                },
                                {
                                    id: "6A",
                                    message: "¡Genial! ¿Sobre qué tema tienes dudas?",
                                    trigger: "seleccion"
                                },
                                {
                                    id: "6B",
                                    message: "Oh, lamento no poder ayudarte, ¡suerte!",
                                    end: true
                                },
                                {
                                    id: "seleccion",
                                    options: [
                                        {value: "Anticonceptivo", label: "Anticonceptivos", trigger: "7A"},
                                        {value: "Enfermedad_de_transmisión_sexual", label: "Enfermedades de transmisión sexual", trigger: "7B"},
                                        {value: "Educación_sexual", label: "Educación sexual", trigger: "7C"},
                                        {value: "Orientación_sexual", label: "Orientación sexual", trigger: "7D"},
                                    ]
                                },
                                {
                                    id: "7A",
                                    message: "¿Qué tipo de anticonceptivo te interesa?",
                                    trigger: "seleccionAnti"
                                },
                                {
                                    id: "7B",
                                    message: "¿Sobre cuál enfermedad de transmisión sexual te gustaría saber?",
                                    trigger: "seleccionETS"
                                },
                                {
                                    id: "7C",
                                    message: "¿Qué aspecto de la educación sexual te gustaría conocer?",
                                    trigger: "seleccionEdu"
                                },
                                {
                                    id: "7D",
                                    message: "¿Sobre qué aspecto de la orientación sexual te gustaría saber más?",
                                    trigger: "seleccionOri"
                                },
                                {
                                    id: "seleccionAnti",
                                    options: [
                                        {value: "Píldora_anticonceptiva", label: "Píldora anticonceptiva", trigger: "anti1"},
                                        {value: "Preservativo", label: "Preservativo", trigger: "anti2"},
                                        {value: "DIU", label: "DIU", trigger: "anti3"},
                                    ]
                                },
                                {
                                    id: "anti1",
                                    message: "La píldora anticonceptiva es un método hormonal que previene el embarazo.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "anti2",
                                    message: "El preservativo es un método de barrera que previene el embarazo y protege contra enfermedades de transmisión sexual.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "anti3",
                                    message: "El DIU es un dispositivo intrauterino que previene el embarazo.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "seleccionETS",
                                    options: [
                                        {value: "VIH/sida", label: "VIH", trigger: "et1"},
                                        {value: "Sífilis", label: "Sífilis", trigger: "et2"},
                                        {value: "Gonorrea", label: "Gonorrea", trigger: "et3"},
                                    ]
                                },
                                {
                                    id: "et1",
                                    message: "El VIH es un virus que ataca el sistema inmunológico y puede llevar al SIDA si no se trata.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "et2",
                                    message: "La sífilis es una infección bacteriana generalmente transmitida por contacto sexual..",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "et3",
                                    message: "La gonorrea es una infección bacteriana que puede afectar los genitales, el recto y la garganta.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "seleccionEdu",
                                    options: [
                                        {value: "Anatomía", label: "Anatomía", trigger: "edu1"},
                                        {value: "Relaciones_sexuales", label: "Relaciones sexuales", trigger: "edu2"},
                                        {value: "Consentimiento", label: "Consentimiento", trigger: "edu3"},
                                    ]
                                },
                                {
                                    id: "edu1",
                                    message: "La anatomía sexual incluye los órganos reproductivos internos y externos.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "edu2",
                                    message: "Las relaciones sexuales abarcan las actividades físicas y emocionales relacionadas con el sexo.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "edu3",
                                    message: "El consentimiento es el acuerdo mutuo para participar en actividades sexuales, dado de manera libre y voluntaria.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "seleccionOri",
                                    options: [
                                        {value: "Heterosexualidad", label: "Heterosexualidad", trigger: "ori1"},
                                        {value: "Homosexualidad", label: "Homosexualidad", trigger: "ori2"},
                                        {value: "Bisexualidad", label: "Bisexualidad", trigger: "ori3"},
                                    ]
                                },
                                {
                                    id: "ori1",
                                    message: "La heterosexualidad es la atracción sexual hacia personas del sexo opuesto.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "ori2",
                                    message: "La homosexualidad es la atracción sexual hacia personas del mismo sexo.",
                                    trigger: "preguntaVuelta"
                                },
                                {
                                    id: "ori3",
                                    message: "La bisexualidad es la atracción sexual hacia personas de ambos sexos.",
                                    trigger: "preguntaVuelta"
                                },
                                
                                {
                                    id: "preguntaVuelta",
                                    message: "¿Necesitas saber algo más?",
                                    trigger: "respuestaVuelta",
                                }, 
                                {
                                    id: "respuestaVuelta",
                                    options: [
                                        {value: "y", label: "Sí", trigger: "6A"},
                                        {value: "n", label: "No", trigger: "6B"},
                                    ],
                                }
                            ]}
                        />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}
