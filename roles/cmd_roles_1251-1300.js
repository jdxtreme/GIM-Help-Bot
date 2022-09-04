module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["old_undead_retaliator", "oldundeadretaliator", "our", "1251", "301u"], "Unseen", "Old Undead Retaliator", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1251\nConverted From: Old Retri");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Resurrect - Revive a dead player. May not target neutrals or evil factions. 1 use.");

		e.addField("Attributes:", "- The player you resurrect Is immediately converted to the Unseen.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["lawbreaker", "1252", "1249u"], "Unseen", "Lawbreaker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1252\nConverted From: Criminalist");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Alter a player's role. They will appear as which role you choose for the rest of the game, including when they're dead. The role must be from The Criminal List.");

		e.addField("Attributes:", "- If you're a Lawbreaker during the start of game, The Criminal List switches all evil roles to random roles. If you're converted by the Unseen, this won't happen.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["undercover_agent", "undercoveragent", "ua", "1253", "62u"], "Unseen", "Undercover Agent", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1253\nConverted From: Spy");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spy - Get all feedback messages from your target.\n- Oversee - Learn who is visited by each non Town faction. 2 uses.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["thrillseeker", "thrill", "1254"], "Umbrae", "Thrillseeker", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1254");

		e.addField("Alignment", "Umbra Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Idolize (Day, 1 use): Select a player, ask them if they wish to become your sidekick. If they accept, their goal switches to \"The Hero and their allies must be the last players standing\". If they decline, they are modkilled on the spot. This ability fails if your target is an evil faction or convert immune.\n- Performance of the Lifetime (Night, 2 uses): Send your Sidekick out to kill a player, for all intents and purposes, the sidekicks visit is indirect.\n- 2-For-2 (Blood Moon): Send your sidekick out to kill two players, if you do not have a sidekick, a randomly convertable role will become the sidekick. Blood Moon only.");

		e.addField("Attributes:", "Redirect, Control, Conversion immune.");

		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["=random", "1255"], "Random", "Random", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1255");

		e.addField("Alignment", "Random Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability you received.");

		e.addField("Attributes:", "- Gain the ability of a random killing role at the beginning of the day, overriding the previous one.\n- You can only gain abilities that are guaranteed to allow you to kill tonight.\n- You are guaranteed to spawn if the Randoms spawn, as the Randoms lack a factional kill.\n- Sax, you are not funny.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["=random_list", "=randomlist", "1256"], "Random", "Random List", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1256");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select any amount of players. You will get a list of the roles that are in that group, but also (x/2 rounded down, where x is the amount of players chosen) roles that don't exist, but can spawn.");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["=random_choice", "=randomchoice", "1257"], "Random", "Random Choice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1257");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. Choose 3 secondary targets. Your first target will be unknowingly redirected to one of your secondary targets. (They will only learn this if they are redirect immune)");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["=random_role", "=randomrole", "1258"], "Random", "Random Role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1258");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Three times per game, select a player. They will automatically become a new, random role in their alignment. Once per game, select someone. They will become a completely random role.");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["hand_of_glory", "handofglory", "hand", "glory", "hog", "1259"], "PaleMoon", "Hand of Glory", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1259");

		e.addField("Alignment", "Unique Pale Moon Killing", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each day preceding a Full Moon, force a player to dance as your puppet.");

		e.addField("Attributes:", "- Dancing players will be forced to use all of their night abilities on themselves a single time. They can only choose the order, or allow RNG to decide for them.\n- Dancing will bypass other rules about what an ability is allowed to target. I.E. if an ability normally can't self-target, and/or requires a specific number of players, it'll be able to self-target anyways.\n- Self-targeting as a result of Dancing is considered to be a visit, meaning players will attack themselves if they use abilities that would normally target their own visitors.\n- During the PMCS, you will deal an Unstoppable Attack to your target at the end of the night.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["npc", "1260"], "Town", "NPC", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1260");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- If this role is rolled, instead an NPC is added to the game that acts semi-randomly but may obey instructions from its presumed allies with a random role, and the player who rolled it gets a new Town Support role.");

		e.addField("Goal:", "Variable");
	});

	register_role(["refrigerator", "fridge", "1261"], "Everfrost", "Refrigerator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1261");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Refrigerate a player with an Ice Mark each night, roleblocking them and all players who target them that night.\n**Freezing Point** — For the rest of the game, two or more other non-Everfrost players visiting a player covered in frost doesn't prevent them from being dealt a Basic attack by Eyisa. Then, coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immunity\n- Whenever a non-Everfrost player visits the same player as another non-Everfrost player, the next night, they will be roleblocked.\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["jack_frost", "jackfrost", "1262"], "Everfrost", "Jack Frost", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1262");

		e.addField("Alignment", "Unique Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call upon the divine cold each night, increasing an Everfrost player's defense level by two stages.\n**Winter's Retribution** — Roleblock up to one player, then coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immunity\n- All Everfrost players are Astral and redirect immune.\n- You have a layer of Basic defense that can prevent one attack.\n- If Eyisa dies, you gain the attribute \"Whenever a player is roleblocked by anything while you're alive, they'll be notified that they're covered in frost. If they're not visited by at least two other non-Everfrost players the next night, they're dealt an Astral Basic attack by you at the end of that night. This effect cannot be prevented by anything.\" and Powerful defense.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["rerollius", "god_of_rerolls", "godofrerolls", "rgor", "1263"], "Neutral", "Rerollius, God of Rerolls", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1263");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Reroll someone each night, rotating them 720 degrees, which causes them to be dealt a Powerful attack, but also changing their role to another random GIM role at the same time.");

		e.addField("Attributes:", "- Roleblock, redirect, detection, and conversion immune\n- When you roll this role, it's automatically rerolled and you get 2 extra rerolls, which bypass the rule that you can't reroll roles that you made. However, you lose one of these extra rerolls each time you reroll a role made by someone who isn't a player, even though those rerolls are normally free.\n- If you somehow actually end up with this role, please note that you are immune to all effects which would change your role.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["viri", "1264"], "Neutral", "Viri", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1264");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Ramble (Night, 2 uses): Talk about Conversion, convincing a player conversion is pretty cool, this converts them to your cause, and you can now win with their faction, and they can win with you. Learn their role.");

		e.addField("Attributes:", "- Roleblock, Redirect, Detection Immune.\n- Learn every conversion-capable role in the game, you automatically win with conversion-capable factions.");

		e.addField("Goal:", "Win with conversion factions");
	});

	register_role(["doom", "1265"], "Neutral", "DOOM", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1265");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check if a player is a demon.\n- Shoot a player, even if you haven't checked them.");

		e.addField("Attributes:", "- Finally, Town of Salem can run DOOM!\n- At the beginning of the game, one fifth (rounded up) of players, regardless of faction, will be demons. They will know this. Demons automatically gain permanent Basic defense. They receive the additional goal of eliminating you. They gain a one-time use additional ability to deal a Powerful attack to someone. If they kill someone of their own faction, they lose their Basic defense. If a demon dies, everyone will know they were a demon. If their role was hidden, only you will know this.\n- If you kill someone who is not a demon, you will be roleblocked the next night.");

		e.addField("Goal:", "Eliminate all demons.");
	});

	register_role(["scraggy", "1266"], "Pokemon", "Scraggy", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 1266");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hi Jump Kick - Attack your target, if it fails to hit by any means, you lose your defense for this night and the next one.\n- Brick Break - Attack your target, this ignores passive defense. 2 uses.");

		e.addField("Attributes:", "- Failing Hi Jump Kick with no defense deals a powerful attack to yourself.");

		e.addField("Pokemon Ability:", "**Moxie** - After a successful kill, upgrades your attack to Powerful the next night.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["sk", "sk_with_no_attack", "sk_no", "sk_none", "1267"], "Neutral", "SK with no attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1267");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- If you roll this, you may choose to reroll this into another random \"Serial Killer/SK\" role for free. You're welcome.\n- You also can choose to keep this role, if you actually want it for whatever reason.\n- You kill anyone with a defense below None. So anything like Vulnerable or anything weaker than None defense will die to your attack.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["naivete", "1268"], "Town", "Naivete", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1268\n*Why do people intentionally bring harm to others? It makes no sense at all.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player at night, learning their role if they are town.");

		e.addField("Attributes:", "- If your target is not town, they will appear as a randomly chosen town role, and they will be notified that they have shown up as X role to the Naivete. Investigating them again will not change the result.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["amnesiac", "different_people", "differentpeople", "awkrttwldp", "1269"], "Neutral", "Amnesiac Who Keeps Remembering That They Were Like Different People", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1269");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Remember who you were.");

		e.addField("Attributes:", "- Whenever you remember who you were, you gain that role's defense, attack, abilities, attributes, and win con.\n- You cannot gain a good faction win con.\n- You can remember as many times as you want.");
		
		e.addField("Goal:", "Complete one of your remembered goals.");
	});

	register_role(["sandbox", "1270"], "Neutral", "Sandbox", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1270");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose which faction to join at day (only usable D1).\n- Give yourself a new ability or attribute at day.");

		e.addField("Attributes:", "- Day 1, you must choose a faction to join. Any Neutral Killing roles count as their own faction, and you can win with them if you are on their faction. You will join any factional chats. If you pick a faction that would make you on your own, you get the lone member of a faction bonus.\n- Any ability/attribute you give yourself does not take effect until the start of the night.\n- You may multitask.");

		e.addField("Restrictions for abilities/attributes:", "- No giving yourself any sort of permanent defense.\n- No lynch immunity.\n- No overkill attacks or invincible+ defense.\n- No conversion.\n- No game breaking abilities or attributes (up to host in the end, but some examples include: kill everyone, convert everyone, gain infinite uses of your abilities, etc.) (Strong abilities/attributes are ok, it's up to host to decide how strong it can be.)");

		e.addField("Extra restrictions for good faction (Applies if Sandbox chooses to join town or a good alternative like City):", "No learning exact roles.\n- No kill above basic.\n- No giving protection above powerful.\n- No giving yourself defense (unless it is temporary through an ability.)\n- No abilities that reveal you are good to the town.");
		
		e.addField("Goal:", "Complete the goal of your cloned role.");
	});

	register_role(["jaded_cop", "jadedcop", "cop", "1271"], "Town", "Jaded Cop", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1271");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player during the night");

		e.addField("Attributes:", "- Your investigation will reveal the target's exact role to you if they are not Town, Florae, City, or another Town alternative.\n- If your target is a member of the Town or a Town Alternative, you will see their role as a random Evil (Neutral Evil/Neutral Chaos/Neutral Killing/Evil Faction). `[Host Note: This should be weighted so that Neutral roles are not way more likely to appear]`\n- A player cannot appear to be part of a faction that does not exist in the current game (ie a player could not appear as Ringmaster if there's no Pale Moon in the game)\n- Investigating a player again will give the same result, assuming no change in apparent/actual role.\n- If a player's actual role changes from Town to non-Town (ie by conversion) their result will change to reflect that.\n- If a player's actual role changes from non-Town to Town, their result will remain the same.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["werewolf", "1272"], "Were", "WereWolf", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1272");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b8/RoleIcon_Werewolf.png";

		e.addField("Alignment", "Were Head", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Rampage at a player's house each night, killing them and biting all of their visitors.");

		e.addField("Attributes:", "- Biting a player will cause them to die the next day, they will not be informed they were bitten. The WereWolf will not be informed of biting players.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["spanish_inquisition", "spanishinquisition", "si", "inquisition", "1273"], "Neutral", "Spanish Inquisition", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1273");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "\"Overprotected (Blocks overkill)\"", true);

		e.addField("Abilities:", "- Each night you may use one of your chief weapons:\n> Suprise another player, roleblocking them\n> Scare another player, BMing them\n> Use your ruthless efficiency to kill another player\n> Dedicate yourself to the pope for a night, preventing any deaths from happening");

		e.addField("Attributes:", "- Each has a cooldown of 3 nights.");
		
		e.addField("Goal:", "Eliminate the Town");
	});

	register_role(["eevee", "1274"], "Neutral", "Eevee", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1274");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run Away! (Day, 1 use): Select a player during the day, see which evolution you would become upon evolving should you visit them.\n- Adaptability! (Night, 1 use): Become a evolution of your choice by visiting a player, which could be Espeon, Flareon, Umbreon, Jolteon, Sylveon, Glaceon, or Leafeon, or Shiny Eevee.");

		e.addField("Evolutions:", "Umbreon: Wins with the Umbrae, the blood moon is permanently out while the Umbreon lives, the Umbreon will become the Umbra (Assault) once the current UA dies.\nLeafeon: Wins with the Plants and Florae, adds 2 sun per night for each night the Leafeon lives.\nFlareon: Wins with the Underworld, may perform an extra douse on top of the factional one.\nEspeon: Wins with the Coven, may cause the Necronomicon to be inherited by two members of the Coven while alive, when the Sylveon dies, the first coven member to die will not give another the necronomicon.\nGlaceon: Wins with the Everfrost, may roleblock a player each night, will die in Eyisa's place should Eyisa ever have the ability to die.\nSylveon: Wins with the Pale Moon Circus, secretly shortens the amount of time until the Circus by one day while living, no longer has an effect after the Circus has begun.\nJolteon: Wins with the Thundercry, may strike one player each night, if all living players are striked, the Thundercry win the game.");

		e.addField ("Evolutions (cont.):", "Vaporeon: Wins with the Warfleet, may upgrade one member of the Warfleet each night.\nShiny Eevee: wins with any faction not listed above, but only that faction selected, allows an additional factional kill by it's hands. If there is no factional kill, create one for this game. (Ex: the Fallen Angels would now have a factional kill that only Shiny Eevee could perform)");
		
		e.addField("Goal:", "Pokemon Goal (as Eevee) / Faction Goal (As Evolution)");
	});

	register_role(["tarnation_you_wolfi", "tarnationyouwolfi", "tarnation", "wolfi", "1275"], "Coven", "Tarnation You, Wolfi!", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1275");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn on someone's light, roleblocking them and all their visitors until they waste a night to turn off their light.\n- You also can cut someone's power, taking one charge of any limited-use abilities they have.");

		e.addField("Attributes:", "- Gain an extra hour to create roles. This applies to everyone in the game.\n- With the Necronomicon, you can turn someone into a moth, which will kill them if their light is on, or if they visit someone whose light is on.");
		
		e.addField("Goal:", "Coven goal and also spite Wolfi");
	});

	register_role(["pincurchin", "1276"], "Pokemon", "Pincurchin", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 1276\n*It likes rolling, but is unable to do so because of its spines.*");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spark! - Redirect a player. (3 uses)\n- Discharge! - Upgrade your Defense to Basic and Attack to Powerful tonight. (1 use)\n- Upgrade your Defense to Basic tonight. Redirect all players who don't visit tonight to you. If they don't have a visiting ability, the visit will do nothing. (1 use)");

		e.addField("Pokemon Ability:", "**Lightning Rod** - You will attack players who visit you.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["prankster", "1277"], "Neutral", "Prankster", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1277");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Transport two people at night, as if you were a Transporter.");

		e.addField("Attributes:", "- Everyone's factions, including those of Neutrals (yours too) is randomized at the beginning of the day. Mafia becoming Coven loses Mafia chat, but gains Coven chat, and vice versa, and also applies to other factions, as well as just gaining or just losing chats. Conversion roles will convert people to their new faction. Furthermore, anything that is designed around a role being in a specific faction (like Ace and Hex Master) will automatically have its wording changed. People can keep their original faction, but only if the randomizer says they do. They don't choose to keep it.\n- If Town becomes Neutral, their goal is to survive. If a non-killing REF role becomes Neutral, their goal is to see the Town lose. If a killing REF role becomes Neutral, their goal is to kill everyone else.\n- The end outcome will always ensure there is the same number of people per faction as there was in the start. (For example, 12 people will be Town if there are 12 Town roles.)\n- Yes, everyone will know their new faction.");

		e.addField("Attributes (cont.):", "- You also may choose to void the above attributes, if you are out of rerolls. Your goal will be as listed below. The host can also force the above attributes to be voided.");
		
		e.addField("Goal:", "Complete your new goal. If you somehow end up Neutral again, live to see the Town lose.");
	});

	register_role(["koopa_troopa", "koopatroopa", "koopa", "1278"], "Koopa", "Koopa Troopa", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1278");

		e.addField("Alignment", "Koopa Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit someone, you will attack them and a random non-attacking player visiting them.\n- Throw your Shell away, Modkilling yourself to deal a Powerful Rampaging Astral attack to a target and your visitors, Can only be used if you have your Shell.");

		e.addField("Attributes:", "- You start with a 1 time use Shell, if you were to die, you will lose it and survive, but your defense will be reduced to none.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["bird", "btcyoadsg", "1279"], "Town", "Bird That Carries You Over A Disproportionately Small Gap", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1279");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Carry someone over a disproportionately small gap.");

		e.addField("Attributes:", "- The players you carry will gain all forms of immunities and will visit astrally.\n- If someone you carry Is attacked, you die instead.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sentient_rock", "sentientrock", "sentient", "rock_with_knife", "rockwithknife", "knife", "srwak", "1280"], "Rock", "Sentient Rock With A Knife", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1280");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw your knife at someone's house, dealing a Powerful attack, but this is reduced to Basic if they don't visit because throwing a knife through a window is hard.\n- Deploy mini sentient rocks with knives to people's homes, dealing a Basic attack to the first person to visit the target, and a Basic attack to the target when someone visits them. Your mini sentient rocks stay active until triggered, but you can only have one active at a time because you would have to underpay your employees to have multiple.");

		e.addField("Attributes:", "- Can use both abilities in the same night.\n- Your sentient rocks cannot kill other Rock faction members.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["jailor", "1281"], "Town", "The Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1281");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may choose one person during the day to Jail for the night.");

		e.addField("Attributes:", "- You may anonymously talk with your prisoner.\n- You can choose to attack your prisoner.\n- The jailed target can't perform their night ability, but this is not a role block.\n- If you execute a Town member, you do not forfeit further executions. Additionally, you have infinite executions, but cannot execute on the first night, and you have a one night cooldown on executions after executing someone.\n- All other abilities used on the jailed person will fail; they will be notified that their target was jailed.\n- Killing a player as The Jailor will cause the victim to appear to have been killed by a Jailor.\n- You have priority over all other jailing type roles. If this conflicts with anything, this takes priority. (cmon it has an nk goal)\n- The Jailor is considered a Town role under all circumstances except goal/win condition.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["underboss", "wmunderboss", "wm_underboss", "1282"], "Mafia", "WM Underboss", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1282");

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Jail someone during the day.\n- Execute your prisoner at night.");

		e.addField("Attributes:", "- You and your prisoner will be able to freely speak to each other for the night.\n- You will appear as the Jailor when speaking to your target.\n- Only Town Protective and Town Investigative abilities can be used on your imprisoned target. All other abilities will fail.\n- If you choose to execute your prisoner, you will roleblock them and kill them.\n- If you choose not to execute your prisoner, you will let them go.\n- You can talk with the other Mafia at night.\n- You do NOT use the factional Mafia kill.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["neutral_squad", "neutralsquad", "squad", "1283"], "Neutral", "Neutral Squad", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1283");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Cast a vote that secretly counts as 4 (2 uses)");

		e.addField("Attributes:", "- You will Recieve 4 random Neutral Other, Evil or Benign roles and control each one as if it were a player.\n- Each role has a separate Action, Life, Attack and Defense, Kill message and Goal.\n- If 2 or more roles have a contradicting goal, one will be rerolled until its fixed.\n- Votes, Effects, Whispers and Lynches are not separate, if you are lynched all roles die.\n- Each time you are attacked or investigated, a random role will be targeted.");
		
		e.addField("Goal:", "Win with at least 2 of the 4 roles.");
	});

	register_role(["mason", "1284"], "Town", "Mason", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1284");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Induct a player into your sanctuary during the day.\n- Control the actions of an inducted player at night.");

		e.addField("Attributes:", "- Control, Conversion, Redirect Immune\n- Your visits are Astral.\n- You have a night chat with your inducted players.\n- You may not hear or send whispers, or receive messages which are any direct form of communication that comes from another role.\n- Your target will still receive their notifications when you control them. You do not receive any notifications from players you control.\n- You ignore control and redirect immunity, and can control players through any ability-stopping or jailing abilities.\n- You can force your target to target more than one person with your control, however they will do nothing to their second target if their abilities don't normally allow them to multitarget.\n- You can force your target to target dead players, however it will do nothing if their abilities don't already interact with dead players.\n- You may force your target to target themselves.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["endbringer", "1285"], "Last", "Endbringer", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1285");

		e.addField("Alignment", "Unique Last Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (First) End your target’s existence, dealing an Unstoppable attack to them.\n- (Second) Control a target, forcing them to use their night abilities against another.\n- (Third) Roleblock two players.");

		e.addField("Attributes:", "- (Second) Control Immunity\n- (Third) Roleblock Immunity\n- You can be killed by Town Protectives using your Unstoppable attack, however your target will still die unless granted Invincible or higher defense.\n- While ending someone’s existence your name will be revealed to a single other visitor at random, including another Last member. Your name will not be revealed to someone who died.\n- Your controlled target's ability will always succeed. They become immune to any effects which would have stopped them from acting.");

		e.addField("Goal:", factions.Last.goal);
	});

	register_role(["equinox", "1286"], "Last", "Equinox", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1286");

		e.addField("Alignment", "Unique Last Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (First) Vaporize a player and their house, dealing a Powerful attack to them and everyone targeting them, astral or not.\n- (Second) Draw the moon over someone's house at night, canceling all non-astral abilities used against them.\n- (Third) Redirect two players.");

		e.addField("Attributes:", "- (Third) Redirect and Control Immune\n- Anyone who survives your Vaporize attack will be roleblocked the next night.\n- You ignore Redirection immunity.");
		
		e.addField("Goal:", factions.Last.goal);
	});

	register_role(["eclipser", "1287"], "Last", "Eclipser", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1287");

		e.addField("Alignment", "Unique Last Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (First) Follow a constellation, dealing an Astral Basic attack to two players.\n- (Second) Increase the priority of all of one player's abilities to 6.\n- (Third) Randomize the targets of two players. Their targets will not be other Last members, or anyone the First is visiting.");

		e.addField("Attributes:", "- While ordered First or Third, the Eclipser can hear whispers.\n- Should a player survive your attacks for any reason, you will learn their role.");
		
		e.addField("Goal:", factions.Last.goal);
	});

	register_role(["hotel", "mint", "pillow", "mint_pillow", "mintpillow", "cyrctahidramumpoa", "1288"], "Town", "Can You Really Call This An Hotel, I Didnt Receive A Mint Under My Pillow Or Anything", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1288");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Leave a mint under someones pillow.");

		e.addField("Attributes:", "- The player you leave a mint under is notified. Any night after you left the mint, they will be able to eat it, roleblocking them but granting them Invincible Defense.\n- The night after a player eats a Mint, they may use their ability twice that night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["song", "sans", "song_sans", "songsans", "stmpwyfs", "1289"], "Mafia", "Song That Might Play When You Fight Sans", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1289");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Play when you fight Sans at a targets house.");

		e.addField("Attributes:", "- Your targets nighttime ability is transformed into Post 360 Sans's nighttime ability.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["darth_plagueis", "darthplagueis", "plagueis", "1290"], "Sith", "Darth Plagueis", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1290");

		e.addField("Alignment", "Sith Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Secretly manipulate one other player's vote each day. They can be different people each day.");

		e.addField("Attributes:", "- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["darth_traya", "darthtraya", "traya", "kreia", "1291"], "Sith", "Darth Traya", {subCat: "Commanding"}, (e) =>
	{
		e.setDescription("Post 1291");

		e.addField("Alignment", "Unique Sith Commanding", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Convert another player to a random Sith role. You only convert the roles if they are any of the following:\n> Town/City\n> Neutral Benign\n> Neutral Evils/Chaos with the witch wincon of seeing Town/City lose\n- If you are the last remaining Sith, you may turncoat to another evil faction that is present in the game as a random role of said faction. If there are no other Evil factions present, you will become a random Neutral Killing.");

		e.addField("Attributes:", "- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["darth_sion", "darthsion", "sion", "1292"], "Sith", "Darth Sion", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1292");

		e.addField("Alignment", "Unique Sith Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (\"Overprotective\")", true);

		e.addField("Abilities:", "- At night, you may choose to vent out your anger.");

		e.addField("Attributes:", "- While venting, you will attack any and all visitors.\n- You may only vent 4 times.\n- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["wicked_necromancer", "wickednecromancer", "wicked", "1293"], "Neutral", "Wicked Necromancer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1293");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night. If they were also attacked by another player, your attack is upgraded to Unstoppable.\n- Spend a day preparing for a ritual. During the next day, everyone who you've killed at night will be revived as a minion. They will have their original roles, but their goals are changed to: \"Ensure the Wicked Necromancer is the last player standing.\" They also can't vote and don't count towards the majority vote count. You can only use this ability once.");
		
		e.addField("Goal:", factions.Neutral.goalNK + " Minions from the second ability don't count and you can win with them.");
	});

	register_role(["ancient_ghost", "ancientghost", "ancient", "1294"], "Spirit", "Ancient Ghost", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1294");

		e.addField("Alignment", "Spirit Head", true);
		e.addField("Attack", "Faction Variable", true);
		e.addField("Defense", "Faction Variable", true);

		e.addField("Abilities:", "- Use the body and soul of a dead player.");

		e.addField("Attributes:", "- Targeting a dead player will give you their ability, which can be used at any time, but only once.\n- The body can then be used to attack any player.\n- You can only target each player once. However, if a player dies, targeted by you, revived, then dies again, you may target them again");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["subtractor", "subtracter", "sub", "1295"], "Neutral", "Subtractor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1295");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select two players. Subtract the first player's role number from the second player. The second player is converted into whichever role their new number becomes. Their goal and alignment will remain the same though.");

		e.addField("Attributes:", "- If you subtract someone into a negative number, you will die and lose the game. They will be unaffected by your ability in this case.");
		
		e.addField("Goal:", "Subtract three people's role numbers, but don't subtract someone into a negative number.");
	});

	register_role(["darth_tyranus", "darthtyranus", "tyranus", "count_dooku", "countdooku", "dooku", "1296"], "Sith", "Darth Tryanus", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1296");

		e.addField("Alignment", "Sith Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, you may order a droid battalion to protect another player, granting them a higher level of defense for the night (+1 for non-sith, +2 for sith.)");

		e.addField("Attributes:", "- You may only target other Sith once per Sith player, including yourself.");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["adder", "add", "1297"], "Neutral", "Adder", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1297");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select two players. Add the first player's role number to the second player. The second player is converted into whichever role their new number becomes. Their goal and alignment will remain the same though.");

		e.addField("Attributes:", "- If you add someone into a number which is higher than the highest post number, you will die and lose the game. They will be unaffected by your ability in this case.");
		
		e.addField("Goal:", "Add three people's role numbers, but don't add someone into a number higher than the highest post number.");
	});

	register_role(["revenant", "1298"], "Spirit", "Revenant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1298");

		e.addField("Alignment", "Spirit Killing", true);
		e.addField("Attack", "Faction Variable", true);
		e.addField("Defense", "Faction Variable", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- On a full moon, you will follow your target, and attack your target's target as well, if they are not a Spirit. You also can target your fellow Spirits on full moons, and you will not kill them.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["secretary", "1299"], "Neutral", "The Secretary", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1299");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch (day, 5 uses): Select a player during the day, you will become that players secretary for the night.\n- Examine (night, infinite uses): Allow the night action of your target’s targetters to go through immediately, or deny them. You will be told the actions.");

		e.addField("Attributes:", "- Nothing you do will count as a visit.\n- You must use your ability every day, or you will die.");

		e.addField("Mechanics:", "Targetters of your target will have their action resolve immediately, with you being the deciding factor on if it goes through or not. This cannot be evaded, and targetters may not switch targets if they hit a secretary’s target.");
		
		e.addField("Goal:", "Live to serve until day 6.");
	});

	register_role(["oracle", "1300"], "Town", "Oracle", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1300");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, predict the fate of a player.");

		e.addField("Attributes:", "- You will know who each of your targets visits every night. If you have multiple targets, who visited who will not be distinguished.\n- If you're lynched, all the players that you selected will have their roles revealed publicly the next day.\n- Evil roles will be notified that they were targeted by an Oracle.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
