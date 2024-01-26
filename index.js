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

// ENUS - Creating a collection that saves commands and their aliases
// ES - Creando una colección que guarda comandos y sus alias
// PTBR - Criando uma coleção que salva comandos e seus aliases
client.commands = new Discord.Collection() 
client.aliases = new Discord.Collection() 

// ENUS - Exporting the client to use in other files
// ES - Exportar el cliente para usarlo en otros archivos
// PTBR - Exportando o client para utilizar em outros arquivos
module.exports = client

// ENUS -  This is an event, here we are identifying when the "Ready" event is triggered, so every time the bot is connected to Discord, this event will execute what you put in, as an example I am setting a status and sending it to the console when turned on
// ES - Este es un evento, aquí estamos identificando cuando se activa el evento "Listo", por lo que cada vez que el bot se conecte a Discord, este evento ejecutará lo que usted puso, como ejemplo estoy estableciendo un estado y enviándolo al consola cuando está encendida
// PTBR - Este é um evento, aqui estamos identificando quando o evento de "Ready" é acionado, então toda vez que a bot for ligada no Discord, esse evento irá executar o que você colocar, como exemplo estou colocando para setar um status e enviar para o console quando for ligado
client.on("ready", async() => {
    console.log(`${client.user.username} Started successfully!`) // Sending to the console when your bot starts
    client.user.setPresence({
        activities: [
            {
                name: `Hello!`, // Name that appears in the playing activitie
                type: Discord.ActivityType.Playing // The type set to "Playing"
            }
        ],
        status: `online` // Status set to Online! You can use: "online", "idle", "dnd", "invisible"
    })
})

// ENUS - Here we are logging into the client, so this makes us connect the bot to our project
// ES - Aquí estamos iniciando sesión en el cliente, por lo que esto nos hace conectar el bot a nuestro proyecto.
// PTBR - Aqui estamos logando no client, então isso faz com que ligamos o bot ao nosso projeto
client.login(process.env.client_token)
