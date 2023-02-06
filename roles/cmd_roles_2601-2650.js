//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["remote_jailor", "remotejailor", "jailor", "rj", "2601"], "Town", "Remote Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2601\n*Uh, Grandma? The red circle with the microphone means you’re muted. I can’t hear what you’re saying.*");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "‎- During the day, choose another player to jail.\n- Execute your target at night.");

		e.addField("Attributes:", "- You cannot talk with the target, although for them it’ll appear to be a normal Jailor that simply isn’t talking.\n- Your target will be unable to communicate in any private chats they may have for the night.\n- While jailed, targets are roleblocked through immunities, gain Powerful defense, and all other abilities used against them will fail. Indirect effects may still apply.\n- You may only execute thrice. If you execute a member of the Town, you lose all your remaining executions. You may not execute on Night 1.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["Иorth", "north", "2602"], "Agent", "Иorth", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2602\n*Иow that's what I'm talking about! Disable their security, I'll head in for a wipeout. Omega, you ready?*");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Quickfire (3-shot): You may use the factional kill twice tonight. It will be unavailable to the Agents tomorrow night.\n- Final Desperado (1-shot): Used during the day, cannot be used until Day 3. Each member of the Agents can separately perform the factional kill tonight and will have Evasive Maneuvers enabled. At the start of the next day, after deaths have resolved, you'll deal an Unstoppable attack to yourself.‎");

		e.addField("Attributes:", "- Evasive Maneuvers (Passive): When performing the factional kill, your visit will use Astral and you'll have roleblock and redirect immunity.‎");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["transporter", "trans", "2603"], "Town", "Transporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2603");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Transport 1 player at night. You may self-target.");

		e.addField("Attributes:", "‎- Everyone who would visit Player A will instead visit every living player in the game except Player A.\n- Everyone who would not visit Player A, while still visiting someone else, will instead visit Player A.\n-_-");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["waluigi", "2604"], "Koopa", "Waluigi", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2604");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You have 2 random investigative abilities from random Town Investigative (TI) roles, They get rerolled at the start of each day.\n- Once per game, choose an ability obtained by your attribute, that slot will never be rerolled again.\n- Once per game, reroll one or both abilities. They will be replaced with new abilities.‎");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["tox_demigod_of_nature", "toxdemigodofnature", "tox", "demigod", "tdon", "tdn", "2605"], "Fox", "Tox, Demigod of Nature", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2605");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tox has the ability to make someone vanish into the shadows. Select a player, ally or enemy‎");

		e.addField("Attributes:", "- Targeting a Fox will make them Astral and immune to visits tonight. Targeting the same Fox again will only give them Astral.\n- Targeting a non-Fox will make them vanish. Their ability will fail tonight and they cannot vote or speak the next day.");

		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["dancing_zombie", "dancingzombie", "dancing", "dz", "2606"], "Zombie", "Dancing Zombie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2606");

		e.addField("Alignment", "Unique Zombie Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone.\n- Once per game, summon 4 Backup Dancers.‎");

		e.addField("Attributes:", "\n- Backup Dancers are NPCs named Backup Dancers. They have the Zombie goal, and are controlled by Dancing Zombie. The Backup Dancers can vote.\n- Backup Dancers must always do the factional kill. The first time the Backup Dancers successfully kill someone, they all die to a lawnmower.\n- You have roleblock immunity.\n- Backup Dancers have roleblock immunity.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["ra_zombie", "razombie", "ra", "rz", "2607"], "Zombie", "Ra Zombie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2607");

		e.addField("Alignment", "Unique Zombie Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Store your target's action.");

		e.addField("Attributes:", "- Whenever an action is stored, it is not processed, and it is like it never happened.\n- Whenever you die, all stored actions happen immediately, even if the target of the action or the user of the action is dead.\n- You have roleblock, redirection and control immunity.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["december", "bestmonth", "2608"], "Town", "December", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2608");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cause a snow day during the night, astrally roleblocking a player at random and covering them in frost. The following day will be extended for 24 hours with the opportunity for another lynch after a lynch is made.\n- Shine harshly during the day, choosing two players to become secretly Sunburnt and dealing a basic attack to another.‎");

		e.addField("Attributes:", "- If nightfall is voted during a snow day, the extra time will be skipped.\n- Players covered in frost will be dealt an astral basic attack the following night if they're not visited by at least two other players.\n- Sunburnt players cannot have defence for the rest of the game, whether that be external protection or permanent defence.\n- The player @Sunscreen#4913 can never be Sunburnt, no matter what.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sunscreen_remover", "sunscreenremover", "sunscreen", "sr", "2609"], "Town", "Sunscreen Remover", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2609");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remove sunscreen from a player each night. This does nothing unless they are @Sunscreen#4913, in which case they are now capable of being Sunburnt by December (2608).");


		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["high_lord_vart", "highlordvart", "lord", "vart", "lordvart", "hlv", "2610"], "Neutral", "High Lord Vart", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2610");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- During the day, choose any role to disguise yourself as. The disguise will activate the following night and remain until you use this ability again.\n- Convert a player into a Chill Pickle. Chill Pickles secretly lose all abilities and attributes of their original role, and all actions that they attempt will fail without feedback. Chill Pickles can still vote in day chat. Does not count as a visit from you.\n- Shoot a player with an Overkill attack. If they survive, they will be roleblocked, or if they are roleblock-immune, their abilities will fail that night. (3 uses)‎");

		e.addField("Attributes:", "‎- Roleblock, Control, and Redirect immune\n- Any player who attempts to roleblock you will deal themselves an Overkill attack instead.\n- If you are jailed by a jailor-type role, they will deal themselves an Overkill attack at the end of the night.\n- If you die before reaching your goal, any player turned into a Chill Pickle will revert to their original role, with the same number of ability uses they had prior to being converted.");

		e.addField("Goal:", "‎Kill or convert every living player into a Chill Pickle.");
	});

	register_role(["police_officer", "policeofficer", "police", "officer", "po", "2611"], "Town", "Police Officer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2611");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- During the day or night, select a player to detain. This resolves immediately during the day.\n- At night, use a bulletproof vest, can be used with your first ability. 3 uses.");

		e.addField("Attributes:", "- Detaining a player will send them to jail.\n- Players in jail are functionally dead, but do not have access to the dead chat.\n- All players learn if a player is detained.\n- Once you die, detained players can be broken out by another player visiting them.\n- You cannot detain the current and next phase after detaining 1 Townie. You are fired (dead) after detaining 2 Townies.\n- You may detain as many times per phase as you wish, as long as you do not detain a Townie.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sunscreen_reapplier", "sunscreenreapplier", "sunscreen", "reapplier", "sr", "2612"], "Town", "Sunscreen Reapplier", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2612");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Readd sunscreen to a player each night. This does nothing unless they are @Sunscreen#4913 and were previously targeted by Sunscreen Remover (2609), in which case they will once again be immune to being Sunburnt by December (2608).‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["santa_jester", "santajester", "jester", "sj", "2613"], "Neutral", "Santa Jester", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2613");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you are lynched, the next time a good faction member would be lynched your benevolent spirit will save them and cancel the lynch.\n- You randomly appear as a Jester (90) or a Royal Jester (2216)  to any investigative effects.‎");

		e.addField("Goal:", "Get lynched.‎");
	});

	register_role(["sneezer", "2614"], "Town", "Sneezer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2614\n*Is anybody here a doctor?*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sneeze during the day (5 use).‎");

		e.addField("Attributes:", "‎- When you sneeze, the host will post a message announcing that someone has sneezed. The first person to say bless you, other than yourself, will receive an added layer of defense on top of what they would normally have tonight. This applies to protective abilities that grant defense as well.\n- You may sneeze multiple times during the same day. You may not sneeze again until someone has said bless you to your previous sneeze.");
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mmm_tasty", "mmmtasty", "2615"], "Neutral", "mmm tasty", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2615");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Eat sunscreen each night\n- You are dealt a Powerful attack when you Eat sunscreen\n- Your defense only works when eating sunscreen\n- if @Sunscreen#4913 is playing, they are given at least Basic defense because their cool 😎 ‎");

		e.addField("Goal:", "Eat as much sunscreen as possible‎");
	});

	register_role(["troll", "🧌","2616"], "Neutral", "Troll", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 2616\n*Trolling is just what I do. Cope, seethe, mald.*");

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You appear as a completely random, non-Good-faction role to any investigations.\n- If you are lynched, the game instantly ends and everyone who hasn't won yet loses.‎");

		e.addField("Goal:", "Get lynched and troll everyone.");
	});

	register_role(["thanksgiving_comes_first", "thanksgivingcomesfirst", "thanksgiving", "tcf", "2617"], "Neutral", "Thanksgiving Comes First!", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2617\n*Its literally still Autumn*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Kill people who mention Christmas before December‎.");

		e.addField("Attributes:", "‎- If the month is November, anyone who mentions Christmas (determined by host as what counts as “mentioning”) is instantly killed with an unstoppable attack.\n- Anyone who mentions Thanksgiving will be given invincible defense for the night");

		e.addField("Goal:", "Convince at least 2 players into mentioning Christmas before the end of the game.‎"); 
	});

	register_role(["twelve_nights_of_christmas", "twelvenightsofchristmas", "twelvenights", "christmas", "tnoc", "tnc", "2618"], "Neutral", "Twelve Nights of Christmas", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2618");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Partridge in a Pear Tree**: All players gain Powerful defense for the night. (One Use)\n- **Two Turtle Doves**: Choose two players. They become lynchproof for the next day, gain Powerful defense for the night, learn each other's roles, and can win with each other's faction. (One Use)\n- **Three French Hens**: Choose three players. One gains the ability to speak with the dead, one changes their win condition to \"Survive until the end of the game.\", and the third gains an ability from a random role. (One Use)\n- **Four Calling Birds**: Choose two players. They become Astral and gain roleblock, redirect and detection immunity permanently. (One Use)\n- **Five Golden Rings**: Choose a player. Due to their newfound wealth, they become lynchproof and gain three votes permanently. (One Use)‎");

		e.addField("Abilities (cont.):", "- **Six Geese a-Laying**: Choose a player. When they die, a random player from their faction gains their abilities and attributes and can multitask. If they were the last member of their faction, this goes to anyone. (One Use)\n- **Seven Swans a-Swimming**: Choose two players. You will dazzle anyone that visits them, roleblocking them. (One Use)\n- **Eight Maids a-Milking**: Choose two players. The first target becomes the \"Mother\" of the other, changing their win condition to \"See your child live until the end of the game.\" If the child dies, the Mother will die as well. When the Mother dies but the child is alive, the Mother gains a two use protection identical to (89) Guardian Angel. (One Use)\n- Nine Ladies Dancing: Choose five players. They all get roleblocked. (One Use)\n- Ten Lords a-Leaping: Choose two players. For the next day and night, neither of them are valid targets for other abilities. (One Use)");

		e.addField("Abilities (moar.):", "- Eleven Pipers Piping: If you use this ability when an evil faction, plus you, counts for at least 50% of living players, the game immediately ends in that faction's victory. (One Use)\n- Twelve Drummers Drumming: Choose a player. All players within two houses of that target are redirected to the same player your target visited. If they didn't visit anyone, no effect. (One Use)‎");

		e.addField("Goal:", "Survive until the end of the game with at least four other people alive.‎");
	});

	register_role(["remover", "2619"], "Neutral", "Remover", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2619\n*Baby I'm not even here");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remove a player’s existence from the game (1 use)‎");

		e.addField("Attributes:", "‎- Removed players will be erased from the game, along with their role, death announcement, will, and just anything generally relating to their existence.\n- Any past mentions of their name will also be deleted.\n- If anyone attempts to say the removed player’s name, they will be blackmailed (effective immediately).\n- You learn the faction of the removed player.");

		e.addField("Goal:", "Live to see your removed player’s faction lose‎");
	});

	register_role(["sleazy_businessman", "sleazybusinessman", "sleazy", "businessman", "sb", "2620"], "Neutral", "Sleazy Businessman", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2620\n*50% off! Get it now before it's too late!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None (Basic)", true);

		e.addField("Abilities:", "‎- Sell a faulty product to a player of your choice during the day or night. They will be notified. You may only sell one item per day/night cycle.");

		e.addField("Attributes:", "- The Sleazy Businessman may sell any of the following items. When given, they will appear as the first description, but will only use the true effect listed below each item. The names of the items aren't shown, as that's just for cleaner organisation.\n> Gun: Allоws a player to deal an Astral Basic attack instead of their nоrmal abilitiеs.\n> True Effect: When used, the player will deal an Astral Basic attack to themselves. If they die, the cause of death will appear to be their own role.\n\n> Gun 2: The target will gain a new оne-use gun that can be used in the day to deal a Basic attack to a targеt immеdiately\n> True Effect: When used, the player will a Basic attack to themselves. If they die, the cause of death will appear to be their own role.\n\n> Vest: Allоws a player to gain Basic defense the night they use this instead of pеrfоrming their normal ability.\n> True Effect: When used, the player's defence will be set to Vulnerable that night without their knowledge.");

		e.addField("Attributes (cont.):", "> Knife: Allows a player tо deal a Powerful attack instead of their normal abilities. The slashed target will die twо nights later unlеss prоtеcted by any death-prеventing effect. They are nоtified.\n> True Effect: When used, the player's target is dealt a Powerful attack, but is also hеaled on the same night. They will not be notified they were attacked by the knife.\n\n> Gauntlet: The target player can activate this tо astralizе their visits the night they dо so.\nTrue Effect: When used, the player will visit themselves tonight.\n\n> Helmet: The target player can activate this to becomе Cоntrol and Redirection immune the night they dо so.\nTrue Effect: When used, the player is controlled into a random player on the same faction which may be themselves.\n\n> Glasses: The target player can activate this to becomе Rolеblоck Immune the night they do so.\nTrue Effect: When used, the player will be roleblocked that night without their knowledge.‎");

		e.addField("Attributes (moar.):", "> Magnifying Glass: The target player receives a one use invеstigatiоn оn a target of their choice at night.\n> True Effect: When used, the target the player investigates will appear as a random alive role in the game with the opposite Sheriff result. If no roles fit the criteria, the Magnifying Glass does nothing.\n\n> Enchanted Pickaxe: Thе target player may use this along with thеir nоrmal ability to get a certain ore from post twо thоusand seventy two.\n> True Effect: When used, the player will always receive Coal, which allows them to mine twice the next night. Their normal ability will secretly have no effect whenever they decide to mine.\n\n> Armor Plating: The targеt player gains a 2-usе basic autоvеst.\n> True Effect: The target player will have Vulnerable defence without their knowledge. Lasts until visited two times total.‎");

		e.addField("Attributes (why.):", "> Double A Batteries: Thе target player gains 1 use of their limitеd abilities, if they havе nоne, they can act twicе the next night.\n> True Effect: The target player will appear to gain a use of their limited abilities, but will secretly lose a use. Whenever they attempt to use an ability with no uses, their action will be accepted but will have no effect. If they have no limited use abilities, they will appear to be able to act twice the next night, but will be roleblocked without their knowledge.‎\n\n> C-gear: The target player, оnce per game, may оpen a permanent Day chat with anyone.\n> True Effect: When used, the player they opened a Day chat with will be dealt a Powerful attack at the end of the next night. The cause of death will appear to be from a random killing role or faction in the game.");

		e.addField("Attributes (stop.):", "> Scouter: The target will gеt Psychic (55) rеsults this night.\n> True Effect: On odd numbered nights, the target will learn the names of three random players or three players that are able to win with the Town. On even numbered nights, the target will learn the names of two random players or two players that aren't able to win with the Town.\n\n> Laser Scope: Thе target's next Single-target attack is upgraded to Pоwerful and nothing will be able to stоp it. (Protective abilities, Roleblocks, Redirects, Delays).\n> True Effect: The target's next Single-target attack will also heal their target.\n\n> The Secret to Life: Thе recipient receives an envеlоpe, and they do not know what it contains. They may choose to either open it or trash it. If they open it, they will gain a Powerful autovest.\n> True Effect: If opened, the recipient will have their defence set to Vulnerable without their knowledge. Lasts until they're visited two times total.‎");

		e.addField("Attributes (please.):", "‎> The Secret to Life: Thе recipient receives an envеlоpe, and they do not know what it contains. They may choose to either open it or trash it. If they open it, they will gain a Powerful autovest.\n> True Effect: If opened, the recipient will have their defence set to Vulnerable without their knowledge. Lasts until they're visited two times total.\n\n> The Bible: The recipient receives an envelоpe, and they do not know what it contains. They may choose to either open it or trash it. If they open it, their win condition will be changеd to one of the envelоper's chоice\n> True Effect: If opened, the recipient's goal will appear to be changed to a random win condition of another role in the game, but will functionally be the same as their original goal.");

		e.addField("Attributes (nomore.):", "> The Art of War: The rеcipient receives an envelоpe, and they do not know what it contains. They may choose to either оpen it or trash it. If they open it, their attack value is permanently increased by оne. If they do nоt have an attack, they gain a one-use Basic attack.\n> True Effect: If opened, the recipient's attack value is permanently decreased by one. They will still gain a one-use attack which appears to be Basic, but will actually use the target's current attack tier.\n\n> Distracting Device: The targеt player gains a one-shot rоleblock to any player at night, they may use it instead of their normal ability.\n> True Effect: When used, the target will roleblocked themselves without their knowledge.");

		e.addField("Attributes (OSLO.):", "‎> Melted Product: *Take the first half (rounded down) of a random ability from a random player, the last half (rounded up) of a random ability from another random player, and combine them. The Sleazy Businessman's target will receive the combination as a third ability.*\n> True Effect: When used, the target will use the two raw abilities that made up their ability on themselves.\n- The host should write out the intended descriptions of each ability instead of copy pasting them. They do not have to be exact word-for-word. \n- The Sleazy Businessman may choose to fix an item for a player when giving it to them, making it use the shown effect instead of its true one. They may only do this thrice.\n- The Sleazy Businessman may not self-target.");

		e.addField("Goal:", "‎Live to see the Good faction lose the game having fooled at least two people into using your faulty items");
	});

	register_role(["action_god_of_espionage", "actiongodofespionage", "action", "agoe", "age", "2621"], "Agent", "Action, God of Espionage", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 2621\n*The google sheet is not updated*");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- False Orders (2-shot): Learn a player's faction and subalignment, and change their target.\n- Fake Documents (Infinite): Select a player and a role, if your target uses an investigative ability, they will use your selected role as the outcome.\n- Weapon Sabotage (Infinite): Select a player, if they attack another player tonight, they will instead attack themself while dealing a Basic attack to their target.\n- Poisonous Dart (Infinite): Select a player, if their selected ability provides protection tonight, they will instead Poison their target and no protection will be granted.\n- Limiting Limitations (Infinite): Select a player, if their selected ability obstructs a player's ability to use their ability as intended in any way, anyone affected will instead have their ability act as normal and on your target.‎");

		e.addField("Attributes:", "- Deaths from Weapon Sabotage and Tranquilizer Dart appear as if from your target, not from you‎");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["internet_pirate", "internetpirate", "pirate", "ip", "2622"], "Crew", "Internet Pirate", {subCat: "Chaotic"}, (e) =>
	{
		e.setDescription("Post 2622\n*It's the 21st century, kid. Times have changed.*");

		e.addField("Alignment", "Crew Chaotic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player. Their role card will be replaced with a pirated version. It remains identical, however between five and ten words at random are removed. The removed words can be from anywhere in the role card.");

		e.addField("Attributes:", "- If you are jailed and the jailor (or equivalent) can execute, the jailor will always execute unless they were pirated.\n- You may pirate the same person multiple times to remove more words.‎");

		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["guillotine", "2623"], "Town", "Guillotine", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2623");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Instantly lynch whoever has the most votes on them. This does not count as the daily lynch. (One Use)‎");

		e.addField("Attributes:", "- As long as you are alive, the town will have thirty minutes of extra daylight after the daily lynch.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["just_thinking_on_the_spot", "justthinkingonthespot","thinkingonthespot", "jtots", "jtos", "2624"], "Neutral", "Just Thinking On The Spot", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2624\n*I did no planning for this*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Make up something on the spot at the beginning of the night.‎");

		e.addField("Attributes:", "- If you take longer than 20 seconds, your ability fails.\n- You may think of anything, including your attack value, your defense value, the voting time, if killing abilities fail, and just generally anything else that would have an effect on the game.\n- You may affect more than one person as long as you thought of it in 20 seconds or less.\n- You may not allowed to mass kill. You can choose if your attack rampages, but you cannot outright kill everyone‎.");

		e.addField("Goal:", "Think of one yourself. Don’t be lazy.‎");
	});

	register_role(["ikea", "2625"], "Neutral", "Ikea", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2625\n*Where the FUCK is the exit?*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player during the day to force them to shop at IKEA‎");

		e.addField("Attributes:", "- At night, a menu with 9 choices pops up.\n- You may select one of these choices, and this choice will be the exit to the IKEA.\n- If your target selects correct one, they may leave the building and continue on with their night action.\n- If they fail to escape, they will be roleblocked for the night.\n- If someone fails to escape, you learn their role.\n- All abilities used on your target will fail, except for tracker (54) who will also become trapped in the Ikea the next night with your target.\n- You have powerful defense because you’re a building. (♫ Don't be 1694! ♫)");

		e.addField("Goal:", "‎Learn the role of 3 players from the same faction.");
	});

	register_role(["sk_with_vulnerable_defense", "skwithvulnerabledefense", "sk", "vulnerablesk", "swvd", "svd", "2626"], "Neutral", "SK with Vulnerable Defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2626");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Attack your target‎");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- You have Powerful attack to compensate for your vulnerable defense.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk_with_piercing_attack", "skwithpiercingattack", "sk", "piercingsk", "swpa", "spa", "2627"], "Neutral", "SK with Piercing Attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2627");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Attack a player at night.");

		e.addField("Attributes:", "‎- You will deal a Basic attack to non-SKs and attack a level above the current Defense level of any other SKs in the game, which also bypasses all effects that would prevent it.\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk_with_aura_defense", "skwithauradefense", "sk", "aurask", "swad", "sad", "2628"], "Neutral", "SK with Aura Defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2628");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Attack a player at night.‎");

		e.addField("Attributes:", "- You have no defense if there are four or more SKs alive, Basic if there's three, Powerful if there's two, and Invincible if you are the only SK alive.\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["no_more_sks_pls", "nomoreskspls", "nmsp", "2629"], "Neutral", "NO MORE SKS PLS", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2629\n*There are currently at least 47 SKs. **WE DO NOT NEED MORE.** Ok?*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player, if they are an SK, attack them.‎");

		e.addField("Attributes:", "- May only spawn if there is an SK\n- SKs are concidered by the =sk command or simply by having the words \"serial killer\" in the name‎");

		e.addField("Goal:", "End all SKs.");
	});

	register_role(["serial_no_more_sks_pls_killer", "serialnomoresksplskiller", "moreskspls", "sk", "snmspk", "smspk", "2630"], "Neutral", "Serial NO MORE SKS PLS Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2630");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Overkill)", true);
		e.addField("Defense", "Basic (Overprotective)", true);

		e.addField("Abilities:", "‎- Attack a player at night.");

		e.addField("Attributes:", "‎- If you attack a player whose role is NO MORE SKS PLS (2629), your attack will be upgraded to Overkill.\n- If you are attacked by a player whose role is NO MORE SKS PLS (2629), your defense will be upgraded to Overprotective.\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk_but_it_really_is_a_doctor", "skbutitreallyisadoctor", "sk", "skdoctor", "sbiriad", "2631"], "Neutral", "SK but it really Is a doctor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2631");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Visit a player at night to heal them");

		e.addField("Attributes:", "‎- If your target is attacked you will heal them.\n- If your target is not attacked, you will still heal them.\n- If you are roleblocked, you will attack your roleblocker along with healing your original target.\n- If you kill a roleblocker, the roleblock will automatically fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- A role that can roleblock must be present for this to roll.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["leading_light", "leadinglight", "ll", "2632"], "Town", "Leading Light", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2632\n*Together, we thrive.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gather the strength of the town to aid you. Select three players besides yourself and a fourth target. If all three of your original targets are members of the Town, deal an Unstoppable attack to your fourth target. ‎");

		e.addField("Attributes:", "‎- If you kill a Town member with your ability, you will commit suicide at the end of the next night.\n- When you die, all Town members gain Roleblock immunity. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["seeking_father", "seekingfather", "seekingforthemilk", "sf", "2633"], "Spirit", "Seeking Father", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2633");

		e.addField("Alignment", "Spirit Head", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "‎- Select a living player to reap the soul of, then deal an attack to them.");

		e.addField("Attributes:", "- When you reap the Soul of a player, you learn their role. You may then select one attribute from that role and add it to your own.\n- Select 2 days at the beginning of the game. All Spirits cannot die at all during those days even through being voted, and will live without explanation.‎");

		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["yeti_zombie", "yetizombie", "yeti", "yz", "2634"], "Zombie", "Yeti Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2634");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Attack a player, then flee. Your attack is Astral and you ignore protective roles.");

		e.addField("Attributes:", "- \"Yes this is a christmas role fuck you.\" - famous Lunari quote‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["gift_shop_manager", "giftshopmanager", "giftshop", "manager", "gsm", "2635"], "NTF", "Gift Shop Manager", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2635");

		e.addField("Alignment", "Unique NTF Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At night, choose to accept, reject, or hold gift requests.\n- After participating in a secured node, during the day, select 2 gift requests in inventory. If they are from NTF, automatically accept them, otherwise, automatically reject them.");

		e.addField("Attributes:", "‎- Your existence is public.\n- During the day, people may anonymously submit gift requests, which are upgrades to their role that they would like to receive. They must provide an accurate description, but it may be vague and the host will make sure what it does is understood. \n- Accepting a request gives them the upgrade. Rejecting it removes the gift from your list. Holding it allows you to review it tomorrow.");

		e.addField("Goal:", factions.NTF.goal);
	});

	register_role(["cold_ritualist", "coldritualist", "ritualist", "cr", "2636"], "Town", "Cold Ritualist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2636");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Cover a Town member's house in snow to melt another player.");

		e.addField("Attributes:", "‎- Covering a Town member's house in snow deals an Overkill attack to them and allows you to deal an Unstoppable attack to your second target.\n- If you attempt to cover a non-Town member's house in snow, you will cover your own house in snow instead. You may also choose to cover your house in snow normally.\n- If you melt a Town member, you can only cover your own house in snow for the rest of the game.\n- You cannot keep a last will due to your practices being forbidden.\n- If Jd is in the game, you may melt them without penalty, and you may cover their house in snow regardless of their role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["christualist", "2637"], "Town", "Christualist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2637\n*Of course— Of course I would never give you the coffee maker my old roommate gave me.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Regift one player's presents to another at night.");

		e.addField("Attributes:", "‎- Regifting a player's presents roleblocks them and grants a single use of each ability they would have used to your second target.\n- If you attempt to regift a non-Town player's presents, you will fail, but you won't be notified of this.\n- You cannot keep a last will due to needing to preserve your Christmas secrets.\n- You are roleblock and redirect immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["archmage_of_snow", "archmageofsnow", "archmage", "aos", "as", "2638"], "Coven", "Archmage of Snow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2638");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Channel your energy during the day or night. This is used automatically unless you're summoning a blizzard, you cannot vote or be visited by the end of the day/night or this will fail.\n- Once you've channeled your powers, control the energy of the storm, and summon a blizzard at a player's house.");

		e.addField("Attributes:", "- Astral.\n- The blizzard makes it impossible to see or traverse throughout the house. All abilities used on your target will instead affect a random other visitor, or fail if none exist.\n- Hypothermia from the aftermath will cause your target and anyone who visited them to only be able to send a total of 120 characters across 4 messages the next day. They also will die the next night unless visited by 2 non-Coven players.\n- Your abilities cannot negatively affect Coven.\n- With the Necronomicon, you learn to further control your abilities. You no longer need to avoid voting and being visited to channel your energy. Additionally, you also summon a hailstorm with your blizzard, dealing a Rampage Powerful attack.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["frigit", "2639"], "Beast", "Frigit", {subCat: "Water"}, (e) =>
	{
		e.setDescription("Post 2639");

		e.addField("Alignment", "Beast Water", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- Icy Wind: Roleblock a player. **Locked**: In addition, they will be covered in frost, causing them to take a Basic Attack on the next night if they are not visited at least twice.\n- Cold Shoulder (2-shot): Target another Beast and choose a list of up to 5 roles. If any of those roles visited the targeted Beast, you will roleblock them. **Locked**: In addition, you may select 1 role to deal a Basic Attack to.\n- Icicle Spear (**Locked**, 2-shot): Deal a Basic Attack to a player. If they survive, they will be Frozen- roleblocked every night until they receive a total of four visits.");

		e.addField("Attributes:", "- Players killed by you or your frost will appear as **Frozen by Frigit**.\n- Players covered in frost will know they were covered in frost.\n- **Locked**: You have a one-use Basic autovest.\n- **Unlock Condition**: If it is December or it is snowing in your current location, **Unlock**.‎");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["microwave", "2640"], "Neutral", "Microwave", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2640\n***vvvrrmmmmmmmm... BEEP BEEP BEEP BEEP***");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- turn on someone's microwave at their house\n- all visitors will be driven away from the house since they can't bare to stand the sound\n- the player is dealt a Unstoppable attack from radiation from the microwave");

		e.addField("Goal:", "idk like, have a good time? Ig‎");
	});

	register_role(["investinumber", "2641"], "Town", "Investinumber", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2641");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎Investigate a player. You learn their role's post number.");

		e.addField("Goal:", "Town goal but replace the to with la");
	});

	register_role(["investiname", "2642"], "Town", "Investiname", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2642");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player. You learn their role's name.‎");

		e.addField("Goal:", "Town goal but it sounds like gown");
	});

	register_role(["harp", "2643"], "Band", "Harp", {subCat: "String"}, (e) =>
	{
		e.setDescription("Post 2643");

		e.addField("Alignment", "Band String", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Soothe a player, healing them, but roleblocking them.\n- (Rehearsal) Cause a distraction at a player's house, forcing their neighbors and their neighbors' visitors to visit them, then rehearse.\n- (Concert) Untune your strings, causing hearing issues, which prevents your target from seeing the day chat or talking in it. They also can't vote.");

		e.addField("Attributes:", "- Yes, you still roleblock Band members.‎");

		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["smiler", ")", "2644"], "Backrooms", "Smiler", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2644\n*They look friendly, we can trust them*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful (Basic)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Come out at night and attack any player with their light on.‎");

		e.addField("Attributes:", "- If this role is present, players can choose to turn their light off for the night, which will roleblock them but will keep them safe\n- You can attack anyone with their light on.\n- You also attack people who visit you with a basic attack, because you don’t like visitors, and are a bright ass smiley face.‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["partygoer", "2645"], "Backrooms", "Partygoer", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2645\n*We like to party!*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Choose to attack or convert another player at night.");

		e.addField("Attributes:", "- Players will be dealt a basic attack at night if you choose.\n- Converted players will become a partygoer. There may only be 2 partygoers present at a time.\n- Players killed by a partygoer appear to be cake, because it’s a party!‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["duller", "2646"], "Backrooms", "Duller", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2646\n*Some water! Looks murky, but it’s better than nothing!*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "-Every 2 nights you may liquify in front of a players house.‎");

		e.addField("Attributes:", "‎- Any player who visits your target will be consumed by you.\n- You are invincible on the night you liquify, because you’re a liquid, and you can’t really hurt a liquid.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["bacteria", "2646"], "Backrooms", "Bacteria", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2646\n*Hush, and don't move*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Wander to a players house to see if they’re moving‎.");

		e.addField("Attributes:", "-Each night you can check a player’s house to see if they visit someone else that night.\n- If your target stays home or is roleblocked, you will not attack them.\n- If your target visits someone else, you will brutally murder them.\n- You will rampage at your own home if you stay home.- If there are no visiting roles left alive, you will begin attacking your target despite them staying home.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["skin_stealers", "skinstealers", "skinstealer", "ss", "2647"], "Backrooms", "Skin Stealers", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2647\n*Blood runs red, they’re not dead. Blood runs clear, get out of here.*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "‎- Attack a person at night, allowing you to mimic their ability the next night.");

		e.addField("Attributes:", "‎- Your attacker will learn that your blood is clear if you survive the attack.\n- Twice per game you can add red food dye to your blood, giving attackers the normal defense too high feedback.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["camel_zombies", "camelzombies", "camelzombie", "cz", "2648"], "Zombie", "Camel Zombies", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2648");

		e.addField("Alignment", "Unique Zombie Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, choose a Zombie. If they die the phase you picked them, you gain an extra player and you gain their abilities/attributes.‎");

		e.addField("Attributes:", "‎- You are 3 players. This means you have 3 lives and you can vote 3 times (the extra votes can be separate from your vote, and are attributed to \"Camel Zombie\")\n- If you do the factional kill, all Camel Zombies will attack the player.\n- You may only lose 1 zombie per attack (so rampage doesn't kill all Camel Zombies).");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["candle_mage", "candlemage", "candle", "cm", "2649"], "Town", "Candle Mage", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2649\n*If i can't help you, no one can!*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Ward three different peoples' houses with candles each night, giving them Powerful defence for the night.");

		e.addField("Attributes:", "- You have protection immunity. (*You cannot be affected by protective effects.*)\n- The day after you protect someone successfully, their defense will be set to None and they will gain protection immunity.\n- You cannot whisper.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["auxiliary", "2650"], "Town", "Auxiliary", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2650\n*You are strong! Nothing will stop you!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist someone at night. You grant them Roleblock, Redirect, Control, Conversion, Detection, Modification, and Suppression Immunity.‎");

		e.addField("Attributes:", "- Roleblock immune.\n- You can self target. Don't know why you would do that but you can.\n- **Modification Immunity**: Your role card cannot be modified negatively.\n- **Suppression Immunity**: If you die, your role, will, and cause of death will always flip correctly.‎");

		e.addField("Goal:", factions.Town.goal);
	});
};
