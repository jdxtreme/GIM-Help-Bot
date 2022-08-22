module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["ummmmm", "ummmm", "ummm", "umm", "um", "1351"], "Town", "Ummmmm", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1351");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Muse about a player at night. You'll make up your mind and commit to killing them at some point.\n- Rethink a player at night. You'll think about their good traits and decide not to kill them after all.\n- Act on your inner desires, attacking everyone who you've committed to killing.");

		e.addField("Attributes:", "- If a player thinks about targeting you at night, but changes their target, you will be informed of their identity, and can choose whether or not to attack them tonight. This is in addition to your normal attack, and can happen multiple times.");
		
		e.addField("Goal:", "Lynch all criminals and evildoers except the \"evildoers\" is pronounced with 7 syllables.");
	});

	register_role(["_rokk", "rokk", "1352"], "Rock", "_Rokk", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1352");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Encourage a Rock at night. They will be impressed by your superior rockiness, enabling them to use their one of their abilities twice tomorrow night.\n- Rally all the Rocks, encouraging them with a valorous speech. Each and every member of the Rocks besides you will be able to use one of their abilities twice tomorrow night. The rock faction may also perform their factional kill twice.");

		e.addField("Attributes:", "- You cannot normally target yourself with your abilities.\n- However, if you're the only Rock role in the game, you will awaken your inner spirit and channel the true power of the rocks. You gain Basic defense, and the ability to self-target. Your abilities are also no longer restricted to just Rocks, so you'll be able to use them on any player in the game. Finally, you'll be able to use your abilities in addition to the factional Rock kill, and are able to use multiple abilities each night. Your alignment is also changed to Rock Head, which doesn't change anything gameplay wise, but is very cool.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["walkie", "1353"], "Town", "Walkie", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1353");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Walk behind someone at night, learning who they visit in the process.");

		e.addField("Attributes:", "- If this rolls, 1354 Talkie must roll as well.\n- You will know 1354 Talkie's name and have a private chat with them that will remain as long as you both are alive.\n- If 1354 Talkie dies, you will only have one use left of your ability. If they get revived, you will have unlimited uses again.\n- You cannot target yourself.\n- You are immune to conversion.\n- Detection Vulnerability: If someone investigates you, their results will be based on a random evil role from a faction that exists in this game, determined when the game starts. It must be from the same faction as 1354 Talkie's disguise. You won't know what that role is.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["talkie", "1354"], "Town", "Talkie", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1354");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Talk with someone at night and determine if they appear suspicious or not, following the same rules as TOS Sheriff.");

		e.addField("Attributes:", "- If this rolls, 1353 Walkie must roll as well.\n- You will know 1353 Walkie's name and have a private chat with them that will remain as long as you both are alive.\n- If 1353 Walkie dies, you will only have one use left of your ability. If they get revived, you will have unlimited uses again.\n- You cannot target yourself.\n- You are immune to conversion.\n- Detection Vulnerability: If someone investigates you, their results will be based on a random evil role from a faction that exists in this game, determined when the game starts. It must be from the same faction as 1353 Walkie's disguise. You won't know what that role is.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["particularly_sharp_rock_wielder", "particularlysharprockwielder", "sharp", "psrw", "1355"], "Rock", "Particularly Sharp Rock Wielder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1355");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone with a particularly sharp rock. You will deal your current Attack tier to your target.");

		e.addField("Attributes:", "- Every time your particular sharp rock isn't lethal, it becomes particularly sharper. Your attack tier is upgraded each time you fail to kill someone, maxing out at Unstoppable.\n- If you perform the factional Rock kill, it'll be upgraded to your current Attack tier plus 1 tier. In other words, you will potentially be able to deal an Overkill attack.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["goomba", "1356"], "Koopa", "Goomba", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1356");

		e.addField("Alignment", "Koopa Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Deal a Rampaging attack to someone.\n- Attack yourself, everyone that visits you and the visitors of those who visited you.");

		e.addField("Attributes:", "- You will die if you get hit by a Basic attack.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["pink_sauce", "pinksauce", "pink", "1357"], "Neutral", "Pink Sauce", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1357");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Drizzle some pink sauce onto a player at night.");

		e.addField("Attributes:", "- Your target along with all of their visitors will receive pink sauce.\n- If a player that receives pink sauce has already received pink sauce in the past, they will be dealt a Basic Attack and projectile vomit onto whoever they visit, giving them pink sauce.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["santa", "1358"], "Town", "Santa", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1358");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Review a player and determine them to be Good or Bad.\n- Gift a player an item during the day. They are notified.");

		e.addField("Attributes:", "- Town, Neutral Benign, Neutral Evil and Detection Immune roles appear Good. All other roles appear Bad.\n- If you are visited during a night, you cannot gift the next day.\n- You cannot gift yourself.\n- You may gift one of the following items:\n> Gun: Allows a player to deal an Astral Basic attack instead of their normal abilities.\n> Vest: Manual ability. Allows a player to gain Basic defense the night they use this instead of performing their normal ability.\n> Knife: Allows a player to deal a Powerful attack instead of their normal abilities. The slashed target will die two nights later unless protected by any death-preventing effect. They are notified.\n> Gauntlet: The target player can activate this to astralize their visits the night they do so.\n> Helmet: The target player can activate this to become Control and Redirection immune the night they do so.\n> Glasses: The target player can activate this to become Roleblock Immune the night they do so.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["armor_smith", "armorsmith", "armor", "smith", "1359"], "Town", "Armor Smith", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1359");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Manually give armor to a player. You may only do this once.\n- Set up a trap tonight, disabling your first attribute and attacking all players who visit you while granting yourself Basic defense.");

		e.addField("Attributes:", "- Those who visit you gain armor, increasing their Defense tier by 1 tier permanently. They will not be aware of the upgrade. This can stack multiple times.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["censor", "1360"], "Sentry", "Censor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1360");

		e.addField("Alignment", "Unique Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Authorize an investigation on 3 players during the day. Mandatory or random.\n- Blend in as a chosen Sentry role during the night.");

		e.addField("Attributes:", "- Your Authorized targets will be revealed each night.\n- Targets will remain authorized until the end of the following day.\n- You may not authorize yourself as a target.\n- Blending in as a Sentry role will frame yourself as that role.\n- 1 Powerful Autovest\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["scrutinizer", "scrut", "1361"], "Sentry", "Scrutinizer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1361");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Open a private chat with an authorized target each day.");

		e.addField("Attributes:", "- Private chats are opened the night after creation, and are closed after the night permanently.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["snoop", "1362"], "Sentry", "Snoop", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1362");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Snoop an authorized target each night.");

		e.addField("Attributes:", "- You will learn a random player in the same faction as the snooped target.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["sentry_eavesdropper", "sentryeavesdropper", "eavesdropper", "eaves", "1363"], "Sentry", "(Sentry) Eavesdropper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1363");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Eavesdrop an authorized target during the night.");

		e.addField("Attributes:", "- You will be given all whispers **from** your target that day at the start of the next night.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["stickler", "1364"], "Sentry", "Stickler", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1364");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Coerced an authorized target during the night.");

		e.addField("Attributes:", "- Coerced targets will be roleblocked if they are not a Sentry. You will **not** be notified of this.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["constable", "1365"], "Sentry", "Constable", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1365");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Confiscate the weaponry of an authorized target during the night.\n- Put on a bulletproof vest during the night. 1 Use.");

		e.addField("Attributes:", "- Confiscating the weaponry of an authorized target will roleblock them if they commit a Basic/Powerful attack that night.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["sentry_bodyguard", "sentrybodyguard", "bodyguard", "sbg", "1366"], "Sentry", "(Sentry) Bodyguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1366");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Guard an authorized target from direct attacks at night.\n- Guard the Censor instead of an authorized target during the night. 1 Use");

		e.addField("Attributes:", "- If your target is directly attacked or is the victim of a harmful visit, you and the visitor will fight.\n- If you successfully protect someone you can still be Healed.\n- If you guard the Censor, your visit will be Astral.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["patrol", "1367"], "Sentry", "Patrol", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1367");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Supervise the visitors of an Authorized target during the night. 2 Uses.\n- Supervise the Censor during the night instead of an authorized target. 1 Use.");

		e.addField("Attributes:", "- Supervised visitors will be given Powerful defense.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["devotee", "1368"], "Sentry", "Devotee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1368");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot an authorized target during the night. 3 Uses.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["persecutor", "1369"], "Sentry", "Persecutor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1369");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Organize a raid on an authorized target. 3 Uses");

		e.addField("Attributes:", "- Organizing a raid on a target deals an Astral Powerful attack to them.\n- You will lose 1 raid use each night you don't use it.\n- You will gain 1 raid use each time you successfully execute a dissident.\n- If you ever successfully execute a player who can win with the Sentries, your superiors will deem you incompetent and immediately deal an Overkill attack to you.\n- Roleblock immunity");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["martinet", "mart", "1370"], "Sentry", "Martinet", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1370");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Go on alert at your house during the night. 2 Uses.\n- Go on alert at another player's house during the night. 1 Use.");

		e.addField("Attributes:", "- When you go on alert, you will attack the visitors of your target.\n- If you go on alert at your house, you will also gain basic defense.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["advocator", "advo", "1371"], "Sentry", "Advocator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1371");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- License a player during the night.");

		e.addField("Attributes:", "- Licensed players, if a Sentry, may target/vote non-authorized targets for the duration of the night & proceeding day.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["minister", "1372"], "Sentry", "Minister", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1372");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Authorize an investigation on an additional player during the day.");

		e.addField("Attributes:", "- If you attempt to authorize an investigation on a player already authorized, that player will instead be **prioritized**.\n- **Prioritized** targets will have:\n>  - Their base/vest defense removed until they are no longer prioritized.\n> - Visitors be given frame & roleblock immunity\n- Your Authorized & prioritized targets will be revealed each night.\n- Targets will remain authorized/prioritized until the end of the following day.\n- If you attempt to authorize the Censor, it will automatically fail.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["chairman", "1373"], "Sentry", "Chairman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1373");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal yourself as the Chairman during the day.");

		e.addField("Attributes:", "- After revealing yourself as Chairman:\n> - Your vote will count as 3.\n> - Other Sentries may vote who you vote.\n- If you are ever protected/visited by a (Sentry) Protective role 3+ times total after revealing, your superiors will become paranoid of you and immediately deal an Overkill attack to you.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["strongman", "1374"], "Sentry", "Strongman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1374");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Intimidate an authorized target during the night.");

		e.addField("Attributes:", "- Intimidated targets will be roleblocked.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["wanted_criminal", "wantedcriminal", "wanted", "criminal", "1375"], "Neutral", "Wanted Criminal", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1375");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hide inside a player's home. Visits to you will fail tonight, but you will be affected by anyone visiting your target's home. This includes every role, including investigative roles, however it won't be explained that you were hiding in that person's home.");

		e.addField("Attributes:", "- When you're killed, grant your killer roleblock immunity, conversion immunity, control immunity and detection immunity. Their attack and defense will each be upgraded by one tier. They may use their abilities twice during the next night. If there are multiple killers, each killer gains these buffs.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["morbius", "1376"], "Neutral", "Morbius", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1376");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bite someone, If this doesn't kill, roleblock them, If this kills, Heal heal 1 HP.\n- Morbius decides it will be Morbing time in the next night, Letting him do 3 attacks while Increasing attack to Unstoppable, cannot use this one when its Morbing time.\n- Morb all over someone, they will be notified of this and will be asked to show proof if they own the movie \"Morbius (2022)\" In any Physical or Digital form, If they show valid proof, roleblock them, if they dont/dont respond, deal an Overkill attack to them, Can be used alongside your attack if it isn't Morbing time.");

		e.addField("Attributes:", "- Morbius has 4 HP, Any attack that would kill him will instead reduce his HP by 1, He will die when hit by a fatal attack when its Morbing time.\n- Morbius can only die if his HP reaches 0, or he is lynched.\n- Anything that heals Morbius will increase his HP by 1, up to a maximum of 4.");
		
		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["brainwasher", "bwer", "1377"], "Mafia", "Brainwasher", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 1377");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confuse a player tonight and redirect them to another target. They will not be informed.\n- Prepare a brainwash for a player. If they die tonight, you will puppeteer them. They will still be alive, but can't actually do anything. You can speak for them and control their votes. Abilities on the target will fail without an explanation, but it will be revealed they were brainwashed if they're lynched. You may only use this once, but it lasts permanently. The use is refunded if the ability fails.");

		e.addField("Attributes:", "- To use the second ability, the host will create a private channel with you and the target and tell them what to say. They should copy the text directly without altering anything.\n- The target is allowed refuse if the Brainwasher is doing weird or uncomfortable things, so just use common sense and keep it related to the game.\n- To make the experience authentic, the target should pretend to type for a few seconds before sending a message, to make the \"[player] is typing\" indicator.\n- Obviously, the target shouldn't hint about being brainwashed.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["birdcaller", "bcer", "1378"], "Coven", "Birdcaller", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1378");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send your crows to watch a player's house tonight. You will know how many people visit them. Your crows will permanently mark each visitor. If the visitor is already marked, your crows will prevent them from visiting, and roleblock them. This will be processed before the visit itself.");

		e.addField("Attributes:", "- With the Necromonicon, your crows will attack anyone who has a mark instead of roleblocking them, dealing a Powerful attack.\n- Roleblocking and attacking players is astral, but sending your crows to a house is not.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["cremator", "1379"], "Mafia", "Cremator", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1379");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill a player and cremate their body.");

		e.addField("Attributes:", "- Cremating their body is similar to cleaning. Their role and will are Burnt. However, their face is also Burnt and won't be recognised. They won't get the \"dead\" role but they'll still be dead, and they will just appear as Burnt in the graveyard.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["pot", "1380"], "Town", "Pot", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1380");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn how many sentences a player's role's post/website has. If they're a kettle (over 25 sentences), you'll learn the name of their role.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["magikoopa", "1381"], "Koopa", "Magikoopa", {subCat: "All-Rounder"}, (e) =>
	{
		e.setDescription("Post 1381");

		e.addField("Alignment", "Koopa All-Rounder", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transform someone into a block, Roleblocking, giving Powerful defense to them and Learning their role\n- Disappear briefly, players targeting you will instead target random people that are not in your faction.");

		e.addField("Attributes:", "- If you are killed you will learn your killed and their role");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["chain_chomp", "chainchomp", "cc", "1382"], "Koopa", "Chain Chomp", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1382");

		e.addField("Alignment", "Koopa Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a Target, Attacking anyone that visits them, if your target would die, you will die instead and they will survive.");

		e.addField("Attributes:", "- Cannot protect the same player twice in a row.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["world_revolving", "worldrevolving", "wr", "twr", "1383"], "Mafia", "THE WORLD REVOLVING", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 1383");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rotate a player. Instead of visiting their original target, they will visit the next player on player list. If they were targeting multiple people, this ability affects all their visits.\n`If they were targeting Player 14, they would instead visit Player 15. If they were targeting Player 15 in a game with only 15 players, they would instead visit Player 1.`\n- Rotate the world. Instead of visiting their original target, all players will visit the next player on the player list. You may only use this once.\n`Those targeting Player 13 would visit Player 14, those targeting Player 14 would visit Player 15, those targeting Player 15 would visit Player 1, etc...`");

		e.addField("Attributes:", "- You will always rotate players who target you, forcing them to visit the next player on the player list instead. This attribute can stack with your abilities. This attribute won't apply to actions which would roleblock you, and will actually be completely disabled on nights you're roleblocked.\n- Players will not be informed they were rotated.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["cannon_fodder", "cannonfodder", "fodder", "cf", "1384"], "Neutral", "Cannon Fodder", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1384");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Take a hit for a player each night.");

		e.addField("Attributes:", "- Every attack dealt on them will instead be dealt on you.\nFor every attack that goes through on you, you lose a layer of defense. Invincible --> Powerful --> Basic --> None --> Vulnerable");

		e.addField("Goal:", "Die in the night.");
	});

	register_role(["singer", "1385"], "Town", "{Singer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1385");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing to a player at night. They will**}** never **{**be adjacent to you on the playerlist, and if you're**}** gonna give **{**your ability to anyone that is,**}** you {will fail. The player will throw their hands**}** up **{**in the air and will be roleblocked. Players can**}** never **{**resist this, meaning roleblock immunity isn't**}** gonna let you **{**bypass anything.\n-**}** Down **{**a meal, healing yourself for the night. You will**}** never **{**be able to use this ability again after you've used it once. If you're**}** gonna run around and **{**use this ability haphazardly, then you'd be better off rerolling this role.\n- Once a game,**}** desert **{**the town, causing you to appear as if**}** you **{**left the server by removing your access to every channel in the server, removing all your roles and resetting your nickname. You return to the town after a day, and your access, nickname and roles can return.\n- **Cleave** during the day.");

		e.addField("Goal:", factions.Town.goal + "**}**");
	});

	register_role(["forboder", "fber", "1386"], "Neutral", "Forboder", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1386");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an omen each night.");

		e.addField("Attributes:", "- A player with an omen will be given a disadvantage for the rest of the game based on the omen they received.\n- You are able to choose which omen to give to your target.\n- You may not give the same player more than one omen nor the same omen to more than one player.");

		e.addField("List of Omens:", "- Anxiety: You will die if you are visited by 2 or more people.\n- Blindfold: You will no longer receive any night feedback apart from death messages.\n- Earache: Once you receive 20 whispers after receiving this omen, you will immediately die (whispers from the Forboder do not count).\n- Eyepatch: You have a 50% chance to target a random player when you use your ability.\n- Forced Hand: You will lose a use of all of your limited use abilities every time a phase passes when you could have used it regardless of whether you used it.\n- Fragile: Your abilities have a 75% chance of failing. Lose this omen the first time it causes an ability to fail.\n- Off-Centered: Your targeted abilities will target the player lower in the player list (wrapping around) by a specific number of positions.\n- Narcolepsy: After using an ability, you must wait for another full day and night cycle to pass before using another ability.\n- PR Team: You may not send more than ten messages each day.\n- Pretty Face: You will roleblock whoever you visit.");

		e.addField("List of Omens (cont.):", "- Revenge: When you visit a player, you will be dealt an attack equal to their Attack value.\n- Scurvy: Your abilities and attributes are replaced by the Pirate’s. You will regain your original abilities once you win a duel.\n- Unruly: If you do not perform your night ability, you will be poisoned.\n- Wanted Poster: You require one less vote to be lynched.\n- Whistleblower: All of your whispers will be shown publicly.");

		e.addField("Goal:", "Give out three omens that negatively impact the player receiving the omen.");
	});

	register_role(["uhhhhh", "uhhhh", "uhhh", "uhh", "uh", "1387", "1351u"], "Unseen", "Uhhhhh", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1387\nConverted from: Ummmmm");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Muse about a player at night. You'll make up your mind and commit to killing them at some point.\n- Rethink a player at night. You'll think about their good traits and decide not to kill them after all. You may perform this ability on the same night as one of your others, with the highest priority.\n- Act on your inner desires, attacking everyone who you've committed to killing.");

		e.addField("Attributes:", "- When converted, you retain your murderous thoughts about previous players.\n- If a player thinks about targeting you at night, but changes their target, you will be informed of their identity, and can choose whether or not to attack them tonight. This is in addition to your normal attack, and can happen multiple times.");

		e.addField("Goal:", "Unseen except the s is pronounced like an s");
	});

	register_role(["yekpeeber", "yek", "1388", "794u"], "Unseen", "Yekpeeber", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1388\nConverted from: Ummmmm");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Peeb 1 yek and give another player Basic defense for the night. (Beeping keys uses up the keys.)\n- Peeb 2 yeks to transport 2 players. You may transport yourself..\n- Peeb 3 yeks to give the Unseen an Invincible autovest but making the Unseen unable to convert anyone until it's broken.");

		e.addField("Attributes:", "- You will earn 1 yek every night. You can use 2 abilities per night.");

		e.addField("Goal:", "Apiarist goal.");
	});

	register_role(["girlfriend", "gf", "1389"], "Town", "Girlfriend", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1389");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Propose to someone during the day.");

		e.addField("Attributes:", "- If they accept, you'll become their girlfriend. Then, the next night, you'll redirect them to someone else and transform their visit into a Basic Attack. Then you'll both break up because you're a manipulative piece of shit, and you can propose to someone else the next day.\n- This role has the same acronym as Godfather");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ultimate_landlord", "ultimatelandlord", "ul", "1390"], "Town", "Ultimate Landlord", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1390");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give two players permissions to stay in their house. They will not be roleblocked when you use your third ability.\n- Revoke a player permission to stay in their house. They will once again be roleblocked when you use your third ability.\n- Kick all players in the game who you haven’t given permission. Every one of these players will be roleblocked other than yourself. You can‘t use this ability for three nights in a row.");

		e.addField("Attributes:", "- Roleblock Immune\n- You can multitask.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crewmate", "1391"], "Town", "Crewmate", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1391");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit one player. If they're they imposter(241), all visitors will learn their role.");

		e.addField("Attributes:", "- If nobody visits them, well you end the night immediately with you dying, and a random sabotage occurring.\nDuring sabotages, you can instead perform a task specified by the host to end the sabotage, instead of playing the minigame.\nCan only spawn with Imposter(241).\nCannot be any form of sleeper agent\nConversion immune");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["leaker", "1392"], "Underworld", "Leaker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1392");

		e.addField("Alignment", "Unique Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cause a gas leak at someone's house, Priming players who visit them.\n- Douse all primed players. 2 Uses.");

		e.addField("Attributes:", "- The next person that a Primed player targets becomes doused. Then, the status wears off.\n- Players who can no longer use the ability they were Primed with automatically become doused whenever they became unable to use it.\n- Players who are Primed are notified.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["fallen_hero", "fallenhero", "fallen", "fh", "1393"], "Neutral", "Fallen Hero", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1393");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone.\n- Add a player into your **Soul**\n- Pick a player that Is in your **Soul**. You will gain a random ability from that player.\n- Pick a player that Is in your **Soul**. You will redirect them to another player, and transform their visit into a Basic Attack.\n- Pick two players in your **Soul**. You will redirect them to each other, and transform their visit into a Powerful Attack.\n- [Soul Blast-4] When using this ability, you may pay the cost. If you do, you will deal an Unstoppable Rampage Attack the following 2 nights.");

		e.addField("Attributes:", "- **Soul**: When a player enters a **Soul**, they are roleblocked. The player remains in the **Soul** for the rest of the game (unless removed by things such as **Soul** Blast.) The user of the **Soul** knows who players in the **Soul** visit. Players in the **Soul** do not know they are in the **Soul**.\n- **Soul** Blast-X Choose exactly X players in your **Soul**, and remove them from your **Soul**. If you cannot remove exactly X players, you may not **Soul** Blast.\n- To pay the cost means to perform the actions written in [] at the start of the ability.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["fatelinker", "1394"], "Neutral", "Fatelinker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1394");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Add a player into your **Soul**.\n- Pick a player in your **Soul**, and learn their role.\n- Pick a player in your **Soul**, and any attacks dealt towards you tonight Is redirected to them.\n- Pick 2 players in your **Soul**. Player A Is controlled into Player B, and you will learn Player A's role.\n- Pick 2 players in your **Soul**. They are now linked, and share any effects such as roleblocks, redirects, poison and death.\n- [Soul Blast-3] When using this ability, you may pay the cost. If you do, you may perform up to 2 abilities the next night.\n- [Soul Blast-4] When using this ability, you may pay the cost. If you do, roleblock up to 4 players the next night, bypassing roleblock Immunity.");

		e.addField("Attributes:", "- **Soul**: When a player enters a **Soul**, they are roleblocked. The player remains in the **Soul** for the rest of the game (unless removed by things such as **Soul** Blast.) The user of the **Soul** knows who players in the **Soul** visit. Players in the **Soul** do not know they are in the **Soul**.\n- **Soul** Blast-X Choose exactly X players in your **Soul**, and remove them from your **Soul**. If you cannot remove exactly X players, you may not **Soul** Blast.\n- To pay the cost means to perform the actions written in [] at the start of the ability.");

		e.addField("Goal:", "Enact your divine fate upon the town. (Live to see the Town lose the game.)");
	});

	register_role(["immortal_fighter", "immortalfighter", "if", "1395"], "Neutral", "Immortal Fighter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1395");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "*Hell Bent*", true);

		e.addField("Hell Bent:", "This role cannot die (except for lynching). Instead, they have a Damage Zone. Each time they are visited at night, 1 damage Is added to the damage zone. Once there are 5 damages in the damage zone, this role dies.");

		e.addField("Abilities:", "- Attack a player\n- Add a player into your **Soul**.\n- [Soul Blast-2] When using this ability, you may pay the cost. If you do, you will roleblock everyone in your soul. This bypasses roleblock immunity.\n- [Soul Blast-2] When using this ability, you may pay the cost. If you do, roleblock everyone that visits you tonight. This bypasses roleblock immunity.\n- [Counter Blast-3] When using this ability, you may pay the cost. If you do, you will deal a Unstoppable Rampage Attack for the next 2 nights.\n- [Counter Blast-4] When using this ability, you may pay the cost. If you do, you will deal an Overkill Attack to up to 3 players the next night.");

		e.addField("Attributes:", "-  **Counter Blast-X** Pick X damages in your damage zone, and activate them. Once you activate a damage, you cannot deactivate It. You cannot activate an already activated damage. If you cannot activate exactly X damages, you may not Counter Blast.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["last_demon", "lastdemon", "ld", "1396"], "Neutral", "Fatelinker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1396");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "*Hell Bent*", true);

		e.addField("Hell Bent:", "This role cannot die (except for lynching). Instead, they have a Damage Zone. Each time they are visited at night, 1 damage Is added to the damage zone. Once there are 5 damages in the damage zone, this role dies.");

		e.addField("Abilities:", "- Add someone into your **Soul**.\n- Pick someone in your **Soul**. Redirect them to someone else of your choosing. May include you.\n- Tempt a player's house, redirecting all of their visitors into the next player on the player list. The last player cycles back to the first.\n- [Soul Blast-4] When using this ability, you may pay the cost. If you do, you redirect all of the players in your **Soul** to you.\n- [Counter Blast-2] When using this ability, you may pay the cost. If you do, pick a player, and remove them from the game entirely. They will be readded back the following night.\n- [Counter Blast-2] When using this ability, you may pay the cost. If you do, you may use up to 2 abilities the next night.\n- [Counter Blast-2] When using this ability, you may pay the cost. If you do, you may use your ability twice the next night.");

		e.addField("Abilities (cont.):", "- [Counter Blast-3] When using this ability, you may pay the cost. If you do, pick 2 players. They now win with you, and you open up a chat with them. If they are Town, they no longer win with Town.\n- [Counter Blast-4] When using this ability, you may pay the cost. If you do, the Town has 2 days to find and kill you, otherwise they automatically lose the game. This Is announced to the Town the following day.");

		e.addField("Attributes:", "-  **Counter Blast-X** Pick X damages in your damage zone, and activate them. Once you activate a damage, you cannot deactivate It. You cannot activate an already activated damage. If you cannot activate exactly X damages, you may not Counter Blast.");

		e.addField("Goal:", "Make everyone submit to your tempting. (Live to see the Town lose the game.)");
	});

	register_role(["twin_killer", "twinkiller", "tk", "1397"], "Neutral", "Twin Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1397");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player.\n- **Boost** a player.\n- **Intercept** a player.\n- **Twin Drive** a player.");

		e.addField("Attributes:", "- If this Is rolled, there will be at least two Twins Killers in the game.\n- At the start of the game, you will learn if the other Twin Killer Is one of your neighbours. Each time your neighbours die, you will learn if one of your new neighbours Is a Twin Killer.\n- **Boost**: Boost the player's Attack Value depending on your own. Vulnerable and None; +0, Basic: +1, Powerful: +2, Unstoppable: +3, Overkill: +4.\n- **Intercept**: If the player Is attacked, you will instead take the hit. Every time you succesfully intercept and block off an attack, you lose a layer of defense.\n- **Twin Drive** If the player succesfully attacks another, the attacker gains a layer of defense and attack. You may not use this ability twice in a row.");

		e.addField("Goal:", "Kill everyone that will not submit to your family. (NK Goal)");
	});

	register_role(["minion", "1398"], "Neutral", "Minion", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1398");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Add someone into your **Soul**.\n- [Soul Blast-2] When using this ability, you may pay the cost. If you do, you will up your attack and defense values by 1.\n- [Soul Blast-2] When using this ability, you may pay the cost. If you do, pick a player in your soul, and gain their defense value.\n- [Soul Blast-3] When using this ability, you may pay the cost. If you do, pick a player in your soul, and gain their attack and defense value.\n- **Boost** a player.\n- **Intercept** a player.\n- **Twin Drive** a player.");

		e.addField("Attributes:", "- You may never attack anyone, no matter what your attack value says.\n- You have Basic Defense that breaks at the first hit.\n- **Boost**: Boost the player's Attack Value depending on your own. Vulnerable and None; +0, Basic: +1, Powerful: +2, Unstoppable: +3, Overkill: +4.\n- **Intercept**: If the player Is attacked, you will instead take the hit. Every time you succesfully intercept and block off an attack, you lose a layer of defense.\n- **Twin Drive** If the player succesfully attacks another, the attacker gains a layer of defense and attack. You may not use this ability twice in a row.");

		e.addField("Goal:", "Kill everyone that will not submit to the dark side. (Live to see the Town lose the game.)");
	});

	register_role(["mystic", "1399"], "Town", "Mystic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1399");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Enact God's will during the day. If a non Town, non Neutral Benign role Is lynched today, you gain a layer of defense.\n- **Intercept** a player during the night. If you have defense, you must use this ability.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["overworld_angel", "overworldangel", "oa", "overworld", "1400"], "Neutral", "Overworld Angel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1400");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "*Hell-Bent*", true);

		e.addField("Hell Bent:", "This role cannot die (except for lynching). Instead, they have a Damage Zone. Each time they are visited at night, 1 damage Is added to the damage zone. Once there are 5 damages in the damage zone, this role dies.");

		e.addField("Abilities:", "- Pick 2 players. If they win together, add them to your soul. If they're both town, add only one.\n- Pick a player and guess their faction. If you're correct, add them to your soul.\n- [Counter Charge-2] When using this ability, you may pay the cost. If you do, redirect everyone in your soul to you.");

		e.addField("Goal:", "Come back to the heavens (die during the night.)");
	});
};
