module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["truth_or_dare", "truthordare", "101"], "Neutral", "Truth Or Dare", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 101");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Play truth or dare with another player every night.");

		e.addField("Attributes:", "- When you play truth or dare with someone, you ask them a question and name an action that they can perform. If they don't truthfully answer the question or perform the action, you deal an Overkill attack to them.\n- Detection Immunity and Roleblock Immunity");
		e.addField("Goal:", "Kill three players; or get three players to answer your questions; or get three players to perform your dares.");
	});

	register_role(["ringmaster", "102"], "PaleMoon", "Ringmaster", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 102");

		e.addField("Alignment", "Unique Pale Moon Head", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give someone a ticket for the Pale Moon Circus Show.\n- Sacrifice a Pale Moon member.");

		e.addField("Attributes:", "- Detection Immunity, Roleblock Immunity, Redirection Immunity- Giving a ticket roleblocks them for the night, but does not give a special roleblock message.\n- Players with tickets will remove their ticket if they visit any Pale Moon Members. You will be notified of this.\n- Any players will immediately be dealt an Overkill Attack if they have a ticket at the end of Xth day, where X Is the day where the PMCS starts.\n- If the Ringmaster Is killed, all tickets are instantly removed.\n- Sacrificing a Pale Moon member will deal an Overkill Attack to them, and will let you deal an Unstoppable Attack to one player.\n- Players with tickets are notified they have tickets Day 3.");


		e.addField("Goal:", "Pale Moon Goal");
	});

	register_role(["guesser", "103"], "Neutral", "Guesser", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 103");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose one player to learn two letters in their role name or guess the role numbers of up to three players.");

		e.addField("Attributes:", "- Correct guesses deal a Basic Attack to the target.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["effort_enforcer", "effortenforcer", "104"], "Neutral", "Effort Enforcer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 104");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check someone's house each night. If they are a role with less than 200 characters (as written in <#970046125065265202>), kill them immediately.");

		e.addField("Attributes:", "- You will die upon completing your goal.");

		e.addField("Goal:", "Goal: Kill three people.");
	});

	register_role(["psycho_psycho", "psychopsycho", "psychopath", "psycho", "105"], "Neutral", "Psychotic Psychopath", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 105");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose someone to kill at night.");

		e.addField("Attributes:", "- They are given every negative effect in the game except attacks.\n- You have a layer of Basic defense that can prevent one attack.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["senator", "despot", "106"], "Neutral", "Senator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 106");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "Ustoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Order the execution of one person every night, dealing an Unstoppable & Astral attack to them.");

		e.addField("Attributes:", "- You are publicly revealed to be the Despot at the start of the game\n- Your vote counts as 3\n- You are a menace to society");

		e.addField("Goal:", "Survive until the end of the game with no players dead. Unfortunately, even after instant losses were banned, Wolfi pulled a Grandfather Clause on this one.");
	});

	register_role(["sanity", "107"], "Neutral", "Sanity", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 107");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player each night and restore their sanity, protecting them with Invincible defense for this night.");

		e.addField("Attributes:", "- Can only be rolled by people that are sane, as deemed by the host. In other words, Rasen decides whether or not you are a sane human being.\n- Once you win you get permission to post images of grapes in <#970059745807437876> until the start of the next game.");

		e.addField("Goal:", "Successfully protect three people and live until the end of the game.");
	});

	register_role(["unblast_magician", "unblastmagician", "unblast", "108"], "Neutral", "Unblast Magician", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 108");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Add a charge to your Unblast.\n- Unblast a player, as well as the amount of adjecent players equal to twice the amount of charges your Unblast has, 1 on each side. All Unblasted players will gain Invincible Defense.");

		e.addField("Attributes:", "- You may only carry up to 3 charges at once.\n- Dead/Missing players will not be skipped over when the Unblast is targeting adjacent players.\n- The player list wraps around, meaning that Player 1 is considered to be next to the highest numbered player.");

		e.addField("Goal:", "Prevent at least 8 deaths throughout the course of the game using your Unblasts. Saving the same person multiple times will count towards this goal.");
	});

	register_role(["trollcaster_mage", "trollcastermage", "trollcaster", "109"], "Coven", "Trollcaster Mage", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 109");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. For the next 24 hours, they can't take game actions and they can't discuss their role or any information they've learned via their role.");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately, but you may only use it once per day/night cycle.\n- If you have the Necronomicon, your target will be dealt a Powerful attack at the end of those 24 hours.");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["beast_tamer", "beasttamer", "beast", "110"], "PaleMoon", "Beast Tamer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 110");

		e.addField("Alignment", "Unique Pale Moon Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "-Tame your beast to devour someone at night.");

		e.addField("Attributes:", "-Your beast will deal a powerful attack, and will clean your target's role, last will, etc.\n-After killing someone with your beast, the beast has to rest the following night. However, you may still decide to send It to devour someone. If you do, there Is a ⅓ chance of failing to tame the beast, resulting in It dealing a Powerful attack to one of your Pale Moon allies (May include yourself)\n-After killing twice, that is upped to a 80% chance \n-After killing thrice, the beast must rest.\n-Once the PMCS begins, your beast deals an Unstoppable Attack, and will not need to rest every night, nor will It accidentally kill one of your allies");

		e.addField("Goal:", "Pale Moon Goal");
	});

	register_role(["samurai", "111"], "Coven", "Samurai", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 111");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you attack a Townie, you will immediately commit suicide, dealing an Unstoppable attack to yourself, even if the Townie doesn't die.\n- If you are roleblocked, you will attack your roleblocker unless they're a member of the Everfrost.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["killer_killer", "killerkiller", "kk", "112"], "Neutral", "Killer Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 112");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player at night. If they've killed someone before, attack them.");

		e.addField("Attributes:", "- On a night you're attacked, you will learn the names of all your visitors, but not their roles.");

		e.addField("Goal:", "Ensure the game ends with no living players having directly killed anyone, besides you yourself.");
	});

	register_role(["clown", "113"], "PaleMoon", "Clown", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 113");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful/Invincible)", true);

		e.addField("Abilities:", "- Once per game, fill every Pale Moon member's house with balloons, including yours.\n- Once per game, eat a candy.\n- Transport two players with balloons.");

		e.addField("Attributes:", "- Filling houses with balloons grants every Pale Moon including yourself Invincible Defense, but lowers their attack value to None\n- Eating a candy grants you Powerful defense.\n- Once the PMCS begins, you gain 2 uses of filling houses with balloons. If you fill houses with balloons, all visitors of the filled are dealt a Powerful attack. Additionally, the players whose houses have been filled Attack Values are upped to Powerful.");

		e.addField("Goal:", "Pale Moon Goal");
	});

	register_role(["tengu", "114"], "Neutral", "Tengu", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 114");
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930978937876647966/Tengu.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- **Attack:** Use Basic Attack on a player in the night.\n- **Fire Bomb:** In the night, use a Powerful Attack a player, clean their role if they die, and deal a Basic Attack to anyone else who visits your target.\n- **Shock Bomb:** In the night, use a Basic Attack on a player and roleblock them and their visitors.\n- **Smoke Bomb:** In the night, use a Basic Attack on a player and hide the feedback messages of them and their visitors. They will only be told \"There was too much to see anything!\" and if they survived the night or not.");

		e.addField("Attributes:", "- At the start of the game, certain people will each gain 1 use of the Hire Tengu ability. Those people are the Town Power, every Head of an evil faction, and one random additional player other than them and Tengu. If any lacks a Power/Head, a random member will be given this ability instead.\n**Hire Tengu:** In the night, make the Tengu use a Unstoppable Attack against your target, without visiting Tengu.\n- When hired, you will gain Powerful Defense, Roleblock Immunity, and Control Immunity. Otherwise, you only have Basic Defense.\n- If you're hired, your chosen ability for that night will be cancelled without depleting limited charges. However, if you get hired multiple times, you will attack every target you were hired to kill.\n- Fire Bomb, Shock Bomb, and Smoke Bomb all start at 0 charges. However, each time you are hired, you will gain a charge for one at random, even if you fail to kill your target.");

		e.addField("Attributes (cont.):", "- When hired, only you will know the results of your attack. Your hirer won't be told anything, even if the attack fails for any reason.\n- You are notified of every person you are hired to kill.\n- If you are hired to kill yourself, your attack will always fail.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["ring", "115"], "Neutral", "Ring", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 115");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Choose a player and surround them with a ring, dealing a Basic Attack to all that visit them tonight.");

		e.addField("Attributes:", "You can put a ring on yourself.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["the_ultimate_mafioso", "theultimatemafioso", "ultimate", "116"], "Mafia", "The Ultimate Mafioso", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 116");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Can perform an extra kill (besides the faction Mafia kill), from Mafioso.\n -Can find out a person’s exact role at night, from Consigliere.\n -Can disguise as someone’s role at night, from Disguiser.\n -Can see whispers and blackmail someone at night, from Blackmailer.\n -Can roleblock someone at night, from Consort.\n -Can frame someone at night, from Framer.\n -Can forge someone at night, from Forger.\n -Can clean someone at night, from Janitor.\n -Can hypnotize someone at night, from Hypnotist. (The message can be from any role in the GIM, probably.)\n -You can ambush someone, from Ambusher. Those who visit your target will not learn your name.");

		e.addField("Attributes:", "- As The Ultimate Mafioso, you’re great at all things Mafia related.\- However, you can only use one ability per night, and each ability only has 1 use.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["sword_master", "swordmaster", "117"], "PaleMoon", "Sword Master", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 117");

		e.addField("Alignment", "Pale Moon Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Night one, you will spend all the night building a wooden sword.\n- At any night, you may decide to upgrade your sword, from wooden to iron to fiery.\n- Attack someone with your sword.");

		e.addField("Attributes:", "- Upgrading takes one day.\n- A wood sword deals a Basic Attack.\n- An iron sword deals a Powerful Attack.\n- A fiery sword deals an Unstoppable Attack.\n- When the PMCS begins, your sword Is instantly upgraded to fiery and you will now rampage.");

		e.addField("Goal:", "Pale Moon Goal");
	});

	register_role(["disgruntled_ghost", "disgruntledghost", "118"], "Neutral", "Disgruntled Ghost", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 118");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per night, fucking kick a target out of your damn Graveyard and into the world of the living, reviving them.");

		e.addField("Attributes:", "- You can only use your ability while dead.\n- At the end of Night 1, you will automatically die. Your body will be cleaned.");

		e.addField("Goal:", "Make a faction win with at least 2/3 of its members alive. If only neutrals are alive when the game ends, you lose.");
	});

	register_role(["grand_executioner", "grandexecutioner", "119"], "Neutral", "Grand Executioner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 119");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, attack a player, plus an additional one for every lynched Town role.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["corrupt_aid", "corruptaid", "120"], "Mafia", "Corrupt Aid", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 12");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "[[ - Lost Documents: Before the host reveals the rolelist used, the original one is shown to you first. You may replace the real rolelist with a fake one of your choosing. When 3 players have died, if you replaced the rolelist, it will be revealed that the rolelist was tampered by an Aide. The original rolelist will then be revealed.]] **The host may choose not to use this attribute.**\n- Corruption Within: Select one role before day 3 begins. During from day 3 onwards, you will appear to be this role and appear to win with all Town members.");

		e.addField("Abilities:", "- Leaked information: Select a player and predict what one of their next two targets will be. If your prediction is correct they will lose one use of one of their random abilities, and you will immediately gain a use of it. 2 uses.\n- Illicit Supply: Select a player and give them any ability that a role has. If they use the ability within the next two nights, they lose the ability to whisper for the rest of the game. 2 uses, 3 night cooldown.\n- Trade Secrets: When someone whispers to you, you may steal all of their abilities. They lose those abilities. 1 use.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["end_to_all_roles", "endtoallroles", "noodle_ruined", "noodleruined", "trwwbtetarbnhtri", "121"], "Neutral", "The Role Which Would've Been The End To All Roles But Noodle Had To Ruin It", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 119");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Varies", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Vary");

		e.addField("Attributes:", "- At the start of each day, you gain the abilities and attributes of a random role. This will cumulate. The role you copy does not need to exist in the game. The first role you copy will always have a killing ability of some kind.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["warning_call", "warningcall", "122"], "Neutral", "Warning Call", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 122");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player that will be publicly announced at the beginning of the next day. If they are still alive in two days and nights, you will gain the ability to, along with your regular action, deal an Unstoppable Attack to someone per night. This can stack.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["meteor", "123"], "Rock", "Meteor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 123");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call down a meteor at night.");

		e.addField("Attributes:", "- Your rock will deal a Powerful attack to your target and all their visitors.\n- You may do this twice.\n- You may instead perform the factional Rock kill.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["electrician", "124"], "Neutral", "Electrician", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 124");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- On nights 3, 6, 9, etc., shock a player, dealing a Basic Attack to them, whoeever they visit, whoever that person visits, and so on until either the final target is one that loops back into the cycle, visited no one, or visited you..");

		e.addField("Attributes:", "- If one of your victims is a role that grants protection, you will ignore the effect that they gave to their target.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["wincaster_mage", "wincastermage", "wincaster", "125"], "Coven", "Wincaster Mage", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 125");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a non-Coven player. They win the game immediately.");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately, but you may only use it once per day/night cycle.\n- If you have the Necronomicon, you may choose to make your target lose the game immediately instead.\n- Redirect Immune");

		e.addField("Goal:", "Defeat all players who use she/her pronouns or who have roles that are female by flavour.");
	});

	register_role(["comet", "126"], "Rock", "Comet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 126");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distract a target player at night by calling a comet to drift across the night sky.");

		e.addField("Attributes:", "- Roleblock Immune\n- Your target will be roleblocked, and you will fail all visits against them.\n- You may only act on odd nights.\n- You may instead perform the factional Rock kill.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["mass_poisoner", "masspoisoner", "127"], "Neutral", "Mass Poisoner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 127");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Poison a player each night along with whoever they visit and whoever visits them.");

		e.addField("Attributes:", "- This poison is immediately cured from a poisoned target if they get a visitor the next night that isn't poisoned.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["ayase_rimura_hopes_glass_spear", "ayase_rimura", "ayaserimura", "hopes_glass_spear", "hopesglassspear", "128"], "Neutral", "Ayase Rimura, Hope's Glass Spear", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 128");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to try to kill each night. You will fail to kill them and instead two completely random players (you may kill yourself).");

		e.addField("Attributes:", "- Your attack cannot be prevented by any means.");

		e.addField("Goal:", "Kill at least 7 players.");
	});

	register_role(["rock_with_ruler", "rockwithruler", "ruler", "129"], "Rock", "A Rock With a Ruler (very dangerous)", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 129");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Measure someone. You will know how many letters the name of their role has.\n- Draw a straight line over two people adjacent to each other on the player list. If one dies, the other will be dealt a Basic attack. (2 uses)");

		e.addField("Attributes:", "- Can use multiple abilities, but may only use each ability once per night.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["icy_rock", "icyrock", "130"], "Rock", "Icy Rock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 130");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze someone each night.");

		e.addField("Attributes:", "- They may not perfom any night abilities for this night. You will then deal a Basic Attack to them the 2nd night.\n- Only one player may be frozen at all times.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["retiree", "131"], "Neutral", "Retiree", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 131");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- N/A-ish");

		e.addField("Attributes:", "- You will randomly acquire the abilities of one of the following roles, with the listed conditions:\n> Doctor\n> Vigilante (no guilt)\n> Consigliere (3 uses)\n- At the end of Night 1, your role will be publicly revealed");

		e.addField("Goal:", "Survive to the beginning of Day 2.");
	});

	register_role(["obnoxiously_complicated_exe", "obnoxiouslycomplicatedexe", "ocexe", "132"], "Neutral", "Obnoxiously Complicated Executioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 132\n(Neutral Evil)");

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/970074968475971594/unknown.png");
	});

	register_role(["shrooms", "133"], "Neutral", "Shrooms", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 133");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shroom a player each night, deleting 25% of the words in their abilities/attributes at random, leaving the role's function up to the host's interpretation based on the remaining words.");

		e.addField("Goal:", " Live to see every other living player be shroomed.");
	});

	register_role(["rockvestigator", "arsitfohmcyrhaahtbar", "134"], "Rock", "A Really Specific Investigator That Finds Out How Many Characters Your Role Has And Also Happens To Be A Rock", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 134");

		e.addField("Alignment", "Rock Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone, and find out how many characters their role has (as written in <#970046125065265202>).");

		e.addField("Attributes:", "- You can use your ability in addition to the factional Rock kill.");

		e.addField("Goal:", "Defeat all players who would oppose the Rocks.");
	});

	register_role(["court_wizard", "courtwizard", "cwizard", "135"], "Town", "Court Wizard", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 135");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tornado: Target two players.");

		e.addField("Attributes:", "- Redirect players targeting one to the other.\n- Players targeting player a will visit player b.\n- Players not targeting player b will not visit player a.\n- Players targeting player b will visit player c.\n- Players targeting player a will not visit player b.\n- Players targeting player b will visit player a.\n- Players targeting a different player entirely will visit player a.\n- Players targeting player a will visit player a.\n- Players targeting player b will not visit player c.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["heavy", "136"], "Neutral", "Heavy", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 136");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night to discover if they killed you.\n- Shoot someone during the day.");

		e.addField("Attributes:", "- At the start of the game, the entire town will receive the message in the photo attached to this role card.\n- You are listed as dead in the graveyard, but you can still talk and vote during the day.\n- Your presence does not count towards voting majority.\n- You cannot be target at night nor can you be voted against during the day.\n- A random player in the game killed you. They will be notified when they receive their role card.\n- You will be notified if the player who killed you dies.\n- You may check three people.\n- You may kill one person.");

		e.addField("Goal:", "Make sure the person that killed you is not alive at the end of the game.");
	});

	register_role(["shree", "137"], "Neutral", "Shree Shree Shree Shree Shree Shree Shree Shreeeeeeeeeeee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 137");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- The last person to say Shree every day will be dealt a Powerful Attack at the end of the night.");

		e.addField("Attributes:", "- If no one says Shree, you instead get to kill two players of your choice.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["moo", "138"], "Neutral", "Extremely Creative Cow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 138");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- The last person to say Moo every day will be dealt a Powerful Attack at the end of the night.");

		e.addField("Attributes:", "- If no one says Moo, you instead get to kill two players of your choice.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["eoc_exams", "eocexams", "eoc", "139"], "Neutral", "EOC Exams", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 139");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose a player to test.");

		e.addField("Attributes:", "- Tested players will be roleblocked, bypassing roleblock immunity. Tested players will receive a random question based on day activity, which is decided by the host. Getting the question correct will do nothing, but getting the question wrong will have you kill them.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["ramp_up_ramper", "rampupramper", "ramper", "140"], "Neutral", "Ramp Up Ramper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 140");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, attack a player. For the rest of the game, all visitors to that player (except you) must use their ability twice per night if they can and on different targets. Already affected players go to 3x and then 4x and if they reach 5x, they receive an Unstoppable Attack.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["emerald", "141"], "Neutral", "Emerald", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 141");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Protect your fellow rocks every night.");

		e.addField("Attributes:", "- Every Rock will gain Powerful defense. You start with 1 charge. You gain a charge for every dead Rock.\n- If you're the only rock alive, each night, pick 3 players. Target A will protect you with the value of their defense (Basic if None or lower). Target B will attack Target C with the value of their attack (Basic if None or lower)\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", "Rock Goal");
	});

	register_role(["annoying_chess_youtuber", "annoyingchessyoutuber", "guess_the_elo", "guesstheelo", "elo", "142"], "Town", "Annoying Chess Youtuber In My Reccomended Section", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 142");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Challenge another player to a game of Guess the ELO.\n- Ask another player of a third party.\n- (Guess the ELO happens during the night, but you decide the target and the third party during the day)");

		e.addField("Attributes:", "- Players playing Guess the ELO will spectate a random chess game on chess.com of the third party's choosing. They must then guess the ELO of the side chosen by said third party. Then, the following shall happen:\n> If the Annoying Chess Youtuber In My Reccomended Section gets the ELO rating closer than the challenged player, they will learn said challenged player's exact role, bypassing any frame effect.\n> If the challenged player gets the ELO rating closer, they will deal an astral basic attack to the Annoying Chess Youtuber In My Reccomended Section.\n- The Host can potentially be the third party.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["builder", "143"], "Town", "Builder", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 143");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build either a wooden, stone, or iron fence.\n- Place you fence around a player's house.");

		e.addField("Attributes:", "- You must spend one night building your fence. This action can be roleblocked, and you will start building the night you decide which fence to build. You can only build one fence at a time.\n- If you build a wooden fence, your target will receive Basic defense for the current and next two nights.\n- If you build a stone fence, your target will receive Powerful defense for the current and next night.\n- If you build an iron fence, your target will receive Invincible defense for the night.\n- You can only have two fences out at a time, and you may not have more than one of the same fence out at a time.\n- A fence will break if the protected player is attacked.\n- You may not place a fence on yourself.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["death_inversion", "deathinversion", "144"], "Neutral", "Death Inversion", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 144");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day phase, choose whether or not to invert death the following night. All that would have died that night will instead just survive. If you would have survived the night, you instead die.");

		e.addField("Attributes:", "- If this somehow creates a paradox, then uh idk figure it out yourself nerd.");

		e.addField("Goal:", "Besides you yourself, save three people with your ability.");
	});

	register_role(["principality", "145"], "Town", "Principality", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 145");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- For every player that died last night, heal a player, granting them Unstoppable Defense for tonight and the next.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["bodyguard_boss", "bodyguardboss", "bgboss", "146"], "Town", "Bodyguard Boss", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 146");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one player to become a Bodyguard for the other at night.");

		e.addField("Attributes:", "- Each night you may select two targets. The first player will be protected by the second player. This will roleblock the second player through immunity.\n- If anyone attacks the first player, both the second player and the player attacking the first target will die.\n- You may only successfully use your ability once.\n- You may not protect yourself");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["word_bomber", "wordbomber", "147"], "Neutral", "Word Bomber", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 147");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose a word with 4-6 letters. The next day, anyone who says that word will be attacked immediately. ");

		e.addField("Attributes:", "- If you're redirected, you'll choose the name of the target you were redirect to as your word, even if it doesn't have 4-6 letters. You'll still know what you were forced to choose.\n- If no one says your word, you'll attack a random other player among those who sent the least messages that day.\n- If the host isn't available to kill the player immediately, the Town will be informed what the message that caused them to be attacked was.");

		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["doubling_doubler", "doublingdoubler", "doubler", "148"], "Town", "Doubling Doubler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 148");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day, double another player. Starting the next night, their role's rules text will be doubled (again).");

		e.addField("Attributes:", "- Every other role has its entire rules text twice.\n- Players can use any number of different abilities each night, even if the rules or their roles say they can't.");

		e.addField("Goal:", "Cause infinite chaos (as judged by the host).");
	});

	register_role(["daffodil", "149"], "Town", "Daffodil", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 149");

		e.addField("Alignment", "Florae/Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may search a player for a clue of their role.");

		e.addField("Attributes:", "- If your target is Doused/Framed/Disguised/Hexed you will instead be told you are unsure what your target is.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});

	register_role(["hydrangea", "150"], "Town", "Hydrangea", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 150");

		e.addField("Alignment", "Unique FloraeTown Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may dance during the day to summon a rainstorm for the night.");

		e.addField("Attributes:", "- Mafia, Coven, and Neutrals will be notified that a storm is starting at the beginning of the night.\n- Players that visit will be drenched in water.\n- You will be told all of the players who are not drenched the following day.\n- You may only summon 3 rainstorms.");

		e.addField("Goal:", "Help the Town win OR help the Plants win.");
	});
};
