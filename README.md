# Mike Bot
Este bot te permite resolver todas las dudas que tengas sobre mi perfil de una forma dinámica e interactiva. Programado con varias opciones que pueden ayudarte en la investigación de mi perfil. Ha sido creado con librerías como telegraf y openai.

## ¿Cómo puedo usar Mike Bot?

### Dependencias
Para usar este proyecto necesitas tener instalado [NodeJS](https://nodejs.org/en).

Puedes descargar la carpeta comprimida desde la pestaña code o darle a fork si ya tienes una cuenta de github.

Crea un fichero .env con las variables de entorno necesarias en la raiz del proyecto.

```
BOT_URL="TU TOKEN DE TELEGRAM"
OPENAI_KEY="TU TOKEN DE OPENAI"
BOT_URL="NGROK URL"
PORT="3000"

```

Puedes obtener tus tokens en los siguientes enlaces [BOT_URL](https://core.telegram.org/bots/api), [OPENAI_KEY](https://platform.openai.com/account/usage),[BOT_URL](https://ngrok.com/)

Una vez has creado el .env y tienes el proyecto, abre la carpeta en tu terminal y escribe:

```
npm i 

node index.js
```

## Funcionalidades

Interactúa con un una IA entrenada específicamente para resolver dudas acerca de mi perfil. Podrás indagar en algunos de mis proyectos y mis skills.

## IA Training
Si quieres cambiar el comportamiento del bot, puedes modificar tanto el rol como el content que encontrarás a partir de la linea de código 88.

```
   {role: 'assistant', content: `Eres un desarrollador Full Stack.`},
```

