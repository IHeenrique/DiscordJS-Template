// Dependencies
const { Interaction ,ApplicationCommandType } = require("discord.js")
const client = require("../../..")

// Exporting Command
module.exports = {
    name: "example",
    type: ApplicationCommandType.ChatInput,
    description: "This is an example command",
    descriptionLocalizations: ({ 'en-US': "This is an example command",'pt-BR': 'Isso é um comando de exemplo','es-ES': "Este es un comando de ejemplo" }),

    /**
     * 
     * @param {client} client 
     * @param {Interaction} interaction
     * @returns 
     */
    run: async (client, interaction) => {
        
       interaction.reply({ content: `This is an example command!`})
        
    }
}