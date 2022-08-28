module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["gom_jabbar", "gomjabbar", "gom", "jabbar", "gj", "1601"], "Town", "Gom Jabbar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1601");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose to test a player’s humanity. If they are evil (bypassing all detection immunity or frames), you will attack them. You start with one charge of this ability.");

		e.addField("Attributes:", "- If the tested player is good, you will secretly disable their ability, including giving random results to investigative abilities.\n- If you successfully kill a player, you gain a charge of your ability.\n- You can only use your ability during a full moon.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["temperature_controller", "temperaturecontroller", "temperature", "controller", "tc", "1602"], "Other", "Temperature Controller", {subCat: "Support", spawnCat: ["Underworld", "Everfrost"]}, (e) =>
	{
		e.setDescription("Post 1602");

		if(Math.random() < 0.5)
		{
			e.author.iconURL = factions.Everfrost.icon;
			e.setColor(factions.Underworld.color);
		}
		else
		{
			e.author.iconURL = factions.Underworld.icon;
			e.setColor(factions.Everfrost.color);
		}

		e.addField("Alignment", "Underworld/Everfrost Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Increase a player's home temperature, forcing them and all visitors outside, so you can douse all of them.\n- If the Apocalypse is dead, you may ignite.\n- Decrease a player's home temperature. Roleblock them and all their would-be visitors.\n- **Final Thermostat Control** - Roleblock all players who you have targeted directly with either ability, then coldsnap.");

		e.addField("Attributes:", "- In the bot, this may appear in either Underworld or Everfrost color.\n- You have access to both factional chats.\n- You may win with either faction.\n- Both factions may choose to kill you.\n- You may self-target.\n- You may choose to perform a false ability to either faction.\n- If the Apocalypse dies and you would have been promoted, you may choose to decline the promotion.");
		
		e.addField("Goal:", factions.Everfrost.goal + " OR " + factions.Underworld.goal);
	});

	register_role(["viri", "1603"], "Discordian", "Viri", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1603");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect (Night): Check to see if a player is able to be converted. If they are, learn their role.\n- Ramble (Night, 2 uses): Talk about Conversion, convincing a player conversion is pretty cool. They become Viri (1603) but cannot convert.");

		e.addField("Attributes:", "- Roleblock, Redirect Immune.\n- You may only convert Town, Neutral Benign, and Neutral Evil roles, and only if they lack defense.");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["bomber", "1604"], "Neutral", "Bomber", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 1604");

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player to plant a bomb on them and their visitors.\n- At any time (day, night, or even transition between them), detonate your bombs. Instantly kill all players with bombs.");

		e.addField("Attributes:", "- People who visit you or your target will have a bomb planted on them.\n- People who you vote will have a bomb planted on them. Unvoting them will not remove the bomb, but placing a vote on someone else will.\n- People who vote you will have a bomb planted on them. This is removed if they unvote you.\n- A bomb can only be removed if the criteria to remove it is met in the same phase it was placed. After that, it is permanent.\n- Townies do not know if a bomb was placed on them. Non-Town roles will, but only at the end of the night, even if it was placed at day.\n- If you detonate during the day, the majority needed to lynch will update accordingly.\n- You know who has a bomb.");
		
		e.addField("Goal:", "NG Goal");
	});

	register_role(["multi-loyalty_agent", "multi_loyalty_agent", "multiloyaltyagent", "mla", "1605"], "Other", "Multi-Loyalty Agent", {subCat: "Support", spawnCat: ["Mafia", "Coven"]}, (e) =>
	{
		e.setDescription("Post 1605");

		if(Math.random() < 0.5)
		{
			e.author.iconURL = factions.Mafia.icon;
			e.setColor(factions.Coven.color);
		}
		else
		{
			e.author.iconURL = factions.Coven.icon;
			e.setColor(factions.Mafia.color);
		}

		e.addField("Alignment", "Underworld/Everfrost Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mess with the signage of people's homes. Redirect people who visit target A to target B.\n- Perform the factional Mafia kill.\n- Create a false path. People who visit your target will be redirected the forest. Any effects to the forest will be visible.\n- With the Necronomicon, you may choose to set up hostile animals.");

		e.addField("Attributes:", "- In the bot, this may appear in either Mafia or Coven color.\n- You have access to both factional chats.\n- You may win with either faction.\n- Both factions may choose to kill you.\n- You may self-target.\n- You may choose to perform a false ability to either faction.");
		
		e.addField("Goal:", factions.Mafia.goal + " OR " + factions.Coven.goal);
	});

	register_role(["caino_arukat", "cainoarukat", "caino", "arukat", "ca", "1606"], "Neutral", "Caino Arukat", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1606");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Dimension Shift**: Caino moves a player into Dai'ar Kul-ya on a space of his choosing.\n- **Continuum Fracking**: Caino creates one of his generators in a space on Dai'ar Kul-ya that is not occupied.\n- **Time-Space Embodied**: Caino creates one of his artifacts in a space on Dai'ar Kul-ya that is not occupied. Each artifact may only be created once, but artifacts can be recreated 3 nights after being destroyed.");

		e.addField("Attributes:", "- You may multitask.");

		e.addField("Dai'ar Kul-ya:", "Caino has access to a 3x3x3 three-dimensional cube in which he can place generators, artifacts, and players. If another player attacks Caino, they are moved onto Dai'ar Kul-ya on a space of their choosing. Players in Dai'ar Kul-ya are removed from the main game and cannot view chats, be interacted with, use abilities, or take other game actions. There is an additional day chat each day that players inside Dai'ar Kul-ya have access to, but there is no lynch. Players within Dai'ar Kul-ya can choose to move one space orthagonally within Dai'ar Kul-ya each night. If they move onto an artifact or generator, it is destroyed. If they move onto an enemy character, the two \"fight\", where each may use an ability of their choice on the other. If they move onto an unoccupied corner space, they can choose to leave Dai'ar Kul-ya. Players know their location in Dai'ar Kul-ya, but they cannot see generators, artifacts, or other players.");

		e.addField("Subspace:", "If Caino would be dealt an attack, instead, the attack is converted into \"damage\"— Basic: 1, Powerful: 2, Unstoppable: 3, Overkill+: 4— and then that damage is divided evenly between him and all unoccupied spaces in Dai'ar Kul-ya. For example, if none of the spaces were occupied and Caino was dealt a Basic attack, each of them, and Caino, would each receive 1/28 of a damage, or approximately 0.036 of a damage. If Caino puts a generator or artifact onto a space with damage on it, he takes that damage. If a player is put onto, puts themself onto, or moves onto a space with damage on it, that player takes that damage. Players, including Caino, have \"HP\" based on their Defense value— None: 1, Basic: 2, Powerful: 3, Invincible: 4, Overprotective: 5— and, upon taking total damage greater than or equal to their HP, they die. Players with Vulnerable defense die immediately upon taking any damage. Players know how much HP they have at all times while in Dai'ar Kul-ya.");

		e.addField("Subspace (cont.):", "Losing HP does nothing while not in Dai'ar Kul-ya, but if a player leaves Dai'ar Kul-ya then returns, they have the same amount of HP.");

		e.addField("Generators:", "*Each generator produces X a colour of Energy each turn Caino takes, where X is the orthogonal distance between that generator and the specified corner of Dai'ar Kul-ya (the least number of orthogonal moves required to get from one to the other) each night.*\n- Mine: Red, Top-Front-Right\n- Port: Blue, Top-Back-Left\n- Factory: Yellow, Bottom-Front-Left\n- Farm: Green, Bottom-Back-Right");

		e.addField("Artifacts:", "*Each artifact gives a random player inside Dai'ar Kul-ya among those orthogonally closest to it a status each night. All statuses last 3 nights. The potency of the status given is determined by the total sum of that generator's two colours of Energy that have been produced by Caino's generators so far.\n- Vessel: Red/Blue, target is moved X spaces in a random orthogonal direction or as far as possbile in Dai'ar Kul-ya each night, then their actual move processes, but this does not cause them to leave Dai'ar Kul-ya if it moves them onto a corner square. X is 0 if Energy is 0, 1 if Energy is between 1 and 10 inclusive, 2 if Energy is between 11 and 20 inclusive, and 3 if Energy is higher than 20.*");

		e.addField("Artifacts (cont.):", "- Transmitter: Red/Yellow, information about target is revealed to Cairo each night depending on Energy. If Energy is between 1 and 10 inclusive, Cairo learns the target's goal. If Energy is between 11 and 20 inclusive, Cairo learns their target's role. If Energy is higher than 20, Cairo learns everything the target has done over the course of the entire game.\n- Incinerator: Red/Green, target takes X damage each night. X is 0 if Energy is 0, 0.2 if Energy is between 1 and 10 inclusive, 0.4 if Energy is between 11 and 20 inclusive, and 0.6 if Energy is higher than 20.\n- Helm: Blue/Yellow, target is weakened each night depending on Energy. If Energy is between 1 and 10 inclusive, their defense goes down a tier that night. If Energy is between 11 and 20 inclusive, their defense goes down a tier permanently. If Energy is higher than 20, their defense goes down a tier permanently then they're dealt a Basic attack.");

		e.addField("Artifacts (moar.):", "- Incubator: Blue/Green, target loses part of their role each night depending on Energy. If Energy is between 1 and 10 inclusive, they lose a random attribute each night. If Energy is between 11 and 20 inclusive, they lose a random attribute and a random ability each night. If Energy is higher than 20, they lose all abilities, attributes, attack, and defense immediately.\n- Mirror: Yellow/Green, Cairo gains target's powers each night depending on Energy. If Energy is between 1 and 10 inclusive, Cairo may use one of their abilities at random. If Energy is between 11 and 20 inclusive, Cairo may use any number of their abilities. If Energy is higher than 20, Cairo may use any number of their abilities and gains any number of their attributes.\n- Rainbow: Red/Blue/Yellow/Green: Target is permanently converted to winning with Cairo if Energy is higher than 50. Only one target may be converted per game.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["seasonal_affective_disorder", "seasonalaffectivedisorder", "seasonal", "affective", "disorder", "sad", "1607", "1097u"], "Unseen", "Seasonal Affective Disorder", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1607\n*Everything can stop on a quarter...*\nConverted from: Uwa!");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Autumn (Night): Choose someone to accumulate a leaf pile in front of their house. The path to their house will become much more obscured. Your target's ability will fail if they target someone that is not within two spaces of the role list of them, and vice versa.\n- Winter (Night): Choose a target and lower the temperature in their house. They will be roleblocked and covered in frost. If they are not visited by at least two non-Unseen players tomorrow night, they will be dealt an Astral Basic Attack.\n- Spring (Night): Bully someone. They will become much more self-concious about performing their ability. Their ability will fail if any other player visits their target. They will be given the standard Everfrost frost message.");

		e.addField("Abilities (cont.):", "- Summer (Night): Apply a sunburn to your target. This will cause your target to perform their ability much more slowly as they will be in pain from their sunburn. Their action will be performed after all other night abilities, and they will count as visiting all players in between them and their target on the role list (take the shorter number of players in between your target and their target). This will additionally ignite any douses on the target.");

		e.addField("Attributes:", "- If you were converted from Uwa!, you will continue where you left off on your ability order; otherwise, reference the Uwa! role card for the order in which you may perform your abilities.\n- Your Autumn ability is permanent, but your Winter, Spring, and Summer abilities only apply on the night you use them.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["banisher_of_the_radiance", "banisheroftheradiance", "banisher", "radiance", "botr", "1608"], "Town", "Banisher of the Radiance", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1608");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit a player. They are now unaffected by your attribute. If you have already visited them before, they are now affected by your attribute again.");

		e.addField("Attributes:", "- While you are alive, all players lose the following immunities: Detection Immunity, Roleblock Immunity, Control Immunity, Redirect Immunity, and Death Immunity. Additionally, all visits that would be Astral are no longer Astral.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["demolitionist", "demo", "1609"], "Mafia", "Demolitionist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1609");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the factional kill to plant a Time Bomb on a player during the night.\n- Plant a Satchel Charge on a player during the night. (1-shot)\n- Defuse a Time Bomb or Satchel Charge during the night.");

		e.addField("Attributes:", "- The Time Bomb will explode at the end of the next night, dealing a Powerful attack to the target and anyone who visits them. A player will not be informed if they have a Time Bomb.\n- Depending on how the target dies, the Satchel Charge will do one of the following:\n> - If the target is nightkilled, anyone who visited the target on the night of death will be hit with a Powerful Attack.\n> - If the target is lynched or otherwise daykilled, the Satchel Charge will kill half of the people responsible for their death, rounding up.\n- Defusing a Time Bomb or Satchel Charge will prevent it from exploding.\n- You will know if any member of the Mafia has been targeted by a Time Bomb or Satchel Charge.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["snapdragon", "snap", "sd", "1610"], "Florae", "Snapdragon", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1610");

		e.addField("Alignment", "Florae Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frighten your visitors during the night. 3-shot.");

		e.addField("Attributes:", "- Frightened players will be roleblocked.\n- You will learn the names of the players who you frightened.\n- If you frighten the same player twice, they will be hit with a Basic Attack.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["illusionist", "illu", "1611"], "Coven", "Illusionist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1611");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Horrify a player with an illusion, roleblocking them.\n- Surround a player with an illusory barrier, giving them Basic Defense.\n- Summon creeping shadows, roleblocking anyone who is a member of the Town (or equivalent)");

		e.addField("Attributes:", "- You may summon creeping shadows once.\n- With the Necronomicon, your illusions have a more sanity-damaging effect. You may Horrify twice in one night, and any player horrified more than once will hit themselves with an attack tier equal to (Number of times Horrified - 1).");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["umbrella_leaf", "umbrellaleaf", "umbrella", "leaf", "uf", "1612"], "Plant", "Umbrella Leaf", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1612");

		e.addField("Alignment", "Plant Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shield a plant from death, giving them Powerful Defense. Costs 3 sun.\n- Produce a sun during the night");

		e.addField("Attributes:", "- If you produce sun, you will automatically roleblock anyone who attempts to use an Astral ability on a Plant. You will know how many people you roleblock each night.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["sk", "poisonous_serial_killer", "poisonousserialkiller", "psk", "1613"], "SK", "Poisonous Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1613");

		e.addField("Alignment", "Serial Killer Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab a player with your poisoned knife during the night.");

		e.addField("Attributes:", "- Your attack deals a Basic Attack. If it doesn’t kill, it deals a Powerful Poison.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["actionguy777", "actionguy", "action", "1614"], "Discordian", "Actionguy777", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1614");

		e.addField("Alignment", "Unique Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Add a player to your spreadsheet during the night. (3-shot)");

		e.addField("Attributes:", "- You will know the roles of all players on your spreadsheet at all times, piercing detection immunity.\n- Any attack used against a Discordian by a player on your spreadsheet will fail unless it is stronger than Powerful.");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["gunner", "1615"], "Toppat", "Gunner", {subCat: "Operator"}, (e) =>
	{
		e.setDescription("Post 1615");

		e.addField("Alignment", "Toppat Clan Operator", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player during the night. You may choose which type of ammo to use:\n - Regular Ammo: Basic Attack (Unlimited)\n> - Piercing Ammo: Powerful Attack (1-shot)\n> - Explosive Rounds: Powerful Attack + Rampage (1-shot)");

		e.addField("Attributes:", "- If you are lynched, you may take a last stand and shoot a player with a Powerful Attack.\n- **Chief Modifier**: You gain one use each of Piercing Ammo and Explosive Rounds. You also gain the ability to shoot twice in one night three times.");
		
		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["fortune_teller", "fortuneteller", "fortune", "teller", "ft", "1616"], "PaleMoon", "Fortune Teller", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1616");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tell a player’s fortune each night.\n- Read a player’s palms each night, learning their role category (ie “Town Killing”)");

		e.addField("Attributes:", "- When you tell a player’s fortune, you must choose a secondary target. The original target will be controlled to use their ability on that player the next night.\n- Your target will be informed that their fortune was told on the night of use, but not who the secondary target is.\n- After the PMCS has begun, you may instead choose to foretell a player’s death, which will cause them to deal themselves an Unstoppable Attack the next night.");
		
		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["scp-035", "scp_035", "scp035", "1617"], "SCP", "SCP-035", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 1617");

		e.addField("Alignment", "Unique SCP Keter", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Corrode a player during the night, dealing an Unstoppable Attack.\n- Possess a player during the night (1-shot)");

		e.addField("Attributes:", "- You will deal anyone who visits you a Powerful Attack.\n- When you possess a player, you will die from a Modkill level attack and convert them to SCP-035 without access to the Possess ability.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["tropius", "1618"], "Pokemon", "Tropius", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 1618");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Leaf Storm: Deal a Basic Rampage Attack. 2-shot.\n- Synthesis: Give self Powerful Defense for the night. 2-shot.\n- Sweet Scent: Reduce a target’s Defense to none for the night.");

		e.addField("Attributes:", "- If you are doused and ignited by an Arsonist or similar role, nothing can prevent your death.");

		e.addField("Pokemon Ability:", "Harvest: At the end of each night while you are alive, you will gain a berry, which can be given to any member of the Pokemon team. Each Pokemon may only carry one berry:\n- Sitrus Berry: Provides an auto Basic Defense when attacked.\n- Leppa Berry: Refills one use of an ability when it runs out.\n- Persim Berry: Grants one-time redirect immunity.\n- Pecha Berry: Grants one-time poison immunity/cure.\n- Cheri Berry: Grants one-time roleblock immunity.\nBerries may be transferred to other members of the Pokemon at any time during the day or as a free action during the night.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["wildfire", "1619"], "Underworld", "Wildfire", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1619");

		e.addField("Alignment", "Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the factional douse to spread the flames, dousing anyone who visits a currently doused player. 1-shot.\n- Keep a lookout, dousing anyone who visits a member of the Underworld. 1-shot.");

		e.addField("Attributes:", "- If you carry the factional douse, you will additionally douse anyone who visits your original target.\n- If the Apocalypse dies, you will become the Apocalypse.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["prince_of_darkness", "princeofdarkness", "pod", "1620"], "FallenAngel", "Prince of Darkness", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1620");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Absorb and reproduce a player each night. They will not appear to be dead until visited. The vote threshold will be secretly adjusted to account for dead players.");

		e.addField("Attributes:", "- If you absorb a Fallen Angel, you will gain access to one of their abilities. If they have multiple, it is chosen randomly. Additionally, when they are revealed to be dead, their role and will will be cleaned.\n- If you absorb a non-Fallen Angel, you will be able to see their role and will before their body is revealed.\n- You may only use one ability per night.\n**Sin of Attachment**: If you are the last Fallen Angel, reproduced players must be visited twice in one night to be revealed as dead. In addition, you are capable of multitasking as many different abilities as you wish during the night.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["cardinal", "1621"], "Hallow", "Cardinal", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1621");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night, blind a player with the Hallow’s light. They will be redirected to target a random player.\n- During the day, shine a harsh light on a player, secretly decreasing the votes needed to lynch them by 1 for that day.");

		e.addField("Attributes:", "- If you redirect a kill by blinding a player, you will gain 1 Faith Point.\n- If you successfully cause a lynch by lowering the vote threshold, gain 1 Faith Point.\n- When you have accumulated 3 Faith points, the Saint will gain 1 Saint point.\n- Roleblock, Conversion Immune");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["forgotten", "forgor", "1622"], "Other", "Forgotten", {subCat: "Espionage/Evil", spawnCat: ["Last", "Neutral"], spawnSubCat: ["Espionage", "Evil"], syncCats: true}, (e) =>
	{
		e.setDescription("Post 1622");

		e.addField("Alignment", "Unique Last Espionage/Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (First) Cause a player to forget who they are. This is an attack.\n- (Second) Cause a player to become confused, giving them false feedback about their ability.\n- (Third) Cause short-term forgetfulness, roleblocking a player.\n- (Forgotten) Investigate a player, learning their role.");

		e.addField("Attributes:", "- (First) If your attack fails, your target will instead be left in a state where they have no role.\n- (Second) If they do not get feedback, they will receive false redirect/control/roleblock/etc messages instead.\n- You do not have access to the Last chat.\n- You use your Forgotten ability until a Last dies.\n- Once another Last dies, you will create your own order, where only you occupy a position. You will start in the position that the dead Last was in. If multiple are dead, RNG.\n- If the Last has more than 3 members, you are guaranteed to spawn to fill one of the Neutral Evil slots.\n- You cannot whisper people you have investigated and found are Last members.");
		
		e.addField("Goal:", factions.Last.goal);
	});

	register_role(["lakitu", "1623"], "Koopa", "Lakitu", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1623");

		e.addField("Alignment", "Koopa Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a Spiny near someone, they will be Roleblocked the next time they visit a Koopa, Will fail if used on a player that already has a Spiny.\n- Create an army of Spiny to protect all Koopas, anyone visiting Koopa members this night will be roleblocked. (1 use)");

		e.addField("Attributes:", "- If a Spiny attemps to Roleblock someone Roleblock immune, they will be dealt a Basic attack, and their action will fail if they die.\n- You will know when a Spiny has Roleblocked/Attacked someone.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["wiggler", "1624"], "Koopa", "Wiggler", {subCat: "All-Rounder"}, (e) =>
	{
		e.setDescription("Post 1624\n*Yes, Maple Treeway is my favorite Mario Kart track. How could you tell?*");

		e.addField("Alignment", "Koopa All-Rounder", true);
		e.addField("Attack", "Powerful (Basic)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Wiggle outside a player's house. If they leave their house, deal a Powerful Attack to them. When Angry, you will deal a Basic Attack to all of their visitors, and you will attack players with Astral visits.\n- Choose a Koopa player to let ride on top of you tonight. Their visit will be Astral, but you will appear to visit their target. When Angry, you and your target gain roleblock, redirect, and control immunity for the night. You cannot target the King with this ability.");

		e.addField("Attributes:", "- If you are attacked but survive, you will become Angry, and your abilities will be buffed.\n- You are immune to any attacks caused by you visiting a player (e.g. visiting an alert Veteran or a player targeted by a Rampaging attack).");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["voidling_x", "voidlingx", "1625"], "X", "Voidling X", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1625");

		e.addField("Alignment", "X Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a player into the void at night.\n- Attempt to permanently send someone into the void. This is an attack.");

		e.addField("Attributes:", "- Sending a player into the void removes them from the game. They come back the day after tomorrow. (if voided on night 2, they return day 4)");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["locust_x", "locustx", "1626"], "X", "Locust X", {subCat: "Conversion"}, (e) =>
	{
		e.setDescription("Post 1626");

		e.addField("Alignment", "X Conversion", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert a player to Locust X, the only thing that stops this is conversion immunity.\n- If there are 4 members, you may attack someone.");

		e.addField("Attributes:", "- If too many people are attempting to be converted, a random conversion will succeed until the cap is reached. All other targets will be attacked.\n- If your target has access to a factional chat, they become Espionage. They keep the abilities and attributes of their original role, you learn them, they learn you, but you cannot whisper to them or vice versa. They keep access to that factional chat.");
		
		e.addField("Goal:", factions.X.goal);
	});

	register_role(["propogandist", "prop", "1627"], "Sentry", "(Sentry) Propogandist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1627");

		e.addField("Alignment", "Unique Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Power)", true);

		e.addField("Abilities:", "- Authorize an investigation on 1 player during the day. Mandatory or random.\n- Invite a player to your house during the night.");

		e.addField("Attributes:", "- Any player you vote (including if retracted) during the day will also be authorized for investigation.\n- Your Authorized targets will be revealed each night.\n- Any non-attacking visits to you will instead be redirected to the player you invited.\n- You may not authorize yourself as a target.\n- When you die, a random Sentry is promoted to a Minister (1372), unless there is already one.\n- 1 Powerful Autovest\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["trumpet", "1628"], "Band", "Trumpet", {subCat: "Brass"}, (e) =>
	{
		e.setDescription("Post 1628");

		e.addField("Alignment", "Band Brass", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.\n- (Rehearsing) Increase your attack power by 1, then rehearse.\n- (Concert) Deafen a player. When you attack them, you'll bypass protective roles.");

		e.addField("Attributes:", "- You cannot go higher than Overkill attack.\n- **Rehearse Radius**: 3");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["french_horn", "frenchhorn", "french", "horn", "fh", "1629"], "Band", "French Horn", {subCat: "Brass"}, (e) =>
	{
		e.setDescription("Post 1629");

		e.addField("Alignment", "Band Brass", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player every even night.\n- (Rehearsing) Gain detection immunity for the night, then rehearse.\n- (Concert) Entrap a player in your instrument's horn, permanently reducing their defense value.");

		e.addField("Attributes:", "- You may also grant detection immunity to another player if you so wish.\n- **Rehearse Radius**: 3");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["tuba", "1630"], "Band", "Tuba", {subCat: "Brass"}, (e) =>
	{
		e.setDescription("Post 1630");

		e.addField("Alignment", "Band Brass", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player every night.\n- (Rehearsing) Increase your priority by 2, then rehearse.\n- (Concert) Deal a rampage attack.");

		e.addField("Attributes:", "- One-Use Basic Defense\n- At the start of the game, your attack will always be the final thing that is processed.\n- **Rehearse Radius**: 5");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["trombone", "1631"], "Band", "Trombone", {subCat: "Brass"}, (e) =>
	{
		e.setDescription("Post 1631");

		e.addField("Alignment", "Band Brass", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player every odd night.\n- (Rehearsing) Block people from entering your house, then rehearse.\n- (Concert) Block people from entering or leaving a target's house, roleblocking them and their visitors.");

		e.addField("Attributes:", "- **Rehearse Radius**: 4");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["xylophone", "xylo", "1632"], "Band", "Xylophone", {subCat: "Percussion"}, (e) =>
	{
		e.setDescription("Post 1632");

		e.addField("Alignment", "Band Percussion", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a healing Powerful defense to another player.\n- (Rehearse) Attack one person who visits you, then rehearse.\n- (Concert) Negate an attack to your target, then attack the attacker.");

		e.addField("Attributes:", "- (Concert) If your target isn't attacked, do nothing.\n- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["cymbals", "cymbal", "1633"], "Band", "Cymbals", {subCat: "Percussion"}, (e) =>
	{
		e.setDescription("Post 1633");

		e.addField("Alignment", "Band Percussion", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. All visitors to that player will have their ability fail.\n- (Rehearsal) Select a player to attack a random visitor, then rehearse.\n- (Concert) Deafen a player. They lose message history permissions the next day.");

		e.addField("Attributes:", "- **Rehearse Radius**: 5");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["bass_drum", "bassdrum", "base", "drum", "bd", "1634"], "Band", "Bass Drum", {subCat: "Percussion"}, (e) =>
	{
		e.setDescription("Post 1634");

		e.addField("Alignment", "Band Percussion", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. You will block any attacks to them and attack a random attacker.\n- (Rehearsal) Select a player, learn everyone who visits them, then you will rehearse.\n- (Concert) At the beginning of the night, all players will be notified they can only target players within 2 positions from them. Band members are exempt.");

		e.addField("Attributes:", "- (Rehearsal) Both you and the target learn visitors.\n- (Concert) This is a day ability.\n- **Rehearse Radius**: 3");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["snare_drum", "snaredrum", "bd", "snare", "drum", "1635"], "Band", "Snare Drum", {subCat: "Percussion"}, (e) =>
	{
		e.setDescription("Post 1635");

		e.addField("Alignment", "Band Percussion", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. You will attack one random visitor.\n- (Rehearsal) Roleblock all players who visit you, then rehearse.\n- (Concert) Increase the Attack value of another Band member.");

		e.addField("Attributes:", "- You cannot attack Band members.\n- (Concert) You cannot increase it beyond Overkill.\n- **Rehearse Radius**: 3");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["flute", "1636"], "Band", "Flute", {subCat: "Woodwind"}, (e) =>
	{
		e.setDescription("Post 1636");

		e.addField("Alignment", "Band Woodwind", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control someone into another player. You do not learn their role, they get feedback and you don't.\n- (Rehearsal) Guess a player's faction and learn if you're correct, then rehearse regardless of the result.\n- (Concert) Guess a player's role. If correct, attack them.");

		e.addField("Attributes:", "- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["clarinet", "1637"], "Band", "Flute", {subCat: "Woodwind"}, (e) =>
	{
		e.setDescription("Post 1637");

		e.addField("Alignment", "Band Woodwind", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Redirect all players from target A to target B and vice versa.\n- (Rehearsal) Redirect a specific player to another target, then rehearse.\n- (Concert) Stalk a player and attack their target.");

		e.addField("Attributes:", "- (Concert) You may select other Band members.\n- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["criminal", "1638"], "Town", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1638");

		e.addField("Alignment", "Town Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Astral Visitor\n- Commit one of various crimes.\n- Commit murder, and attack someone.\n- Commit vandalism, and prevent someone from being visited that night.\n- Commit destruction of property, and roleblock someone.");

		e.addField("Attributes:", "- Roleblock immune.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["king", "1639", "606u"], "Unseen", "King", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1639\nConverted from: President");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Executive Order (Night): Pass a law forbidding an action.\n- Personal Knight (Night): Send a Knight to either act as a Bodyguard to a player, or attack a player.");

		e.addField("Attributes:", "- If a player suspects someone of breaking a law, they may report it to the host. If it is true, the suspect is modkilled. If it is false, the player loses reporting permissions.\n- The host has the right to bar ridiculously stupid and/or broken laws from being passed.\n- There will never be an Unseen Head role that isn't Assassin or Mastermind.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["coordinate_grid", "coordinategrid", "coordinate", "cg", "1640"], "Mathematic", "Coordinate Grid", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 1640");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night, plot a player on your grid each night, at the cost of 4 points.\n- During the night, move a player to a different point on your grid at the cost of 2 points. You may take this action as many times as you wish if you have enough points.\n- During the day, create a shape using the players on your grid.");

		e.addField("Attributes:", "- When you add a player to your grid, you must choose a coordinate to add them at. The grid has an X range from 0 to 5 and a Y range from 0 to 5.\n- The following shapes are possible:\n> - Line (2 players): Both players become Solved 1 By 1 for the next night.\n> - Triangle (3 players): Players in the triangle are redirected to visit each other for the next night. If this redirects a killing action, gain 3 points.\n> - Square (4 players): You learn the roles of all players in the square. If any of them are faction leads or Town Power, gain 6 points.\n> - Parallelogram (4 players): All players are randomly redirected to visit each other’s targets. If this causes a player to target themselves, gain 4 points.\n> - Trapezoid (4 players): The two players on the larger end of the trapezoid are forced to vote for the two players on the smaller end of the trapezoid near the beginning of the next day. If this results in a lynch, gain 6 points.");

		e.addField("Attributes:", "- In order to create a shape, the players targeted must be organized into that shape on your coordinate grid.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["injector", "1641"], "Biohazard", "Injector", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1641");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inject a player during the night. If they die during this night, the next day, or the next night, their role will appear as [DISSOLVED]\n- Immunize a Biohazard player, giving them Basic Defense for this night and the next. You may self-target.");

		e.addField("Attributes:", "- If you die by any means, your role will appear as [DISSOLVED]");
		
		e.addField("Goal:", factions.Biohazard.goal);
	});

	register_role(["corporal", "1642"], "Army", "Injector", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1642");

		e.addField("Alignment", "Army Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assault!: Hit a target with a Powerful Attack. If they target has any form of defense, or your kill fails, your next use of Assault! Will be a Basic Attack. 2 uses. +2 uses and resets to Powerful when the Marshal reveals themselves.");

		e.addField("Attributes:", "- If you kill a member of the Army using Assault!, two hidden votes will be placed on you at the start of the next day.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["surgeon", "1643"], "Crew", "Surgeon", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1643");

		e.addField("Alignment", "Crew Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may heal a player during the night, giving them Basic Defense and delaying their death until the end of the next night if they are hit with a stronger attack. You may not self-target.\n- 1-shot: Operate on a member of the Crew, roleblocking them and giving them permanent Powerful Defense.");

		e.addField("Attributes:", "- A player whose death is delayed by your first ability will be informed that they are bleeding out. If they are healed by a Doctor or Lily before death, they will survive.\n- A Crew member that has been Operated on will keep their Powerful Defense if they convert to a different Crew role.");
		
		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["black_ice", "blackice", "black", "ice", "bi", "1644"], "Everfrost", "Black Ice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1644");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player. If they use an investigative ability, you will learn what the result was, and it will be reversed or otherwise made incorrect.\n**Slippery Fate**: Roleblock up to 2 players who attempt to visit a member of the Everfrost on this night, then coldsnap. If more than 2 players visit Everfrost members, roleblock 2 at random.");

		e.addField("Attributes:", "- You are detection immune and can choose a disguise role.\n- Roleblock immune.\n- Whenever anyone is roleblocked, they become framed for that night, appearing as a random Everfrost role.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["reiko", "1645"], "Fox", "Reiko", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 1645");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Target two players and cause mischief: each target will be hit with a random effect selected from the following list:\n> - Roleblock\n> - Redirect randomly\n> - Forced to vote a random target 12 hours into the next day\n> - Redirect into themselves\n> - Feedback randomly altered\n> - Next ability used becomes a Basic Attack instead. If the ability does not target anyone, nothing changes.");

		e.addField("Attributes:", "- If you are attacked and survive, you will automatically cause mischief for the attacker the next night.\n- You are roleblock and redirect immune.\n- Targets are not informed of the forced vote or ability conversion.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["blooper", "1646"], "Koopa", "Blooper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1646");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Ink a player during the night.");

		e.addField("Attributes:", "- Inked players will target players randomly until visited at least once.\n- Inked players will not know who their random targets are, but they will know they were inked.\n- Inking pierces redirect immunity.\n- If you are attacked and survive, you will Ink the attacker.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["random_faction", "randomfaction", "rfaction", "rf", "1647"], "Random", "Random Faction", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1647");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a random factional ability.\n- Randomize a player’s faction (1-shot)\n- Ignite doused players. This ignites players doused by any method. (1-shot)");

		e.addField("Attributes:", "- Each night phase, you will give the Random faction access to one of the following abilities for that night, which may be used by any member of the Random faction:\n> - Factional Kill (Basic)\n> - Factional Kill (Powerful)\n> - Factional Douse\n> - Factional Roleblock\n> - Factional Strike\n> - Factional Plague\n- Players roleblocked by a factional roleblock will be covered in frost.\n- If at least one striked player is alive, gain Basic Defense.\n- If a player’s faction is randomized, their goal will be randomized to one of the goals currently existing in the game. Their goal cannot remain the same.");
		
		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["geode", "1648"], "Rock", "Geode", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1648");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Distract up to 3 players, redirecting them to visit you.\n- Crack yourself open, dropping you Defense to Vulnerable, but granting 1 additional shot to all limited abilities of Rocks.");

		e.addField("Attributes:", "- Every time you are attacked, your defense drops by one level.\n- If you are nightkilled, your killer will gain 1 shot to all limited night abilities they have.\n- If you are lynched, one of the voters at random will gain 1 shot to all limited night abilities they have.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["ralsei", "1649"], "Town", "Ralsei", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1649");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal someone, Giving them Basic defense.\n- Pacify a player, Reducing their attack to None and learning their original Attack value. (2 uses)");

		e.addField("Attributes:", "- You can only target yourself on N1.\n- Your Heal ability gets upgraded after repeated uses:\n• 2 uses - Upgraded to Powerful defense\n• 3 uses - Now gives Roleblock and Redirect immunity.\n• 4 uses - Can Heal a second target, but this Heal is basic and gives no immunity.\n• 5 uses - Second Heal also Gives Powerful defense and Roleblock + Redirect immunity.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["drum_major", "drummajor", "drum", "major", "dm", "1650"], "Band", "Drum Major", {subCat: "Special"}, (e) =>
	{
		e.setDescription("Post 1650");

		e.addField("Alignment", "Bi-Unique Band Special", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Perform another Band member's ability on their behalf. Can only be a base or Concert ability, not a Rehearsing ability.\n- Your Rehearsing ability varies. See Attributes.\n- (Concert) Select someone who another Band member is targeting and attack your target. Turns into a normal attack if you're the last Band member.");

		e.addField("Attributes:", "- Bi-Unique means there is a maximum of 2.\n- (Rehearsal) You have the Rehearsal ability of a random Brass, Percussion, Woodwind, or String role. It does not keep its original radius.\n- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});
};
