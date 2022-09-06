module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["sorcerer", "1001"], "Coven", "Sorcerer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1001");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn or Upgrade a spell at day\n- Use a learned spell at night.");

		e.addField("Attributes:", "- During Day 1, choose 3 spells to learn.\n- Every day after Day 1, you may choose to learn a new spell, or upgrade a spell you have learned.\n- All spells have a 2 night cooldown.\n- With the Necronomicon, your base spells have no cooldown, you learn the upgraded version of all base spells, and can learn upper spells, which each have a 1 night cooldown and cannot be upgraded. Gain detection immunity. You gain the Necronomicon last.");

		e.addField("Base Spells:", "Fireball: Deal a basic attack.\nUpgraded Fireball: Deal a powerful attack.\n\nFreeze: Roleblock your target.\nUpgraded Freeze: Roleblock 2 targets tonight and the following night.\n\nStatic: Charge 2 players. If a charged player visits another charged player, both are dealt a basic attack and lose their charge. This has no cooldown, and players do not know they are charged.\nUpgraded Lightning: Charge 4 players.\n\nWhirlwind: Players visiting your target unknowingly visit themselves instead. This cannot target coven members.\nUpgraded Whirlwind: Target 2 players, 1 may be coven.\n\nNatural Protection: Give yourself and another player basic defense. Any player protected by you will be told they were attacked and protected.\nUpgraded Natural Protection: Give powerful defense instead, and attack 1 visitor.");

		e.addField("Upper Spells:", "Meteor: Deal a powerful attack to 2 players.\n\nBlizzard: Roleblock all non-coven players. Roleblocks through immunity. Gain roleblock immunity the night you use this.\n\nLightning: Deal a powerful attack to a target and all their non-coven visitors and any non-coven player they visit that night.\n\nTornado: Redirect all abilities to random non-coven members. Gain roleblock immunity while using this.\n\nEarthquake: Deal a basic attack to 3 targets.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["deductiletter", "dl", "1002", "37u"], "Unseen", "Deductiletter", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1002\nConverted from: Investiletter");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate (Night): Investigate a player to figure out what letter their role begins with.\n- Deduce (Day): Guess a letter. At the beginning of the night, all Unseen will know how many of roles begin with that letter that are alive, and how they’re distributed between factions. 2 uses.");

		e.addField("Attributes:", "- Deduce cannot be affected by frames.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["nytimes_games", "nytimesgames", "nytimes", "nyt", "1003", "39u"], "Unseen", "NYTimes Games", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1003\nConverted from: Wordle");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wordle (Night): Guess the first 5 letters of your target’s role. You’ll know which letters are in the correct spot, which ones are in the wrong spot, and which ones aren’t in the word at all.\n- Spelling Bee (Night): Choose a player. Receive half of all consonants in their role name, and one vowel.");

		e.addField("Attributes:", "- Frames do not affect you.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["forest_ghoul", "forestghoul", "fg", "1004", "45u"], "Unseen", "Forest Ghoul", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1004\nConverted from: Forest Spirit");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Memories (Night): Visit someone to create a memory.\n- Replay (Night): Check a dead player. If someone that you have a memory of targeted said player, learn what action was taken and the feedback of it.\n- Rewind (Day): Check an alive player. If someone that you have a memory of targeted said player, learn what action was taken and the feedback of it. 2 uses.");

		e.addField("Attributes:", "- If no feedback exists, you’ll simply be told that there is no feedback to receive.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["fallen_angel", "fallenangel", "fa", "1005", "47u"], "Unseen", "Fallen Angel", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1005\nConverted from: Stardust Angel");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch (Night): Give a player powerful defense. If your target is attacked, kill the attacker. The attacker will appear as a Stardust Angel and will have their will wiped.\n- Guard (Night): Give yourself powerful defense. 1 use. If you are attacked, kill the attacker. The attacker will appear as a Stardust Angel and will have their will wiped.");

		e.addField("Attributes:", "- If you kill someone, the Town will know all non-Unseen that visited your target, excluding the attacker. If nobody but the attacker and you visited them, a random non-Unseen player will be said to have visited them.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["suicide_artist", "suicideartist", "suicide", "sa", "1006"], "Neutral", "Suicide Artist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1006");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each full moon, if you're dead, reenact your death from the grave. You may attack someone, and they will appear to have been died in the way you chose when you killed yourself.");

		e.addField("Attributes:", "- On Night 1, choose a role to appear as and a method of death. You will kill yourself and appear as that role and appear to have died in that way.\n- If you would somehow be prevented from killing yourself, you will attempt to do so again every following night.");

		e.addField("Goal:", "Die to see the Town lose the game.");
	});

	register_role(["warden", "1007", "51u"], "Unseen", "Warden", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1007\nConverted from: Jailor");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imprison (Day): Choose a player. They will be hauled off to jail, roleblocking them and bypassing roleblock immunity. They will be given Powerful defense.\n- Execute (Night): Execute your target. 3 uses.\n- Kidnap (Night): Kidnap a target and keep them in jail the entire next day, blocking them from seeing the next day chat. 1 use.");

		e.addField("Attributes:", "- You may speak to your jailed and kidnapped target. You and the Unseen will hear your target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["trick_or_treater", "trickortreater", "treater", "tot", "1008", "191u"], "Unseen", "Trick or Treater", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1008\n*Halowen!*\nConverted from: Caroler");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trick (Night, 3 uses): Choose a player to trick. If your target does not visit another player, they will receive a list of three random alive non-Unseen players and will be informed that one of them is evil. This will appear as if a Caroler sung to them. If your target visits another player, your ability fails.\n- Treat (Night, 2 uses): Choose to treat the Unseen. At the end of the night, the Unseen will receive a list of three players and the role of one of them.");

		e.addField("Attributes:", "- You will not lose a charge of Trick if your target does not stay home.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["consul", "1009", "52u"], "Unseen", "Consul", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1009\nConverted from: Mayor");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal (Day): Reveal yourself as the Consul. For the rest of the day, you will have 3 votes. 1 use.\n- Voting Fraud (Night): Block a player from being lynched the next day. If they get enough votes, the day will end without them dying. 1 use.");

		e.addField("Attributes:", "- Consul cannot be converted from a Mayor who has already revealed - a revealed Mayor is unconvertable.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["train_station_leader", "trainstationleader", "train", "tsl", "1010"], "Town", "Train Station Leader", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1010");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Train Station Leader may give a player a ticket, letting them ride the train for the rest of the game, giving them invincible defense when they choose to ride the train, they may use their ability while riding once.");

		e.addField("Attributes:", "- At the start of day 1, all players will be notified a train has entered the town.\n- Roleblock, Control, Redirect immune.\n- You may not ride the train, even if redirected into giving yourself a ticket.\n- Players may leave the train at any time; but will need another ticket to re-enter.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["atomic_chess_world_champion", "atomicchessworldchampion", "acwc", "1011", "790u"], "Unseen", "Atomic Chess World Champion", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1011\nConverted from: Atomic International Chess Grandmaster");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Duel (Day): Select a player. The following night, you will challenge them to a Atomic Blitz 3 | 2 chess game on chess.com. This duel shares the same rules as Atomic International Chess Grandmaster’s.\n- Nuke (Night): Send a nuke to someone’s house. This is a rampage attack, but it is only Powerful, and visitors only take a Basic attack. 0 uses, gain 1 use each time you win a game.");

		e.addField("Attributes:", "- You can duel someone and send a nuke in the same night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["olympian", "1012", "194u"], "Unseen", "Olympian", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1012\nConverted from: Runner");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Train (Night): Choose to train for your sprint at night. You will gain 1 skill for doing this.\n- Sprint (Day): Choose to sprint. You will receive a number of alive non-Unseen players' roles equal to the number of skill you have.");

		e.addField("Attributes:", "- Using Sprint will reset the number of skill you have.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["strongman", "sm", "strong", "1013", "952u"], "Unseen", "Strongman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1013\n*Kanye West approves of this role.*\nConverted from: Macho Man");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Motivate (Night, 1 use): The Assassin's attack will be upgraded to Unstoppable tonight.\n- Weaken (Night, 1 use): The next target of the Assassin's Lacerate ability will be unable to be healed.\n- Test Strength (Night): Test someone's strength. You will learn their exact defense value for the night after all other actions resolve.");

		e.addField("Attributes:", "- Your usage of Weaken will persist until the Assassin has lacerated their next target including if you are promoted to Assassin.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["finger_pointer", "fingerpointer", "finger", "pointer", "fp", "1014", "710u"], "Unseen", "Finger Pointer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1014\n*It wasn't me.*\nConverted from: Scapegoat");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blame (Night): Choose an Unseen player and another target. You will redirect one visit from the Unseen member to your second target.\n- Talk to the Hand (Night, 1 use): All players that visit an Unseen member tonight will be roleblocked.");

		e.addField("Attributes:", "- The visits you redirect from the Unseen member using Blame will prioritize killing abilities, then investigative abilities, then any other visitors prioritizing protective abilities at the very bottom. If multiple visitors in the same category visit your target, you will redirect the player that sent in their final action first.\n- You are roleblock and redirect immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["pirouetter", "piro", "1015", "919u"], "Unseen", "Pirouetter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1015\n*We're running in circles!*\nConverted from: Ballerina");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spin (Night): Choose a target. If they used an ability, they will be redirected to a different alive non-Unseen player.\n- Perform (Night, 2 use): Choose a target. You will perform at their house roleblocking all of their visitors.\n- Take for a Whirl (Night, 1 use): The Unseen will receive all whispers sent for the day after this ability is used.");

		e.addField("Attributes:", "- Roleblock Immune");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["summoner", "1016", "493u"], "Unseen", "Summoner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1016\n*...but I suspect they have something to do with the occult.*\nConverted from: Occultist");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Final Words (Night): Choose a dead player. Receive any feedback from abilities used by or on that player on the night they died.\n- Hopping Realms (Day, 1 use): Choose an alive player. Your target will receive all messages sent in dead chat for the remainder of the day, but will not be able to access the current day chat. Your target will regain access to the current day chat after the day ends.");

		e.addField("Attributes:", "- While you are alive, all dead Unseen members will be able to talk to the Unseen at night. Keep this attribute if you are converted to Assassin.\n- If you were converted from Occultist, your spirit list from before your conversion will stay intact. You may choose any number of players to remove from your list, but you will not be able to add any more players. This does not count as an ability.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["bounty_hunter", "bountyhunter", "bounty", "bh", "1017", "795u"], "Unseen", "Bounty Hunter", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1017\nConverted from: Police");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Survey (Night): Watch for visitors. You will roleblock all non-Unseen visitors, and attack those who have visited them multiple times.\n- Vest (Night): Put on a bulletproof vest and gain basic defense. 2 uses.\n- Hunt (Day): Select a player and guess their role. If it is correct, you will roleblock and kill them tonight. 2 uses.");

		e.addField("Attributes:", "- If your Hunt target's role is incorrect, you will lose a charge, but not face any other penalty.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["product", "1018", "282u"], "Unseen", "Protuct", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1018\n*What is the product of number 1 and number 2? A right mess.*\nConverted from: Difference");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Calculate (Night, 2 use): Choose two players. You will receive the product of both of their post numbers.\n- Powers of 2 (Night, 2 use): Choose a player. You will receive the product of their post number and a random power of 2 up to 256.");

		e.addField("Attributes:", "- You will not be informed which power of 2 your target's role was multiplied by when using Powers of 2.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["physician", "1019", "846u"], "Unseen", "Physician", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1019\nConverted from: Herbalist");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal Inspection (Night): Spend two pills to heal a player and give them Powerful defense.\n- Interrogation (Night): Spend three pills to reveal a player's role.\n- Poisoned Pills (Night): Spend three pills to poison your target or all their visitors.\n- Silencing Pills (Day): Spend four pills to block someone from talking for the rest of the day.");

		e.addField("Attributes:", "- All herbs will convert into pills. Gain (n/2 rounded up) pills each night, where n is the night number.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["hero", "1020"], "Town", "Hero", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1020");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, decide if you wish to stay up and patrol the town.");

		e.addField("Attributes:", "- If you patrol, you will prevent a random evil's attack by saving their target, even if the attack was astral or indirect.\n- You cannot prevent suicides or town-aligned attackers. However, you can prevent an evil from killing another evil.\n- Disguises and frames will not influence who you can protect.\n- You will learn the would-be victim's name, or if (somehow) no evils attacked anyone that night.\n- The person you save won't know you rescued them.\n- If you haven't patrolled in the previous night, the attacker will only learn that their target was rescued by a hero.\n- If you patrol two nights in a row, the attacker will also learn your name, and you will be unable to speak in the following day.\n- If you choose to patrol a third night in a row without resting, you will automatically die at the end of the night, even if someone tries to heal or protect you.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hydrangea_gardener", "hydrangeagardener", "hydrag", "1021", "150u"], "Unseen", "Hydrangea Gardener", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1021\nConverted from: Hydrangea");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Raindance (Day): Summon a storm at night. Only Unseen will be told of this. Players that visit will be drenched in water. You will be told all of the players who are not drenched the following day. 3 uses.\n- Thunderstorm (Night): Strike someone's house with a bolt of lightning. They will be roleblocked. Players without defense will be turned away from visiting, and you will know who isn't. 2 uses.");

		e.addField("Attributes:", "- Thunderstorm will not roleblock if Everfrost is in the game.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["iris_gardener", "irisgardener", "irisg", "1022", "151u"], "Unseen", "Iris Gardener", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1022\nConverted from: Iris");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch (Night): See who visits your target. You may use this on even nights once.\n- Stalk (Night): See who your target visits. You may use this on odd nights once.\n- All-Knowing (Night): See both who your target visits and who visits them. One use.");

		e.addField("Attributes:", "- When you die, you may use your scheduled ability once more (Watch on an odd night, Stalk on an even night). The Unseen will get your result.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sage_gardener", "sagegardener", "sageg", "1023", "152u"], "Unseen", "Sage Gardener", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1023\nConverted from: Sage");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal (Night): Learn how many members of any faction are alive.\n- Discover (Night): Learn if your target is Town or evil.\n- Weigh (Day): Learn if two players win together. 3 uses.");

		e.addField("Attributes:", "- You are unaffected by frames.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["silphs_manager", "silphsmanager", "silph", "1024", "404u"], "Unseen", "Silph's Manager", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1024\nConverted from: MissingNo");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "\"Modkill\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Delete a non-Unseen role");

		e.addField("Attributes:", "- Anybody whose role is deleted dies.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["thyme_gardener", "thymegardener", "thymeg", "1025", "153u"], "Unseen", "Thyme Gardener", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1025\nConverted from: Thyme");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spy (Night): Learn the roles of all players who visit your target.\n- Falsify (Night): Give a false notification to your target, or give false feedback to override correct feedback. 2 uses.");

		e.addField("Attributes:", "- Your feedback does not need to be accurate to the target's role - yes, you can tell an Investigator that their target is not suspicious.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["super_idol", "superidol", "idol", "1026"], "Neutral", "Super Idol", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1026");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **I know you don't think you're all that great** — Weaken another player each night. At the start of the next day, they will be given a new rolecard that is a slightly weaker version of their role, as determined by the host.");

		e.addField("Attributes:", "- **But I'm just blown away by you every day** —  You will be informed of new roles of your weakened targets when they get their new rolecards during the day.\n- **You live in your own amazing way** — Weakened players will have the option to deal a Powerful attack at night instead of taking their night action. They may only do this once.\n- **You're never swayed to give up, your passion's blazing like a flame** — If a weakened player successfully kills someone, at the start of their next day, they'll be given a new rolecard that's a significantly stronger version of their original role, as determined by the host. You will be informed of the new role.");

		e.addField("Goal:", "**Like a flame, how you warm me up** — Have two strengthened players win the game.");
	});

	register_role(["copycat", "1027", "829u"], "Unseen", "Copycat", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1027\nConverted from: Plagiarizer");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, visit a player, and learn who made their faction.");

		e.addField("Attributes:", "- Classic ToS factions are listed by the person who made a role for that faction first in <#970046125065265202>.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["azalea_gardener", "azaleagardener", "azaleag", "1028", "154u"], "Unseen", "Azalea Gardener", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1028\nConverted from: Azalea");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot (Night): Shoot a target at night. If a non-Unseen player visits your target, you'll shoot them. If multiple do, you'll shoot nobody. 2 uses.\n- Rampage (Night): Shoot everyone that visits your target, and your target. 1 use.");

		e.addField("Attributes:", "- If Shoot fails, you will not lose a shot.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["dahlia_gardener", "dahliagardener", "dahliag", "1029", "155u"], "Unseen", "Dahlia Gardener", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1029\nConverted from: Dahlia");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect (Day): Choose a player. Then, choose two more. If your first target visits either of your targets, roleblock them and attack them.\n- Decipher (Night): Choose a player. If they're visited by any non-killing role, attack the visitor and learn your target's role.");

		e.addField("Attributes:", "- Decipher is unaffected by frames. Inspect will not roleblock if Everfrost is in the game.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["water_worker", "waterworker", "water", "1030"], "Town", "Water Worker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1030");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send clean water to someone's house. If they have Defense of any kind, it will be increased by 1 tier.\n- Send dirty water to someone's house. If they have Defense of any kind, it will be reduced by 1 tier.\n- Pollute the entire town's water supply. EVERYONE's Defense will be reduced to None, and all attempts to raise it will have no effect.");

		e.addField("Attributes:", "- None of your abilities will notify your targets.\n- All of your abilities are Astral.\n- You may only pollute the town's water supply once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nettle_gardener", "nettlegardener", "nettleg", "1031", "156u"], "Unseen", "Nettle Gardener", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1031\nConverted from: Nettle");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Urticate (Night): Sting all who visit your target.\n- Targeted Sting (Night): Sting your target. They will not know that they were targeted.");

		e.addField("Attributes:", "- Stings are the same as with Nettle.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["wisteria_gardener", "wisteriagardener", "wistg", "1032", "157u"], "Unseen", "Wisteria Gardener", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1032\nConverted from: Wisteria");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imprison (Day): Choose a target to lock in your garden during the night. This will roleblock them, but give them Basic defense. They will get Powerful defense if they are Unseen.\n- Execute (Night): Execute your imprisoned target. 3 uses. You may choose to block protective roles from visiting your target, but only once.\n- Interrogation (Night): Learn your imprisoned target's true role immediately. 2 uses, you may use this in the same night as Execute.");

		e.addField("Attributes:", "- You can speak to your target. All of the Unseen can hear them.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["calendula_gardener", "calendulagardener", "caleng", "1033", "158u"], "Unseen", "Calendula Gardener", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1033\nConverted from: Calendula");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Aid (Night): Give a target Powerful defense. You will know if your target is attacked, and the roles and names of all attackers. If they are Unseen, they will know if they are attacked.\n- Heal (Night): Heal a target. No benefits of Aid exist, but you may cure your target of poison. 1 use.");

		e.addField("Attributes:", "- Aid cannot cure poison.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ultraguard", "1034", "172u"], "Unseen", "Ultraguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1034\n*COME ON, MOTHERFUCKER, COME ON.*\nConverted from: Superguard");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ultraguard (Night, 1 use): Guard the Unseen tonight. If any of the other Unseen members are attacked, you will deal an Unstoppable Attack to all players that visit the Unseen, give all other Unseen members Powerful Defense for the night, and deal an Unstoppable attack to yourself.\n- Hyperguard (Night): Choose another Unseen player. You will make their visit Astral and up their Defense by one value.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["lavender_gardener", "lavendergardener", "laveng", "1035", "159u"], "Unseen", "Lavender Gardener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1035\nConverted from: Lavender");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect (Night): Protect a target, giving them Powerful defense against one attack. You will deal a Basic attack to any non-Unseen attackers. If they have defense or if your target is attacked multiple times, you will not protect or attack, but learn the names and roles of all attackers.\n- Distract (Night): Distract all protective roles on a target. They will not be notified of this. 2 uses.");

		e.addField("Attributes:", "- Distract is not a roleblock, it simply causes protective roles to visit but not use their ability on their target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["dungeon_master", "dungeonmaster", "dm", "1036", "173u"], "Unseen", "Dungeon Master", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1036\n*Sometimes it's in my best interest if your door never unlocks.*\nConverted from: Keymaster");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lock In (Night, 3 uses): Follow the Assassin. Prevent any non-Unseen member from visiting the Assassin's target. Cannot be used while the Assassin is using 2-For-1.\n- Faulty Key (Day, 2 uses): Give someone a faulty key. They may choose to lock themselves in their house at night preventing anyone from visiting them, but it will roleblock them through immunity. This will appear as if a Keymaster gave them a key.");

		e.addField("Attributes:", "- A player who uses your faulty key to lock themselves in their house will have their key stop working. They will not be present during the next day phase due to being locked in their house. They will be locked in their house the next night as well.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["lily_gardener", "lilygardener", "lilyg", "1037", "160u"], "Unseen", "Lily Gardener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1037\nConverted from: Lily");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Healing Lily (Night): Heal your target and all their visitors. You are able to protect yourself.\n- Dead Lily (Night): Cause your target and all their visitors to receive incorrect feedback. 2 uses, usable once while dead if you still have charges.");

		e.addField("Attributes:", "- Healing Lily can protect anyone - including yourself and Plaguebearers.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["mint_gardener", "mintgardener", "mintg", "1038", "161u"], "Unseen", "Mint Gardener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1038\nConverted from: Mint");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sow (Night): Plant a mint plant at a target's home. It takes a day to activate, but will provide Powerful defense.\n- Self Destruct (Night): Destroy all mint plants that you have set up, also preventing the targets from being visited.");

		e.addField("Attributes:", "- If a minted target is attacked, you may choose between Self Destructing all of them, or simply letting them die.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["cantaloupe", "canta", "tlctfgrooin", "1039", "184u"], "Unseen", "The Levitating Cantaloupe That Fires Gamma Rays Out Of Its Nipples", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1039\n*hu--*\nConverted from: The Flying Pumpkin That Shoots Laser Beams Out Of Its Ass");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cantaloupe Things (Night): Choose a target. You will have a 50% chance to fire gamma rays at them dealing a Basic attack, a 25% chance to learn their exact role, and a 25% chance to permanently lower their Defense to None.\n- Aim (Night, 1 use): Choose a target. You will deal a Powerful Attack to them if they cannot win with you. You will have a 75% chance of dealing a Basic Attack to them if they do win with you.");

		e.addField("Attributes:", "- Anyone who visits you has a 25% chance of being dealt a Basic Attack.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["rosemary_gardener", "rosemarygardener", "rmg", "1040", "162u"], "Unseen", "Rosemary Gardener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1040\nConverted from: Rosemary");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Infuse (Night): Grant a target Basic defense, roleblock immunity, and control immunity for that night.\n- Complete Infusion (Night): Grant the effects of Infuse to the entire Unseen for that night. 1 use.");

		e.addField("Attributes:", "- Control and roleblock immune.\n- You are able to protect from indirect and astral attacks.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["slotvestigator", "1041"], "Town", "Slotvestigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1041");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player and recieve a list of 3 Rolelist Slots. One of them is the player's correct slot. At least one will always be some kind of a Town Slot, as long as the Rolelist has Town Slots.\n- Investigate a player to learn precisely which Rolelist Slot they are in.");

		e.addField("Attributes:", "- You may only learn a player's exact Rolelist Slot once.\n- This role cannot roll if the Rolelist is All/Any.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["dicentra_gardener", "dicentragardener", "diceng", "1042", "163u"], "Unseen", "Dicentra Gardener", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1042\nConverted from: Dicentra");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform (Night): Block anyone from visiting your target.\n- Misdirect (Night): Send anyone who visits an Unseen member to another target without them knowing. 1 use.");

		e.addField("Attributes:", "- Misdirect bypasses control immunity.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["inanod", ":inanod:", "1043"], "Town", ":InaNod:", {subCat: "Investigative"}, (e) =>
	{
		e.author.iconURL = "https://cdn.discordapp.com/emojis/774990963310985226.gif";

		e.setDescription("Post 1043");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- :InaNod:vestigate a player each night. The host will attempt to describe their role as best as possible using one emote, which can be any emote they have access too including ones from other servers if they have Nitro.");

		e.addField("Attributes:", "- Actual role-specific emotes like the Umbrae ones cannot be used, and factional emotes cannot be used.\n- Emotes that could describe most or a significant amount of an evil faction, like ⚡ or 🐦 for Thundercry, cannot be used to describe roles from that faction.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["persuader", "1044", "275u"], "Unseen", "Persuader", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1044\n*:smirk:*\nConverted from: Manipulator");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Persuasion (Night): Choose a player. Redirect their target to another alive player.\n- Offer (Night, 1 use): All players using a protective ability during this night will be redirected to a player of your choosing.");

		e.addField("Attributes:", "- You are roleblock and redirect immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["gardenia_gardener", "gardeniagardener", "gg", "1045", "164u"], "Unseen", "Gardenia Gardener", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1045\nConverted from: Gardenia");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distribute (Night): Hand out gardenias at night.\n- Reveal (Day): Reveal yourself as the Gardenia Gardener to gain 3 votes that day, then 2 votes the day after. 1 use, and only if all living players have gardenias.");

		e.addField("Attributes:", "- Gardenias spread the same as Gardenia's would.\n- Once all living players have a gardenia, you can hear whispers regardless if you reveal or not.\n- You cannot be converted into a Gardenia Gardener after revealing as a Gardenia.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["soldato", "1046", "67u"], "Unseen", "Soldato", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1046\nConverted from: Vigilante");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Eviscerate (Day): Shoot a player during the day, causing them to bleed, they will die the next night unless a doctor heals them.\n- Frenzy (Night): Shoot a player at night, appear as Vigilante, you no longer have guilt of any kind.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["nightshade_gardener", "nightshadegardener", "nsg", "1047", "165u"], "Unseen", "Nightshade Gardener", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1047\nConverted from: Nightshade");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack Tonic (Night): Attack a player, using up your attack tonic if they die.\n- Heal Tonic (Night): Heal a player, using up your heal tonic if they are healed.\n- Two-For-One (Night): Use both tonics in one night, even if one is used. 1 use.");

		e.addField("Attributes:", "- Using one tonic will restore the other.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["digger", "1048"], "Town", "Digger", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1048");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two players each night. Dig a Trench in the first player's yard, and Pile all that dirt onto the second player's yard.");

		e.addField("Attributes:", "- Trenches and Piles last two nights, including the night that they're made.\n- If a Trench and a Pile is on the same yard, they will cancel each other out and have no effect.\n- If a player's yard has a Trench, one of their visitors will be roleblocked at random.\n- If a player's yard has a Pile, they will have Astral Immunity - Astral abilities will count as visits when used against that player.\n- You are immune to Trenches and Piles.\n- Players will not be notified when Trenches and Piles are left in their yard.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ultimatum", "1049", "955u"], "Unseen", "Ultimatum", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1049\n*Don't you dare look back.*\nConverted from: Destined");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ultimate Destiny (Night, 3 use): Choose two players. If one of them dies, the other will die via the same method immediately after.\n- Faith of Others (Night, 2 use): Choose two players. The second player will receive all night feedback sent to the first player instead of their actual night feedback, including ability feedback.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["phlox_gardener", "phloxgardener", "phloxg", "1050", "166u"], "Unseen", "Phlox Gardener", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1050\nConverted from: Phlox");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Purify (Night): Prevent a target from being voted the next day. 3 uses, you may use this while dead once if you have charges.\n- Mistify (Day): Scramble all votes. Nobody but Unseen will know this. Votes will be randomly distributed on anyone that can be voted. 1 use.");

		e.addField("Attributes:", "- Mistify can cause an Unseen to be killed by accident.");

		e.addField("Goal:", factions.Unseen.goal);
	});
};
