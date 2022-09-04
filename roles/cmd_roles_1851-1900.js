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
};
