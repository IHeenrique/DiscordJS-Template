# DiscordJS Bot Template

Welcome to the bot template on DiscordJS, that's right, you won't have to suffer anymore to learn the basics of how to program your own bot on discord! This template aims to explain as much as possible how the README and comments within the codes and help you better understand how the programming logic for DIscordJS works.

## DiscordJS Official Links

### V14 Guide

[Click here to be redirected to the website!](https://discordjs.guide/#before-you-begin)

### Documentation

[Click here to be redirected to the website!](https://old.discordjs.dev/#/docs/discord.js/14.14.1/general/welcome)

## Important to Know

This template only explains the basics of how to create your 1 command and call it, but I recommend you read the documentation and guides and delve into JavaScript to learn how to create any system from scratch.

## Installation

1. Install the project code on your machine or use Github Desktop;
2. Using NodeJS, run the following command in the terminal:

```bash
npm install
```

3. Wait until all dependencies are installed;
4. Create the **.env** file in the main project folder;

### Env Example

| Key | Value | Required/Optional |
|----------|----------| ----------|
| client_token   |  YOUR_BOT_TOKEN  | Required |
| mongoose_uri   | YOUR_URI_MONGOOSE   | Optional |

5. Now run the following command in your terminal! (Remember to have your terminal in the main project folder)

```bash
node index.js
```

## Inserting the Mongoose Database

[You will not be taught how to completely configure your mongoose database for the Project, but I recommend that you read the Official Documentation which explains step by step how to do this, and the creation of schemas.](https://mongoosejs.com/docs/)

### Insert the following code into the index.js file

```bash
npm install mongoose
```

```javascript
const mg = require('mongoose');

mg.set("strictQuery", true);
mg.connect(process.env.mongoose_uri, {}).then(() => {
    console.log("Logged to Database!")
});
```


# 🍄 Made By IHeenrique



