//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["ayo_yalls_roles_fkg_suck_frfr", "ayoyallsrolesfkgsuckfrfr", "ayrfsf", "im_not_making_any_more_aliases", "3451"], "Town", "ayo yalls roles fkg suck frfr", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3451\n*on god 😔✊*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn a player's faction at night.");

		e.addField("Attributes:", "- Your ability has a 100% chance to show your target as Town if they're not Town, or as a random evil faction that exists if they are Town.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["berserker", "3452"], "Linirean", "Berserker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3452");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Throwing Axe**: Throw an axe at someone's house, making all visits to them fail.\n- **Whirlwind**: Rampage at someone's house.\n- **Hunting Net**: Roleblock someone tonight.");

		e.addField("Attributes:", "- You can only use one ability per night.\n- Your attack power increases with each kill. Maxes at Overkill.\n- You automatically use Whirlwind at home when roleblocked.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["necromancer", "3453"], "Linirean", "Necromancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3453");

		e.addField("Alignment", "Linirean Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Death Rider**: Astrally give someone Powerful defense, delivering a Basic attack to one attacker.\n- **Summoning**: Possess a dead role with an Attack stat, and attack someone according to that attack.");

		e.addField("Attributes:", "- You may only use one ability per night.\n- You have a mystical barrier that protects against one attack.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["max", "3454"], "Neutral", "MAX", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3454\n*FIVE HUNDRED COMBOS!*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **MAX 300** — You may use this ability at night. For the following day and the following night when you use this ability, all players, both living and dead, may use their ability twice during each of those phases. (1 use.)\n- **MAXX UNLIMITED** — You may use this ability at night. At the beginning of the following day, all players’ role cards except for you will have a set of curly brackets {} placed inside them wherever the host wants to put them, and they also gain the following ability: `- Cleave during the day.` (1 use.)\n- **The Legend of MAX** — You may use this ability at any time while you are dead. The number of the current day or night becomes 1 less than what it is. This is not a time reversing effect and does not undo anything, but can cause effects that rely on a specific numbered day or night to activate a second time. (1 use.)");

		e.addField("Attributes:", "- While you are alive, majority is 1 less than what it would be, and all attacking actions have a 10% chance to be upgraded by 1 level during the phase in which they are used.\n- You're roleblock immune.");

		e.addField("Goal:", "Ensure that the game ends before Night 5. (The host may change this number at the start of the game to whatever they think is fair)");
	});

	register_role(["campaigner", "3455"], "Neutral", "Campaigner", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3455\n*Just sign my stupid petition.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Make someone sign your petition, becoming a **Signee**.");

		e.addField("Attributes:", "- There are 2 levels of your status: **Interested** and **Signee**.\n- Players who visit you or another **Interested**/**Signee** player will become **Interested**.\n- Players who become **Interested** twice will sign your petition and become a Signee.\n- You know the names of all **Interested**/**Signee** players.\n- Once everyone alive signs your petition, you will gain 3 votes.\n- You have a 2-use basic autovest, you lose it once you reach your goal.");

		e.addField("Goal:", "Have everyone alive be a Signee of your petition.");
	});

	register_role(["mettaton_neo", "mettatonneo", "mettaton", "neo", "mn", "3456"], "Town", "Mettaton NEO", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3456\n*DIDN'T YOU KNOW [Neo] IS FAMOUS FOR ITS HIGH DEFENSE!?*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to block their path. If they would have killed anyone besides you or themselves, their attack will fail.");

		e.addField("Attributes:", "- You cannot be given protective effects. All protective effects applied to you will secretly fail.\n- You cannot gain permanent defense, but your defense cannot go any lower either.\n- ||Yes, the flavor text is a quote from Spamton, not Mettaton, but it's still fitting.||");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spamton_neo", "spamtonneo", "spamton", "neo", "sn", "3456"], "Town", "Spamton NEO", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3456\n*DIDN'T YOU KNOW [Neo] IS FAMOUS FOR ITS HIGH DEFENSE!?*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Immortal", true);

		e.addField("Abilities:", "- Select a player to veeerry slowly murder them. They die after two nights, assuming you haven't been roleblocked/controlled/redirected to someone else by then, and assuming they have not received protection of any kind in that time.");

		e.addField("Attributes:", "- Your target is aware that they are going to die.\n- You will continuously visit your target until they die.\n- You may attack another player while you're waiting on one to die already.\n- You can't die under any circumstances, including lynching. However, you lose automatically if you're the last Town.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["2_nks", "2nks", "two_nks", "twonks", "twonks_is_kinda_funny_lol", "3457"], "Neutral", "2 NKs", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3457\n*Patch 4.8: To account for balance, I have duplicated myself.*");

		e.addField("Alignment", "Neutrals Killings", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You have two other Neutral Killing roles in addition to this one.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["fogboundbee", "fbb", "discordianbeekeeper", "intensivebeekeeper", "beekeeper", "3458"], "Discordian", "Fogboundbee", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3458\n*Caroline looks over at Yeet and gasps slightly.*");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 OC to write a story with another player, roleblocking them for the night.\n- Use 2 OCs to attack another player.\n- Use 3 OCs to provide basic defense to another player.");

		e.addField("Attributes:", "- You will earn 1 OCs every night. You can use 2 abilities per night.\n- For each Discordian that dies, you permanently gain one extra OC per night.\n- For all intensive purposes, this is the Discordian beekeeper and should appear under\n```=beekeeper```");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["cowboy", "🤠", "3459"], "Town", "Cowboy", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3459\n*In a wild-west themed trio with the sheriff and the outlaw*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to Lasso at night. The Lassoed status lasts for this night and the next night.\n- If a Lassoed player is investigated or roleblocked at night, you will shoot them.\n- If you shoot an innocent player, you lose Lasso privileges.");

		e.addField("Attributes:", "- Investigation is any action that reveals attributes of a player that is not public info yet. (Will, role, role number, who they visited)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["outlaw", "3460"], "Town", "Outlaw", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3460\n*In a wild-west themed trio with the sheriff and the cowboy*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to Rob at night up to 4 times. You will roleblock them.\n- If another town member attacks the player you're Robbing tonight, you will increase their attack by one stage tonight.\n- The other player will not know their attack was increased. You will not know if you increased their attack.");

		e.addField("Attributes:", "- Roleblock immune");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gob47", "gob", "hoilow", "3461"], "Discordian", "Gob47", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3461\n*A dark wizard quickly recognizing behavioral patterns...\n\nYour target peers into the unknown. They must be Gob47!*");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Purge** (Self): Remove all afflictions from yourself. Your *Defense* will increase if there is no ailing effects on yourself.\n- **Study**: Find out everyone a player has visited.");

		e.addField("Attributes:", "- You are roleblock immune.\n- Non-attacking roles visiting you will increase your *Defense*.\n- Immune to haunts and conversions");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["reverse_veteran", "reverseveteran", "veteran", "rv", "3462"], "Town", "Reverse Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3462\n*Fuck you, take my paranoia. I never wanted it anyway- **gets shot***");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make another player go on alert at night. ");

		e.addField("Attributes:", "- When a player goes on alert, they will attack all players who visit them that night with a Powerful attack.\n- While on alert, they have Basic defense.\n- You may only make others go on alert thrice.\n- *The host interprets whether or not this role's ability leads to its own death.*");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reverse_mayor", "reversemayor", "mayor", "rm", "3463"], "Town", "Reverse Mayor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3463\n*Here for a better Town. To prove it, I'll make myself useless!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal yourself as the Reverse Mayor during the day.");

		e.addField("Attributes:", "- When you reveal yourself, it will be announced to the Town.\n- While revealed, the votes of all other living players counts as three, they cannot send or receive whispers, and Town roles with abilities that grant defense without counterattacking will not be able to use those abilities on them.\n- You may only reveal yourself once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reverse_jailor", "reversejailor", "jailor", "rj", "3464"], "Town", "Reverse jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3464\n*The customer is always right. Always, Jimmy, stop telling me that they're not, it being a prison changes nothing!*");

		e.addField("Alignment", "Town Killing (probably)", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose another player for them to jail you.");

		e.addField("Attributes:", "- When you are jailed, for the duration of the next night, you will be placed in a private chat with them. Messages sent by them will appear to have been sent by “Jailor”, and you will additionally be unable to communicate in any private chats you may have for the night.\n- Your target may choose to execute you, dealing an Unstoppable attack.\n- While jailed, you are roleblocked through immunities, gain Powerful defense, and all other abilities used against you will fail. Indirect effects may still apply.\n- You may only be executed thrice. If your target executes a member of the Town and is a member of the Town, they may not use any killing ability. They may not execute on Night 1.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["unmayor", "mayor", "3465"], "Town", "Unmayor", {subCat: "Unsupport"}, (e) =>
	{
		e.setDescription("Post 3465");

		e.addField("Alignment", "Town Unsupport", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, unreveal yourself.");

		e.addField("Attributes:", "- You will reveal yourself as a Mayor on the start of day one automatically.\n- While revealed, you may whisper and be whispered to, as well as you forcing all TPs on to you as long as you're revealed.\n- You also have -3 votes, meaning if you vote someone while revealed the total of votes they have goes down 3.\n- Unrevealing yourself reverses all these effects.\n- This are mechanically a Town role in every way except for win condition.");

		e.addField("Goal:", "Have the good faction lose (May win while dead)");
	});

	register_role(["reverse_unmayor", "reverseunmayor", "ru", "3466"], "Town", "Reverse Unmayor", {subCat: "Unsupport"}, (e) =>
	{
		e.setDescription("Post 3466\n*Two wrongs make a right.*");

		e.addField("Alignment", "Town Unsupport", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Unreveal yourself as the Reverse Unmayor during the day.");

		e.addField("Attributes:", "- You will reveal yourself as a Reverse Unmayor at the start of day 1 automatically.\n- While revealed, all other living players may whisper and be whispered to, their votes count as -3 votes, and all Town roles with abilities that grant defense without counterattacking are able to and must use those abilities on all living players except you.\n- Unrevealing yourself reverses all these effects. *(So does dying.)*\n- For all intents and purposes except goals, this is a Town role.");

		e.addField("Goal:", "See the good faction lose.");
	});

	register_role(["reverse_serial_killer", "reverseserialkiller", "rsk", "sk", "3467"], "Neutral", "Reverse Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3467\n*Masochism at its finest.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player. They will stab you, dealing a Basic attack to you.");

		e.addField("Attributes:", "- If your target is roleblocked, they will attack the role blocker in addition to you.\n- When your target automatically kills a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target your target will have their wills covered in blood, making it unreadable.\n- At night, you may choose to force your target to spare roleblockers instead.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["filler_town_role", "fillertownrole", "filler_role", "fillerrole", "filler", "town_role", "townrole", "ftr", "3468"], "Town", "Filler Town Role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3468");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fill up <#970046125065265202> with the most random roles.");

		e.addField("Attributes:", "- Once rolling this, you will be rerolled into a role of your choice for free, but it can only be from this list:\n`375`\n`2560`\n`2568`\n`1595`\n`706`\n`3203`\n`3026`\n`385`\n`3052`\n`2170`\n`546`\n`2253`\n`2299`\n`1150`\n`1311`\n`1168`\n`2002`\n`1979`\n`268`\n`907`\n`3314`\n`1055`\n`3335`\n`1058`\n`446`\n- You keep your goal and faction even after a reroll.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["eccentric_rapper", "eccentricrapper", "eccentric", "rapper", "er", "3469"], "Neutral", "Eccentric Rapper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3469");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, attack people up to the number of Verses you said in town chat the last day.");

		e.addField("Attributes:", "- A verse has must have 10 syllables, and follow Iambic Pentameter (unstressed / stressed vowel alternation)\n- In general, words have one stressed syllable and the others are unstressed. The host can just follow whatever interpretation of stress is easiest.\n- Only up to 6 Verses may be made in chat by you in one day.\n- All players are informed that there’s an eccentric rapper.");

		e.addField("Goal:", "kill all");
	});

	register_role(["peculiar_rapper", "peculiarrapper", "peculiar", "rapper", "pr", "3470"], "Neutral", "Peculiar Rapper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3470\n*I'm killin' little infants cuz I don't give a fuck (kawaii!) *");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, attack a number of players equal to the number of bars you said in the last day chat, but no more than six.");

		e.addField("Attributes:", "- A bar is composed of two messages whose last syllables rhyme with each other.\n- Rhymes don't have to be perfect and are up to host discretion. Rhymes may not be on only unstressed syllables (e.g. \"fiddle\" and \"fatal\" don't rhyme).");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["mumble_rapper", "mumblerapper", "mumble", "rapper", "mr", "3471"], "Neutral", "Mumble Rapper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3471\n*Can’t hey fejnr like I’m shitting oidfg mpaeieri*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defence", "Basic", true);

		e.addField("Abilities:", "- At night, attack a number of players up to the amount of noncoherent words you said in the previous day chat.");

		e.addField("Attributes:", "- \"Noncoherent\" counts keyboard smashes, severe misspellings, filler words (uh, yeah, um etc.), swear words and anything else the host wishes to consider.\n- You may only attack up to 6 times in a night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["unmedium", "medium", "3472"], "Town", "Unmedium", {subCat: "Unsupport"}, (e) =>
	{
		e.setDescription("Post 3472");

		e.addField("Alignment", "Town Unsupport", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, seance a living person.\n- While dead, talk to the dead. (1 use)");

		e.addField("Attributes:", "- When seancing a living person, you will appear to be the Unmedium, and will have a direct one-on-one communication with them until the end of the day.\n- When talking to the dead while dead, you will appear as the Unmedium. You may only talk with the dead once. At all other times you may talk in day chat as if you were still alive.\n- This is mechanically a town role in every way except win condition.");

		e.addField("Goal:", "See the good faction lose. (May win while dead)");
	});

	register_role(["mr_vigilante", "mrvigilante", "vigilante", "mrv", "mr", "3473"], "Town", "MR Vigilante", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3473\n*“IF THEY CANNOT EXPRESS LOYALTY THEY ARE NOT AN ALLY.”*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Modified Hellbent", true);

		e.addField("Abilities:", "- **Tried and True**: Deal a Basic attack to someone and roleblock them. If they are not Town, your next attack is Powerful. If they are Town, you are roleblocked the next night. (2 night cooldown)\n- **Protector of the Town**: Protect a target. The next time they are directly attacked, redirect the attack to yourself and deal a Powerful attack to the attacker. The redirected attack is one stage lower than it should be. (1 night cooldown)\n- **Combat Medic**: Heal a target. You grant them Unstoppable defense for this night and Basic defense for the next night. You may self target, which will additionally heal you for 2 damage previously taken. (3 night cooldown)\n- **Curse the Gods**: Curse a target. If they have defense above Basic, given by either temporary or permanent effects, deal an Unstoppable attack to them. (3 night cooldown)");

		e.addField("Attributes:", "- (Modified) Hellbent Defense: You cannot die. Instead, you have a Damage Zone. Each time you're attacked at night, depending on the attack tier, you'll take an amount of damage. Basic and below will deal 1 damage, Powerful will deal 2 damage, Unstoppable will deal 3 damage and Overkill+ and lynching will deal 4 damage. Once you've taken 4 damage, you will die. For technical purposes, this isn't an attribute, just an explanation. No, I didn't copy and paste all of this from Masochist because Masochist actually has 8 HP.\n- **Patience, Jackass, Patience**: If you do not perform your night ability, you may use two night abilities the next night and the Attack/Defense level is increased by one stage.");

		e.addField("Goal:", "Kill all non-Town roles. If any non-Town roles that don't oppose the Town are alive at the end, the game will end and you will lose.");
	});

	register_role(["the_vigilante", "thevigilante", "vigilante", "3474"], "Town", "The Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3474");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic/Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shoot a player at night. Not usable Night 1, or the night after shooting a Townie.\n- Falsify the death of another Townie. This can only be used the night after shooting a Townie.");

		e.addField("Attributes:", "- Falsifying a player's death deals an Unstoppable attack, makes them appear as a Vigilante (67) on death, and you may change their will as you please. You learn the original role and will, and they appear to die of guilt.\n- **You are not required to falsify a player's death,** but you can only do it immediately after the night you shoot a Townie.\n- When shooting a player, they appear to have been killed by a Vigilante (67).\n- You are a Town role for all intents and purposes except win condition/goal.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["unretributionist", "retributionist", "3475"], "Town", "Unretributionist", {subCat: "Unsupport"}, (e) =>
	{
		e.setDescription("Post 3475");

		e.addField("Alignment", "Town Unsupport", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Unraise the living, dealing an astral Overkill attack to them. This is done by the gods and not you therefore you didn’t kill them.");

		e.addField("Attributes:", "- Your ability only affects roles Retributionist (61) wouldn’t normally be able to use.\n- This is mechanically a Town role in every way except win condition.");

		e.addField("Goal:", "See the good faction lose. (May win while dead)");
	});

	register_role(["diss_track_rapper", "disstrackrapper", "diss_track", "disstrack", "diss_rapper", "dissrapper", "rapper", "dtr", "3476"], "Neutral", "Diss Track Rapper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3476\n*Your talentless ass is so sad to look at, need glasses lest my eyes get rashes, blasted with unhappiness*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, attack a number of players equal to the amount of players you insulted in the previous day chat, but no more than 6.");

		e.addField("Attributes:", "- Insults must be reasonably direct, but what counts as an insult is loose. Calling someone suspicious or accusing them of being evil counts as an insult. ");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["loyalist", "3477"], "Insurgency", "Loyalist", {subCat: "Bouncer"}, (e) =>
	{
		e.setDescription("Post 3477\n*I'll never betray the Despot.*");

		e.addField("Alignment", "Insurgency Bouncer", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pledge your loyalty to a player, giving them your identity and role immediately. If it's the first time you've targeted them, their defense tier will be upped and you can use one of your other abilities next night.\n- Attack a player. If they've been visited by an Insurgent before, the attack tier is upped to Powerful and you attack non-Insurgent visitors.\n- Select three players. Insurgent targets will be made Astral permanently, non-Insurgents are roleblocked.\n- Make a player lynchproof for the next two days. (1 use) ");

		e.addField("Attributes:", "- You're usually restricted to only using your first ability, but you'll be able to use any of your others the night after you use your first.\n- If you pledge your loyalty to the Despot, you'll also be able to multitask up to two abilities the next night.");

		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["insurgent", "3478"], "Loyalist", "Insurgent", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3478\n*Together with the Governor, we'll start a revolution.*");

		e.addField("Alignment", "Loyalist Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. If they've attacked or caused the lynch of a fellow Loyalist, you'll deal a roleblock and deal a Basic attack to them. (1 use) ");

		e.addField("Attributes:", "- When using the factional investigation, guess the player's role before the night ends. You'll deal a Powerful attack to them if your guess was correct.\n- When using the factional protection, you'll deal a Basic attack to one of the target's visitors. ");

		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["unjailor", "jailor", "3479"], "Town", "Unjailor", {subCat: "Unkilling"}, (e) =>
	{
		e.setDescription("Post 3479");

		e.addField("Alignment", "Town Unkilling", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, force someone to become your Jailor. You also will choose a word to become the “execute” button that night.");

		e.addField("Attributes:", "- Your target will receive the message “[Your name] was waiting in a homemade cell at your house. You use this opportunity to talk with them.”\n- Your target will jail you the following night, while learning your name as well. This will prevent them from using their normal ability.\n- The word you chose will become the execute button for the night, which if said will deal an Unstoppable attack to you.\n- You have a private night chat with your Jailor.\n- If your Hailor fails to execute you, you will deal an unstoppable attack to them, as well as bloodying their will and making it unreadable. For safe measures, your target is unable to edit their will during this time.\n- If your target is targeted by another Hailor-like role, their ability will fail.\n- If you select a player with a Hailor-like role, they will be forced to jail you instead. Their execute option is also overridden by your word of choice.\n- This is mechanically a Town role in every way except win condition.");

		e.addField("Goal:", "See the good faction lose. (May win while dead)");
	});

	register_role(["august_1st", "august1st", "august_first", "augustfirst", "8/1", "yeah_i_used_the_mm/dd_format_what_are_you_going_to_do_about_it", "3480"], "Neutral", "August 1st", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3480\n*\"Legit this spam about black men's really starting to- Castle what the fuck happened to <#970041598308134995>? CASTLE WHAT THE FUCK DID YOU DO CASTLE?!\" -Jd, August 1st, 2022");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During any phase, hide any game channel, alongside <#970046125065265202> and <#978140732802072576> to other players.");

		e.addField("Attributes:", "- What channel is hidden is public.\n- You cannot hide player channels.\n- You cannot hide announcement channels nor the channel of the current day.\n- You cannot hide private chats.\n- Unique for obvious reasons.\n- You may only hide one channel per phase.");

		e.addField("Goal:", "Be the last player standing while also destroying <#970041598308134995>.");
	});

	register_role(["the_clusterfuck_of_a_role_that_is_all_my_bad_ideas_i_came_up_with_while_watching_a_south_park_episode_mixed_into_one", "theclusterfuckofarolethatisallmybadideasicameupwithwhilewatchingasouthparkepisodemixedintoone", "tcoartiambiicuwwaspemio", "i_hate_you_spaggy", "3481"], "Neutral", "The Clusterfuck Of A Role That Is All My Bad Ideas I Came Up With While Watching A South Park Episode Mixed Into One", {subCat: "Any"}, (e) =>
	{
		e.setDescription("Post 3481");

		e.addField("Alignment", "Neutral Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Make someone a WEEB, forcing them to change their name into Weeb for the rest of the game.\n- Extinguish someone with a Overkill attack jacked up on steroids, causing them to die one billion times. This floods the day chat, making it so players have a limit of 30 messages that day, as well as any other deaths being unable to be announced.\n- Send someone to Britain, forcing them to be stabbed. This is done by every other player, forcing everyone but you to visit your target, but not using their ability (they’re too busy stabbing the guy)\n- Abolish a rule, making any one rule in <#978786268597063700> void, allowing it to be ignored. You get to choose the role and the host can’t do anything to stop you.");

		e.addField("Abilities (cont.):", "- File someone’s teeth down to stubs, making it so they’re unable to talk the next day, as well as giving them a “bleeding” effect (does essentially the same thing as poison, but is fancy and will cover your target’s will in blood if they die, making it unreadable)\n- Raise the forces of hell, causing all dead players to be able to attack any one person (that isn’t you) with a Basic attack.\n- Vanish. You quit. You die instantly and there is no reviving you. Ever. Unless one person is modkilled I guess, whether it be a role or they made a goofy mistake. You’re instantly revived if someone’s modkilled and given lynch immunity until attacked with an attack of none or below. \n- Ban all attacks against you. You are given 9 trillion Overprotective autovests for the next 3 nights.");

		e.addField("Attributes:", "- Half of your abilities are astral. This is chosen by random. This doesn’t apply to your 3rd ability, that one’s always astral.\n- If the host, for whatever reason, keeps this role then they must roll a d20 for defense. Less than 10 gives you no defense, 11-15 gives you basic defense, 16-19 is powerful defense, and a nat 20 is Invincible defense.\n- You must select one role at the beginning of the game. One person is forced to reroll into that role. \n- You originate from America, so at any time you can choose to forfeit all your abilities to gain infinite uses of 2725’s bazooka without any consequences. Flip a coin to see if this is also astral or not\n- If you’re hung, you must play a game of chess with the host. If you win, you are un-hung the next day and cannot be lynched for the next 2 days.");

		e.addField("Attributes (cont.):", "- You have to give a 5 sentence summary of a random topic given to you by the host every 3rd night. If you fail to do so, you explode, killing you and your closest living neighbors.\n- If Viri is hosting and they allow this role to exist, then they must give nitro to the person who dies first if their faction wins. They don’t really have to, but if they don’t then uhhh they are roleblocked the first night of the next game they play. This attribute overwrites any rules that say that they can’t be affected by roles that don’t exist.\n- If anyone says the phrase “Wiggly Worms Workin Out At The Gym” (with capitalization exactly as shown) then immediately reroll this into a different non-good faction role\n- You must choose your own goal at the beginning of the game. Cannot be “I win immediately” or anything along those lines. The goal must be somewhat difficult to achieve. This is determined by ME (Spaggyt3) if the goal is ok.");

		e.addField("Goal:", "Fuck idk make one yourself");
	});

	register_role(["cockblocker", "3482"], "Town", "Cockblocker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3482\n*Mf gets no bitches 💀*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. If they identify as male, they can't roleblock players tonight. Otherwise, they can't be roleblocked tonight.");

		e.addField("Attributes:", "- You get another TS role in addition to this one because this one sucks balls. You may multitask this role's ability with it.\n- You're roleblock immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["more_roles", "moreroles", "mr", "3483"], "Neutral", "More Roles", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3483\n\"don't make more roles\" - Famous last words");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make more roles. The next role you post in <#970046125065265202> will exist for the purposes of this game.\n- Convert someone into one of the roles you made.");

		e.addField("Goal:", "Create three roles with your ability.");
	});

	register_role(["blackjack_dealer", "blackjackdealer", "blackjack", "dealer", "bjd", "3484"], "Neutral", "Blackjack Dealer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3484");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- During the day, challenge 1-5 players to a game of blackjack\n- Playing chip\n- Playing chip\n- Playing chip\n- Playing chip\n- Playing chip");

		e.addField("Attributes:", "- When you challenge a player, they will be roleblocked that night through immunities and will be given the message “You were carried to a casino and forced to play a game of blackjack.”\n- You have a night chat with all the players, except when you speak you appear as “The Dealer”\n- All players, including you, are forced to bet one of their abilities.\n- You can challenge players as many times as you desire, as long as they still have something to bet\n- If you lose all your playing chips, you die\n- If people lose all their abilities, they commit suicide due to debt\n- Any abilities you win are converted into playing chips\n- Players can spend 5 playing chips to purchase another ability from a role that’s in the same slot as them (Town killing roles will get another town killing role’s ability)\n- Since you’re playing as the house, you know if the next card will make you go over 21, but don’t know which card it is");

		e.addField("Goal:", "Successfully accumulate 10 playing chips");
	});

	register_role(["uninvestigator", "investigator", "3485"], "Town", "Uninvestigator", {subCat: "Uninvestigative"}, (e) =>
	{
		e.setDescription("Post 3465");

		e.addField("Alignment", "Town Uninvestigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate someone at night");

		e.addField("Attributes:", "- For the rest of the game, their investigative results will always be wrong. (Sheriffs will find the wrong result, invest will get a set of roles that isn’t the correct one, consig will also receive false info)\n- This is mechanically a town role in every way except win condition");

		e.addField("Goal:", "See the good faction lose (May win while dead)");
	});
};
