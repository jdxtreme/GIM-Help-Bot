module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["old_undead_retaliator", "oldundeadretaliator", "our", "1251", "301u"], "Unseen", "Old Undead Retaliator", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1251\nConverted From: Old Retri");

		e.addField("Alignment", "Random Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Resurrect - Revive a dead player. May not target neutrals or evil factions. 1 use.");

		e.addField("Attributes:", "- The player you resurrect Is immediately converted to the Unseen.");

		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["criminal", "1252", "1249u"], "Unseen", "Criminal", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1252\nConverted From: Criminalist");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Alter a player's role, they will appear as which role you choose for the rest of the game and if they're dead. The role must be from The Criminal List.");

		e.addField("Attributes:", "- If you're Criminal during the start of game, The Criminal List switches all evil roles to random roles, otherwise it won't happen.");

		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["undercover_agent", "undercoveragent", "ua", "1253", "62u"], "Unseen", "Undercover Agent", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1253\nConverted From: Spy");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spy - Get all feedback messages from your target.\n- Oversee - Learn who is visited by each non Town faction. 2 uses.");

		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["thrillseeker", "thrill", "1254"], "Umbrae", "Thrillseeker", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1254");

		e.addField("Alignment", "Umbra Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Idolize (Day, 1 use): Select a player, ask them if they wish to become your sidekick. If they accept, their goal switches to \"The Hero and their allies must be the last players standing\". If they decline, they are modkilled on the spot. This ability fails if your target is an evil faction or convert immune.\n- Performance of the Lifetime (Night, 2 uses): Send your Sidekick out to kill a player, for all intents and purposes, the sidekicks visit is indirect.\n- 2-For-2 (Blood Moon): Send your sidekick out to kill two players, if you do not have a sidekick, a randomly convertable role will become the sidekick. Blood Moon only.");

		e.addField("Attributes:", "Redirect, Control, Conversion immune.");

		e.addField("Goal:", "Umbrae Goal");
	});

	register_role(["=random", "1255"], "Random", "Random", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1255");

		e.addField("Alignment", "Random Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability you received.");

		e.addField("Attributes:", "- Gain the ability of a random killing role at the beginning of the night, overriding the previous one.\n- You are guaranteed to spawn if the Randoms spawn, as the Randoms lack a factional kill.\n- Sax, you are not funny.");

		e.addField("Goal:", "Kill all who would oppose the Randoms.");
	});

	register_role(["=random_list", "=randomlist", "1256"], "Random", "Random List", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1256");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select any amount of players. You will get a list of the roles that are in that group, but also (x/2 rounded down, where x is the amount of players chosen) roles that don't exist, but can spawn.");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", "Kill all who would oppose the Randoms.");
	});

	register_role(["=random_choice", "=randomchoice", "1257"], "Random", "Random Choice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1257");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. Choose 3 secondary targets. Your first target will be unknowingly redirected to one of your secondary targets. (They will only learn this if they are redirect immune)");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", "Kill all who would oppose the Randoms.");
	});

	register_role(["=random_role", "=randomrole", "1258"], "Random", "Random Role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1258");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Three times per game, select a player. They will automatically become a new, random role in their alignment. Once per game, select someone. They will become a completely random role.");

		e.addField("Attributes:", "- Become Random if there currently is none.\n- Sax, you are not funny.");

		e.addField("Goal:", "Kill all who would oppose the Randoms.");
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

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Refrigerate a player with an Ice Mark each night, roleblocking them and all players who target them that night.\n**Freezing Point** — For the rest of the game, two or more other non-Everfrost players visiting a player covered in frost doesn't prevent them from being dealt a Basic attack by Eyisa. Then, coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immunity\n- Whenever a non-Everfrost player visits the same player as another non-Everfrost player, the next night, they will be roleblocked.\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.");

		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["jack_frost", "jackfrost", "1262"], "Everfrost", "Jack Frost", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1262");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call upon the divine cold at night, increasing an Everfrost player's defense level by two stages.\n**Winter's Retribution** — Roleblock up to two players, then coldsnap. You may only use this ability once each game and you can't use it until Night 3. You get another use once Eyisa uses Winter's Judgment.");

		e.addField("Attributes:", "- Roleblock Immunity\n- All Everfrost players are Astral and redirect immune.\n- You have a layer of Basic defense that can prevent one attack.\n- If Eyisa dies, you gain the attribute \"Whenever a player is roleblocked by anything while you're alive, they'll be notified that they're covered in frost. If they're not visited by at least two other non-Everfrost players the next night, they're dealt an Astral Basic attack by you at the end of that night. This effect cannot be prevented by anything.\" and Powerful defense.");

		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["rerollius", "god_of_rerolls", "godofrerolls", "rgor", "1263"], "Neutral", "Rerollius, God of Rerolls", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1263");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Reroll someone each night, rotating them 720 degrees, which causes them to be dealt a Powerful attack, but also changing their role to another random GIM role at the same time.");

		e.addField("Attributes:", "- Roleblock, redirect, detection, and conversion immune\n- When you roll this role, it's automatically rerolled and you get 2 extra rerolls, which bypass the rule that you can't reroll roles that you made. However, you lose one of these extra rerolls each time you reroll a role made by someone who isn't a player, even though those rerolls are normally free.\n- If you somehow actually end up with this role, please note that you are immune to all effects which would change your role.");

		e.addField("Goal:", "NK Goal");
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

		e.addField("Goal:", "Pokemon Goal");
	});

	register_role(["sk", "sk_with_no_attack", "sk_no", "sk_none", "1267"], "Neutral", "SK with no attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1267");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- If you roll this, you may choose to reroll this into another random \"Serial Killer/SK\" role for free. You're welcome.\n- You also can choose to keep this role, if you actually want it for whatever reason.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["naivete", "1268"], "Town", "Naivete", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1268");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player at night, learning their role if they are town.");

		e.addField("Attributes:", "- If your target is not town, they will appear as a randomly chosen town role, and they will be notified that they have shown up as X role to the Naivete. Investigating them again will not change the result.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["literal_clone", "literalclone", "clone", "1269"], "Neutral", "A Literal Clone", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1269");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Become a clone of someone. This can only be done once and you cannot use this if you have a permanent factional chat.");

		e.addField("Attributes:", "- You start as a clone of someone. You have their role, goal, abilities, and attributes, however you do not know their name. You are aware you are a literal clone.");
		
		e.addField("Goal:", "Complete the goal of your cloned role.");
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
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["werewolf", "1272"], "Were", "WereWolf", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1272");

		e.addField("Alignment", "Were Head", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Rampage at a player's house each night, killing them and biting all of their visitors.");

		e.addField("Attributes:", "- Biting a player will cause them to die the next day, they will not be informed they were bitten. The WereWolf will not be informed of biting players.");
		
		e.addField("Goal:", "Kill all who fail to submit to lycanthropy.");
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

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run Away! (Day, 1 use): Select a player during the day, see which evolution you would become upon evolving should you visit them.\n- Adaptability! (Night, 1 use): Become a evolution of your choice by visiting a player, which could be Espeon, Flareon, Umbreon, Jolteon, Sylveon, Glaceon, or Leafeon, or Shiny Eevee.");

		e.addField("Evolutions:", "Umbreon: Wins with the Umbrae, the blood moon is permanently out while the Umbreon lives, the Umbreon will become the Umbra (Assault) once the current UA dies.\nLeafeon: Wins with the Plants and Florae, adds 2 sun per night for each night the Leafeon lives.\nFlareon: Wins with the Underworld, may perform an extra douse on top of the factional one.\nEspeon: Wins with the Coven, may cause the Necronomicon to be inherited by two members of the Coven while alive, when the Sylveon dies, the first coven member to die will not give another the necronomicon.\nGlaceon: Wins with the Everfrost, may roleblock a player each night, will die in Eyisa's place should Eyisa ever have the ability to die.\nSylveon: Wins with the Pale Moon Circus, secretly shortens the amount of time until the Circus by one day while living, no longer has an effect after the Circus has begun.\nJolteon: Wins with the Thundercry, may strike one player each night, if all living players are striked, the Thundercry win the game.");

		e.addField ("Evolutions (cont.):", "Shiny Eevee: wins with any faction not listed above, but only that faction selected, allows an additional factional kill by it's hands. If there is no factional kill, create one for this game. (Ex: the Fallen Angels would now have a factional kill that only Shiny Eevee could perform)");
		
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
		e.setDescription("Post 1276");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spark! - Redirect one player to you. (2 uses)\n- Discharge! - Upgrade your Defense to Basic and Attack to Powerful tonight. (1 use)\n- Electric Terrain! - Upgrade your Defense to Basic tonight. Redirect all players who choose to idle tonight to you. (1 use)");

		e.addField("Pokemon Ability:", "**Lightning Rod** - You will attack players who visit you.");
		
		e.addField("Goal:", "Pokemon Goal");
	});

	register_role(["prankster", "1277"], "Neutral", "Prankster", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1277");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Transport two people at night, as if you were a Transporter.");

		e.addField("Attributes:", "- Everyone's factions, including those of Neutrals (yours too) is randomized at the beginning of the day. Mafia becoming Coven loses Mafia chat, but gains Coven chat, and vice versa, and also applies to other factions, as well as just gaining or just losing chats. Conversion roles will convert people to their new faction. Furthermore, anything that is designed around a role being in a specific faction (like Ace and Hex Master) will automatically have its wording changed. People can keep their original faction, but only if the randomizer says they do. They don't choose to keep it.\n- If Town becomes Neutral, their goal is to survive. If a non-killing REF role becomes Neutral, their goal is to see the Town lose. If a killing REF role becomes Neutral, their goal is to kill everyone else.\n- The end outcome will always ensure there is the same number of people per faction as there was in the start. (For example, 12 people will be Town if there are 12 Town roles.)\n- Yes, everyone will know their new faction.\n- You also may choose to void the above attributes, if you are out of rerolls. Your goal will be as listed below. The host can also force the above attributes to be voided.");
		
		e.addField("Goal:", "Complete your new goal. If you somehow end up Neutral again, live to see the Town lose.");
	});

	register_role(["koopa_troopa", "koopatroopa", "koopa", "1278"], "Neutral", "Koopa Troopa", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1278");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone, you will attack them and a random non-attacking visitor.\n- While in your Shell mode, deal a Powerful attack to someone and a random visitor.");

		e.addField("Attributes:", "- If you were to die, you will instead go inside your shell, activating Shell mode and gaining Basic defense.\n- You will get out of Shell mode after 1 night of not attacking.\n- Your attacks cannot hurt a Faction leader, and will learn their name if you try to do so.\n- Faction leaders will be notified a Koopa Troopa exists at the start of the game.");
		
		e.addField("Goal:", "Win by seeing an alive faction leader win.");
	});

	register_role(["bird", "btcyoadsp", "1279"], "Town", "Bird That Carries You Over A Disproportionately Small Gap", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1279");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Carry someone over a disproportionately small gap.");

		e.addField("Attributes:", "- The players you carry will gain all forms of immunities and will visit astrally.\n- If someone you carry Is attacked, you die instead.");
		
		e.addField("Goal:", "Town Goal");
	});
};
