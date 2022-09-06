module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["old_retri", "oldretri", "old_retributionist", "301"], "Town", "Old Retri", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 301");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b2/RoleIcon_Retributionist.png";

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive a Town from the graveyard");

		e.addField("Attributes:", "- You may only resurrect one person.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["moons_familiar", "moonsfamiliar", "moon_familiar", "moonfamiliar", "mf", "302"], "Coven", "Moon's Familiar", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 302");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The next day becomes night and not day, and you may deal a Basic attack during it. Activate only with the Necromonicon.");

		e.addField("Attributes:", "- Days other than Day 1 are night as well as day.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["spoiler", "303"], "Neutral", "Spoiler", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 303\n*Snape kills Dumbledore.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Resurrect a dead player who is not part of a \"good\" faction in #factions (1 use).");

		e.addField("Attributes:", "- You are roleblock and redirect immune.");
		
		e.addField("Goal:", "Win with the person you resurrected.");
	});

	register_role(["soulbinder", "304"], "Coven", "Soulbinder", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 304\n*You belong with me.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bind a player's soul to yours each night.");

		e.addField("Attributes:", "- If a bound player dies, all other bound players will be dealt an Astral Basic Attack and will become unbound.\n- If you die, all bound players will be dealt an Astral Unstoppable Attack.\n- With the Necronomicon, you may either bind two players' souls at night or choose to kill all bound players.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["accurately_describes", "accuratelydescribes", "word", "305"], "Neutral", "Word That Accurately Describes What This Role Does", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 305");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the beginning of the game, choose a word that's not already the name of a role. The host will come up with a role that is accurately described by that word. It can't have mechanics that aren't seen on any other roles. You become that role.");
	});

	register_role(["uncontrollable_mech", "uncontrollablemech", "uncontrollable", "mech", "um", "306"], "Town", "Uncontrollable Mech", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 306\n*I promise, it's functional, it's just, er... a little unreliable.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- You will visit a random player each night, and you will be informed about who you're targeting. Each night, you may choose to either deal them a Powerful attack, protect them with Powerful defense, or roleblock them.");

		e.addField("Attributes:", "- You will protect yourself with Basic defense the first time you're attacked. When this is activated, you will be able to choose your targets at night instead of targeting them randomly.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["teacher", "307"], "Mafia", "Teacher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 307");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Instruct a mafia ally in the day.\n- You may instead make the factional mafia kill.");

		e.addField("Attributes:", "- The next night, they will be able to perform their night ability twice.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["prunela_witch_of_restoration", "prunelawitchofrestoration", "prunela", "witch_of_restoration", "witchofrestoration", "pwor", "308"], "Coven", "Prunala, Witch of Restoration", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 308");

		e.addField("Alignment", "Coven Head", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Imprisonment (Day): Cast a spell upon a member of the town, making them believe they were hauled off to jail. You will be able to speak to them as Jailor, or if he is dead, Wisteria.\n- Restoration (Night): Upgrade a Coven members defense by one stage permanently, to a maximum of Invincible.");

		e.addField("Attributes:", "- Coven Heads, and the Coven Leader cannot spawn with you.\n- You have Necronomicon Priority.\n- Only 1 Coven Head may spawn per game.");

		e.addField("Necronomicon:", "Gain the ability to execute your Imprisoned target.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["dice_roller", "diceroller", "dice", "309"], "Mafia", "Dice Roller", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 309\n*I LOST THE RUN TO RNG!*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player each night and roll the dice.");

		e.addField("Attributes:", "- You will target your target with another Mafia role's night ability based on the number you roll from the dice.\n- You will use the ability of the Wiki Mafia version of your role.\n- - The host will roll the dice for you. You will not be notified what role's ability you will perform until you perform it.\n- You may not target yourself or any other Mafia members.\n- The results for dice rolls are as follows:\n--- 1: Consigliere\n--- 2: Consort\n--- 3: Agent\n--- 4: Musician\n--- 5: Watcher\n--- 6: Bartender");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["hallucinator", "hallu", "310"], "Mafia", "Hallucinator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 310");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick 2 targets each night. Target A Is redirected to Target B and Target B Is redirected to Target A.\n- You may instead make the factional mafia kill.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["lion", "311"], "PaleMoon", "Lion", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 311");

		e.addField("Alignment", "Pale Moon Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go on a hunt at night.");

		e.addField("Attributes:", "- When you go on a hunt, you will attack two random non-Pale Moon players.\n- If you go on a hunt two nights in a row, you will instead attack three random players other than yourself.\n- You may only go on a hunt twice.\n- During the PMCS, you may go on a hunt infinite times and going on a hunt instead attacks four random non-Pale Moon players no matter how many nights in a row you go on a hunt.");
		
		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["rumor", "312"], "Mafia", "Rumor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 312\n*I'm the one you're leaving her for.*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spread a rumor about a player each night.");

		e.addField("Attributes:", "- Spreading a rumor about a player will cause them to become Hated. Only they will be notified about this.\n- Hated players will require one less vote to lynch.\n- You may not spread a rumor about yourself or any other Mafia members.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["wm_seditionist", "wmseditionist", "seditionist", "313"], "Mafia", "WM Seditionist", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 313\n*We the members of the Mafia, in order to form an even more perfect Union...*");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare a speech during the day.");

		e.addField("Attributes:", "- When you prepare a speech, you will inspire your fellow Mafia, including yourself, the following night.\n- Being inspired temporarily gives all Mafia members roleblock and redirect immunity.\n- When the Mafia are inspired, members may use the ability of a dead Mafia member instead of their own; however, they cannot use the abilities of Mafia Head roles.\n- You may only prepare two speeches and cannot prepare them two days in a row.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["pi", "314"], "Neutral", "Pi", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 314");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn a player into role 159 (Lavender), 265 (Ghost Enthusiast), or 358 (Magic Clone) each night.");

		e.addField("Attributes:", "- You may self-target.");
		
		e.addField("Goal:", "Have at least 2 players you changed the role of win the game.");
	});

	register_role(["lich", "315"], "Coven", "Lich", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 315");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Harvest a player's soul on full moon nights\n- Use souls to boost your own attacks");

		e.addField("Attributes:", "- Each successfull kill gives you one soul. You may use souls as following during the night (lasts for 1 night);\n> **Curse of Anonymity (1)** Before a successful kill, replace your target's role with a Ghoul. Their faction and goal are maintained, but their abilities and attributes are changed.\n> **Curse of Rising (1)** After a successful kill, you will be able to (unofficially) use your target as an undead servant, allowing them to frame a target of your choice the following night.\n> **Minor Illusion (1)** You require an extra 2 votes to be put to trial tomorrow.\n> **Phylactery Sacrifice (1)** Gain Invincible Defense for this night.\n- You start with one soul.\n- With the Necronomicon, you may attack every night.\n- Necronomicon priority without a Coven Leader; with a Coven Leader, flip a coin between the two.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["ghoul", "315.5"], "Other", "Ghoul", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 315.5");

		e.addField("Alignment", "Variable", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player");

		e.addField("Attributes:", "- Can only attack once\n- Cannot be revived\n- Can't be rolled normally\n- Spawned by the Lich (Post 315)");
		
		e.addField("Goal:", "Variable");
	});

	register_role(["arbiter_of_hell", "arbiterofhell", "aoh", "hell", "316"], "Coven", "Arbiter of Hell", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 316\n*Boring is removed! You did not gain Cursed, so you die! Cursed is removed! Heavy is removed! You are not in the majority, so you die from Insanity! Insanity is removed! Light is removed! You skip this round due to Paralyzed! Paralyzed is removed! Restrained is removed! Scared is removed! Saint saves you from dying due to Cursed! Saint is removed! Tradition is removed!*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player's house to become Hell during the first night.\n- Reassign Hell if that player dies.");

		e.addField("Attributes:", "- Players who visit Hell during a full moon are subjected to the following effects in the order:\n> - You learn their role\n> - Roleblocked\n> - Basic attacked\n> - Framed\n> - Basic attacked\n> - Given powerful defense for this night\n> - Lynchproof for one day\n> - Basic rampage attacked\n> - Powerfully poisoned\n- If a player dies, the effects after  are not applied.\n- Hell remains after you die.\n- With the necronomicon, you may have two Hells active at a time.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["guardian", "317"], "Town", "Guardian", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 317");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guard someone's house every night\n- You may guard your own house one time.");

		e.addField("Attributes:", "- When you guard, all visitors will be redirected to one of their two neighbours. You decide which one.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["informant", "318"], "Town", "Informant", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 318");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn each night. You will receive X/2 random roles which are not in the game, where X is the post number of the most recent role in the GIM roles thread.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["firefly", "319"], "Coven", "Firefly", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 319");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player each night. If they survive, they get lit up, publicly revealing their will and their night action target for two days.");

		e.addField("Attributes:", "- With the Necrominicon, this effect is permanent and you gain basic defense.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["bill_wurtz", "billwurtz", "bill", "wurtz", "320"], "Neutral", "Bill Wurtz", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 320\n*hi. you're on a rock floating in space.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Your first post of each day must contain a quote from the video \"history of the entire world, i guess\" by bill wurtz.\n- Each night, you may play jazz msuci. Every player that visits you will become a fan. If nobody visits you, you will randomly auto-kill 2 players.");
		
		e.addField("Goal:", "Get 3 fans.");
		
		e.addField("Notifications (this is essential to hosting):", "\"looks like it's time to play some *smooth jazz*\" (action confirmation message)\n\"no jazz tonight. it's sad. it makes me sad.\" (night feedback if player did not play jazz msuci)\n\"thanks for checking in i'm still a piece of garbage.\" (night feedback if player played jazz msuci and was visited)\n\"uh oh. it looks like nobody visited you last night. you will clobber two random people because that's just what you do.\" (night feedback if player played jazz msuci but was not visited)\n\"**You were clobbered by bill wurtz! You have died!**\" (night feedback for anyone killed by bill wurtz)");
	});

	register_role(["wraith", "321"], "Neutral", "Wraith", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 321");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Feed on two player's hatred each day.");

		e.addField("Attributes:", "- If both players are town members, deal a Powerful Attack to two players the next night.\n- If one Is Town and the other is an evil faction, deal an Unstoppable Attack to two players the next night.\n- If they're both evil, deal an Unstoppable Rampaging attack to three players the next night.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["testator", "322"], "Neutral", "Testator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 322");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, review a player’s will. You may look over it and make edits if you wish, which your target cannot revert. Your target will be notified of your review, and of whether or not you made any edits.\b- Once per game, you may choose to read aloud a previously reviewed player’s will during the day, informing everyone in the town about it. You will reveal yourself as the Testator in the process. If a player’s will is blank, you may not edit it or read it aloud.");
		
		e.addField("Goal:", "Edit four people's wills and survive until the end of the game.");
	});

	register_role(["squirrel_barbarian", "squirrelbarbarian", "squirrel", "barbarian", "323"], "Neutral", "Squirrel Barbarian", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 323");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful (Basic)", true);

		e.addField("Abilities:", "- Astral Rampage at someone's house.");

		e.addField("Attributes:", "- You have Powerful Defense that can take up to 5 hits throughout the game. Afterwards, it degrades into Basic Defense.\n- Can read whispers\n- May NOT win with witcheswitches\nwitches*");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["hatred", "324"], "Neutral", "Hatred", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 324");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Rampage attack a player each night.");

		e.addField("Attributes:", "- As long as you are alive, all roles' goals are replaced by \"Eliminate all players except for Hatred and you.\"");
		
		e.addField("Goal:", "Eliminate all players except for up to one other player and you.");
	});

	register_role(["insomniac", "325"], "Neutral", "Insomniac", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 325");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, give someone a drink of coffee, allowing them to stay awake. They may use their ability twice tonight and can speak during the night alongside you. Not usable on D1.");

		e.addField("Attributes:", "- You are muted during the day, but can talk during night.\n- Cannot self-target.");
		
		e.addField("Goal:", "Give at least one cup of coffee to all factions in the game before the game ends. Neutrals are included.");
	});

	register_role(["sheep", "326"], "Neutral", "Sheep", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 326");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Help someone sleep every night by counting sheeps.");

		e.addField("Attributes:", "- You have a total count of sheeps that starts at 0\n- Town roles add 60 sheeps\n- Mafia roles remove 20 sheeps\n- Coven roles remove 40 sheeps\n- Neutral Benign roles add 10 sheeps\n- Neutral Evil roles remove 10 sheeps\n- Other roles add 20 sheeps\n- Helping someone sleep redirects them to yourself. They will know they were redirected to a Sheep.\n- Helping someone a 2nd time will send them to the Dream World. They cant talk, vote, whisper, use their night/day abilities, nor can they be talked to, voted to and whispered to. They may also not be selected for night/day abilities.\n- If you send someone in the Dream World, you will also send yourself. All that applies to the sent player also applies to you so you cant talk, vote, etc.\n- A private channel which only you and a person in the Dream World can see Is opened (#dreamworld). Only the host may type in dreamworld.");

		e.addField("Attributes (cont.):", "- The playerlist (!! Playerlist, NOT rolelist) Is given to both players in #dreamworld. Then you and the other player take turns choosing one player. The sheep starts first, then the sent player.\n- The host will check the faction of the picked players. Neutral > Mafia > Town > Coven. Other factions are automatically assumed to be Mafia. Whichever picked player Is higher in the priority list given above wins, and the one that picked the winning player gains 1 Dream Point, alongside both picked players getting eliminated from the playerlist and not being able to be picked again. Neither of you will know which faction the picked players are, but you will know who gains a Dream Point.\n- If you both pick the same player, lose 1 Dream Point. If you both pick the same faction, neither gains or loses a point.");

		e.addField("Attributes (moar):", "- This goes on until all the players in the playerlist are eliminated and the one with most Dream Points wins. If the Sheep wins, the other player Is dealt an Unstoppable Attack (that does not count as an Attack dealt by the Sheep) and the Sheep can decide to add 10, 20 or 30 sheeps or remove 10, 20 or 30 sheeps. If the other player wins, the Sheep cannot target that player anymore, and you cannot use your ability the next night.\n- You have Basic Defense that breaks at the first hit.");
		
		e.addField("Goal:", "You have a random number of sheep rnged between 1-200. Reach that number of sheeps before the game ends. Number must be a multiple of 10.");
	});

	register_role(["vegan", "327"], "Town", "Vegan", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 327\n*Well, let's just hope you're not a teacher.*");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inform someone that you are Vegan each night.\n- Choose someone who you have informed that you are a Vegan at night. You will give them a lecture on veganism roleblocking them through immunity. If you target someone that you have not informed, your ability will fail.");

		e.addField("Attributes:", "- Players who visit you will automatically be informed that you are a Vegan. You will be told how many people you inform each night, but not who you inform.\n- Players who you have informed will receive your name and your role.\n- You may not multitask.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["divine_visionary", "divinevisionary", "divine", "visionary", "dv", "328"], "Town", "Divine Visionary", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 328");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare a vision of someone each night.\n- Send a vision to someone each night, choosing one of the visions you prepared and revealing that player's role to your target. This bypasses all framing effects, but not effects like Eyisa's veil of ice.");

		e.addField("Attributes:", "- If this role would roll, the player who would roll it gets a new role and the host is added to the game as a player with this role as well as the host. This is publicly announced in the player list channel. The player never sees that they would've gotten this role.\n- You may not whisper or talk in any chats or send any messages whatsoever or have a last will or vote.\n- Investigative abilities against you fail.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["divine_traitor", "divinetraitor", "divine", "dt", "329"], "Neutral", "Divine Traitor", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 329");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a vision to someone each night, revealing to them a player of your choice's role as if you were 328: Divine Visionary, but you may choose to change the role revealed to whatever you like.");

		e.addField("Attributes:", "- If this role would roll, the player who would roll it gets a new role and the host is added to the game as a player with this role as well as the host. This is publicly announced in the player list channel. The player never sees that they would've gotten this role.\n- You may not whisper or talk in any chats or send any messages whatsoever or have a last will or vote.\n- Investigative abilities against you fail.\ngod rasen, stop putting your attributes above abilities already, its so cring");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["corpse_in_a_trenchcoat", "corpseinatrenchcoat", "corpse", "ciat", "330"], "Town", "Corpse in a Trenchcoat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 330");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- While dead, choose to deadn't. You become alive. You may only deadn't once.\n- While alive, choose to aliver. You become two players, or three players if you're already two, etc.");

		e.addField("Attributes:", "- You're dead.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["shifter", "331"], "Coven", "Shifter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 331\n*Goddamn sticky keys...*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose whether to shift the Town during the day. (3 use)\n- **(Necronomicon Required)** Choose whether to faux shift the Town during the day.\n- Choose a shift offset during the night if you chose to shift during the day.");

		e.addField("Attributes:", "- When you choose to shift the Town, the player list will be shifted forward by a certain amount at the end of the night. For example, a shift of 1 will shift the player at slot #1 to slot #2, the player at slot #13 to slot #14, and the player in the highest-numbered spot to slot #1. The Town will be notified that you have chosen to shift at the beginning of the night.\n- During a night you choose to shift, everyone must use their targeted abilities on a slot number as opposed to a particular player. Everyone will perform their abilities on the player that ends up at the spot they chose after your shift takes affect.\n- With the Necronomicon, the player at slot #1 after your shift will be dealt a Powerful Attack. Choosing to do a faux shift will not offset anyone's targets, but it will offset the player list at the end of the night changing who ends up at slot #1. The Town will not be notified when you choose to do a faux shift.\n- Other members of the Coven are immune to shifts.");
		
		e.addField("Attributes (cont.):", "- Your night ability cannot be stopped for any reason.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["piñata", "pinata", "332"], "Neutral", "Piñata", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 332");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone at night, giving them a piece of candy.");

		e.addField("Attributes:", "Players can eat their candy during the night to be healed and purged.\n- Players are notified they have candy.\n- Once you die, you pop. After 1 day/night cycle, come back to life. You will have full immunity the phase you come back. You can only pop/come back to life once.\n- The first night after you pop, everyone will be targeted by a random ability from a random role. The ability will not kill.");
		
		e.addField("Goal:", "Be popped once.");
	});

	register_role(["grass", "333"], "Neutral", "Grass", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 333");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone. If they stayed at home, they touch you.");

		e.addField("Attributes:", "- Being within the game gives everyone a new second goal, urging them to touch grass. (They still need to complete their first goal though.)\n- You are the grass they need to touch.\n- Players that visit you are considered to have touched you. If you are visited by a killing role, they will not kill you.\n- If you are lynched, all players that voted guilty are considered to have touched you.\n- If you die, all players that touch the person/people responsible for your death are considered to have touched you.\n- Players will be notified if they have touched you. You will also be notified about each player that touches you.");
		
		e.addField("Goal:", "Be touched by everyone in the game.");
	});

	register_role(["bomber", "334"], "Neutral", "Bomber", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 334");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Place a Bomb at someone's house.\n- Detonate your Bombs.\n- Once per game, build a specialized bomb.");

		e.addField("Attributes:", "- Once you detonate your bombs, every visitor Is dealt a powerful attack.\n- The specialized bomb deals unstoppable attack and also targets the target who had a Bomb placed in his house.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["all-form", "all_form", "allform", "335"], "Neutral", "The All-Form", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 335");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You're three random other players. You have access to their private channels, and you may take actions for them. In the case of conflicting actions, a random one will be chosen.");
		
		e.addField("Goal:", "Ensure as many of the other players you are win as possible.");
	});

	register_role(["apocalypse", "336"], "Underworld", "Apocalypse", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 336");

		e.addField("Alignment", "Unique Underworld Head", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Ignite all doused targets at night.");

		e.addField("Attributes:", "- Igniting will deal an Unstoppable attack to all doused players.\n- If you are the last Underworld player alive, gain roleblock immunity.\n- The Underworld faction has a Factional Douse function, rather than a factional kill.\n- The Apocalypse will spawn automatically if any Underworld members spawn.\n- Detection, Conversion, and Control Immune");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["wm_judge", "wmjudge", "judge", "337"], "Neutral", "WM Judge", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 337\n*Plaintiff... smack his nuts.*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Judge two players at night.");

		e.addField("Attributes:", "- You will execute your targets if they are each part of a different group.\n- Your first group includes all Town roles and all Neutral Benign roles.\n- Your second group includes all non-Town and all non-Neutral Benign roles.\n- You ignore framing of any kind.\n- You may only judge players three times.\n- You cannot judge any players until night three.\n- You cannot judge players if you attempted to do so the previous night.\n- If one of your targets is protected when you successfully find two players to kill, you will not kill the other target.\n- When you achieve your goal, you will no longer be able to kill anyone, and you will no longer have Basic defense.");
		
		e.addField("Goal:", "Successfully execute two players.");
	});

	register_role(["telecaster", "338"], "Mafia", "Telecaster", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 338\n*Nice argument, but 338.733.631.34*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target to dox at night.\n- Fabricate a dox on a player.");

		e.addField("Attributes:", "- Doxxing reveals their role and any messages they received that night to every player at the end of the night.\n- You automatically dox your attackers.\n- Fabricated doxes let you choose any role for that player to be falsely revealed as\n- You may only fabricate a dox twice.\n- Your role is not revealed upon death");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["chaos", "339"], "Underworld", "Chaos", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 339");

		e.addField("Alignment", "Unique Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frame a player at night.\n- Check for a player's exact role at night.");

		e.addField("Attributes:", "- A framed player's visitors will become doused.\n- Framed players will return unfavorable results to all Investigatives (appear as a random evil to the Consigliere, show up evil in Psychic results, etc.)\n- You may check for roles three times. If you find a kill-capable player, they will become doused.\n- If the Apocalypse dies, you will be promoted to Apocalypase.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["beaver", "340"], "Neutral", "Beaver", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 340");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gnaw at the rivers barricade at night. You have 1 charge.");

		e.addField("Attributes:", "- The floodgates will open. The next day, everyone stays home and cannot talk, vote or whisper.");
		
		e.addField("Goal:", "Do not let any lynches happen for 3 days in a row.");
	});

	register_role(["sniper", "341"], "Neutral", "Sniper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 341");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Snipe people during the day.");

		e.addField("Attributes:", "- Sniping someone deals an unstoppable attack.\n- You can only snipe once a day.\n- You cannot snipe Day 1.\n- You can snipe at anytime during the day.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ranger", "342"], "Town", "Ranger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 342");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, set up traps at a player's house, tagging the target and all who visit.\n- Stakeout a house, killing all Tagged players who visit.");

		e.addField("Attributes:", "- Astral Visitor\n- You can tag and attack astral visitors.\n- You cannot stakeout twice in a row.\n- If you kill a Town member whose alignment is not Town Evil, you will be left with one charge of Stakeout left.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["enflamer", "343"], "Underworld", "Enflamer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 343");

		e.addField("Alignment", "Unique Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shroud the Underworld in flames at night.");

		e.addField("Attributes:", "- All Underworld members become detection immune this night.\n- While shrouded, all visitors to the Underworld become doused.\n- You may shroud 3 times.\n- If the Apocalypse is dead and there are no Underworld Offensive alive, you will become the Apocalypse.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["opal", "344"], "Rock", "Opal", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 344");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control someone at night.");

		e.addField("Attributes:", "- If your target is control immune, you will instead roleblock them. If they are immune to roleblocks, they will still be roleblocked.\n- You will learn your target's role when you control therm.\n- Twice per game you can deal a basic attack to your target. You may use both attack charges on the same night to deal an attack to your target and who you control your target into. If you use both charges on the same night, the person who you control will not use their ability on the person they visit.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["armageddon", "arma", "345"], "Underworld", "Armageddon", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 345");

		e.addField("Alignment", "Unique Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn the ground around a player's house to magma, causing all players visiting them to scramble around.");

		e.addField("Attributes:", "- Conversion and Redirect Immune\n- All players who visit your target will, at random, target another visitor with their ability.\n- If only one player visits your target, they will become doused.\n- If the Apocalypse dies, you will become the Apocalypse.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["guest", "346"], "Town", "Guest", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 346");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invite yourself at someone's house every night.");

		e.addField("Attributes:", "- You will learn 1 player that visited him. You will learn 1 player your target visited.\n- If your target is attacked, learn all players that visited him.\n- If you are attacked, your target will know all of your visitors.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["governor", "gov", "347"], "Town", "Governor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 347");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You have an additional secret vote you can place at anybody.\n- Reveal yourself as the Governor.\n- Shoot someone at night. 1 use.");

		e.addField("Attributes:", "- You cannot shoot until you reveal yourself as the Governor.\n- Once you reveal, you cannot have an addiitional vote anymore\n- Shooting someone deals a Basic Attack.\n- If you die, the next day, Town can lynch 2 people. This does not happen if you shot a town member.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["broker", "348"], "Underworld", "Broker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 348");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Force a deal between you and a target at night. You pay them one of your attributes for one of their abilities. If they have no abilities, they become doused.");

		e.addField("Attributes:", "- Roleblock immune.\n- Conversion immune.\n- The first time you're attacked, you will protect yourself with powerful defense.\n- You can use multiple abilities each night.\n- If there are no Underworld Offensive alive, and the Apocalypse is dead, you will become the Apocalypse. (yes you can sell this)");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["unmasker", "349"], "Town", "Unmasker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 349");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Unmask someone each night. You'll get a description of their appearance based on a literal interpretation of their role's name.");

		e.addField("Attributes:", "- Whenever you're attacked, you'll get a description of your attacker based on a literal interpretation of their role's name.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["horologist", "350"], "Town", "Horologist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 350\n*I don't know how someone can stay in business when their all they do is have one clock they move around.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mount a special clock at a player's house.\n- Spend a night moving the clock.");

		e.addField("Attributes:", "- Players will know if they have a clock.\n- The player who has a clock is unable to use abilities on odd nights, but can use their abilities up to three times on even nights.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
