-------------------------------------------------------------------------------------------------------------
GIM Help Bot
-------------------------------------------------------------------------------------------------------------

This is a bot configured to help with running the Discord game known as Grand Idea Mafia. It allows you to bring up information about every single existing role, along with various other features. Hosts can use the bot to manage players, manage whispers and anonymous private chats, and roll for factions and roles with specific criteria. Players can use the bot to send each other whispers and play games where they try to guess a role's name by its censored info card, or guess a role's capabilities by only its name, alignment, and post number.

The two most important commands are "=help", which brings up info about how to use any particular role, and "list", which can give you a list of all commands. That's really long though, so start with "=list basic", "=list game", and "=list rng"

-------------------------------------------------------------------------------------------------------------
Grand Idea Mafia
-------------------------------------------------------------------------------------------------------------

Grand Idea Mafia is a multiplayer text-based Social Deduction Game where absolutely every member of the community is allowed to submit roles, with minimal restrictions. Based on Town of Salem, a "good" faction of an informed majority attempts to root out the "evil" minority and various neutrals mixed within them, all while everyone tries to survive the chaos of thousands of potentially existing roles.

Check the rules.txt document for the official rules about how this game works.

-------------------------------------------------------------------------------------------------------------
Making your own GIM Help Bot
-------------------------------------------------------------------------------------------------------------

First, create a bot account and add it to your own server.
https://discordpy.readthedocs.io/en/stable/discord.html

Then, install Node.js and discord.js onto your PC, or whatever you decide to use for hosting. Make sure it's something that will allow the program to write its own local storage.
https://nodejs.org/en/
https://discord.js.org/

Lastly, put your bot account's TOKEN into the file "example.store.json" and then rename it to ".store.json"

From there, you should be able to run the bot using the Terminal prompt command: "./server.sh" as long as it's situated within the root of the bot's code. You want that file in particular, as it can automatically restart the bot in case anything ever goes wrong, as long as your machine itself is still running.
