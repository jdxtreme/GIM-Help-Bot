module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["lion", "1851"], "Faunae", "Lion", {subCat: "Apex"}, (e) =>
	{
		e.setDescription("Post 1851");

		e.addField("Alignment", "Faunae Apex", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bite one player each night.");

		e.addField("Attributes:", "- You will learn whether the two most recent players who you bit win together.\n- If you bite someone twice in one game you will devour them, attacking and cleaning them, and obtain their win condition. You may only successfully devour one player.\n- At any point in the game you may select a Faunae member to be your heir. They will become the Lion if you die without choosing a side. If you die before selecting someone, you will randomly select an heir.\n- After successfully devouring someone, you will no longer be able to bite anyone who you targeted previously.\n- If you attempt to devour the last remaining member of a faction, you will instead devour yourself but obtain your target's win condition.\n- You will learn the role of the player who you devour.\n- Any attempt to devour a non-factional Neutral role will fail and will appear to be have defense.\n- Win conditions are inherited after all deaths for the given night are processed.");

		e.addField("Attributes (cont.):", "- All Faunae win together at all times and inherit the Lion's win condition.\n- A promoted Lion keeps the bites of the previous one.\n- If the Faunae side with a Neutral Killing, that player will be notified that a Lion attempted to devour them. (credit to Rokk)\n- Unique Alignment");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["cheetah", "1852"], "Faunae", "Cheetah", {subCat: "Predator"}, (e) =>
	{
		e.setDescription("Post 1852");

		e.addField("Alignment", "Faunae Predator", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate three players each night, learning if they all win together.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["buffalo", "1853"], "Faunae", "Buffalo", {subCat: "Predator"}, (e) =>
	{
		e.setDescription("Post 1853");

		e.addField("Alignment", "Faunae Predator", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate one player each night, learning their role and revealing it to all non-Town members. (3 uses, credit to Rokk)");

		e.addField("Attributes:", "- Framed, doused, and hexed players will appear according to their respective effects.\n- Disguised players will appear as the role they disguised as.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["gorilla", "1854"], "Faunae", "Gorilla", {subCat: "Predator"}, (e) =>
	{
		e.setDescription("Post 1854");

		e.addField("Alignment", "Faunae Predator", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player each night, scaring anyone who tries to visit them. (3 uses)");

		e.addField("Attributes:", "- Players who are scared will be roleblocked. (credit to Mr60Gold)");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["fox", "1855"], "Faunae", "Fox", {subCat: "Predator"}, (e) =>
	{
		e.setDescription("Post 1855");

		e.addField("Alignment", "Faunae Predator", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confuse one player each night, causing them to target themselves.");

		e.addField("Attributes:", "- Players do not know that they were confused.\n- Roles that cannot target themselves will be silently roleblocked.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["squirrel", "1856"], "Faunae", "Squirrel", {subCat: "Prey"}, (e) =>
	{
		e.setDescription("Post 1856");

		e.addField("Alignment", "Faunae Prey", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hide one Faunae at another player's house.");

		e.addField("Attributes:", "- Anyone who visits your second target will also visit your first target if possible.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["mockingbird", "mock", "1857"], "Faunae", "Mockingbird", {subCat: "Prey"}, (e) =>
	{
		e.setDescription("Post 1857");

		e.addField("Alignment", "Faunae Prey", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing a song, mesmerizing and roleblockling all non-Faunae. (single use)");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["chameleon", "cham", "1858"], "Faunae", "Chameleon", {subCat: "Prey"}, (e) =>
	{
		e.setDescription("Post 1858");

		e.addField("Alignment", "Faunae Prey", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Camouflage one Faunae and choose another player to disguise them as.");

		e.addField("Attributes:", "- Camouflaged players have powerful defense for the night.\n- The camouflaged Faunae will appear to have the same role as your second target to the Investigator and Sheriff.\n- Your disguised Faunae will appear to be the other person to a Lookout.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["turtle", "1859"], "Faunae", "Turtle", {subCat: "Prey"}, (e) =>
	{
		e.setDescription("Post 1859");

		e.addField("Alignment", "Faunae Prey", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn the abilities of one dead player, gaining their abilities and attributes.");

		e.addField("Attributes:", "- You must target either another Faunae member or someone in the Faunae's chosen faction.\n- You may not choose a unique role. (credit to Enigmatrix)\n- You will still have access to the Faunae chat after remembering a role. You will not have access to the chat or members of any faction whose role you remember.");
		
		e.addField("Goal:", factions.Faunae.goal);
	});

	register_role(["enforcer_x", "enforcerx", "1860"], "X", "Enforcer X", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1860");

		e.addField("Alignment", "X Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- Choose a player to guard. All attacks against them will be redirected to you.\n- Pray to the Devil for the safety of your faction. Every member's defense will be increased by 1. 1 use.\n- Kill someone who has attacked you in a previous night. 1 use.");

		e.addField("Attributes:", "- You cannot kill if you've never been attacked before. However, if the only people to attack you are dead, you may use the ability and waste it with no effect.\n- If you die to a non-X attack, every other X will gain 1 use for each of their limited-use abilities.\n- Cult Leader X will convert Protective roles into this (Assuming someone makes it).");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["random_x", "randomx", "1861"], "X", "Random X", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1861\n*Not a variable with an arbitrarily-defined value.*");

		e.addField("Alignment", "X Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose one of five roles and one of their abilities to take tonight.\n- Perform the ability you gained during the previous day.");

		e.addField("Attributes:", "- At the start of the each day, you will be given five roles capable of killing. These roles will be capable of killing the night after you receive them. You must choose one of these roles and one of their abilities to be able to use tonight. If you do not choose one, it will be randomly decided for you.\n- You may perform the ability of the role you chose yesterday the following night. Your abilities cannot result in the death of another X member. If you do end up attacking an X member, their defense will be too strong for you to kill.");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["prosecutor", "1862"], "Town", "Prosecutor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1862");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select a player. Irrespective of the current votes, they will immediately be lynched. 2 uses.");

		e.addField("Attributes:", "- Lose all uses if your target is Town.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["memories", "1863"], "Neutral", "Memories", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1863");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Re-enact something that happened in a previous game.");

		e.addField("Attributes:", "- At the start of every night, you will be given a game. You can do one thing that happened that game to a player. You can make the event you re-enact effect different people this game.\n- You cannot re-enact lynches or anything the host deems too powerful.\n- You can only target 1 person, but what you re-enact can effect multiple people (for example, you can re-enact Tenacious using factional kill, but you can't re-enact upgraded Militant).\n- You will never be given a canned game, only games that were successful. If a game was successful the second time, you can still remember the second time.\n- You will not be given a game you have already received.");
		
		e.addField("Goal:", "See the good faction lose the game (you can win while dead).");
	});

	register_role(["sandwich", "1864"], "Rock", "Sandwich", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1864");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn someone into a sand sandwich or use a consumed ability.");

		e.addField("Attributes:", "- When you turn someone into a sand sandwich, you roleblock them for that night. You then permanently gain their abilities from the sandwich.\n- If you are the only Rock alive, turn into a **Sand Witch** (Post 1865).");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["sand_witch", "sandwitch", "1865"], "Rock", "Sandwich", {subCat: "Support", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1865");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Turn someone into sand and use your gained abilities.");

		e.addField("Attributes:", "- When you turn someone into sand, you attack them. You then permanently gain their abilities.\n- You may turn someone into sand and use 1 gained ability from each person you have turned into sand/a sand sandwich.\n- This role cannot spawn naturally. It spawns from **Sandwich** (1864).\n- The entire town will be notified when a **Sand Witch**c has been transformed into.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["azalea_witch_of_destruction", "azaleawitchofdestruction", "azalea", "witch_of_destruction", "witchofdestruction", "awod", "1866"], "Coven", "Azalea, Witch of Destruction", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1866");

		e.addField("Alignment", "Coven Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Exterminate (Day, 2 uses): Use your magic powers to curse a player during the day, killing then instantly.\n- Bind (Night): Bind 2 players souls together, causing the first player to perform their action on the seconds target, and vice versa.");

		e.addField("Attributes:", "- Coven Heads, and the Coven Leader cannot spawn with you.\n- You have Necronomicon Priority.\n- Only 1 Coven Head may spawn per game.\n- Detection immunity with the Necronomicon.");

		e.addField("Necronomicon:", "Gain basic defense, as well as attacking your first target of Bind.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["accentaigoo", "accent", "aigoo", "aa", "1867"], "Any", "AccentAigoo", {subCat: "Support/Killing", spawnCat: ["Any", "Neutral"], spawnSubCat: ["Support", "Killing"], syncCats: true}, (e) =>
	{
		e.setDescription("Post 1867");

		e.addField("Alignment", "Any Support | Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- This role has all the abilities and attributes from the following roles:\n> Post 2: Nervous Sleeper\n> Post 8: Oct2\n> Post 11: Tinkerer\n> Post 25: Plumber\n> Post 29: Civilian\n> Post 34: Orchestrator of the Genocide of all things pertaining to  the role \"Firefighter\"\n> Post 41: Clock\n> Post 47: Stardust Angel\n> Post 50: Archang\n> Post 65: Coinflipper\n> Post 87: Arsonist\n> Post 95: Serial Killer\n> Post 103: Guess\n> Post 104: Effort Enforcer \n> Post 121: The role that would have been the end to all roles but noodle had to ruin it\n> Post 128: Ayase, Hope's Glass Spear\n> Post 138: Moo\n> Post 141: Emerald\n> Post 178: Royal\n> Post 184: Flying Pumpkin That Shoots Laser Beams Out Of Its Ass\n> Post 210: Based Detector but its not Based Detector its actually just Granite \n> Post 211: The Royal Guards Which Tend To Apparently Exist In Certain Social Deduction Games Despite Not Being Players Despite Not Being Players\n> Post 231: Blade of a Silver Tongue, Kaori\n> Post 241: Impostor");

		e.addField("Attributes (cont.):", "> Post 244: I really hate Post 371.\n> Post 250: Post 371\n> Post 252: Coward\n> Post 254: Therapidt\n> Post 257: Tsukuyomi\n> Post 265: Ghost Enthusiast\n> Post 289: Rioter\n> Post 299: m63 Plamen Artillery Piece \n> Post 330: Zero Kids in a Trenchcoat\n> Post 340: Beaver\n> Post 419: Horse Plinko Flexer\n> Post 354: Wielder of Hope, Asahi\n> Post 357: Form of the Old Man with a Stick\n> Post 371: Blaster\n> Post 387: Your Best Nightmare\n> Post 388: Wisconsin\n> Post 404: Missingno\n> Post 442: Kingdom Attack\n> Post 480: Larcenist\n> Post 492: Non Binary\n> Post 499: Amber Heard's Lawyer \n> Post 500: I'm Stealing Slot 500 LMAO\n> Post 544: The Powerful Being\n> Post 563: Baker\n> Post 570: Generic Neutral Killing Role\n> Post 578: Solo Maid\n> Post 590: Blue Eyes White Dragon\n> Post 630: Conga Leader\n> Post 667: Loona\n> Post 711: Notorious Scoundrrl\n> Post 727: Light of Accent\n> Post 728: Monokuma\n> Post 733: Paripapparapapparappa");

		e.addField("Attributes (moar.):", "> Post 736: Slayer of those whomst reside in Afro-Eurasia (or Australia) (or Antartica)\n> Post 755: My various knives\n> Post 798: Onlyshots\n> Post 804: Pirate that got tired of what is essentially Rock Paper Scissors\n> Post 856: Haha Suffer\n> Post 867: Ayase, Hope's Last Frontier\n> Post 868: Edward Brown\n> Post 951: Murderer Chan\n> Post 1000: Why the fuck are there so many roles?\n> Post 1111: Incarnation of You\n> Post 1222: Goat\n> Post 1306: Tooru Saesen, Ultimate Liar\n> Post 1351: Ummmmm\n> Post 1390: Thundersnail\n> Post 1408: Fuck Eyisa in particular\n> Post 1412: Rule Zero\n> Post 1488: I was designed\n> Post 1416: Informed Minority\n> Post 1531: Aiko, Dreamer's Last Hope\n> Post 1533: Rocks in a Pringles Can\n> Post 1552: Ice Cream Truck Guy\n> Post 1564: Large Fries and a Large Iced Coffee\n> Post 1569: Apprentice Fighter, Daichi\n> Post 1573: Love River Kid, Taizo\n> Post 1618: Pincurchin\n> Post 1694: Racist\n> Post 1700: Writer\n> Post 1704: Parrot\n> Post 1720: Owl");

		e.addField("Attributes (stop.):", "> Post 1723: aaaaaaaaaa\n> Post 1783: It's Simple, See\n> Post 1814: Townie with common sense\n- The host may decide any roles from the list above, and you will not gain abilities or attributes from those roles.\n- At the start of the game, you will be selected a random faction, and you will be a member of that faction and win with them. Additionally, you will receive all properties of that faction, such as a factional chat and or kill. Neutral counts as a faction");
		
		e.addField("Goal:", "Faction goal/NK goal");
	});

	register_role(["death_witch_of_domination", "deathwitchofdomination", "death", "witch_of_domination", "witchofdomination", "dwod", "1868"], "Coven", "Death, Witch of Domination", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1868");

		e.addField("Alignment", "Coven Head", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Haunt a player. They won't die immediately, but they'll be hit by you after three days. Worst part? They're aware this is happening. They don't know your identity, but **they know you're coming**.\n- Dominate over the day phase, ending it immediately. This can only be used **once**. Doesn't matter if someone was about to get lynched, it ends, no questions asked.");

		e.addField("Attributes:", "- Coven Heads, and the Coven Leader cannot spawn with you.\n- You have Necronomicon Priority.\n- Only 1 Coven Head may spawn per game.\n- When you gain the **Necromonicon**, your attack is put up a tier...to **Unstoppable**. The haunted players aren't able to vote during the day anymore.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["knight", "1869"], "Town", "Knight", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1869");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone at night, {dealing an Unstoppable attack to them. If} they die, {you do as well.}\n- **Cleave** during the day.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cleaver", "leaver", "1870"], "Neutral", "{C}leaver", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1870\n*Don't worry, guys. I have a plan.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- {C}leave {someone in} the Town at night. You will {c}leave {their attributes removing anything that is not essential for the role's functionality in its current state for the rest of} the game.\n- **Cleave** during the day.");
		
		e.addField("Goal:", "Ensure that the good faction loses the game, and leave the game.");
	});

	register_role(["wysteria_witch_of_winter", "wysteriawitchofwinter", "wysteria", "witch_of_winter", "witchofwinter", "wwow", "www", "1871"], "Coven", "Death, Witch of Winter", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1871");

		e.addField("Alignment", "Coven Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Hushed Breath (Day, 3 uses): Freeze a player, immediately stopping them from being able to talk or change their vote for the rest of the day.\n- Freeze (Night): Select two players. If one of the other Coven members has either visited or whispered your target, deal an astral Basic attack to them.\n- Blanket of Snow (Night, 1 use): Summon a snowstorm tonight. All visits tonight will be redirected to non-Coven members at random. This can only be used when you're in possession of the Necromonicon. ");

		e.addField("Attributes:", "- You have Basic defense until the first time you're attacked.\n- With the Necromonicon, players that visit you are roleblocked a night later.\n- You have Necromonicon Priority, and cannot spawn with other Coven Heads or the CL.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["metagamer", "1872"], "Neutral", "Metagamer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1872");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a one-use Basic attack, a one-use Consigliere check, a Basic autovest, or roleblock immunity. You gain the chosen ability or attribute in the next GIM game whose host complies.\n- Put on a bulletproof vest at night, granting yourself Basic defense for the night. You may only do this thrice.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["enthusiastic_inspector", "enthusiasticinspector", "enthusiastic", "inspector", "ei", "1873"], "Town", "Enthusiastic Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1873");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone's house to inspect during the day. The next night, you will literally enter their home. In a roleplay-style interaction that lasts until the end of the night, the host must determine what would reasonably be in your target's home based on their role and describe to you what it's like, and you may look around and attempt to uncover secrets.");

		e.addField("Attributes:", "- If, in your process of inspecting someone's home, you do something that your target would reasonably notice when they come back, then they will be informed of what happened.\n- If you do something that your target would reasonably notice when they come back and they're an evil role that can kill, they'll kill you, because I said so.\n- Your ability still works even if your target stays home, because it wouldn't make sense otherwise. They just conveniently go for a midnight stroll or something I don't fucking know.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["knight", "1874"], "Neutral", "Knight", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1874");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "Invincible (None)", true);

		e.addField("Abilities:", "- Attack a target.\n- [Lower your Defense Value to None] When using this ability, you may pay the cost. If you pay the cost, you will attack a target with Unstoppable Rampage attack. If you do not, you will deal a Basic Attack to a target.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["threadpeeker", "1875"], "Neutral", "Threadpeeker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1875");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players at night.");

		e.addField("Attributes:", "- **YOU DO NOT NOTIFY THE PEOPLE THAT VISIT YOUR TRANSPORTED TARGETS THAT THEY WERE REDIRECTED**\n- You will notify them if they are redirect immune, however.\n- The host must relay all messages sent in every player channel and factional chat back to you.\n- You cannot send whispers.");
		
		e.addField("Goal:", "live witness town die");
	});

	register_role(["baddie", "1876"], "Mafia", "Baddie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1876");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night. You have a 75% chance of learning their role and a 25% chance of roleblocking them.");

		e.addField("Attributes:", "- All factions \"count as good\".");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["goodie", "1877"], "Town", "Goodie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1877");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hang out with someone each night. You have a 75% chance of roleblocking them and a 25% chance of learning their faction.");

		e.addField("Attributes:", "- No factions \"count as good\".");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cultist", "1878"], "Town", "Cultist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1878");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "-{[Attack a random Town member]} {When using this ability, you may pay the cost. If you do, you will} deal an Unstoppable Attack to 1 player of your choice.\n- **Cleave** during the day.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bagoddie", "1879"], "Other", "Bagoddie", {subCat: "Support/Espionage", spawnCat: ["Town", "Mafia"], spawnSubCat: ["Support", "Espionage"], syncCats: true}, (e) =>
	{
		e.setDescription("Post 1879");

		e.addField("Alignment", "Town Support/Mafia Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night. You have a 75% chance of roleblocking them and a 25% chance of roleblocking them.\n- Hang out with someone each night. You have a 75% chance of learning their faction and a 25% chance of learning their faction.");

		e.addField("Attributes:", "- Half of all the factions \"count as good\".\n- You are Town and Mafia at once.");
		
		e.addField("Goal:", factions.Town.goal + " OR " + factions.Mafia.goal);
	});

	register_role(["dimensional_amnesiac", "dimensionalamnesiac", "dimensional", "amnesiac", "da", "1880"], "Neutral", "Dimensional Amnesiac", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1880");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remember who you were, Transforming into a role you had in a previous game.");

		e.addField("Attributes:", "- Any roles you remember will be copied directly from that game, ignoring any changes made to the role after that game.\n- If you Copy a role from a game you have won, You must also survive in order to win.");
		
		e.addField("Goal:", "Win (And survive depending on your attributes) as a role you remembered.");
	});

	register_role(["ultimate_knight", "ultimateknight", "ultimate", "knight", "uk", "1881"], "Town", "Ultimate Knight", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1881");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- (Post 26) Protect someone once per game, granting them powerful defense. If you successfully protect someone once, your armor will break. This will make the next successful protection fatal.\n- (Post 26) Use your shield once to protect yourself with basic defense.\n- (Post 826) Deal a powerful attack to a target, and bypass all defense values for the night (except permanent values). 2 uses\n- (Post 1795) Defend target player, trading your life to kill their attackers. You, and anyone you kill, will be unhealable.\n- (Post 1795) Basic Attack target player. If you killed an ally, you will also take your own life (Unhealable). Not usable until Night 3. Redirect cancels ability.\n- (Post 1869) Attack someone at night, {dealing an Unstoppable attack to them. If} they die, {you do as well.}\n- (Post 1869) **Cleave** during the day.\n- (Post 1874) Basic Attack a target.");

		e.addField("Abilities (cont.):", "- (Post 1874) [Lower your Defense Value to None] When using this ability, you may pay the cost. If you pay the cost, you will attack a target with Unstoppable Rampage attack. If you do not, you will deal a Basic Attack to a target.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["prankster", "prank", "1882"], "Town", "Prankster", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1882");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. For tonight, their night ability’s priority will be raised by 1.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["funny_gim_iceberg", "funnygimiceberg", "iceberg", "1883"], "Neutral", "Funny GIM Iceberg", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1883");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Trap someone in an iceberg\n- Use an ability you own the copyright to.");

		e.addField("Attributes:", "- Trapping someone in your iceberg roleblocks them, and gives you the copyright to their ability.\n- Whenever you use an ability you have a copyright to, you will roleblock the person who originally had the role through any immunities.\n- You can’t use the same person’s ability twice in a row\n- You can’t trap someone in your iceberg who has already been trapped.");
		
		e.addField("Goal:", "Have the good faction lose the game (you can win while dead).");
	});

	register_role(["cleaved_sculptor", "cleavedsculptor", "cleaved", "sculptor", "cs", "1884"], "Mafia", "Cleaved Sculptor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1884");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Carve a statue in the likeness of a player. All visits will be redirected to the statue.");

		e.addField("Attributes:", "- You may use your ability twice each night.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["really_enthusiastic_cheerleader", "reallyenthusiasticcheerleader", "cheerleader", "rec", "1885"], "Neutral", "Really Enthusiastic Cheerleader", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1885");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cheer someone on each day, allowing them to use their night abilities up to five times the following night.");
		
		e.addField("Goal:", "Cheer on four people while causing less than four deaths.");
	});

	register_role(["rookie_inspector", "rookieinspector", "rookie", "inspector", "ri", "1886"], "Town", "Rookie Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1886");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone at night. You will learn five random roles,");

		e.addField("Attributes:", "- At the start of Night 3, choose one of the following to be added to your ability:\n> - one of which will be your target's role. If they're not a member of the Town, they'll learn they were investigated, and the result you were given. Your results can only contain roles that can exist.\n> - the majority of which will be able to win with your target, given your target's current win condition.\n> - all of which will have post numbers no more than 500 higher or lower than your target's role's post number.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["adun_oakenshield", "adunoakenshield", "adun", "oakenshield", "ao", "1887"], "Gatherer", "Adun Oakenshield", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 1887\n*“… And at his passing, the bodies of the world’s great warriors shall rise from their graves and follow him to battle.”*\n*—The Anvilonian Grimoire*");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate any two of the following choices each night: (Black), (Red), (Green)\n- (Black)(Red)(Green): Resurrect target player at the end of this night. Your defense is forcefully set to None while using this.\n- (1) Attack a target each night.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["vogar_necropolis_tyrant", "vogarnecropolistyrant", "vogar", "necropolis", "tyrant", "vnt", "1888"], "Gatherer", "Vogar, Necropolis Tyrant", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 1888\n*A despot in life. A monster in death.*");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Black)(Black) each night.\n- (Black): Attack a target each night.");

		e.addField("Attributes:", "- Whenever any Gatherer kills a target, gain a +1/+1 Counter.\n- If you die, generate a (Black) for each +1/+1 Counter you had.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["niambi_esteemed_speaker", "niambiesteemedspeaker", "niambi", "esteemed", "speaker", "nes", "1889"], "Gatherer", "Niambi, Esteemed Speaker", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 1889\n*A despot in life. A monster in death.*");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Generate (White)(Blue) each night.\n- (1) Attack a player each night.\n- (White)(Blue)(1): Sacrifice yourself to let every other Gatherer use up to three abilities tonight, as long as they can afford the Mana costs. This will let them bypass the Gatherer Faction's \"One attacker per night\" rule.");

		e.addField("Attributes:", "- Before the game begins, you may prevent a random other Gatherer (or yourself if there are no others) from talking and voting in Day 1. If you do, give yourself permanent basic defense which cannot be reduced.\n- Nothing can allow you to survive a successful use of your Sacrifice ability.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["saryth_the_vipers_fang", "saryththevipersfang", "saryth", "vipers", "fang", "svf", "stvf", "1890"], "Gatherer", "Saryth, the Viper's Fang", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 1890");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Green)(Green) each night.\n- (Green): Allow a player to use a second ability each night.\n- (1): Attack a player each night.");

		e.addField("Attributes:", "- While you live, all Gatherers who attack will bypass passive defense.\n- While you live, all Gatherers who don't attack will have Roleblock, Redirection, Control, and Detection Immunity.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["rukh_egg", "rukhegg", "1891", "1891a"], "Gatherer", "Rukh Egg", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1891A\n*Called “stonefeathers” by many lowlanders, rukhs are thought to descend from a phoenix that sacrificed its flame for a body of stone.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Red) each night.\n- (Red)(3): While dead, transform into a 1891B Rukh and revive yourself after the night ends.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["rukh", "1891b"], "Gatherer", "Rukh", {subCat: "Red", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1891B\n*Called “stonefeathers” by many lowlanders, rukhs are thought to descend from a phoenix that sacrificed its flame for a body of stone.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Red) each night and attack a player.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["ogre_battledriver", "ogrebattledriver", "ogre", "battledriver", "ob", "1892"], "Gatherer", "Ogre Battledriver", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1892\n*Ogres are driven by passion, rage, and another ogre standing behind them with a whip.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Red) each night.\n- (1) Attack a player each night.\n- (Red)(1) Increase target's Attack by 1 for this night and allow them to use a second non-attacking ability after attacking.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["chasm_guide", "chasmguide", "chasm", "guide", "cg", "1893"], "Gatherer", "Chasm Guide", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1893\n*With a single act of bravery, she went from expendable to indispensable.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Red) each night.\n- (1): Attack a player each night.");

		e.addField("Attributes:", "- During Night 1, and any night after a Gatherer is revived by any means, you and all Gatherers will be able to use two abilities at once. (This won't stack if multiple Chasm Guides exist.)");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["firebrand_ranger", "firebrandranger", "firebrand", "ranger", "fr", "1894"], "Gatherer", "Firebrand Ranger", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1894\n*A skilled ranger can glance at the mud on your boots and tell where you last camped.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Generate (Red) each night, plus one (Green) for each Land you've collected.\n- (Green): Gather one Land.\n- (1): Attack a player each night.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["kaijin_of_the_vanishing_touch", "kaijinofthevanishingtouch", "kaijin", "vanishing_touch", "vanishingtouch", "kotvt", "1895"], "Gatherer", "Kaijin of the Vanishing Touch", {subCat: "Blue"}, (e) =>
	{
		e.setDescription("Post 1895\n*When it’s finished, all that’s left of you is a ripple on a still pond.*");

		e.addField("Alignment", "Gatherer Blue", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Blue) each night.\n- (1) Defend target player, redirecting all attackers against them to yourself. Whenever you redirect an attack, the attacker will become unable to talk, vote, or use abilities for the following day phase.");

		e.addField("Attributes:", "- You are unable to use the factional attack until you are the last living Gatherer.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["shimmering_glasskite", "shimmeringglasskite", "shimmering", "glasskite", "sg", "1896"], "Gatherer", "Shimmering Glasskite", {subCat: "Blue"}, (e) =>
	{
		e.setDescription("Post 1896\n*A child’s whisper could crack its shell, but not even an oni’s scream could penetrate it.*");

		e.addField("Alignment", "Gatherer Blue", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Blue) each night.\n- (1): Attack a player each night.");

		e.addField("Attributes:", "- Each night, a random non-Gatherer ability that targets you will fail.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["wingshield_agent", "wingshieldagent", "wingshield", "agent", "wa", "1897"], "Gatherer", "Wingshield Agent", {subCat: "Blue"}, (e) =>
	{
		e.setDescription("Post 1897");

		e.addField("Alignment", "Gatherer Blue", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "- Generate (Blue) each night.\n- (Blue): Choose one player to attack, and another to defend. A random non-Gatherer ability will fail against the defended target.");

		e.addField("Attributes:", "- You will survive the first Powerful or Unstoppable attack used on you.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["razorfish_abolisher", "razorfishabolisher", "razorfish", "abolisher", "ra", "1898"], "Gatherer", "Razorfish Abolisher", {subCat: "Blue"}, (e) =>
	{
		e.setDescription("Post 1898\n*Once you have been marked by the merrow, you are not long for their waters.*");

		e.addField("Alignment", "Gatherer Blue", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Blue) each night.\n- (Blue)(1): Choose a player. If their Attack or Defense levels have changed in any way, they will become unable to talk, vote, or use actions in the following day phase.\n- (1): Attack a player each night.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["elvish_pathcutter", "elvishpathcutter", "elvish", "pathcutter", "ep", "1899"], "Gatherer", "Elvish Pathcutter", {subCat: "Green"}, (e) =>
	{
		e.setDescription("Post 1899\n*In harsh times, the strongest currency is cooperation.*");

		e.addField("Alignment", "Gatherer Green", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Green) each night.\n- (Green)(2): Target player's attack will ignore passive defense for this night. You may use this ability multiple times as long as you can afford the cost.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["ana_disciple", "anadisciple", "ana", "disciple", "ad", "1900"], "Gatherer", "Ana Disciple", {subCat: "Green"}, (e) =>
	{
		e.setDescription("Post 1900\n*“The blessings of Gaea alone are no longer enough.”*");

		e.addField("Alignment", "Gatherer Green", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Generate (Green) each night.\n- Generate Mana of a color of your choice at night. (1 use)\n- (Blue): Target a player to allow them to bypass protective abilities tonight.\n- (Black): Target a player to reduce their attack by 1 tier tonight.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});
};
