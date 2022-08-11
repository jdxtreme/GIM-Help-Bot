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

		e.addField("Alignment", "Toppat Clan Support", true);
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

		e.addField("Alignment", "Mafia Killing", true);
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

	register_role(["mourner", "1468"], "Town", "Mourner", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1468");

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

	register_role(["stage_caster", "stagecaster", "stage", "sc", "1471"], "Neutral", "Ninja Brigadier", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1471");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleplay during the day.");

		e.addField("Attributes:", "- If anyone in the town does not roleplay during the day nor send at least one message, they will be Obliterated.\n- The town is notified that you exist at the start of the game.");

		e.addField("Goal:", "Successfully roleplay for three days.");
	});

	register_role(["vital_late_game_traitor", "vitallategametraitor", "vital", "vlgt", "1472"], "Town", "VITAL Late Game Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1472");

		e.addField("Alignment", "Town Support (Neutral Evil)", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Wait until the late game and then become VITAL.");

		e.addField("Attributes:", "- Once only half the players remain, gain 3 town abilities of your choice. The abilities must be from different subalignments. You also become Neutral (Evil), gaining the wincon of \"See the town lose the game\".\n- You cannot get abilities that harm you.\n- Once you use all your abilities, gain a new set of abilities.");

		e.addField("Goal:", factions.Town.goal + " OR See the town lose the game at all costs.");
	});

	register_role(["founder", "1473"], "Creator", "The Founder", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1473");

		e.addField("Alignment", "Creator Head", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player at night.\n- During every other day, select a Creator (except yourself) to be able to use both abilities tonight.");

		e.addField("Attributes:", "- Gain an extra kill per night for each Creator dead.");

		e.addField("Goal:", factions.Creator.goal);
	});

	register_role(["designer", "1474"], "Creator", "The Designer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1474");

		e.addField("Alignment", "Creator Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn a player's role at night.\n- Turn a player into any role of the same alignment they were originally. If you've learned their role, you may choose a specific role.\n- During every other day, have the host create a role on your behalf.");

		e.addField("Goal:", factions.Creator.goal);
	});

	register_role(["balancer", "bal", "1475"], "Creator", "The Balancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1475");

		e.addField("Alignment", "Creator Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Downgrade a non-Creator role at night.\n- Upgrade a Creator role at night.");

		e.addField("Attributes:", "- Downgrades are permanent, upgrades are not.\n- Downgrades do not notify the victim.\n- Downgrading has various effects depending on the alignment.\n- Upgrades have various effects depending on the role that take place the next day.");

		e.addField("Downgrade Effects:", "* Killing: Down an attack tier and removes a charge of all abilities, if applicable. If the attack becomes a None attack, they will become unable to kill.\n* Protective: Roles that can kill lose their attack value. Otherwise, protections are only against direct attacks, only against one attack, and only against Basic attacks.\n* Investigative: Every other night, they will receive a randomized result.\n* Support/Head/Power and Others: You may choose to silently redirect all downgraded players of this alignment to themselves if their ability is negative. If not, their ability will secretly fail instead. This is in place of your night ability if you can only use one.");

		e.addField("Upgrade Effects:", "* The Founder: Rampage attack and all Creators are affected by the day ability.\n* The Designer: Learn the roles of all of your target's and your visitors, as well as their names.\n* The Simulator: Select 5 players instead of 3.");

		e.addField("Goal:", factions.Creator.goal);
	});

	register_role(["simulator", "sim", "1476"], "Creator", "The Simulator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1476");

		e.addField("Alignment", "Creator Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 3 players at night. All 3 will be forced to target the other 2 at the same time.\n- At night, select a player to immediately learn the outcome of their ability. This includes the effects and who they are targeting.");

		e.addField("Goal:", factions.Creator.goal);
	});

	register_role(["pleasant_dreams", "pleasantdreams", "pd", "pleasant", "dreams", "1477"], "Town", "Pleasant Dreams", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1477");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take away their First ability, causing them to suffer from a mental illness. When they wake up, they will have their ability back.");

		e.addField("Attributes:", "- Their health will not be affected by physical attacks.\n- They cannot kill anyone within the town for the next 2 nights.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["plaguebearer", "pb", "pbbatgim", "1478"], "Neutral", "Plaguebearer (But Accustomed to GIM)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1478");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_PlagueBearer_1.png";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may choose to infect a player with the Plague each night.");

		e.addField("Attributes:", "- Players will not know they have been infected.\n- When all living players are infected, you become 1479 Pestilence (But Accustomed to GIM).\n- Detection Immunity\n- The Plague is spread by visits to you and infected players, as well as infected players who visit people.");

		e.addField("Goal:", "Infect all living players and become Pestilence (Post 95).");
	});

	register_role(["pestilence", "pest", "pbatgim", "1479"], "Neutral", "Pestilence (But Accustomed to GIM)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1479");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/998691858207228026.webp";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Deal a rampage attack to a player.");

		e.addField("Attributes:", "- You are roleblock immune.\n- You are control immune.\n- You bypass protective roles.\n- You are detection immune.\n- Your ability cannot fail, and this cannot be bypassed, even by things that say that they would bypass not being able to be bypassed.\n- You cannot be banned.\n- You cannot be modkilled.\n- You cannot die during the night.\n- You cannot die during the day, except by lynching.\n- If you are kicked, you are not removed from the game. The host has to inform you of all public notifications (votes, day/night, etc) through DMs and you may vote and use your ability in DMs. You may still be voted. If you return to the server, you return to normal.\n- You cannot be muted.\n- You cannot change roles unless you somehow changed into this role. Going from Plaguebearer doesn't count.\n- You cannot lose any abilities that this has by default.\n- You cannot lose any attributes that this has by default.\n- This role cannot have its abilities and attributes copied.");

		e.addField("Attributes (cont.):", "- However, other people can become this role, so long as one isn't already alive. If Plaguebearer (But Accustomed to GIM) is alive, others cannot become either.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["all_for_one", "allforone", "afo", "1480"], "Town", "All For One", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1480");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal a player's wealth.");

		e.addField("Attributes:", "- Stealing a player's wealth does the following things:\n> * First time: Roleblocks the player.\n> * Second time: Roleblocks the player and you learn their role.\n> * Third time: Roleblocks the player and you attack them.\n> * Fourth or more time: Roleblocks the player and deals a Rampage attack.\n- Each time you steal someone's wealth, you gain an extra anonymous vote. These votes will accumulate.\n- If the game would otherwise end, you may choose to block the game from ending. The town will not be told that you stopped the game from ending. However, if you die and Town wins, you will not win. Does not trigger while dead.\n- Gain permanent Basic defense if the above attribute was triggered or if you are the final Town role. Also, you may choose to attack a player on your second theft instead of the third.\n- Winning by yourself will grant you an extra reroll next game.");

		e.addField("Goal:", factions.Town.goal + " However, if the game ends with you as the last surviving Town, you win and all other Townies lose.");
	});

	register_role(["game_11_but_balanced", "game11butbalanced", "game_11", "game11", "g11bb", "gebb", "1481"], "Neutral", "Game 11 But Balanced", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1481");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- At the start of the game, you'll receive a random NK role that your kills will be disguised as. You have infinite rerolls on this until you confirm it so you can choose a role that actually makes sense.\n- If someone refers to the role you have by anything except its name (misspellings, acronyms, its role number, pronouns, or anything else), they become marked. You cannot mark yourself.\n- Once all living players that would oppose you are marked, immediately deal an Overkill attack to all marked players, including ones that don't oppose you if they're marked.\n- Players can only become marked from day chats, private channels, whispers, factional chats, other private chats (including anonymous ones), and any other channel that exists in the current game. Channels outside of the game will not mark players.");

		e.addField("Attributes (cont.):", "- If you die, don't. Instead, select 1/3rd of all letters in your fake role's original name. Those letters are removed from everywhere in the current game. You can't select letters you've already removed. If you have no letters left (as in, you died 3 times), you die.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["game_5_but_balanced", "game5butbalanced", "game_5", "game5", "g5bb", "gfbb", "1482"], "Town", "Game 5 But Balanced", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1482");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Create a factional chat. Except instead of a chat, you send an anonymous message to all town. You can include your name because I can't be bothered to find all the loopholes that will end up making this useless. Triggers instantly on use, you can use it once each day and twice each night.\n- Use the Town FMK. Except, instead of an FMK, at the beginning of each night, you may choose to have all town players anonymously vote to kill someone. Votes cannot be changed once placed, and in a tie, you decide. Players may vote for \"No Kill\" as well. If you have a target, you will directly attack them like any other attack.");

		e.addField("Attributes:", "- \"Town\" refers to Town roles, while \"town\" refers to people you have marked as such. All players except yourself start as being marked as town, and at any time, regardless of the circumstances, you may unmark or remark any player as town, **except yourself.** (yes, this means you cannot vote in your fmk)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sharp_weapon_specialist", "sharpweaponspecialist", "sws", "1483"], "Neutral", "Game 11 But Balanced", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1483");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose {up to} four players. <Determine if any of them are (killing) roles. If any are (not),> grant them a (Basic) attack, <(a one-time use Powerful defense shield)>, and attack them. {If any are}, force them to [target themselves {during the next day's voting. You also] shoot them.}\n- **Cleave** during the day, removing the text in braces.\n- **Chop** during the day, removing the text in chevrons.\n- **Carve** during the day, removing the text in brackets.\n- **Cut** during the day, removing the text in parentheses.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["confinement_is_solitary", "confinementissolitary", "confinement", "solitary", "cis", "1484"], "Neutral", "Confinement Is Solitary", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1484");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Clear all current Confined, and roleblock a target, and also roleblock all players who targeted them.\n- Clear all current Confined from all evil players. You will learn who is affected.");

		e.addField("Attributes:", "- Whilst you are alive, all roleblocks instead grant the Confined status, which fails the target’s actions and fails all non-killing visits to them. When a Confined player is protected or killed, or you use your ability, all current Confined is cleared. Otherwise, it lasts until you die.\n- If Confined player attempts to vote, their vote is cancelled (and majority lowers), and their Confined status is revealed.\n- Roleblock immune.\n- You may only use one ability per night.\n- This role cannot exist in a game with the Everfrost.");

		e.addField("Goal:", "Live to see the town lose the game.");
	});

	register_role(["truth", "1485"], "Town", "The Truth", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1485");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the Day, Guess if the player about to be lynched is able to win with Town or not.\n- In the Night, shoot someone with your Truth Bullet. (0 use)");

		e.addField("Attributes:", "- Whenever your Guess is correct, you will gain a Truth bullet, but only if the person was actually lynched.\n- If you kill a teammate, you will lose all of your Truth Bullets and you won't be allowed to Guess the following day.\n- You cannot Guess yourself, even if you can somehow survive the Lynch.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["unshushable", "shush", "1486"], "Town", "Unshushable", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1486");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hush-Hush: Open a whisper channel with anyone. Can be used at any time, including night.\n- Listen to me!: Cast one extra vote for any player. 1 use per day.\n- Shush: Deal a basic attack to any player at night. 2 uses.");

		e.addField("Attributes:", "- May use abilities while dead.\n- Cannot be muted or shushed by any role ability or passive.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["barack_obama", "barackobama", "barack", "obama", "bo", "1487"], "Town", "Barack Obama", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1487");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- The President: Choose any town role. You become that role.");

		e.addField("Attributes:", "- Cannot be killed during the day. Any attempt to do so will cause the day to restart, everything is rewinded. You do not keep this attribute upon switching roles.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["i_was_designed", "iwasdesigned", "designed", "iwd", "1488"], "Neutral", "I Was Designed", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1488");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, choose a player to become your designer, opening a permanent chat with them. Together, you can create a role that you will become.");

		e.addField("Attributes:", "- Your goal and alignment will always be the same as your designer.\n- You may only use attack values/defence values/abilities/attributes from the roles of dead players in the game, although you may combine elements and may change wording or details in order for the new role to make sense.\n- The host must approve of the role for you to become it.\n- After becoming a new role, you are permanently framed and will show unfavourable results to investigative roles.");

		e.addField("Goal:", "Win with your new role.");
	});

	register_role(["to_wander", "towander", "wander", "1489"], "Town", "To Wander", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1489");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player, purging them granting them invincible defence for the night\n- Guard a player, granting them basic defence for the night and retaliating against all attackers.");

		e.addField("Attributes:", "- All your visits are astral, and you are not affected by rampaging abilities.\n- You cannot target the same player more than once, no matter what.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["involuntary", "1490"], "Coven", "Involuntary", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1490");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player. If you are successful, they will be possessed and appear to still be alive for one day/night cycle.");

		e.addField("Attributes:", "- You may control a possessed player’s votes, whispers and actions. You cannot force them to say anything in a public chat.\n- With the Necronomicon, you may attack twice per night, and possessed players may take two actions per night.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["warlord", "1491"], "Warfleet", "Warlord", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1491");

		e.addField("Alignment", "Unique Warfleet Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a Warfleet member to permanently Upgrade at night. (0 use)");

		e.addField("Attributes:", "- At the start of every even-numbered night, you will gain a use for your Upgrade ability.\n- You may Upgrade yourself.\n- Detection Immunity");

		e.addField("Upgrade:", "- Your Defense will increase for each living Upgraded Warfleet member in the game, other than yourself.\n- If you try to Upgrade a player who has reached their final form, you will instead present them with a choice in the following day: Increase either their Attack or their Defense for the following night.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["destroyer", "1492"], "Warfleet", "Destroyer", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1492");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- In the night, load a guided missile to give your next attack Control and Redirection Immunity. (2 use)");

		e.addField("Attributes:", "- As the factional attacker, your attack is Powerful.");

		e.addField("Upgrade:", "- 1 use Basic Defense\n- When you use the Factional Attack, you will also attack a random non-Warfleet visitor.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["mine_warfarer", "minewarfarer", "mine", "warfarer", "1493"], "Warfleet", "Mine Warfarer", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1493");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At night, choose to manually detonate all your Mines. (1 use)\n- At night, Astrally launch a covert Mine at another target. (1 use)");

		e.addField("Attributes:", "- When you use the Factional Attack, you may opt to secretly plant a Mine at your target's house, instead of directly attacking them.\n- If anybody visits a player who had a Mine placed on them in a previous night, the Mine will detonate, causing a Basic Attack to the player it was planted on and one random visitor. The Mine will then be destroyed.\n- You are not notified if a Mine detonates.\n- You may use Mines/Factional Attacks on yourself.");

		e.addField("Upgrade:", "- 1 use Basic Defense\n- Detonated Mines now kill all non-Warfleet visitors.\n- Upon being Upgraded, you will gain a use for both of your abilities.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["radar", "1494"], "Warfleet", "Radar", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1494");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Scan another player to learn their role. (2 use)");

		e.addField("Attributes:", "- As the Factional Attacker, you will have Redirection Immunity if you target someone that you previously Scanned.\n- Scanning is Astral.");

		e.addField("Upgrade:", "- 1 use Basic Defense\n- You may Scan and use the Factional Attack at the same time.\n- Redirection Immunity");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["torpedo", "1495"], "Warfleet", "Torpedo", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1495");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At night, load a larger missile. Your next attack will be a Rampage. (2 use)");

		e.addField("Attributes:", "- As the Factional Attacker, you cannot be Controlled or Redirected.\n- 1 use Roleblock Immunity");

		e.addField("Upgrade:", "- Upon being Upgraded, you will gain another 2 uses of your load ability and 1-use Basic Defense.\n- Loaded attacks will deal a Powerful Attack to the main target, though the Rampage will remain Basic.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["ironclad", "1496"], "Warfleet", "Ironclad", {subCat: "Defensive"}, (e) =>
	{
		e.setDescription("Post 1496");

		e.addField("Alignment", "Warfleet Defensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic (Variable)", true);

		e.addField("Abilities:", "- Choose another target at night. You will intercept and redirect their attackers to yourself.\n- Spend a night increasing your Defense level, which will apply to the following night. (2 use)");

		e.addField("Attributes:", "- Basic Defense\n- All of your defense increases may only increase your defense up to Invincible tier.");

		e.addField("Upgrade:", "- 1 use Powerful Defense\n- When you use the Factional Attack, your Defense will increase for that night.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["submarine", "1497"], "Warfleet", "Submarine", {subCat: "Defensive"}, (e) =>
	{
		e.setDescription("Post 1497");

		e.addField("Alignment", "Warfleet Defensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hide another people within the depths, making all attacks against them fail.\n- Submerge yourself in water for the night, making all attacks against you fail. (1 use)");

		e.addField("Attributes:", "- You have Basic Defense and Detection Immunity");

		e.addField("Upgrade:", "- After being Upgraded, the next attack against you will automatically fail.\n- As the factional attacker, you will force your target's abilities to fail if they die.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["stealth_ship", "stealthship", "stealth", "ship", "ss", "1498"], "Warfleet", "Stealth Ship", {subCat: "Defensive"}, (e) =>
	{
		e.setDescription("Post 1498");

		e.addField("Alignment", "Warfleet Defensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may Disguise yourself as any role in the day.\n- Scramble any investigative results that another player receives tonight, causing them to provide completely random results. (2 use)");

		e.addField("Attributes:", "- Basic Defense\n- Your Disguises will last until they get replaced by any other Disguise, including from other players.");

		e.addField("Upgrade:", "- You can now use your Disguise ability on any player.\n- Players you Disguise gain 1 use Basic Defense.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["lifeboat", "1499"], "Warfleet", "Lifeboat", {subCat: "Defensive"}, (e) =>
	{
		e.setDescription("Post 1499");

		e.addField("Alignment", "Unique Warfleet Defensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At night, choose another player to repair if they get attacked. That will grant them Powerful Defense and remove any negative effects from them.\n- Choose another player to revive at the start of the next day. (0 use)");

		e.addField("Attributes:", "- Your revival ability cannot be refilled except by bying Upgraded.");

		e.addField("Upgrade:", "- Upon being Upgraded, you will gain one use of your Revival ability.\n- Targets you repair will gain Unstoppable Defense instead.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["doopliss", "1500"], "Koopa", "Doopliss", {subCat: "Supporter"}, (e) =>
	{
		e.setDescription("Post 1500");

		e.addField("Alignment", "Koopa Supporter", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Engulf your target in Shadows for this night.\n- Steal a random Ability from a target that can be useful on its own, You will recieve that ability as a new one while they will get Engulfed in shadows for a night if they use it while you are alive. (2 uses)");

		e.addField("Attributes:", "- Targets engulfed in shadows will:\n> • Have their defense reduced by a tier.\n> • Get torched on death.\n> • Roleblock visitors who aren't attacking.\n- 2 random Townies will get the following ability in the start of the game:\n> Check someone, If they are Doopliss(Number), Deal an Unstoppable attack to them, This Bypasses Roleblocks and Frames.\n- If either Townie dies, this ability is passed down to another random Townie.");

		e.addField("Goal:", factions.Koopa.goal);
	});
};
