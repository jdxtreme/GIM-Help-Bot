module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["kindler", "351"], "Underworld", "Kindler", (e) =>
	{
		e.setDescription("Post 351");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night.");

		e.addField("Attributes:", "- If your target is roleblock immune, cannot act, or does not act, they will become doused. You will be notified they were doused, but not why.\n- If there are no Underworld Offensive alive, and the Apocalypse is dead, you will become the Apocalypse.\n- Roleblock Immune\n- Conversion Immune");
		
		e.addField("Goal:", "Kill all who oppose the Underworld sect.");
	});

	register_role(["jailor", "352"], "Neutral", "Jailor", (e) =>
	{
		e.setDescription("Post 352");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Throw a grenade at someone every other night. This deals a Powerful attack to them and a random one of their visitors.\n- Phase someone out every night. This negates their ability and all abilities targetting them for that night.");

		e.addField("Attributes:", "- You have a magic box that stores the first non-attacking ability used against you, negating it. You then gain use of that ability.\n- You may use any number of different abilities each night.");
		
		e.addField("Goal:", "Eliminate all who would oppose you.");
	});

	register_role(["model", "353"], "Town", "Model", (e) =>
	{
		e.setDescription("Post 353");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing at someone's house every night, may include yourself.");

		e.addField("Attributes:", "- ALL abilities used on them are revealed to the public the next day.\n- You may only do this twice.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["animal_behaviorist", "animalbehaviorist", "behaviorist", "354"], "Town", "Animal Behaviorist", (e) =>
	{
		e.setDescription("Post 354");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an animal every night.");

		e.addField("Attributes:", "- If they visit or are visited by an evil role, their animal will run off.\n- After 2 people are given animals, you will know how many animals run off each night.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["mafioso", "355"], "Town", "Mafioso", (e) =>
	{
		e.setDescription("Post 355");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Foretell someone every night. At the end of the next night, you will learn 5 random roles they could be. At the end of the night after the night after that, you will learn their role exactly.");

		e.addField("Attributes:", "- Your vote counts as 2 every odd-numbered day.\n- You may not vote \"Innocent\" on odd-numbered days.\n- You have a layer of Powerful defense that can block one attack.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["inferno", "356"], "Underworld", "Inferno", (e) =>
	{
		e.setDescription("Post 356");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select an Underworld member and a doused player, teleporting visits to the latter.");

		e.addField("Attributes:", "- All visitors to the target Underworld member are, without their knowledge, redirected to the doused player.\n- Anyone who's visit would have produced a notification to the Underworld member will become doused.\n- You may redirect 4 times.\n- If the Apocalypse is dead and there are no Underworld Offensive roles alive, you will become the Apocalypase.\n- Immune to Roleblock, Control, and Conversion.");
		
		e.addField("Goal:", "Kill all who oppose the Underworld sect.");
	});

	register_role(["magic_clone", "magicclone", "358"], "Coven", "Magic Clone", (e) =>
	{
		e.setDescription("Post 358");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Choose someone during the day to learn their ability to use at night.");

		e.addField("Attributes:", "- You can use your target's ability at night.\n- With the Necronomicon, any ability you learn will be permanent.\n- With the Necronomicon, you will get an ability to deal a basic attack to 1 player.\n- With the Necronomicon, you can use all your permanent learned abilities at the same time every night.");
		
		e.addField("Goal:", "Kill all who would oppose the Coven.");
	});

	register_role("359", "Other", "Elkcaster Mage", (e) =>
	{
		e.setDescription("Post 359\nGoal is N/A, that means this one is an invalid!");
	});

	register_role(["sans", "360"], "Town", "Sans", (e) =>
	{
		e.setDescription("Post 360");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- bones or smth (use an attack)");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["analyst", "361"], "Town", "Analyst", (e) =>
	{
		e.setDescription("Post 361");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player every full moon.");

		e.addField("Attributes:", "- You will learn their faction. (Town, Mafia, Coven, Neutral, Etc)\n- Framed/Doused/Hexed/Etc players show up as Mafia/Neutral/Coven/Etc\n- Roles with Detection Immunity show up as Town.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["clothing_seller", "clothingseller", "clothing", "362"], "Town", "Clothing Seller", (e) =>
	{
		e.setDescription("Post 362");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sell clothing to a player every night.");

		e.addField("Attributes:", "- At the end of each night, learn how many people with clothes visit another person with clothes. You wont know who visits who.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["personal_jesus", "personaljesus", "jesus", "363"], "Neutral", "Personal Jesus", (e) =>
	{
		e.setDescription("Post 363");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Call someone to allow them to confess their misdeeds.");

		e.addField("Attributes:", "- Choose someone during the day to call.\n- Players that you call will be notified that they have been reached out to by a Personal Jesus and may choose to confess a sin they have committed in this game.\n- If a player chooses to tell a sin to you (i.e. something they have been informed about), you will receive the details of that sin, and they will receive Powerful defense (or Invincible if they already have Powerful) for that night.\n- Once you have received sins from three players, you must choose someone the next day to reveal their sin publicly. This information will be revealed to everyone at the end of the day.");
		
		e.addField("Goal:", "Receive sins from three players and expose one player's sins.");
	});

	register_role(["absolute_will", "absolutewill", "364"], "Town", "Absolute Will", (e) =>
	{
		e.setDescription("Post 364");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player each night. If they have an ability or attribute that can look at, edit, or hide the will of a player other than them, deal an Overkill attack to them.");

		e.addField("Attributes:", "- Last Wills can't be looked at or edited by players they don't belong to. Last Wills can't be hidden upon death. This attribute persists even if you die or are removed from the game.\n- Your role will be rerolled to another Town Support role if there's no non-Town roles that can look at, edit, or hide other players' wills. However, your first attribute still persists.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["essence_of_speed", "essenceofspeed", "speed", "365"], "Neutral", "Essence of Speed", (e) =>
	{
		e.setDescription("Post 365");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Passively speed up the game.");

		e.addField("Attributes:", "- All phases are half their length while you are alive.\n- When only 5 players (excluding yourself) remain, all phases are reduced to 1/3rd their duration.\n- You have another role along with this role. You will have that role’s abilities and attributes in addition to this role. \n- If your other role has no defense, you keep the basic defense of Essence of Time.");
		
		e.addField("Goal:", "Complete your other role’s win con.");
	});

	register_role(["firebrand", "366"], "Town", "Firebrand", (e) =>
	{
		e.setDescription("Post 366");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Douse someone in gasoline or ignite all doused targets at night.\n- Hose someone's house down at night.");

		e.addField("Attributes:", "- Only non-Town roles will know if they were doused. However, they will not know if they were hosed down.\n- Hosing down a player removes your gasoline from them. You will not remove another Firebrand's gasoline or an Arsonist's gasoline.\n- You may douse a player and hose down a player on the same night.\n- You may ignite your doused targets and hose down a player on the same night.\n- You may only ignite your doused targets once.\n- You will not ignite another Firebrand's doused targets or an Arsonist’s doused targets, nor will they ignite yours.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["butcher", "367"], "Neutral", "Butcher", (e) =>
	{
		e.setDescription("Post 367");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill someone every night.");

		e.addField("Attributes:", "- You may decide to skin them. If they die, they will appear as the Butcher, and they will use your Last Will instead of their own. You can also change their cause of death to any other killing role.\n- Otherwise, you may decide to clean them, obscuring their role, last will and cause of death.\n- You may only clean twice.");
		
		e.addField("Goal:", "Kill anyone who would oppose you.");
	});

	register_role(["scorcher", "368"], "Underworld", "Scorcher", (e) =>
	{
		e.setDescription("Post 368");

		e.addField("Alignment", "Unique Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Whenever a player is killed, gain the ability to douse.\n- You cannot gain charges unless you have 1 or less charges.\n- If the Apocalypse is dead and there are no Underworld Offensive roles alive, you will become the Apocalypse.\n- Conversion Immunity");
		
		e.addField("Goal:", "Kill all who oppose the Underworld sect.");
	});

	register_role(["courier", "369"], "Town", "Courier", (e) =>
	{
		e.setDescription("Post 369");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guide someone each night.");

		e.addField("Attributes:", "- When you guide a player, you will make their visit Astral. You will also temporarily remove any framing from them.\n- If your target would be roleblocked or controlled, you will scare the visitor away.\n- If you attempt to guide a Town Power or Mafia Head role, your ability will fail. You will not be notified of this.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["incarcerator", "370"], "Town", "Incarcerator", (e) =>
	{
		e.setDescription("Post 370");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Patrol at someone’s house at night.");

		e.addField("Attributes:", "- While patrolling someone's house, you will detain all visitors except for the Jailor and another Incarcerator.\n- You will know if you detained someone, but they will not know that they were detained.\n- You will not learn the names or roles of people you detain.\n- Detained targets will be roleblocked the night after you detain them.\n- If you are roleblocking your detained targets, you will not be able to patrol at someone's house.\n- If you are roleblocking your detained targets, you will gain control and roleblock immunity.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["blaster", "371"], "Underworld", "Blaster", (e) =>
	{
		e.setDescription("Post 371");

		e.addField("Alignment", "Unique Underworld Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Destroy someone's house with a burst of lava.");

		e.addField("Attributes:", "- You may only target non-doused players.\n- Visitors to your target's house will learn your name, even if your target is protected.\n- You have two attacks.\n- If the Apocalypse dies, you will graduate to the Apocalypse. You have priority for graduation.");
		
		e.addField("Goal:", "Kill all who oppose the Underworld sect.");
	});

	register_role(["man_in_the_painting", "maninthepainting", "painting", "372"], "Neutral", "Man in the Painting", (e) =>
	{
		e.setDescription("Post 372");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone. They may only communicate in reactions for the following day.");

		e.addField("Attributes:", "- You may only communicate in reactions, including in your private channel. If the host forgot to/just didn't post anything there, then like skill issue I guess\n- You can't use regional indicators >:(");
		
		e.addField("Goal:", "Successfully have a conversation with at least two people.");
	});

	register_role(["mfw", "373"], "Neutral", "Mfw", (e) =>
	{
		e.setDescription("Post 373");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Everyone Sends an emote everyday showing their current mode (can be emoji instead)\n- If anyone sends a emote/emoji that is opposite yours, attack them with over 9000 attack power");
		
		e.addField("Goal:", "Kill anyone to winwin\nwin*");
	});

	register_role(["interrogator", "374"], "Town", "Interrogator", (e) =>
	{
		e.setDescription("Post 374");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Pick someone to open up a chat with at night every day.");

		e.addField("Attributes:", "- You'll be shown as \"Interrogator.\"");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["jailkeep", "375"], "Town", "Jailkeep", (e) =>
	{
		e.setDescription("Post 375");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep someone in your jail at night.");

		e.addField("Attributes:", "- Jailkeeping someone fails all visits against them, while roleblocking them.\n- You may jailkeep yourself.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["harlequin", "376"], "Neutral", "Harlequin", (e) =>
	{
		e.setDescription("Post 376");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Choose someone's home to stay at.\n- Or choose someone to follow.");

		e.addField("Attributes:", "- If you stay at someone's home and they get attacked, your defense value Is lowered to none and you get attacked instead.\n- If you follow someone and they attack someone else, your defense value Is lowered to none and you will get attacked instead.\n- You will deal an Unstoppable atk to someone of your choice after dying.");
		
		e.addField("Goal:", "Die in the night.");
	});

	register_role(["loudmouth", "377"], "Town", "Loudmouth", (e) =>
	{
		e.setDescription("Post 377");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep watch outside a player's house.");

		e.addField("Attributes:", "- Your target will know who their visitors are, unless they are killed or roleblocked.\n- If your target dies, you will learn their attacker's name.\n- If you stay home, you will announce the names of your visitors at the start of the next day, even if you die.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["young_boy", "youngboy", "378"], "Town", "Young Boy", (e) =>
	{
		e.setDescription("Post 378");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone's house to watch during the night.");

		e.addField("Attributes:", "- If that Person gets attacked, you will tell one random person neighbouring the attacked the name of the attacker.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["practicioner", "379"], "Town", "Practicioner", (e) =>
	{
		e.setDescription("Post 379");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On odd nights, choose a target, and heal all players visiting your target.\n- On even nights, choose a target, and heal all players your target visits.\n- Once per game, you may select yourself, healing everyone in the game.");

		e.addField("Attributes:", "You will know if you *and* how many people you heal with your abilities.");
		
		e.addField("Goal:", "town except pronounced like own would by itself so it’s like tone");
	});

	register_role(["engineer", "380"], "Town", "Engineer", (e) =>
	{
		e.setDescription("Post 380");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Construct a sentry at night.\n- Place a constructed sentry at someone's house. The sentry will deal a Powerful attack to 1 random visitor who is not a member of the same faction as the player whose house the sentry is placed at.\n- Destroy a constructed sentry.");

		e.addField("Attributes:", "- You may only have 1 constructed sentry at a time.\n- Once a sentry attacks a player, it will disappear.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["mole", "381"], "Town", "Mole", (e) =>
	{
		e.setDescription("Post 381");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a tunnel between 2 players.");

		e.addField("Attributes:", "- The 2 now share all results they get, like invests, transport, roleblock, etc...if one gets rbed, the other one knows the other was rbed.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["genwunner", "382"], "Neutral", "Genwunner", (e) =>
	{
		e.setDescription("Post 382");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- The game is Pokémon Red Version (1996) and isn't Grand Idea Mafia (hell). \n- You may reroll this role for free if you don't want to play Pokemon. (Even if you're its creator.)");
		
		e.addField("Goal:", "Defeat Blue and become the Champion of Kanto.");
	});

	register_role(["dreamwalker", "383"], "Mafia", "Dreamwalker", (e) =>
	{
		e.setDescription("Post 383");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone have a nightmare about someone else each night.");

		e.addField("Attributes:", "- Your target will be scared away if they attempt to visit the player they have a nightmare about.\n- If a player is given a second nightmare, it will replace their first nightmare.\n- If you die, your targets will no longer have their nightmares.\n- You cannot make someone have a nightmare about themselves.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["pestilence", "384"], "Neutral", "Pestilence, Horseman of the Apocalypse", (e) =>
	{
		e.setDescription("Post 384");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- You may choose to Rampage at a player's house each night.")

		e.addField("Attributes:", "- You will automatically attack anyone who visits you, including the Jailor.\n- Detection Immunity, Roleblock Immunity, and Control Immunity\n- Your Forthcoming is not announced.")

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["voidslime", "385"], "Neutral", "Voidslime", (e) =>
	{
		e.setDescription("Post 385");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the end of each night, before actions are processed, you will be provided with a list of all effects that would happen. You may choose up to three of them. They don't happen. ")

		e.addField("Goal:", "Prevent as much fun as possible.");
	});

	register_role(["werewolf_convert", "werewolfconvert", "ww_conv", "wwconv", "386"], "Neutral", "Werewolf but it can convert", (e) =>
	{
		e.setDescription("Post 386");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, attempt to convert your target into a Werewolf. If the target cannot be converted or the faction is full, you will rampage at the target's house.");

		e.addField("Attributes:", "- When more than one Werewolf is alive, they will gain a shared chat and vote for who to convert.\n- The youngest Werewolf is always the one who carries out the action.\n- If you don't select a target, you will rampage at your own house on Full Moon Nights.\n- If the target has powerful defense, or is a member of the Coven or Mafia, they cannot be converted.\n- Once 4 Werewolves are alive, you cannot convert new members, only attack them.\n- You have Detection Immunity, but only during non-Full Moon Nights.");
		
		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["suffering", "387"], "Neutral", "Suffering", (e) =>
	{
		e.setDescription("Post 387");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Each night, choose two players. That night, they're roleblocked through immunities. The following day, they can't talk or vote. At the start of the next night, they lose all abilities, attributes, immunities, and Defense, and at the end they're dealt an Overkill attack.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["winsconsin", "388"], "Neutral", "Winsconsin", (e) =>
	{
		e.setDescription("Post 388");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, convert someone's role into Winsconsin.");
		
		e.addField("Goal:", "Convert the entire town into Winsconsin");
	});

	register_role(["word_eater", "wordeater", "389"], "Neutral", "Word Eater", (e) =>
	{
		e.setDescription("Post 389");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a word each night. All instances of that word in all roles' rules texts will be replaced with another word of your choice.");
		
		e.addField("Goal:", "Town day Basic vote one dead schizophrenia.");
	});

	register_role(["dimensional_mage", "dimensionalmage", "dimensional", "dm", "390"], "Neutral", "Dimensional Mage", (e) =>
	{
		e.setDescription("Post 390");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, split the current playerlist in half, creating 2 separate games out of this one game. The players assigned to each game will be selected randomly. This includes dead players (who will remain dead). (1 use. Cannot be used on the first night.)\n- At night, choose a player. Everyone who visits that player will be dealt a Basic attack. If nobody visits that player, then they will be dealt a Basic attack.");

		e.addField("Attributes:", "- Astral\n- Any roles which have abilities or attributes which depend on another specific player will assume that player is dead if they are separated into different games.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["drunk", "391"], "Neutral", "Drunk", (e) =>
	{
		e.setDescription("Post 391");

		e.addField("Alignment", "Neutral (Random)", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible (Variable)", true);

		e.addField("Attributes:", "- You will secretly be a different Neutral role.\n- You will not learn your true role until you are attacked once.\n- You have Invincible Defense that will go away after you are attacked once, even if you didn't need it.");
		
		e.addField("Goal:", "Learn your true role and complete its goal.");
	});

	register_role(["talented", "392"], "Neutral", "Talented", (e) =>
	{
		e.setDescription("Post 392");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You have another random role in addition to this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["copycat", "393"], "Mafia", "Copycat", (e) =>
	{
		e.setDescription("Post 393");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night phase you may chose to copy another roles ability and use it as your own.\n- You may only copy three times.");

		e.addField("Attributes:", "- If you copy a killing role, you will only deal a basic attack.\n- The role does not have to be in the game to copy.\n- You may not copy unique roles.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["lighter", "394"], "Underworld", "Lighter", (e) =>
	{
		e.setDescription("Post 394");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mark a player during the day.\n- Follow a player during the night.");

		e.addField("Attributes:", "- If the player you're following visits your marked target, douse them and all other visitors to the marked player.\n- If the Apocalypse is dead and there are no Underworld Offensive, you will become the Apocalypse.\n- Conversion and Control Immune");
		
		e.addField("Goal:", "Underworld Goal");
	});

	register_role(["topaz", "395"], "Rock", "Topaz", (e) =>
	{
		e.setDescription("Post 395");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player and cover the Rocks'™️ tracks during the night.");

		e.addField("Attributes:", "- Covering the tracks at a player will cause any investigative result on a Rock member to return as a member of the Town, and any non-Rock member to return as a Rock. You may only do this three times.\n- The Topaz has 4 extra votes they may use at any time during the day (not the trial tho). These votes will be public, however they won't be tied to the Topaz. Each extra vote is discarded after use.");
		
		e.addField("Goal:", "Rock Goal");
	});

	register_role(["maid", "396"], "Mafia", "Maid", (e) =>
	{
		e.setDescription("Post 396");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may choose to stop the flow of time for all players except for yourself, a random living Mafia (Killing) role, and one player of your choosing. The following day chat will only be accessible by the three of you. (This means nobody else can even see the channel.) For the purposes of both voting and voting majority, only the players inside this restricted day chat are considered. [1 use.]\n- Grant protection to another Mafia player, granting them Basic defense and dealing a Basic attack to one random player who attacks the player you are protecting. [1 use.]");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["turquiose", "turq", "397"], "Rock", "Turquoise", (e) =>
	{
		e.setDescription("Post 397");

		e.addField("Alignment", "Unique Rock Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Barricade the Rock Headquarters™️, preventing attacks on Rock members\n- Disarm a player during the night");

		e.addField("Attributes:", "- Barricading gives all Rock members (including yourself) Powerful Defense for the night. You may only do this once.\n- Disarming will roleblock the player if they attack a Rock member that night. Otherwise, it does jack shit. You may only do this three times.");
		
		e.addField("Goal:", "Rock Goal");
	});

	register_role(["sexyman", "398"], "Town", "Sexyman", (e) =>
	{
		e.setDescription("Post 398");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Seduce someone each night.");

		e.addField("Attributes:", "- They will be forced to visit you every night until you die for the rest of the game.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["wm_caporegime", "wmcaporegime", "caporegime", "399"], "Mafia", "WM Caporegime", (e) =>
	{
		e.setDescription("Post 399");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a Mafia ability each night.");

		e.addField("Attributes:", "- You have one charge of each Mafia role that is not in the game.\n- When you use a charge of another Mafia role, you may use any ability that role has, but may only use that ability one time.\n- You do not have charges of Mafia Head roles, Mafia Espionage roles, or the Mafioso.\n- You may change yourself into a role that you still have the charge of on any night.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["philosopher", "400"], "Neutral", "Philosopher", (e) =>
	{
		e.setDescription("Post 400");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Once per phase, during the first 12 hours of that phase, you may target someone, presenting them with a simple choice:  Ally or Betray. If no response is received by the end of the phase, their choice will default to Ally.");

		e.addField("Attributes (Initial):", "- If they select Ally, you will gain a point and have basic defense in the next phase. Also, you must choose an ability from [Sheriff Check, Doctor Heal, Escort Roleblock] for them to be able to use in addition to their regular ability during the next night. If they select Betray, you will lose a point, and they may choose an ability from [Consigliere Check, Doctor Heal, Escort Roleblock, Extra Basic Attack, Extra Powerful Attack (only useable once for all players)] to use during the next night in addition to their regular ability.\n- You are roleblock and redirection immune.\n- You start with 2 points. If you reach 5 points, you will leave the game in victory(die)... However, if you reach 0, your Attributes and Goal will be swapped out for their Alternate versions.");
		
		e.addField("Goal (Initial):", "Obtain 5 points.");

		e.addField("Attributes (Alternate):", "When you perform your action, select a target to attack (can be different). If your Ally/Betray target chooses Ally, you must choose an ability from [Sheriff Check, Doctor Heal, Escort Roleblock] for them to be able to use in addition to their regular ability during the next night, and you will attack your attack target at the end of the phase with a Basic attack. If they choose Betray, they will be attacked by an Powerful attack.\n- You are roleblock and redirection immune.");
		
		e.addField("Goal (Alternate):", "Kill all who would oppose you.");
	});
};
