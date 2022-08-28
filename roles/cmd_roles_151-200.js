module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["iris", "151"], "Florae", "Iris", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 151");

		e.addField("Alignment", "Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may observe someone at night.");

		e.addField("Attributes:", "- On odd nights you will know who visits your target.\n- On even nights you will know who your target visits.\n- When dead, you may select a player once to give them your previous result.\n- Unlike Lookout, you do not have a limit if you see more than 3 people visit your target.\n- Like Lookout, your watch ability can be deceived by disguises.\n- Your track ability can be deceived by Framers. If you track a Framed target, you will see that your target didn’t visit.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["sage", "152"], "Florae", "Sage", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 152");

		e.addField("Alignment", "Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may inspect a player at night.");

		e.addField("Attributes:", "- Each night you are alive, you will be told how many Florae are still alive.\n- The player you inspect will not be included in your count.\n- Florae that die during the night will count towards your total for how many Florae are alive that night.\n- Your visits are Astral.\n- A player Disguised as a Florae counts as Florae for this purpose.\n- You cannot be fooled by Frames, Hexes, or Douses.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["thyme", "153"], "Florae", "Thyme", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 153");

		e.addField("Alignment", "Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may spy on someone's house at night.");

		e.addField("Attributes:", "- You will know all the roles of the players that visit your target.\n- Your visit is Astral and ignores Jail.\n- You are not deceived by Douses. However, Disguised players will show up whatever role they are disguised as. Hexed players will show up as the Hex Master. Framed players will not show up to you (Frames will be removed if it were to get in the way of you seeing a Framed player).\n- You cannot see astral or indirect visitors to your target (such as a Hex Master with the Necronomicon, a Guardian Angel protecting, or a Crusader attacking your target).");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["azalea", "154"], "Florae", "Azalea", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 154");

		e.addField("Alignment", "Florae Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may shoot a target at night, dealing a Powerful attack.");

		e.addField("Attributes:", "- If someone visits your target, you will shoot them instead.\n- If more than one player visits your target, you will shoot no one.\n- You may only shoot two times.\n- Your attack dealt to a visitor to your target is indirect. This is not the case if you attack your intended target.\n- You will not lose a bullet if more than one person visits your target.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["dahlia", "155"], "Florae", "Dahlia", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 155");

		e.addField("Alignment", "Florae Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may inspect a player during the day.\n- Choose another two players to watch at night.");

		e.addField("Attributes:", "- You will attack your day target if they visit either of your night targets.\n- You may watch yourself.\n- When dead, you may choose one player at night to deliver a Basic attack to them.\n- If either of your targets are jailed, you cannot inspect or watch them.\n- Your day target cannot be transported, however your night target can.\n- You can still attack your day target if they visit more than one person.\n- If one of your night targets are jailed, you will still watch the other target.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["nettle", "156"], "Florae", "Nettle", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 156");

		e.addField("Alignment", "Unique Florae Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may urticate a player at night, stinging anyone that visits them.");

		e.addField("Attributes:", "- Stings take one day to take effect.\n- Stings can be removed by protections that grant Powerful defense.\n- You may not urticate the same player twice.\n- You may urticate three times.\n- You cannot be roleblocked or controlled.\n- You will not attack your target.\n- Your attack dealt to visitors is indirect.\n- You will know how many people you sting.\n- Both stages of a sting will go through Basic defense.\n- Stings can be removed by the Doctor, Potion Master, Guardian Angel, Calendula, Lily, and Nightshade. They cannot be removed by the Bodyguard, Crusader, Trapper, Lavender, Mint, or Rosemary.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["wisteria", "157"], "Florae", "Wisteria", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 157");
		e.setColor("EBA8FF");

		e.addField("Alignment", "Unique Florae Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose one person during the day to lock in your Garden for the night, giving them Basic defense.");

		e.addField("Attributes:", "- You may anonymously talk with your captive at night.\n- Players can still visit your captive.\n- You may not lock the same person twice in a row.\n- You may only execute three times.\n- You cannot be controlled.\n- Wisteria cannot lock the Jailor, as Jailor cannot jail Wisteria.\n- Wisteria cannot attack Night 1.\n- If Jailor and Wisteria choose the same target, Wisteria has priority over the Jailor.\n- Protective roles can go on the captured target to prevent an execution. This will not make Wisteria lose an execution (including Guardian Angel watching over their target).\n- The Bodyguard or Trapper will not attack Wisteria, as the attack dealt is indirect.\n- Wisteria: This is the Wisteria's chat color. (#eba8ff)");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["calendula", "158"], "Florae", "Calendula", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 158");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may aid a player at night, granting them Powerful Defense.");

		e.addField("Attributes:", "- You will know the roles of the players that attack your target.\n- If your target is attacked, they will not know that they were attacked.\n- You will know if your target is attacked.\n- You will still protect from indirect attacks (such as Veteran on alert, or Ambusher attacking).\n- You will learn the roles of all players that attack your target, regardless if the attack is direct, indirect, or astral.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["lavender", "159"], "Florae", "Lavender", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 159");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may protect a player's house at night, providing Power Defense against one attack.");

		e.addField("Attributes:", "- You will know if your target was attacked.\n- If your target is directly attacked, you will attack anyone that visits your target.\n- You will know how many people you attack.\n- Your attacks dealt are indirect.\n- You can only protect from direct attacks.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["lily", "160"], "Florae", "Lily", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 160");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may plant a lily at a player's house on odd nights.");

		e.addField("Attributes:", "- Lilies heal your target and all of their visitors.\n- You may plant at your house.\n- Lilies cannot protect you or Plaguebearers from attacks.\n- When dead, you may plant a lily once.\n- You will not know if you protect any visitors to your target.\n- You cannot be protected by your own lilies. This applies to lilies from other Lily players as well.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["mint", "161"], "Florae", "Mint", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 161");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may sow a mint plant at a player's house at night.");

		e.addField("Attributes:", "- Mint plants take effect the day after they were planted.\n- Mints provide Powerful defense against all direct attacks.\n- When one of your minted targets is attacked, all mint plants will die and you cannot plant for another night.\n- Your plants protect players from all direct attacks (such as Mafioso, Serial Killer, and Pirate).\n- Your plants will not save players from indirect attacks (such as Medusa stone gazing at home and an Ambusher's attack). However, you will protect your target from direct astral attacks (such as the Hex Master's Basic attack when they have the Necronomicon).");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["rosemary", "162"], "Florae", "Rosemary", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 162");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may infuse a player at night, granting them Basic defense.");

		e.addField("Attributes:", "- When you infuse a player they will have Roleblock and Control immunity that night.\n- If your target is attacked you cannot infuse a player the next night.\n- You cannot be roleblocked or controlled.\n- Hypnotists will have access to the \"Roleblocked but immune\" and \"Controlled but immune\" messages since this role exists.\n- A Coven Leader will still know your target's role.\n- You do not protect from indirect or astral attacks.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["dicentra", "163"], "Florae", "Dicentra", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 163");

		e.addField("Alignment", "Florae Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may perform for a player at night.");

		e.addField("Attributes:", "- Performing at a player's house prevents anyone from visiting your target. This excludes attacking roles.\n- If a Serial Killer attacks your target, you will die instead.\n- You cannot be roleblocked.\n- You cannot prevent the following roles to visit your target: attackers (excluding Serial Killers and Ambushers), Pirates, Coven Leaders, Transporters, Jesters, Escorts, Consorts.\n- Your Last Will is still readable if you prevent a Serial Killer from killing your target.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["gardenia", "164"], "Florae", "Gardenia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 164");

		e.addField("Alignment", "Unique Florae Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may hand out gardenias to a player at night.");

		e.addField("Attributes:", "- Players with gardenias will also give out gardenias when they visit or are visited by a player.\n- When all living players have a gardenia, you will have the ability to reveal during the day.\n- Once you reveal, your vote counts as three.\n- Once you reveal you can hear whispers.\n- There will be a white flower symbol next to anyone's name who has a gardenia in the UI.\n- Players with a gardenia will not know they have one.\n- You do not give out a gardenia to players who visit you.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["nightshade", "165"], "Florae", "Nightshade", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 165");

		e.addField("Alignment", "Florae Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may use a heal or attack tonic at night.");

		e.addField("Attributes:", "- Attacking a player uses up your attack tonic.\n- Successfully healing a player from an attack uses up your heal tonic.\n- You may heal yourself once.\n- Visiting one player recharges your tonics once you have used them up.\n- If you are controlled you will use your selected tonic on the controller's target. If you did not select one you will do nothing.\n- If you are controlled when you are gathering resources, it will still count as a visit towards your recharge.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["phlox", "166"], "Florae", "Phlox", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 166");

		e.addField("Alignment", "Florae Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may purify a player at night, pardoning any of their trials the next day.");

		e.addField("Attributes:", "- You may purify yourself once.\n- While dead, you may purify a player once.\n- You may only purify three times.\n- Players will not be notified if they are purified.\n- Unlike the Guardian Angel, your visits are direct. This means you can't protect someone who is Jailed.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["primer", "167"], "Neutral", "Primer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 167");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the beginning of each day and each night, your role will be changed to the next prime-numbered role in the GIM thread but you keep this attribute.");

		e.addField("Goal:", "Whatever your prime-numbered role's win condition is");
	});

	register_role(["actual_inductor", "actualinductor", "inductor", "168"], "Town", "Actual Inductor", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 168");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night to see if they win with the Mayor.");

		e.addField("Attributes:", "- Roles that win with the Mayor win with the Mayor. Roles that don't win with the Mayor don't win with the Mayor. This only accounts for their current Goal and not any factors which would alter it.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["simon_bolivar", "simonbolivar", "simon", "bolivar", "spanish", "169"], "Neutral", "Simón Bolívar", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 169");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "At night, you can kill someone. You can also kill another person, but only if that person is from Spain.");

		e.addField("Attributes:", "- If you are in the game, everyone can speak Spanish without breaking the rules.");

		e.addField("Goal:", "Kill everyone who has a role from Spain.");
	});

	register_role(["illuminator", "170"], "Coven", "Illuminator", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 170");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Their role is revealed to everyone. You may use this ability at any time, and it resolves immediately, but you may only use it once each day/night cycle.");

		e.addField("Attributes:", "- If you have the Necronomicon, your target's role is changed to a random Coven role (after it's revealed).");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["stealer", "171"], "Neutral", "Stealer (Robber is too basic of a name ngl)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 171");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Steal an attribute from someone. Like literally just yoink it. Like actually just yoiink.");

		e.addField("Attributes:", "- None... yet >:D");

		e.addField("Goal:", "Steal three people's attributes and survive until the end of the game.");
	});

	register_role(["supergaurd", "172"], "Town", "Superguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 172\n*DON'T FUCK WITH M— fuck.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Unstoppable/Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep watch at a player's house at night.");

		e.addField("Attributes:", "- If your target is attacked, you will deal an Unstoppable attack to all of the attackers and give your target Powerful defense.\n- If you are killed by any means other than protection, you will deal a Basic attack to your target and fail to defend them.\n- You may not protect yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["keymaster", "173"], "Town", "Keymaster", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 173\n*Sometimes the best protection is just staying in your own little cave of solitude.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player a key each day.");

		e.addField("Attributes:", "- Players given a key will be able to lock themselves in their house any night after they have been given a key.\n- When a player locks themselves inside of their house, nobody will be able to target them, but they may not perform any of their other night abilities **unless** it is a self-targeting ability.\n- Each key may only be used once.\n- You may give out five keys in total and one key to yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["eternity", "174"], "Neutral", "Eternity", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 174");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Starting on night 3, an eternity starts.");

		e.addField("Attributes:", "- From the moment Night 3 ends until your death or the end of the game, the day and night happens at the same time.\n- You can attack twice per day-night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["reroler", "reroller", "175"], "Neutral", "Reroler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 175");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Reroll someone's role.");

		e.addField("Attributes:", "- They can't have the same role.");

		e.addField("Goal:", "Reroll all living players' roles.");
	});

	register_role(["wm_trapper", "wmtrapper", "trapper", "176"], "Town", "WM Trapper", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 176\n*Workin' nine to five*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Set a trap up at someone’s house.");

		e.addField("Attributes:", "- If a player with a trap is visited, the trap will trigger, telling you the role of every visitor.\n- If a player with a trap is attacked, the trap will trigger, attacking the attacker and granting your target Powerful defense.\n- Traps take one day to build.\n- You can tear down a trap if you choose to do so.\n- You may only have one trap out at a time.\n- You have one bulletproof vest that gives you Basic defense.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ebay_marketer", "ebaymarketer", "ebay", "e-bay", "marketer", "177"], "Neutral", "E-Bay Marketer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 177");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Harvest someone's organs each night.\n- Sell the organs you have on E-Bay.");

		e.addField("Attributes:", "- Killing someone grants you one organ.");

		e.addField("Goal:", "Sell your organs, and make sure you sell more organs than there are people currently alive.");
	});

	register_role(["royal", "178"], "Neutral", "Royal", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 178");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Each night, attack a player.");

		e.addField("Attributes:", "- Once per game, during the day, instantly execute whoever has the most votes at the time.\n- If they're Town, you can attack twice per night for the rest of the game.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["amethyst", "179"], "Rock", "Amethyst", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 179");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a Rock every night.");

		e.addField("Attributes:", "- If the Rock Is a Rock Killing and the target survives the attack, they will be cursed. Cursed players will be dealt an Basic Attack 2 days after. Otherwise, grant your Rock Basic Defense.\n- You may not follow a Rock twice in a row.\n-If you're the only Rock left standing, you will autofollow yourself alongside the Factional rock kill every night.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["hitman_with_the_hit_plan", "hitmanwiththehitplan", "hitplan", "180"], "Neutral", "Hitman With The Hit Plan", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 180");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Halt all attacks for a night.");

		e.addField("Attributes:", "- You will attack all attack targets with their respective effects and attack values the following night.\n- You may only halt attacks twice.");

		e.addField("Goal:", "Kill 3 people.");
	});

	register_role(["cruella_de_vil", "cruelladevil", "cruella", "181"], "Neutral", "Cruella De Vil", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 181\n*Watching you from underneath a rokk.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night to determine if they are in possession of a puppy.");

		e.addField("Attributes:", "- At the end of Night 1, all players that were visited by any player will receive a puppy. They will know they received one.\n- Each night, select a player to check them for puppies. If they have one, you will roleblock them and take it, and you will gain Basic Defense for the night.\n- If a player with a puppy attempts to visit you, their ability will fail. Additionally, any visits to you on Night 1 will fail.");

		e.addField("Goal:", "Make sure that no players alive at the end of the game have a puppy.");
	});

	register_role(["two_grams_of_protein", "twogramsofprotein", "grams", "protein", "182"], "Town", "Two Grams of Protein", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 182");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, pick a player. Any player that visits you or them gains Basic Defense and immunity to all other negative effects for tonight and the next.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fate", "183"], "Neutral", "Fate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 183");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Every night, choose three of the following. A random one of the chosen three will be announced at the start of the next day and then take effect at the start of the next night.\n> - All other players perpetually lose all Defense. Other players can't have Defense or be given Defense for the rest of the game.\n> - All other players perpetually lose the ability to receive any messages during the night.\n> - All other players will have completely random targets for the next night.\n> - 75% of other players at random will be dealt a Powerful attack. \n> - All other players perpetually lose all attributes, except a random other player, who gains all attributes lost this way.\n> - Shuffle everyones' abilities and attributes except yours.\n> - All other players get a second role in addition to their first one.");

		e.addField("Goal:", "Cause infinite chaos (as determined by the host).");
	});

	register_role(["flying_pumpkin", "flyingpumpkin", "pumpkin", "tfptslbooia", "184"], "Town", "The Flying Pumpkin That Shoots Laser Beams Out Of Its Ass", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 184\n*wh—*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None/Basic", true);

		e.addField("Abilities:", "- In the night, you may shoot somebody. This has a 25% chance to miss and do nothing.\n- Aim: Your next attack will never miss if it hits an evil target, and it will have a 75% chance to miss if you attack someone innocent. (1 use)");

		e.addField("Attributes:", "- You have a 25% chance to survive each attack against you.")

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["forum_editor", "forumeditor", "forum", "185"], "Mafia", "Forum Editor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 185");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose two non-Mafia roles from the same faction. At the start of the next day, the first of those roles will be replaced by the second one. The change will be publicly announced.");

		e.addField("Attributes:", "- If you're redirected, you will choose your target's role as the role to be replaced. If they're a Mafia role, your ability will fail.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["hangman", "186"], "Town", "Hangman", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 186");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to cancel a lynch.");

		e.addField("Attributes:", "- If you attempt to cancel a lynch on a Town, Neutral Evil or Neutral Benign role, the lynch will not occur and night will happen immediately.\n- If the target is not Town or Neutral Evil/Benign, both you and the lynch target will die.\n- You may cancel two lynches.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["pacifist", "187"], "Neutral", "Pacifist", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 187");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- At night, visit a player, and attempt to befriend them by permanently reducing their Attack by one level.\n- In the day, decide if you wish to Bandage yourself or not, granting yourself Powerful Defense and removing negative effects in the following night. (2 use)");

		e.addField("Attributes:", "- If you visit a player and their Attack level is or becomes None, they will become Befriended.\n- Any target you visit will not learn what you did unless they became Befriended by it.\n- Once all living players are unable to attack, you will end the game. Anybody who wasn't Befriended by you will only be able to win if they already satisfied their original goal. Otherwise, they will lose.");

		e.addField("Befriended:", "This effect prevents you from using any form of attack whatsoever. However, you will gain an alternate win condition: \"Live to see the Pacifist (187) win the game.\"");

		e.addField("Goal:", "Live to see every surviving player become unable to attack.");
	});

	register_role(["beelzebub", "beel", "188"], "FallenAngel", "Beelzebub", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 188");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- If you attack a Fallen Angel, you will also attack their neighbours other than yourself, all of their other visitors, and whoever they visited that night.\n- If you attack a non-Fallen Angel, you will also learn their role.\n**Sin of Envy** — If you're the last Fallen Angel remaining, you gain all the non-Sin abilities and attributes of all other Fallen Angel roles, including ones that weren't in the game, and can use up to three different abilities each night.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["google_translate", "googletranslate", "japanese", "french", "189"], "Neutral", "Google Translate", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 189");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a language to translate someone every night.");

		e.addField("Attributes:", "- They will still be able to communicate, but will have to translate any messages they wish to send into the language you have chosen. They will be notified.\n- If they don't, they receive a powerful attack.\n- Once you reach your goal, you will die, but your translations will persist.");

		e.addField("Goal:", "Create a misunderstanding.");
	});

	register_role("190", "Other", "Super Idol", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 190\nThis role doesn't really exist. Moving on.");
	});

	register_role(["caroler", "191"], "Town", "Caroler", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 191\n*Crimmas!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to sing a carol to one player during the night. (3 use, do not lose a use if ability fails)");

		e.addField("Attributes:", "- If your target does not visit another player, they will receive a list of three names. One of these names will be evil. If they visit another player, your ability will fail.\n- You may sing yourself a carol once, and this will count as a use of your ability.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crystal", "192"], "Rock", "Crystal", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 192");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Crystalize a player every full moon.");

		e.addField("Attributes:", "- They will be dealt a powerfull attack, and their will and role will be obscured.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["obsidian", "193"], "Rock", "Obsidian", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 193");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distract someone with an obsidian knife.\n- Hit them with a baseball bat in your other hand.");

		e.addField("Attributes:", "- Distracting someone with an obsidian knife roleblocks them.\n- Hitting them with a baseball bat in your other hand kills them.\n- Can use multiple abilities, but may only use each ability once per night.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["runner", "194"], "Town", "Runner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 194\n*Running out of patience for your nonsense.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run around the Town during the day. (1 use)");

		e.addField("Attributes:", "- When you run around the Town, you will learn the name and roles of three people. You will not learn who is which role.\n- Your run will always include at least one Town role and one role that cannot win with the Town. Any players that are you informed about that cannot win with the Town will be informed that they noticed a Runner running around the Town and any Town roles that they discovered during their run.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["village_idiot", "villageidiot", "idiot", "copeium", "bad_role", "195"], "Neutral", "Village Idiot", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 195");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Trollos");

		e.addField("Attributes:", "- You cannot be given notifications, nor join any Mafia, Coven, Vampire, Locust, etc. chat. The respective factions will furthermore not be told of your existence.\n- You will copy the goal, abilities, and additional attributes of another role. You won't know what you got, though :D\n- You may visit people, even if you weren't given an ability that would give that visit an effect.");

		e.addField("Goal:", "Copeium");
	});

	register_role(["vessel", "196"], "Town", "Vessel", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 196");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a dead player. You will deal a Powerful attack to the last player they visited. Your ability fails if your target did not visit anyone the night they died. If your target visited multiple people on the night they died, attack all of them.\n- During the day, choose a dead player. The following night, they will be able to choose a player to deal a Basic attack to. You will perform this attack instead of your normal night ability. (1 use)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["president", "pres", "the_president", "thepresident", "197"], "Town", "The President", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 197\n*My favorite number is 47.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give two players citizenship at night.");

		e.addField("Attributes:", "- If either of your targets are Town Support, they will both gain a charge of a random GIM Town Investigative role.\n- If either of your targets are Town Protective, they will both be granted Powerful Defense for two nights. They will know about this.\n- If either of your targets are Town Investigative, they will both be revealed a role besides each other or The President that is still alive.\n- If either of your targets are Town Killing, they will both be granted a 1-shot Vigi shot that they must use the next night or they lose it. If they kill a Town, they will be roleblocked for two nights after.\n- If either of your are targets are Town Power, they will both be roleblocked. The one that isn't Town Power will be roleblocked the next night as well.\n- If either of your targets are Town Casual, all visits on them tonight and tomorrow night will be prevented, excluding your visit and if they visit each other.");

		e.addField("Attributes (cont.)", "- If either of your targets are not Town, you will be converted into a Citizen after 2 nights, and your ability is canceled for the night.\n- You may not give yourself citizenship.\n- You have roleblock immunity.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["odd_keyrock", "oddkeyrock", "keyrock", "198"], "Rock", "Odd Keyrock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 198");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon Spiritomb each full moon. A new player named Spiritomb will be added with a random role, but their win condition is changed to that of the Rocks. The host will play all instances of Spiritomb.");

		e.addField("Attributes:", "- You may only summon Spiritomb 108 times.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["coach", "199"], "Town", "Coach", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 199\n*There's no crying in Salem.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to coach each night.");

		e.addField("Attributes:", "- The night you coach someone, they will gain a buff of their abilities on the night you coach them depending on what their subalignment is.\n- Investigative roles will receive completely accurate results regardless of any attempts to alter the results.\n- Protective roles will be able to protect against any type of attack, including Unstoppable and Astral. If your target kills an attacker that performed an attack that they normally could not stop, they will not kill the attacker.\n- Killing roles will have their attack value raised to the next-highest value.\n- Support roles will have their ability succeed regardless of any other abilities used on them unless it creates a paradox.\n- Any subalignment not listed will not receive a buff.\n- You will be notified if your coaching is effective.\n- Your target will only be notified that they were coached if the coaching is effective.\n- You may not coach yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["devastation_kami", "devastationkami", "devastation", "kami", "200"], "Neutral", "Devastation Kami", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 200");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "+2: Choose a player. You learn a random one of their abilities and gain one use of that ability, but you may use it at any time and it resolves immediately. They lose that ability for the rest of the game.\n+1: Deal an Unstoppable attack to any player.\n-7: Every other player chooses two of their abilities and attributes. They lose those abilities or attributes. \n-12: All other players are roleblocked through immunities for tonight and lose all abilities, attributes, immunities, attacks, and defense for the rest of the game.");

		e.addField("Attributes:", "- All Immunities\n**Divine Power** — You start with 7 power. When you use an ability, add or subtract power according to the ability. You may not use abilities that cost more power than you have. If you would be attacked, instead the attacker learns that your Defense was too strong and you lose power equal to the level of the attack. (Basic: 1, Powerful: 2, Unstoppable: 3, Overkill: 4. You still die if you're lynched.)");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
