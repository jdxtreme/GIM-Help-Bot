const REDfac = "Neutral";
const REDsub = "Chaos";
const REDgoal = "Eliminate all Blu team members.";
const REDcolor = "FF0000";
const BLUfac = "Neutral";
const BLUsub = "Chaos";
const BLUgoal = "Eliminate all Red team members.";
const BLUcolor = "0000FF";

module.exports = (g) =>
{
	const {register_role, factions, MessageEmbed, randomRole, GOOD} = g;

	register_role(["sabina_ona", "sabinaona", "sabina", "ona", "so", "1751"], "City", "Sabina Ona", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1751");

		e.addField("Alignment", "City Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None/Basic", true);

		e.addField("Abilities:", "- Take control of the city as a drum major. Reveal yourself as Sabina to permanently gain 3 votes.\n- Play the Trumpet at home. Roleblock everyone who visits you, redirect the roleblock immune.\n- Play the Clarinet elsewhere, learn someone else's role.\n- Play the Trumpet elsewhere, attack someone.");
		
		e.addField("Goal:", factions.City.goal);
	});

	register_role(["sith_trooper", "sithtrooper", "trooper", "1752"], "Sith", "Sith Trooper", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1752");

		e.addField("Alignment", "Unique Sith Offensive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deploy a trooper to attack a target on your behalf.\n- Attack a player yourself.");

		e.addField("Attributes:", "- At the start of the game, you have one trooper for every Sith member.\n- When you deploy a trooper, for all intensive purposes, it will be an NPC attacking them. Lookouts will see them visit, Trackers will see you stay home, and Bodyguards and Veterans will take down your NPC.\n- As long as your trooper doesn't die, you may keep redeploying them.\n- You may deploy one trooper per night.\n- You will be notified if a trooper dies.");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["doppelganger", "doppel", "1753"], "Spirit", "Wisp", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1753");

		e.addField("Alignment", "Spirit Support", true);
		e.addField("Attack", "Faction Variable", true);
		e.addField("Defense", "Faction Variable", true);

		e.addField("Abilities:", "-Become the Doppelganger of one of your Spirit Allies during the night. You will use their ability on a target of your choosing.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["security_officer", "securityofficer", "security", "officer", "so", "1754"], "Sentry", "Security Officer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1754");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Install a Security Camera at an authorized target's house.\n- Destroy a Security Camera.");

		e.addField("Attributes:", "- At the end of each night, you will learn all players that visited someone with a Security Camera on them.\n- You will also learn if they were visited by an Evil player, but you wont know how many, and who it is.\n- You may only have one Security Camera installed at all times.\n- Detection Immune players will show up as good to your Security Camera\n- Framed, doused, hexed etc targets will show up as evil to your Security Camera.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["red_soldier", "redsoldier", "soldier", "1755"], REDfac, "Red Soldier", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1755");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blow someone up.\n- Shoot a shotgun, dealing a rampage attack.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_pyro", "redpyro", "pyro", "1756"], REDfac, "Red Pyro", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1756");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Light someone and all their visitors on fire.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- Your rampage will not kill Red team members.");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_scout", "redscout", "scout", "1757"], REDfac, "Red Scout", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1757");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run around the town, learning who visits everyone. You will randomly attack one person.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- You cannot attack Red team members.");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_demoman", "reddemoman", "red_demo", "reddemo", "demoman", "demo", "1758"], REDfac, "Red Demoman", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1758");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant a bomb at someone's house.\n- Detonate all your bombs.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_heavy", "redheavy", "heavy", "1759"], REDfac, "Red Heavy", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1759");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rev up your minigun.\n- Once your minigun is revved, you may attack 3 people.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_engineer", "redengineer", "red_engi", "redengi", "engineer", "engi", "1760"], REDfac, "Red Engineer", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1760");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deploy a sentry at someone's house.\n- Teleport two people, transporting them.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- Your sentry will kill all visitors to the target.\n- Your sentry stays deployed until it attacks a player.\n- Your sentry cannot kill Red team members.");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_sniper", "redsniper", "sniper", "1761"], REDfac, "Red Sniper", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1761");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch who visits a player, then select a visitor to attack.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- You will learn if any visitors are Red team members.");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_spy", "redspy", "spy", "1762"], REDfac, "Red Spy", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1762");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, disguise yourself as any Blu team role.\n- Backstab a player at night.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- If a player dies, their cause of death appears to be the Blu role you're disguised as.\n- Blu team players will see you as a Blu team member. Red team players will still see you as a Red team member.");
		
		e.addField("Goal:", REDgoal);
	});

	register_role(["red_medic", "redmedic", "medic", "1763"], REDfac, "Red Medic", {subCat: REDsub}, (e) =>
	{
		e.setDescription("Post 1763");
		e.setColor(REDcolor);

		e.addField("Alignment", REDfac + " " + REDsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player, granting them Powerful defense.\n- Uber charge a player.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + REDcolor + ".\n- If the uber charge target is a Red team member, both you and the target gain Invincible defense, and the target's attack level is increased by one.");
		
		e.addField("Goal:", REDgoal);
	});
	register_role(["blu_soldier", "blusoldier", "soldier", "1764"], BLUfac, "Blu Soldier", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1764");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blow someone up.\n- Shoot a shotgun, dealing a rampage attack.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_pyro", "blupyro", "pyro", "1765"], BLUfac, "Blu Pyro", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1765");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Light someone and all their visitors on fire.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- Your rampage will not kill Blu team members.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_scout", "bluscout", "scout", "1766"], BLUfac, "Blu Scout", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1766");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run around the town, learning who visits everyone. You will randomly attack one person.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- You cannot attack Blu team members.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_demoman", "bludemoman", "blu_demo", "bludemo", "demoman", "demo", "1767"], BLUfac, "Blu Demoman", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1767");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant a bomb at someone's house.\n- Detonate all your bombs.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_heavy", "bluheavy", "heavy", "1768"], BLUfac, "Blu Heavy", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1768");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rev up your minigun.\n- Once your minigun is revved, you may attack 3 people.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_engineer", "bluengineer", "blu_engi", "bluengi", "engineer", "engi", "1769"], BLUfac, "Blu Engineer", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1769");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deploy a sentry at someone's house.\n- Teleport two people, transporting them.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- Your sentry will kill all visitors to the target.\n- Your sentry stays deployed until it attacks a player.\n- Your sentry cannot kill Blu team members.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_sniper", "blusniper", "sniper", "1770"], BLUfac, "Blu Sniper", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1770");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch who visits a player, then select a visitor to attack.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- You will learn if any visitors are Blu team members.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_spy", "bluspy", "spy", "1771"], BLUfac, "Blu Spy", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1771");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, disguise yourself as any Blu team role.\n- Backstab a player at night.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- If a player dies, their cause of death appears to be the Blu role you're disguised as.\n- Red team players will see you as a Red team member. Blu team players will still see you as a Blu team member.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["blu_medic", "blumedic", "medic", "1772"], BLUfac, "Blu Medic", {subCat: BLUsub}, (e) =>
	{
		e.setDescription("Post 1772");
		e.setColor(BLUcolor);

		e.addField("Alignment", BLUfac + " " + BLUsub, true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player, granting them Powerful defense.\n- Uber charge a player.");

		e.addField("Attributes:", "- The color of this role in the bot is #" + BLUcolor + ".\n- If the uber charge target is a Blu team member, both you and the target gain Invincible defense, and the target's attack level is increased by one.");
		
		e.addField("Goal:", BLUgoal);
	});

	register_role(["shy_guy_squad", "shyguysquad", "squad", "sqs", "1773"], "Koopa", "Shy Guy Squad", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1773");

		e.addField("Alignment", "Koopa Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Add a Shy Guy into your squad during the night.\n- Attack a target during the night.\n- Once per game, add a Shy Guy into your squad, and for the night, you may act as if you have 5 Shy Guys in your Squad, even if you have less or more.");

		e.addField("Attributes:", "- Your power grows with each Shy Guy you add.\n- You start with 1 Shy Guy in your squad.\n> 1: Basic Attack, No Defense\n> 2: Basic Attack, Basic Defense\n> 3: Powerful Attack, Basic Defense\n> 4: Unstoppable Attack, Powerful Defense\n> 5: Unstoppable Attack, Powerful Defense, and you will rampage.\n> 6: Unstoppable Attack, Invincible Defense, and you will rampage.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["icarus", "1774"], "FallenAngel", "Icarus", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1774");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Make someone soar every night, roleblocking them, and attacking them.");

		e.addField("Attributes:", "- If you make a Fallen Angel soar, you will also roleblock all of their visitors, and make your target's target soar too.\n- If you make a non Fallen Angel soar you will bypass immunities and healing.\n**Sin of Vainglory** -- If you're the last Fallen Angel remaining, you can use your ability twice, and your ability will act as if you've targetted a Fallen Angel, and you will attack all roleblocked targets.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["alien_translator", "alientranslator", "alien", "translator", "at", "1775"], "Neutral", "Alien Translator", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1775");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to translate their role.");

		e.addField("Attributes:", "- Their role's name, abilities, and attributes are put through https://www.ravbug.com/hypertranslate/ on 10 different languages. This is the target's new role.");
		
		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["crayon_kid", "crayonkid", "crayon", "kid", "ck", "1776"], "Town", "Crayon Kid", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1776");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Draw someone each night.");

		e.addField("Attributes:", "- The host will do their best to use MS Paint or a similar application to make a visual depiction of the target's role using only a standard black brush of a single size.\n- The host may not spend more than 30 seconds of effort on this depiction.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["localization_expert", "localizationexpert", "localization", "expert", "le", "1777"], "Town", "Localization Expert", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1777");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Localize someone each night.");

		e.addField("Attributes:", "- The host will translate their role's name through https://www.ravbug.com/hypertranslate/, with the start and end languages both set the English and the number of times set to 10, and you learn the translated name as your result.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["timekeeper", "1778"], "Town", "Timekeeper", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1778");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On Monday, perform an Investigator (35) check on a target.\n- On Tuesday, roleblock a player.\n- On Wednesday, grant a target Powerful defense.\n- On Thursday, redirect a player to a player of your choice.\n- On Friday, transport two players.\n- On Saturday, attack a player.\n- On Sunday, gain 3 anonymous votes.");

		e.addField("Attributes:", "- Your abilities are based off of the current day in the EDT timezone.\n- If the day switches in between a phase, cope, seethe, and mald, because the ability changes too and your target stays the same unless you change it. The host may choose to delay the game for you but is not obligated to do so.\n- You may alternatively queue an ability use if the day switches.\n- Your Sunday votes are completely anonymous and may be distributed to different people. They are seen as \"Sunday Timekeeper\".\n- If it becomes Monday when you've placed anonymous votes, those votes are removed.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spirit_of_tomfoolery", "spiritoftomfoolery", "tomfoolery", "sot", "sotf", "1779"], "Neutral", "Spirit of Tomfoolery", {subCat: "Chaos", spawnCat: GOOD}, (e) =>
	{
		e.setDescription("Post 1779");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Spawns in a \"Good\" slot, You also have all the Abilities and Attributes of a random Town role.\n- If you are lynched, A random player from the strongest town alignment is also lynched. (TPow > TK > TI > TP > TS > Other town alignments)");
		
		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["ally", "1780"], "Other", "Ally", {spawnCat: GOOD, subCat: "Good"}, (e) =>
	{
		e.setDescription("Post 1780");

		e.addField("Alignment", "Lawful Good", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist someone each night, making their ability more potent in some arbitrary way determined by the host. They won't be directly informed of this.");

		e.addField("Attributes:", "- This role can spawn as a member of any faction that counts as good.");
		
		e.addField("Goal:", "Whatever the faction you're part of's goal is.");
	});

	register_role(["serial_werearsonist", "serialwerearsonist", "swa", "1781"], "Neutral", "Serial Werearsonist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1781");

		e.addField("Alignment", "Neutral Killing Killing Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stab someone each night. You'll also maul their other visitors, and douse their visitors' visitors.\n- Ignite all doused players at night.");

		e.addField("Attributes:", "- Stabbing is a Basic attack, mauling is a Powerful attack, and igniting is an Unstoppable attack.\n- If you're roleblocked, you'll stab yourself.");
		
		e.addField("Goal:", "Kill Kill Kill all who would oppose you.");
	});

	register_role(["unknown_entity", "unknownentity", "serbian_origin", "serbianorigin", "serbian", "ueoso", "1782"], "Underworld", "Unknown Entity of Serbian Origin", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1782");

		e.addField("Alignment", "Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess a player's subalignment each night. If you're right, douse them. If you're wrong, learn what it is.");

		e.addField("Attributes:", "- Underworld members performing the factional douse are roleblock and redirect immune.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["its_simple_see", "itssimplesee", "simple", "iss", "1783"], "Neutral", "It's Simple See", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1783");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Select four players as Player A, Player B, Player C and Player D.");

		e.addField("Attributes:", "- Each time Player A or Player B visit each other, the next people Players C and D visit will each be dealt a basic attack.\n- Whenever Player C visits a player that Player B visited before, the next person Player A visits will deal a powerful attack to whoever the next person they visit visits.\n- The person Player B visited last night will be redirected to Player A. Player A's current night target will also be redirected to Player C.\n- Players A and C will visit the next person they visit in addition to their original target.\n- Players that visit Player D on a full moon night visit Player A, and players that don't visit Player A are redirected to Player D, which counts for them as a visit to Player D which means they visit Player A.\n- If Player A and Player C target a player that either Player B or Player D visited the night before, the next player Players A and C visit will visit Player A, Player B, Player C and Player D the next night.\n- Player B is Player D on full moons.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["argeste", "1784"], "Town", "Argeste", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1784\n*Raptor Sentinel of Strength*");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assail a player, attacking them and lowering their attack value by one stage tonight.\n- Twice per game, summon a galestorm, allowing you to assail three players tonight instead of one. They can all target the same player.");

		e.addField("Attributes:", "- By default, your attacks deal no damage. However, if your target has already been attacked (attacks from other sources are factored in) two times already, you will deal a basic attack. After that, every successive attack increases in attack value by one stage, up to Unstoppable.\n- If an attack with a value of none targets a player with a defence of none, they will receive according messages that indicate the target's defence was too high.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["inspector", "1785"], "Sentry", "Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1785");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect an authorized target during the night.");

		e.addField("Attributes:", "- You will be given 2 roles when you inspect someone. One role will be a Sentry, one role will be a non-Sentry sided role that can spawn. One of those 2 roles will be the targets role.\n- Evils know they were inspected, and are told what Sentry role the Inspector got.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["know_it_alls_quiz", "knowitallsquiz", "quiz", "kiaq", "1786"], "Neutral", "Know It All's Quiz", {subCat: "Other"}, (e, chn, message, args) =>
	{
		e.setDescription("Post 1786");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- This is not a role. Instead, this is a command that posts 5 role names, and people can guess what the roles do. If this somehow rolls, the player who rolls this gets 5 roles and picks one to become.");

		let roles = [];

		for(let i = 0; i < 5; i++)
		{
			roles[i] = new MessageEmbed();
			randomRole(chn, message, roles[i], (args.length > 0 ? args : ["-android"]), true);

			if(!roles[i].author)
				return true;
		}

		let output = "";

		for(let i = 0; i < 5; i++)
		{
			output = output + (i === 0 ? "" : "\n\n") + roles[i].author.name;

			if(roles[i].fields)
			{
				for(let n = 0; i < roles[i].fields.length; i++)
				{
					if(roles[i].fields[n].name === "Alignment")
					{
						output = output + " (" + roles[i].fields[n].value + ")";
						break;
					}
				}
			}

			if(roles[i].description)
			{
				let desc = roles[i].description;
				let nl = desc.search("\n");

				if(nl !== -1)
					desc = desc.substring(0, nl);

				output = output + "\n" + desc;
			}
		}

		e.addField("Role Names:", output);

		e.addField("Goal:", "Complete the goal of the role you choose.");
	});

	register_role(["tol_reaper", "tolreaper", "reaper", "1787"], "Neutral", "ToL Reaper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1787");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Icy Touch (Day): Consume 2 souls to silence a player and block their voting for the day.\n- Gather Darkness (Day): Consume 2 souls to make Reap bypass death immunity tonight. Can not be cancelled once used.\n- Reap (Night): Reap the soul of target player, killing them and leaving an empty body for 1 day. Unhealable.\n- Circle of Death (Night): Consume 1 soul to kill everyone visiting target player.");

		e.addField("Attributes:", "- Conversion Immune\n- Consume Soul: Start with 2 souls. If you die by any means other than from jailor-type roles, you will consume 1 soul to revive.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tol_possessor", "tolpossessor", "possessor", "1788"], "Neutral", "ToL Possessor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1788");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mindstorm (Day, 2 uses): Find the exact class of a player.\n- Mind Control (Day, 3 uses): Force a player to vote and prevent target from further voting.\n- Puppet Strings (Night): Control a target player and see their whispers tomorrow. Then, force them to attack a 2nd target for you.\n- Possess (Night, 2 uses): Evict a player's soul out of their body, attacking them and changing their class and logs to whatever you want if they die.");

		e.addField("Attributes:", "- Conversion Immune");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tol_sorcerer", "tolsorcerer", "sorcerer", "1789"], "Neutral", "ToL Sorcerer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1789");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Walking Bomb (Day): Cast a deadly spell on a target player that you can later detonate. Can have up to two Walking Bombs active. Cannot target the King.\n- Bomb Swap (Day): Move a Walking Bomb from one player to another.\n- Magic Missile (Night): Attack target player by firing a Magic Missile.\n- Detonate (Night): Kills all players with an active Walking Bomb. Bypasses death immunity. Does not count as visiting.");

		e.addField("Attributes:", "- Conversion Immune\n- Perceptive: You will not attack targets that are guarded by the Knight. You will learn that the player was guarded by the Knight at the end of the night.\n- Mage Armor: Immune to bleeding.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tol_sellsword", "tolsellsword", "sellsword", "1790"], "Neutral", "ToL Sellsword", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1790");

		e.addField("Alignment", "Unique Neutral Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stone Wall (Night): Occupy everyone targeting your target, except those attacking or converting your target. You cannot target the same player 2 nights in a row.\n- Divert (Night): Redirect target player to another. Cannot target the King, and if two players choose the same target to redirect, both redirects will fail.");

		e.addField("Attributes:", "- Conversion Immune\n- Contracted: Immune to Occupy and Redirect.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["tol_alchemist", "tolalchemist", "alchemist", "1791"], "Neutral", "ToL Alchemist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1791");

		e.addField("Alignment", "Neutral Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Stoneskin Potion (Day, 2 uses): Drink a potion that gives you Powerful Defense tonight.\n- Crimson Potion (Night): Use a Heal potion on target player, granting Powerful Defense and curing any bleeding. Does not affect unhealable attacks. Can only use on yourself once.\n- Alchemist Bomb (Night, 2 uses): Attack a target. Cannot target the King.");

		e.addField("Attributes:", "- Conversion Immune\n- Coagulate: Bleeding immune.");
		
		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["tol_butler", "tolbutler", "butler", "1792"], "Town", "ToL Butler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1792");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve Wine (Night): Occupy a player. You cannot target the same player 2 nights in a row.\n- Concentrated Wine (Night, 2 uses): Throw a party, occupying everyone that targets you.");

		e.addField("Attributes:", "- Dutiful: Occupy and redirect immune. This passive is kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_drunk", "toldrunk", "drunk", "1793"], "Town", "ToL Drunk", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1793");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Debauchery (Night): Redirect a target player to another. Conflicting redirections may fail.\n- Happy Hour (Night, 2 uses): Redirect a target player to themselves.");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. This passive is kept on class change.\n- I Am the Liquor: Occupy and redirect immune. This passive is kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_hunter", "tolhunter", "hunter", "1794"], "Town", "ToL Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1794");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Wolf Companion (Day, 2 uses): Cause a player to bleed. They will die in 2 nights unless saved. Not usable until Day 3.\n- Hunter's Mark (Night, 4 uses): Target 2 players. If the 1st player targets the 2nd, you will occupy and Basic Attack them. If you kill a Blue Dragon, you will lose all charges. Not usable until Night 3. Cannot target king. Cancels upon any redirect.\n- Bear Companion (Night, 3 uses): Your bear will Powerful Attack visitors attempting to attack you tonight. Grants Basic Defense and Conversion Immunity tonight.");

		e.addField("Attributes:", "- Hunter’s Retribution: If the court votes to execute you, you will kill the last player who voted against you.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_knight", "tolknight", "knight", "1795"], "Town", "ToL Knight", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1795");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Defend (Night): Defend target player, trading your life to kill their attackers. You, and anyone you kill, will be unhealable.\n- Cold Steel (Night): Attack target player. If you killed an ally, you will also take your own life (Unhealable). Not usable until Night 3. Redirect cancels ability.");

		e.addField("Attributes:", "- Armored: Your armor will protect you from the 1st attacker blocked by Defend.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_maid", "tolmaid", "maid", "1796"], "Town", "ToL Maid", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1796");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Matchmake (Night): Test if target player is compatible with last-checked player. Players are compatible if they win together. Starts with a random player. Scorned is incompatible with everyone. Royals are compatible with each other, even though, you know...\n- Nosy Servants (Night, 3 uses): Discover if a living player visited a dead player on the night they died. Doesn't count as visiting.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_mystic", "tolmystic", "mystic", "1797"], "Town", "ToL Mystic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1797");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Link Minds (Night): Allows another player to talk to you tonight. Others will not be able to see who you target. Failed if player is reaped by the Reaper. Cannot target King. Doesn't count as visiting.\n- Conduit (Night, 2 uses): Allow 2 players to speak to each other tonight. You will be able to hear them. Others will not be able to see who you target. Cannot target King. Doesn't count as visiting.");

		e.addField("Attributes:", "- Busy Mind: Immune to occupy and redirect. Passive kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_noble", "tolnoble", "noble", "1798"], "Town", "ToL Noble", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1798");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Political Pressure (Day, 2 uses): Force target player A to vote for target player B. Then, prevent target A from voting further voting for the day. Cannot force the King to vote, but can force votes against the King.\n- Gossip (Night): Receive the feedback (ability result message) of abilities used on target player tonight. Will not receive feedback for abilities that convert, attack, self target, or King abilities. Cannot target King.\n- Court Spy (Night, 2 uses): Summon shadows to report the contents of all whispers tomorrow.");

		e.addField("Attributes:", "- Royal Blood: During elections for a new King, votes for you count twice. Passive kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_observer", "tolobserver", "observer", "1799"], "Town", "ToL Observer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1799");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Observe (Night): Discover who target player visits. Cannot target King.\n- Overlook (Night, 3 uses): Discover who visits target player. Cannot target King.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_physician", "tolphysician", "physician", "1800"], "Town", "ToL Physician", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1800");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Exhume (Day, 3 uses): At the end of the night, learn what classes killed a player, or if they committed suicide. The true cause is revealed even if it was hidden or falsified. Can not be cancelled once used. Triggers at the end of the night.\n- Inoculate (Day, 1 use): Make a player permanently immune to bleeding. They will not be notified you targeted them. They will keep this passive even if their class changes. Does not heal bleeding.\n- Heal (Night): Use your staff to Heal target player with Powerful Defense, preventing their death and curing any bleeding. Does not affect unhealable attacks.\n- Self-Care (Night, 2 uses): If you are attacked tonight, you will heal yourself with Powerful Defense. Does not affect unhealable attacks.");

		e.addField("Attributes:", "- Remedy Studies: Immune to bleeding. Passive kept on class change.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
