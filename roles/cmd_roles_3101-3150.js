//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["sugar_cane", "sugarcane", "sc", "3101"], "Minecraft", "Sugar Cane", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 3101");

		e.addField("Alignment", "Minecraft Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Speed Up Tick Speed**: Tick speed is sped up, allowing every non head Minecraft role to act twice.(1 use)\n- **Farm Cane**: The current head gets one sugar\n- **Grow Quickly!**: Night or day moves quicker, ending 8 or 16 hours early. People are notified that the sugar cane is growing quickly. You may use this ability during the night or day(1 use)");

		e.addField("Attributes:", "- If you die, the head role gains 2 sugar.\n- You may only grow quickly within four hours of night or day starting ");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["endermite", "em", "3102"], "Minecraft", "Endermite", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3102");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Hatch**: If the head role is carrying an ender pearl, consume it and pop a clone into existence, creating NPCs controlled by you. (3 uses)\n- **Relocate**: Swap places with one person. Any visits against you will be redirected to them and vice versa.\n- **Forgotten**: Lose access to the day chat the next day until someone notices you’re missing. The person that notices you’re missing is attacked, and you may disguise this kill as one from a different day killing role.");

		e.addField("Attributes:", "- You may only spawn if a role that gives ender pearls does.\n- If you die while one of your clones exist, take over that clone’s body, and it will act as an extra life.\n- You may only have 2 clones alive at a time.\n- You may only have a max of 3 clones total.\n- You do not get to take over a clone if you are lynched. Instead, all clones die.\n- When you die, drop XP. The head’s attack will be upgraded by one tier the next night.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["ameboid", "3103"], "Koopa", "Ameboid", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3103\n*A blue, Slimy Goomba-shaped creature.*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Speed up a target, All abilities used against them will be delayed for the next night.\n- Scare a target, Their action will be delayed by a day and all actions against them are processed as soon as they are sent. (2 uses)\n- Secretly cover someone's will in slime, making it unreadable when they die, this lasts indefinitely. (2 uses)");

		e.addField("Attributes:", "- A slimy will can be reversed by a heal, purge or any similar effects.\n- Your speed-up isn't affected by its effects, Your scare ability will process instantly, you may queue it at day.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["pokey", "3104"], "Koopa", "Pokey", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3104\n*That's a Pokey. It's a cactus ghoul that's got nasty spines all over its body...*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- Spike up, everyone who visits you will be roleblocked for the next 2 nights unless they are visited in that night.\n- Sneak up on someone, if they used an investigative ability, you will learn who they targeted and steal their feedback.\n- Regrow, Removing 1 damage from you, this will remove 2 on full moon nights.");

		e.addField("Attributes:", "- You may take 1 damage to use Spike up on some else.\n- You may take 3 damage to Sneak up on everyone using an investigative ability tonight.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["pocket_monster_beekeeper", "pocketmonsterbeekeeper", "pokemonbeekeeper", "beekeeper", "pmbk", "3105"], "Pokemon", "Pocket Monster Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3105\n*Gotta bzzzz 'em all!*");

		e.addField("Alignment", "Pokemon Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Fury Cutter**: Use 1 bee to choose a player. If you've used this ability on them before, deal an X-tier attack to them, where X is the number of times you've used it on them before. \n- **Defend Order**: Use 2 bees to permanently increase your defense by a stage, up to Invincible, and prevent all nonattacking abilities targetting you tonight.\n- **Pollen Puff**: Use 3 bees to choose a player. If they win with you, heal them. If they don't, deal an Unstoppable attack to them.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Attributes:", "- **Honey Gather**: At the beginning of each day, if you have no permanent attack or defense modifications, you have a 50% chance of gaining an additional bee.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["kitsune_beekeeper", "kitsunebeekeeper", "kistune", "foxbeekeeper", "beekeeper", "kbk", "3106"], "Fox", "Kitsune Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3106\n*A nine-tailed bzzzz's appearance is an omen, good or bad.*");

		e.addField("Alignment", "Fox Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to redirect a player to a random player of your choice.\n- Use 2 bees to deal three Basic attacks to a player.\n- Use 3 bees to make each Fox's vote secretly count as three tomorrow.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["mithraic_mysteries_beekeeper", "mithraicmysteriesbeekeeper", "mithraic_beekeeper", "mithraicbeekeeper", "mithraic_mysteries", "mithraicmysteries", "cultbeekeeper", "beekeeper", "mmbk", "3107"], "Cult", "Mithraic Mysteries Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3107\n*All hail bzzzz. All hail the other bzzzz.*");

		e.addField("Alignment", "Cult Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to redirect a random non-Cult player to a player of your choice\n- Use 2 bees to short circuit a player.\n- Use 3 bees to guess a player's role. If you're correct, they may choose whether to commit suicide or be converted to the Cult.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- This role is converted from 792: Beekeeper, 794: Keybeeper, and 1175: Beekeeper Hivemind specifically. The host may still choose to convert those roles to their corresponding normal Cult roles if they wish.");

		e.addField("Goal:", factions.Cult.goal);
	});

	register_role(["day_of_reckoning_beekeeper", "dayofreckoningbeekeeper", "day_of_reckoning", "dayofreckoning", "reckoningbeekeeper", "horsemanbeekeeper", "horsemenbeekeeper", "beekeeper", "dorbk", "drbk", "3108"], "Horsemen", "Day of Reckoning Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3108\n*The apocalypse is bzzzz.*");

		e.addField("Alignment", "Horseman Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Use 1 bee to choose a player. For the next three days, if they whisper or send a message in a day chat, you will attack them.\n- Use 2 bees to attack a player and their target, unless their target is the Harbinger.\n- Use 3 bees to deal an Unstoppable attack to one player, a Powerful attack to another player, and a Basic attack to a third.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- When Empowered, you will attack a random non-Horseman player who visits your target whenever you use any of your abilities.");

		e.addField("Goal:", factions.Horsemen.goal);
	});

	register_role(["dolphin", "🐬", "3109"], "Minecraft", "Dolphin", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3109");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Dolphins Grace**: The nearest non-head Minecraft role near you gets to move twice. In the event that two roles tie for nearest, they both get the buff(1 use)\n- **Look for Item**: Give steve a random inventory item. \n- **Follow Boat**: Learn who visits your target, and learn who your target visits.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["luigi", "god", "3110"], "Neutral", "Luigi", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3110");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Immortal", true);

		e.addField("Abilities:", "- Use the ability of any role in <#970046125065265202> at night. Any. Role.\n- Die someone. They die.");

		e.addField("Attributes:", "- You may use multiple different abilities at once.\n- You may use multiple of the same ability at a time.\n- You can always talk in any Day chat, regardless of the phase or what day it actually is. Even if it's Day 9, you can still talk in the Day 1 chat. You may also talk in all private chats (informed minority, dead, see jailor/wisteria, etc) but cannot see player chats.\n- Lynch immunity.\n- Death immunity.\n- Modkill immunity.\n- Kick immunity.\n- Ban immunity.\n- Mute/timeout immunity.\n- Conversion immunity.\n- Control immunity.\n- Redirect immunity.\n- Roleblock immunity.\n- Occupy immunity.\n- Your ability cannot fail.\n- None of your immunities or other attributes can be bypassed under any circumstance.\n- Your abilities and attributes cannot be removed. They can be copied, but only if it's actually allowed.\n- Your defense will always be set to Immortal.\n- You cannot be removed from the game\n- The wording of this role can only be modified when a game is not running");

		e.addField("Attributes (cont.):", "- If your role is removed, delay the removing. Automatically and secretly create a new role with a completely random name, which if ever is mentioned, immediately is changed to a new one. This new role has the exact same abilities and attributes as God.\n- An outside party cannot forcefully switch your role. Only you can switch your role.\n- If the game would only be blocked by you and a Survivor, the game will end and you will lose. So yes, you can technically lose.\n- If you somehow manage to die or exit the game in any way, immediately revive yourself and/or add yourself back into the game. If the game is closed, automatically reopen it. If something prevents revives, immediately attack whatever prevents it then try again. If you still can't, remove them from the game.\n- The joke is that Luigi is a God [he's so cool B)]");

		e.addField("Goal:", "Eliminate all Survivors.");
	});

	register_role(["everything", "3111"], "Other", "Everything", {subCat: "Everything"}, (e) =>
	{
		e.setDescription("Post 3111");
		e.author.iconURL = "https://media.discordapp.net/attachments/970041598308134995/1050838549106262026/image.png";

		e.addField("Alignment", "Everything Everything", true);
		e.addField("Attack", "All of them.", true);
		e.addField("Defense", "ALL of them.", true);

		e.addField("Abilities:", "- (Night): Every single one that exists.\n- (Day): Every single one that exists.");

		e.addField("Attributes:", "- As you may guess, it’s ALL OF THEM.\n- You use every single ability at once. You may not choose which ability you use, because it’s all of them. You choose to use all of the abilities.");

		e.addField("Goal:", "Kill everyone.");
	});

	register_role(["black_rose_beekeeper", "blackrosebeekeeper", "rosebeekeeper", "unseenbeekeeper", "beekeeper", "brbk", "3112"], "Unseen", "Black Rose Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3112\n*Hidden in the bzzzz.*");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to choose two players and learn exactly how long there was between the times their roles were posted in the thread.\n- Use 2 bees to swap two players' attributes.\n- Use 3 bees to brainwash a player. They will be forced to use the ability and targets that would most benefit the Unseen every phase for the rest of the game.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["white_rose_beekeeper", "whiterosebeekeeper", "rosebeekeeper", "wrbk", "3113"], "Town", "White Rose Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3113");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to choose two players and learn the amount of days between their post date.\n- Use 2 bees to give a random attribute from your first target to your second.\n- Use 3 bees to handicap a player. All abilities that they attempt to use which have an outcome that directly harm the town will fail until the beginning of the next day.");

		e.addField("Attributes:", "- You will earn 1 bee every night.\n- You can use 2 abilities per night.\n- If you are converted by the Unseen, you become Black Rose Beekeeper (3112).");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bacteria", "3114"], "Backrooms", "Bacteria", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 3114\n*Hush, and don’t move*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Wander to a players house to see if they’re moving");

		e.addField("Attributes:", "- Each night you can check a player’s house to see if they visit someone else that night \n- If your target stays home or is roleblocked, you will not attack them\n- If your target visits someone else, you will brutally murder them\n- You will rampage at your own home if you stay home\n- If there are no visiting roles left alive, you will begin attacking your target despite them staying home");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["kite_flyer", "kiteflyer", "kf", "3115"], "Zombie", "Kite Flyer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3115");

		e.addField("Alignment", "Zombie Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use any number of cards in your possession.");

		e.addField("Attributes:", "- Every time a Zombie kills someone, you will draw a Kingdom Attack! card. The card is completely random. idk find rasen for the list or smth");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["poker_player", "pokerplayer", "pp", "3116"], "Mafia", "Poker Player", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3116\n*Blackjack!*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Short circuit someone every night, nullifying their attributes until the end of the night.");

		e.addField("Attributes:", "- You will draw a Kingdom Attack card for no reason each time a player dies.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["electric_boogaloo", "electricboogaloo", "boogaloo", "eb", "⚡🕺", "3117"], "Zombie", "Electric Boogaloo", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 3117\n*Are you shocked that I simply didn't leave the text as \"disco is undead\"?*");

		e.addField("Alignment", "Zombie Hero", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Synchronize two players' movements with another's, redirecting the two players to the third player's target. If the third player has multiple targets, it will be the first one.\n- Strike down a player at night. If they were ever attacked but survived somehow, kill them. (3 uses)");

		e.addField("Attributes:", "- You only visit your third target with your first ability.\n- If your targets are redirected into visiting you, they will all be roleblocked.\n- Roleblock and redirect immune");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["z-mech", "zmech", "3118"], "Zombie", "Z-Mech", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 3118\n*I don't know about you, but I would be terrified if I saw a zombie piloting a mecha suit.*");

		e.addField("Alignment", "Zombie Hero", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Fire a missile salvo at someone, dealing a Powerful attack to them, Basic attack to their neighbors, and roleblocking people two houses away. You are immune to this, but other Zombies are not. (2 night cooldown)\n- Guard someone, granting them Invincible defense.");

		e.addField("Attributes:", "- If the attacker is Astral, you will deal a Powerful counterattack to them.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["theclergy", "clergy", "3119"], "KA", "Clergy", {subCat: "Spiritual"}, (e) =>
	{
		e.setDescription("Post 3119\n*You are the leader of the spiritual, A group determined to keep your faith alive.*");

		e.addField("Alignment", "KA Spiritual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 1-5 Players. You learn if the majority of those players share your current win condition. (3 uses)\n- Gain two random cards that have the ability to heal. (1 use)\n- Play a Health Steal! on any player. (2 Uses)");

		e.addField("Attributes:", "- At the end of each night, you and your neighbors restore 1 HP. You ignore dead neighbors for this attribute.\n- You have no hand cap.");

		e.addField("Goal:", factions.KA.goal);
	});

	register_role(["corroboree_frog", "corroboreefrog", "corroboree", "3120"], "Frog", "Corroboree", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3120");

		e.addField("Alignment", "Unique Frog Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Corroboree Frog is able to produce its own toxins, instead of relying on prey. It may select a player to poison.");

		e.addField("Attributes:", "- The destruction to the habitat of Frogs makes it impossible for multiple poisonous Frogs to coexist.\n- The Corroboree Frog, like other poisonous frogs, is unable to perform the Frog kill. However, it retains this limitation, even if it remains as the only living Frog.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["golden_poison_frog", "goldenpoisonfrog", "golden_frog", "goldenfrog", "golden_poison", "goldenpoison", "gpf", "3121"], "Frog", "Golden Poison Frog", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3121");

		e.addField("Alignment", "Unique Frog Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Golden Poison Frog is considered one of the most poisonous animals in the world. It may select a player to poison, as well as those who encounter it through visiting.");

		e.addField("Attributes:", "- The destruction to the habitat of Frogs makes it impossible for multiple poisonous Frogs to coexist.\n- The Golden Poison Frog, like other poisonous frogs, is unable to perform the Frog kill, until it remains as the only living Frog.\n- The Frog kill may not occur when the Variable Poison Dart Frog is poisoning a player.\n- The Golden Poison Frog is unable to directly produce its own toxins. As such, it can only do so after the Frogs have killed two players for each time it wants to poison another.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["variable_poison_dart_frog", "variablepoisondartfrog", "poisondartfrog", "variablepoisondart", "vpdf", "3122"], "Frog", "Variable Poison Dart Frog", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3122");

		e.addField("Alignment", "Unique Frog Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Variable Poison Dart Frog, while harmless in captivity, is able to poison its predators in the wild. It may select a player to poison.");

		e.addField("Attributes:", "- The destruction to the habitat of Frogs makes it impossible for multiple poisonous Frogs to coexist.\n- The Variable Poison Dart Frog, like other poisonous frogs, is unable to perform the Frog kill, until it remains as the only living Frog.\n- The Frog kill may not occur when the Variable Poison Dart Frog is poisoning a player.\n- The Variable Poison Dart Frog is unable to directly produce its own toxins. As such, it can only do so after the Frogs have killed a player for each time it wants to poison another.\n- The Variable Poison Dart Frog is skilled in warding off predators. The first time it is attacked, it will survive and poison its attacker.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["red-eyed_tree_frog", "redeyedtreefrog", "treefrog", "redfrog", "redeyed", "red-eyed", "retf", "3123"], "Frog", "Red-Eyed Tree Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3123");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Red-Eyed Tree Frog, while not poisonous, is able to scare less knowledgable unwanted guests. It may select a target to block all Investigating and Killing type roles from that target.");

		e.addField("Attributes:", "- The skin of a Red-Eyed Tree Frog is very absorbent. The second time it successfully prevents an attack, it will die.\n- The Red-Eyed Tree Frog excels from heights. It will learn who visits its target.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["goliath_frog", "goliathfrog", "goliath", "3124"], "Frog", "Goliath Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3124");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Goliath Frog, the largest known frog species, likely grew from pushing rocks. It may select a player to gather rocks around that player's house, preventing them from leaving their house.");

		e.addField("Attributes:", "- The Goliath Frog uses rocks from nearby a player's house. The second time they target the same player, the effect will take place the next night instead.\n- The Goliath Frog is roleblock immune.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["larut_torrent_frog", "laruttorrentfrog", "larut_torrent", "laruttorrent", "larut", "larutfrog", "torrentfrog", "ltf", "3125"], "Frog", "Larut Torrent Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3125");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Larut Torrent Frog is one of the fastest known frogs. It can select a player to learn the exact outcome of that player's ability.");

		e.addField("Attributes:", "- The Larut Torrent Frog also will stick around long enough to learn everything that happens to its target.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["vietnamese_mossy_frog", "vietnamesemossyfrog", "vietnamese_mossy", "vietnamesemossy", "mossy_frog", "mossyfrog", "vietnamese", "mossy", "vmf", "3126"], "Frog", "Vietnamese Mossy Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3126");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Vietnamese Mossy Frog is able to camouflage itself to avoid predators. It may select itself or another player to disguise that player as any role.");

		e.addField("Attributes:", "- When a player camouflaged by the Vietnamese Mossy Frog is investigated, the investigator will see the player as that role. The camouflage is then removed at the end of the night that the player is investigated, and the Vietnamese Mossy Frog will learn of this.\n- Players camouflaged by the Vietnamese Mossy Frog on death will be revealed to be the role that they were camouflaged as.\n- If the Vietnamese Mossy Frog dies, they may camouflage themselves, if they haven't already.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["african_dwarf_frog", "africandwarffrog", "africanfrog", "dwarffrog", "african_dwarf", "africandwarf", "adf", "3127"], "Frog", "African Dwarf Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3127");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The African Dwarf Frog is an amphibious frog that spends most of its life underwater. It may select a player to submerge, preventing that player from seeing the day chat or doing anything the next day.");

		e.addField("Attributes:", "- The African Dwarf Frog is unaffected by its ability.\n- The African Dwarf Frog has lungs, not gills. After submerging a player, it must rest the next night.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["desert_rain_frog", "desertrainfrog", "desert_rain", "desertrain", "desertfrog", "rainfrog", "drf", "3128"], "Frog", "Desert Rain Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3128");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Desert Rain Frog resides on a sandy shore between the sea and sand dunes. It is able to kick sand into a player's eyes, preventing them from receiving any feedback tonight.");

		e.addField("Attributes:", "- The Desert Rain Frog is nocturnal, meaning it knows how to avoid danger at night. It cannot be detected visiting its targets.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["little_guy_at_walmart", "littleguyatwalmart", "little_guy", "littleguy", "walmart", "guy_at_walmart", "guyatwalmart", "lgaw", "lgw", "3129"], "Mafia", "Little Guy At Walmart", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3129");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Each time a person dies, A random player goes missing, and their abilities are copied as locust(40).\n- Once per hour, you may use an ability from locust(40).");

		e.addField("Attributes:", "- You are immune to locust(40).\n- Your visitors will all turn into locust (40) unless they have bug repellent.\n- Bug repellent is a what staus given by locust (40).\n- You cannot be converted or voted by Locusts (40).\n- Made with the cooperation of Luka, Bionic, Nub, Squidly, Nitowl, Viri, Rasen, JD");

		e.addField("Goal:", "Convert everyone Including yourself except yourself without yourself Into Locust (40) and die.");
	});

	register_role(["tp_with_rasen_mechanic", "rasen_mechanic", "rasentp", "tpwithrasenmechanic", "tpwrm", "twrm", "3130"], "Town", "TP with Rasen Mechanic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3130\n*We do a little more time travelling.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player each night.\n- **Timewarp** during the day. (*Choose a previous night's actions and rewrite their targets. Everything is reprocessed from that point, so players who were rewritten to die have their later actions undone, but new feedback isn't given. Timewarping resolves at day end and is announced. You may only timewarp once.*)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["we_like_commas_but_it_has_basic_defense", "welikecommasbutithasbasicdefense", "2503butithasbasicdefense", "basicdefense2503", "wlcbihbd", "3,131", "3131"], "Neutral", "we like commas but it has basic defense.", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3,131");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player. If their post number has more than three digits, add commas where necessary.");

		e.addField("Attributes:", "- Affected roles permanently gain commas in their roles post and in the bot.");

		e.addField("Goal:", "Add commas to all valid targets in the game.");
	});

	register_role(["ice_monkey", "icemonkey", "im", "3132"], "Monkey", "Ice Monkey", {subCat: "Primary"}, (e) =>
	{
		e.setDescription("Post 3132");

		e.addField("Alignment", "Monkey Primary", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze your target, roleblocking them and inflicting frostbite.");

		e.addField("Attributes:", "- You may only choose one upgrade, defined in bold.- Roleblock immune.\n- “Frostbite” causes them to die if two or more non monkeys visit them in the same night. It doesn’t apply on the night the target was affected, and they are notified they were afflicted by frostbite.\n- Once you upgrade, you lose the ability to inflict frostbite.\n**Ice Shards**\n- After roleblocking two people, you may target two people; if either of them die this night, attack the other with a basic attack. \n- If you kill two people, your attack is upgraded to powerful. \n- If you kill 3 people, you may target four people; if any of them die, kill another person at random.Arctic Wind\n- After roleblocking two people, you may roleblock two people as your night action instead.\n- After roleblocking four people, you passively roleblock your neighbors every night.\n- After roleblocking 10 people, you gain a one time use ability to roleblock everybody in the game that is not a monkey.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["dart_monkey", "dartmonkey", "darts", "dm", "3133"], "Monkey", "Dart Monkey", {subCat: "Primary"}, (e) =>
	{
		e.setDescription("Post 3133");

		e.addField("Alignment", "Monkey Primary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a dart at somebody, dealing a basic attack. Due to your slow attack speed, you can only use this ability every two nights.");

		e.addField("Attributes:", "- Roleblock immune.\n- You can only choose to go one upgrade path per game. Upgrade paths are the things in bold.\n**Triple Dart**\n- After one kill, you can now kill 3 people at once, but if you choose to do, you may not attack for three nights.\n- After three kills, you may transform into the super monkey fan club, letting you attack one person every night.\n- After five kills, you may transform into the plasma monkey fanclub, letting you attack three people every night.\n**Spike Ball**\n- After one kill, you gain a spike ball. may randomly attack three people.\n- After five kills, your spike ball increases in size. may randomly attack five people.\n- After 10 kills, your attack is upgraded to unstoppable.\n- All of these may attack your teammates and you. ");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["white-lipped_tree_frog", "white-lippedtreefrog", "whitelippedtreefrog", "white-lipped", "whitelipped", "treefrog", "whitetreefrog", "wltf", "3134"], "Frog", "White-Lipped Tree Frog", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3134");

		e.addField("Alignment", "Frog Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The White-Lipped Tree Frog, like other tree frogs, is native to trees. It may select a player to learn their role by looking through their window.");

		e.addField("Attributes:", "- The White-Lipped Tree Frog ignores frames and disguises.\n- The White-Lipped Tree Frog is the largest known tree frog. All visitors will learn that their target was visited by a White-Lipped Tree Frog.");

		e.addField("Goal:", factions.Frog.goal);
	});

	register_role(["the_warlord", "warlord", "tw", "3135"], "KA", "The Warlord", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3135");

		e.addField("Alignment", "Unique KA Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- Secret Supply: You may swap a card you have in your hand in exchange for another non-special card. (2 uses)\n- Frame: Pick a player, and change their role to appear as any other role. The effect will last 2 rounds. (3 uses)\n- Riot: Upgrade the next 3 attacking cards played by teammates. (1 use)");

		e.addField("Attributes:", "- Last Stand: Once you die, you will deal a Powerful attack to a target of your choice.");

		e.addField("Goal:", factions.KA.goal);
	});

	register_role(["alchemist", "alchemist_monkey", "alchemistmonkey", "3136"], "Monkey", "Alchemist", {subCat: "Magic"}, (e) =>
	{
		e.setDescription("Post 3136");

		e.addField("Alignment", "Monkey Magic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Empower your target, letting them ignore all immunities in their action, and increasing their attack and defense value by one. If this results in a paradox, the buff is ignored.");

		e.addField("Attributes:", "- You may target team members.\n- Redirection Immune\n- You may only choose one upgrade, upgrades are defined in bold.\n**Berserker Brew**\n- After having one empower take effect. (Bypass an immunity, make a person who would normally live die, and vise versa), you may target a person during the day, tonight, they can use their action twice. This has a one day cooldown.\n- After having two double actions take effect, you may target two people; they may act twice. This has a one day cooldown.\n- After having 9 double actions take effect, you may stack abilities, allowing for monkeys to move more than once.\n**Transforming Tonic**\n- After empowering two people, you may target a person; they become another monkey alchemist, however, the unlock condition for this ability increases by one. (One use)");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["convert_everyone", "converteveryone", "convert", "ce", "3137"], "Neutral", "Convert Everyone", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3137\n*Convert everyone*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert everyone.");

		e.addField("Attributes:", "- You may only use your ability on Night 7 exactly.\n- Your ability causes everyone to win with you and bypasses conversion immunity and informed minority limits.\n- Your ability only affects living players.");

		e.addField("Goal:", "Convert everyone");
	});

	register_role(["quincy", "3138"], "Monkey", "Quincy", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 3138\n*Are you kidding me? Nothing gets past my bow!*");

		e.addField("Alignment", "Unique Monkey Hero", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, you may shoot one person. This has a 50% chance of missing.\n- After you get one kill with this, the chance of missing goes down to 25%.\n- After you get two kills with this, the chance of missing goes down to 0%.\n- After you get 3 kills with this, you may rapid fire, shooting 5 people. Each with a 50% chance of missing (Two Uses)\n- After you get 5 kills as Quincy, you may arrow storm, attacking everybody in the game. Every shot has a 50% chance of missing (Single Use).\n- If you get 7 kills before you use this ability, your chance of missing goes down to 30%");

		e.addField("Attributes:", "- Roleblock Immune\n- Cannot spawn with (Monkey Primary)");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["sniper_monkey", "snipermonkey", "sniper", "sm", "3139"], "Monkey", "Sniper Monkey", {subCat: "Military"}, (e) =>
	{
		e.setDescription("Post 3139");

		e.addField("Alignment", "Monkey Military", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone during the day, dealing a Basic attack to them. (1 day cooldown)");

		e.addField("Attributes:", "- You may only choose one upgrade, outlined in bold. You cannot choose an upgrade until you kill two people with your ability.\n**Cripple MOAB**\n- Attack upgraded to Powerful. The target will be functionally dead and cannot speak, but will still appear alive and a valid target until the end of the day. Anyone who whispers them while they're dead will have their defense reduced to Vulnerable the next night.\n- Gain a new night ability that roleblocks a target and gives them Protection Immunity for two nights.\n**Supply Drop**\n- Attack will also hit a neighbor at random. Attack will always skip over Monkeys.\n- Every time a Monkey kills someone, call in an airdrop. The airdrop will have a Kingdom Attack! card that you may then play at any time.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["super_monkey", "supermonkey", "sm", "3140"], "Monkey", "Super Monkey", {subCat: "Magic"}, (e) =>
	{
		e.setDescription("Post 3140");

		e.addField("Alignment", "Monkey Magic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Throw an overwhelming amount of darts at someone, killing them ten times and denying them any other night feedback. ");

		e.addField("Attributes:", "- You are so super that in balanced role lists, you take up two Monkey slots. The other slot is rerolled into an Any.\n- You have an Invincible autovest.\n**Robo Monkey** (Requirement: Be attacked once)\n- You may attack two people every night. Your attack and defense are upgraded to Powerful.\n- You gain Roleblock and Redirect immunity.\n**Sun Temple** (Requirement: Kill five people and be the last Monkey alive)\n- Upon killing five people and being the last Monkey alive, you may summon the Sun God. This grants you the attack, defense, abilities, and attributes of (1479) Pestilence (But Accustomed To GIM). It will be revealed that \"The Sun God has awoken!\"");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["monkey_village", "monkeyvillage", "village", "mv", "3141"], "Monkey", "Monkey Village", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3141");

		e.addField("Alignment", "Monkey Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Each night, you may target a fellow monkey. They gain a buff depending on monkey they are.\n- Sniper Monkey: The next time they shoot, they do not have a cooldown. if they target a monkey with their Cripple Moab ability, they do not roleblock. If they target a non-monkey, they do not give defense. \n- Ice Monkey: Whoever they visit tonight gains frostbite.\n- Dart Monkey: All of their attacks attack one other random non-monkey.\n- Alchemist Monkey: They gain one more use of transforming tonic presuming they went that upgrade, or they may empower one more person.\n- Quincy: The chance of their attack missing goes down by half.\n- Super Monkey: You do not count as one for super-monkeys transformation this night. You will deal to him a basic attack, then immediately refresh their auto vest, assuming they cannot transform into sun god using your ability. If they have already summoned the sun god, their attack becomes astral, you do not die to them tonight, and anybody who they attack is modkilled.");

		e.addField("Abilities (cont.):", "- Engi: Attacks all visitors. With Bloon Trap, deals a Powerful attack instead.\n- Ace: Also sees anyone who visits your targets. This will count towards Ground Zero. If upgraded, all attack levels are also increased by one stage.\n- Spike: Roleblocks whoever the spikes are put on as well, unless they are a Monkey. Reduces all numerical values in the card except for the post number and spike storm count by one until the next night. Spike Storm may place on one extra person.\n- Bucc: Visit becomes astral, and the ability is changed to a Control with the same properties.\n- Ninja: They may sabotage two sub alignments, or they may have four bombs out at a time, lasting till the end of the next night.\n- Gwen: Firestorm will reduce defense to fragile regardless of the original defense, they will now deal powerful attack, and they will not lose cocktails / firestorm upon using them.");

		e.addField("Abilities (moar.):", "- Boomerang: They may now only redirect players of three different sub allignemnts or survive a single attack in order to fulfil their unlock criteria. Presuming they have Glaive Lord unlocked, they are no longer seen as visiting anybody who glaive hits, and everybody who gets hit with a glaive will be dealt a basic attack, capping at 3 players. Presuming they have moab domination unlocked, they will now burn and roleblock whoever the original target intended to visit.");

		e.addField("Attributes:", "- Your defense value is equal to the amount of monkeys currently in game (discluding yourself).\n- You cannot spawn as the only monkey.\- You may only choose one upgrade, outlined in bold.\n- Presuming you choose Monkey Intelligence Bureau, all monkeys in the game are redirection immune, control immune, conversion immune, roleblock immune, and gain basic defense.\n**Primary Training**\n- After having buffed a primary monkey twice, you may buff a primary monkey in addition to your normal buff.\n- After having buffed a primary monkey thrice, you let a primary monkey you visit act twice.\n**Monkey Intelligence Bureau**\n- After having buffed a monkey twice, you unlock your attribute.\n- After having buffed a monkey thrice, you may let all other monkeys act twice. (One Use)");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["skeleton", "3142"], "Minecraft", "Skeleton", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3142");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Shoot**: Shoot somebody, dealing an astral attack to them. (1 use)\n- **Reconstruct**: Reconstruct a dead player as a skeleton, allowing them to speak during day and in factional chats, however you may control their night action. (1 use)\n- **Farm Bone**: Farm for a bone, giving the current Minecraft (Head) a bone.");

		e.addField("Attributes:", "-The first time you would die by anything except lynching, you do not.\n- Upon death, the head role gains two bones.\n- Anybody you ressurect decays after two nights, permanently being unable to be interacted with. They may also not speak in day or factional chat.\n- The theme song for this role is \"spooky scary skeletons\". If this role roles the host is obligated to send the spooky scary skeletons song in the private chat of the player. ");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["spider", "🕷️", "3143"], "Minecraft", "Spider", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3143");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Spew Web**: Spew web at your target, preventing them from moving until two non-minecraft roles visit them to free them. (2 uses)\n- **Lay a Trap**: Whoever visits your target will be roleblocked the next night\n- **Farm String**: Farm for a string, giving the head role one string.\n- **Farm Spider Eye**: Farm for a spider eye, giving the head role one spider eye. ");

		e.addField("Attributes:", " -Web's naturally decay in three nights, including the night you spew it.\n- Upon death, the head role gains two string.\n- You cannot roleblock people from the Minecraft faction.\n- You are roleblock immune.\n- Upon death, the head role gains two spider eye.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["monkey_engineer", "monkeyengineer", "engineer", "me", "3144"], "Monkey", "Monkey Engineer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3144");

		e.addField("Alignment", "Monkey Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a Sentry at someone's house, dealing a basic attack to 1 visitor. You may use your ability on fellow monkeys.");

		e.addField("Attributes:", "- Roleblock immune\n- You may choose an upgrade upon killing someone.\n- You may only choose one upgrade per game, outlined in bold.\n- Credits to Sal#5114\n**Cleansing Foam**: At night, you may also shoot someone in cleansing foam, making that player roleblock and control immune. This will also remove all status's from that night.\n- After removing two statuses/making a roleblock or control fail twice, all visits will fail on whoever you use Cleansing Foam on.\n- After three visits fail due to cleansing foam, whoever you use this on will now be poisoned with a basic attack, dying the next night. They will be aware of this\n**Bloon Trap** Your sentries get upgraded into Bloon Traps. This will grant the player Basic defense when you plant the sentry at their house, and will deal a basic attack to all visitors. These take a day to set up.\n- After getting two kills, it now takes no time to set up.\n- After getting three kills, you now roleblock whoever you place a bloon trap on");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["monkey_ace", "monkeyace", "ace_monkey", "acemonkey", "planemonkey", "ace", "ma", "3145"], "Monkey", "Monkey Ace", {subCat: "Military"}, (e) =>
	{
		e.setDescription("Post 3145\n*Remember back when these two upgrades were the same path?*");

		e.addField("Alignment", "Monkey Military", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch the town from the skies, tracking three players and seeing the first person that each of them visit.");

		e.addField("Attributes:", "- Astral and Redirect Immune\n- You may target other monkeys, but not yourself.\n- You may only choose one upgrade.\n**Operation Dart Storm** (Requirement: Track three people to people who died the same night)\n- You instead patrol a single target. If anyone with higher than Basic defense (permanent or temporary) visits your target, deal an Unstoppable attack to whoever has the highest defense value. Otherwise, deal a Basic attack to all visitors.\n**Ground Zero** (Requirement: See every living player visited at least once)\n- You now instead bomb a single target. Bombing deals a Powerful rampage attack.\n- If you kill seven people with your bomb attack, you may instead drop a nuclear bomb, doing an Overoverkill attack to everyone except yourself. Cannot be used until N7.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["spike_factory", "spikefactory", "sf", "3146"], "Monkey", "Spike Factory", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3146");

		e.addField("Alignment", "Monkey Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a layer of spikes outside someone's house, roleblocking all visitors.");

		e.addField("Attributes:", "- You may only choose one upgrade.\n- If you are roleblocked, you will place spikes outside of your own house unless you have Spiked Mines.\n- You may self target.\n**Spiked Mines** (Requirement: Roleblock 2 non-Monkey attackers)\n- You may place a mine outside someone's house, roleblocking and burning all visitors. Burning will deal an astral Basic attack the following night.\n- If three or more people visit your target, you will deal a Powerful attack to the target unless they are a Monkey.\n- You don't roleblock Astral visitors, but you still burn them and count towards the three-person limit.\n**Spike Storm** (Requirement: Roleblock eight visitors)\n- You may place spikes outside of five people each night.\n- Anyone who is roleblock immune will be dealt a Basic attack instead.\n- If you spike someone who is detained, you will attack the detainer.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["le_mystérieux", "le_mysterieux", "lemystérieux", "lemysterieux", "mystérieux", "mysterieux", "the_mysterious", "themysterious", "mysterious", "lm", "3147"], "Town", "Le Mystérieux", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3147\n*Me revoilà!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player each night to learn clues about your Nemesis. You will learn if your Nemesis ever visited this person or was visited by this person. You will also learn if the Nemesis is within a two houses radius of this person (dead people are ignored). Finally, you will learn if your target ever voted your Nemesis. You can't use this on your suspects.\n- Select one of your suspects. If they're your Nemesis, you will learn that and roleblock them! If you got it correct, you will get a new Nemesis, their role, and a new list of suspects. If you don't select your Nemesis but select an evil player, you will still roleblock them.");

		e.addField("Attributes:", "- At the start of the game, you get an evil player as your target and you'll learn their role. They are your Nemesis. You will get five suspects which the Nemesis could be.\n- You will bypass all frames and detection immunities.\n- If your role is publicly revealed or implied, you will die because a magician never reveals their secrets. You have to say \"I know this person is evil because I am a psychic and so good at scumreading\" or fakeclaim another TI or something.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["monkey_buccaneer", "monkeybuccaneer", "buccaneer", "mb", "3148"], "Monkey", "Monkey Buccaneer", {subCat: "Military"}, (e) =>
	{
		e.setDescription("Post 3148");

		e.addField("Alignment", "Monkey Military", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night, then perform their ability on a second target.");

		e.addField("Attributes:", "- You may only choose one upgrade.\n- Roleblock immunity\n- Redirect immunity against the first target.\n- If your visit fails on your first target, you will not visit any other targets.\n- Since your ability is based on roleblocks and not redirects, roleblock immunity grants immunity to your ability instead of redirect immunity.\n**Carrier Flagship** (Requirement: Use two killing abilities)\n- You may now scout a player each day to learn their exact role. However, you must select them as your first target each night.\n- You may select which of their abilities you use on a different target. You may target as many people as required by the ability you select.\n**Trade Empire** (Requirement: Use four different abilities with the (Support) subalignment)\n- You may now target another monkey during the day. They will be able to perform their ability twice the next night.\n- You gain Powerful defense, detection immunity, and you pierce through roleblock immunity.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["person_that_gets_shot", "personthatgetsshot", "person", "ptgs", "3149"], "Neutral", "Person that Gets Shot", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3149\n*They weren't lying, huh?*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- This role can not be rolled.\n- If anyone claims this role, they die.\n- If a Jester, or anyone else who has dying as a goal, claims this role they gain lynch immunity and +1 defense instead.");

		e.addField("Goal:", "N/A");
	});

	register_role(["wolf", "3150"], "Minecraft", "Wolf", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3150");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Pout**: Pout at somebody, gaining a random ability of theirs.\n- **Fetch!**: Fetch something, letting you learn anybody’s role.\n- **Retrieve!**: Retrieve something, taking a bone from the Minecraft head.\n- **Dig!**: Dig for a bone, giving the Minecraft head a bone.");

		e.addField("Attributes:", "- Upon collecting 3 bones, transform into Wolf (3152).\n- If you are killed, you attack your attacker.\n- If somebody visits you three times in one game, you become their role, but keep your faction.");

		e.addField("Goal:", factions.Minecraft.goal);
	});
};
