module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["jailor", "51"], "Town", "Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 51");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_Jailor.png";

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose one person during the day to Jail for the night.");

		e.addField("Attributes:", "- You may anonymously talk with your prisoner.\n- You can choose to attack your prisoner.\n- The jailed target can't perform their night ability.\n- If you execute a Town member, you forfeit further executions.\n- All other abilities used on the jailed person will fail; they will be notified that their target was jailed.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mayor", "52"], "Town", "Mayor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 52");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4f/RoleIcon_Mayor.png";

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal yourself in the day as the Mayor.");

		e.addField("Attributes:", "- Once you have revealed yourself as Mayor your vote counts as 3 votes.\n- You may not be Healed once you have revealed yourself.\n- Once revealed, you can't whisper, or be whispered to.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["lookout", "lo", "53"], "Town", "Lookout", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 53");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/1d/RoleIcon_Lookout.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch one person at night to see who visits them.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tracker", "track", "54"], "Town", "Tracker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 54");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/12/RoleIcon_Tracker.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Track one person at night to see who they visit.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["psychic", "psy", "55"], "Town", "Psychic", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 55");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f2/RoleIcon_Psychic.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Receive a vision every night.\n- On odd nights you will have a vision of three players, at least one will be Evil.\n- On even nights you will have a vision of two players, at least one will be Good.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bodyguard", "bg", "56"], "Town", "Bodyguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 56");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/1e/RoleIcon_Bodyguard.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Protect a player from direct attacks at night.\n- 1 use: Put on a Bulletproof Vest at night, which grants you Basic Defense.");

		e.addField("Attributes:", "- If your target is directly attacked or is the victim of a harmful visit, you and the visitor will fight.\n- If you successfully protect someone you can still be Healed.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crusader", "crus", "57"], "Town", "Crusader", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 57");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/78/RoleIcon_Crusader.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect one person during the night.");

		e.addField("Attributes:", "- Grant your target Powerful defense.\n- You will know if your target is attacked.\n- You attack one person who visits your target on the same night.\n- You do not attack Vampires, but you do block their attacks.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["doctor", "doc", "58"], "Town", "Doctor", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 58");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/07/RoleIcon_Doctor_1.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal one person each night, granting them Powerful defense.");

		e.addField("Attributes:", "- You may only Heal yourself once.\n- You will know if your target is attacked.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["escort", "esc", "59"], "Town", "Escort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 59");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4f/RoleIcon_Escort.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone each night.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["medium", "med", "60"], "Town", "Medium", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 60");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/2/28/RoleIcon_Medium.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- When dead, speak to a living person at night. (1 use)");

		e.addField("Attributes:", "- You will speak to the dead anonymously each night you are alive.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["retributionist", "retri", "61"], "Town", "Retributionist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 61");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b2/RoleIcon_Retributionist.png";

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may raise a dead Town member and use their ability on a player.");

		e.addField("Attributes:", "- You may only raise each dead player once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spy", "62"], "Town", "Spy", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 62");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/cf/RoleIcon_Spy.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may bug a player's house to see what happens to them that night.");

		e.addField("Attributes:", "- You will know who the Mafia and Coven visit each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["transporter", "trans", "63"], "Town", "Transporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 63");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/bb/RoleIcon_Transporter.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two people to transport at night.");

		e.addField("Attributes:", "- Roleblock and Control Immunity\n- Transporting a target swaps all visitors to them; for example, all visitors that visit target A will instead visit target B, and vice versa.\n- You may transport yourself.\n- Your targets will know they were transported.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vampire_hunter", "vampirehunter", "vh", "64"], "Town", "Vampire Hunter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 64");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/0d/RoleIcon_VampireHunter.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Check for Vampires, Locusts, and Accents each night.");

		e.addField("Attributes:", "- If you visit a Vampire, Locust, or Accent, you will attack them.\n- If a Vampire, Locust, or Accent visits you, you will attack them.\n- You can hear Vampires, Locusts, and Accents at night.\n- If all the Vampires, Locusts, and Accents die, you will become a Vigilante with one bullet.\n- You have basic defense that only works against Vampires, Locusts, and Accents.\n\"Accent\" is any role named after Accent.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["conflipper", "65"], "Neutral", "Coinflipper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 65");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Flip the coin for two people each night. If it's heads, you deal an Unstoppable attack to them. If it's tails, you deal an Unstoppable attack to them.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["veteran", "vet", "66"], "Town", "Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 66");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/8a/RoleIcon_Veteran.png";

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Decide if you will go on alert. (3 uses)");

		e.addField("Attributes:", "- While on alert you gain Basic Defense.\n- While on alert, you will deliver a Powerful attack to anyone who visits you.\n- Control Immunity\n- Roleblock Immunity");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vigilante", "vigi", "67"], "Town", "Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 67");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/a/a6/RoleIcon_Vigilante.png";

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to take justice into your own hands and shoot someone. (3 uses)");

		e.addField("Attributes:", "- If you shoot another Town member you will commit suicide over the guilt.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ambusher", "amby", "68"], "Mafia", "Ambusher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 68");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7e/RoleIcon_Ambusher.png";

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to lie in wait outside your target's house.");

		e.addField("Attributes:", "- You will attack one player who visits your target.\n- All players visiting your target will learn your name.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["blackmailer", "bmer", "69"], "Mafia", "Blackmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 69");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/6/6b/RoleIcon_Blackmailer.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to blackmail.");

		e.addField("Attributes:", "- Blackmailed targets cannot talk during the day.\n- You can hear private messages.\n- (nice)");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["consigliere", "consig", "70"], "Mafia", "Consigliere", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 70");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/85/RoleIcon_Consigliere.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check one person for their exact role each night.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["consort", "cons", "71"], "Mafia", "Consort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 71");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4c/RoleIcon_Consort.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone each night.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["disguiser", "disg", "72"], "Mafia", "Disguiser", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 72");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d7/RoleIcon_Disguiser.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Disguise a mafia member as a non-mafia member to alter their identity.");

		e.addField("Attributes:", "- A disguised person will appear innocent to investigators.\n- If someone would see a disguised person visiting someone, they will instead see the disguise's name.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["forger", "forg", "73"], "Mafia", "Forger", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 73");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/48/RoleIcon_Forger.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person and rewrite their last will at night.");

		e.addField("Attributes:", "- If your target dies, their last will is replaced with your forgery and their role will be shown as the role you select to forge.- You may only perform 2 forgeries.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["framer", "74"], "Mafia", "Framer", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 74");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/dd/RoleIcon_Framer.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to frame at night. They will appear suspicious to investigators.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["hypnotist", "hypno", "75"], "Mafia", "Hypnotist", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 75");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/18/RoleIcon_Hypnotist.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may sneak into a player's house at night and plant a memory. You can write a fake Feedback Message for them to see at the end of the night.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["curiosity_killed_the_copycat", "curiositykilledthecopycat", "curiosity", "copycat", "cktc", "ckc", "76"], "Neutral", "Curiosity Killed The Copycat", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 76");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of other roles while dead.");

		e.addField("Attributes:", "- You will kill and clean yourself on Night 1.\n- While dead, you may use the abilities of any other role that can use that ability while dead (i.e. Medium seance, Phlox, etc.) but you may only use each ability once.");

		e.addField("Goal:", "Die to see the Town lose the game.");
	});

	register_role(["janitor", "jan", "jani", "77"], "Mafia", "Janitor", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 77");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/5/57/RoleIcon_Janitor.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person to clean at night, preventing their last will and role from being publicly revealed.");

		e.addField("Attributes:", "- You will see the role and last will of your targets when you clean them.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["reporter", "78"], "Town", "Reporter", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 78");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate someone to learn every other action that targeted them that night.\n- Investigate a dead body at night to learn about every other action that targeted it during the night that it died. Cannot be used on people who died in the Day.");

		e.addField("Attributes:", "- You will only know the effects of abilities that you learn, such as attacking the target with a specific tier, or investigating something specific about it.\n- If an action you learn is one-of-a-kind effect, and is otherwise **only** usable by roles that copy effects, then you will only see it as a \"one-of-a-kind effect\".\n- You won't learn about self-targeting abilities, or ones that only indirectly affected your target such as Rampages.\n- When using any ability, you may decide to publish your results anonymously in the following day's announcement. You must decide before you get results, not after. You may only do so once.\n- You will bypass any attempt to redirect visitors away from your target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mafioso", "79"], "Mafia", "Mafioso", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 79");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/00/RoleIcon_Mafioso.png";

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Carry out the Factional Mafia Kill.");

		e.addField("Attributes:", "- You can attack if the Godfather doesn't give you orders.\n- If the Godfather dies you will become the next Godfather.\n- You can talk with the other Mafia at night.\n- You have Control Immunity while following the Godfather's orders.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["gossiper", "gossip", "80"], "Town", "Gossiper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 80");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gossip with someone every night.");

		e.addField("Attributes:", "- You will learn any notifications the player receives. (such as an invest getting their invest results)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["medusa", "medu", "81"], "Coven", "Medusa", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 81");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/c1/RoleIcon_Medusa.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to Stone Gaze all visitors at night. (3 uses)");

		e.addField("Attributes:", "- Stoned players will not have their roles or last wills publicly revealed.\n- With the Necronomicon, you may visit players and turn them to stone.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["potion_master", "potionmaster", "pmer", "82"], "Coven", "Potion Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 82");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f1/RoleIcon_PotionMaster.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use an Attack Potion to attack a target.\n- Use a Heal Potion to provide someone with powerful defense.\n- Use a Reveal Potion to learn someone's true role.");

		e.addField("Attributes:", "- Each potion has a three day cooldown.\n- With the Necronomicon, your potions no longer have a cooldown.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["hex_master", "hexmaster", "hex", "hm", "83"], "Coven", "Hex Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 83");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/bd/RoleIcon_HexMaster.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Unstoppable/Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to Hex each night.");

		e.addField("Attributes:", "- When the last non-Coven player becomes Hexed, even if you die, all Hexed players will die to an Unstoppable Attack.\n- You will still use your Final Hex even if you are roleblocked.\n- With the Necronomicon you gain Astral and Basic attacks.\n- Players are still Hexed when you have the Necronomicon.\n- Hexed players appear to be a Hex Master when investigated.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["necromancer", "necro", "84"], "Coven", "Necromancer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 84");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/03/RoleIcon_Necromancer.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may reanimate a dead player and use their ability on a player.");

		e.addField("Attributes:", "- Each dead player may be reanimated once.\n- With the Necronomicon, select yourself to summon a ghoul to Basic attack your target.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["poisoner", "poison", "85"], "Coven", "Poisoner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 85");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/e/e8/RoleIcon_Poisoner.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to poison a player each night. If they don't have defense now, they will die the next night.");

		e.addField("Attributes:", "- Your target may survive poison by being healed in the next night, or by gaining permanent defense. Temporary defense won't work.\n- With the Necronomicon, your poison can no longer be Healed.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["amnesiac", "amne", "86"], "Neutral", "Amnesiac", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 86");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remember who you were like by selecting a graveyard role. You will become that role permanently.");

		e.addField("Attributes:", "- The role you remembered will be announced for everyone to see at the start of the following Day.");

		e.addField("Goal:", "Remember who you were and complete that role's goal.");
	});

	register_role(["arsonist", "arso", "87"], "Neutral", "Arsonist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 87");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4d/RoleIcon_Arsonist_1.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Douse a player in gasoline.\n- Douse yourself to ignite all doused players.");

		e.addField("Attributes:", "- You will douse anybody that visits you.\n- If you take no action, you will attempt to clean gasoline off yourself.\n- Players you douse will appear to be an Arsonist when investigated.");

		e.addField("Goal:", "Live to see everyone burn...");
	});

	register_role(["executioner", "exe", "88"], "Neutral", "Executioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 88");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/ce/RoleIcon_Executioner.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the start of the game, you will recieve a Target. Your target will always be a Townie, and cannot be the Jailor, Mayor, or any Town Power.\n- If your target is killed at night, you will become a Jester (Post 90).");

		e.addField("Goal:", "Trick the Town into executing your Target.");
	});

	register_role(["guardian_angel", "guardianangel", "ga", "89"], "Neutral", "Guardian Angel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 89");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b3/RoleIcon_GuardianAngel.png";

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal and Purge your Target, giving them Power Defense and removing all negative effects from them. (2 uses)");

		e.addField("Attributes:", "- At the start of the game, a random person will become your Target.\n- Your healing works even while your Target is in Jail, and can let them survive execution.\n- If your target is killed at night, you will become a Survivor (Post 96) with no vests remaining.\n- Your Target cannot be a Jester, Executioner, or another Guardian Angel.\n- Vampires cannot convert you.");

		e.addField("Goal:", "Keep your target alive until the end of the game.");
	});

	register_role(["jester", "jest", "90"], "Neutral", "Jester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 90");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d8/RoleIcon_Jester.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you are lynched, you will attack one of your guilty or abstaining voters the following night with an Unstoppable Attack.");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["juggernaut", "jugg", "91"], "Neutral", "Juggernaut", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 91");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d9/RoleIcon_Juggernaut.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- With each kill, your powers grow, until you've killed 3 people.\n- If you haven't killed anyone yet, you can only attack during Full Moon Nights.\n- 1st kill lets you attack every night.\n- 2nd kill makes your future attacks into Rampages.\n3rd kill makes your attack Unstoppable.\n- Detection Immunity");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["pirate", "92"], "Neutral", "Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 92");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/980989425137901588.webp";

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each day to duel in the following night, which also roleblocks them.");

		e.addField("Attributes:", "- In a duel, you will secretly choose Scimitar, Rapier, and Pistol, and your target will secretly choose Sidestep, Chainmail, and Backpedal.\n- Scimitar beats Sidestep, Rapier beats Chainmail, and Pistol beats Backpedal.\n- If your target loses, they are dealt a Powerful Attack.\n- You cannot duel the same player twice in a row.\n- Detection Immunity\n- Vampires cannot convert you.");

		e.addField("Goal:", "Win 2 duels.");
	});

	register_role(["plaguebearer", "pb", "93"], "Neutral", "Plaguebearer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 93");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_PlagueBearer_1.png";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may choose to infect a player with the Plague each night.");

		e.addField("Attributes:", "- Players will not know they have been infected.\n- When all living players are infected, you become Pestilence (Post 94).\n- Detection Immunity\n- The Plague is spread by visits to you and infected players, as well as infected players who visit people.");

		e.addField("Goal:", "Infect all living players and become Pestilence (Post 94).");
	});

	register_role(["pestilence", "pest", "94"], "Neutral", "Pestilence because fuck this let's let it be rolled naturally", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 94");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/998691858207228026.webp";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- You may choose to Rampage at a player's house each night.");

		e.addField("Attributes:", "- You will automatically attack anyone who visits you, including the Jailor.\n- Detection Immunity, Roleblock Immunity, and Control Immunity");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["serial_killer", "serialkiller", "sk", "95"], "Neutral", "Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 95");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["survivor", "96"], "Neutral", "Survivor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 96");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/a/ae/RoleIcon_Survivor.png";

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Put on a bulletproof vest at night and gain Basic Defense. (4 uses)");
		
		e.addField("Goal:", "Live until the end of the game.");
	});

	register_role(["vampire", "vamp", "97"], "Neutral", "Vampire", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 97");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/975231005713645618.webp";

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to convert your target into a Vampire. If the target cannot be converted or the faction is full, you will attack the target");

		e.addField("Attributes:", "- When more than one Vampire is alive, they will gain a shared chat and vote for who to convert.\n- The youngest Vampire is always the one who carries out the action.\n- If the target has basic defense, or is a member of the Coven or Mafia, they cannot be converted.\n- Once 4 Vampires are alive, you cannot convert new members, only attack them.\n- Detection Immunity");
		
		e.addField("Goal:", factions.Vampire.goal);
	});

	register_role(["werewolf", "ww", "98"], "Neutral", "Werewolf", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 98");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b8/RoleIcon_Werewolf.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, transform into a Werewolf and rampage at your target's house.");

		e.addField("Attributes:", "- If you don't select a target, you will rampage at your own house on Full Moon Nights.\n- You have Detection Immunity, but only during non-Full Moon Nights.");
		
		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["witch", "99"], "Neutral", "Witch", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 99");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/87/RoleIcon_Witch.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Control one person into targeting another each night.");

		e.addField("Attributes:", "- You have a mystical barrier that grants you Basic defense until you are attacked once by an attack that would kill you.\n- You will know the role of the player you Control.\n- Roleblock Immunity and Detection Immunity");
		
		e.addField("Goal:", "Survive to see the Town lose the game.");
	});

	register_role(["unstable", "100"], "Neutral", "Unstable", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 100");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target two players, and lower their defense to None for the night.");

		e.addField("Attributes:", "- You must use your ability every night, and you cannot target people you've targeted before until you've targeted everyone in the game at least once.\n- If you cause someone to die, you will suicide of guilt.");
		
		e.addField("Goal:", "Survive the game without having caused anyone's death.");
	});
};
