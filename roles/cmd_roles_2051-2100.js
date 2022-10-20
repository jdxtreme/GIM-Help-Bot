module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["tol_fool", "tolfool", "fool", "2051"], "Neutral", "ToL Fool", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2051");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Hide (Night, 2 uses): Grants basic defense by hiding from attackers.\n- Deceive (Night, 2 uses): Make yourself appear framed to the Blue Dragon tonight.");

		e.addField("Attributes:", "- Poor Fellow: If the Fool is executed, then all those who voted to execute them will lose 1 charge from all limited-use abilities. In addition, there can be no trials the next day.");
		
		e.addField("Goal:", "Convince others that YOU are guilty of treason; get yourself lynched.");
	});

	register_role(["tol_scorned", "tolscorned", "scorned", "2052"], "Neutral", "ToL Scorned", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2052");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Distract (Day, 2 uses): Silence target player for 4 hours. They will not be able to speak or use abilities for the duration.\n- Incriminate (Night): Make a target appear framed tonight. They will remain as marked until you mark someone else.\n- Disguise (Night, 2 uses): Player will appear as chosen class, if executed tomorrow. They will remain as marked until you mark someone else.");

		e.addField("Attributes:", "- Resolve (1 use): Basic Defense for 1 night if attacked, then lose this passive. Lose this passive when you achieve your objective.");
		
		e.addField("Goal:", "See two marked targets lynched.");
	});

	register_role(["tol_inquisitor", "tolinquisitor", "inquisitor", "2053"], "Neutral", "ToL Inquisitor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2053");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Interrogate (Night): Determine target player's class if marked as a Heretic. Can't target the starting King.\n- Ruthless Efficiency (Night, 3 uses): Attack target player with an enchanted staff. Unhealable. Can't target the starting King.");

		e.addField("Attributes:", "- Relentless Pursuit (1 use): Become death immune for 1 night if attacked, then lose this passive. Lose this passive when you achieve your objective.\n- At the beginning of the game, 3 Blue Dragon players will be randomly marked as Heretics. The Inquisitor will not know who the Heretics are, and the Heretics do not know each other. The Inquisitor will know their classes. Heretics will have a starting message notifying they are a Heretic.");
		
		e.addField("Goal:", "Live long enough to see all Heretics die.");
	});

	register_role(["psyop", "2054"], "Neutral", "Psyop", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2054\n*Trending: Dream*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pretend to use an ability that your disguised role has. You will not actually use the ability, but it will produce feedback messages as though you did use it.");

		e.addField("Attributes:", "- At the beginning of the game, the host will randomly assign you a role to be disguised as for the duration of the game. When you die, you will appear to be that role. Additionally, any abilities or attributes that would return information based on your role will actually return information based on your disguised role.\n- The role that the host assigns to be your disguise must be able to produce feedback messages in either the day chat or other players' personal channels. If they roll one that cannot do so, they will reroll it until they get one that does.\n- If any of your chat messages, will, or custom-made feedback messages (made by roles like Hypnotist that can make whatever messages they want) directly or indirectly indicate that you are a Psyop, your win condition becomes None.\n- If you are in a low-activity time zone, you may reroll this for free.");
		
		e.addField("Goal:", "Ensure that either your name, your disguised role, or an ability or attribute of your disguised role is mentioned a minimum of 5 times each day by players other than yourself. You may win while dead. If you are hanged, this amount is lowered to 1.");
	});

	register_role(["revive_everyone", "reviveeveryone", "revive", "everyone", "re", "2055"], "Town", "Revive Everyone", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2055");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive everyone.");

		e.addField("Attributes:", "- You may only use your ability on Night 3 exactly.\n- You can't be prevented from using your ability by any means.\n- Your ability can't be stopped or interfered with by any means.\n- You can't die at night until Night 3.\n- You can't claim your role until you use your ability.\n- If you claim your role or a situation arises in which it's extremely obviously you're your role, you're removed from the game.\n- You can't not use your ability.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["\"k\"", "k", "2056"], "Neutral", "\"K\"", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2056");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Send a player into crippling debt, causing them to become __Desperate__.\n- __Control__ a Desperate player. They will become __Paid__ for their services.");

		e.addField("Attributes:", "- The first time you are attacked, your bodyguards will defend you with Invincible defense against all attacks, they will not come to your aid the second time around.\n- The first time you are lynched, a Paid player will be lynched instead of you if available, if not, you die.");

		e.addField("Status Effects:", "__Desperate__: Player gains Vulnerable defense until Paid.\n__Control__: Reveal's the players role, and forces them into your second target.\n__Paid__: Player has won the game, regardless of wincondition fulfillment.");
		
		e.addField("Goal:", "See to it that three Paid players win, where they would not have otherwise.");
	});

	register_role(["cats_tomorrows_ink", "catstomorrowsink", "cats", "tomorrows_ink", "tomorrowsink", "cti", "2057"], "Town", "Cats, Tomorrow's Ink", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2057");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Fade into Forever** — Investigate a player each night. The host will find the best image or piece of art that they can with a reasonable amount of effort that depicts your target's role and, if possible, them doing what they're doing tonight.");

		e.addField("Attributes:", "- Your last will is automatically updated with your targets and images at all times, including your result on the night you die.\n- You can't have your role or will obscured or edited upon death by any means.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["community_role", "communityrole", "community", "cr", "2058"], "Neutral", "Community Role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2058\n*Viri, Bionic, Jd, and Zage all get credit for suggesting roles.*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Pawn** - Deal a basic attack to a target. For every 3 players you kill with a pawn, you may decide to promote the pawn into any other chess piece, giving you 1 charge of that piece\n**Knight** - Deal a powerful attack to a target, and bypass all defense values for the night (except permanent values). 2 uses\n**Bishop** - Grant yourself Powerful defense for the night and attack a target with a Powerful attack. 2 uses\n**Rook** - Deal a Powerful Rampage attack to a target player. 2 uses.\n**Queen** - You have the combined abilities of the Pawn, Bishop and Rook, and their attacking values are upped by 1. 1 use.\n**Stalk** - Choose a player to stalk at night.\n**Bankrupt** - Send a player into crippling debt, causing them to become Desperate.\n**Pay** - Control a Desperate player. They will become Paid for their services.\n**Transform** - During the day, exchange this ability for any ability in GIM. If someone has the role you tried to copy from, how sad, you die instead.");

		e.addField("Attributes:", "- Your visits are Astral.\n- The first time you would die from an attack, you are given invincible defense.\n- You may use Bankrupt and one other ability per night.\n- Stalk:\n> - At the end of the night you stalk them, as well as the night after, you will learn who they visited that night.\n> - After two nights, you will deal a Powerful attack to the players they visited the last two nights.\n> - If they did not visit, you will deal a Powerful attack to them.\n> - You can only be stalking two players at time.");

		e.addField("Status Effects:", "Desperate: Player gains Vulnerable defense until Paid.\nControl: Reveals the players role, and forces them into your second target.\nPaid: The player now wins with you as their new goal.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["inquirer", "2059"], "Sentry", "Inquirer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2059");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyze a message from an authorized target during the night, learning whether it is a lie. Message must have been sent the previous day, and you must have access to it.\n- Analyze a message from an unauthorized target during the night, learning whether it is a lie. Message must have been sent the previous day, and you must have access to it. 1 Uses.");

		e.addField("Attributes:", "- For the intents & purposes of your analyses, you may only detect full & complete lies. Partial truths and misleading information will not count as a lie.\n- You may not inquire on the validity of role or day/night action claims.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["sharihahharahahhahharazad", "shari", "motherfucker", "2060"], "Neutral", "Sharihahharahahhahharazad", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2060");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to paripapparapappapparappa each night. You'll deal a paripapparapappapparappowerful attack to them.");

		e.addField("Attributes:", "- Whenever someone other than you refers to this role by anything other than its proper name, a Grand Idea Mafia subgame is started (see 417) (see 733).\n- If you're dead and your first ability would trigger, instead a Grand Idea Mafia subgame with dead players is started (see 521).\n- You have a layer of Paripapparapappapparappowerful that can Paripapparapappapparapprevent one attack.\n- Your attributes can't start subgames from within subgames.\n- Your attributes can, at most, start one subgame every day/night cycle. ");
		
		e.addField("Goal:", factions.Neutral.goalNK + " You also win if you win at least one subgame.");
	});

	register_role(["fuck_you", "fuckyou", "host_now", "hostnow", "fyithn", "fyiathn", "2061"], "Neutral", "Fuck you, I'm the host now", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2061");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Before the game officially starts, once you confirm your role, you are given the full role list and list of roles and who has each role. You may then change the role list, and the roles that everyone has. Copium.");
		
		e.addField("Goal:", "If you don't change your own role, survive to the end of the game.");
	});

	register_role(["wolfi_herald_of_the_inferno", "wolfiheraldoftheinferno", "wolfi", "herald_of_the_inferno", "heraldoftheinferno", "whoti", "whi", "2062"], "Town", "Wolfi, Herald of the Inferno", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2062");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**The Unspeakable** — Each day, choose a player. At the beginning of the next night, they lose all abilities and attributes that night, and they must send you one integer. If they fail to do so before the night ends, you'll attack them.\n- During the day, choose to expose the player you chose last night, publicly revealing their role. Then, you attack them if their role's post number isn't the same as the integer they sent you. You may only do this once.\n- During the day, choose to eliminate the player you chose last night, attacking them. You may only do this one thousand nine hundred eighty-three times.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["super_duper_ultra_man", "superduperultraman", "super", "duper", "ultra", "man", "sdum", "2063"], "Town", "Super Duper Ultra Man", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2063");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ultra-Powerful: You have 3 lives. If you would die, you instead lose a life. Lose all 3 lives and you die. This applies to lynching, which will reveal your role.\n- Ultimate Savior!: Select a target each night. If they would die, you instead lose a life and protect them. You can protect them from literally anything including a modkill/ban.\n- Ultimate Hero Man!: You win in a 1v1 situation against anyone else automatically.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["running_up_that_hill", "runningupthathill", "running", "hill", "ruth", "2064"], "Neutral", "Running Up That Hill", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2064\n*With no problems.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**A Deal With God** — Choose a player during the day. The following night, you and that player will be placed into a night chat titled #a-deal-with-god. Your target may decide at the end of the night to accept the deal with god. If they accept, you will become their role, and they will become a Neutral Other role of their choice. This chat is cleared after every night a player declines your offer.\n- Choose a player at night. You will learn their exact role bypassing any form of detection immunity.");

		e.addField("Attributes:", "- You may only learn one player's true role.\n- The player who accepts your deal must become a Neutral Other role that is actually a role. They may not become a role that instantly rerolls into an entirely different role. If they choose a role that aligns with a particular faction, it **must** align with their previous faction.\n- If the player who accepts your deal comes from a minority faction and outs their old team members, they will be modkilled and instantly lose the game regardless of any future events. Exceptions can be made if they do this in a way deemed fair by the host.");
		
		e.addField("Goal:", "Successfully make a deal with god and fulfill your new win condition.");
	});

	register_role(["paradise", "2065"], "Neutral", "Paradise", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2065\n*A beautiful, flawless place. Nothing more.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lure a player to you. All players who visit you will be given the option of entering Paradise or not. If they visit you again, they will be forced to enter.");

		e.addField("Attributes:", "- All players in Paradise become unlynchable and are healed/purged the night they enter, but gain a downside assigned by you:\n> They cannot use night abilities during a full moon.\n> They learn your name, and you may control their actions.\n> They cannot whisper.\n- Players in Paradise cannot leave.\n- You may still make night actions when dead. Paradise still remains.");
		
		e.addField("Goal:", "Have at least one player with each downside in Paradise.");
	});

	register_role(["immolation", "2066"], "Underworld", "Immolation", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 2066\n*They say what burns the brightest also burns the fastest.*");

		e.addField("Alignment", "Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Raze a player’s house at night, dousing all players that visit them. This includes yourself.\n- Clean gasoline off yourself. Two uses.");

		e.addField("Attributes:", "- You may only use one ability per night.\n- If the Apocalypse dies, you will become the Apocalypse.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["truthmaker", "2067"], "Neutral", "Truthmaker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2067\n*If you believe it to be so, does it change the reality of things?*");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Adjust the truth of a player each night, learning their exact role,  intercepting all investigative abilities used on that player and being able to choose what result goes back to the investigator.");

		e.addField("Attributes:", "**Pure Illusion** — On Night 1, you may choose to target all players, excluding yourself.\n- At the beginning of the game, it is revealed that there is a Truthmaker in the game.\n- You may not target yourself, and you show up as evil to all investigative abilities.\n- You cannot give messages that are not results, such as messages about being roleblocked or attacked.\n- You cannot give back the actual results that they would have received.");
		
		e.addField("Goal:", "Prevent the Town from winning.");
	});

	register_role(["illegal_leave", "illegalleave", "revolutionaries", "jailor", "jailr", "2068"], "Town", "Just Another Illegal Leave Of Revolutionaries", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2068");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select someone to interrogate.\n- During the day, you may choose to... dispose of... your target. 3 uses.");

		e.addField("Attributes:", "- Roleblock, control, and redirect immune.\n- Your interrogated target will be kidnapped and missing from the next day, all town will be notified that they are missing, but not as to why.\n- They cannot perform any Day abilities or vote.\n- You may privately speak with your target, and they may speak with you.\n- You do not lose all remaining executions if you execute a Townie because we can just call it collateral damage.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vigilante_reload", "vigilantereload", "reload", "gun", "vbikhtrag", "2069"], "Town", "Vigilante but it knows how to reload a gun", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2069");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night. 0 uses.");

		e.addField("Attributes:", "- Every night you dont Shoot you will get an extra use of your ability.\n- You get 3 uses instead of 1 at the end of night 1.\n- If you shoot another Town member you will commit suicide over the guilt.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vigilante_shoot", "vigilanteshoot", "shoot", "vbikhtsmto", "2070"], "Town", "Vigilante but it knows how to shoot more than once.", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2070");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night.");

		e.addField("Attributes:", "- You have 3 uses of your ability.\n- You can use your ability multiple times per night.\n- The night after killing a townie, you will deal a basic attack to yourself. If you survive the basic attack, you won’t try and attack yourself again, but won’t be able to shoot any more.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["/join_/unjoin", "/join/unjoin", "join_unjoin", "joinunjoin", "join", "/join", "unjoin", "/unjoin", "2071"], "Neutral", "/Join /Unjoin", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2071");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- /Join a player.\n- /Unjoin a player.");

		e.addField("Attributes:", "- The first time you /Join a player, they join a new faction instead of their own. A member of a REF can’t join a good faction. If this can’t work because your target has no faction to join, this instead does nothing.\n- The second time you /Join someone, they join as a new player. This new player has a new role, and the player controls both roles. The new player won’t join factional chats.\n- The first time you /Unjoin a player, they cannot vote or talk the next day.\n- The second time you /Unjoin a player, they unjoin life (Dealt an Overkill attack)\n- You can target yourself.");
		
		e.addField("Goal:", "/Join 2 people and /Unjoin 2 people.");
	});

	register_role(["anarchist", "2072"], "Neutral", "Anarchist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2072");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Immediately attack a player during the day.\n- Attempt to turn a player to your cause.");

		e.addField("Attributes:", "- When you turn a player to your cause, they will be given a prompt: Join the Anarchists, or remain with their faction. Conversion immune roles will not be given this prompt.\n- If they decline, nothing happens. If they accept, they gain a 1-time use of your day attack and may also turn people to your cause, albeit with a 1 night cooldown. They gain your goal and you may win with them, and they win with each other. You do not know if your target accepts or declines.\n- Basic Auto-vest");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["coven_dictator", "covendictator", "dictator", "cd", "2073"], "Town", "Coven Dictator", {subCat: "Coven"}, (e) =>
	{
		e.setDescription("Post 2073");

		e.addField("Alignment", "Town Coven", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Control a player into another player.");

		e.addField("Attributes:", "- You learn your player's role, even if they're control immune.\n- Roleblock immune.\n- With the Necronomicon, become detection immune, and gain Basic attack and defense. Attack players who you control.\n- You will always get the Necronomicon on Night 3.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["punishmentionist", "pun", "2074"], "Mafia", "Punishmentionist", {subCat: "Town"}, (e) =>
	{
		e.setDescription("Post 2074");

		e.addField("Alignment", "Mafia Town", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may raise a dead Mafia member and use their ability on a player.");

		e.addField("Attributes:", "- You may only raise each dead player once.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["fathergod", "fg", "2075"], "Mafia", "fatherGod", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2075");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player to perform the factional kill instead of their normal ability. You force them to do this.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["father", "2076"], "Mafia", "father", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2076");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player to perform the facitonal kill. You do this.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["god", "2077"], "Mafia", "God", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2077");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player to perform the factional kill. You both do this.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["fat", "2078"], "Mafia", "fat", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2078");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player. Do this.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["her", "2079"], "Mafia", "her", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2079");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["dfa", "2080"], "Mafia", "dfa", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2080");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Do this.");

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["ther", "2081"], "Mafia", "ther", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 2081");

		e.addField("Alignment", "Mafia Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Detection immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["g", "2082"], "Mafia", "G", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2082");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player at night. You will convert them to the Mafia. They will be converted to a Mafia role that starts with the same letter as their current role. You cannot convert members of a different evil faction. If there is no Mafia role that starts with the same letter as their role, then cope (you still lose your use of this ability idiot). (1 use)\n- Choose a player at night. You will gain one charge of one of their abilities. The host will describe this ability as best as they can in one word.");

		e.addField("Attributes:", "- You may not gain abilities from unique roles.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["i_hate_all_of_you", "ihateallofyou", "except_oct2", "exceptoct2", "oct2", "ihaoyeotoc", "2083"], "Neutral", "I Hate All Of You, Except Oct2, That One's Cool", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2083");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. This attack is Powerful is they have a role number greater than 1000, and Unstoppable if they have a role number greater than 1995.");

		e.addField("Attributes:", "- You win with <@724246648372330556> specifically and they can win with you, no matter what their role is.\n- You have a permanent private chat with Oct2\n- You also win with and have a permanent private chat with 8: Oct2, 8: Oct2 and 8: Oct2\n- Oct2 must be in the game for this role to roll, but they can't roll this role.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["i_hate_all_of_you", "ihateallofyou", "except_rasen", "exceptrasen", "rasen", "ihaoyertoc", "2084"], "Neutral", "I Hate All Of You, Except Rasen, That One's Cool", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2084");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. This attack is Powerful is they have a role number greater than 1000, and Unstoppable if they have a role number greater than 1995.");

		e.addField("Attributes:", "- You win with <@521123471460270121> specifically and they can win with you, no matter what their role is.\n- You have a permanent private chat with Rasen.\n- Rasen must be in the game for this role to roll, but he can't roll this role.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["i_love_all_of_you", "iloveallofyou", "except_rasen", "exceptrasen", "rasen", "ilaoyertou", "2085"], "Neutral", "I Love All Of You, Except Rasen, That One's Unbased", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2085");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two people each night to work things out with each night. They are notified of this and may now win with you. Cannot target Rasen. If you are redirected to Rasen for any reason, your ability will fail.");

		e.addField("Attributes:", "- You lose if <@521123471460270121> is alive at the end of the game, no matter what their role is.\n- At the start of the game, you cannot win with anyone. This excludes any players with roles that can be reasonably assumed to be the personification of a GIM player or player(s) except for ones that personify Rasen.\n- You gain a permanent private chat with all players you may win with.\n- Rasen does not have to be in the game for this to spawn. If they are, they can't roll this role.\n- If you may can win with all players currently alive, the game will instantly end with all players that can win with you winning the game.  This attribute can trigger even if you're dead.\n- You may not win if there are any players alive at the end of the game that you have not worked things out with.");
		
		e.addField("Goal:", "Work things out with everyone alive at the end of the game.");
	});

	register_role(["i_hate_none_of_you", "ihatenoneofyou", "except_rasen", "exceptrasen", "except_viri", "exceptviri", "viri", "rasen", "ihnoyeravtos", "2086"], "Neutral", "I Hate None Of You, Except Rasen and Viri, These Ones Suck", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2086");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. This attack is Powerful is they have a role number greater than 1000, and Unstoppable if they have a role number greater than 1995.");

		e.addField("Attributes:", "- You win with everybody except for Rasen and Viri specifically and they can win with you, no matter what their role is.\n- You have a permanent private chat with everyone except for Rasen and Viri\n- You also win with and have a permanent private chat with yourself.\n- Nobody must be in the game for this role to roll, but everybody can roll this role.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["avathy", "2087"], "Neutral", "Avathy", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2087");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleplay as Lorelei during the day granting you Post 238 Adorable Catgirl Nyaaa~!'s abilities and attributes the next night. They are then removed at the start of the following day.\n- Simp for Mirage, becoming Post 1306 Tooru Saesen, Ultimate Liar.\n- Get annoyed by your nephew at night. Everyone that would visit you doesn't.\n- Get married to Cazzy during the day. The following night, you will be able to win with any players who visit you.\n- Roleplay as Veronica, dealing an Astral Basic Attack to a player, and  purging yourself for the night.");
		
		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["arbitrarily_hate", "arbitrarilyhate", "arbitrarily", "half_of_you", "halfofyou", "iahrhoy", "2088"], "Neutral", "I Arbitrarily Hate Roughly Half Of You", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2088");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a role each night. You will attack a random player who has that role.");

		e.addField("Attributes:", "- You know all roles in the game at the start of the game, but not who has which.\n- You may not directly share the information you gained from your first attribute, however you may do so partially and indirectly (such as claiming to be 566: Generic Town Role 2 and stating that a certain role is in the game).");
		
		e.addField("Goal:", "Eliminate Lunari, Accent, Oct2, Bionic, Jd, Noodle, Robotica, Del, Mac, Wolfi, and Action, not counting yourself if you're one of those players.");
	});

	register_role(["lunari_summoner_virtuoso", "lunarisummonervirtuoso", "lunari", "summoner_virtuoso", "summonervirtuoso", "lsv", "2089"], "Neutral", "Lunari, Summoner Virtuoso", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2089");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "**Indomitable Creation** — During the day, choose a player. At the start of the next night, they gain an ability from a role Lunari has made at random, except Band members' Concert abilities. This also doesn't count roles Lunari has posted but not made, like Florae or ToL roles.\n- Use an ability from any role Lunari has made. You may only do this once.");

		e.addField("Attributes:", "- You learn the abilities you give other players with Indomitable Creation.\n- If a player uses an ability given to them with Indomitable Creation, you learn their role.\n- You have a Basic autovest.");
		
		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["mac_overseer_of_flame", "macoverseerofflame", "mac", "overseer_of_flame", "overseerofflame", "moof", "mof", "2090"], "Neutral", "Mac, Overseer of Flame", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2090");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night. If they don't die, convert them to Neutral Evil and change their goal to \"See Mac, Overseer of Flame win the game.\" If they do die, they may choose whether or not to be converted within the next 24 hours, but the conversion won't be reflected in the graveyard if they do so.\n**Infernal Ultimatum** — Deal a Powerful attack to up to three players. Convert them to Neutral Evil and change their goals to \"See Mac, Overseer of Flame win the game.\"");

		e.addField("Attributes:", "- At the beginning of each night, you may decide an attack value for the night from among None, Basic, Powerful, Unstoppable, Overkill, and Negative. Negative attack revives dead players and does nothing to living players. You may only use each attack value once.\n- You may target dead players if your attack is Negative.\n- You will know at all times all players who have the goal \"See Mac, Overseer of Flame win the game.\"\n- You may multitask 133: Shrooms's ability once for literally no reason.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["rebel", "2091"], "Sentry", "Rebel", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2091");

		e.addField("Alignment", "Unique Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack any target at night. 3 uses.");

		e.addField("Attributes:", "- You require one less vote to be lynched.\n- If you kill a Sentry, you require two less votes to be lynched instead of one.\n- If you kill the Sentry (Power), you will die the following night.\n- You will always need at least 1 vote to be lynched.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["oct2_phantasmal_azure", "oct2phantasmalazure", "oct2", "phantasmal_azure", "phantasmalazure", "opa", "2092"], "Coven", "Oct2, Phantasmal Azure", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2092");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone, douse them, and poison them.\n- Roleblock someone, hex them, and cover them in frost.\n- Redirect someone, frame them, and attack their visitors.\n- Heal someone, purge them, and give them a Basic autovest.\n**Swirling Mirage** — Use all of your other abilities twice each at once, ignoring their cooldowns.");

		e.addField("Attributes:", "- You start with zero charges of Swirling Mirage. Whenever a Coven member dies or leaves the Coven, you gain one charge. You may only gain up to two charges per game.\n- All non-attacking players who visit you are secretly redirected to themselves.\n- Each of your abilities other than Swirling Mirage has a two-night cooldown.\n- If you have the Necronomicon, your abilities no longer have coolwdowns and you gain two charges of Swirling Mirage. Additionally, increase all attacks you deal, including through poison and frost, to Powerful.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["cameraman", "camera", "2093"], "Sentry", "Cameraman", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2093");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch an authorized target at night.");

		e.addField("Attributes:", "- You will know all visitors to your target.\n- If another authorized player visits your target, you will learn their faction, or learn they are neutral if they have no faction.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["robotica_curious_adversary", "roboticacuriousadversary", "robotica", "curious_adversary", "curiousadversary", "rca", "2094"], "Neutral", "Robotica, Curious Adversary", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2094");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack another player.\n- Remove a player from the game tonight and for the following day. (see 1305)\n- Choose a faction. Convert another player to a random role from that faction. This ability fails if that faction isn't in the game.\n- **Spectral Animosity** — Revive yourself, then you join an evil faction of your choice. You may only use this ability twice, but you may use it whether you're alive or dead.");

		e.addField("Attributes:", "- Conversion Immune\n- Each of your abilities has a one-night cooldown.\n- Whenever you join a faction, you gain an additional ability based on that faction, which the host decides. (see 776)");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["clerk", "2095"], "Sentry", "Clerk", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2095");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control an authorized target into another player.");

		e.addField("Attributes:", "- Roleblock, Control, and Redirect Immunity.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["aigoo_scarlet_adante", "aigooscarletadante", "aigoo", "scarlet_adante", "scarletadante", "asa", "2096"], "Neutral", "Aigoo, Scarlet Adante", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2096");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive a player during the day for the stupidest reason ever. You may only use this ability once.\n- Secretly remove a player from any factional chats they're in, and make it so they can no longer send or receive whispers from their faction members if they're part of an evil faction with a factional chat. You may only use this ability twice.\n- Weaken another player at night. You may only use this ability twice. (see 1026. All its attributes apply.)\n**Unsung Revolt** — Use an ability from any role Aigoo has made or any role mentioned in the role 1867: AccentAigoo. You may only do this once.");

		e.addField("Attributes:", "- At the end of every night, the host gives you a full priority list of the order in which all players' abilities resolved that night, but not what those abilities were. Abilities that are the same priority are sorted by player order.\n- Every time the host makes a host error, you are informed of exactly what happened. You may then gain one use of your choice of the following: a Basic attack, a Basic autovest, or a vote that counts as three.\n- All players who visit you at night become Spirals. (see 229. All its attributes apply.)\n- You may multitask.");
		
		e.addField("Goal:", "Entertain the spectators. They choose whether or not you win.");
	});

	register_role(["automaton_of_the_command", "automatonofthecommand", "automaton", "command", "aotc", "2097"], "Neutral", "Automaton of the Command", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2097");

		e.addField("Alignment", "Unique Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Whenever a player other than you uses a bot command to view a Neutral role in the day chat, you become that role immediately except you keep this attribute. Whenever a player other than you uses a bot command to view a role with a night ability that can target one player, that ability is used on that player the next night. The host may apply Rule 17 to both parts of this attribute.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["censor", "2098"], "Mafia", "Censor", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2098");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Authorize one to six players each day.\n- Choose a role at night. You appear as that role to all investigative effects.");

		e.addField("Attributes:", "- At the beginning of the night, your authorized targets will be revealed. They remain authorized until you choose new players to authorize.\n- Members of the good faction may only visit authorized targets.\n- Each time you use your ability, you must authorize at least one member of the Mafia.\n- You must use your ability every day, and you can't authorize someone three days in a row.\n- This role can't spawn with the Sentries.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["depot", "2099"], "Sentry", "Depot", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2099");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose an authorized player at day, They will be able to choose an item at Night in addition to their ability, Cannot self-target.");

		e.addField("Attributes:", "- A target can choose to pick between these 5 items:\n• Armor Plating: 2-use basic autovest.\n• Double A Batteries: Your target gains 1 use of their limited abilities, if they have none, they can act twice the next night.\n• C-gear: Once per game, They may open a permanent Day chat with anyone.\n• Scouter: They will get Psychic (55) results this night.\n• Laser Scope: Their next Single-target attack is upgraded to Powerful and nothing will be able to stop it. (Protective abilities, Roleblocks, Redirects, Delays).\n- You will not be notified which one they chose.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["dragon", "eldwfaagwabf", "tdntgaicqbsttgd", "eldwfaagwabftdntgaicqbsttgd", "2100"], "Sentry", "Extremely Large Dragon Working for an Authoritarian Government, Which Also Breathes Fire— The Dragon, not the Government, Although I Can't Quite Be Sure That the Government Doesn't", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2100");

		e.addField("Alignment", "Unique Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Breathe fire outside an authorized target's house each night, attacking all unauthorized players who visit them.\n- Breathe fire outside an unauthorized target's house each night, attacking all authorized players who visit them.");

		e.addField("Attributes:", "- If you ever successfully kill an unauthorized player who can win with the Sentries, your superiors will put you down (you're like, a really scary, fire-breathing guard dog) and immediately deal an Overkill attack to you.\n- If you ever kill an authorized player who can win with the Sentries, you won't be able to use your second ability for the rest of the game.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});
};
