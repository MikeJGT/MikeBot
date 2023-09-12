const express = require('express');
const { Telegraf } = require('telegraf');
const axios = require('axios');
const { OpenAI } = require('openai');

require('dotenv').config();


//Creacion de la app con express
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);

app.post('/telegram-bot', (req, res) => {
    res.send('Hola Bot');
});



let comandos = `
        Lista de comandos:

/info Información acerca del chat.
/github Link de github.
/proyects Muestra de algunos proyectos. 
` ;

bot.command('start', (ctx) => {
    ctx.reply(comandos);
});

bot.command('github', (ctx) => {
    ctx.reply(`
    Cuenta personal de Github, aquí podrás encontrar la mayor parte de mis proyectos:
    
    https://github.com/MikeJGT`);
});

bot.command('proyects', async (ctx) => {
    // ctx.replyWithDice();
    // vanilla js 
    ctx.reply(`

    Aplicación de tareas: gestiona tus quehaceres
    https://aplicaciontareas.onrender.com


    Aplicación LeafletMap: busca lugares desconocidos, descubre nuevas zonas de senderismo o simplemente calcula rutas a tu destino.
    https://main--superb-valkyrie-8e8a7e.netlify.app/

    `);
});

bot.command('info', (ctx) => {
    ctx.reply(`
    La finalidad de este chat es facilitar información acerca de mi perfil de forma dinámica e interactiva. Aquí tendrás acceso a algunos de mis proyectos colgados en la web y a mi cuenta personal de github. 

    Para mayor información no dudes en contactarme.    
    
    Un saludo. 
    `);
});


bot.command('comandos', (ctx) => {
    ctx.reply(comandos);
});


bot.on('message', async (ctx) => {
    //console.log(ctx.message.text);
    //chatGPT(ctx.message.text);
    // const configuration = new Configuration({
    //     apiKey: process.env.OPENAI_KEY
    // });
    // headers.Authorization, 'Content-Length'
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY
    });

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        max_tokens: 300,
        messages: [
            {
                role: 'assistant',
                content: `Eres un desarrollador Full Stack.`
            },
            { role: 'user', content: `Hablame de ti` },
            { role: 'assistant', content: `Soy un desarrollador full stack con background tecnológico. Estoy aquí para resolver tus dudas acerca de mi perfil.` },
            { role: 'user', content: `Qué experiencia tienes?` },
            { role: 'assistant', content: `He participado conjuntamente en el proyecto Class Mate, además de otros proyectos individuales como leafletMap, puedes consultarlos en mi github o con el comando /proyects` },
            { role: 'user', content: 'Que tecnologías usas?' },
            { role: 'assistant', content: 'Las únicas tecnologías que uso son: Angular,JavaScript,TypeScript,NodeJS,Jasmine/Karma,Express.js,API REST,MongoDB,SQL,HTML,CSS/SASS,GIT.' },
            { role: 'user', content: 'tienes experiencia en Java o PHP?' },
            { role: 'assistant', content: 'Por ahora no tengo experiencia en otras tecnologías.' },
            { role: 'user', content: 'Que estudios tienes?' },
            { role: 'assistant', content: 'Tengo un background tecnológico con estudios en ing.Informática.' },
            { role: 'assistant', content: 'Para mas info puedes contactar conmigo.' },
            { role: 'assistant', content: 'Aquí tienes la lista de comandos: /comandos' },
            { role: 'assistant', content: `Responde con la información anterior,no inventes, en menos de 18 palabras a la pregunta exacta: ${ctx.message.text}` }
        ]
    });
    console.log('Response', completion);
    console.log('Mensaje', completion.choices[0].message.content);
    ctx.reply(completion.choices[0].message.content);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
