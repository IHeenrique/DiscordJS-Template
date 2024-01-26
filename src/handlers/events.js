const path = require("path")
const fs = require("fs");   

module.exports = async (client) => {
    const eventsPath = path.join(__dirname, "../events");
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath);
        if (event.disabled) return
        else if (event.once) {
            try {
                client.once(event.name, (...args) => event.execute(...args));
            } catch (e) {
                console.error(e);
            }

        } else {
            try {
                client.on(event.name, (...args) => event.execute(...args));
            } catch (e) {
                console.error(e);
            }
        }
    }
}