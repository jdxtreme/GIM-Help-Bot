//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["powerstones", "ps", "2851"], "Neutral", "Power Stones", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2851\n*Guys, I changed it! Now it has a different mechanic!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one stone on someone to deal a Basic attack.\n- Use two stones on someone to deal a Powerful attack.\n- Use three stones on someone to deal an Unstoppable attack.\n- Use four stones on someone to deal an Overkill attack.\n- Use five stones on someone to deal an Overoverkill attack.");

		e.addField("Attributes:", "- You have five stones each night.\n- You may use as many abilities as you like as long as you have enough stones.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["pow", "ps", "2852"], "Neutral", "Pow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2852\n*Guys, I nerfed it! Only 3 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to three players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["po", "ps", "2852"], "Neutral", "Po", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2852\n*Guys, I nerfed it! Only 2 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to two players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["p", "ps", "2853"], "Neutral", "P", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2853\n*Guys, I nerfed it! Only 1 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to one player each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["", "ps", "2854"], "Neutral", "‎ ", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2854\n*Guys, I nerfed it! Only 0 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to zero players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ꟼ", "backwardsp", "backwardp", "p", "ps", "2855"], "Town", "ꟼ", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2855\n*Guys, I nerfed it! Only -1 KPN, guys!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Negative (544)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to one player each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["s", "ps", "2856"], "Town", "s", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2856\n*Guys, I nerfed it! Only -1 KPN, guys!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive up to one player each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bob", "bobthebuilder", "builder", "btb", "bullettimebattle", "2857"], "Neutral", "Bob the Builder", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2857");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a house. Everyone will learn that there is a house.");

		e.addField("Attributes:", "- First person to go into any given house increases their defense by 2 tiers. Anyone can claim this in their private channel, first come first server. No one knows who goes into any given house.");

		e.addField("Goal:", "Get 3 people in houses.");
	});

	register_role(["scp-993", "scp993", "2858"], "SCP", "SCP-993", {subCat: "Safe"}, (e) =>
	{
		e.setDescription("Post 2858\n*SCP-993's anomalous properties become obvious when the program is viewed. Anyone watching aged ten years or older will immediately fall unconscious when the program begins and will remain incapacitated until the end of the program, later reporting a stabbing headache immediately before blacking out. Children under the age of ten viewing SCP-993 later report that it teaches and advocates activities such as cannibalism, murder, torture, [DATA EXPUNGED]. These activities appear to become ingrained in the subject's mind; repeated exposure to SCP-993 can result in permanent psychotic and schizophrenic symptoms.*");

		e.addField("Alignment", "SCP Safe", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Every night, you may choose to either control another player, or convince another player to deal a basic attack to another player for you.");

		e.addField("Attributes:", "- You visiting another player is astral.\n- You will learn 3 roles that they could be.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["traveller", "2859"], "Neutral", "Traveller", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2859");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Each night, visit a player's house and give them a souvenir. Souvenirs may be used in the mentioned phase and the player can multitask it. ");

		e.addField("Attributes:", "- You can't give more than one souvenir to a person and you can never self-target. You may only give each souvenir once.\n- You will learn the faction of people who you visit.\n- This role can't spawn if there are more than 4 factions.\n- Souvenirs:\n> Wooden Ornmanets: The player will gain Powerful defence during the night it's used.\n> Glass Pegasus: When used during the night, the player will be able to read whispers during the next day.\n> Cookies: When used during the day, the player's vote will count as 2.\n> World Map: The player will learn who visited them during the night it's used.\n> Novel: When used during the night on a specific target, the player will find the target's role.\n> Chocolate: When used during the night, the player will become lynchproof during the next day.");

		e.addField("Goal:", "Give one souvenir to a member of every faction in the game including Neutrals.");
	});

	register_role(["confused_marksman", "confusedmarksman", "marksman", "cm", "2860"], "Town", "Confused Marksman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2860");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mark a player each night. (You must mark on night 1)");

		e.addField("Attributes:", "- You have a 85% chance of marking yourself.\n- On the next night, if you have marked yourself, you die. If you have marked another player, learn their faction.");

		e.addField("Goal:", "Learn another players faction, and if they are evil get them voted out. (Otherwise, Town goal.)");
	});

	register_role(["loosehead_prop", "looseheadprop", "loosehead", "lhp", "lp", "2861"], "Rugby", "Loosehead Prop", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2861\n*\"Coach can I start?\"*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose 3 players to Shoulder Charge.\n- If you target the Ball-carrier, steal possession of the Ball.\n- All non-evil targets are roleblocked.\n- The day after using your ability, you will be Yellow Carded unless at least one of your targets was the Ball-carrier, forcing you to not be able to speak as if you were blackmailed. (If for some reason, you were forced to speak under blackmail, you would say \"I am Yellow Carded\".)");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["tightheadprop", "tighthead_prop", "tighthead", "thp", "tp", "2862"], "Rugby", "Tighthead Prop", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2862\n*You have the balls to cheat and need to cheat to get the balls.*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, use an Illegal Technique that was not used the previous night.\n- After using an Illegal Technique, you will be Yellow Carded, forcing you to not be able to speak as if you were blackmailed.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Illegal Techniques:", "- High Tackle: Deal a basic attack to a player.\n- Obstruction: Target a Rugby player who has the Ball. Gain powerful defense and redirect any attacks they get to yourself.\n- Bring Down Maul: Target two players. Reduce their defense level by 1.");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["hooker", "2863"], "Rugby", "Hooker", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2863\n*They only have one joke.*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may take the Ball from any Rugby player.\n- Each night you fail to kill a player with the Ball, your attack level increases by 1 until you lose the Ball.");

		e.addField("Attributes:", "- You know the name of any non-Rugby player who steals the Ball.\n- At night, if you have the Ball and successfully kill someone, you instead pass the ball to your second target and don't attack them.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["scrum-half", "scrumhalf", "sh", "2864"], "Rugby", "Scrum-Half", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2864\n*\"I'm open! I'm open!\" - never gets the ball*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, a Rugby player Ball-carrier may choose to target you to pass the ball to you instead of doing the factional kill.\n- At night, choose two players. The first player is controlled to visit the second player.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["fly-half", "flyhalf", "fh", "2865"], "Rugby", "Fly-Half", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2865\n*greediest player*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, mark a player to Grapple, role-blocking them.\n- When you possess the Ball and kill someone, you kill the last Grappled player as well as your second target.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["centre", "2866"], "Rugby", "Centre", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2866\n*we're playing rugby, he's playing 4d chess*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose to Analyze a player up to 3 times.\n- When you Analyze, you learn the names of all players who visited them and who they visited.");

		e.addField("Attributes:", "- When you lose possession of the Ball, you learn the name of the player who stole it.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["winger", "2867"], "Rugby", "Winger", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2867\n*duwiiton went on a 4-month break from discord because he was playing winger and got concussed*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to Zoom Past.\n- When you gain possession of the ball, you astrally roleblock all players you Zoomed Past, and they can't attack you.");

		e.addField("Attributes:", "- You appear innocent.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});
};
