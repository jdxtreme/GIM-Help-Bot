module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["jailor", "51"], "Town", "Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 51");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_Jailor.png";

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose another player to jail.\n- Execute your target at night.");

		e.addField("Attributes:", "- When you jail a player, for the duration of the next night, they will be placed in a private chat with you. Messages sent by you will appear to have been sent by “Jailor”, and your target will additionally be unable to communicate in any private chats they may have for the night.\n- While jailed, targets are roleblocked through immunities, gain Powerful defense, and all other abilities used against them will fail. Indirect effects may still apply.\n- You may only execute thrice. If you execute a member of the Town, you lose all your remaining executions. You may not execute on Night 1.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mayor", "52"], "Town", "Mayor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 52");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4f/RoleIcon_Mayor.png";

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal yourself as the Mayor during the day.");

		e.addField("Attributes:", "- When you reveal yourself, it will be announced to the Town.\n- While revealed, your vote counts as three, you cannot send or receive whispers, and Town roles with abilities that grant defense without counterattacking will not be able to use those abilities on you.\n- You may only reveal yourself once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["lookout", "lo", "53"], "Town", "Lookout", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 53");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/1d/RoleIcon_Lookout.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch another player each night.");

		e.addField("Attributes:", "- If three or less other players visit your target that night, you will learn those players’ names. Otherwise, you will learn that more than three other players visited your target, and three random names from among those visitors.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tracker", "track", "54"], "Town", "Tracker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 54");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/12/RoleIcon_Tracker.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Track a person each night. You will learn the names of all players whom your target visits that night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["psychic", "psy", "55"], "Town", "Psychic", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 55");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f2/RoleIcon_Psychic.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the end of each odd-numbered night, you will learn the names of three random players, at least one of which won’t be able to win with the Town.\n- At the end of each even-numbered night, you will learn the names of two random players, at least one of which will be able to win with the Town.\n- If you’re roleblocked, you won’t get your results.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bodyguard", "bg", "56"], "Town", "Bodyguard", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 56");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/1e/RoleIcon_Bodyguard.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Guard another player each night.\n- Put on a bulletproof vest at night.");

		e.addField("Attributes:", "- If your target is directly attacked, you will intercept the attack, causing yourself to be attacked instead of your target, and you will deal a Powerful attack to the attacker.\n- Your bulletproof vest grants you Basic defense for the night.\n- You may only put on a bulletproof vest once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crusader", "crus", "57"], "Town", "Crusader", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 57");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/78/RoleIcon_Crusader.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect another player each night.");

		e.addField("Attributes:", "- You will grant your target Powerful defense for the night.\n- You will know if your target is attacked.\n- You will attack one other random player who visits your target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["doctor", "doc", "58"], "Town", "Doctor", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 58");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/07/RoleIcon_Doctor_1.png";

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player each night.");

		e.addField("Attributes:", "- You may only Heal yourself once.\n- You may not heal Town roles that have used an ability to reveal themselves.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["escort", "esc", "59"], "Town", "Escort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 59");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4f/RoleIcon_Escort.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["medium", "med", "60"], "Town", "Medium", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 60");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/2/28/RoleIcon_Medium.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- While dead, during the day, choose a player to séance.");

		e.addField("Attributes:", "- You will be able to talk with your target the next night.\n- While alive, you can talk with the dead at night.\n- All messages sent by you to the dead or while séancing appear to have been sent by “Medium”.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["retributionist", "retri", "61"], "Town", "Retributionist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 61");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b2/RoleIcon_Retributionist.png";

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Raise a dead Town member’s corpse each night.");

		e.addField("Attributes:", "- Roleblock and redirect immune.\n- You may make your raised corpse use their ability on any legal target. The corpse you target uses the ability and performs the visit. You visit the corpse.\n- You learn all night feedback that the corpse would receive.\n- You may not use the ability of a dead player whose corpse has already been raised by yourself or another role that can raise corpses.\n- You may not use the ability of a dead player whose role is hidden.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spy", "62"], "Town", "Spy", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 62");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/cf/RoleIcon_Spy.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bug a player each night, learning all night feedback they received from other than from their own role.");

		e.addField("Attributes:", "- You learn which players each evil faction targetted each night and how many times.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["transporter", "trans", "63"], "Town", "Transporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 63");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/bb/RoleIcon_Transporter.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players each night.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- Other players targeting your first target will secretly be redirected to your second. Other players targeting your second target will secretly be redirected to your first.\n- Your targets will know that they were transported.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vampire_hunter", "vampirehunter", "vh", "64"], "Town", "Vampire Hunter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 64");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/0d/RoleIcon_VampireHunter.png";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Check a player each night.");

		e.addField("Attributes:", "- If your target is a “Vampire”, you will attack them.\n- You will attack “Vampires” who visit you.\n- You have Basic defense and conversion immunity against “Vampires”.\n- You can hear “Vampire” night chats.\n- “Vampires” are Neutral roles capable of converting players to the same role as they are, or members of an evil faction in which conversion is a primary mechanic and who are capable of converting players to roles in that faction.\n- When there are no “Vampires” alive, you become 67: Vigilante, but you may only shoot once.\n- This role may not roll unless there is at least one “Vampire” in the game.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["conflipper", "65"], "Neutral", "Coinflipper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 65");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Flip the coin for two people each night. If it's heads, you deal an Unstoppable attack to them. If it's tails, you deal an Unstoppable attack to them.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["veteran", "vet", "66"], "Town", "Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 66");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/8a/RoleIcon_Veteran.png";

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Go on alert at night.");

		e.addField("Attributes:", "- When you go on alert, you will attack all players who visit you that night.\n- While on alert, you have Basic defense.\n- You may only go on alert thrice.\n- Roleblock Immunity");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vigilante", "vigi", "67"], "Town", "Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 67");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/a/a6/RoleIcon_Vigilante.png";

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night.");

		e.addField("Attributes:", "- If you kill a member of the Town, the next night, you will commit suicide out of guilt.\n- You may only shoot thrice.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ambusher", "amby", "68"], "Mafia", "Ambusher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 68");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7e/RoleIcon_Ambusher.png";

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lie in wait outside a non-Mafia player’s house each night.");

		e.addField("Attributes:", "- You will attack a random non-Mafia player who visits your target that night.\n- All visitors to your target will see you preparing an ambush.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["blackmailer", "bmer", "69"], "Mafia", "Blackmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 69");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/6/6b/RoleIcon_Blackmailer.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blackmail a player each night.");

		e.addField("Attributes:", "- Your target will be unable to send or react to messages in the day chat or whisper for the duration of the next day.\n- You can hear all whispers.\n- (nice)");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["consigliere", "consig", "70"], "Mafia", "Consigliere", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 70");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/85/RoleIcon_Consigliere.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player each night. You will learn your target's role.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["consort", "cons", "71"], "Mafia", "Consort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 71");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4c/RoleIcon_Consort.png";

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["disguiser", "disg", "72"], "Mafia", "Disguiser", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 72");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d7/RoleIcon_Disguiser.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Disguise a Mafia member as a non-Mafia player each night.");

		e.addField("Attributes:", "- Your first target will appear to be your second’s role to all non-Mafia investigative effects.\n- Your first target’s name will appear as your second’s to all non-Mafia investigative effects.\n- Your target will not count as a member of the Mafia for all non-Mafia investigative effects.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["forger", "forg", "73"], "Mafia", "Forger", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 73");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/48/RoleIcon_Forger.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge a player’s documents each night.");

		e.addField("Attributes:", "- As you forge a player’s documents, you may choose a role and write a last will.\n- If your forged target dies that night, they will appear to have been the role that you chose, and their last will will appear as the last will you wrote.\n- You may only forge twice.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["framer", "74"], "Mafia", "Framer", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 74");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/dd/RoleIcon_Framer.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frame a player each night. Your target will appear to be your role to the first non-Mafia investigative effects used on them.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["hypnotist", "hypno", "75"], "Mafia", "Hypnotist", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 75");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/1/18/RoleIcon_Hypnotist.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hypnotise a player each night.");

		e.addField("Attributes:", "- As you hypnotise a player, you may choose a night feedback message that they could receive from an outside source.\n- Your target will receive that message as if it were part of their night feedback.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["curiosity_killed_the_copycat", "curiositykilledthecopycat", "curiosity", "copycat", "cktc", "ckc", "76"], "Neutral", "Curiosity Killed The Copycat", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 76");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of other roles while dead.");

		e.addField("Attributes:", "- You will kill and clean yourself on Night 1.\n- While dead, you may use the abilities of any other role that can use that ability while dead (i.e. Medium seance, Phlox, etc.) but you may only use each ability once.");

		e.addField("Goal:", "Die to see the Town lose the game.");
	});

	register_role(["janitor", "jan", "jani", "77"], "Mafia", "Janitor", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 77");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/5/57/RoleIcon_Janitor.png";

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Clean a player each night.");

		e.addField("Attributes:", "- If your cleaned target dies that night, their role will appear as “Cleaned” and their last will will be hidden. You will learn that player’s role and be able to read their last will.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["reporter", "78"], "Town", "Reporter", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 78");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate someone to learn every other action that targeted them that night.\n- Investigate a dead body at night to learn about every other action that targeted it during the night that it died. Cannot be used on people who died in the Day.");

		e.addField("Attributes:", "- You will only know the effects of abilities that you learn, such as attacking the target with a specific tier, or investigating something specific about it.\n- If an action you learn is one-of-a-kind effect, and is otherwise **only** usable by roles that copy effects, then you will only see it as a \"one-of-a-kind effect\".\n- You won't learn about self-targeting abilities, or ones that only indirectly affected your target such as Rampages.\n- When using any ability, you may decide to publish your results anonymously in the following day's announcement. You must decide before you get results, not after. You may only do so once.\n- You will bypass any attempt to redirect visitors away from your target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mafioso", "79"], "Mafia", "Mafioso", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 79");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/00/RoleIcon_Mafioso.png";

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "This role cannot roll in the starting rolelist.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["gossiper", "gossip", "80"], "Town", "Gossiper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 80\n*Did you hear? Apparently Rasen has a crush on Igu.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gossip with someone every night.");

		e.addField("Attributes:", "- You will learn any notifications the player receives. (such as an invest getting their invest results)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["medusa", "medu", "81"], "Coven", "Medusa", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 81");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/c1/RoleIcon_Medusa.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stone gaze all your visitors at night.\n- With the Necronomicon, stone gaze a player at night.");

		e.addField("Attributes:", "- Players you kill will have their role appear as “Stoned” and their last will hidden.\n- You may only stone gaze all your visitors thrice.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["potion_master", "potionmaster", "pmer", "82"], "Coven", "Potion Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 82");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f1/RoleIcon_PotionMaster.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use an Attack Potion to attack another player.\n- Use a Heal Potion to Heal another player.\n- Use a Reveal Potion to learn another player's true role.");

		e.addField("Attributes:", "- Each potion has a two-night cooldown unless you have the Necronomicon. Each cooldown ends when you gain the Necronomicon.\n- You are immune to effects that would alter how your target’s role appears to investigative effects.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["hex_master", "hexmaster", "hex", "hm", "83"], "Coven", "Hex Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 83");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/bd/RoleIcon_HexMaster.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Unstoppable/Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hex a player each night.\n- With the Necronomicon, deal an Astral Basic attack to a player each night and hex them.");

		e.addField("Attributes:", "- Hexed players will appear to be your role to all non-Coven investigative effects.\n- Hexes cannot be removed by any means.\n- When all non-Coven players are hexed, you will deal an Unstoppable attack to all hexed players.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["necromancer", "necro", "84"], "Coven", "Necromancer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 84");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/0/03/RoleIcon_Necromancer.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Raise a dead player’s corpse each night.\n- With the Necronomicon, summon a ghoul to deal a Basic attack to a player each night.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You may make your raised corpse use their ability on any legal target other than yourself. The corpse you target uses the ability and performs the visit. You visit the corpse. With the Necronomicon, your ghoul uses the ability and performs the visit.\n- You learn all night feedback that the corpse would receive.\n- You may not use the ability of a dead player whose corpse has already been raised by yourself or another role that can raise corpses.\n- You may not use the ability of a dead player whose role is hidden.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["poisoner", "poison", "85"], "Coven", "Poisoner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 85");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/e/e8/RoleIcon_Poisoner.png";

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Poison a player each night.");

		e.addField("Attributes:", "- At the end of the night after you poison a player, they will die if they would have died if you had dealt a Basic attack to them the night you poisoned them.\n- Poisoning counts as an attack.\n- Your targets will learn that they were poisoned.\n- With the Necronomicon, your poisons cannot be healed.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["amnesiac", "amne", "86"], "Neutral", "Amnesiac", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 86");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remember a dead player’s role each night. You will become your target’s role.");

		e.addField("Attributes:", "- You may not remember the role of a dead player whose role is hidden.");

		e.addField("Goal:", "Remember who you were and complete that role's goal.");
	});

	register_role(["arsonist", "arso", "87"], "Neutral", "Arsonist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 87");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/4/4d/RoleIcon_Arsonist_1.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Douse a player each night.\n- Ignite all doused targets at night.");

		e.addField("Attributes:", "- Detection Immune\nDoused targets will appear to be your role to all non-Mafia investigative effects.\n- You will douse anyone who visits you.\n- You will know if you are doused.\n- If you do not use an ability at night, you will un-douse yourself.");

		e.addField("Goal:", "Live to see everyone burn...");
	});

	register_role(["executioner", "exe", "88"], "Neutral", "Executioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 88");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/ce/RoleIcon_Executioner.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the beginning of the game, you will receive a non-Power Town member as your target.\n- If your target dies without being lynched, you will become 90: Jester.");

		e.addField("Goal:", "Trick the Town into executing your Target.");
	});

	register_role(["guardian_angel", "guardianangel", "ga", "89"], "Neutral", "Guardian Angel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 89");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b3/RoleIcon_GuardianAngel.png";

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch over your target at night, Astrally Healing them and removing all negative effects from them.");

		e.addField("Attributes:", "- At the beginning of the game, you will receive a player as your target.\n- Your target cannot be a player who must die to win.\n- You may watch over your target while dead.\n- You may only watch over your target twice.\n- If your target dies, you will become 96: Survivor, but you may not put on any bulletproof vests.");

		e.addField("Goal:", "Keep your target alive until the end of the game.");
	});

	register_role(["jester", "jest", "90"], "Neutral", "Jester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 90");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d8/RoleIcon_Jester.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt a player who voted to lynch you the night after you’re lynched.");

		e.addField("Attributes:", "- If you do not haunt a player, you will haunt a random player who voted for you.");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["juggernaut", "jugg", "91"], "Neutral", "Juggernaut", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 91");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/d9/RoleIcon_Juggernaut.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each full moon.");

		e.addField("Attributes:", "- If you have killed at least one player, you may attack each night instead.\n- If you have killed at least two players, your attack rampages.\n- If you have killed at least three players, your attack is Unstoppable and you ignore all protective effects.\n- Detection Immunity");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["pirate", "92"], "Neutral", "Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 92");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/980989425137901588.webp";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose another player to plunder.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- When you plunder a player, the next night, they must choose to sidestep, wear chainmail, or backpedal, and you must choose to use your scimitar, your rapier, or your pistol.\n- If you use your scimitar and your target sidesteps, you use your rapier and your target wears chainmail, or you use your pistol and your target backpedals, you will attack them.\n- Plundered players are roleblocked.");

		e.addField("Goal:", "Attack two players.");
	});

	register_role(["plaguebearer", "pb", "93"], "Neutral", "Plaguebearer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 93");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_PlagueBearer_1.png";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Infect a player each night.");

		e.addField("Attributes:", "- Players who visit you or infected players become infected.\n- Players who infected players visit become infected.\n- If, at the end of the phase, all other players are infected, you will become Post 94: Pestilence, Horseman of the Apocalypse.");

		e.addField("Goal:", "Infect all living players and become Pestilence (Post 94).");
	});

	register_role(["pestilence", "pest", "94"], "Neutral", "Pestilence", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 94");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/998691858207228026.webp";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Rampage attack a player each night.");

		e.addField("Attributes:", "- You will attack anyone who visits you.\n- Roleblock and Control Immunity");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["serial_killer", "serialkiller", "sk", "95"], "Neutral", "Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 95");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- Roleblock Immunity\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["survivor", "96"], "Neutral", "Survivor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 96");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/a/ae/RoleIcon_Survivor.png";

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Put on a bulletproof vest at night, gaining Basic Defense. (4 uses)");
		
		e.addField("Goal:", "Live until the end of the game.");
	});

	register_role(["vampire", "vamp", "97"], "Neutral", "Vampire", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 97");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/975231005713645618.webp";

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to convert a player each night. If your target has no defense, is not part of an evil faction’s factional chat, and is not conversion immune, you will convert them to a 97: Vampire. Otherwise, you will attack them.");

		e.addField("Attributes:", "- You have a factional chat with all Vampires.\n- Only the most recently converted Vampire may convert each night.\n- No Vampires may convert if a player was successfully converted last night.");
		
		e.addField("Goal:", factions.Vampire.goal);
	});

	register_role(["werewolf", "ww", "98"], "Neutral", "Werewolf", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 98");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b8/RoleIcon_Werewolf.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Rampage attack a player each full moon.");

		e.addField("Attributes:", "- If, during a full moon, your ability would not resolve, you would fail to use your ability, or you would use your ability on yourself for any reason, you will attack all other players who visit you instead.\n- You have detection immunity if it’s not a full moon.");
		
		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["witch", "99"], "Neutral", "Witch", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 99");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/8/87/RoleIcon_Witch.png";

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Control a player each night.");

		e.addField("Attributes:", "- As you control a player, you may force them to target a player of your choice.\n- You will learn your target’s role.\n- You have a Basic autovest.\n- Roleblock and control immune");
		
		e.addField("Goal:", "Survive to see the Town lose the game.");
	});

	register_role(["unstable", "100"], "Neutral", "Unstable", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 100");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target two players, and lower their defense to None for the night.");

		e.addField("Attributes:", "- You must use your ability every night, and you cannot target people you've targeted before until you've targeted everyone in the game at least once.\n- If you cause someone to die, you will suicide of guilt.");
		
		e.addField("Goal:", "Survive the game without having caused anyone's death.");
	});
};
