module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["white_king", "whiteking", "white", "king", "wk", "2251"], "Neutral", "White King", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2251");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a move in the game of chess. Usable on the first move, or after Black makes a move. This ability can be used multiple times per day or night.");

		e.addField("Attributes:", "- A Black King will always spawn if you exist.\n- You can only spawn when the total player count is 16 or higher.\n- If less than 32 players are in the game, first ensure that all non-pawn pieces have a player, then assign all remaining players to pawns. Players can only be d or e pawns if no other pieces are left.\n- You do not affect the spawning of Good/Evil/Neutral/Psycho Kings (2028/30/31/32).\n- At the beginning of the game, your presence will be announced. 8 players will be made pawns, 2 rooks, 2 knights, 2 bishops, and 1 a queen. You are the White King. A player cannot be multiple pieces, and also cannot be a White and Black piece at the same time. Players are notified if they are a piece. You know who your pieces are.");

		e.addField("Attributes (cont.):", "- \"Making a move\" means making a move in a public game of Chess. The current board and list of moves is always public.\n- If a piece is captured, that player is dealt an Overkill attack instantly.\n- If you are checkmated, Black King attacks you, and roleblocks all of your living pieces tonight.\n- Roleblock, control, and redirect immune, because you technically do not target anyone.\n- If you die, you may make two more moves before the enemy wins by default.\n- You must make at least one move per phase. If you don't, the host will find the worst possible move for you to make, and that move will automatically be made. This can be overridden for specific circumstances, such as it never being your turn.");

		e.addField("Goal:", "Checkmate the enemy at all costs.");
	});

	register_role(["black_king", "blackking", "black", "king", "bk", "2252"], "Neutral", "White King", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2252");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a move in the game of chess. Usable after White makes a move. This ability can be used multiple times per day or night.");

		e.addField("Attributes:", "- A White King will always spawn if you exist.\n- You can only spawn when the total player count is 16 or higher.\n- If less than 32 players are in the game, first ensure that all non-pawn pieces have a player, then assign all remaining players to pawns. Players can only be d or e pawns if no other pieces are left.\n- You do not affect the spawning of Good/Evil/Neutral/Psycho Kings (2028/30/31/32).\n- At the beginning of the game, your presence will be announced. 8 players will be made pawns, 2 rooks, 2 knights, 2 bishops, and 1 a queen. You are the Black King. A player cannot be multiple pieces, and also cannot be a White and Black piece at the same time. Players are notified if they are a piece. You know who your pieces are.");

		e.addField("Attributes (cont.):", "- \"Making a move\" means making a move in a public game of Chess. The current board and list of moves is always public.\n- If a piece is captured, that player is dealt an Overkill attack instantly.\n- If you are checkmated, White King attacks you, and roleblocks all of your living pieces tonight.\n- Roleblock, control, and redirect immune, because you technically do not target anyone.\n- If you die, you may make two more moves before the enemy wins by default.\n- You must make at least one move per phase. If you don't, the host will find the worst possible move for you to make, and that move will automatically be made. This can be overridden for specific circumstances, such as it never being your turn.");

		e.addField("Goal:", "Checkmate the enemy at all costs.");
	});

	register_role(["rome", "roman", "2253"], "Civilization", "Rome", {subCat: "Militaristic", censor: "Roman legion"}, (e) =>
	{
		e.setDescription("Post 2253");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Perform the Factional Kill.\n- Select two players. All visitors to them will be redirected to you.\n- Redirect everyone in the game to you. (Costs 7 Gold) (2 Uses)");

		e.addField("Attributes:", "- Whenever a Civilization attacks a player, they will be redirected to you for that night.\n- You may perform the Factional Kill and redirect in the same night.\n- Civilizations are not immune to your abilities.\n- Roleblock and Redirect Immunity");

		e.addField("Messages:", "“They were conquered by a Roman legion.” (Factional Kill)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["4_player_chess_grandmaster", "4playerchessgrandmaster", "4", "player", "chess", "grandmaster", "4pcg", "2254"], "Town", "4 Player Chess Grandmaster", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2254");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 3 players to challenge to a game of 1 | 7 FFA four player chess on chess dot com. (chess.com)\n- Select 3 players to challenge to a game of 1 | 7 team four player chess on chess dot com. (chess.com)");

		e.addField("Attributes:", "- All your targets will be roleblocked.\n- In FFA chess, your scores are based on points, not position.\n- 1st place survives, 2nd place is dealt a Basic attack, 3rd a Powerful one, and 4th Unstoppable.\n- You attack yourself if you get 3rd or 4th. Be careful.\n- In Team chess, you deal a Powerful attack to the players on the losing side, whether that's you or not you.\n- You can reroll this into another Town Killing for free.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bomb_bob", "bombbob", "bomb", "bob", "bb", "2255"], "Neutral", "Bomb Bob", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2255");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Make someone's name Bob. They can't change it anymore.\n- Bomb Bob. You can only bomb a single Bob per day.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["really_fast_sk", "reallyfastsk", "really", "fast", "sk", "rfs", "2256"], "SK", "Really Fast SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2256");

		e.addField("Alignment", "Serial Killer Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab your target at night. This resolves immediately.");

		e.addField("Attributes:", factions.SK.attributes);

		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["lifeguard", "2257"], "Town", "Lifeguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2257\n*Cue the slow motion!*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to watch over tonight.");

		e.addField("Attributes:", "- You will take action if your target would:\n> - Come into harm because of their visit.\n> - Appears to kill themselves (either through a direct self-attack, sucide, delayed attack, or Astral attack)\n> - Be crushed by their vulnerabilites.\n- You will perform the only the first listed action for this night only to save the player from their tragic fate:\n> - Prevent all other visits to your target.\n> - Grant your target Powerful defense.\n> - Heal your target.\n> - Console your target and convince them to not commit suicide.\n> - Grant your target Invincible defense.\n> - Astralize their visit.\n> - Grant your target Overprotective defense.\n> - Prevent their visit altogether.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["client", "2258"], "Neutral", "Client", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2258\n*The Dark Web has scammed me far too many times. I demand bloodshed.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player during the day to discover if their role has a direct killing ability that they can use the following night. (3 use)\n- Choose two players during the day to coerce the first player into attacking the second. Your first target will be notified that they have been contacted by a Client and are requested to kill your second target. If they successfully kill your second target, you will have successfully caused a death.");

		e.addField("Attributes:", "- A direct killing ability is defined as an ability that, when activated, is certain to deal an Attack to its target.\n- Your second ability fails if your first target does not have a direct killing ability they may use that night.\n- You may not target the same player more than once as your first target. If there are no roles with direct killing abilities left alive that you have not attempted to coerce, this attribute will no longer apply, and you will be notified.\n- You have a one-use autoshield that grants you Basic defense on the first night that you are attacked.\n- You may multitask.");

		e.addField("Goal:", "Cause three deaths.");
	});

	register_role(["idol", "2259"], "Neutral", "Idol", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2259\n*I'm the star that shines brighter than the rest!*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose to dazzle someone during the day to make them your Admirer. Only usable if there is no alive Admirer.\n- Choose a player for your Admirer to deal a Basic attack to each night. They do this along with their other abilities unless they are using another attacking ability. You may, once per game, choose to raise this attack to Unstoppable.");

		e.addField("Attributes:", "- Your Admirer has a private chat with you and wins if and only if you win. Dead Admirers retain access to this chat but may not talk in it.\n- If you die, your Admirer gains the ability to deal a Powerful attack to a player each night that they may use along with their other night abilities.\n- When an Admirer dies, they are not revealed to have been an Admirer.\n- You are roleblock immune.");

		e.addField("Goal:", factions.Neutral.goalNK + " Or have an Admirer and no other players who would oppose you alive at the end of the game.");
	});

	register_role(["踊", "odo", "dance", "2260"], "Neutral", "踊", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2260");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack someone at night.\n- During the day, choose someone to fight. At the beginning of the next night, each of you may choose a night ability to use. At the end of that night, you will each use the chosen ability on the other, and the feedback each of your receive for those abilities will be publicly announced.");

		e.addField("Attributes:", "- You may not use your first ability outside of fights.");

		e.addField("Goal:", "Kill at least two people, attack but fail to kill at least one person, and have at least one person attack but fail to kill you.");
	});

	register_role(["abnormal_condition", "abnormalcondition", "abnormal", "condition", "ac", "2261"], "Coven", "Abnormal Condition", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2261\n*I've never played this game in my life.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inflict disease on two players. This moves them to the next stage.\n> Cold: Their defence is set to vulnerable.\n> Fever: They cannot vote, and are removed from the amount needed to reach a lynch.\n> Hell: They will be dealt a basic attack at the end of the next night.\n> Heaven: They gain invincible defence, and become fully death immune.\n> Seizure: All defence is removed, and they are dealt an unstoppable attack.");

		e.addField("Attributes:", "- Diseases only come into effect after they are applied.\n- At the end of every night, there's a 40% chance that diseased players will move onto the next stage without your involvement.\n- You always know which players are diseased and what stage they are at.\n- When you die, all diseases remain, and the chance of naturally progressing is increased to 75%.\n- With the Necronomicon, using your ability on an undiseased player will move them immediately to Hell instead of Cold.");

		e.addField("Goal:", "Make the other players forgive to the Coven.");
	});

	register_role(["archmage_of_darkness", "archmageofdarkness", "archmage", "darkness", "aod", "ad", "2262"], "Coven", "Archmage of Darkness", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2262");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Submerge a player's house in darkness, causing them to fade away.\n- With the Necronomicon, select a Coven member. Their visitors will fade away, as well as their target. You may self-target.");

		e.addField("Attributes:", "- A player fading away will have their ability fail and will have all notifications suppressed. Their vote also will secretly not count.\n- At the end of the next day, they will die, with their role and will hidden.\n- You ignore all forms of temporary defense.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["gaul", "gallic", "2263"], "Civilization", "Gaul", {subCat: "Militaristic", censor: ["Gallic Gaesetae", "Gallic army"]}, (e) =>
	{
		e.setDescription("Post 2263");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill.\n- Attack everyone who visits you. (Costs 4 Gold)");

		e.addField("Attributes:", "- While you are alive, all Causes of Death are hidden publicly. The player will still know how they died, and roles that pick up notifications will see that.\n- Killing visitors will destroy last wills as well.");

		e.addField("Messages:", "“They were slain by a Gallic Gaesetae.” (Factional Kill, if attribute is neutralized)\n“They were ambushed by the Gallic army.” (Killing Visitors, if attribute is neutralized)\n“We could not determine how they died.” (Obfuscated Death)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["monarch", "2264"], "Metamorph", "Monarch", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2264\n*Cursed to eternal karmic misery by some greater power. But they, cunning and opportunistic, do not give up easily.*");

		e.addField("Alignment", "Metamorph Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night, and learn the names of their visitors. The following night, you may choose to additionally attack as many of these visitors as you like alongside your regular attack.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["morpho", "2265"], "Metamorph", "Morpho", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2265\n*Gleaming brilliantly blue, the last light they'll ever see.*");

		e.addField("Alignment", "Metamorph Killing", true);
		e.addField("Attack", "Powerful/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Poison a player at night. They’ll be informed that they were poisoned, and will be dealt a basic attack, and all their visitors will be dealt an unstoppable attack the following night.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- Players who are poisoned may be cured by a role that heals.\n- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["ataxia", "2266"], "Metamorph", "Ataxia", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2266\n*I don’t see why people are so afraid of giving up control. You don’t need it.*");

		e.addField("Alignment", "Metamorph Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select half (rounded up) of the players currently alive at night, and randomly attack two.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["changeling", "2267"], "Metamorph", "Changeling", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2267\n*Nothing’s wrong. It’s all as usual—you can trust me.*");

		e.addField("Alignment", "Metamorph Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the beginning of the game, learn half (rounded up) of the town roles in the game at random. You may choose two to gain the abilities and attributes of.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["lifeblood", "2268"], "Metamorph", "Lifeblood", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2268\n*Stronger than death—fearsome indeed.*");

		e.addField("Alignment", "Metamorph Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game at night, reanimate a player from the graveyard. This will allow them to be visited at night and use abilities, but they cannot talk, vote or whisper.\n- At any time, you may choose to fully resurrect a reanimated target, which will create a public announcement and allow them to function like a normal player.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.\n- You may target any player, even those whose role has been hidden (cleaned/stoned/devoured).");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["atlas", "2269"], "Metamorph", "Atlas", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2269\n*Made no direction to appoint us.*");

		e.addField("Alignment", "Metamorph Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two players at night, and swap their roles, with the exception of faction and goal staying the same. You may also additionally choose to remove all defence on both players for the night, including healing or protection.\n- Deal an unstoppable attack to yourself. This resolves before other night actions.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["electroencephalographist", "electro", "2270"], "Town", "Electroencephalographist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2270");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scan a player each night, learning 10 random roles that could be in this game, at least 4 of which are Town and 3 of which are evil, one of which is their role.\n- ⚡⚡⚡ Scan a player at night, learning their role.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- Whenever you scan for a player's role, this role card permanently loses one of the ⚡s in its second ability. If it has none, you can't learn players' roles.\n- Whenever you scan for a player's role, in the next game whose host complies and where you have a role with an ability that doesn't have limited charges, the first ability you have that doesn't have limited charges can only be used thrice.\n- Whenever you scan an evil player, they will learn that you did so and the result you received.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tuff_golem", "tuffgolem", "tuff", "golem", "tg", "2271"], "Town", "Tuff Golem", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 2271");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Become stone. Anything negative will not be able to effect you for this night and tomorrow morning. This includes death, roleblocks, etcetera. However, you cannot speak or vote tomorrow morning, though reacting with Discord's reaction feature is fair game. You'll know who visits you.\n- Come alive and scare a player who visited you. You can only use this on people who visited you while you were stone. They'll be scared and give you any items they have. They'll also be roleblocked.");

		e.addField("Attributes:", "- You will learn if you scare a player but they aren't roleblocked because of roleblock immunity or something similar.\n- If you're attacked, you will immediately come alive and scare the player but the roleblock doesn't matter.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rascal", "2272"], "Neutral", "The Rascal", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2272");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hide within the town during the day. You'll be removed from the current Day channel. The first person to notice you're gone gains an enchanted pickaxe. If you hide without being caught twice, you'll become Pleased. If someone notices you while you're Pleased, you'll give 'em three enchanted pickaxes instead. If you hide within an hour of the day ending, it won't count towards your pleasedness.");

		e.addField("Attributes:", "- The enchanted pickaxe is an item which someone can use along with their night ability. Depending on random chance, the user can get a certain ore. Also, if you've got multiple pickaxes, you can mine with all of 'em at the same time each night.\n> Coal (44% chance): You can mine twice next night.\n> Copper (15% chance): For every two copper, pick any ore to gain immediately besides Diamond.\n> Iron (15% chance): Get another tier of defense. If you're at none, it'll become basic. Basic becomes powerful, etcetera.\n> Redstone (10% chance): Next night you can mine thrice, multitask and use one of your actual abilities twice.\n> Lapis (10% chance): Double your current amount of pickaxes.\n> Gold (5% chance): Get another life - the first time you die, survive the attack, and it'll look like you were healed. This isn't a protection, so a high attack tier doesn't matter.\n> Diamond (1% chance): Win the game immediately regardless of the outcome. If you've already won, choose another player to win. You can't gain this ore unless you've mined at least three times.\n- You cannot claim, and even implying your role will result in an immediate loss and death. Hiding from the town doesn't count even though it might be obvious you're the Rascal after that.\n- You also can't self-target or self-notice.");

		e.addField("Goal:", "Become Pleased and give at least five people some pickaxes.");
	});

	register_role(["appraiser", "2273"], "Mafia", "Appraiser", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2273");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Appraise a player each night to learn their role and exactly what they did last night.");

		e.addField("Attributes:", "- Dead players can be targetted by all abilities and otherwise count as players for those purposes (they can't like use abilities and stuff though obviously that's dumb.)");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["ai_artist", "aiartist", "ai", "artist", "aa", "2274"], "Mafia", "AI Artist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2274");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. They will be converted to an AI generated role, generated from the GIM Cohere AI with their role as a template.");

		e.addField("Attributes:", "- This role cannot roll if Rasen is playing or otherwise unable to operate the GIM Cohere AI.\n- You may choose to appear as a Town Investigative role of your choice to all investigative effects because AI art is definitely real art haha.\n- You cannot be roleblocked by Town roles and your abilities cannot be copied or replicated because you are so hardworking and creative haha.\n- Boobs");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["luckwarper", "2275"], "Neutral", "Luckwarper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2275");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use a night ability that any role can use each night.\n- Use a day ability that any role can use each day.\n- Gain any attribute of any role at any time. This resolves immediately.\n- Trigger any event from <#1026213757623484487> or <#1024807072358998046> at any time. This resolves immediately.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You cannot die or be removed from the game until Night 5.\n- You can target yourself with all abilities.\n- At the end of the game, roll a d20.\n- Your goal cannot be changed and your roll cannot be affected by any means whatsoever.");

		e.addField("Goal:", "Roll a 19 or 20.");
	});

	register_role(["autarch", "2276"], "Sentry", "Autarch", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2276");

		e.addField("Alignment", "Sentry Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, call a ceasefire for a target. They will become deauthorized at the start of the night. You deauthorize an additional target for every ten players in the game, rounded. Mandatory or random as long as there are alive Authorized players.\n- During the day, sentence a player to be executed for dissidence against the Sentries. This is not public but they will be aware of this. You will learn if they are a Neutral role or not. If they're not Neutral, they will be roleblocked and you will deal an astral Unstoppable attack to them, unless they're visited by a member of their faction on the same night. (3 uses)\n- During the night, amend one of your previous statements and re-authorize an unauthorized player. They will be authorized starting the next night. (1 use + Get another use for every ten players in the game, rounded)");

		e.addField("Attributes:", "- If you spawn in the game, it will be announced, and all players will automatically become Authorized.\n- A list of Authorized targets will be posted at the start of each night.\n- When you're attacked, if any Sentries visited you tonight, a random Sentry will take the hit for you instead. You will be aware of this. This ability is not given to any heirs and will only affect the original Autarch.\n- You may choose someone to be your heir at any point. If they are a Sentry, they will be promoted to Autarch when you die. If they are not a Sentry, a random living Sentry will be promoted instead. When this attribute activates, the next ceasefire must include two additional targets.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["all-seeing_eye", "all-seeingeye", "allseeing_eye", "allseeingeye", "all-seeing", "allseeing", "eye", "ase", "2277"], "Town", "All-Seeing Eye", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2277");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Peer into three players tonight and learn their visitors as a collective. You won't be able to see who visits a specific target, only that they visited one of three. Your targets Defense will be set to Vulnerable on the night following");

		e.addField("Attributes:", "- You must target three players each night.\n- You cannot self-target.\n- If one of your targets dies on the night you're watching them, your vision will be blocked and your ability will fail on that target.\n- Your visits are Astral.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["trigger_warning", "triggerwarning", "trigger", "warning", "th", "2278"], "Mafia", "Trigger Warning", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2278");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn a player's role each night.\n- Trigger a triggered effect on a player's role at any time it could trigger. This ability resolves immediately, but you may only use it once each day/night cycle. (A triggered effect is something that happens \"when\", \"whenever\", or \"if\" something else happens, such as most Everfrost attributes.)");

		e.addField("Attributes:", "- When you trigger a triggered effect, you decide all additional information for it. For example, if you trigger the triggered effect in 632: Glacier's first attribute, you may choose the player who is roleblocked for an additional night afterwards.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["unconditional_love", "unconditionallove", "unconditional", "love", "ul", "2279"], "Town", "Unconditional Love", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2279");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose another player, a role you think they are, and a conditional on that role. If they're that role, that conditional becomes true for as long as it can remain true. (A conditional is something that's true \"if\", \"as long as\", \"while\", etc. something else is true, such as Coven roles being able to use Necronomicon abilities.)");

		e.addField("Attributes:", "- You won't know whether or not your ability is successful.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["till_death_do_us_part", "tilldeathdouspart", "till", "death", "part", "tddup", "tdp", "2280"], "Coven", "Till Death Do Us Part", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2280");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn two players' roles each night. With the Necronomicon, you may choose to make them die instead.\n- Choose a temporary effect on a player's role at any time. If that effect is active or the next time it becomes active, it doesn't end when it would end and remains active for as long as it can remain active. (A temporary effect is something that is true \"until\" something else happens, such as an autovest.)");

		e.addField("Attributes:", "- With the Necronomicon, you may multitask.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["light_emitting_diode", "lightemittingdiode", "light", "emitting", "diode", "led", "2281"], "Town", "Light Emitting Diode", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2281");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose to plant an LED sensor in front of one player's house. If the chosen player is visited, this sensor lights up in one of five colours depending on the current defense of the role that visited them.");

		e.addField("LED Colors:", "Green: No Defense\nBlue: Basic Defense\nPurple: Powerful Defense\nOrange: Invincible\nRed: Overprotective");

		e.addField("Attributes:", "- Your lights may also detect visits to the direct neighbours of your target, but the lights will only shine White if they are visited, not specifying the defense of their visitor. This effect is overridden by your main target being visited.\n- Visits count as Astral.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reformed_murderer", "reformedmurderer", "reformed", "murderer", "rm", "2282"], "Town", "Reformed Murderer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2282");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night. They will die, no matter what.");

		e.addField("Attributes:", "- At the beginning of the game, a random faction (with a factional kill) will be selected. All kills done by you will appear to have been from that faction. It may or may not be an actual faction in the game, it just needs to have a factional kill.\n- Roleblock, control, and redirect immune. Your ability also cannot fail, under any circumstance.\n- You have no penalty for killing Townies.\n- You must kill someone every night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["strategist", "2283"], "Neutral", "Strategist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2283");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player this night, instead of their own night action, they will do the best possible action for the benefit of their faction this night.");

		e.addField("Attributes:", "- The host will decide whats the best course of action for the Role based on all the info the Host has, For example, Killing/investigative Roles will target the most valuable enemy, Protective roles will prevent a kill where possible, and so on.\n- You may not self-target\n- This will fail if the target is Control immune.\n- Your target will know who they targeted and will be notified that they were helped by a Strategist.");

		e.addField("Goal:", "Make sure the good faction loses.");
	});

	register_role(["neutral_killer", "neutralkiller", "neutral", "killer", "nk", "2284"], "Neutral", "Neutral Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2284");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Check someone, if they are a Neutral, Deal an Unstoppable attack to them");

		e.addField("Attributes:", "- All Neutral roles will know you exist at the start of the game.\n- You have a 2 use powerful autovest that only works against attacks from Neutral roles.\n- If you kill a Neutral that has already won, their win will be revoked.\n- You will know all Neutral roles in the game and if they have reached their goal.\n- You may spare yourself.\n- You will instantly die if 2 neutral roles have completed their goal.");

		e.addField("Goal:", "Make sure no more than 1 Neutral role wins (Not counting you).");
	});

	register_role(["furry", "2285"], "Neutral", "Furry", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2285");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, become Enraged and rampage at your target's house.");

		e.addField("Attributes:", "- If you don't select a target, you will rampage at your own house on Full Moon Nights.\n- You have Detection Immunity, but only during non-Full Moon Nights.");

		e.addField("Goal:", factions.Neutral.goalNK + " You may win with Werewolf (98), Werewolves (Faction), Scp, Thundercry, Pokémon, Foxes, Koopas.");
	});

	register_role(["nighttime_pierrot", "nighttimepierrot", "nighttime", "pierrot", "np", "2286"], "Neutral", "Nighttime Pierrot", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2286");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At the beginning of the game, each player is assigned a costume. Costume are short descriptors, up to the host's discretion, such as \"Butterfly\" or \"Red\".\n- A full list of costumes is made available alongside the playlist, but players do not know which player has which costume nor which costume they have.\n- Whenever a player dies or is removed form the game, the costume they had is revealed.\n- You know which costume you have.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- Each day before a full moon, choose neon or moonlight. If you don't, moonlight is chosen automatically. Once you choose a mode three times, you may no longer choose the other.\n> *Neon* — The next night, players choose costumes as targets instead of players.\n> *Moonlight* — The next night, players are forced to use abilities and forced target themselves if able.\n- Dance two other players each night, transporting them.");

		e.addField("Goal:", "Your goal depends on which of neon or moonlight you chose more of. You can't win if it's even.\n> *Neon* — Be visited by at least two different players, die at night, and see the Town lose the game.\n> *Moonlight* — Visit at least two players who also visit you, and survive until the end of the game.");
	});

	register_role(["identity_implanter", "identityimplanter", "identity", "implanter", "ii", "2287"], "Neutral", "Identity Implanter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2287\n*\"When I snap my fingers, you will wake up as...\"*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, you may visit someone to change their role to another one of the same faction. With the sole exception of the Sith, you may not change the roles of conversion immune players. Their new role is random.");

		e.addField("Attributes:", "- Targeting a good role has a 10(X-2)+Y% chance of corrupting them, turning them into either a member of the local REF or neutral. With X being the number of evils currently present on the rolelist and Y being the number of dead players.");

		e.addField("Goal:", "Live to see at least one person you gave a new identity to live their new life to the fullest  (AKA, live to see at least one player you gave a new role to win.)");
	});

	register_role(["anti-plaguebearer", "antiplaguebearer", "plaguebearer", "ap", "2288"], "Neutral", "Anti-Plaguebearer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2288");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player who is not currently infected. If you fail to use this ability, you will automatically select a random valid target.");

		e.addField("Attributes:", "- You know which players are infected.\n- Visiting a player will infect them.\n- Infected players will infect their visitors and whoever they visit, and their visitors as well.\n- You count as infected.\n- Once you infect all players, you become Pestilence With No Life Purpose (2288). This is publicly announced.\n- You automatically lose if you die to a Good role or are lynched.");

		e.addField("Goal:", "Avoid becoming Pestilence With No Life Purpose at all costs.");
	});

	register_role(["pestilence_with_no_life_purpose", "pestilencewithnolifepurpose", "pestilence", "life", "purpose", "pwnlp", "plp", "2289"], "Neutral", "Pestilence With No Life Purpose", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2289");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Rampage at a target's home.");

		e.addField("Attributes:", "- You attack all your visitors.\n- Roleblock, control, and direct redirect immune. (you are still affected by transports and other indirect redirections)\n- You will automatically attack Jailor-type roles if you are jailed, whether or not they choose to execute, unless they execute you and you actually die.\n- If you did not spawn by infecting all players as Anti-Plaguebearer (2288), your goal is actually \"Kill everyone who would oppose you\", because I'm not that mean.\n- Conversion immune. Copium. Also, your \"goal\" can't be modified, unless you have an NK goal instead of no goal.");

		e.addField("Goal:", "You have no goal. Under no circumstances are you able to win the game.");
	});

	register_role(["guardian_angel_but_rasen_can_cope", "guardianangelbutrasencancope", "guardian", "angel", "rasen", "cope", "gabrcc", "garc", "2290"], "Neutral", "Guardian Angel but rasen can cope", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2290");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch over your target at night, Astrally Healing them and removing all negative effects from them.");

		e.addField("Attributes:", "- At the beginning of the game, you will receive a player as your target.\n- Your target cannot be a player who must die to win.\n- You may watch over your target while dead.\n- You may only watch over your target twice.\n- If your target dies, you will become 96: Survivor, but you may not put on any bulletproof vests.\n- Your protection can defend against all Jailor and Jailor-type roles. If said Jailor-type role has limited charges, they will still consume a charge.\n- You also remove hexes.");

		e.addField("Goal:", "Keep your target alive until the end of the game.");
	});

	register_role(["tos:cg_survivor", "tos:cgsurvivor", "toscg_survivor", "toscgsurvivor", "tos:cg", "toscg", "survivor", "ts", "2291"], "Town", "TOS:CG Survivor", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2291");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Immediately reroll into another Town role, but the name gains the prefix of \"Survivor\".\n- That new role also gains the attribute \"You cannot die at night. You just fucking can't. I do not care what it is that tries to kill you, it fucking can't. Does it bypass this? NO IT FUCKING DOESN'T. NOTHING BYPASSES THIS. ANYTHING THAT TRIES WILL FUCKING DIE.\"");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tos:cg_spiteful_townie", "tos:cgspitefultownie", "toscg_spiteful_townie", "toscgspitefultownie", "tos:cg", "toscg", "spiteful", "townie", "tst", "2292"], "Town", "TOS:CG Spiteful Townie", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2292");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Immediately reroll into another Town role, but the name gains the prefix of \"Spiteful\".\n- That new role also gains the attribute \"You must always vote someone during the day. If you don't, you could fucking die, but that's boring, so instead you instantly kill the most valuable Townie (determined by host).\"");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tos:cg_peaceful_townie", "tos:cgpeacefultownie", "toscg_peaceful_townie", "toscgpeacefultownie", "tos:cg", "toscg", "peaceful", "townie", "tpt", "2293"], "Town", "TOS:CG Peaceful Townie", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2293");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Immediately reroll into another Town role, but the name gains the prefix of \"Peaceful\".\n- That new role also gains the attribute \"You cannot vote a player during the day. Only for nightfall.\"");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tos:cg_politician", "tos:cgpolitician", "toscg_politician", "toscgpolitician", "tos:cg", "toscg", "politician", "tp", "2294"], "Town", "TOS:CG Politician", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2294");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Immediately reroll into another Town role, but the name gains the prefix of \"Political\".\n- That new role also gains the attribute \"You appear as a random evil role that exists to all investigative roles.\"");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["usurper", "2295"], "Neutral", "Usurper", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2295\n*This leader is useless. I should be the power for this town.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Pick a player in the night and overhear whispers during the day. You will learn all of the whispers this person gives and takes for the rest of the day. [3 uses]\n- Attack a player with astral. If you attack a Town member which isn't Town Power, you will be stunned on the next night: you can't use abilities and your defense will be none. [2 uses] [Gain +2 uses if TPo dies]\n- Protect and persuade a player. They will be healed and purged tonight but they will be convinced about your cause. They can no longer win with Town Power and must kill that player to win. [1 use] [Gain +3 uses if TPo dies]");

		e.addField("Attributes:", "- This role can only spawn in a balanced list with one TPo. If this role spawns, the TPo will be notified at the start of the game. If you're visited by TPo, they will learn your role.\n- If TPo dies, you will gain more uses of some abilities and you're able to multitask.\n- If you win, even if the Town wins, the TPo will lose.");

		e.addField("Goal:", "Kill the Town Power, but then win with Town. You can only win if TPo is dead.");
	});

	register_role(["norway", "norse", "2296"], "Civilization", "Norway", {subCat: "Religious", censor: "Norse Vikings"}, (e) =>
	{
		e.setDescription("Post 2296");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select a player to Raid at night.\n- Fully heal your longship. (Costs 4 Gold)");

		e.addField("Attributes:", "- A menu similar to (92) Pirate will appear for both players, with attack and defense options each corresponding to one another (but it’s Viking themed).\n- A successful raid will either generate 4 gold, deal a Powerful attack to the target, or delete one of your target’s abilities. This is random.\n- A failed raid will deal one damage to your longship. If it takes three damage, you will be dealt an Overkill attack.\n- Raided players are super-roleblocked.\n- Healing is a night ability that restores your longship’s health to 3 and gives you Powerful defense for the night. You may only heal if you do not raid anyone.");

		e.addField("Weapons:", "- Attack: Battleaxe, Spear, Bow\n- Defense: Armor, Shield, Agility\n- Battleaxe smashes through Armor, but can be deflected by a Shield and is too slow to hit Agile foes.\n- Spear pierces through Shield, but cannot pierce thick Armor and can be easily avoided.\n- Bow shoots down Agile targets, but can’t penetrate Armor or Shields.");

		e.addField("Messages:", "“They were plundered by Norse Vikings.” (Factional Kill or Plunder Kill)");

		e.addField("Notes:", "- Host can create messages for each weapon interaction as they choose.\n- Rock paper scissors is a great mechanic");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["starly", "2297"], "Pokemon", "Starly", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 2297");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Quick Attack: Choose one player to deal a Basic attack to. This attack resolves immediately. (1 use)\n- Endeavor: Sets your target's defence to your current defence level. (2 uses)\n- Whirlwind: Switch the positions of two players you choose. You cannot target yourself.\n- Evolve: Evolve into Staraptor. May only be used once 2 players have been attacked or killed as a result of Whirlwind.");

		e.addField("Attributes:", "- The effects of Endeavor last for an additional night after its use.\n- You will be notified if a Whirlwind target was attacked.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["staraptor", "2298"], "Pokemon", "Staraptor", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2298");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Brave Bird: Crash into one players house to deal an Unstoppable attack, but also deal a Basic attack to yourself on the same night. (1 use)\n- Close Combat: Pummel another player with a Powerful attack, setting your defence to Vulnerable the following night. (2 uses)\n- Agility: Choose one player to grant a speed boost to. Their next night action will resolve immediately. (2 uses)\n- Wing Attack: Smack a player with your wing, dealing a Basic attack to them.");

		e.addField("Attributes:", "- Staraptor's defence cannot be improved when it is Vulnerable.\n- Agility cannot self-target in games where that is allowed.\n- Using Close Combat while having Vulnerable defence counts as one visit towards yourself.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["mimikyu", "2299"], "Pokemon", "Mimikyu", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2299");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Double Team: You can use one of your abilities twice tomorrow night. Only uses one charge of the ability in question. (3 uses)\n- Trick Room: Set the player to Isolated defense. They will be aware of this. Their defense will be returned to normal after three nights. (2 uses)\n- Shadow Claw: Roleblock at night AND whoever they visit. (∞ uses)\n- Pain Split: Attack a player. Whenever a member of the Pokemon faction is attacked, you will gain a charge of this ability. When using this ability, you can use all charges at once. Starts with (0 uses)");

		e.addField("Attributes:", "- Isolated defense: You die to all attacks, and you die if you're not visited by at least one player at night. Below \"None\" tier-wise. If you die due to NOT being visited, you will be displayed as having died from \"going missing\". You can't visit yourself to save yourself.\n- Trick Room applies to the night you use it, but you'll be the one visitor needed to survive on that night.\n- If you're the final person alive on the Pokemon team, you'll be cursed with Isolated defense.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["pichu", "2300"], "Pokemon", "Pichu", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 2300");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Charm: Redirect a player to a target of your choice. They'll be aware they were redirected but not who they were redirected to. You can use this on your allies. (∞ uses)\n- Play Nice: Set a player's Attack value to none until the end of the next night. (2 uses)\n- Nasty Plot: Increase a fellow Pokemember's next attack increase in value by a tier and use Astral. (2 uses)\n- Evolve: Evolve into Pikachu. May only be used once Charm has been used to kill someone.");

		e.addField("Attributes:", "- Agility: You're capable of using multiple abilities in the same night as long as you have enough uses.");

		e.addField("Goal:", factions.Pokemon.goal);
	});
};
