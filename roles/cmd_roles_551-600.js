module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["top_10_best_gim_roles", "top10bestgimroles", "top_10", "top10", "551"], "Neutral", "Top 10 Best GIM Roles", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 551");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When you roll this role, pick 10 roles in the GIM roles thread. Your role will be rerolled to one of those roles at random.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["rebel", "552"], "Neutral", "Rebel", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 552");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Role Call: Choose any non-Unique GIM role. In the following day, if someone is voted to be executed, they will instead survive and be converted into a Rebel-aligned version of the role you chose.");

		e.addField("Attributes:", "- All Rebels will share the same goal as you.\n- You will have a private chat once someone is converted, but not a factional attack.\n- You are immune to Conversion.");
		
		e.addField("Goal:", "Kill anyone who would oppose you and the Rebels.");
	});

	register_role(["detective", "det", "553"], "Town", "Detective", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 553");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Question someone each night.");

		e.addField("Attributes:", "- When you question a player, you will know if they have a connection to the previously questioned player or not.\n- If two players are connected, then they are part of the same faction. If they are not connected, then they are not part of the same faction.\n- You cannot question a Town Power role or a player that was revived by a Retributionist. If you ever question one, your ability will fail.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gambler", "554"], "Neutral", "Gambler", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 554");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- If you win a bet, you are able to bet again the next night and also choose between being able to distract a player, or obtaining a self-heal.\n- Distraction blocks a target from using their role’s night ability.\n- Obtaining a self-heal gives you powerful defence when used.");

		e.addField("Attributes:", "- If either of these players have attacked someone, or have been attacked in the last 2 nights, you learn \"Yes\", otherwise, learn \"No\".\n- Your ability is Astral.");
		
		e.addField("Goal:", "Bet correctly three times.");
	});

	register_role(["workshopper", "555"], "Neutral", "Workshopper", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 555\n*Sometimes, some midgame rebalancing is necessary, right?*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Each night, receive a random role in the game besides Workshopper. You can't receive the same role twice. You can propose changes to its attributes, abilities, or goal.");

		e.addField("Attributes:", "- In the morning, the host will post your proposed changes (preferably in a different channel).\n- All alive players in the game can anonymously vote on whether or not your changes should be accepted.\n- If the majority of alive players vote for the changes to go through, any instances of the role within the game will be changed starting the following night.\n- Any players with the role you're changing must also accept the changes for your workshopping to be succesful.\n- You have Basic defense until the first time you're attacked.");
		
		e.addField("Goal:", "Have your workshopping be accepted thrice.");
	});

	register_role(["not_even_yourself", "notevenyourself", "yourself", "ney", "556"], "Town", "Not Even Yourself", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 556");

		e.addField("Alignment", "Unique Town Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Attributes:", "- You believe you are a random non-Power, non-Unique Town role, and you have all the abilities and attributes that it comes with. However, you do not know that you are actually a this role, nor that you have any of these attributes.\n- You always have secret Invincible Defense that can't be bypassed, no matter what level of defense your supposed role normally has.\n- When investigated, you always seem suspicious.\n- At the start of the game, a random evil role that exists will be selected. If someone checks or reveals your role, the evil role will be revealed instead. This even applies to when you die.\n- In terms of reroll-related rules based on the creator of the role, they are based on the role you believe you are, rather than this one.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["grace", "557"], "Hallow", "Grace", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 557\n*Go towards the light.*");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bask the Hallow in the light of grace during the day. (1 use)\n- Bask the Hallow in your holy grace during the night. (4 use)");

		e.addField("Attributes:", "- Basking the Hallow in the light of grace will allow all Hallow members to choose a GIM role to show up as to all Investigative abilities for the following night. If they do not choose a role, a random Town GIM role with the same subalignment will be chosen for them, and they will be notified what this role is. Gain 2 Faith Points for each Investigative fooled.\n- Basking the Hallow in the holy grace will prevent anyone from visiting any Hallow member tonight. Anyone who visits a Hallow member will be notified that they were roleblocked. Gain 1 Faith Point for each visit prevented.\n- Once you have reached 4 Faith Points, the Saint will gain a Saint Point.\n- Once the Saint has become the Paragon, you will lose all but one use of your holy grace (if you have used all charges, nothing happens).");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["deddedattack", "ded", "decdecattack", "dec", "558"], "Neutral", "DedDedAttack", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 558");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Use another role's powers.");

		e.addField("Attributes:", "- You will have the defense, attack, abilities, attributes, and investigative results of another role.\n- This role cannot be: Any role from a good faction (Town, City, Army, etc.), Neutral (Benign), Lynch Immune Roles.");
		
		e.addField("Goal:", "Get lynched during the day.");
	});

	register_role(["rattler", "559"], "Town", "Rattler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 559\n*I've got a bone to pick with you!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night you may choose someone to rattle. Any non-Town visitors they receive will become rattled.");

		e.addField("Attributes:", "- Rattled players will receive the picture attached to their role card in their private chat and they will be roleblocked the following night.\n- You will not be notified if you rattle someone.\n- Roleblock Immunity");
		
		e.addField("Goal:", factions.Town.goal);

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/972686079981408286/unknown.png");
	});

	register_role(["there_are_no_faces", "therearenofaces", "no_faces", "nofaces", "tanf", "560"], "Neutral", "There Are No Faces", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 560\n*Sequence 3: Ablation of Subconscious*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose to perform a real sleep experiment during the night. (2 uses)");

		e.addField("Attributes:", "- When you choose to perform a real sleep experiment, it will be performed the following day. At the start of the day, the host will post the following message:\n> https://youtu.be/NZ-vBhGk9F4?t=226 (include the embed - i only excluded it here to save space)\n> **THERE ARE NO FACES.**\n> **THERE ARE NO FACES.**\n> **THERE ARE NO FACES.**");

		e.addField("Attributes (cont.)", "- During a real sleep experiment, each alive player will be assigned a pseudonym that they must talk through. A list of these pseudonyms will be provided upon day start. Players cannot send messages in the day chat - they must post any messages they wish to send in their private message and the host will relay them through their pseudonym. Any messages that attempt to reveal the identity of the speaker will be replaced a random message from the timestamp in the video posted at the start of the day (there is a highly liked comment from Charlotte Louche with all of the phrases in it). Players may still vote, whisper, and use day abilities, but they must refer to other players using their pseudonyms.\n- The pseudonyms assigned to each player will be different between the two days you decide to perform a real sleep experiment.\n- You have Basic defense until you are attacked for the first time.");
		
		e.addField("Goal:", "Live to see the good faction lose the game.");
	});

	register_role(["referee", "561"], "Neutral", "Referee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 561\n*I want a good, clean match. Now kill each other.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select two players during the day to force them to fight tonight. You may not target yourself until there are only four players remaining.\n- Decide what type of match will be conducted during the night.");

		e.addField("Attributes:", "- The two players you target will receive a message at the start of the night informing them that a Referee has forced them into combat.\n- At night, you may decide whether the player with the higher post number or the lower post number wins. The player that wins the fight will deal a Powerful Attack to the player that loses the fight. In the case of a tie, the player higher or lower on the role list (depending on what you chose) will be the one to attack the other.\n- If you choose yourself to duel, you will bring in an outside fighter. This fighter is assumed to have a post number of infinity.\n- All Android roles are assumed to have 10000 taken off of their role number for the purposes of your fight.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["know-it-all", "knowitall", "kia", "562"], "Neutral", "Know-It-All", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 562");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two players to quiz on Grand Idea Mafia roles each day.");

		e.addField("Attributes:", "- At the start of the next night, both players will be locked out of all channels in the GIM server except a new private one for each of them.\n- Then, they will each receive the names of the same five roles from the GIM roles thread that neither of them made, chosen at random.\n- Whichever player can better describe the general functions of more of the roles in the host's opinion wins; the other is dealt an Unstoppable attack.\n- If it's a tie, both die, unless they both get all 5 correct, in which case neither does.");
		
		e.addField("Goal:", "Kill three players with your quizzes.");
	});

	register_role(["baker", "563"], "Town", "Baker", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 563");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bake bread numerous (3) times.\n- Distribute your bread to players.");

		e.addField("Attributes:", "- Your bread will allow the receivers of the bread to use their nightly abilities on TWO targets INSTEAD of just one.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["whirlpool", "564"], "Neutral", "Whirlpool", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 564");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Throw visitors in a whirlpool and take abilities found in the wreckage.");

		e.addField("Attributes:", "- You can make a whirlpool, and any visitors to you and the players next to you (as found in the player list) will be thrown in the whirlpool. You will also be in the whirlpool.\n- If you are player 6 and player 7 is dead, visitors to player 8 go in the whirlpool.\n- Anyone in the whirlpool will use their ability on **everyone** in the whirlpool (including you). If they have limited uses of an ability, they will only use one charge.\n- You cannot be killed by an ability used on you due to a whirlpool.\n- You will get 1 use of the ability of every person in the whirlpool.\n- If you have abilities to use, you will no longer make a whirlpool, and instead use one of your abilities.\n- Once you use (# of killing abilities) + 1 ability found in the whirlpool, you can choose during the day to lose the abilities to make another whirlpool. You can choose every day this condition has been met.\n- Once you use all abilities, you will be able to make a whirlpool the next day.");

		e.addField("Attributes (cont.):", "- In the final 5, you will be able to lose any stored abilities you have every day, and will instead be able to do a powerful attack each night.\n- You cannot make a whirlpool if there are 5 or less players.\n- Roleblock Immunity.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["generic_town_role", "generictownrole", "gtr", "565"], "Town", "Generic Town Role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 565");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Storm a player's house each night. If they're attacking someone, you will be dealt the attack instead of their target, and you'll deal a Powerful attack to the attacker. If they're being attacked, you will be dealt the attack instead of them, but you won't counterattack.\n- Put on a bulletproof night at vest, granting yourself Basic defense. You may only do this once.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["generic_town_role_2", "generictownrole2", "gtr", "566"], "Town", "Generic Town Role 2", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 566");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On odd nights, choose a slot to research in the rolelist. You will learn what role takes up that slot.\n- On even nights, choose a role to research. You will learn whether or not that role is in the game.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["generic_mafia_role", "genericmafiarole", "gmr", "567"], "Mafia", "Generic Mafia Role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 567");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to watch each night. You will learn who they visit and who visits them.");

		e.addField("Attributes:", "- You may watch yourself.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["generic_mafia_role_2", "genericmafiarole2", "gmr", "568"], "Mafia", "Generic Mafia Role 2", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 568");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a Mafia member to scout for each night. If anything bad would happen to them during their visit, including being attacked or their identity being risked, you will back them out and the visit won't happen.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["generic_mafia_role_3", "genericmafiarole3", "gmr", "569"], "Mafia", "Generic Mafia Role 3", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 569");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two other players to trick each night. Their targets will be swapped without their knowledge.");

		e.addField("Abilities:", "- Roleblock and redirect immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["generic_neutral_killing_role", "genericneutralkillingrole", "gnkr", "570"], "Neutral", "Generic Neutral Killing Role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 570");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player to poison each night. They will not know they have been poisoned. The next night, they will be dealt a Powerful attack, and their role and will will be hidden and displayed as \"Melted\".");

		e.addField("Abilities:", "- You are immune to any form of delayed attacks.");
		
		e.addField("Goal:", "Murder murder murder MURDER MURDER MURDER MURDER MURDER MURDER MURDER MURDER MURDER MURDER");
	});

	register_role(["minder", "571"], "Neutral", "Minder", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 571");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player to investigate at night. You will out whether or not they are a member of the Town.\n- Choose another player to target at night. You must keep them alive to win. You may only do this once.\n- Choose to protect your target at night. They will gain Invincible defense for the night. The next day, they cannot be voted up. You may only do this twice.");

		e.addField("Attributes:", "- Roleblock and Redirect Immune\n- If you choose a member of the Town as your target, you will commit suicide and lose.\n- If your target dies at night, you will commit suicide and loes.\n- You have a layer of Basic defense that can block one attack.");
		
		e.addField("Goal:", "Ensure that your Target is alive at the end of the game, regardless of whether or not you are alive.");
	});

	register_role(["werefox", "572"], "Were", "Hag", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 572");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- During a New Moon, help a Were member hide, roleblocking them but giving them visit immunity for the night.\n- During a Full Moon, make a Were member stealthier, turning their visit Astral.");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Visit results are shared with other Weres.\n- You have Powerful Defense against the first attack used on you.\n- You are capable of winning with the Fox faction, if it exists.");

		e.addField("Hunting Moon Enhancement: Invisible to the Human Eye", "If your stealth target attacks someone, you will join in, increasing the attack tier by 1. This does not count as a visit against the attack target.");
		
		e.addField("Goal:", factions.Were.goal + " / " + factions.Fox.goal);
	});

	register_role(["wight", "573"], "Stalker", "Wight", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 573");

		e.addField("Alignment", "Stalker Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the factional kill to drain a target’s life during the night, dealing an attack to them.\n- Decay a player’s defenses. For this night and the next, their defense is 1 tier lower than what it should be.");

		e.addField("Attributes:", "- If you successfully kill a kill-capable player, you will increase your attack tier to Powerful.\n- If you are attacked and survive by any means, your Attack is reduced to Basic.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["abilitor", "574"], "Neutral", "Abilitor", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 574");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Every night, you may select another player and come up with a night ability. They will have that ability starting tomorrow morning, as long as the host approves (host shouldn't approve if it's unfun or unbalanced). They may not use their new ability at the same time as any of their other abilities.");
		
		e.addField("Goal:", "Give someone an ability that makes a difference in the game, i.e. it actually changes something. They must die before the game ends, though, and not via your ability. Also survive until the end of the game.");
	});

	register_role(["chronologist", "chrono", "575"], "Town", "Chronologist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 575");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- End the phase. ");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately.\n- Anything that would happen that phase that hasn't already happened doesn't. End-of-night actions don't resolve, including things like a Vigilante committing suicide from guilt or a Pirate attacking a target who already lost a duel.\n- You may only use your ability once during the day and once during the night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vocal_chords", "vocalchords", "576"], "Neutral", "Vocal Chords", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 576");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, guess who will send the most messages the next day.\n- If you’re correct in who you guess, the day after that, they will be unable to talk.");
		
		e.addField("Goal:", "Correctly guess who talks the most three times.");
	});

	register_role(["eyes", "577"], "Neutral", "Eyes", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 577");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, stare at a player and learn their role along with the roles of all their visitors (but you won’t know which is which).");
		
		e.addField("Goal:", "Live to have seen the roles of all living players.");
	});

	register_role(["solo_maid", "solomaid", "maid", "578"], "Neutral", "Solo Maid", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 578");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, you may choose to stop the flow of time for all players except yourself and up to one other player. The following day chat will only be accessible by you and that player. [1 use.]\n- Grant protection to yourself, gaining Invincible defense and dealing a Basic attack to one random player who attacks you. [1 use.]\n- You may perform the factional Solo Maid kill each night.");

		e.addField("Attributes:", "- You may multitask.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["bartender", "579"], "Town", "Bartender", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 579");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve drinks at your target's house, every night.");

		e.addField("Attributes:", "- If they are visited by a non Town non Neutral Benign role, all visitors are roleblocked.\n- If they visit a non Town non Neutral Benign role, roleblock your target' visitor.\n- If neither of those happen, redirect all of your target' visitors into yourself instead.\n- You will not know if you roleblocked anyone.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["town_killing", "townkilling", "tk", "580"], "Town", "Town Killing", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 580");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- You may preform 1 Town Killing action (any ToS TK or GiM (in <#970046125065265202>) TK role) at night, you may only use each role once.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vfr", "581"], "Mafia", "VFR", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 581");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to VFR at any point during the day when at least one vote for a player has been cast. If you do, the current vote will be cancelled, a completely random player will be lynched, and the day will immediately end. You may only VFR thrice.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["soul_collector", "soulcollector", "sc", "582"], "Neutral", "Soul Collector", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 582");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Grow stronger as more people die.");

		e.addField("Attributes:", "- Whenever anyone dies, you collect a soul, getting stronger.\n- If somebody comes back from the dead, you do not lose a soul.\n- If a resurrected player dies again, you do not get a new soul.");

		e.addField("The benefits of souls are:", "0: Nothing\n1: Basic Defense\n2: Basic Attack\n3: Powerful Attack\n4-6: Powerful Defense\n7-8: Target 2 people\n9: Unstoppable Attack\n10: Rampage\n11: Your vote secretly counts as 3\n12: Invincible Defense");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["duelist", "583"], "Town", "Duelist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 583");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night. If they attack you or use a delayed attack on you, their attack will be nullified, and you will attack them instead.");

		e.addField("Attributes:", "- You will know if you attacked someone.\n- Immune to Control, Redirection, Roleblock, and Conversion.\n- Your visits are Astral");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vetacide", "veta", "584"], "Town", "Vetacide", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 584");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night mark 2 people\n- Every odd day learn how many of those roles are against the town\n- Every night you may instead (twice) force all marked targets to visit you (even if they normally couldn't) and go on alert (gain basic defense, kill all visiters)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cryomancer", "cryo", "585"], "Town", "Cryomancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 585");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your ice powers for good.");

		e.addField("Attributes:", "- You can: encase someone in ice, impale someone with ice, or chill someone.\n- All abilities have a 1 night cooldown.\n- Encase: Any visitors to your target will fail and go back home.\n- Impale: Deal a Basic Attack to someone.\n- Chill: Your target will be roleblocked.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spikeweed", "586"], "Plant", "Spikeweed", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 586");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Weaken visitors to a player at night, reducing their Defense level by 1\n- Transform into a Spikerock for 4 sun");

		e.addField("Attributes:", "- Weakened enemies will be redirected to you");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["spikerock", "587"], "Plant", "Spikerock", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 587");

		e.addField("Alignment", "Plant Support?", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Weaken the visitors to a player at night, reducing their defense level by 1.\n- Spend 1 sun to also deal a basic attack to the visitors.");

		e.addField("Attributes:", "- Attacked players will be redirected to you\n- Does not roll by default");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["cry-omancer", "cry", "588"], "Town", "Cry-omancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 588");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your depression for good.");

		e.addField("Attributes:", "You can wallow, sob, or weep each night.\n- Wallow: Wallow at someone's doorstep, roleblocking them and all their visitors.\n- Sob: Sob alongside someone, causing them to be roleblock whoever they next visit.\n- Weep: Weep into the world, roleblocking every non-Town role in the game. (One use)\n- Additionally, those that visit you will be depressed and are roleblocked the following night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["kernel-pult", "kernelpult", "kernel", "589"], "Plant", "Kernel-Pult", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 589");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw butter at a player (once per. night, duh), roleblocking them.\n- Throw a kernel at someone (once per. night, duh), framing whomever they visit.\n- Spend 6 sun to temporarily transform into a Cob Cannon and deal an Unstoppable Rampaging Attack to a player. You may only do this once.");

		e.addField("Attributes:", "- You may only use one ability at a time lol");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["blue-eyes_white_dragon", "blueeyeswhitedragon", "blue-eyes", "blueeyes", "590"], "Neutral", "Blue-Eyes White Dragon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 590");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Deal a Powerful attack to a player at night.");

		e.addField("Attributes:", "- Light\n- When this role spawns in the game by any means, there will be an alert to all players that a Blue-Eyes White Dragon is in the game.\n- At night, evil factions may vote to sacrifice two faction members of their choosing. If they do so, those two members will die, you will be added to that faction, you gain access to that faction's chat, and your win condition becomes that faction's win condition. If multiple evil factions do this on the same night, the host will randomly choose which faction you join, and the factions that you don't join will not have any of their members sacrificed.\n- If you are attacked by yourself or another player with the Blue-Eyes White Dragon's attack ability, you will die unless granted another form of Powerful or higher defense.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["world_ender", "worldender", "591"], "Neutral", "World Ender", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 591");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give people false messages while waiting for your time to end the world.");

		e.addField("Attributes:", "- Choose someone at night to receive a notification. This can be any notification besides a death notification.\n- You can make the flavor text for the notification or you can make the host make the flavor text for you.\n- On Day 5, you end the world, automatically winning.\n- On Day 4, people will be told \"The **World Ender** is about to end the world!\"\n- The game cannot end if you are alive.\n- The world will not end if you are dead.");
		
		e.addField("Goal:", "End the world.");
	});

	register_role(["extremely_hypnotic_hypnotist", "extremelyhypnotichypnotist", "ehh", "592"], "Coven", "Extremely Hypnotic Hypnotist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 592");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to hypnotise each night. You can cause them to receive a fake night message, which is whatever you want. If you have the Necronomicon, you instead gain control of that player. (You have access to their private channel and you perform all game actions for them. They can't talk or do anything.)");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["hypothetically_hypnotist", "hypotheticallyhypnotist", "hyhy", "hh", "593"], "Town", "Hypothetical Hypnotist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 593");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night you may choose to send someone a fake message\n- N5+ you may instead choose to control that person into another player");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hypothermia_hypnotist", "hypothermiahypnotist", "hythhy", "594"], "Rock", "Hypothermia Hypnotist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 594");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to hypnotise each night. You can cause them to receive a fake night message, which is whatever you want. Then, the next next night, they will be roleblocked and dealt a Basic attack.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["stormbringer", "595"], "Neutral", "Stormbringer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 595\n*Don't touch that 4th place item box!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a thundercloud on a player each night.\n- Create a thunderstorm outside of your house at night (1 use).");

		e.addField("Attributes:", "- You have three thunderclouds to summon throughout the game.\n- The player you summon the thundercloud on will be notified at the start of the day that a thundercloud has been summoned on them. They must pass it onto another player. They will not be told who passed the thundercloud onto them, and they may pass it onto any player that is present during the day. Once the thundercloud has been passed to five players, its effect will take place. The thundercloud will also activate if one-third of the day phase passes without any activity.\n- It will be publicly announced who the thundercloud has effected.\n- The first thundercloud will blackmail the target for the remainder of the day and the following day.\n- The second thundercloud will prevent the target from performing any of their abilities and will drop their Defense value to None for the night overriding any protective abilities.\n- The third thundercloud will deal an Unstoppable attack to the target.");

		e.addField("Attributes:", "- Creating a thunderstorm outside of your house will prevent any visits made towards you that night.\n- You may multitask.");
		
		e.addField("Goal:", "Have three players who are not yourself struck by a thundercloud.");
	});

	register_role(["gameshow_host", "gameshowhost", "gsh", "596"], "Neutral", "Gameshow Host", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 596");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Place players in a gameshow!");

		e.addField("Attributes:", "- Every odd day, choose 3 players. They will be placed in a gameshow the next night.\n- The gameshow will go on for 1 night.\n- You make the rules of the gameshow.\n- The gameshow will be a channel that everyone can see.\n- Everyone in the gameshow will be roleblocked that night.\n- The winner gets a prize of your choice or the loser gets a penalty of your choice.\n- You may only give out 1 prize or penalty per show.\n- If possible, you must host a show with participants that did not participate in the last show.");

		e.addField("Limits to Prizes and Penalties:", "Attack: May only upgrade/downgrade attack 1 stage. Max: Unstoppable\nDefense: May only upgrade/downgrade defense 1 stage. Max: Invincible\nVoting Power: May only give someone 1 extra vote.\nKill: May only deal up to a Powerful Attack to loser.\nWin Condition: May not effect any win conditions.\n- You have Basic Defense in nights where you host a Game Show.");
		
		e.addField("Goal:", "Complete 2 gameshows.");
	});

	register_role("597", "Town", "The 597th role in Grand Idea Mafia.", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 597");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a group of three players. The first player will target the second, while the second WILL TARGET the third. As you can expect, the third will be forced to target the first.");

		e.addField("Attributes:", "- Immunity to being controlled by outside forces that would alter the effects of the 597th role.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["temptest", "tempt", "598"], "Town", "Temptest", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 598\n*Trust me.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tempt the fate of three players each night.");

		e.addField("Attributes:", "- One player out of the group of three players that you chose will be dealt the Attack value that you choose.\n- You have three uses of your ability - one with Basic Attack, one with Powerful Attack, and one with Unstoppable Attack.\n- You may not tempt your own fate.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["warlock", "599"], "Neutral", "Warlock", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 599");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Cast a spell on someone each night.");

		e.addField("Attributes:", "- When someone that has a spell cast on them dies during the night, they will be cleaned. If they are lynched during the day, however, your spell will have no effect, and they will not be cleaned.\n- If you die during the night, all cleaned targets will be revived.\n- If you are lynched during the day, all of your targets' information will be revealed, but they will not be revived.\n- You may choose to commit suicide on any night instead of casting a spell. This will revive all of your cleaned targets.\n- You have one magical barrier that grants you Basic defense until you are attacked by a non-Town role for the first time.");
		
		e.addField("Goal:", "Successfully revive at least three players upon death.");
	});

	register_role(["final_post", "finalpost", "600"], "Town", "The Final Post", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 600");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Final Abilities:", "- Select a player and they will draw their final breath. They will be notified that they will die at the END of the next night.");

		e.addField("Final Attributes:", "- You cannot die until only two people remain within the game. The final player within the game will win no matter if they have completed their goal.");
		
		e.addField("Final Goal:", factions.Town.goal);
	});
};
