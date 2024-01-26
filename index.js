// READ THE README TO UNDERSTAND HOW TO MAKE IT WORK PERFECTLY

// ENUS - 
// ES -
// PTBR - 

// ENUS - Exporting the dependencies
// ES - Exportar dependencias
// PTBR - Exportando as dependencias
const Discord = require("discord.js") // npm install discord.js

// ENUS - Configuring "dotenv" to use the .env file
// ES - Configurar "dotenv" para usar el archivo .env
// PTBR - Configurando o "dotenv" para utilizar o arquivo .env
require("dotenv").config() // npm install dotenv

// ENUS - Creating the bot client
// ES - Criando o client do bot
// PTBR - Creando el cliente bot
const client = new Discord.Client({
    intents: 3276799, // All intents
    partials: [
        Discord.Partials.Message, 
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.GuildScheduledEvent,
        Discord.Partials.User
    ]
})

// ENUS - Creating a collection that saves commands 
// ES - Creando una colección que guarda comandos 
// PTBR - Criando uma coleção que salva comandos
client.slashCommands = new Discord.Collection() 

// ENUS - Exporting the client to use in other files
// ES - Exportar el cliente para usarlo en otros archivos
// PTBR - Exportando o client para utilizar em outros arquivos
module.exports = client

require('./src/handlers/slashCommands')(client)
require('./src/handlers/events')(client)

// ENUS - Here we are logging into the client, so this makes us connect the bot to our project
// ES - Aquí estamos iniciando sesión en el cliente, por lo que esto nos hace conectar el bot a nuestro proyecto.
// PTBR - Aqui estamos logando no client, então isso faz com que ligamos o bot ao nosso projeto
client.login(process.env.client_token)
