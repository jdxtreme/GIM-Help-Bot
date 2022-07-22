//Credit: Vik

module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["anti_a_activist", "antiaactivist", "anti_a", "antia", "251"], "Neutral", "Anti A Activist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 251");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player who has used the letter A in their messages during the day.");

		e.addField("Attributes:", "- Attacking a player marks them as an A-loving heretic.\n- If a player survives your attack, their defense will go down one level for the rest of the game.");
		
		e.addField("Goal:", "Cause the death of three A-loving heretics.");
	});

	register_role(["coward", "252"], "Town", "Coward", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 252");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run at someone's house every night.");

		e.addField("Attributes:", "- If you are attacked, redirect the attack to the player you ran to.\n- If a Town/Florae member Is killed by your redirection, you will deal yourself an Unstoppable attack at the end of the next night.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["planet", "253"], "Rock", "Planet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 253");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blot out the moon at night.\n- Obscure one player's vision at night.");

		e.addField("Attributes:", "- Blotting out the moon will cause all non-Rock players to, without their knowledge, visit a random non-Rock player.\n- Obscuring one player's vision will cause them to visit a player at random without knowing, or fail to act if they are a killer.\n- You may blot out the moon once during the game.");

		e.addField("Goal:", "Rock goal.");
	});

	register_role(["therapist", "254"], "Town", "Therapist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 254");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick a player every night to have a therapy session with.");

		e.addField("Attributes:", "- You will discover if they're a Killing, Support, Investigative or Protection role, but will not know their faction.\n- All roles that do not enter into any of those categories, such as Mafia Deception, are assumed to be into the Support category unless stated otherwise.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["fuc_king", "fucking", "fking", "255"], "Neutral", "Fuc King", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 255");

		e.addField("Alignment", "Fuc King", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Middle Finger: Your next nomination will eat shit and die.\n- The Council Will Decide Your Fate: Either end the trial or send it to the execution phase immediately. (1 use)\n- Guards!: Become death immune for the night. (2 uses)\n- Fuc Kyou I Nparticular: Roleblock a player for the night, and prevent them from speaking or voting during the following day. This ability is astral.");

		e.addField("Attributes:", "- You should've attempted to format this in a TOS-style format, smh.");

		e.addField("Goal:", "Survive to see the end of the game.");
	});

	register_role(["tpoj", "thepillar", "the_pillar_of_justice", "thepillarofjustice", "poj", "256"], "Neutral", "THE PILLAR OF JUSTICE", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 256");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Defend yourself at night, temporarily granting invincible defense. All players that attack you will be unable to vote (this includes extra votes) and whisper the following day.");

		e.addField("Attributes:", "- You may defend yourself three times.\n- After a player is lynched, your role will be revealed publicly.\n- Every time you are attacked, the attacker will gain an extra anonymous vote permanently. The majority required will also change. If you are killed at night, the attacker will gain two extra votes.\n- You will know the roles of all players who attack you.");

		e.addField("Goal:", "Survive to see the end of the game.");
	});

	register_role(["tsuku", "tsukuyomi", "257"], "Neutral", "Tsukuyomi", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 257");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill a player every night.");

		e.addField("Attributes:", "- You start in your New Moon Form, with Basic Attack and Defense.\n- The First Full Moon, you transform to Crescent Moon Form. You now deal Powerful Attack and have Powerful Defense.\n- The second Full Moon, enter your Half Moon Form. You will now rampage at your targets house.\n- The third Full Moon, you will gain access to your Hawk Ichibyoshi. You may now send It to deal a Basic Attack at another player every night.\n- The fourth Full Moon, gain Unstoppable Attack and Invincible Defense. Anyone that may survive your attack Is cursed and will be dealt an Overkill damage 2 days later.");

		e.addField("Goal:", "Kill everyone who may oppose you.");
	});

	register_role(["hades", "258"], "FallenAngel", "Hades", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 258");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Judge someone each night. You'll learn their role, and attack them if they're capable of killing.\n- Use the ability of a dead player at night. Their attack, if applicable, will be changed to Piercing.");

		e.addField("Attributes:", "- If you judge a Fallen Angel, you can't be roleblocked or redirected while doing so, and they'll be cleaned but you'll still be able to use their ability.\n- If you judge a non-Fallen Angel and fail to kill them, your attack against them will be upgraded to Unstoppable.\n**Sin of Greed** — If you're the last Fallen Angel remaining, you can use the ability of any number of different dead players and judge someone and steal all of someone's abilities and use any number of your stolen abilities each night.");

		e.addField("Goal:", "Live to crush all who would oppose the Fallen Angels.");
	});

	register_role(["poli", "politician", "259"], "Town", "Politician", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 259");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tax someone every night.\n- Pay taxes to a player every night.");

		e.addField("Attributes:", "- Taxing players will roleblock them, and steal 1 charge of their night abilities, if they have any. You will know if you stole a charge.\n- Paying taxes gives one charge of an ability to a given player. Ex: \"I'll give the charge I stole from Player Name A to Player Name F.\"\n- You appear evil to TIs.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["god", "260"], "Neutral", "God", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 260");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- During the night, you can choose to Smite everyone, dealing a Basic attack to the entire town. You may only smite once, at the beginning of the game.");

		e.addField("Attributes:", "- Each full moon, your attack level rises by 1.\n- You get another smite at round 7.");

		e.addField("Goal:", "Live to see everyone burn.");
	});

	register_role(["confuser", "261"], "Neutral", "Confuser", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 261");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day and every night, you will attempt to confuse a player. Give something for the host to say, and they will post it in your target's private channel (to appear like an OOC message, without quotes or indicators or anything).");

		e.addField("Attributes:", "- If the target responds with \"what\", \"?\", or a similar expression of confusion, they get attacked immediately.");

		e.addField("Goal:", "Kill two people.");
	});

	register_role(["phantom", "262"], "Neutral", "Phantom", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 262");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Possess someone into someone else every night.");

		e.addField("Attributes:", "- The possessed Is redirected and deals a Basic Attack to the other target.\n- The night after you possess someone, they're dealt a Powerful Attack. You may still use your possession the same night.\n- The first time you are attacked, immediately revive yourself at the end of the night.");

		e.addField("Goal:", "Kill everyone who may oppose you.");
	});

	register_role(["necroban", "necro", "263"], "Neutral", "NecroBAN", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 263");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player. They're banned from the game.");

		e.addField("Attributes:", "- Players are banned from the game when they die. (They're removed from the playerlist entirely and their roles and wills aren't revealed.)");

		e.addField("Goal:", "Ban all who would oppose you.");
	});

	register_role(["fisherman", "fm", "264"], "Town", "Fisherman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 264");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cast your fishing rod onto a player's house at night, marking them.\n- Reel in your fishing rod to kill a marked player's visitors.");

		e.addField("Attributes:", "- When you reel in your fishing rod, you will deal a Powerful attack to all of their visitors.\n- You can have fishing rod cast at up to three players at once.\n- If you attack a Townie, all of the other visitors to the visited player will live.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["ghostenthusiast", "ghost_enthusiast", "ge", "265"], "Neutral", "Ghost Enthusiast", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 265");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a dead player each night. They will now be able to talk in the day chat, use their abilities and like vote.");

		e.addField("Attributes:", "- Ghosts gain another ability, allowing them to encourage and support you at night. If used, the following night, you can use your ability twice. This can stack!");

		e.addField("Goal:", "Have there be more ghost frens than inanimate corpses (have the majority of dead people be ghosts by the end of the game).");
	});

	register_role(["dontpressthebutton", "dont_press_the_button", "dptb", "266"], "Neutral", "Don't Press The Button", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 266");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Irrelevant", true);
		e.addField("Defense", "Irrelevant", true);

		e.addField("Abilities:", "- Kill everything at once. This is usable at night and at day.");

		e.addField("Attributes:", "- Killing everything will also kill you. Your attack ignores defense of any kind. You cannot be killed by anything besides Assassin (697), and you cannot be controlled into using your ability, but you can be roleblocked.");

		e.addField("Goal:", "Avoid the temptation of automatically ending the game by using your ability.");
	});

	register_role(["igu", "267"], "Neutral", "Igu", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 267");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You're Igu and you're not you. (She's you.)\n- When you're Igu, she gets five roles to choose from and can pick any of them.\n- If you're not Igu, your role is Diamond.");

		e.addField("Goal:", "Successfully cause Igu to be you and you to be Igu.");
	});

	register_role(["stargazer", "sg", "268"], "Neutral", "Stargazer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 268");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to match two people based on their horoscopes.");

		e.addField("Attributes:", "- Each player in the game will have a star sign assigned to them. This will either be from their birthday or randomly assigned. Every horoscope will be present among all players in the game. If this is not possible, reroll.\n- If you match two players whose star signs are compatible, they will learn each other's roles, and they may now win with each other.\n- You have two bulletproof vests you may use throughout the game. You may not matchmake and use a vest in the same night.\n- Refer to the following image to see which signs are compatible with each other.\n- You may match yourself with another player as long as your star signs are compatible.");

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/970107395273527336/unknown.png");

		e.addField("Goal:", "Match three pairs of players.");
	});

	register_role(["moody", "269"], "Neutral", "Moody", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 269");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a tantrum every night.\n- Drink your cup of tea.\n- Refill your cup of tea.");

		e.addField("Attributes:", "- Throwing a tantrum grants you Invincible Defense and deals an Astral Basic Attack to all of your visitors.\n- Drinking your cup of tea lowers your defense value to None and invalidates all protection for tonight.\n- You cannot drink your cup of tea more than once per game.\n- Refilling your cup of tea gives you 1 charge of drinking your cup of tea. Every player visiting you will know you are the Moody if you refill your cup.\n- If you go 2 nights in a row without throwing a tantrum, you will deal yourself an Unstoppable Attack at the end of the 3rd night.\n- Once you die, deal an Unstoppable Attack to your killer. If there are multiple, only one, chosen at random, will be dealt an Unstoppable Attack.\n- You have roleblock immunity.");

		e.addField("Goal:", "Die at night by a role other than yourself. ");
	});

	register_role(["snailsgambler", "snails_gambler", "snailgambler", "snail_gambler", "sg", "270"], "Neutral", "Snail's Gambler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 270");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "FUCKIN' INVINCIBLE", true);

		e.addField("Abilities:", "- Visit a person every night.\n- Use your wished wealth to hire a hitman on someone.");

		e.addField("Attributes:", "- When rolled, a random other player will be rerolled into being the Gambit Snail.\n- You cannot be killed by anyone besides the Gambit Snail.\n- Visiting is mandatory; you also may only visit a person once. \n- Hitman deals an Astral Basic Attack. You may only hire a hitman twice.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["gambitsnail", "gambit_snail", "gs", "271"], "Neutral", "Gambit Snail", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 271");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "FUCKIN' INVINCIBLE", true);

		e.addField("Abilities:", "- Check a person each night for being the Snail Gambler.");

		e.addField("Attributes:", "- When rolled, a random other player will be rerolled into being the Snail Gambler.\n- You cannot be killed by anyone besides yourself.\n- If you visit the Snail Gambler or vice versa, both you and the Snail Gambler will be killed.");

		e.addField("Goal:", "Kill a Snail Gambler.");
	});

	register_role(["diamond", "dia", "272"], "Rock", "Diamond", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 272");

		e.addField("Alignment", "Rock Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shine bright like a diamond at someone. Your target and their neighbours' roles will be given to you, though you won't know which role belongs to which person.\n- Once per game, you may shine bright like a diamond at everyone, roleblocking everyone in the game besides the rocks that night.");

		e.addField("Attributes:", "- You may be Igu.");

		e.addField("Goal:", "Kill all that would oppose the Rocks. ");
	});

	register_role(["conway", "273"], "Neutral", "Conway", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 273");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Iterate your target through one iteration of Conway's Game of Life.");

		e.addField("Attributes:", "- Based on who you target and their dead or alive status as well as the dead or alive status of their neighbors, they will either die or be revived.\n--- If you target an alive player, and at least one of their neighbors is dead, they will die.\n--- If you target a dead player, and both of their neighbors are alive, they will be revived.\n- You may not kill once you have killed three players nor may you revive after you have revived a player.\n- You have Basic Defense until you are attacked for the first time.\n- You may not kill yourself, but you may revive yourself.");

		e.addField("Goal:", "Kill three players and revive one player.");
	});

	register_role(["clonerprodigy", "cloner_prodigy", "cp", "274"], "Neutral", "Cloner Prodigy", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 274");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "Choose another player to clone each night. A new player is added with their name and role. You control the clone. The clone wins with you.");

		e.addField("Goal:", "Kill all non-clones. (You're not a clone.)");
	});

	register_role(["manipulator", "275"], "Town", "Manipulator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 275");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Manipulate your target into targeting someone else.");

		e.addField("Attributes:", "- Select two targets are night. The first target will have their action redirected to the second.\n- You may not manipulate yourself.\n- You have roleblock and redirection immunity.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["fortifier", "276"], "Town", "Fortifier", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 276");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a fort at someone's house every night.");

		e.addField("Attributes:", "- Building takes 1 day.\n- You may have as many forts as you would like.\n- You will learn how many of each faction (Town and Neutral included) visit people with forts in them.\n- If an evil faction or a NK visits a target with a fort, the fort Is destroyed at the end of the night.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["villainteamleader", "villain_team_leader", "vtl", "277"], "Other", "Villain Team Leader", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 277");

		e.addField("Alignment", "Villain Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Evil faction roles aren't part of those factions and are Villains. (Villains are an informed minority with a night chat, a factional kill, and win by eliminating all who would oppose them.)\n- This role can only spawn if there are two or more other evil factions in the game.");

		e.addField("Goal:", "Eliminate all who oppose the Villains. ");
	});

	register_role(["deliveryboy", "delivery_boy", "db", "278"], "Town", "Delivery Boy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 278");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deliver your target a surprise.");

		e.addField("Attributes:", "- Your target will be forced to target themselves.\n- You may not use your ability on roleblock or control immune players.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["asbspotem", "279"], "Mafia", "A Small But Significant Portion Of The Entire Mafia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 279");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You're three other Mafia roles in the GIM thread chosen at random, other than those that are in Town of Salem. ");

		e.addField("Goal:", "Mafia goal.");
	});

	register_role(["fivekidsinatrenchcoat", "five_kids_in_a_trenchcoat", "five_kids", "fivekids", "fkiat", "280"], "Town", "Five Kids in a Trenchcoat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 280");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prank up to 5 players each night. You visit them and do nothing. ");

		e.addField("Attributes:", "- You're 5 players. (You have 5 votes, must be killed 5 times, can be targeted as though you were 5 players, etc.)");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["based_psychiatrist", "basedpsychiatrist", "bp", "280"], "Neutral", "Based Psychiatrist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 280");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Abduct the whole ass town into your lab for a day (night ability).");

		e.addField("Attributes:", "- The following day after abducting the Town, before any messages are processed, they will be sent to you. You may edit these messages to your pleasing before posting them to the town. You may similarly decide votes and whispers.\n- You will be removed from the town during this day, and while you may still interact otherwise, you may not be lynched nor vote/message.");

		e.addField("Goal:", "Gaslight a shit ton of people and/or conduct a social experiment. The host defines whether or not you succeed in this.");
	});

	register_role(["dyna", "dynamite", "281"], "Town", "Dynamite", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 281");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant a Bomb at someone's house.\n- Defuse a Bomb.\n- Detonate a Bomb.");

		e.addField("Attributes:", "- Defusing a Bomb deactivates the Bomb.\n- You may only have one active Bomb at all time.\n- Detonating a Bomb deals a powerful rampage attack.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["difference", "282"], "Town", "Difference", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 282");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Discover the positive difference between two players.");

		e.addField("Attributes:", "- Target two players each night. You will discover the positive difference between their role numbers.\n- You may not target yourself.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["caino", "cainoarukat", "caino_arukat", "283"], "Neutral", "Caino Arukat", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 283");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target an alive player. They will be planted within a spot of your choice in the cube. They will be notified of this, but won't know where they are in the cube. Every day/night, along with their ability, they must choose a direction—up, down, left, right, forwards or backwards. Their ability will be redirected to a different sector in respects to their current position and the direction they chose. If the ability were to escape the cube, it would affect everyone not currently in Caino's dimension. If the direction chosen leads to an empty square, the target is essentially roleblocked.\n- Caino is also forced inside the cube, in a sector which he himself may choose on Day 1.");

		e.addField("Attributes:", "- You have a 3x3 cube dimension that you may virtually maintain each night.");

		e.addField("Goal:", "Survive, but make sure at least three people are inside your cube when the game ends. ");
	});

	register_role(["apprentice", "284"], "Mafia", "Apprentice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 284");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You have one charge of every single ability of the other mafia roles in the game.");

		e.addField("Goal:", "Mafia goal.");
	});

	register_role(["fuckcaino", "fuck_caino", "285"], "Other", "Fuck Caino", {subCat: "Caino"}, (e) =>
	{
		e.setDescription("Post 285");

		e.addField("Alignment", "Fuck Caino", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Reroll this and any Caino Arukat roles immediately. Additionally, prevent Caino Arukat from being rolled in the future.");

		e.addField("Goal:", "Win as whatever role you reroll to.");
	});

	register_role(["genius", "286"], "Neutral", "Genius", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 286");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Play the 1, 2, 3 game with an opponent each night.");

		e.addField("Attributes:", "- During the day, select a player to challenge them to a match of the 1, 2, 3 game. This will roleblock them, but will not activate any abilities that activate from being roleblocked.\n- If you win, you will gain one of your three wins.\n- If you lose, your target's defense will raise by one value for the night.\n- If there is a tie, nobody profits.\n- You may not challenge yourself.");

		e.addField("Goal:", "Win three matches.");

		e.addField("HOW THE 1, 2, 3 GAME WORKS:", "- Both players receive a hand of nine cards: three 1s, three 2s, and three 3s.\n- The game has nine rounds in which each player plays either a 1, 2, 3.\n- The player who played the higher value card will receive a point. If both players played the same card, then neither of them receive a point.\n- The player who has the most points after the ninth round wins.");
	});

	register_role(["leader", "287"], "Mafia", "Leader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 287");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Send your goon to deal a basic attack at someone.");

		e.addField("Attributes:", "- TIs will see your goon visiting.\n- Bodyguards will kill your goon, but wont die.\n- If your goon dies, you will attack instead.");

		e.addField("Goal:", "Mafia goal.");
	});

	register_role(["magikill", "288"], "Coven", "Magikill", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 288");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a lethal wall of electricity.\n- Throw forth a toxic spray.\n- Cause a fiery explosion.");

		e.addField("Attributes:", "- The electric wall will prevent your target from visiting.\n- The toxic spray will poison your target. This is Astral.\n- The explosion will deal a Basic attack to your target and their visitors.\n- Your abilities have a three night cooldown.\n- With the Necronomicon, you have no cooldowns.");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["rioter", "289"], "Neutral", "Rioter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 289");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reassign everyone's roles once you are lynched.");

		e.addField("Attributes:", "- Once you are lynched, all of the roles of every alive player will be randomly reassigned to another player.\n- Nobody will receive the role they already had.");

		e.addField("Goal:", "Get yourself lynched.");
	});

	register_role(["timelordjester", "timelord_jester", "tj", "290"], "Neutral", "Timelord Jester", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 290");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you're lynched, you win, but the entire game resets without you in it, beginning again from Day 1.");

		e.addField("Goal:", "Get lynched and cease to exist.");
	});

	register_role(["ritualist", "291"], "Coven", "Ritualist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 291");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice another Coven member at night.");

		e.addField("Attributes:", "- When you sacrifice another Coven member, you will deal an Astral Unstoppable attack to them.\n- After you sacrifice a player, they may haunt a player of their choice the following night, dealing an Astral Basic attack to their target.\n- With the Necronomicon, you may sacrifice any non-Coven member, dealing a Basic attack to them.\n- If a player were to haunt you after you sacrificed them, their ability will fail.\n- You cannot sacrifice yourself.\n- You cannot sacrifice someone if you had successfully sacrificed someone the night before.\n- <https://wikimafia.fandom.com/wiki/Ritualist>");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["instant_ramen_maker", "instantramenmaker", "irm", "ramen", "292"], "Town", "Instant Ramen Maker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 292");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cook instant ramen for someone each night.");

		e.addField("Attributes:", "- The next day, they will be able to take all their day actions twice. This include day abilities, voting, and anything other game action they would do during the day.\n- You may cook for yourself.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["jinx", "293"], "Coven", "Jinx", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 293");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse someone each night.");

		e.addField("Attributes:", "- When you curse your target, they will have an Astral visit for the night that you curse them.\n- The night after you curse your target, they will roleblock their target for that night, along with performing their original ability.\n- With the Necronomicon, your target will no longer roleblock their target. Instead, they will deal a Basic attack to their target.\n- If any target you cursed does not visit anyone the night after you curse them, or they would roleblock or attack a Coven member when visiting, they will be roleblocked or attacked instead.\n- <https://wikimafia.fandom.com/wiki/Jinx>");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["magician", "294"], "Coven", "Magician", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 294");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Receive a list of all of the roles in the game.");

		e.addField("Attributes:", "- At the start of the game, you will receive a list of all of the roles that are in the game. You will not know who has which role.\n- With the Necronomicon, you may choose a role in the game, and you will deal a Basic attack to the player with that role.");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["familiar", "295"], "Coven", "Familiar", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 295");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist a Coven member in the day.\n- With the Necronomicon, deal a basic attack at your target.");

		e.addField("Attributes:", "- The next day, the Coven member will have their Necronomicon effect for the night.\n- You may not assist 2 days in a row.\n- When you kill someone, you will devour them until only a skeleton is left, obscuring their role and last will.\n- You may not devour twice in a row.");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["enchantress", "296"], "Coven", "Enchantress", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 296");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone each night.");

		e.addField("Attributes:", "- With the Necronomicon, you will enchant each player you roleblock. The next time an enchanted player is visited by another player, they will be roleblocked and dealt a Basic attack.\n- If an enchanted player is visited by another player on a night after you enchant them, your effect will be Astral. If an enchanted player is visited by another player on the night that you enchant them, your effect will not be Astral.");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["morphologist", "morph", "297"], "Coven", "Morphologist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 297");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transform a player into a wild beast to kill another player on every even-numbered night.");

		e.addField("Attributes:", "- Transforming a player into a wild beast will force them to deal a Basic attack to your other target. This will replace the action of the player you transform into a beast (i.e. roleblocking bypassing immunities). The player you transform will be given a notification that they were transformed.\n- With the Necronomicon, you may transform a player every night. The transformation notification is also removed.\n- You may not transform other Coven members, but you may transform yourself (this will not roleblock you).");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["sunsfamiliar", "suns_familiar", "sunfamiliar", "sun_familiar", "sf", "298"], "Town", "Sun's Familiar", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 298");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Night is day as well as night. (Players can talk publicly. There's a lynch. Night abilities can still be used.) When you vote for moonset at night, the night chat is closed immediately. You have two votes at night.");

		e.addField("Goal:", "Town goal.");
	});

	register_role(["m63plamenartillerypiece", "m63", "m63_plamen_artillery_piece", "artillerypiece", "artillery_piece", "299"], "Coven", "M-63 Plamen Artillery Piece", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 299");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "80x10 (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- M-63 Plamen Artillery Piece can attack a player at night. M-63 Plamen Artillery Piece cannot target its direct living neighbours.");

		e.addField("Attributes:", "- M-63 Plamen Artillery Piece can attack up to 10 times per night, however these 10 attacks can only target the same person. These kill messages will flood the target's chat log, causing them to be unable to receive any other messages that night.\n- With the Necronomicon, you can target two players per night.");

		e.addField("Goal:", "Coven goal.");
	});

	register_role(["thaumaturge", "thauma", "300"], "Coven", "Thaumaturge", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 300");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a force field and place it on a player.");

		e.addField("Attributes:", "- When a force field is placed on a player, all players that attempt to visit the player with a force field will be redirected to visit themselves. The force field will stay active until three people visit your target. (the force field deactivates the night that the third target visits, but if anyone else visits the player after the third player, it will stay active for that night)\n- Force fields take one day to create. (same mechanics as a trapper building a trap)\n- With the Necronomicon, you may create and place a force field every night. Your force fields will also collapse and deal a Basic attack to the player that the force field was on at the end of the night.\n- You may place a force field on yourself and other Coven members. Force fields placed on Coven members will not collapse if you have the Necronomicon.");

		e.addField("Goal:", "Coven goal.");
	});
};
