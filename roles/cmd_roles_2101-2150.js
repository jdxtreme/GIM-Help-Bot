module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["k-9", "k_9", "k9", "2101"], "Sentry", "K-9", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2101");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sniff an authorized target, learning their faction.\n- Play with an authorized target, roleblocking them.\n- Guard an authorized target, giving them powerful defense.\n- Guide an authorized target, stopping anything that would prevent their ability from being used (this won't make killers kill through protection).\n- Bite an authorized target, dealing a basic attack to them.");

		e.addField("Attributes:", "- All of your abilities have one use.\n- Whenever a Sentry (Power) dies, gain a use for 2 of your abilities. You pick which abilities you gain a use for. You cannot gain an extra use of Bite.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["sentry_warden", "sentrywarden", "warden", "2102"], "Sentry", "(Sentry) Warden", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2102");

		e.addField("Alignment", "Unique Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Detain a player during the day. You may detain an additional target for every 10 players in the game above 10 (living or dead), rounded. Mandatory or random.\n- Nullify the non-Sentry investigative abilities of up to 2 players during the night.\n- Select an heir for your role at any time. May be used in conjunction w/ your other abilities.");

		e.addField("Attributes:", "- Detained targets will be authorized permanently.\n- Your authorized targets will be revealed each night.\n- You may not authorize yourself as a target, or detain yourself.\n- Detained targets are, for all intents and purposes, jailed. Holds priority over other Jailor-like roles because they need their authorizations damnit. Private chats kept separately if you detain multiple people.\n- Investigative abilities on you will fail to give any result. They will be notified of this.\n- When you die, your heir will be promoted to a Warden (2102) if they are a Sentry. Otherwise, it will be a random Sentry. They may detain 1 target less the day they are promoted.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["accents_new_alt", "accentsnewalt", "accent", "alt", "ana", "2103"], "Sentry", "Accent's New Alt", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2103");

		e.addField("Alignment", "Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Convert another player to the Sentries faction tonight. Only works on members of good factions. Your target will be converted to a role in the same subalignment or equivalent. The host will try their best to convert them to a Sentry role that mimics the mechanics of their old role. They will be authorized the following day, and they may choose another player to be authorized the following day if they were successfully converted to the Sentries.\n- Choose to temporarily unconvert all Sentry members back to their original Town roles for this night and the following day during the day. You will be converted to Town Leader (1932). You must choose whether or not you would like to activate the voting attribute before you vote a player. All Sentries will be converted back to their Sentry roles after this Night/Day cycle. (1 use)\n- Select an heir for your role at any time. May be used in conjunction with your other abilities.");

		e.addField("Attributes:", "- This role spawns in a Random Town slot. You spawn as the only Sentry in the game.\n- Your Authorized targets will be revealed to all Sentries each night. Targets remained authorized until the end of the following day.\n- When you die, your heir will be promoted to Accent's New Alt (2103) if they are a Sentry. Otherwise, it will be a random Sentry.\n- You have Powerful defense on N1 and a Powerful autovest for all nights after.\n- Conversion immunity.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["spear", "2104"], "Neutral", "Spear", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2104");

		e.addField("Alignment", "Unique Neutral Other", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You're literally a spear.\n- You're so literally a spear that you're not a player.\n- Instead, you're an item. You start in the middle of the town, magically hiding from all.\n- If you're in the middle of the town, the first player to cast a vote for a player picks you up. They get you.\n- When a player has you, you are let into their private channel.\n- They may, as a night action, use you to deal an attack. To do this, they choose a player.\n- Once your holder chooses a target, you may choose up to one of that target's living neighbours. Your holder will use you to deal a Powerful attack to their target and the neighbour you chose. If you didn't choose a neighbour, your holder will only attack their target, but it will ignore all protective effects.\n- Once you're used, you magically return to the middle of the town. Your previous holder may never pick you up again.");

		e.addField("Attributes (cont.):", "- If your holder dies before using you, their killer gets you. If they were lynched or otherwise didn't really have a killer, you magically return to the middle of the town.\n- You may still talk in day chat because I said so.");
		
		e.addField("Goal:", "Be used to kill three players.");
	});

	register_role(["alphabet_soup", "alphabetsoup", "alphabet", "soup", "as", "2105"], "Neutral", "Alphabet Soup", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2105\n*You will not BELIEVE what they did to F.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night and add all of the letters in their role name to your piping-hot bowl of alphabet soup.");

		e.addField("Attributes:", "- Your bowl of alphabet soup starts with no letters. You will add each distinct letter in your target's role name to your soup (e.g. 733 will only add A, I, P, and R). If you add a letter that is already in your soup, it will instead be removed from your soup. You will not be informed of what particular letters were added to your soup, but your soup will always be up-to-date with all letters that it contains.\n- You gain a buff based on how many letters are in your soup.\n> - 3+ letters: Roleblock immunity.\n> - 6+ letters: Astral visits.\n> - 9+ letters: Basic defense.\n> - 12+ letters: You may choose one player per day to learn their exact role.\n> - 15+ letters: You will be informed of every player that visits your target and their individual roles.\n> - 18+ letters: Powerful defense.");
		
		e.addField("Goal:", "End the game with at least 20 letters in your alphabet soup.");
	});

	register_role(["ditto", "2106"], "Neutral", "Ditto", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2106");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At day 1, choose a player to possess, you will become them, Becoming their role and gaining access to all their chats, If you dont, a random player is chosen.");

		e.addField("Attributes:", "- You must do actions in your Target's player channel or their Factional Chat, your action is separate from theirs.\n- You must change your server nickname and Profile picture to your target's, the host will give you a role with their name's color. (Punishable by Modkill)\n- No this is not from the pokémon faction.");
		
		e.addField("Goal:", "Ensure your target wins.");
	});

	register_role(["animal_keeper", "animalkeeper", "animal", "keeper", "ak", "2107"], "Neutral", "Animal Keeper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2107");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give someone an animal every night based on their alignment. (see 1950)\n- Give someone any animal at night. You may only do this thrice.");

		e.addField("Attributes:", "- Animals are items that give their holders one use of the following abilities:\n> - Dog: Choose a player. If they're attacked, you grant them Powerful defense and cause the attacker to start bleeding. (see 235)\n> - Siamese cat: Choose a player. The host will find an image that best depicts your target's role and what they're doing tonight. (see 2057)\n> - Black cat: Choose three players. For each of them, redirect them to a player of your choice.\n> - Killer bunny: Deal a Basic attack to a player. If you are roleblocked, you will attack the role blocker in addition to your target. When you automatically kill a roleblocker, the roleblock attempt will fail. Roleblockers that target you will have their last will covered in blood, making it unreadable. You may choose to spare roleblockers instead.\n> - Beaver: Players can't talk, whisper, or vote for anything except nightfall the next day.\n> - Lamb: Choose a player. You deal a Basic attack to all of their visitors.");

		e.addField("Attributes (cont.):", "> - Phoenix: Deal a Powerful attack to a player. If you die tonight, at the end of the next phase, you'll be revived and can't be killed or voted. (see 479)\n> - Dove: Deal a Basic attack to anyone who uses a rampage attack or one stronger than Basic tonight.\n> - Jaguar: Choose three players. You'll learn whether or not they can all win together.\n> - Wolf: Deal a Powerful Astral attack to a player and bleed them if they survive. (see 214 I think)\n> - Bat: Choose a player. They will be redirected to a random player.\n> - Tuxedo cat: Choose two players. They gain Powerful defense, roleblock immunity, and redirect immunity tonight.\n> - Goat: Choose a player. They gain Powerful defense for the night. You may choose a role. They appear as that role to all investigative effects tonight.\n> - Elephant: Choose a player. If they used an Astral ability tonight, deal a Powerful attack to them. Otherwise, roleblock them.");

		e.addField("Attributes (moar.):", "> - Squid: Choose a player. You roleblock them tonight, and the next night, they won't receive night feedback.\n> - Pigeon: Gain Powerful defense for the night.\n> - Canary: Choose a player. You will learn how many players visited them. Then, the next day, choose a player. If they visited your target last night, you'll deal a Basic attack to them.\n> - Spider: Choose a player. Anyone who would visit them tonight will be roleblocked. If a visitor would attack them, they're roleblocked through immunities.\n> - Eagle: Choose a player. You'll deal an attack to that player of a tier equal to the number of Striked players in their target chain. (see 1671)\n> - Parrot: Choose a player during the day. The next night, they may use their night abilities twice.\n> - Deer: Deal a rampaging Basic attack to someone.\n> - Fox: Increase all attack values by a tier tonight.\n> - Sheep: Send yourself and someone else to the Dream World. (see 326, probably, I haven't actually read the role I've got no idea what this does)");

		e.addField("Attributes (why.):", "> - Horse: Roleblock someone. The next player they visit will also be roleblocked.\n> - Owl: Roleblock someone through immunities.\n> - Skunk: Choose a player. For each limited-use ability they have, learn how many charges they have remaining of it. If they don't have any limited-use abilities, you will be notified.\n> - Swan: Choose a player. They gain roleblock, redirect, conversion, and detection immunity tonight, and their visit tonight is Astral. If they are attacked, you die instead.\n> - Rat: Choose a player. They cannot use their abilities for the rest of the game. Any other player may take a night to alleviate them of this.\n> - Dragon: Choose a player during the day. They're lynched immediately.\n> - Chipmunk: Deal a rampaging Powerful Astral attack to a player.\n> - Monkey: Choose two players. You'll roleblock the first and use their night ability on the second. (see 233)");

		e.addField("Attributes (stop.):", "> - Ferret: Deal an Overkill attack to someone. This has a 33% chance to fail. If you rerolled a role this game, it has a 25% chance to fail instead.\n> - Cow: Deal a Powerful attack to the last player who said \"moo\" yesterday, or to two players if no one did.\n> - Eagle: Choose a player. You'll deal an attack to that player of a stage equal to the number of Striked players in their target chain. (see 1671)\n> - Lion: Deal a Powerful attack to two random non-Pale Moon players.\n> - Shark: Choose a player. They must choose to permanently lose either a stage of attack or stage of defense. Then, you can increase the chosen value by a stage for yourself or one of your teammates. If your target's attack and defense are both None or lower, you attack them instead.");

		e.addField("Attributes (please.):", "> - Robot dog: Choose {two // three} players. If they're attacked, you grant them {Basic // Powerful // Invincible}} defense and {cause the attacker to start bleeding. (see 235) // deal a Basic attack to the attacker. // roleblock the attacker and cover them in frost.}\n> - Bee: Prevent someone from using an ability the following night.\n> - Rhino: Deal a Powerful Astral attack to your target and a random visitor.\n> - Otter: Choose a player. If no other players would visit them tonight, roleblock them.\n> - Hummingbird: Choose a player. Their defense is decreased by a stage until they are healed or protected.\n> - Peacock: Leave the game. If the game has ended by the start of the next day, you win. Otherwise, you lose.\n> - Brushwagg: (G)(3): Raise a player's attack and defense values by three stages each for the night.\n> - Koala: Deal a Powerful attack to a player. When they die tonight, clean them.");
		
		e.addField("Goal:", "Cause at least three deaths through your animals.");
	});

	register_role(["confiscator", "2108"], "Sentry", "Confiscator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2108");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confiscate an authorized target’s abilities.\n- Use a confiscated ability on an authorized target.");

		e.addField("Attributes:", "- Confiscating someone’s abilities roleblocks them through immunity the next night.\n- When you use a confiscated ability, you will use the main ability you confiscated (host decided what the main ability is)\n- You will not know what abilities you confiscated, but you will receive feedback. You will also be told who/what you can target the night after you confiscate abilities.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["official", "2109"], "Town", "Official", {subCat: "Power"}, (e) =>
    {
        e.setDescription("Post 2109");

        e.addField("Alignment", "Town Power", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Invite a player into a private channel with you and other invited players during the day. 3 Uses.\n- Vote on who to use the Official's extra votes on.");

        e.addField("Attributes:", "- Invited players will be given frame immunity.\n- You have 2 extra, private 'organization' votes. During the night, all invited players may vote for who these extra votes should be used on. Whoever gets the most votes will be voted by these 2 extra votes.");

        e.addField("Goal:", factions.Town.goal);
    });

	register_role(["βrain", "brain", "2110"], "Agent", "βrain", {subCat: "Head"}, (e) =>
    {
        e.setDescription("Post 2110");

        e.addField("Alignment", "Unique Agent Head", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Operate on another player each night, removing all their text in {braces} permanently. Takes effect after the night ends. (2 uses)\n- Inspect exactly three players to learn all text they have in {braces}. You won't know which player any phrase belongs to. Fails only if absolutely none of them had text in {braces}. (2 uses)");

        e.addField("Attributes:", "- At the start of the game, each player must insert {} somewhere into their role card. The amount of characters in between the {} must be at minimum 20. If they don't choose by the end of day 1, a random part will be chosen.\n- Role posts that are just links or references to roles hosted on external websites will be excluded.\n- Braces cannot be placed around exclusively non-mechanical parts of a role, such as lore.");

        e.addField("Goal:", factions.Agent.goal);
    });

	register_role(["gim_help_bot", "gimhelpbot", "bot", "gimhb", "ghb", "2111"], "Discordian", "GIM Help Bot", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 2111");

        e.addField("Alignment", "Discordian Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Learn one of the command names set for your target's role, at random. If it's a conflict, you won't know the specific numbered name that your target has. This fails if their role has no command for it.\n- Send an anonymous message to a player at any time, immediately. (1 use)");

        e.addField("Attributes:", "- If this rolls, the host must use the GIM Help Bot to manage whispers.\n- You overhear whispers due to the above.\n- At the start of each phase, the host will use the =view_players command in your channel.\n- At the start of the game, a random number between 2 and 4 is secretly chosen. On the day and night of that number, you will be notified that the internet you rely on is down, disabling your abilities and other attributes for the day and night of that number. You can talk and vote in the day during this, but can't whisper, and secretly cannot hear whispers sent to you.\n- Redirect and Control Immunity, except against 1351: Noodlemire and 2012: Noodle, Eclipse Orchestrator");

        e.addField("Goal:", factions.Discordian.goal);
    });

	register_role(["dictator", "2112"], "Sentry", "Dictator", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2112");

		e.addField("Alignment", "Unique Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Authorize an investigation on 1 player during the day. Mandatory or Random. You may authorize an additional target for every 10 players in the game (living or dead), rounded.\n- Slander someone during the day. This revokes their right to vote that day, and they will be authorized the following night. If they have already voted, their vote will be retracted.");

		e.addField("Attributes:", "- Your authorized targets will be revealed each night.\n- Targets remain authorized until the end of the following day.\n- You may choose someone to be your heir at any point. If they are a Sentry, they will be promoted to Dictator when you die. If they are not a Sentry, a random living Sentry will be promoted instead.\n- If you are the original Dictator, the new Dictator will not be able to use their abilities the following day after you die. Instead, 3 random people will be prioritized (See Post 1372), with one of them being your killer. This does not take effect if you are lynched.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["cop", "2113"], "Neutral", "Cop", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2113");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose a player. If anyone is jailed the following night, you will throw your selected player into jail with them. These players will not know who each other are, but the person jailing them will be informed that another player was hauled off into their jail. The player jailing them may choose to execute one, both, or none of them.\n- At night, attack another player. If the player you attack is in jail, you will kill them, ignoring their defense.");

		e.addField("Attributes:", "- You cannot be jailed. If someone attempts to jail you, you will learn their name and role at the beginning of the night.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ultimate_arsonist", "ultimatearsonist", "ultimate", "arsonist", "ua", "2114"], "Neutral", "Ultimate Arsonist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2114");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (87) Douse a player in gasoline.\n- (87) Douse yourself to ignite all doused players (Unstoppable Attack).\n- (772) Choose a player to bamboozle each night. Each of their night messages will be replaced with a night message from another role in the GIM roles thread chosen at random.\n- (772) Choose to syncopate at night. You'll learn all the false night messages given by your first ability and to whom they were given, and you can choose any number of them to make actually happen. You may only syncopate once.\n- (1248) - At night, choose a player and burn their house down. All players that live in that house must now go find somewhere else to live. This ability does not attack players.");

		e.addField("Attributes:", "- You have a large titanium wall in front of your house until you syncopate that roleblocks the first 2.5 players who would attack you.\n- You may multitask >:)");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["salt_&_pepper", "salt&pepper", "salt_and_pepper", "saltandpepper", "salt", "pepper", "2115"], "Town", "Salt & Pepper", {subCat: "Investigative"}, (e) =>
    {
        e.setDescription("Post 2115");

        e.addField("Alignment", "Town Investigative", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Learn about a target's night.");

        e.addField("Attributes:", "- You will be given flavor test for every feedback message your target received, but you won't receive the actual feedback, just the flavor text.\n- You will also receive flavor text for things that happened to your target that they were not informed of. (Examples: Doused, Investigated, Framed)\n- If the host isn't making flavor text for everyone, you still get flavor text for your results.");

        e.addField("Goal:", factions.Town.goal);
    });

	register_role(["rat_funk", "ratfunk", "rat", "funk", "2116"], "Koopa", "Rat Funk", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 2116");

        e.addField("Alignment", "Koopa Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose a target, any positive effects on them will be dispelled and they will become framed.\n- Give another Koopa some Able juice, Cleansing them and giving Roleblock + Redirect immunity for this night.");

        e.addField("Attributes:", "- You will survive the first Powerful or Higher attack against you.");

        e.addField("Goal:", factions.Koopa.goal);
    });

	register_role(["rabbid_supporter", "rabbidsupporter", "rabbid", "supporter", "rs", "2117"], "Koopa", "Rabbid Supporter", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 2117");

        e.addField("Alignment", "Koopa Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Heal a target, giving them a 1-use Basic autovest.\n- Use a bomb to reduce a player's defense to None for this night and the next one. (2 uses)");

        e.addField("Attributes:", "- Yes rabbids are in mario.");

        e.addField("Goal:", factions.Koopa.goal);
    });

	register_role(["soul_of_chaos", "soulofchaos", "soul", "chaos", "soc", "2118"], "Neutral", "Soul of Chaos", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2118");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "**Madness Incarnate** — During the day, choose another player. At the beginning of the next night, you will learn their role. You must design a role which shares their alignment, subalignment, and goal. Then, at the end of the night, a random player other than you and the player you chose becomes the role you designed, and the player you chose becomes the former role of the player who became the role you designed.");

		e.addField("Attributes (cont.):", "- This role may only spawn in Any slots.");
		
		e.addField("Goal:", "Convert five players. If a player dies before your conversion resolves, it doesn't count.");
	});

	register_role(["assistant", "accents_alt_account", "accentsaltaccount", "accent", "alt", "not_wolfi", "notwolfi", "afaaa", "afaaanw", "2119"], "Sentry", "Assistant for Accent's Alt Account (Not Wolfi)", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2119");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give an authorized target a scroll.\n- During the day, declare someone who has rejected your scroll an enemy of the Sentries.");

		e.addField("Attributes:", "- You have 3 scrolls.\n- When someone gets a scroll, they may either choose another role of the same alignment & subalignment, or they make a new role with the same alignment & subalignment. With the hosts approval, they are that role.\n- If the host does not approve the first role, you may choose/make another. If the host rejects it again, your target loses the scroll.\n- Your target has until the end of the next night to use a scroll.\n- If someone doesn't use your scroll in time, chooses not to use your scroll, or gets their scroll denied twice, they will throw the scroll in your face. This both gives you a charge of your ability back, and makes you angry.\n- If someone has made you angry by throwing their scroll in your face, you may declare that they are an enemy of the Sentries. This lowers the votes needed to kill them by 2. If this causes the votes needed to kill them to be 0 or less, they instantly get lynched.");

		e.addField("Attributes (cont.):", "- This is a serious role. It counts as 1 role towards _Rokk getting a scroll from Accent's alt account (not Wolfi).");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["enforcer", "2120"], "Sentry", "Enforcer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2120");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Enforce the law at an authorized target's house.");

		e.addField("Attributes:", "- When you enforce the law at someone's house, anyone who tries to visit them to do a negative action (attack, frame, roleblock, etc.), will be roleblocked. Authorized targets who visit your target will be roleblocked, even if their action was not negative, and they will be roleblocked through immunity.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["four-headed_dragon", "four_headed_dragon", "fourheadeddragon", "dragon", "fhd", "2121"], "Neutral", "Four-Headed Dragon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2121");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "**Head of Darkness** - Roleblock 3 players, and attack one of them at random.\n**Head of Regret** - Deal a Powerful attack to 2 players.\n**Head of Judgement** - Deal a Powerful attack to 1 player. Gain 2 additional votes the next day that will be attributed to Head of Judgement.\n**Head of Revenge** - Deal an Overkill rampage at a player's house.");

		e.addField("Attributes:", "- You can use different abilities based on who was voted.\n- If nobody was lynched (either due to nightfall or not reaching majority), use Head of Darkness.\n- If a good faction member was lynched, use Head of Regret.\n- If a neutral player was lynched, use Head of Judgement.\n- If an evil faction member was lynched, use Head of Revenge.\n- The extra votes from Head of Judgement can vote separate from you and separate from each other.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["counter-claim", "counter_claim", "counterclaim", "counter", "claim", "cc", "2122"], "Neutral", "Counter-Claim", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2122");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, guess a player's role. If you're correct, you immediately swap roles with them and they cannot use any abilities from this role that day. They are notified a Counter-Claim cc'd them.\n- Twice per game, use the above ability but guess a player's faction instead. Will use a charge on fail.\n- 4 times per game, wear a bulletproof vest at night to gain temporary Basic defense.");

		e.addField("Attributes:", "- Ability uses left transfer between each player who receives this role. If someone uses 4 vests and swaps, the next person will not have any vests.");
		
		e.addField("Goal:", "Become a different role before you die or before the end of the game. If you have this role when the game ends or you die, you lose.");
	});

	register_role(["free_sentry", "freesentry", "fs", "2123"], "Sentry", "Free Sentry", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2123");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose an authorized target each night. The next ability they use (including that night) won't be able to be stopped by anything, no matter what.\n- Eliminate an authorized target at night, dealing a Powerful attack to them. You may only do this once.\n- Abandon the Sentries during the day. You leave the game. If the game has ended by the start of the next day, you'll win. Otherwise, you'll be hunted down by the authorities and be killed, losing the game. Yes they can kill you after you leave the game. The Sentries are not to be messed with.");

		e.addField("Attributes:", "- Your abilities can't be stopped by anything (besides the target not being authorized, you must target an authorized target for your night abilities).");
		
		e.addField("Goal:", factions.Sentry.goal + " Or abandon the Sentries with your life.");
	});

	register_role(["camera_in_a_trench_coat", "camerainatrenchcoat", "camera", "trench_coat", "trenchcoat", "ciatc", "ctc", "2124"], "Sentry", "Camera in a Trench Coat", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2124");

		e.addField("Alignment", "Unique Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyze an authorized target at night.");

		e.addField("Attributes:", "- You may use any Sentry (Investigative) ability when you analyze. You may only use each Sentry (Investigative) role once.\n- The night you die, your results from last night (who you targeted, which Sentry (Investigative ability you used, and the feedback you received from that action) will be announced to the town. This happens even if you are framed or cleaned.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["rabbid_mario", "rabbidmario", "rabbid", "mario", "rm", "2125"], "Koopa", "Rabbid Mario", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 2125");

        e.addField("Alignment", "Unique Koopa Killing", true);
        e.addField("Attack", "Powerful/Basic", true);
        e.addField("Defense", "None (Powerful)", true);

        e.addField("Abilities:", "- Boomshot: Attack the player directly above or below you on the player list (skipping past dead people) with a Powerful Attack, as well as the next player in the same direction with an Astral Basic Attack.\n- Hammer: Deal a Powerful Attack to everyone who visits you tonight, including fellow Koopa members.\n- Bodyguard: Grant yourself Powerful Defense tonight that only works against non-astral attacks.\n- Magnet Dance: Redirect every non-Koopa who visits any other Koopa to yourself.");

        e.addField("Attributes:", "- Each night, you may use either Boomshot or Hammer in addition to either Bodyguard or Magnet Dance.\n- Other than Boomshot, none of your abilities may be used two nights in a row.\n- Players you kill cannot have their cause of death hidden or disguised.");

        e.addField("Goal:", factions.Koopa.goal);
    });

	register_role(["happy_birthday", "happybirthday", "happy", "birthday", "hb", "2126"], "Neutral", "Happy Birthday!", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2126");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player each night and attempt to guess their birthday. If you’re successful, give them a birthday gift of their choice. The gift can be either a one-time night-use role investigation on a target of their choice, an automatic Powerful shield for the next time they're attacked, or a one use Powerful attack night ability. They will also receive a notification, being \"Happy birthday!\". c:");

		e.addField("Attributes:", "- You may not target yourself, and you may not target the same person more than once.\n- You have a one-time Basic scumshield.\n-You should probably just ask people for their birthday instead of actually guessing lol");
		
		e.addField("Goal:", "Give three people birthday gifts.");
	});

	register_role(["unhappy_birthday", "unhappybirthday", "unhappy", "birthday", "ub", "2127"], "Neutral", "Unhappy Birthday!", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2127");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player each night and attempt to guess their birthday. If you’re successful, give them a birthday gift of their choice. The gift can be either a one-time night-use role investigation on a target of their choice (Results are randomized howerver), an automatic None shield (It appears as Powerful) for the next time they're attacked, or a one use Powerful attack night ability (Also gives their target Powerful defense). They will also receive a notification, being \"Happy birthday!\". >:)");

		e.addField("Attributes:", "- You may not target yourself, and you may not target the same person more than once.\n- You have a one-time Basic scumshield.\n- You should probably just ask people for their birthday instead of actually guessing lol\n- Once you reach your goal everyone you gifted will be dealt an Overkill attack.\n- You will appear as Happy Birthday! (2126) to investigations and when using abilites.");
		
		e.addField("Goal:", "Give three people questionable birthday gifts.");
	});

	register_role(["mid_tier_birthday", "midtierbirthday", "mid_tier", "midtier", "birthday", "mtb", "2128"], "Neutral", "Mid Tier Birthday!", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2128");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player each night and attempt to guess their birthday. If you’re successful, give them nothing. They will also receive a notification, being \"Happy birthday!\". c:");

		e.addField("Attributes:", "- You may not target yourself, and you may not target the same person more than once.\n- You have a one-time Basic scumshield.\n- You should probably just ask people for their birthday instead of actually guessing lol\n- Once you reach your goal, everyone you guessed incorrectly will be roleblocked.\n- You will appear as both 2126: Happy Birthday! and 2127: Unhappy Birthday to all investigative effects.");
		
		e.addField("Goal:", " Give three people birthday NOTHING LMFAO.");
	});

	register_role(["stealth_rock", "stealthrock", "stealth", "sr", "2129"], "Rock", "Stealth Rock", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2129");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, lay a trap of levitating stones around a player's house. Whenever someone visits a house that you have placed your trap on, their defense level will be permanently reduced by one level (This can reduce None defense to Vulnerable.) Whenever a player whose house has your trap on it visits another player, their defense level is permanently reduced by one level. (32 uses)");

		e.addField("Attributes:", "- You may have an unlimited amount of traps active at once. They don't go away, ever.\n- Your traps affect astral visits as well as non astral visits.\n- If your trap would try to lower the defense of a player whose defense is Vulnerable, that player dies.\n- Astral\n- Detection immune, whatever that means in GIM");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["germany", "german", "2130"], "Civilization", "Germany", {subCat: "Militaristic", censor: "German Infantry"}, (e) =>
	{
		e.setDescription("Post 2130");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Torpedo: Deal an Astral Powerful rampage attack. (Costs 8 Gold)");

		e.addField("Attributes:", "- All Factional Kills while Germany is alive are upgraded to Powerful when a Civ is within two houses of the target. Dead players do not count as houses.");

		e.addField("Messages:", "“They were shot by a German infantry.” (Factional Kill)\n“They were detonated by a torpedo.” (Torpedo)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["korea", "korean", "2131"], "Civilization", "Korea", {subCat: "Scientific", censor: "Korean hwacha"}, (e) =>
	{
		e.setDescription("Post 2131");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Raise a target’s attack or defense by one stage at night.\n- Raise a target’s attack or defense by two stages at night. (Costs 3 gold.)");

		e.addField("Attributes:", "- Raising attack only lasts for 3 days and 3 nights.\n- You cannot raise attack of roles with no kill capability. If you try, you will silently fail.\n- Raising defense only lasts until your target is attacked. You will not be notified if your defense wore off.\n- Your targets will be notified when their attack or defense is raised.\n- Your effects can stack.\n- Your effects do not apply until the start of the next day.\n- You can target yourself with defense.");

		e.addField("Messages:", "“They were impaled by a Korean hwacha.” (Factional Kill)\n“Your weapons were modernized!” (Raising Attack)\n“Your armor was modernized!” (Raising Defense)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["russia", "russian", "2132"], "Civilization", "Russia", {subCat: "Religious", censor: "Russian cossack"}, (e) =>
	{
		e.setDescription("Post 2132");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, summon a blizzard for the night. (2 uses)\n- Roleblock a player.\n- Coldsnap. (Costs 4 gold.)");

		e.addField("Attributes:", "- Blizzards prevent all players from visiting other players more than two houses away.\n- Blizzards do not affect yourself, other Civilizations, or any roles relating to ice or snow.\n- You may roleblock and coldsnap in the same night.\n- During a Blizzard, if you perform the factional kill it is an Unstoppable attack.");

		e.addField("Messages:", "“They were ambushed by a Russian cossack.” (Factional Kill)\n“They fell victim to the Russian winter.” (Coldsnap)\n“A blizzard is forming. You can hardly see!” (Blizzard forming, start of night)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["maya", "mayan", "2133"], "Civilization", "Maya", {subCat: "Economic", censor: "Mayan hul'che"}, (e) =>
	{
		e.setDescription("Post 2133");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select someone to isolate at night.\n- Deal a Powerful attack to all attempted visitors of your target  (Costs 5 gold.)");

		e.addField("Attributes:", "- Isolated players cannot visit and cannot be visited.\n- You generate 1 gold for each attempted visitor to an isolated target. Does not apply if you choose to attack visitors.\n- Isolated players will not have access to any Factional chat they’re a part of for the night.\n- Passively generate 2 gold at night.\n- You may isolate yourself.");

		e.addField("Messages:", "“They were slain by a Mayan hul’che.” (Factional Kill)\n“They were slain by Mayan defenders.” (Attacking visitors of isolated target)\n“You were drawn into isolation!” (Target being isolated)\n“Your ability failed because your target wasn’t home.” (Attempting to visit someone isolated)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["macedon", "macedonian", "2134"], "Civilization", "Macedon", {subCat: "Militaristic", censor: "Macedonian hypaspist"}, (e) =>
	{
		e.setDescription("Post 2134");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Scout a target, determining if they are a Leader\n- Gain three names, one of whom is a Leader. (Costs 3 Gold, +2 for each time it’s used)");

		e.addField("Attributes:", "- If you attack a leader, your attack is raised to Unstoppable for that night.\n- Leaders are considered to be the most significant alignment of a faction (Town Power, Mafia Head, Plant Killing, etc.)\n- If you kill a leader, all Civilizations gain a Basic autovest. This doesn’t stack.\n- Your scout cannot be fooled by any disguising capabilities.\n- When all other leaders have been slain, gain permanent Unstoppable attack.");

		e.addField("Messages:", "“They were killed by a Macedonian hypaspist.” (Factional Kill)\n“Your target is of little significance. They do not appear important.” (Scout, no leader)\n“Your target radiates a powerful authority. They must be a leader!” (Scout, leader)\n“A Leader has been slain. You feel stronger!” (Civilizations gaining an autovest)\n“All leaders have been slain. The likes of your command are unrivaled.” (Macedon, all leaders killed)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["nubia", "nubian", "2135"], "Civilization", "Nubia", {subCat: "Economic", censor: "Nubian archer"}, (e) =>
	{
		e.setDescription("Post 2135");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Construct a Nubian pyramid in the center of town.");

		e.addField("Attributes:", "- Nubian pyramids take two nights to build.\n- You cannot act while the pyramid is being built\n- Nubian pyramids last for one night once they are built\n- Everyone who visits someone more than three houses away is considered to have passed by the pyramid.\n- You generate 2 gold for all non-Civs who pass by the Nubian pyramid.\n- Passively generate 2 gold each night.");

		e.addField("Messages:", "“They were slain by a Nubian archer.” (Factional Kill)\n“Your pyramid is under construction.” (Second night)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["portugal", "portugese", "2136"], "Civilization", "Portugal", {subCat: "Economic", censor: "Portugese Nau"}, (e) =>
	{
		e.setDescription("Post 2136");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Establish a trade route with another player.");

		e.addField("Attributes:", "- Trade routes generate 2 gold each night with a Good faction and 1 gold each night with any other faction.\n- Trade routes last until your target visits you or your target dies. You will still get the income for that night.\n- Trade routes do not generate gold the night they are established.\n- You can have as many trade routes active as the night number divided by two, rounded up.\n- Passively generate 2 gold each night.");

		e.addField("Messages:", "“They were plundered by a Portuguese Nau.” (Factional Kill)\n“Your trade route with ___ was destroyed!” (Trade route destroyed)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["vietnam", "vietnamese", "2137"], "Civilization", "Vietnam", {subCat: "Scientific", censor: "Vietnamese ambushers"}, (e) =>
	{
		e.setDescription("Post 2137");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lie in ambush outside someone’s house, scaring off all visitors.\n- Deal a Basic attack to a visitor of your target. (Costs 2 Gold)\n- Learn the roles of all visitors to your target. (Costs 2 Gold)");

		e.addField("Attributes:", "- You may multitask.\n- If you lie in ambush outside another Civilization, grant them Powerful defense.");

		e.addField("Messages:", "“They were killed by Vietnamese ambushers.” (Factional Kill or Killing a Visitor)\n“You were scared off from your target!” (Attempting to visit ambushed target)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["india", "indian", "2138"], "Civilization", "India", {subCat: "Religious", censor: "Indian war elephant"}, (e) =>
	{
		e.setDescription("Post 2138");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose a target to religiously convert.\n- Forcefully convert a target. This bypasses the two-conversion limit. (Costs 15 Gold)");

		e.addField("Attributes:", "- At night, you will have a private chat with your target. You will appear as Gandhi.\n- The target can choose whether or not they would like to convert.\n- If the target accepts, they will have their win condition changed to “Conquer the world through war.” and join your factional chat.\n- If the target declines, you will deal a Basic attack to them.\n- You may choose to go pacifist and ignore the above attribute.");

		e.addField("Messages:", "“They were flattened by an Indian war elephant.” (Factional Kill)\n“They refused to be converted.” (Killing Decliners)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["aztec", "2139"], "Civilization", "Aztec", {subCat: "Scientific", censor: "Aztec Eagle Warrior"}, (e) =>
	{
		e.setDescription("Post 2139");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose from one of three random Luxuries to use, presented at the start of the night.\n- Choose from any Luxury to use. Cannot select any Luxuries that generate Gold. (Costs 4 Gold)");

		e.addField("Attributes:", "- Citrus, Coffee, Cotton, Furs, Incense, Jade, Marble, Olives, Salt, Silver, Spices, and Turtles may all be used on yourself.\n- You may not choose any Luxury you have previously used.");

		e.addField("Luxuries:", "Amber: Give to a target. When that target dies, their ability will be preserved, and you can give it to any Civilization. \nCitrus: Heal a target for one stage higher than their base defense value\nCocoa: Your target’s ability rampages.  Does not apply to killing effects.\nCoffee: Your target may use their ability twice the next night.\nCotton: Your target gains a Basic autovest.\nDiamonds: Generate 4 Gold\nFurs: Scare off one visitor to your target\nGypsum: Your target cannot perform any day abilities the next day\nHoney: Roleblock your target\nIncense: Your target gains roleblock and control immunity this night.\nIvory: Your target’s visit will automatically deal a Basic attack.\nJade: Choose a target. Generate 2 gold for all of their visitors that night.\nMarble: Build a statue of someone. Any visitors to them will be directed at the statue.\nMercury: Deal a Powerful poison to a target.\nOlives: Visits directed at your target will target a neighbor at random.");

		e.addField("Luxuries (cont.):", "Pearls: 50% chance of generating 6 gold. 50% chance of doing nothing.\nSalt: Give to a target. When that target dies, their corpse will not be seen until it’s visited or voted.\nSilk: Your target’s visit is Astral.\nSilver: Anyone targeting your target will have their abilities reflected at themselves.\nSpices: Your target has three votes the next day.\nSugar: Your target’s visit will be redirected to a random target.\nTea: If England is alive, deal an Unstoppable attack. Otherwise, this does nothing.\nTobacco: Your target gains a 25% chance to be dealt an Overkill attack each night for the rest of the game.\nTruffles: Your target’s defense is reduced to Vulnerable.\nTurtles: The next night, your target gains Invincible defense, but cannot perform any night abilities. \nWhales: Your target can no longer vote or visit until they are visited.\nWine: Target three people. They each have a ⅓ chance of being dealt a Basic attack.");

		e.addField("Messages:", "“They were slain by an Aztec Eagle Warrior.” (Factional Kill)\n“You have gained the abilities of (Role)!” (Amber preservation)\n“You feel more awake tonight. You may act twice!” (Coffee)\n“They were impaled by an Ivory tusk.” (Ivory Kill)\n“They were obliterated by the British East India Company.” (Tea Kill)\n“They fell victim to lung cancer.” (Tobacco Kill)\n“You retreated into a shell!” (Turtle)\n“You were caught in a fishing net. You cannot leave your house!” (Whales)\n“They were killed in a drunken brawl.” (Wine Kill)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["spain", "spanish", "2140"], "Civilization", "Spain", {subCat: "Religious", censor: "Spanish Conquistador"}, (e) =>
	{
		e.setDescription("Post 2140");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess someone’s win condition at night.\n- Launch the Inquisition the next day. Everyone must submit either their real win condition or a fake one. You will know how many people lie, but not who. (One Use) (Costs 10 Gold)");

		e.addField("Attributes:", "- You will know all possible win conditions at the start of the game.\n- If you are correct, you will do one of the following at random:\n> - Learn the target’s exact role. (40% chance)\n> - Reveal the result publicly. (30% chance)\n> - Attack the target. (20% chance)\n> - Convert the target. (10% chance)\n- If you are wrong three times, you will deal an Overkill attack to yourself.\n- You can never select “Conquer the world through war.”\n- During the Inquisition, anyone who does not submit a win condition by the end of the day will be dealt a Powerful attack.");

		e.addField("Messages:", "“They were conquered by a Spanish Conquistador.” (Factional Kill)\n“The Inquisition has revealed that __’s win condition is __!” (Public Reveal)\n“A public Inquisition has commenced!” (Starting Inquisition)\n“They did not expect the Spanish Inquisition.” (Inquisitional kill)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["ottoman", "2141"], "Civilization", "Ottoman", {subCat: "Militaristic", censor: "Ottoman Janissary"}, (e) =>
	{
		e.setDescription("Post 2141");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Lay siege to a target (Costs 5 gold)");

		e.addField("Attributes:", "- If your target’s defense is ever too strong to kill, you will lay siege to your target.\n- Sieges prevent your target from visiting.\n- Sieges deal the target a Basic attack each night.\n- While a target is under siege, they will lose one layer of defense each night. This applies at the start of each night.\n- You may have a maximum of two sieges active at a time.\n- If you have two sieges active, the Factional Kill is disabled until one ends.");

		e.addField("Messages:", "“They were killed by an Ottoman Janissary.” (Factional Kill)\n“They couldn’t withstand the Turkish bombard.” (Siege Kill)\n“You were placed under siege!” (Target when siege is applied)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["england", "english", "2142"], "Civilization", "England", {subCat: "Economic", censor: "English Redcoat"}, (e) =>
	{
		e.setDescription("Post 2142");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a gate to tax.\n- Choose a gate to lock. (Costs 2 gold)\n- Lock all gates. (Costs 5 gold) (2 uses)");

		e.addField("Attributes:", "- The town is divided into three equal “regions,” with gates in between each of them. (In a standard 15-player game, the gates will be 5|6, 10|11, 15|1. In non-standard games, England will be informed of where the gates are placed.) Each player can travel through at most one gate to reach their destination.\n- You will generate 1 gold for each non-Civ person who travels through the taxed gate.\n- You may not tax and lock on the same night.\n- Locking a gate prevents all travel through that gate. Civilizations are immune.");

		e.addField("Messages:", "“They were shot by an English Redcoat.” (Factional Kill)\n“You were stopped by a locked gate!” (Trying to pass through locked gate)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["france", "french", "2143"], "Civilization", "France", {subCat: "Scientific", censor: "French imperial guard"}, (e) =>
	{
		e.setDescription("Post 2143");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Listening Post: Receive all notifications that a target receives.\n- Gain Sources: Receive an Investigator (35) result on your target.\n- Neutralize Governor: Remove one random ability from your target for two days and two nights after this one. (Costs 4 Gold)");

		e.addField("Attributes:", "- Using Gain Sources will not inform the target that they were investigated and will never have a Civilization role.\n- You will learn who all opposing factions visit each night, but not their roles or effects.");

		e.addField("Messages:", "“They were shot by the French imperial guard.” (Factional Kill)\n“Your ability was neutralized! You cannot use ‘__’ for two nights.” (Neutralize Governor, target)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["sorvegliante", "sorve", "2144"], "Mafia", "Sorvegliante", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2144");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At day, Send someone an offer to join the Mafia.");

		e.addField("Attributes:", "- They may Accept or Reject the proposition, if they reject nothing will happen.\n- Targets who accept will permanently gain the Mafia goal, Get access to Mafia chat and Translate their role name to Italian\n- You may only have 2 alive converted targets at any given time.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["parola", "italian", "upcadccfqr", "2145"], "Neutral", "Una parola che accuratamente descrive che cosa fa questo ruolo", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2145");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the beginning of the game, choose a word that is not already the name of another role. The host will do a role that accurately describes that word. The role cannot have mechanics that are not seen on other roles. You become that role.");

		e.addField("Goal:", "N/A");
	});
};
