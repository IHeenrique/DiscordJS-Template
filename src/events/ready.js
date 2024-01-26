const client = require("../..")
const Discord = require("discord.js")

module.exports = {
    name: Discord.Events.ClientReady,
    once: false,
    disabled: false,
    async execute() {

        // ENUS -  This is an event, here we are identifying when the "Ready" event is triggered, so every time the bot is connected to Discord, this event will execute what you put in, as an example I am setting a status and sending it to the console when turned on
        // ES - Este es un evento, aquí estamos identificando cuando se activa el evento "Listo", por lo que cada vez que el bot se conecte a Discord, este evento ejecutará lo que usted puso, como ejemplo estoy estableciendo un estado y enviándolo al consola cuando está encendida
        // PTBR - Este é um evento, aqui estamos identificando quando o evento de "Ready" é acionado, então toda vez que a bot for ligada no Discord, esse evento irá executar o que você colocar, como exemplo estou colocando para setar um status e enviar para o console quando for ligado
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

    }
}