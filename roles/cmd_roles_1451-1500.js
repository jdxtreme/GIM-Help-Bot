module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["thaye", "1451"], "Spirit", "Thaye", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1451");

		e.addField("Alignment", "Spirit Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone's home, spreading an infectious poison.");

		e.addField("Attributes:", "- The poison spreads like a Plaguebearer's plague - anyone who visits or gets visited by an infected person (or you) is poisoned.\n- The poison otherwise acts as normal poison. If your attack value goes down, the attack value of the night someone was poisoned applies, not the value that you currently have.\n- Poisoned players are only informed they were poisoned, not that it was infectious.");

		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["recruit", "1452"], "Toppat", "Recruit", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1452");

		e.addField("Alignment", "Toppat Clan Operator", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Look out for another Toppat.");

		e.addField("Attributes:", "- If some form of negative action would occur to your target because of them visiting (such as a Veteran, or being tracked if they're a killing role), you will roleblock them and bypass immunity.\n**Chief Modifier** - You will also learn what it was that you prevented. If you are the final Toppat, you may use your ability on yourself.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["new_role", "newrole", "new", "nr", "1453"], "Neutral", "New Role", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1453");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of the game, you will be given a list of the Factions present in the game.\n- You can make a new role before the game starts, That role can be from any faction that is in the game, including town and neutrals, Then you will become that role.\n- That role will exist for this game only, you will show up as a New Role(1453) if investigated.\n- The host has the right to force reroll you if they think the role is OP or Bad.\n- You may reroll this even if you have no rerolls left.");

		e.addField("Goal:", "Win as the role you create.");
	});

	register_role(["loan_shark", "loanshark", "loan", "shark", "ls", "1454"], "Mafia", "Loan Shark", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1454");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force someone to pay you tonight. They have to pay you with 1 tier of Attack or Defense. It's taken from them, and you can give it to yourself or one of your teammates. If the target has None attack and None or Vulnerable defense you will just attack them.");

		e.addField("Attributes:", "- You cannot attack people unless you use your ability or use the factional kill.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["government", "gov", "1455"], "Town", "The Government", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1455");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go farming. Each time you farm, you can use an additional ability at the same time.\n- Sell stuff, increasing either your attack or defense.\n- Attack someone.\n- Educate the Town, publicly revealing one role in the game.\n- Produce energy, granting all Town roles roleblock and control immunity.\n- Heal the Town, curing all Town roles of negative effects such as poison and bleeding.\n- Defend the Town, granting all Town Basic defense.\n- Ensure justice, allowing two people to be lynched the next day.\n- Send out laborers to grant all Town roles Astral.\n- Improve relations with Neutrals. All roles with the goal \"Live to see the Town lose\" must now \"Survive to the end of the game.\"\n- Improve the land Salem is on, allowing full moons to show everyone who visited them.\n- Make money through taxes, improving your Attack and Defense at the cost of roleblocking a Townie.\n- Transport two players.\n- Permanently grant Town roles who killed an evil Basic defense.");

		e.addField("Attributes:", "- Unless otherwise specified, your effects only last the night they are used.\n- Increases and decreases to Attack and Defense are an exception.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["viridescent_curse", "viridescentcurse", "viridescent", "viri", "vc", "1456"], "Neutral", "Viridescent Curse", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1456");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Full-Stop (Night, 0 uses): Prevent all lynches from occuring, any action involving a lynch will fail for the next day automatically. 1 use when lynched.");

		e.addField("Attributes:", "- If the game is canned, and the next host complies, select your next role after the rolelist has been posted.");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["julie_chen", "juliechen", "julie", "chen", "jc", "1457"], "Neutral", "Julie Chen", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1457");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- But First: Select two players at night. Tomorrow, if both players are alive, only those two players may be voted for whatsoever. Infinite uses, once per night.\n- Rig: Select a player. They receive 2 anonymous votes instantly. These votes do not count as being from you.\n- Evict: Attack a player at night, dealing a basic attack to them.");

		e.addField("Attributes:", "- Control-immune\n- Roleblock-immune");

		e.addField("Goal:", "Get two players lynched while being affected by \"But First\".");
	});

	register_role(["jeff_probst", "jeffprobst", "jeff", "probst", "jb", "1458"], "Neutral", "Jeff Probst", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1458\n*\"ONE SURVIVOR\"*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Grueling Challenge: At night, select two players. The one with the highest or lowest (your choice when using this) # will be dealt a Powerful attack while the other one will receive Powerful defense for the night.\n- WAKE UP ANGIE: At night, deny cookies from any one player, giving them two votes the following day.\n- YOU'VE GOT TO DIG: Select a player at night. If their base attack is no better than Basic, and they have no defense, they are banned.");

		e.addField("Attributes:", "- (Only 1 Ability/night)\n- The Host: Literally cannot be killed by lynching. Votes for them will secretly become self-votes.\n- Control-immune\n- Roleblock-immune");

		e.addField("Goal:", "Crown a Sole Survivor ~ ie: Leave only one player alive in the end.");
	});

	register_role(["hunter", "1459", "176u"], "Unseen", "Hunter", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1459\nConverted from: Trapper");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare Trap (Night): Gain a use of Place Trap.\n- Place Trap (Night): Place your trap, which is fundamentally identical to a normal Trapper's trap, except that Unseen roles cannot trigger it. 0 uses.\n- Deathly Trap (Night): Spend a use of Place Trap to place a trap which will kill anyone that triggers it, regardless of role. Unseen will not trigger these traps. 2 uses.");

		e.addField("Attributes:", "- You may have multiple traps set up at once.\n- You may not build and place a trap in the same night.\n- However, you may place multiple traps in one night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["owo_owo", "owoowo", "owo", "1460"], "Other", "owo owo", (e) =>
	{
		e.setDescription("Post 1460");

		e.addField("Alignment", "OwO", true);
		e.addField("Attack", "PowoFUL", true);
		e.addField("Defense", "PowoFUL", true);

		e.addField("Abilities:", "- owo: owo a player right in their owo. They must include the phrase \"owo\" in each goddamn post they make for the rest of the game, including in their own channel when using abilities. Failing to do this counts as a ragequit and lynches them instantly. (1 use per night)");

		e.addField("Goal:", "Make 2 players ragequit.");
	});

	register_role(["owofighter", "of", "1461"], "Other", "owofighter", (e) =>
	{
		e.setDescription("Post 1461");

		e.addField("Alignment", "OwO", true);
		e.addField("Attack", "PowoFUL", true);
		e.addField("Defense", "PowoFUL", true);

		e.addField("Abilities:", "- Select a player. If they are the owo owo, their own ability is secretly used on them. Now if they fail to post \"owo\" in each of their posts, they are lynched instantly (this counts as a ragequit).");

		e.addField("Attributes:", "- May not spawn without an owo owo (1460) in existence. Instantly becomes an owo owo if no owo owo is alive.");

		e.addField("Goal:", "Become the owo owo and win as one.");
	});

	register_role(["uwufighter", "uf", "1462"], "Neutral", "UwUfighter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1462");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "UwUnstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- If anyone refers to \"UwU\", \"OwO\", or any similar emotes in text while you are in the game, they are immediately modkilled.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["uwufighterfighter", "uff", "1463"], "Neutral", "UwUfighterfighter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1463");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "UwUnstoppable", true);
		e.addField("Defense", "PoUWUful", true);

		e.addField("Attributes:", "- If anyone is killed by UwUfighter, the UwUfighter is instantly killed.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["uwu_tang_clan", "uwutangclan", "utc", "1464"], "Neutral", "UwU Tang Clan", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1464");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "\"Standawd\" (Basic)", true);
		e.addField("Defense", "\"UwUnstoppable\" (Invincible)", true);

		e.addField("Abilities:", "- Save someone from eternal damnation at night.\n- Choose a motherfucker to hit tonight during the day.");

		e.addField("Attributes:", "- If someone has been given a post restriction relating to posting \"OwO\" or \"UwU\" or any such variants, remove this post restriction by saving them from damnation.\n- If your day target's role contains the letters U and W, your attack will be upgraded to Powufuw (flavored Powerful)");

		e.addField("Goal:", "Make sure that all players alive at the end of the game do not have both of the letter U and W in their role name **AND** make sure that nobody alive at the end of the game has a ridiculous post restriction.");
	});

	register_role(["lewd_searchies", "lewdsearchies", "lewd", "searchies", "lc", "1465"], "Neutral", "Lewd Searchies", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1465");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Search for furry art owo owo. Post one in each day chat.");

		e.addField("Goal:", "Survive until the end of the game despite your role.");
	});

	register_role(["anti-hero", "anti_hero", "antihero", "ah", "1466"], "Town", "Anti-Hero", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1466");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your gained abilities.");

		e.addField("Attributes:", "- Roleblock, Control, Redirect Immune\n- At the beginning of the game, immediately gain all of the abilities and attributes of a random Neutral Killing who is able to deal Unstoppable attacks. You do not gain their defense, or any protection methods.\n- Your kills are attributed to the role you gained.\n- If you are lynched, attack one of your voters with a Powerful attack from the grave the next night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ultimate_savior", "ultimatesavior", "ultimate", "savior", "us", "1467"], "Neutral", "Ultimate Savior", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1467");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- 423: Convince someone to abandon their good ways and join the Evil. Their goal will be turned into \"Live to see the Town lose the game.\" If you target someone who has already won, or someone with a permanent night chat, your ability will fail and you will get your charge back. (1 use)\n- 663: Protect one player at night, granting them invincible defense. If you successfully protect a player, your target's attack will be reflected upon them. This includes astral, indirect, and overkill attacks. Any player you successfully protect retains their normal win condition, but can alternatively live to see the game end with you alive.\n- 670: Protect a player with Powerful defense tonight. If your target is attacked, reflect one attacker's attack. If you successfully protect someone with this ability, your target's win condition is converted to \"Live to see the Town lose the game\".");

		e.addField("Attributes:", "- You may only use one ability each night.\n- You have a layer of Basic defense that can prevent one attack.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["mourner", "1467"], "Town", "Mourner", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1467");

		e.addField("Alignment", "Unique Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ask a question to the dead at night.\n- Use a dead player's ability against your visitors at night.");

		e.addField("Attributes:", "- Your answers are anonymous. The host will not send you any answers which contain any allusions to the identity of the player answering.\n- The host will not send questions which intend to loophole this role's mechanics.\n- You may ask infinite questions.\n- If you use a corpse whose abilities requires a prior action to be taken first (Building as Trapper, dousing as Arsonist, etc) you will skip that and use that ability ability (Activating a trap, igniting, etc)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spade", "1469", "713u"], "Unseen", "Spade", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1469\nConverted from: Ace");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mark (Night): Choose a player each night and give them a Mark.");

		e.addField("Attributes:", "- All Marks placed as Ace will transfer over.\n- After giving a Mark, if all living opponents to the Unseen have Marks, the Unseen wins the game and all roles opposing the Unseen lose the game.\n- Town roles are not notified if given a Mark. Non-Town roles are, but they cannot differentiate it from an Ace.\n- Retain your ability and attributes if you become Assassin. You cannot place a Mark and use an Assassin ability in the same night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ninja_brigadier", "ninjabrigadier", "ninja", "brigadier", "nb", "1470", "871u"], "Unseen", "Ninja Brigadier", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1470\nConverted from: Sensei");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Meditation (Night): Grant yourself Basic defense, and deal a Basic attack to anyone who attacks you, even if the attack is Astral.\n- Private Training (Night): Select another Unseen member. They gain the following abilities based on how many times you visited them:\n• 0 prior visits: You may grant yourself Basic Defense at night.\n• 1 prior visit: You may grant yourself Basic Defense at night; Additionally, if you are attacked when you do this, you will deal a Basic Attack back to the attacker (Unless the attacker's visit is Astral).\n• 2 prior visits: You may use any of the Ninja Brigadier (Post 1470)'s night abilities.\n- Organized Fighting (Night): Roleblock all Unseen members and select a target. Deal an attack for each living Unseen member (including yourself), each attack is one tier higher than the last. (If you have 4 members, the target will take a Basic, Powerful, Unstoppable, and Overkill attack).");

		e.addField("Attributes:", "- If the Unseen somehow has more than 4 members, Organized Fighting will simply ban a player.");

		e.addField("Goal:", factions.Unseen.goal);
	});
};
