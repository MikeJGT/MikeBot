const express = require('express');
const { Telegraf } = require('telegraf');
const axios = require('axios');


require('dotenv').config();


//Creacion de la app con express
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

