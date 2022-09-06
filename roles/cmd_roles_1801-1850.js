module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["tol_prince", "tolprince", "prince", "1801"], "Town", "ToL Prince", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1801");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imprison (Day): Choose target player to imprison tonight, occupying those targeting your prisoner. At night, you may interrogate them via chat. Usable day 1. Can only jail the same player 3x. Cannot target King.\n- Execute (Night, 3 uses): Execute the jailed player. If they are Blue Dragon, lose all charges of Execute. Not usable until Night 3. Death is inevitable");

		e.addField("Attributes:", "- Unstoppable: Immune to occupy and redirect. Passive kept on class change.\n- Royal Blood: During elections for a new King, votes for you count twice. Passive kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_princess", "tolprincess", "princess", "1802"], "Town", "ToL Princess", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1802");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Will O' Wisp (Night, 2 uses): Discover if target player attacks anyone tonight. Does not count as a visit.\n- Flirt (Night): Limit a player's class type down to 2 options based on the results below:\n> Power/Head\n> Killing/Protective\n> Investigative/Deception\n> Support/Literally any other alignment");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. Passive kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["paper_bowser", "paperbowser", "pb", "1803"], "Koopa", "Paper Bowser", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1803");

		e.addField("Alignment", "Koopa King", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Breathe Flames a Target, Rampaging and Torching them, Can only be used on night 3, 6, 9 and so on.\n- Use the Star rod to give a Koopa Overprotective and Lynchproof defense until the start of the next night. (can't be used again for the next 2 nights.)");

		e.addField("Attributes:", "- Anyone visiting Koopas affected by Star Rod be dealt a Basic attack if they aren't from your Faction.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["exiled_revolutionary", "exiledrevolutionary", "exiled", "revolutionary", "er", "1804", "1801u"], "Unseen", "Exiled Revolutionary", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1804\nConverted from: ToL Prince");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imprison (Day): Same as ToL Prince, but no limit to a single person. You may imprison Unseen members.\n- Execute (Night/Day, 3 uses): Execute your jailed target or your hostage.\n- Hostage (Night): Keep your target in jail the next day. The Town will be notified they are missing for an unknown reason and they cannot access the day chat.");

		e.addField("Attributes:", "- You occupy your jailed and hostage targets.\n- You occupy their visitors.\n- You may multitask.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["arbitrator", "arbit", "1805"], "Sentry", "Arbitrator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1805");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Settle a dispute between two or more authorized players tonight. You will learn how many of them are evil.");

		e.addField("Attributes:", "- In cases where there's only one authorized player, your ability cannot be used.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["coordinator", "coord", "1806"], "Sentry", "Coordinator", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1806");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gather a team of guards tonight. You gain another use of your guard watch.\n- Send the guards to keep a close watch on an authorized player. You will learn about who they visit. If they attempt to attack someone, you will learn this and heal their target. The guards will keep watch for two nights, including the night you use it. 0 uses.");

		e.addField("Attributes:", "- Astral");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["auditor", "1807"], "Sentry", "Auditor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1807");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select an authorized player to interrogate during the day. At night, they will be informed about your interrogation. They may choose to either lie or tell the truth. If they tell the truth, you will learn who they visited last night. If they lie, they may choose any player to pretend to have visited, which you will learn. You will receive your results at the end of the night. Cannot be used on D1.\n- Accuse a player of lying at night. If you were correct, you deal a Powerful attack to them. You will be informed if you were incorrect.");

		e.addField("Attributes:", "- If you incorrectly accuse a player of lying twice, your superiors will start doubting your aptitude and disable your second ability.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["rapier", "1808"], "Neutral", "Rapier", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1808");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Strike a target with a Basic attack. You will also strike one of their alive neighbors with a Powerful attack, depending on where you're \"facing\" from the position on the playerlist, as if it were a line. If you're in Player 1, striking Player 3 will pierce Player 4, for example. If you attack yourself, you can choose either neighbor. ");

		e.addField("Attributes:", "- The first time you're attacked by an attack which is Powerful or stronger, you will nullify it and deflect it at your attacker.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["bounty_hunter", "bountyhunter", "bounty", "hunter", "bh", "1809"], "Neutral", "Auditor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1809");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack another player each night.");

		e.addField("Attributes:", "- When you kill someone, you collect their bounty, which is an amount of gold equal to their role's post number.");
		
		e.addField("Goal:", "Amass a total of 3000 gold.");
	});

	register_role(["random_attribute", "randomattribute", "attribute", "ra", "1810"], "Random", "Random Attribute", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1810\n*Half the time: powerful. Half the time: on fire. Half the time: both.*");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Choose one of the random attributes you've recieved, and give it to any other player. You won't have it anymore, but your target will, permanently. They will be notified. 2 uses.");

		e.addField("Attributes:", "- At the start of each night, you will permanently gain a new attribute randomly selected from a random GIM role.\n- However, there is a 33% chance you will instead explode and attack yourself without gaining anything.\n- You cannot gain duplicate attributes, even if you've given them away previously.\n- You cannot gain attributes that only exist to explain what a role's ability does.\n- The explosion will bypass all of your randomly gained attributes.\n- You cannot explode two nights in a row.");
		
		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["very_talented", "verytalented", "very", "talented", "1811"], "Neutral", "Very Talented", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1811");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You have two other random roles in addition to this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["somewhat_talented", "somewhattalented", "somewhat", "talented", "1812"], "Neutral", "Somewhat Talented", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1812");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You have one other role in addition to this role. This role may not have any limited use abilities. You will have 3 use of the role's main ability as determined by the host.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["fury_bowser", "furybowser", "fb", "1813"], "Koopa", "Fury Bowser", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1813");

		e.addField("Alignment", "Koopa King", true);
		e.addField("Attack", "Powerful (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Breathe Flames on 4 Targets, Attacking and Torching them, Can only be used on night 4, 8, and so on.\n- Choose yourself as the normal Koopa attacker this night, Dealing a torching Basic attack.");

		e.addField("Attributes:", "- All negative effects targeting you turn into a roleblock, Roleblock Immune while Breathing flames");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["townie_with_common_sense", "towniewithcommonsense", "townie", "common_sense", "commonsense", "twcs", "1814"], "Town", "Townie With Common Sense", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1814");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, you can realize you don't have to sit there all day. You can instead go up to someone and stab them, killing them instantly.\n- At night, you realize your door has a lock. You can choose to use it, and all visits towards you will fail.\n- At night, you realize you can defend yourself. You can attack all your visitors.");

		e.addField("Attributes:", "- You may attack as many people as you want during the day, but once you kill a Townie, you may no longer kill.\n- You have the common sense to refuse to walk to the gallows if you are voted to be lynched. You cannot be lynched.\n- If someone targets you twice in a row when your door is locked both nights, they will smash your window and their ability will not fail. It must be twice in a row for it to trigger.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cat_bowser", "catbowser", "cb", "1815"], "Koopa", "Cat Bowser", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1815");

		e.addField("Alignment", "Koopa King", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Guard 1 (2 when all Koopas alive) Koopas, Giving them Powerful defense and RB + Redirect immunity for this night.\n- Redirect 3 players to targets of your choice. (2 uses, +1 use after day 5)");

		e.addField("Attributes:", "- Each night, A random player who visited a Guarded player will be dealt a Basic attack if they aren't from your Faction.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["dry_bowser", "drybowser", "db", "1816"], "Koopa", "Dry Bowser", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1816");

		e.addField("Alignment", "Koopa King", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Permanently reduce your defense by a tier, Converting a player into a random koopa role, you may choose a Alignment to convert if there is a Dead Koopa with the same alignment.");

		e.addField("Attributes:", "- Your defense will permanently increase by 1 tier at the start of day 4, 7, 10, and so on.\n- If you are attacked and would die this night, redirect all attacks to a random Converted player, if one is alive.\n- Minimum defense: None, Maximum defense: Immortal.\n- The host may reroll this into another Koopa King if they don't want a Converter spawning.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["bowsette", "1817"], "Koopa", "Bowsette", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1817");

		e.addField("Alignment", "Koopa King (Queen)", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock and Learn the role of a player, Using it on the same player will blackmail them additionally.\n- Roleblock 4 players, Attacking and Torching 2 of them at random, Can only be used on night 3, 6, 9 and so on.");

		e.addField("Attributes:", "- Anyone visiting you will be Roleblocked on the next night if they aren't from your Faction.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["arbiter_of_grand_idea_mafia", "arbiterofgrandideamafia", "arbiter", "aogim", "1818"], "Coven", "Arbiter of Grand Idea Mafia", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1818");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player's house to become GIM during the first night.\n- Reassign GIM if that player dies.");

		e.addField("Attributes:", "- Players who visit GIM are subjected to the following effects in the order:\n> - Scumcasted\n> - Stolen from, like literally yoinked\n> - Glass Slippered \n> - Off by one errored\n> - Triple tapped\n> - Negative attacked \n> - Shroomed\n> - Urticated\n> - Covered in frost\n- If a player dies, the effects after are still applied.\n- GIM remains after you die.\n- With the Necronomicon, you may have two GIMs active at a time.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["tol_servant", "tolservant", "servant", "1819", "1792u"], "Unseen", "ToL Servant", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1819\nConverted from: ToL Butler");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve Wine (Night): Occupy a player tonight with wine. They will not be able to use abilities tonight.\n- Concentrated Wine (Night, 2 uses): Throw a party, occupying everyone that targets you with an ability.");

		e.addField("Attributes:", "Dutiful: - Immune to occupy and redirect. Passive kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_alcoholic", "tolalcoholic", "alcoholic", "1820", "1793u"], "Unseen", "ToL Alcoholic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1820\nConverted from: ToL Drunk");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Debauchery (Night): Redirect a target player to another. Conflicting redirections may fail.\n- Happy Hour (Night, 2 uses): Redirect a target player to themselves.");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. This passive is kept on class change.\n- I Am the Liquor: Occupy and redirect immune. This passive is kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_poacher", "tolpoacher", "poacher", "1821", "1794u"], "Unseen", "ToL Poacher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1821\nConverted from: ToL Hunter");

		e.addField("Alignment", "Unique Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spike Trap (Night, 4 uses): Place spiked traps outside target player's room. Occupy that player and anyone else targeting them.\n- Snare Trap (Night, 2 uses): Place a snare trap outside target player's room. If they leave their room, they will be occupied for 2 nights.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_enforcer", "tolenforcer", "enforcer", "1822", "1795u"], "Unseen", "ToL Enforcer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1822\nConverted from: ToL Knight");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protection (Night, 3 uses): Stand guard, occupying everyone targeting an Unseen faction member.\n- Frenzy (Night, 2 uses): Guarantees the Assassin will kill their target. Bypasses all forms of protection. Bypasses Imprison");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_herbalist", "tolherbalist", "herbalist", "1823", "1800u"], "Unseen", "ToL Herbalist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1823\nConverted from: ToL Physician");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Exhume (Day, 3 uses): At the end of the night, learn what classes killed a player, or if they committed suicide. Can not be cancelled once used. Triggers at the end of the night.\n- Drug (Night, 3 uses): Causes a player to falsely believe they were attacked and healed.\n- Defile (Night, 2 uses): If targeted player dies tonight, they will appear as chosen class.");

		e.addField("Attributes:", "- Remedy Studies: Immune to bleeding. Passive kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_handmaiden", "tolhandmaiden", "handmaiden", "1824", "1796u"], "Unseen", "ToL Handmaiden", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1824\nConverted from: ToL Maid");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyze (Night): Test 2 players, if they are the same class type, discover their classes.\n- Prying Servants (Night, 2 uses): Discover who visited target player on the night they died. Doesn't count as visiting.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_duchess", "tolduchess", "duchess", "1825", "1802u"], "Unseen", "ToL Duchess", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1825\nConverted from: ToL Princess");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bat Eyelashes (Night): Entrance target player with your eyes into revealing their class type. Can't target King.\n- Dark Wisp (Night, 2 uses): Uncage a dark wisp, making the Unseen appear not suspicious tonight.");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. Passive kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_illusionist", "tolillusionist", "illusionist", "1826", "1797u"], "Unseen", "ToL Illusionist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1826\nConverted from: ToL Mystic");

		e.addField("Alignment", "Unique Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sinister Echoes (Day, 2 uses): Make it look like a player says something. They will not see the message. Code of conduct applies!\n- Private Matter (Day, 2 uses): The public will be completely unaware of whispers to and from you for the rest of the day.\n- Mental Blur (Night, 2 uses): Begin to melt a player's brain, removing their chat history permissions.\n- Mind Warp (Night): Target player will receive framed results from using investigative abilities tonight.");

		e.addField("Attributes:", "- Busy Mind: Immune to occupy and redirect. Passive kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_aristocrat", "tolaristocrat", "aristocrat", "1827", "1798u"], "Unseen", "ToL Aristocrat", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1827\nConverted from: ToL Noble");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Political Pressure (Day, 2 uses): Force target player A to vote for target player B. Then, prevent target A from any further voting for the day. Cannot force the King to vote, but can force votes against the King.\n- Intrigue (Night): Frame a player and receive feedback of abilities used on them. Will not receive feedback for conversions, attacks, King abilities, or self-targeting abilities.\n- Court Spy (Night, 2 uses): Summon shadows to report the contents of all whispers tomorrow.");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. Passive kept on class change.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_nightwatch", "tolnightwatch", "nightwatch", "1828", "1799u"], "Unseen", "ToL Nightwatch", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1828\nConverted from: ToL Observer");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow (Night): Follow target player, discovering who a player targets and who targets them. Cannot target King.\n- Watch Carefully (Night, 2 uses): Discover a player's class.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["town_traitor", "towntraitor", "tt", "1829"], "Town", "Town Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1829");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone at night. You will learn if they are good or evil.");

		e.addField("Attributes:", "- The first time you would die at night, you instead join your attackers team. If they don't have a team (for example an NK), you give them a factional chat you two share. You now win with your new team instead of winning with the Town.\n- You get the ability to deal a basic attack once you switch factions.");
		
		e.addField("Goal:", "Kill all who oppose the Town or win with your first attacker.");
	});

	register_role(["godfather", "gf", "1830"], "Mafia", "Godfather", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1830");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player tonight. Nothing more, nothing less.\n- Alter a player's soul, turning them into a completely different role. This role can be **anything** in GIM. This could be a double-edged sword, so beware.\n- Summon the gang of mafia on a player, permanently removing them from day chats and lynches. ");

		e.addField("Attributes:", "- You can use **any** of these abilities, but only one is available at night. Similar to Potion Master, you must wait two days before using them again.\n- Your action always succeeds, unless you're roleblocked.\n- Whenever you're attacked, you will summon your Mafia gang to seek revenge.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["ahhhhhhhhh", "ahhhhhhhh", "ahhhhhhh", "ahhhhhh", "ahhhhh", "ahhhh", "ahhh", "ahh", "ah", "1831", "1723u"], "Unseen", "AHHHHHHHHH", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1831\nConverted from: AAAAAAAAAA");

		e.addField("Alignment", "Unseen AAAAAAAAAA", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- AHHHHHHHHH, redirecting everyone in the game, except Unseen members, to you and gain Powerful defense.\n- AHHHHHHHHH, killing a player.\n- AHHHHHHHHH, roleblocking a player.");

		e.addField("Attributes:", "- For practical purposes, this role is Unseen Power.\n- Roleblock immune.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["wm_godfather", "wmgodfather", "godfather", "wmgf", "gf", "1832"], "Mafia", "WM Godfather", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1832");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Order your goon to perform the factional Mafia kill each night.");

		e.addField("Attributes:", "- When you order your goon to perform the factional Mafia kill, you will not visit the target. You will also appear to stay home to a Tracker.\n- If a Lookout sees your goon visit their target, they will see that a goon visited their target, instead of seeing a player's name.\n- Your goon can be killed as a result of visiting your target. If they are, you will no longer be able to order them to perform the factional Mafia kill.\n- If your goon is attacked by a Bodyguard, the Bodyguard will still survive, and your goon will not. The Bodyguard will be notified that they killed your goon.\n- If your goon dies, it will be announced to the town that they died.\n- You appear to be a member of the Town when questioned by a Detective.\n- You may appear as the \"good\" in the Psychic's good vision. You cannot appear as the \"evil\" in the Psychic's evil vision.\n- You can talk with the other Mafia at night.\n- You may instead perform the factional Mafia kill.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["wm_ambusher", "wmambusher", "ambusher", "wmamby", "amby", "1833"], "Mafia", "WM Ambusher", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1833");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone or ambush one of their visitors at night.");

		e.addField("Attributes:", "- If you choose to ambush, you will attack one player who visits your target instead of your original target.\n- If no one visits your target when you choose to ambush a visitor, you will attack your target normally. This will still waste an ambush.\n- If you successfully ambush someone, you cannot be roleblocked.\n- You can only ambush three times.\n- You cannot ambush two nights in a row.\n- You cannot ambush other Mafia members.\n- You can talk with the other Mafia at night.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["apophis", "1834"], "FallenAngel", "Apophis", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1834\n*A indescribable darkness laying in the tenth region of night, vying to finally conquer the sun.*");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Eradicate someone each night. You'll attack them and can choose someone else to control to them.");

		e.addField("Attributes:", "- Control immune.\n- If you eradicate a Fallen Angel, you may additionally control two people to whoever you like. You will learn their roles.\n- If you control a Fallen Angel, your attack becomes rampaging.\n- If you eradicate a non-Fallen Angel, learn the roles and identities of their visitors.\n**Sin of Injustice**  — If you're the last Fallen Angel remaining, two nights must happen before a day (i.e. Phases go Day, Night, Night...). Information like deaths will be shown at the end of every night like usual. Your attack becomes permanently rampaging.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["decdecattack", "dec", "daichen", "dai", "dda", "1835"], "Neutral", "DecDecAttack", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1835");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Accidentally modconfirm a target. If they are an evil, they will be granted Lynch Immunity for the rest of the game. If they are good, you will deal a Basic Attack to them.\n- Before the game starts, you may.choose up to 2 slots in the rolelist to change to anything else. Nobody will know except for you and the host.\n- Become a Prodigy (18) during the night\n- Become a Progeny (673) during the night.\n- Grant yourself Invincible defense during the night. 0 uses. 1 use If at least one person voted to @ban you.");

		e.addField("Attributes:", "- Yall viri Will viriKill llme viriIf Will ill viriKille riKill lill lll l llme\n- You may NOT win with witcheswitches\n- You may NOT win (get) with (any) bitchesbitches\n- At any point during the game, a player night decide to vote to @ban you. If at least half the players vote to, you get <@&976214023857111060> and die.\n- You appear as WereLion to Consigliere and Potion Master\n- You get dealt an Unstoppable Attack at the end of night 5 due to no water.");
		
		e.addField("Goal:", "Get <@&976214023857111060>");
	});

	register_role(["gunsmith", "1836"], "Town", "Gunsmith", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1836");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spend the night smithing a gun. You gain another use of your second ability.\n- Give someone a gun during the night. They will gain a new one-use gun that can be used in the day to deal a Basic attack to a target immediately. (0 uses) ");

		e.addField("Attributes:", "- You cannot target yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["card_pirate", "cardpirate", "card", "pirate", "cp", "1837"], "Neutral", "Card Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1837");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to duel each day.");

		e.addField("Attributes:", "- When you duel a player, that night, they'll be roleblocked through immunities.\n- Then, you will play a game of whatever the fuck this is https://discord.gg/DFnqWt7WUT against them. The host can figure it out themselves.\n- If your target loses, you attack them.");
		
		e.addField("Goal:", "Win two duels.");
	});

	register_role(["jugemu", "1838"], "Neutral", "Jugemu Jugemu Gokō no Surikire Kaijarisuigyo no Suigyōmatsu Unraimatsu Fūraimatsu Kū Neru Tokoro ni Sumu Tokoro Yaburakōji no Burakōji Paipo Paipo Paipo no Shūringan Shūringan no Gūrindai Gūrindai no Ponpokopī no Ponpokonā no Chōkyūmei no Chōsuke", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1838");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Attributes:", "- You have the abilities and attributes of all Fox roles except Oni.\n- You do not have the attributes that force other Fox roles to roll.\n- You may multitask.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "combo_serial_killer", "comboserialkiller", "combo_sk", "combosk", "csk", "1839"], "SK", "Combo Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1839\n*Wanna see me slit your throat? Wanna see me do it again?*");

		e.addField("Alignment", "Unique Serial Killer Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "1. Slice: Attack a player. You may use another ability tonight.\n2. Circle: You may use another ability tonight. In the next night, you may use another ability.\n3. Prepare: Your next attack will have its tier increased by 1.\n4. Sift: Roll three abilities other than this one. You must choose one to use.\n5. Expose: Reduce a target player's defense by 1 tonight, down to None.\n6. Hide: One random ability that is used on you tonight will fail. You may use another ability tonight.\n7. Kick: Attack a player tonight. They will lose a use for up to one ability with limited uses, if they have any.\n8. Bandage: Provide yourself with Basic Defense for tonight.\n9. Hamstring: Attack and roleblock a player tonight.\n10. Venom: Poison a player tonight. They will die at the end of the next night if they lack defense.\n11. Focus: Choose one of your own abilities to delete. You may use another ability.");

		e.addField("Abilities (cont.):", "12. Backstab: Use an attack against a player tonight, with the tier being equal to the amount of abilities you have used tonight, other than this one. Maximum of Overkill. 1 use.");

		e.addField("Attributes:", "- At the start of each night, you will be prompted with a random ability from the above list. That is the ability you must use that night, if you wish to use anything.\n- All your abilities resolve immediately. You cannot undo them.\n- Once you kill someone, your Attack level will be forcefully set to None for the rest of the night.\n- Abilities you gain tonight will not carry over into future nights, unless otherwise specified.\n- If the host is feeling generous, they might allow you to roll the next ability yourself, so long as you use the bot within your own channel to decide your next ability.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["icy_rock", "icyrock", "icy", "ir", "1840"], "Rock", "Icy Rock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1840");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze someone each night.");

		e.addField("Attributes:", "- They may not perfom any night abilities for this night. You will then deal a Basic Attack to them the 2nd night.\n- Only one player may be frozen at all times.\n- If you exist in the game, Odd Keystone will be not be rerolled. See, this isn’t Iceberg.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["sk", "paper_serial_killer", "paper_serialkiller", "paper_sk", "papersk", "psk", "1841"], "SK", "Paper Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1841");

		e.addField("Alignment", "Serial Killer Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab someone with sharp paper.\n- Give someone a paper cut.");

		e.addField("Attributes:", "- Stabbing someone with sharp paper deals a basic attack to them.\n- Giving someone a paper cut lowers their defense to vulnerable for this night and the next. They don’t know they have a paper cut until the next night or if they die the night they receive a paper cut.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["same_role", "samerole", "older_post", "olderpost", "ltsraaop", "1842"], "Neutral", "Literally the Same Role as an Older Post", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1842");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful/Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Maul a player each night, attacking them and all their visitors with a __Powerful__ attack.\n- If you are visited, your visitors will be silently poisoned with a 2 day delayed __Unstoppable__ attack.");

		e.addField("Attributes:", "- You will role-block all players that threaten to expose you. (Investigation Roles)\n- You may win with the **Striker** if you both spawn.");
		
		e.addField("Goal:", "Kill all who threaten your business. (NK Goal with flavor)");
	});

	register_role(["banzai_bill", "banzaibill", "banzai", "bill", "bb", "1843"], "Koopa", "Banzai Bill", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1843\n*It approaches menacingly.*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Aim yourself at someone. You will roleblock them next night, as they run away in fear. All players that visited them that night will also visit you, due to your very large hitbox.\n- Be extra threatening, empowering your first ability. Instead of just visiting you, all of your target's visitors will be redirected to you. You will also gain Basic defence on that night. (2 uses)");

		e.addField("Attributes:", "- Astral\n- Roleblock and Redirect Immune");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["card_revolutionary", "cardrevolutionary", "card", "revolutionary", "cr", "1844"], "Neutral", "Card Revolutionary", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1844");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Initiate a revolution through a card game known as Kingdom Attack. 1 use.");

		e.addField("Attributes:", "- After 5 total rounds, the game changes back.\n- Anyone who dies in KA also dies in GIM. Their KA role is not revealed, but their GIM role is.\n- In a VIP mode, the VIP becomes the King, but is not publicly revealed.\n- If there is one good faction, its members will become either Order or Society, and they will win together.\n- If there are two good factions, one faction's members will become Order, the other's will become Society. They will not be able to win together.\n- If there is one evil faction, its members will become either Chaos or Apostle.\n- If there are two evil factions, one will become Chaos and one will become Apostle.\n- If there are 3 or more of one type of faction, this cannot spawn.\n- Neutrals become an Outsider with as close to their original goal as possible. Your goal will be to simply survive.\n- Dead players do not join.\n- GIM will be halted so KA can take place.\n- You may only use your ability starting on night 2. It takes effect the next day.");
		
		e.addField("Goal:", "Survive to the end of your KA game.");
	});

	register_role(["tl;dr", "tldr", "1845"], "Neutral", "TL;DR", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1845\n*How can you read this? It has no pictures!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to summarize their role at night.");

		e.addField("Attributes:", "- A summarized role removes any text past 100 characters in the abilities and attributes section respectively. Whatever abomination results from this is their new role.");
		
		e.addField("Goal:", "Summarize four people’s roles OR summarize a role with over 750 characters.");
	});

	register_role(["duplighost", "dupli", "1846"], "Koopa", "Duplighost", {subCat: "All-Rounder"}, (e) =>
	{
		e.setDescription("Post 1846");

		e.addField("Alignment", "Koopa All-Rounder", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, Use any ability from another Koopa role.\n- Permanently transform yourself into another Koopa role you have a charge of.");

		e.addField("Attributes:", "- You have 1 charge of every single Koopa role, Using an ability will cost a charge of that role.\n- You don't have charges of Koopa King roles.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["executioner", "exe", "1847"], "Neutral", "The Executioner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1847");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player. The next time you would gain a one-use random killing ability, it will be from a role with the same alignment as them. 2 uses,\n- Modkill a player who you have attacked three or more times. 2 uses.\n- Appear as any role of your choice to the next investigative effect used on you. You won't know when this triggers. 2 uses.");

		e.addField("Attributes:", "- At the start of every night, you gain a one-use random killing ability from a random role.\n- Whenever you are attacked, you gain a one-use random killing ability.\n- Whenever you kill someone, you gain a one-use random killing ability.\n- Whenever you attack someone who you've attacked before, you gain a one-use random killing ability.\n- You may only have up to three one-use random killing abilities at a time. At the end of each phase, if you have more, you must choose only three to keep.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["skipsqueak", "skip", "squeak", "1848"], "Koopa", "Skipsqueak", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1848\n*Our boy!*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to jump in front of at night. If you can correctly predict their subalignment (Support, Killing, Head, etc.), you will prevent their action from happening and deal a Basic attack to them.");

		e.addField("Attributes:", "- If you are killed at night, the fans will be displeased. Your attacker will be unable to kill the next night as the chat will be D: ing them, which is a much more pressing matter.\n- If you are lynched, the fans will be even more displeased. The town may not lynch the following day as they will be too busy D: ing.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["shaharazad_x", "shaharazadx", "shaha_x", "shahax", "1849"], "X", "Shaharazad X", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1849");

		e.addField("Alignment", "X Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Create a GIM Subgame using all players who were alive at the start of this game. Each player will have the same role as in the main game, but subgame deaths will not reveal roles or causes of death.\n- Attack a player every third night in a subgame.");

		e.addField("Attributes:", "- Subgame winners will gain 1-use Powerful Defense, losers die to Powerful Attacks.\n- The main game's night will only end after the subgame ends.\n- If the X win the subgame, they instantly win the main game too. The main game can continue as long as at least two other opposing neutrals/factions are alive.\n- You can only create a subgame as early as night 3, and you can only do so once.\n- You can't create a subgame in a subgame.");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["jack_in_the_box_x", "jackintheboxx", "jitbx", "1850"], "X", "Jack In The Box X", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1850");

		e.addField("Alignment", "X Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scare someone to force their defense level to stay at None for the night.\n- Guard someone to roleblock their non-X visitors through immunity.\n- Attack someone at night.\n- Crank yourself to provide 1 use to each of your other abilities.");

		e.addField("Attributes:", "- Other than Crank, your abilities are 1-use.\n- Your defense cannot be anything other than None while using Crank.\n- You can only use your attack ability starting from Night 5, though you can still gain charges for it before that.");
		
		e.addField("Goal:", factions.X.goal);
	});
};
