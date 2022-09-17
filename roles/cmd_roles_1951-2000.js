module.exports = (g) =>
{
	const {register_role, factions, MessageAttachment} = g;

	register_role(["best_investigator", "bestinvestigator", "best", "biis", "1951"], "Town", "Best Investigator in Salem", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1951");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone, You will Perform the following abilities on them:\n• Spy (62)\n• Lookout (53)\n• Tracker (54)\n• Sheriff (20), Only on nights 1, 4, 7...\n• Investigator (35), Only on nights 2, 5, 8...\n• Consigliere (70), Only on nights 3, 6, 9...");

		e.addField("Attributes:", "- You will know who Evil factions visit each night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["worst_investigator", "worstinvestigator", "worst", "wiis", "1952"], "Town", "Worst Investigator in Salem", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1952");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone. You will learn their role.");

		e.addField("Attributes:", "- You can't receive night feedback.\n- When you die, your last will will be automatically be filled out with your targets and their roles.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["decent_investigator", "decentinvestigator", "decent", "diis", "1953"], "Town", "Decent Investigator (in Salem)", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1953");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose one:\n- 53: Lookout: Learn who visits your target.\n- 54: Tracker: Learn who your target visits.\n- 62: Spy: Learn your target's night feedback.\n- 20: Sheriff: Learn if your target is suspicious. Town, Neutral Non-Killing, and Detection Immune roles are assumed to not be suspicious.");

		e.addField("Attributes:", "- When you use the Spy's ability, you will also learn who evil factions visit that night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["no_investigators", "noinvestigators", "no", "niis", "1954"], "Mafia", "No Investigators in Salem", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 1954");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Randomize a player's investigative results this night. (2 uses)");

		e.addField("Attributes:", "- At the first 2 nights, All investigative abilities are delayed to be recieved at the end of Night 3, or when you die.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["rule_17", "rule17", "r17", "1955"], "Neutral", "Rule 17", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1955");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- When this role rolls, immediately reroll all roles that the host would consider unbalanced. Then, reroll this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["godslayer", "1956"], "Neutral", "Godslayer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1956");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "\"An attack level so high nothing could ever survive\"", true);
		e.addField("Defense", "Basic (\"Absolute Immortality against God\")", true);

		e.addField("Abilities:", "- Slay someone at night.");

		e.addField("Attributes:", "- If your target is God (NC), or God (NK), they die. No immunities could ever protect against the attack this role does.\n- If your target is not God (NC), or God (NK), you will have a relaxing evening with them. They will tell you one other person who is not God.\n- You cannot be affected by anything God does.");
		
		e.addField("Goal:", "Kill all Gods.");
	});

	register_role(["above_average_investigator", "aboveaverageinvestigator", "aai", "1957"], "Town", "Above Average Investigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1957");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose one:\n> - Investicreator (6)\n> - Investilétter (37)\n> - Wordle (39)\n> - Plagiarizer (829)\n> - Rhapsodist (1102)\n> - Crickets (1325)\n> - Pot (1380)\n> - Operator (1535)\n> - Crayon Kid (1776)\n> - ToL Nightwatch's (1828) Follow");

		e.addField("Attributes:", "- You have one charge of each role you can choose from.\n- You are immune to frames because of course you are you're above average.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["salem", "1958"], "Neutral", "Salem", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1958");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert a target's role into a random Town of Salem role with the same Alignment and Sub-alignment.");

		e.addField("Attributes:", "- Evil Faction members just get their Abilities and Attributes changed to the ones of a random TOS Mafia/Coven.\n- You will be notified if you convert a Evil Faction member.");
		
		e.addField("Goal:", "See the good Faction lose, You dont need to be alive.");
	});

	register_role(["rule_20", "rule20", "r20", "1959"], "Town", "Rule 20", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1959");

		e.addField("Alignment", "Town Espionage", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Overprotective)", true);

		e.addField("Abilities:", "- Deal an Overkill Attack.\n- {Lower your defense to Vulnerable, then} Deal a Modkill Attack.\n- During the day, cause all of your attacks to rampage the following night.\n- Roleblock a target.\n- Coldsnap.\n- **Cleave** during the day.");

		e.addField("Attributes:", "- May multitask.\n- Overprotective autovest.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rule_4", "rule4", "r4", "1960"], "Neutral", "Rule 4", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1960");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player to see if they are a ToS role.");

		e.addField("Attributes:", "- If they are, gain a chat with them.\n- If they are not, deal a Powerful Attack.\n- While you are alive, the game must follow all the Town of Salem rules. Basically Rule 4 doesnt apply.");
		
		e.addField("Goal:", "Be the only one standing, except you can spare ToS roles.");
	});

	register_role(["rule_5", "rule5", "r5", "1961"], "Neutral", "Rule 5", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1961");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player at night. You will give them to option to reroll their role or keep it.");

		e.addField("Attributes:", "- You may not target the same player more than once.");
		
		e.addField("Goal:", "Cause at least one player to reroll and be happy with the role they rerolled into. Host decides if you win.");
	});

	register_role(["rule_7", "rule7", "r7", "1962"], "Neutral", "Rule 7", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1962");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player.");

		e.addField("Attributes:", "- While you are alive, all Attack values are deleted from rolecards.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["godmother", "gm", "1963"], "Town", "Godmother", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 1963");

		e.addField("Alignment", "Unique Town Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- Detection Immunity to Sheriff.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rule_8", "rule8", "r8", "1964"], "Neutral", "Rule 8", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1964");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, create an ability. It will get added to your abilities at the end of the night, if the host accepts. If the host refuses, you may keep using this ability until the host accepts.");

		e.addField("Attributes:", "- While you are in the game, all players gain \"may Multitask\". Includes you.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["rule_9", "rule9", "r9", "1965"], "Town", "Rule 9", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1965");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Illuminate a player at night.");

		e.addField("Attributes:", "- While you are alive, all players' night feedback each night is replaced by \"You slept peacefully\". No exceptions.\n- An illuminated player will receive their actual feedback and ignore the above attribute.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rule_10", "rule10", "r10", "1966"], "Neutral", "Rule 10", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1966");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player a Goal made by yourself, if the host accepts. If they refuse, you may keep doing this until the host accepts.");

		e.addField("Attributes:", "- At the start of Day 1, all players' goals except yours are deleted. It you die, each player gets their goal back.");
		
		e.addField("Goal:", "Cause at least one player to win.");
	});

	register_role(["rule_11", "rule11", "r11", "1967"], "Neutral", "Rule 11", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1967");

		e.addField("Alignment", "Neutral Chaos", true);

		e.addField("Abilities:", "- Transform a player's visit into a Basic Attack.\n- Grant a player Basic defense");

		e.addField("Attributes:", "- While you are alive, all Attack and Defense Values from all roles are deleted.\n- You may multitask\n- You may not self target.\n- You have to use your first ability each night.");
		
		e.addField("Goal:", "Do not cause anyone to die as a direct result of your abilities until the end of the game.");
	});

	register_role(["rule_12", "rule12", "r12", "1968"], "Neutral", "Rule 12", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1968");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone regain their faction each day, and each night.");

		e.addField("Attributes:", "- While you are alive, all roles do not have a specified faction they're apart of. Meaning, everyone is a Neutral (Other).");
		
		e.addField("Goal:", "Cause a non neutral faction to win.");
	});

	register_role(["rule_13", "rule13", "r13", "1969"], "Neutral", "Rule 13", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1969\n*You're daydreaming again. Snap out of it.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player at night to shrink their target pool to three players.");

		e.addField("Attributes:", "- Each night, submit a player and a list of three other players. They may only target these three players with their abilities. They may not target the same person out of this group more than once. Once they have used their ability on all of these three players, this effect goes away.\n- You may include up to one dead player in your target pool. If you do this, you may not include your target in the target pool.\n- You have a Basic autovest.");
		
		e.addField("Goal:", "See the good faction lose the game.");
	});

	register_role(["rule_14", "rule14", "r14", "1970"], "Neutral", "Rule 14", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1970");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When this role rolls, the game enters \"Rapid Mode\": All phases last half the time they're supposed to last.\n- After the game enters Rapid Mode, reroll this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["rule_15", "rule15", "r15", "1971"], "Neutral", "Rule 15", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1971");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When this role rolls, all evil factions lose all attributes except for Factional Chat and Factional Kill. Then, reroll this role.\n- All good factions lose all attributes.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["elector", "1972"], "Neutral", "Elector", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1972");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When this role rolls, the game enters \"Electrion Season\": Every phase, there must be a lynch. If the day ends with nobody being lynched (including a nightfall vote), a random player will be lynched.\n- After the game enters Election Season, reroll this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["autobalancer", "1973"], "Town", "The Autobalancer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1973");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When this role rolls, reduce all Attack and Defense values above Basic to Basic. Then, reroll this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["rule_16", "rule16", "r16", "1974"], "Neutral", "Rule 16", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1974");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player at night, and give them any ability in the GIM thread, if they dont already have it. Any. Ability. No exceptions. Also you do not choose its random which ability they get.");
		
		e.addField("Goal:", "Impact the game in some way. Host decides if you win.");
	});

	register_role(["rule_14", "rule14", "r14", "not_an_event", "notanevent", "r14bnae", "1975"], "Neutral", "Rule 14 But Not An Event", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1975");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Speed someone up each night. Every following day will end three hours faster for them. When the day ends for someone specifically, they'll be removed from the day chat and can send in a night action, which will resolve immediately.");

		e.addField("Attributes:", "- Each day is X hours shorter, where X is three times the day number. The Town is not notified of this until it a day ends earlier.\n- Whenever a nightfall vote is reached, every following day is three hours shorter.");
		
		e.addField("Goal:", "Have every non-Neutral player be a different faction from each other in one way or another by the end of the game.");
	});

	register_role(["rule_15", "rule15", "r15", "not_an_event", "notanevent", "r15bnae", "1976"], "Neutral", "Rule 15 But Not An Event", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1976");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and a faction each night. They become functionally that faction (for example, if you made them Everfrost, they'd be able to use the factiona roleblock, but they'd still win with their original faction).");

		e.addField("Attributes:", "- <#977547294293504060> does not exist.\n- All evil factions are functionally Mafia.\n- All good factions are functionally Town.");
		
		e.addField("Goal:", "Have every non-Neutral player be a different faction from each other in one way or another by the end of the game.");
	});

	register_role(["rule_18", "rule18", "r18", "1977"], "Town", "Rule 18", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1977");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a role to \"start\" and a role to \"end.\"\n- Change the position of your starting role and ending role.");

		e.addField("Attributes:", "- All players with a role in between the role to \"start\" and to \"end\" are rerolled to another role outside of the barrier. This effect is temporary and players can gain back their roles if you change your starting or ending role.\n- Your starting and ending role may not have more than 20 posts of distance.\n> Example:\n> I choose Nervous Sleeper to start and Oct2 to end. Those are Post 2 and Post 8. If Post 4 Role Jury was in the game, it would be rerolled because Post 4 is in between Post 2 and Post 8.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sleepy_serial_killer", "sleepyserialkiller", "sleepy_sk", "sleepysk", "ssk", "sk", "1978"], "SK", "Sleepy Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1978");

		e.addField("Alignment", "SK Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your knife at Day since you are too tired to do it at night.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["writer_serial_killer", "writerserialkiller", "writer_sk", "writersk", "wsk", "sk", "1979"], "SK", "Writer Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1979");

		e.addField("Alignment", "SK Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your Pen, then use it to write them a Fake will.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["grappling_serial_killer", "grapplingserialkiller", "grappling_sk", "grapplingsk", "gsk", "sk", "1980"], "SK", "Writer Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1980");

		e.addField("Alignment", "SK Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your grapple gun, killing them and Transporting you with them.");

		e.addField("Attributes:", "- Redirect Immunity\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["normal_killer", "normalkiller", "normal", "nk", "1981"], "SK", "Normal Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1981");

		e.addField("Alignment", "SK Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your knife, killing them.");

		e.addField("Attributes:", "- Transform into a random Serial Killer after Killing 2 players.\n- As a Normal killer, You will appear as a Town role of your choice but You will not have access to your faction chat.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["rule_19", "rule19", "r19", "1982"], "Neutral", "Rule 19", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1982");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a target.\n- Gamethrow, causing a player with the same faction as yours to randomly die.\n- Cheat, getting access to 2 player channels of 2 players with the same faction as yours.\n- Get overly riled up over a discord game, causing 2 players of a faction  that cant win with yours to be banned.\n- Become Post 1591 Asshole.");

		e.addField("Attributes:", "- At any point in time you may set your faction to be any faction in GIM. This doesnt affect anything except your abilities, you're still a NK with NK goal and all roles treat you as a NK.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["rasen-rules", "rasen_rules", "rasenrules", "rules", "<#978786268597063700>", "1983"], "Neutral", "#rasen-rules", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1983");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the factional Rules kill during the night.");

		e.addField("Attributes:", "- If this role is in the game, all roles with \"rule\" or \"rules\" in them are not their factions and are Rules instead. Rules are an evil faction with a Factional Kill, Factional Chat, and win by killing everybody that would oppose them.");
		
		e.addField("Goal:", "\"Rules goal\"");
	});

	register_role(["literally_the_1800s", "literallythe1800s", "1800s", "1984"], "Neutral", "Literally the 1800's", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1984");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use any role’s ability, assuming that role is in between 1799 and 1900.");

		e.addField("Attributes:", "- Using an ability counts as copying it, so rule 16 applies.");
		
		e.addField("Goal:", "Have the good faction lose the game (you can win while dead).");
	});

	register_role(["scott_burnham", "scottburnham", "scott", "burnham", "sb", "1985"], "Town", "Scott Burnham", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1985\n*If I could be anybody dead or alive, I would wanna be my dad in 1985.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **He walks into a room and everyone respects him**: Visit a player at night. Anyone that visits them will instantly respect you. You will learn who they are and may choose who they visit tomorrow night (cannot be used in conjunction with any of your other abilities)\n- **He's really happy, he's thrilled to be alive**: Choose to stay home at night. You will spread your positivity to all of your visitors. They will only be able to use abilities that provide positive or neutral utility to their target tomorrow night.");

		e.addField("Attributes:", "- **He reads the news and doesn't let that shit affect him**: You are immune to any abilities that activate at the beginning or end of the day (e.g. Jester haunt, There Are No Faces' sleep experiment)\n- **Balances work with his wife's underwhelming cooking**: You have a stable work-life balance and are used to being disappointed. If the Town successfully lynches a non-Town player during the day, you gain roleblock immunity the following night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["literally_1984", "literally1984", "1984", "1986"], "Neutral", "Literally 1984", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1986");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability of role 1984.");

		e.addField("Attributes:", "- You are actually post 1984 in all but name.");
		
		e.addField("Goal:", "Win as if you were 1984.");
	});

	register_role(["literally_1986", "literally1986", "1986", "1987"], "Neutral", "Literally 1986", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1987");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability of 1986: Literally 1984.");

		e.addField("Attributes:", "- You are actually 1986: Literally 1984 in all but name.");
		
		e.addField("Goal:", "Goal: Win as if you were 1986: Literally 1984.");
	});

	register_role(["dementia", "1988"], "Neutral", "Dementia", {subCat: "Evil", spawnSubCat: ["Evil", "Other"]}, (e) =>
	{
		e.setDescription("Post 1988");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone forget their night feedback, recieveing it 2 nights later.");

		e.addField("Attributes:", "- You may not Multitask.");
		
		e.addField("Goal:", "See town lose.");
	});

	register_role(["400%_speedrun", "400%speedrun", "400%", "speedrun", "1989", "1989a"], "Neutral", "400% SPEEDRUN (First)", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1989A");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities (First):", "- Learn 5 random roles that a player could be at night. Only one will be the ones they actually appear to be. You’ll gain the same results if you investigate them again and their appearance hasn’t changed, and if they’re evil, they will be notified.\n- Learn who a player is visited by at night.\n- Check if a player appears to be suspicious at night. Roles that win with any good faction, and roles that have Detection Immunity, don’t appear as suspicious to you.\n- Discover what feedback a player gets at night.\n- Learn who a player visits at night.\n- During the day, choose a player to Jail. You may open a chat with them, were you will appear as the “Jailor (51)”\n- At night, decide to execute who you’ve jailed with an unstoppable attack. You will lose this ability if you use it on a good faction member. Victims of this will appear to have been executing by the “Jailor (51)”.");

		e.addField("Abilities (First, cont.):", "- Decide to go on alert, granting yourself basic defense and powerful attacking everyone who visits you. Victims that die to this will appear to be killed by the “Veteran (66)” (3 uses)\n- Shoot someone at night with a basic attack. Victims of this will appear to be killed by a “Vigilante (67)” You will die to an unstoppable attack if you shoot a good faction member, which reveals the true role and cause of death.\n- Protect a player from direct attacks at night. You’ll redirect the attack to yourself, and retaliate with a powerful attack.\n- Put on a bulletproof vest at night to grant yourself basic defense. (1 use)\n- Heal a player at night, granting them powerful defense and purging negative effects. You’ll know if they were attacked by anything. You may only target yourself with this once.\n- Protect a player at night with powerful defense. You will deal a basic attack to a random attacker, unless they’re capable of conversion.");

		e.addField("Abilities (First, moar.):", "Set a trap at a target’s house at night. They’ll gain one-use powerful defense, which will retaliate against the attacker with a powerful attack. You’ll learn the names of all roles that visit the trapped target in the night where it’s triggered. You may only have one trap out at a time, but you may target yourself with this ability to manually remove the trap.\n- Roleblock a player at night.\n- Reveal yourself as the “Mayor (52)” in the day, permanently tripling your voting power after doing so, but preventing yourself from being healed, sending whispers, or receiving whispers.\n- After dying, you may send an anonymous message to a single person at night. If they win, it will count as a victory that will let you restart the game and move on to your Second form.\n- You may choose a dead Good player. You’ll make them use their ability on a different target, learning their role in the process. You can’t use this on a dead person more than once in a game.");

		e.addField("Abilities (First, last.):", "Choose two targets at night. Players visiting the first target will unknowingly be redirected to the second, and vice version. Your targets will know they were transported.");

		e.addField("Attributes (First):", "- Detection Immunity; You will appear as a Town Killing role, though players can still learn you’re the 400% SPEEDRUN by checking your role directly.\n- On odd nights you will have a vision of three players, at least one will be Evil.\n- On even nights you will have a vision of two players, at least one will be Good.\n- Each night, you will learn the names of all players visited by members of Evil factions.\n- If a conversion-capable role visits you, you will automatically retaliate with a basic attack. You will also have basic defense against them.\n- Roleblock Immunity\n- You are able to talk to the dead each night, appearing as the “Medium (60)” when you do.\n- Control Immunity");

		e.addField("Attributes (Global):", "- You start the game in your First form. In addition to these attributes, you will have the attributes and abilities marked as First.\n- You must complete your First Goal. Once you do, the game will restart, with all players retaining the roles they started the game with, but you will move on to your Second form.\n- Completing the game in your Second form will restart it with your Third form, then your Fourth form, then finally you’ll win the game.\n- The game will not restart if you fail to complete your current goal.\n- You won’t be allowed to join factional chats in any form.\n- You can’t target yourself with any abilities except for those that specifically say they can.\n- You may multitask.\n- ALL deaths are cleaned until you reach your Fourth form.\n- Conversion Immunity");
		
		e.addField("Goal:", "First: Live to lynch every criminal and evildoer.");
	});

	register_role(["400%_speedrun", "400%speedrun", "400%", "speedrun", "1989b"], "Neutral", "400% SPEEDRUN (Second)", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1989B");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities (Second):", "- Disguise one player as any non-evil player. The disguised player will appear innocent, and all results will be based on what would happen if the disguise was checked instead. You will be notified that this failed if you try to choose an evil player as the disguise.\n- Choose a player, and write a fake role and last will to be revealed if they die.\n- Choose a player to frame at night. They will appear as a Framer to investigators.\n- Choose a player and write a fake feedback message for them to see.\n- Choose a player to clean at night, doing such a good job that nobody will even know they died. They will appear alive publicly, but they can’t speak, vote, whisper, or use abilities, not even ones they could normally use while dead. All abilities will also fail against them, no matter what.\n- Lie in wait at a player’s house at night. If someone visits them, you will attack the visitor, which counts as indirect. Otherwise, you will directly attack your target.\n- Attack someone each night.");

		e.addField("Abilities (Second, cont.):", "- Attack someone each night, but with Control Immunity.\n- Choose a player each night to silence.\n- Learn a player’s exact role each night.\n- Roleblock a player each night.");

		e.addField("Attributes (Second):", "- Detection Immunity\n- Roleblock Immunity\n- You will overhear all whispers.\n- All of your kills will appear as a result of the Factional Mafia Kill by default.");

		e.addField("Attributes (Global):", "- You start the game in your First form. In addition to these attributes, you will have the attributes and abilities marked as First.\n- You must complete your First Goal. Once you do, the game will restart, with all players retaining the roles they started the game with, but you will move on to your Second form.\n- Completing the game in your Second form will restart it with your Third form, then your Fourth form, then finally you’ll win the game.\n- The game will not restart if you fail to complete your current goal.\n- You won’t be allowed to join factional chats in any form.\n- You can’t target yourself with any abilities except for those that specifically say they can.\n- You may multitask.\n- ALL deaths are cleaned until you reach your Fourth form.\n- Conversion Immunity");
		
		e.addField("Goal:", "Second: Live to kill anyone that will not submit to the Mafia.");
	});

	register_role(["400%_speedrun", "400%speedrun", "400%", "speedrun", "1989c"], "Neutral", "400% SPEEDRUN (Third)", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1989C");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities (Third):", "- Choose two players. The first one will be controlled into targeting the second, if possible. You will learn the role of the controlled target. You will also hit the first player with a basic attack if this is Night 3 or later, and if they die, players will think the “Coven Leader (28)” killed them.\n- Hex a target each night, making them appear as a “Hex Master (83)” to investigators. If all living non-Coven players other than you are Hexed, they will all die to a unstoppable attacks.\n- Choose to deal a Powerful attack to all visitors. They will be stoned rather than cleaned upon dying. (3 uses)\n- Reanimate a dead player, and make them use their ability on another. You can’t reanimate the same person a second time.\n- Poison a player at night. They will die after a day if they have no defense when poisoned, or if they aren’t healed in time.\n- Choose one: Heal a player, learn a player’s role, or basic attack a player. Each option has a three-day cooldown.");

		e.addField("Attributes (Third):", "- Detection Immunity and Basic Defense after Night 3.\n- Roleblock Immunity\n- Control Immunity");

		e.addField("Attributes (Global):", "- You start the game in your First form. In addition to these attributes, you will have the attributes and abilities marked as First.\n- You must complete your First Goal. Once you do, the game will restart, with all players retaining the roles they started the game with, but you will move on to your Second form.\n- Completing the game in your Second form will restart it with your Third form, then your Fourth form, then finally you’ll win the game.\n- The game will not restart if you fail to complete your current goal.\n- You won’t be allowed to join factional chats in any form.\n- You can’t target yourself with any abilities except for those that specifically say they can.\n- You may multitask.\n- ALL deaths are cleaned until you reach your Fourth form.\n- Conversion Immunity");
		
		e.addField("Goal:", "Third: Live to kill all who would oppose the Coven.");
	});

	register_role(["400%_speedrun", "400%speedrun", "400%", "speedrun", "1989d"], "Neutral", "400% SPEEDRUN (Fourth)", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1989D");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities (Fourth):", "Choose a dead player. You will learn their role, and add its abilities and attributes to your own. Your goal will not change.\n- Heal yourself with Powerful Defense and purge negative effects. Bypasses jailing and blocks execution. (2 uses)\n- Put on a bulletproof vest at night, granting yourself basic defense. (4 uses)\n- Choose a player in the day to duel in the following night, roleblocking them. You will secretly choose Scimitar, Rapier, and Pistol. Your target will secretly choose Sidestep, Chainmail, or Backpedal.  Scimitar beats Sidestep, Rapier beats Chainmail, and Pistol beats Backpedal. If your target loses, they are dealt a Powerful Attack.\n- Infect a player with the Plague each night, which will spread whenever players visit you or infected players.\n- Powerful Rampage at a target’s house each night. This is only usable once all players are infected by the Plague.");

		e.addField("Abilities (Fourth, cont.):", "Entrance a player into becoming your Thrall permanently. You learn the role of every Thrall and may choose their actions each night. You still have to kill your Thralls to win. You must wait a night after using this ability successfully.\n- Control one player each night, forcing them to target another, if possible. You will learn the role of the player you control.\n- Douse a player each night, disguising them as the “Arsonist (87)”. If you target yourself with this ability, you will instead deal an unstoppable attack to all Doused players.\n- Powerful attack a player on full moon nights. Once this ability kills one player, it can be used every night. After the second kill, this ability rampages. After the third kill, it deals an unstoppable rampage instead.\n- Basic attack a player each night.\n- Powerful Rampage at someone’s night during full moon nights. Or, choose yourself to attack your own visitors instead.");

		e.addField("Attributes (Fourth):", "- Detection Immunity\n- Roleblock Immunity\n- Control Immunity\n- Basic Defense\n- Invincible Defense once all other living players become infected by the Plague.\n- The first time you are lynched, you will survive. The following night, you may choose a guilty or abstaining voter to haunt, killing them with an unstoppable attack.\n- If someone attempts to roleblock you, you will retaliate with a basic attack instead. If this kills them, it will make their will unreadable by covering it in blood. In any night, you may opt to spare roleblockers instead.");

		e.addField("Attributes (Global):", "- You start the game in your First form. In addition to these attributes, you will have the attributes and abilities marked as First.\n- You must complete your First Goal. Once you do, the game will restart, with all players retaining the roles they started the game with, but you will move on to your Second form.\n- Completing the game in your Second form will restart it with your Third form, then your Fourth form, then finally you’ll win the game.\n- The game will not restart if you fail to complete your current goal.\n- You won’t be allowed to join factional chats in any form.\n- You can’t target yourself with any abilities except for those that specifically say they can.\n- You may multitask.\n- ALL deaths are cleaned until you reach your Fourth form.\n- Conversion Immunity");
		
		e.addField("Goal:", "Fourth: Live to kill every last player, including all neutrals.");
	});

	register_role(["pear_into", "pearinto", "pi", "1990"], "Town", "Pear Into", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1990\n*I know we're gonna eat what we're craving for.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pear into two players, and all other players who visit them.");

		e.addField("Attributes:", "- You may only unlock the next ability by having used the previous one on every player alive other than yourself. You may choose which ability to use each night.\n> Pear — Roleblock them.\n> Apple — Give them Basic defense for the night.\n> Lemon — Redirect them to yourself.\n> Lime — Deal a Basic attack to them.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["medium_serial_killer", "mediumserialkiller", "medium_sk", "mediumsk", "msk", "sk", "1991"], "SK", "Medium Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1991");

		e.addField("Alignment", "SK Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your ritual knife.");

		e.addField("Attributes:", "- Players you killed give you an extra vote.\n- When voting, it will appear as **The Medium Serial Killer and their X victims have voted Person!**\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["magus_of_the_struggle", "magusofthestruggle", "magus", "struggle", "mots", "1992"], "Coven", "Magus of the Struggle", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1992");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn someone's role each night. If you have the Necronomicon, you may attack them instead.");

		e.addField("Attributes:", "- There's two Town Power roles and they can't win with each other. All players are informed of this and the rolelist is updated accordingly.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["drama_queen", "dramaqueen", "drama", "queen", "dq", "1993"], "Neutral", "Drama Queen", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1993\n*Isn't this entire game a he said she said they said issue?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose two players at night. They will become Rivals with each other. Their win condition is updated to include that they must survive to the end of the game and eliminate their rival to win.");

		e.addField("Attributes:", "- Players who are Rivals will no longer be able to target each other with abilities.\n- Anyone who you have previously targeted cannot target you with attacking abilities. If they attempt to do so, their ability will fail.\n- You have a one-use Basic autovest.");
		
		e.addField("Goal:", "Ensure that one player from at least three pairs of rivals you have created dies.");
	});

	register_role(["ultimate_jailor", "ultimatejailor", "ultimate", "jailor", "uj", "1994"], "Neutral", "Ultimate Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1994");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use one of your many abilities.");

		e.addField("Attributes:", "- You have access to every jailor-like role (Jailor, Wisteria, Author, X-Ray, etc.)\n- Each jailor-like role has their own separate executions (If you use an execution as Jailor, you still have all your executions for Warden).");
		
		e.addField("Goal:", "Kill all who oppose being jailed. (NK goal)");
	});

	register_role(["emeril_witch_of_puppeteering", "emerilwitchofpuppeteering", "emeril", "witch_of_puppeteering", "witchofpuppeteering", "ewop", "1995"], "Coven", "Emeril, Witch of Puppeteering", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1995");

		e.addField("Alignment", "Coven Head", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Control (Night): Control a player to visit another, you will learn their role and their night feedback, while they will not receive any.\n- Blind (Day, 3 uses): Prevent a target from receiving night feedback tonight that are priority 0>.");

		e.addField("Attributes:", "- With the Necronomicon, you deal a powerful attack to your target, and have powerful defense.\n- You have Necronomicon Priority.\n- You cannot spawn with other Coven Heads or the Coven Leader.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["klepto", "1996"], "Koopa", "Klepto", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1996");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal an enemy's cap at night.");

		e.addField("Attributes:", "- Stealing another player's cap effectively disables their primary ability as determined by the host. They are notified of this.\n- Players may get their cap back by either your death, or visiting a player of your choosing. This may be a koopa. You cannot choose yourself.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["reserved_part_5", "reservedpart5", "rp5", "1997"], "Neutral", "Reserved Part 5", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1997");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- After 24 hours, the host picks a Koopa role for this to become.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["reserved_part_6", "reservedpart6", "rp6", "1998"], "Neutral", "Reserved Part 6", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1998");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of any role that was reserved at a point.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["reserved_part_7", "reservedpart7", "rp7", "1999"], "Neutral", "Reserved Part 7", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1999");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- 24 hours after the first game this is in, the host decides what role to make this. This is now that role forever. The role must be a Neutral (Other) role.");
		
		e.addField("Goal:", "Cope, seethe, and mald.");
	});

	register_role(["placeholder", "300th_role", "300throle", "300th", "tpfl300rbind", "tpfl3rbind", "2000"], "Town", "Temporary Placeholder For Lunari's 300th Role Because It's Not Done", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2000");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may reveal yourself during the day as Temporary Placeholder For Lunari's 300th Role Because It's Not Done.\n- Select someone during the day to jail.\n- Execute your jailed target. 3 uses.");

		e.addField("Attributes:", "- Gain 3 votes for the rest of the game when you reveal.\n- Your jail works exactly like a real Jailor.\n- Your kills do not appear as a Jailor.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
