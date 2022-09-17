module.exports = (g) =>
{
	const {register_role, factions, GOOD} = g;

	register_role(["india", "1201"], "Agent", "India", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1201");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Slowed Discussion (2-shot): Use during the night. The next day, all players are on a 1 minute slowmode.\n- Subtle Influence (2-shot): Use during the the night. The next day, all Agents have a lynch threshold one vote higher than majority.\n- Harsh Spotlight (2-shot): Use during the night. The next day, only Agents may use day abilities. (Votes and Whispers do not count as day abilities for this ability)");

		e.addField("Attributes:", "- You are capable of multitasking, but you may not multitask the factional kill.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["juliet", "1202"], "Agent", "Juliet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1202");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Casual Coaxing (2-shot): Choose two targets during the night. They will be redirected to visit each other.\n- Quiet Poisoning (2-shot): During the night, target a player who whispered to you on the previous day. You will deal a Basic-tier Poison to them, killing them at the end of the next night.");

		e.addField("Attributes:", "- You spawn alongside Romeo, and will know each other’s identities (but not share a chat).\n- If you are nightkilled, you will remain alive for the next day to speak and vote before dying at the end of it. Nothing can prevent your death that day.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["kilo", "1203"], "Agent", "Kilo", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1203");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic/Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Spree (3-shot): Target a player. You will attack any visitors with a Basic attack. This does not use the factional kill, nor does it attack the original target.\n- Crush (2-shot): If you use this ability in combination with your factional kill, you will roleblock the target and hit them with an Unstoppable attack.");

		e.addField("Attributes:", "- You will counterattack the first two people to attack you, if you survive, with a Basic attack.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["lima", "1204"], "Agent", "Lima", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1204");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pilfer (3-shot): Target a player. If they have a limited-use ability, you will remove one charge of it. If they have multiple, you will remove one at random.\n- Repurpose (1-shot): Target two players. You will Pilfer from one and use the Pilfered ability on the second. If the Pilfered ability targets more than one player, it will fail.\n- Destroy Stock (1-shot): Target a player. You will learn their role and may choose one ability (including an infinite-use ability) to remove from their ability list.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["mike", "1205"], "Agent", "Mike", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1205");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mockup (2-shot): Use in conjunction with your factional night attack. Choose a non-Agent role. If you successfully clean your target, their body will appear as the role of your choice.");

		e.addField("Attributes:", "- Cleanup (Passive): If you use the factional night attack, you will clean your target, hiding their role and will. You will learn their role and the contents of their will.\n- Double Team (Passive): If any other Agents visit your attack target, you will know and deal a Powerful attack to the target instead.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["november", "nov", "1206"], "Agent", "November", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1206");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Careful Watch (3-shot): Target a player. You will see who they visit and who visits them.\n- Discovery (1-shot): Target a player. You will learn their role subtype (Support, Protective, etc.)\n- Preventative Measures (2-shot): Target a player. If any role attempts to convert them, or if the target attempts to convert anyone, you will roleblock and attack the converter with a Powerful attack.");

		e.addField("Attributes:", "- If the Coven, Unseen, Vampires or Cult spawn, this role has increased priority to spawn.\n- You will know if the Coven, Unseen, Vampires or Cult are present in the game.\n- You are conversion immune.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["oscar", "1207"], "Agent", "Oscar", {subCat: "Communication"}, (e) =>
	{
		e.setDescription("Post 1207");

		e.addField("Alignment", "Agent Communication", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- New Codewords (2-shot): Target an existing Agent role during the night. They will gain two additional codewords. All Agents will be made aware of the new words.\n- Established Connection (1-shot): Target a player during the night. If they are an Agent, you will gain a permanent private chat with them. Your ammo will not be refunded if this fails.");

		e.addField("Attributes:", "- Careful Code (Passive): You may choose the two codewords used to identify you. Your choices may not be your name or any role name.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["papa", "1208"], "Agent", "Papa", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1208");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Crash Communications (1-shot): Use during the night. The next day, all players will only be able to send a maximum of 10 messages in public chat.\n- Crack The Code (2-shot): Use during the night. The next day, you will see all whispers.\n- Block Connections (1-shot): Use during the night. The next day, any whisper not sent to or from an Agent will fail.");

		e.addField("Attributes:", "- You may multitask, using as many abilities as you wish, except for the factional attack.\n- If you use Crack the Code and Block Connections at the same time, you will see all attempted whispers, even if they are not actually sent.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["quebec", "1209"], "Agent", "Quebec", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1209");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learned Skill (2-shot): Choose any non-Head Agent ability that starts with 2 or more shots. You may use that ability as normal.");

		e.addField("Attributes:", "- You cannot be granted any form of immunity, including defense.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["romeo", "1210"], "Agent", "Romeo", {subCat: "Communication"}, (e) =>
	{
		e.setDescription("Post 1210");

		e.addField("Alignment", "Agent Communication", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Declaration (1-shot): Make a public announcement, maximum of 200 characters. This announcement will not be linked to you.\n- Coded Message (2-shot): Make a public announcement that is only sent to Agents. Other players will be aware that it occurred, but not its contents. Maximum of 200 characters.\n- Quiet Poisoning (1-shot): During the night, target a player who whispered to you on the previous day. You will deal a Basic-tier Poison to them, killing them at the end of the next night.");

		e.addField("Attributes:", "- You spawn alongside Juliet, and will know each other’s identities.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["sierra", "1211"], "Agent", "Sierra", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1211");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Special Delivery (4-shot): Target a player during the night. You will give them an item that they may use during the night, with two attributes selected from the following list. The first is what the item appears to be, the second is what the item actually does. The two attributes may be the same:\n> -Powerful Heal\n> -Basic Attack\n> -Roleblock Target\n> -Alignment Investigation\n> -Grant Extra Vote on next day\n> -Blackmail on next day\n- Tamper (2-shot): Target a player. If they use an Investigative ability during the night, you will learn what it was and may change the result to whatever you wish. You will not learn who was targeted or what the original result was.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["tango", "1212"], "Agent", "Tango", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1212");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deceptive Charm (3-shot): Use with the factional attack. You will attack Astrally, and may choose a disguise role to appear as to investigations for that night.");

		e.addField("Attributes:", "- You will roleblock your attack targets.\n- The first time you try to attack an Agent, you will fail and instead gain a permanent private chat with them.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["uniform", "1213"], "Agent", "Uniform", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1213");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Missing Files (2-shot): Choose two players. The feedback they receive at the end of the night will be swapped.\n- Surreptitious Swap (1-shot): Choose two players. If one dies, their will and role will appear as the other’s.\n- Obstruction (0-shot): This ability gains 1 ammo on Night 3. Choose a role type- you will wipe all feedback they receive at the end of the night.");

		e.addField("Attributes:", "- All of your abilities are Astral.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["victor", "1214"], "Agent", "Victor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1214");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reactive Anger (2-shot): Use in conjunction with your factional night attack. Choose a second target who voted for you the previous day- you will hit them with a Basic attack. This cannot be upgraded by your passive.\n- Cooperative Rage (0-shot): This ability gains 1 shot if you have a private chat with an Agent. Use the factional attack to rampage at the house of all Agents you have private chats with, including your own, hitting any visitors with Basic Attacks.");

		e.addField("Attributes:", "- If you cannot win with your target, you will deal a Powerful Attack instead of a Basic one when using your factional night attack.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["whiskey", "1215"], "Agent", "Whiskey", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1215");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Supply (2-shot): Target a player during the night. If they have a limited-use ability, you will give them one more shot of it. This cannot be used to refill ammo of any Jack of All Trades-like ability.");

		e.addField("Attributes:", "- If you are present in the game, all other Agent roles gain 1 more ammo for an ability of their choice.\n- If you are nightkilled, the killer(s) will receive 1 more ammo to an ability of their choice.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["x-ray", "x_ray", "xray", "1216"], "Agent", "X-Ray", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 1216");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Entrapment (Infinite): Target a player during the day. The next night, you will jailkeep them, roleblocking them and allowing you to speak with them privately without revealing your identity. You will appear as a Jailor to a jailed target. Jailed targets will have Invincible Defense. They are not immune to being visited.\n- Interrogation (2-shot): Learn your jailkept target’s exact role.\n- Frameup (1-shot): Learn a secret of your jailkept target, framing them as a role of your choice for the rest of the game.\n- Torture (1-shot): Learn your jailkept target’s exact role, blackmail them, and prevent their vote for the next day.");

		e.addField("Attributes:", "- This role has priority to spawn if any Jailor or similar roles are present.\n- The jailkept target will know if they were tortured, but not if any other ability was used on them.\n- You may use multiple abilities on your jailed target.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["yankee", "1217"], "Agent", "Yankee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1217");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Retribution (1-shot): If an Agent is lynched, you may choose to attack two extra targets with your Factional attack the next night.");

		e.addField("Attributes:", "- For every kill you perform, you may leave a 100 character note that only Agents will see and be able to decipher.\n- If anyone attempts to roleblock you, you will attack them in addition to your regular attack.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["zulu", "1218"], "Agent", "Zulu", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1218");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Careful Setup (3-shot): Set up a trap in a player’s home. It will go off if the target takes an action of your choice during the night (within reason), ie visits a player, is visited, uses an investigative ability, etc. When triggered, it will deal a Powerful attack to the target. This does not use the factional kill.\n- Suffocate (2-shot): Target a player during the night. If they are not visited by anyone else, they will be hit with a Powerful attack. This does not use the factional kill.");

		e.addField("Attributes:", "- You can multitask up to 2 abilities during the night.\n- If you die during the night, target a player. You will hit them with a Powerful attack.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["mangaka", "1219"], "Town", "Mangaka", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1219");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Draw a panel each night.\n- Redraw a panel at night.");

		e.addField("Attributes:", "- Whenever a player dies, you will receive a page with a panel for each unknown among the following. You'll known what panels you receive.\n> - Their role and last will\n> - What they did that night and their results\n> - The role that killed them\n> - The player that killed them\n* For example, if a player was stabbed by a Serial Killer, you'll receive only the second and fourth panels. If a player was FMKed by a Forger and cleaned by a Janitor, you'll receive all four panels.");

		e.addField("Attributes (cont.):", "- When you draw a panel, choose a dead player's page and a panel you received for them. You will learn that information. You can't choose to learn the player that killed them until you have drawn all the other panels on that page.\n- When you redraw a panel, choose a dead player's page and a panel you didn't receive for them. You will learn whether or not that information was faked, and the true information if it was. You may only do this thrice.\n- You may not multitask.\n- Your last will will automatically be a full record of all your pages and panels, and updates with information you learn the night you die on.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ghost", "1220"], "Neutral", "Ghost", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1220");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill a player at night.");

		e.addField("Attributes:", "- You may disguise the cause of death.\n- During any night, you may kill yourself, and disguise your role and cause of death.\n- You may act while dead if you killed yourself. You will mimic the mechanics of the role you disguised your cause of death as.\n- The game will end normally if you are dead. Example: If only Townies remain, game will end in Town victory.");

		e.addField("Goal:", "Kill all who would oppose you or have nobody left alive at the end of the game.");
	});

	register_role(["maniac", "1221"], "Neutral", "Maniac", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1221");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill a player at night.");

		e.addField("Attributes:", "- If you are the only Neutral (Killing) role at the start of the game, you may attack 2 players instead.\n- You clean everyone you kill, but you still learn their role and receive their will.\n- Once per game, you may attack an additional player at night and all your kills that night will be unstoppable.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["goat", "1222"], "COA", "Goat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1222");

		e.addField("Alignment", "Cult of Animals Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give your target Powerful defense.");

		e.addField("Attributes:", "- If you target a Cult of Animals role, choose a role for your target to appear as for all investigative abilities that night.\n- You can target yourself.\n- Victoria ignores your protection.");

		e.addField("Goal:", factions.COA.goal);
	});

	register_role(["duplicate", "dupe", "1223"], "Neutral", "Duplicate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1223");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Use the abilities you are given.");

		e.addField("Attributes:", "- You have 2 lives. The first time you would die, you do not, and instead gain 2 role's abilities and attributes (assuming they do not harm you).\n- You may multitask.");

		e.addField("Goal:", "Live to see the end of the game after losing one of your lives.");
	});

	register_role(["wizard_of_2_towers", "wizardof2towers", "wo2t", "wizard", "1224"], "Neutral", "Wizard of 2 Towers", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1224");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill someone at night.\n- Place a negative effect on someone.");

		e.addField("Attributes:", "- You have 2 towers. One is upgraded when you use your killing ability, one is upgraded when you use your negative effect on someone.\n- If both your towers are level 2, you can use both abilities on the same night.");

		e.addField("Tower of Killing:", "Level 0: Deal a Basic attack.\nLevel 1: Deal a Powerful attack.\nLevel 2: Target 2 people with kills at night.\nLevel 3: Your visits are astral and you can rampage at one house instead of killing 2 targets.\nLevel 4: Your attacks are Unstoppable\nLevel 5: You can rampage at 2 houses.");

		e.addField("Tower of Curses:", "Level 0: Negative effects: Poison, Roleblock\nLevel 1: You can hear whispers and can now blackmail.\nLevel 2: You can now control someone or roleblock someone for 2 nights.\nLevel 3: You can reduce someone's defense to Vulnerable for 1 night.\nLevel 4: You can now make your target lose an attribute.\nLevel 5: You can make your own negative effects.");

		e.addField("Goal:", "Kill all who oppose you and your towers.");
	});

	register_role(["the_town", "thetown", "town", "1225"], "Town", "The Town", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1225");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Vote to lynch someone each night. They're lynched.");

		e.addField("Attributes:", "- Your lynch is separate from any other lynches.\n- Your vote cannot be interacted with by effects that interact with normal abilities, as it's a vote. Effects that interact with votes will affect your vote.\n- For all intents and purposes, The Town is a Town role.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["the_unseen", "theunseen", "unseen", "1226", "1225u"], "Unseen", "The Unseen", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1226\nConverted from: The Town");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Lynch (Night): Vote to lynch someone. They're lynched.\n- Die (Day): Vote to die someone. They die.\n- Promote (Any): Vote to instantly promote the current Assassin to Mastermind. They become the Mastermind. 1 use but only if there is no living Mastermind.");

		e.addField("Attributes:", "- Your lynch is separate from any other lynches.\n- Your vote cannot be interacted with by effects that interact with normal abilities, as it's a vote. Effects that interact with votes will affect your vote.\n- For all intents and purposes, The Unseen is a Unseen role.\n- Promote is usable only if there is no current Mastermind, but is usable even if the current Assassin wasn't the starting one. Another random Unseen will be promoted to Assassin.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["geology_teacher_rock", "geologyteacherrock", "gtr", "geology", "1227"], "Rock", "Geology Teacher Rock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1227");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Teach someone about rocks at night. They'll spend the entire night reviewing their notes, and are thus roleblocked.\n- Prepare a pop quiz during the day. At night, everyone who you've taught in the past is gathered in a night channel. The host will post three multiple choice questions about rocks for the students to answer in their private channel. This ability can only be used once, because you only have so much paper.");

		e.addField("Attributes:", "- The questions should have 3 choices each.\n- The actual answers don't matter, because you can't be bothered marking, but if any students share at least two answers with any others, you'll accuse them of cheating and assault them powerfully.\n- Everyone involved is also roleblocked, because doing night actions while you're taking a pop quiz is harder than you'd think.\n- If anyone points out the irony of a rock teaching geology, they're dealt a Basic attack 862 times.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["shoe_rock", "shoerock", "annoying", "anrsiys", "tanrsiys", "1228"], "Rock", "The Annoying Rock Stuck in your Shoe", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1228");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose a target and evilly sneak into their shoe. If you haven't faked your death already, you'll appear dead the following day. You can choose the cause of death and role you appear as. If you're already had a target, you just switch to another.\n- Stab whoever your target visits tonight, dealing a Basic attack. You do this by sneaking out of their shoe and materializing a knife. You can only do this while you're in a shoe.");

		e.addField("Attributes:", "- You will know who your target visits each night.\n- One day after you hide in someone's shoe, they'll be notified that there's an annoying rock stuck in their shoe.\n- While you're hiding in someone's shoe, you die if your host dies. However, you can't die otherwise. You're always considered visiting your target, but you will visit both your target and who they visit when you attack someone.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["lieutenant", "lieu", "1229"], "Town", "Lieutenant", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1229");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Detect! (Day): Guess a players role, if correct you will be privately informed and they will take a Basic attack at the end of the night. 3 uses.\n- Informed! (Night): Select a player, learn their sub alignment. Resolves the moment the ability is performed, making it completely immune to non-permanent frames.");

		e.addField("Attributes:", "- May not Detect! a town or neutral benign role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["commander", "com", "1230", "1229u"], "Unseen", "Commander", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1230\nConverted from: Lieutenant");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Command! (Day): Guess a player’s role, if they are that role you will deal an unstoppable attack to them immediately, counting as the day’s lynch. 1 use.\n- Direct! (Night): Select a player, learn their role immediately. Resolves when used.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["redundancy", "redun", "1231"], "Neutral", "Redundancy Maker of Redundancy", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1231");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Visit another player. From now on, they must speak as if they're under the management of Redundancy Maker of Redundancy. If they say something that isn't redundant, you will attack them.");

		e.addField("Goal:", "Have all living players speak redundantly.");
	});

	register_role(["cursed", "1232"], "Umbrae", "Cursed", {subCat: "Agent"}, (e) =>
	{
		e.setDescription("Post 1232");

		e.addField("Alignment", "Umbra Agent", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player at night. Do nothing to them.");

		e.addField("Attributes:", "- You win with the Town until you visit or are visited by the Umbrae.\n- If you are visited by a member of the Umbrae or visit one yourself, become a random Umbrae role.\n- Spawns in a Random Town slot, may not spawn in an Umbra slot.\n- Does not attend the nightly umbrae meeting until they are converted.");

		e.addField("Goal:", "Town/Umbrae Goal");
	});

	register_role(["sir_swearsalot", "sirswearsalot", "swearsalot", "swear", "1233"], "Neutral", "Sir Swearsalot", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1233");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a player. From now on, every message they send must contain a swear word. The host decides what is a swear and what isn't.");

		e.addField("Attributes:", "- Every message you send must contain a swear word. The host decides what is a swear and what isn't.");

		e.addField("Goal:", "Survive until the point in the game at which at least 50 swear words have been uttered by other players.");
	});

	register_role(["jury", "1234"], "Neutral", "Jury", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1234");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a rule at night.");

		e.addField("Attributes:", "- With the host's approval, the rule is added to rasen-rules for this game and this game only.");

		e.addField("Goal:", "Make a rule that affects the game. Host decides if you win or not.");
	});

	register_role(["any_chaos", "anychaos", "any", "chaos", "1235"], "Neutral", "Any Chaos", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1235");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Every day, become a random Neutral (Chaos) role. You will be that role for this day and the next night. You will always keep this attribute.");

		e.addField("Goal:", "Complete any of your goals the day/night you have it.");
	});

	register_role(["scp-953", "scp953", "1236"], "SCP", "SCP-953", {subCat: "Keter", spawnCat: GOOD}, (e) =>
	{
		e.setDescription("Post 1236\n*In addition to polymorphic abilities, SCP-953 displays moderate level psionic abilities, namely suggestion and telepathy. Although insufficient to fool an outside observer, an entranced subject can be convinced of a variety of false facts, including the nature of SCP-953, its own nature, and the nature of things around it.*");

		e.addField("Alignment", "Unique SCP Keter", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hypnotize a player at night");

		e.addField("Attributes:", "- At the start of the game, pick a good(Town/City/Army/Florae) slot. You will appear to be that role and will fool consigliere results.\n- Hypnotizing a player will give them a random end-of-night message (I.E, \"Someone occupied your night! You were roleblocked!\", \"You were attacked but somebody fought off your attacker!\", ect.) or redirect them to another player.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["antarctic", "1237"], "Everfrost", "Antarctic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1237");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. If they would visit a player who was roleblocked last night, roleblock them; otherwise, force them to visit another player of your choice, even if they don't have a visiting ability.\n**Aurora Borealis** — Choose a player. You may roleblock them or redirect them to a player of your choice. Then, coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a non-Everfrost player is visited by three or more other non-Everfrost players, the next night, they will be roleblocked.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["triumvir", "1238"], "Town", "Triumvir", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1238\n*Together as three, almost anything is possible.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose two other players to form a Triumvirate with at the end of the day.\n- During the night, dissolve the current Triumvirate at the end of the night. You must wait a day to form another Triumvirate.");

		e.addField("Attributes:", "- The three players of the Triumvirate will know each other's roles and share a chat together.\n- Town roles in the Triumvirate may only perform night abilities if all three players agree.\n- Players in the Triumvirate will not have their Last Will shown.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rerole", "{re}role", "1239"], "Neutral", "{Re}Role", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1239");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At any time, reroll your current role as if it was the beginning of the night. 1 use. You will keep this ability at all times when becoming a new role.");

		e.addField("Attributes:", "- Become another random role at the beginning of each night, the role doesn't have to exist. You cannot copy Unique roles that exist, besides that there are no limitations whatsoever (you can even become part of factions that don't exist in the game). Keep one random attribute from the previous role when you switch. You **do not** gain access to factional chats.");

		e.addField("Goal:", "Attempt to complete whatever goal you are given. If you complete a goal you are given, you will win regardless of what your future goals state.");
	});

	register_role(["hit_list", "hitlist", "{hit}list", "1240"], "Neutral", "{Hit} List", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1240");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill someone at night.");

		e.addField("Attributes:", "- You have a list of all the players (randomized) and all the roles in the game (also randomized). One fifth (rounded down, if needed) of the players will be in the exact same numeral spot as their role. If a player dies, they and their role be removed from both lists, even if their role was hidden for whatever reason. However, numerical positions will not go down from this.\n*NOTE: If a player changes roles for any reason, it will reflect on your list.*");

		e.addField("Goal:", "Kill a **majority** of the players whose numeral spot is the same as their role's. Killing counts as you either directly attacking them at night and dying from it, or you having voted them when they get lynched. If someone dies another way, you will not get credit for it.");
	});

	register_role(["help_me", "helpme", "help{me}", "1241"], "Neutral", "Help {Me}", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1241");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Launch an SOS flare at your house to call for help.");

		e.addField("Attributes:", "- All Protective roles will be redirected to you, they will be aware they were redirected but not who they were redirected to. If no Protective roles exist/are alive, gain Powerful defense. You have 3 SOS flares.");

		e.addField("Goal:", "Survive until the end of the game, and get saved by using an SOS flare at least once.");
	});

	register_role(["nightfall", "nf", "1242"], "Neutral", "Nightfall", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1242");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Night someone each day, starting the night phase for them immediately. They're removed from the day chat, and they may send a night action which will resolve immediately.\n- Fall someone each night, lowering their defense up to two stages.");

		e.addField("Attributes:", "- If you would die during the day for any reason, a random player dies in that way instead. The fact that you were meant to be the one who died isn't revealed.\n- As long as you are alive, if a nightfall vote is reached, you will be lynched instead and the day will end. Once this has happened once, it may be circumvented by voting for crepuscule.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["silencer", "1243"], "Neutral", "Silencer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1243");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Silence someone each night, preventing them from talking, voting, or using day abilities the next day.");

		e.addField("Attributes:", "- As long as you are alive, anything that would be announced to the public is instead announced only to you. This includes votes, dead players, their roles, etc.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["anticipator", "1244"], "Town", "Anticipator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1244\n*I just can't wait to die!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select someone to have their night ability process after every other night ability, including this one.\n- During the day, choose to nullify your attributes tonight.");

		e.addField("Attributes:", "- While you are alive, all night actions will be processed as soon as they are sent in. This attribute can cause a player to be killed in the middle of the night before they can perform their night ability.\n- Any persistent abilities will linger until the end of the night (e.g. a protective role will defend against any attacks sent in after the protection, a Veteran on alert will kill all players who visit them after they go on alert).\n- If you target a player who sent in their night action before you did with your night ability, your ability will fail.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rat", "1245"], "Neutral", "Rat", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1245");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Crawl into someone's house at night.");

		e.addField("Attributes:", "- All visits to you will be redirected to that player. Each player can only be targeted once.");

		e.addField("Goal:", "The game ends with you having crawled to at least half of the living players' houses, and you caused someone's death.");
	});

	register_role(["bodysnatcher", "1246"], "Neutral", "Bodysnatcher", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1246");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone, you will get their role if they die.");

		e.addField("Attributes:", "- Your target's death message will show you as a random role if it successfully changes your role.");

		e.addField("Goal:", "Kill someone to get their role and win as that role, lose otherwise.");
	});

	register_role(["wandering_spirit", "wanderingspirit", "wandering", "ws", "1247"], "Neutral", "Wandering Spirit", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1247");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Possess someone's body, you will swap roles with them, making them a Wandering Spirit.");

		e.addField("Attributes:", "- If your target were to die that night, they will survive and you will die instead.\n- If you use your ability on the last night of the game, your target will win if their old role would win.");

		e.addField("Goal:", "Possess someone to get their role and win as that role, lose otherwise.");
	});

	register_role(["arsonist", "1248"], "Neutral", "Arsonist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1248");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, choose a player and burn their house down. All players that live in that house must now go find somewhere else to live. This ability does not attack players.");

		e.addField("Attributes:", "- When a player's house is burned down, during the following day, they must choose another player to live with for the rest of the game. The player they choose to live with will be notified that this happened.\n- All abilities and attributes that target players during the night which are directed at a player whose house has already been burned down will go toward the new house that they live in.\n- All abilities and attributes that target players during the night will target every player who lives in the targetted house.\n- If a player does not choose anybody to live with during the following day after having the house they live in burned down, then during the following night, all abilities that target them will fail, and they will be dealt a Powerful attack. If the attack succeeds at killing them, their cause of death will be shown as having been mauled by a Werewolf.\n- If all players that live in a house die, the house they lived in automatically becomes burned.");

		e.addField("Goal:", "Burn every house to the ground. This does not include the house that you live in.");
	});

	register_role(["criminalist", "crim", "1249"], "Town", "Criminalist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1249");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyse someone and find their role. It will be from three roles written on The Criminal List.");

		e.addField("Attributes:", "- At the start of game, The Criminal List is publicly announced with every role in the game plus 5 fake roles who don't exist. The fake roles can exist according to the rolelist.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hacker", "1250"], "Neutral", "Hacker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1250");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack a player.\n- Use a Hacked ability.");

		e.addField("Attributes:", "- The same player cannot be Hacked twice\n- Hacked players will have one of their abilities locked (unusable) at random.\n- This ability will remain locked while the Hacker is alive, and will unlock when the Hacker dies.\n- The Hacker will gain 1 charge of the locked ability.\n- The Hacker is capable of taking two actions each night- this can be 2 Hacks, a Hacked ability and a Hack, or 2 Hacked abilities\n- Hacking cannot lock factional abilities or chats.\n- The Hack action is Astral.");

		e.addField("Goal:", "Survive + A Majority of surviving players are hacked at game end");
	});
};
