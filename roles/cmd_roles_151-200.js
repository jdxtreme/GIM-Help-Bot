module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["iris", "151"], "Town", "Iris", (e) =>
	{
		e.setDescription("Post 151");

		e.addField("Alignment", "Florae/Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may observe someone at night.");

		e.addField("Attributes:", "- On odd nights you will know who visits your target.\n- On even nights you will know who your target visits.\n- When dead, you may select a player once to give them your previous result.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["sage", "152"], "Town", "Sage", (e) =>
	{
		e.setDescription("Post 152");

		e.addField("Alignment", "Florae/Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn about the Florae each night or vision someone’s goal.");

		e.addField("Attributes:", "- Each night you are alive you will be notified how many players that are in your faction are alive.\n- On Full Moon nights, you may vision a player. You will know if your target is good or evil.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["thyme", "153"], "Town", "Thyme", (e) =>
	{
		e.setDescription("Post 153");

		e.addField("Alignment", "Florae/Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may spy on someone's house at night.");

		e.addField("Attributes:", "- You will know all the roles of the players that visit your target.\n- Your visit is Astral and ignores Jail.\n- You are not deceived by Douses.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["azalea", "154"], "Town", "Azalea", (e) =>
	{
		e.setDescription("Post 154");

		e.addField("Alignment", "Florae/Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may shoot a target at night, dealing a Powerful attack.");

		e.addField("Attributes:", "- If someone visits your target, you will shoot them instead.\n- If more than one player visits your target, you will shoot no one.\n- You may only shoot two times.\n- You will not lose a bullet if more than one person visits your target.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["dahlia", "155"], "Town", "Dahlia", (e) =>
	{
		e.setDescription("Post 155");

		e.addField("Alignment", "Florae/Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may inspect a player during the day.\n- Choose another two players at night.");

		e.addField("Attributes:", "- You will attack your day target if they visit either of your night targets.\n- You may watch yourself.\n- When dead, you may choose one player at night to deliver a Basic attack to them.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["nettle", "156"], "Town", "Nettle", (e) =>
	{
		e.setDescription("Post 156");

		e.addField("Alignment", "Unique Florae/Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may urticate a player at night, stinging anyone that visits them.");

		e.addField("Attributes:", "- Stings take one day to take effect.\n- Stings can be removed by protections that grant Powerful defense.\n- You may not urticate the same player twice.\n- You may urticate three times.\n- You cannot be roleblocked or controlled.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["wisteria", "157"], "Town", "Wisteria", (e) =>
	{
		e.setDescription("Post 157");

		e.addField("Alignment", "Unique Florae/Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose one person during the day to lock in your Garden for the night, giving them Basic defense.");

		e.addField("Attributes:", "- You may anonymously talk with your captive at night.\n- Players can still visit your captive.\n- You may not lock the same person twice in a row.\n- You may only execute three times.\n- You cannot be controlled.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["calendula", "158"], "Town", "Calendula", (e) =>
	{
		e.setDescription("Post 158");

		e.addField("Alignment", "Florae/Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may aid a player at night, granting them Powerful Defense.");

		e.addField("Attributes:", "- You will know the roles of the players that attack your target.\n- If your target is attacked, they will not know that they were attacked.\n- You will know if your target is attacked.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["lavender", "159"], "Town", "Lavender", (e) =>
	{
		e.setDescription("Post 159");

		e.addField("Alignment", "Florae/Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may protect a player’s house at night.");

		e.addField("Attributes:", "- Protecting your target provides them Powerful defense against one attack.\n- If your target is attacked you will deliver a Basic attack to their attacker.\n- If your target's attacker has defense or if they’re attacked more than once you will not attack anyone but learn the names of all of your target's attackers.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["lily", "160"], "Town", "Lily", (e) =>
	{
		e.setDescription("Post 160");

		e.addField("Alignment", "Florae/Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may plant a lily at a player's house on odd nights.");

		e.addField("Attributes:", "- Lilies heal your target and all of their visitors.\n- You may plant at your house.\n- Lilies cannot protect you or Plaguebearers from attacks.\n- When dead, you may plant a lily once.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["mint", "161"], "Town", "Mint", (e) =>
	{
		e.setDescription("Post 161");

		e.addField("Alignment", "Florae/Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may sow a mint plant at a player's house at night.");

		e.addField("Attributes:", "- Mint plants take effect the day after they were planted.\n- Mints provide Powerful defense against all direct attacks.\n- When one of your minted targets is attacked, all mint plants will die and you cannot plant for another night.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["rosemary", "162"], "Town", "Rosemary", (e) =>
	{
		e.setDescription("Post 162");

		e.addField("Alignment", "Florae/Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may infuse a player at night, granting them Basic defense.");

		e.addField("Attributes:", "- When you infuse a player they will have Roleblock and Control immunity that night.\n- If your target is attacked you cannot infuse a player the next night.\n- You cannot be roleblocked or controlled.\n- You do not protect from indirect or astral attacks.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["dicentra", "163"], "Town", "Dicentra", (e) =>
	{
		e.setDescription("Post 163");

		e.addField("Alignment", "Florae/Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may perform for a player at night.");

		e.addField("Attributes:", "- Performing at a player's house prevents anyone from visiting your target. This excludes attacking roles.\n- If a Serial Killer attacks your target, you will die instead.\n- You cannot be roleblocked.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["gardenia", "164"], "Town", "Gardenia", (e) =>
	{
		e.setDescription("Post 164");

		e.addField("Alignment", "Unique Florae/Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may hand out gardenias to a player at night.");

		e.addField("Attributes:", "- Players with gardenias will also give out gardenias when they visit or are visited by a player.\n- When all living players have a gardenia, you will have the ability to reveal during the day.\n- Once you reveal, your vote counts as three.\n- Once you reveal you can hear whispers.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["nightshade", "165"], "Town", "Nightshade", (e) =>
	{
		e.setDescription("Post 165");

		e.addField("Alignment", "Florae/Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may use a heal or attack tonic at night.");

		e.addField("Attributes:", "- Attacking a player uses up your attack tonic.\n- Successfully healing a player from an attack uses up your heal tonic.\n- You may heal yourself once.\n- Visiting one player recharges your tonics once you have used them up.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["phlox", "166"], "Town", "Phlox", (e) =>
	{
		e.setDescription("Post 166");

		e.addField("Alignment", "Florae/Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may purify a player at night.");

		e.addField("Attributes:", "- When a player is purified they cannot be voted the next day. This can be done while dead.\n- Players will be notified if they are purified.\n- You may purify yourself once.\n- You may only purify three times.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["primer", "167"], "Neutral", "Primer", (e) =>
	{
		e.setDescription("Post 167");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the beginning of each day and each night, your role will be changed to the next prime-numbered role in the GIM thread but you keep this attribute.");

		e.addField("Goal:", "Whatever your prime-numbered role's win condition is");
	});

	register_role(["voidling", "168"], "Neutral", "Voidling", (e) =>
	{
		e.setDescription("Post 168");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a player into the void at night.");

		e.addField("Attributes:", "- They're removed from the game entirely, and re-added to the game at the beginning of the next night.\n- All actions that happen to them that night will fail, but won't give notifications that they failed.\n- You may send yourself into the void.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["simon_bolivar", "simonbolivar", "simon", "bolivar", "spanish", "169"], "Neutral", "Simón Bolívar", (e) =>
	{
		e.setDescription("Post 169");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "At night, you can kill someone. You can also kill another person, but only if that person is from Spain.");

		e.addField("Attributes:", "- If you are in the game, everyone can speak Spanish without breaking the rules.");

		e.addField("Goal:", "Kill everyone who has a role from Spain.");
	});

	register_role(["scumcaster_mage", "scumcastermage", "scumcaster", "170"], "Coven", "Scumcaster Mage", (e) =>
	{
		e.setDescription("Post 170");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Their role is revealed to everyone.");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately, but you may only use it once every day/night cycle.\n- If you have the Necronomicon, your target's role is changed to a random Coven role (after it's revealed).");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["stealer", "171"], "Neutral", "Stealer (Robber is too basic of a name ngl)", (e) =>
	{
		e.setDescription("Post 171");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Steal an attribute from someone. Like literally just yoink it. Like actually just yoiink.");

		e.addField("Attributes:", "- None... yet >:D");

		e.addField("Goal:", "Steal three people's attributes and survive until the end of the game.");
	});

	register_role(["supergaurd", "172"], "Town", "Superguard", (e) =>
	{
		e.setDescription("Post 172");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Unstoppable/Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep watch at a player's house at night.");

		e.addField("Attributes:", "- If your target is attacked, you will deal an Unstoppable attack to all of the attackers and give your target Powerful defense.\n- If you are killed by any means other than protection, you will deal a Basic attack to your target and fail to defend them.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["keymaster", "173"], "Town", "Keymaster", (e) =>
	{
		e.setDescription("Post 173");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player a key each day.");

		e.addField("Attributes:", "- Players given a key will be able to lock themselves in their house any night after they have been given a key.\n- When a player locks themselves inside of their house, nobody will be able to target them, but they will be roleblocked through immunity.\n- Once a key is used, it cannot be used again.\n- You may give out five keys.\n- You may give yourself one key.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["eternity", "174"], "Neutral", "Eternity", (e) =>
	{
		e.setDescription("Post 174");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Starting on night 3, an eternity starts.");

		e.addField("Attributes:", "- From the moment Night 3 ends until your death or the end of the game, the day and night happens at the same time.\n- You can attack twice per day-night.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["reroler", "reroller", "175"], "Neutral", "Reroler", (e) =>
	{
		e.setDescription("Post 175");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Reroll someone's role.");

		e.addField("Attributes:", "- They can't have the same role.");

		e.addField("Goal:", "Reroll all living players' roles.");
	});

	register_role(["wm_crusader", "wmcrusader", "176"], "Town", "WM Crusader", (e) =>
	{
		e.setDescription("Post 176");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Protect one person during the night.");

		e.addField("Attributes:", "- You grant your target Powerful defense.\n- You attack one person that visits your target on the same night.\n- You will know if your target is attacked.\n- You may protect yourself once, attacking one of your own visitors and granting yourself Powerful defense.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["ebay_marketer", "ebaymarketer", "ebay", "e-bay", "marketer", "177"], "Neutral", "E-Bay Marketer", (e) =>
	{
		e.setDescription("Post 177");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Harvest someone's organs each night.\n- Sell the organs you have on E-Bay.");

		e.addField("Attributes:", "- Killing someone grants you one organ.");

		e.addField("Goal:", "Sell your organs, and make sure you sell more organs than there are people currently alive.");
	});

	register_role(["royal", "178"], "Neutral", "Royal", (e) =>
	{
		e.setDescription("Post 178");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Each night, attack a player.");

		e.addField("Attributes:", "- Once per game, during the day, instantly execute whoever has the most votes at the time.\n- If they're Town, you can attack twice per night for the rest of the game.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["amethyst", "179"], "Rock", "Amethyst", (e) =>
	{
		e.setDescription("Post 179");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a Rock every night.");

		e.addField("Attributes:", "- If the Rock Is a Rock Killing and the target survives the attack, they will be cursed. Cursed players will be dealt an Basic Attack 2 days after. Otherwise, grant your Rock Basic Defense.\n- You may not follow a Rock twice in a row.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", "Rock Goal");
	});

	register_role(["hitman_with_the_hit_plan", "hitmanwiththehitplan", "hitplan", "180"], "Neutral", "Hitman With The Hit Plan", (e) =>
	{
		e.setDescription("Post 180");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Halt all attacks for a night.");

		e.addField("Attributes:", "- You will attack all attack targets with their respective effects and attack values the following night.\n- You may only halt attacks twice.");

		e.addField("Goal:", "Kill 3 people.");
	});

	register_role(["cruella_de_vil", "cruelladevil", "cruella", "181"], "Neutral", "Cruella De Vil", (e) =>
	{
		e.setDescription("Post 181");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night to determine if they are in possession of a puppy.");

		e.addField("Attributes:", "- At the end of Night 1, all players that were visited will receive a puppy. They will know they received one.\n- Each night, select a player to check them for puppies. If they have one, you will roleblock them and take it.");

		e.addField("Goal:", "Make sure that no players alive at the end of the game have a puppy.");
	});

	register_role(["two_grams_of_protein", "twogramsofprotein", "grams", "protein", "182"], "Town", "Two Grams of Protein", (e) =>
	{
		e.setDescription("Post 182");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, pick a player. Any player that visits you or them gains Basic Defense and immunity to all other negative effects for tonight and the next.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["fate", "183"], "Neutral", "Fate", (e) =>
	{
		e.setDescription("Post 183");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Every night, choose three of the following. A random one of the chosen three will be announced at the start of the next day and then take effect at the start of the next night.\n> - All other players perpetually lose all Defense. Other players can't have Defense or be given Defense for the rest of the game.\n> - All other players perpetually lose the ability to receive any messages during the night.\n> - All other players will have completely random targets for the next night.\n> - 75% of other players at random will be dealt a Powerful attack. \n> - All other players perpetually lose all attributes, except a random other player, who gains all attributes lost this way.\n> - Shuffle everyones' abilities and attributes except yours.\n> - All other players get a second role in addition to their first one.");

		e.addField("Goal:", "Cause infinite chaos (as determined by the host).");
	});

	register_role(["flying_pumpkin", "flyingpumpkin", "pumpkin", "tfptslbooia", "184"], "Town", "The Flying Pumpkin That Shoots Laser Beams Out Of Its Ass", (e) =>
	{
		e.setDescription("Post 184");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None/Basic", true);

		e.addField("Abilities:", "- In the night, you may shoot somebody. This has a 25% chance to miss and do nothing.\n- Aim: Your next attack will never miss if it hits an evil target, and it will have a 75% chance to miss if you attack someone innocent. (1 use)");

		e.addField("Attributes:", "- You have a 25% chance to survive each attack against you.")

		e.addField("Goal:", "Town Goal");
	});

	register_role(["forum_editor", "forumeditor", "forum", "185"], "Mafia", "Forum Editor", (e) =>
	{
		e.setDescription("Post 185");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose two non-Mafia roles from the same faction. At the start of the next day, the first of those roles will be replaced by the second one, but its win condition will remain the same. The change will be publicly announced.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["hangman", "186"], "Town", "Hangman", (e) =>
	{
		e.setDescription("Post 186");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to cancel a lynch.");

		e.addField("Attributes:", "- If you attempt to cancel a lynch on a Town, Neutral Evil or Neutral Benign role, the lynch will not occur and night will happen immediately.\n- If the target is not Town or Neutral Evil/Benign, both you and the lynch target will die.\n- You may cancel two lynches.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["hammerman", "187"], "Town", "Hammerman", (e) =>
	{
		e.setDescription("Post 187");

		e.addField("Alignment", "Mafia/Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Be the hammering vote on a player.");

		e.addField("Attributes:", "- Your role is either aligned with the Town or the Mafia, chosen at random.\n- If a player is two votes away from being put on the stand, your vote will count as two.\n- The Town will know that a Hammerman pushed someone to the gallows early.\n- Your vote counts as two when determining who is innocent or guilty.\n- The Town will not know about your extra vote unless it causes the player to be lynched.");

		e.addField("Goal:", "Town or Mafia Goal, whichever you belong to.");
	});

	register_role(["hammerman", "187"], "Mafia", "Hammerman", (e) =>
	{
		e.setDescription("Post 187");

		e.addField("Alignment", "Mafia/Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Be the hammering vote on a player.");

		e.addField("Attributes:", "- Your role is either aligned with the Town or the Mafia, chosen at random.\n- If a player is two votes away from being put on the stand, your vote will count as two.\n- The Town will know that a Hammerman pushed someone to the gallows early.\n- Your vote counts as two when determining who is innocent or guilty.\n- The Town will not know about your extra vote unless it causes the player to be lynched.");

		e.addField("Goal:", "Town or Mafia Goal, whichever you belong to.");
	});

	register_role(["oddkeyrockcaster_mage", "oddkeyrockcastermage", "oddkeyrockcaster", "oddkeyrock", "188"], "Coven", "Oddkeyrockcaster Mage", (e) =>
	{
		e.setDescription("Post 188");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose another player. For the next 24 hours, their name is changed to Spiritomb and their role is changed to Odd Keyrock.");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately, but you may only use it once every day/night cycle.\n- If you have the Necronomicon, instead your target's name isn't changed and their role is changed to Odd Keyrock but it wins with the Coven and the effect is permanent.");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["google_translate", "googletranslate", "japanese", "french", "189"], "Neutral", "Google Translate", (e) =>
	{
		e.setDescription("Post 189");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a language to translate someone every night.");

		e.addField("Attributes:", "- They will still be able to communicate, but will have to translate any messages they wish to send into the language you have chosen. They will be notified.\n- If they don't, they receive a powerful attack.\n- Once you reach your goal, you will die, but your translations will persist.");

		e.addField("Goal:", "Create a misunderstanding.");
	});

	register_role("190", "Other", "Super Idol", (e) =>
	{
		e.setDescription("Post 190\nThis role doesn't really exist. Moving on.");
	});

	register_role(["caroler", "191"], "Town", "Caroler", (e) =>
	{
		e.setDescription("Post 191");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to sing a carol to the Town during the night.");

		e.addField("Attributes:", "- When you sing a carol, the Town will be given a list of three players at the start of the following day. At least one of these players will be evil.\n- You may only use your ability twice.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["crystal", "192"], "Rock", "Crystal", (e) =>
	{
		e.setDescription("Post 192");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Crystalize a player every full moon.");

		e.addField("Attributes:", "- They will be dealt a powerfull attack, and their will and role will be obscured.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", "Rock Goal");
	});

	register_role(["obsidian", "193"], "Rock", "Obsidian", (e) =>
	{
		e.setDescription("Post 193");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distract someone with an obsidian knife.\n- Hit them with a baseball bat in your other hand.");

		e.addField("Attributes:", "- Distracting someone with an obsidian knife roleblocks them.\n- Hitting them with a baseball bat in your other hand kills them.\n- Can use multiple abilities, but may only use each ability once per night.");

		e.addField("Goal:", "Rock Goal");
	});

	register_role(["runner", "194"], "Town", "Runner", (e) =>
	{
		e.setDescription("Post 194");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run around the Town during the day.");

		e.addField("Attributes:", "- When you run around the Town, you will learn the name and roles of three people. You will not learn who is which role.\n- You may run around the town twice.");

		e.addField("Goal:", "Town Goal");
	});

	register_role("195", "Other", "Village Idiot", (e) =>
	{
		e.setDescription("Post 195\nFortunately for you, 'Copium' is not a valid goal that can spawn in a game.");
	});

	register_role(["addlepate", "addle", "196"], "Town", "Addlepate", (e) =>
	{
		e.setDescription("Post 196");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Take the role of a random GIM role each night.");

		e.addField("Attributes:", "- At the beginning of each night, you will be given a random role from the GIM thread. You will be given all statistics, immunities, abilities, and attributes of that role.\n- No matter what role you receive, you will always be Town-aligned. You can become a role even if it is unique or part of an evil faction.\n- If your role has a specific condition that needs to be met, you will bypass those conditions. For example, if you may only perform an ability on a full moon night, you may perform the ability even if it's a non-full moon night.\n- You may not take the role of a role deemed unbalanced by the Role Jury.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["president", "pres", "197"], "Town", "The President", (e) =>
	{
		e.setDescription("Post 197");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give two players citizenship at night.");

		e.addField("Attributes:", "- If either of your targets are Town Support, they will both converted into a random GIM Town Investigative.\n- If either of your targets are Town Protective, they will both be granted Powerful Defense for two nights. They will know about this.\n- If either of your targets are Town Investigative, they will both be revealed a role besides each other or The President that is still alive.\n- If either of your targets are Town Killing, they will both be granted a 1-shot Vigi shot that they must use the next night. If they kill a Town, they will be roleblocked for two nights after.\n- If either of your are Town Power, they will both be roleblocked. The one that isn't Town Power will be roleblocked the next night as well.\n- If either of your targets are not Town, you will be converted into a Citizen after 2 nights.\n- Roleblock Immunity");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["odd_keyrock", "oddkeyrock", "keyrock", "198"], "Rock", "Odd Keyrock", (e) =>
	{
		e.setDescription("Post 198");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon Spiritomb each night. A new player named Spiritomb will be added with a random role, but their win condition is changed to that of the Rocks. The host will play all instances of Spiritomb.");

		e.addField("Goal:", "Rock Goal");
	});

	register_role(["coach", "199"], "Town", "Coach", (e) =>
	{
		e.setDescription("Post 199");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to coach each night.");

		e.addField("Attributes:", "- The night you coach someone, they will gain a buff of their abilities on the night you coach them depending on what their subalignment is.\n- Investigative roles will receive completely accurate results regardless of any attempts to alter the results.\n- Protective roles will be able to protect against any type of attack, including Unstoppable and Astral. If your target kills an attacker that performed an attack that they normally could not stop, they will not kill the attacker.\n- Killing roles will have their attack value raised to the next-highest value.\n- Support roles will have their ability succeed regardless of any other abilities used on them unless it creates a paradox.\n- Any subalignment not listed will not receive a buff.\n- You will be notified if your coaching is effective.\n- Your target will only be notified that they were coached if the coaching is effective.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["devastation_kami", "devastationkami", "devastation", "kami", "200"], "Neutral", "Devastation Kami", (e) =>
	{
		e.setDescription("Post 200");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "+2: Choose a player. You learn a random one of their abilities and gain one use of that ability, but you may use it at any time and it resolves immediately. They lose that ability for the rest of the game.\n+1: Deal an Unstoppable attack to any player.\n-7: Every other player chooses two of their abilities and attributes. They lose those abilities or attributes. \n-12: All other players are roleblocked through immunities for tonight and lose all abilities, attributes, immunities, attacks, and defense for the rest of the game.");

		e.addField("Attributes:", "- All Immunities\n**Divine Power** — You start with 7 power. When you use an ability, add or subtract power according to the ability. You may not use abilities that cost more power than you have. If you would be attacked, instead the attacker learns that your Defense was too strong and you lose power equal to the level of the attack. (Basic: 1, Powerful: 2, Unstoppable: 3, Overkill: 4. You still die if you're lynched.)");

		e.addField("Goal:", "Kill all who would oppose you.");
	});
};
