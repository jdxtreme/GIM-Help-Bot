module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["enraged_prostitute", "enragedprostitute", "801"], "Neutral", "Enraged Prostitute", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 801");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night. You'll also roleblock each other player who target them that night.");

		e.addField("Attributes:", "- Roleblock Immune\n- You may self-target.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["ptgtowierps", "rock_paper_scissors", "rockpaperscissors", "rps", "802"], "Neutral", "Pirate That Got Tired Of What Is Essentially Rock Paper Scissors", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 802");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to duel each night, which also roleblocks them.");

		e.addField("Attributes:", "- In a duel, choose  arandom game to play against the target that has some feasible way of being competetive.\n- If your target loses, they are dealt a Powerful Attack.\n- You cannot duel the same player twice in a row.\n- Detection Immunity\n- Vampires cannot convert you.");

		e.addField("Goal:", "Win 2 games.");
	});

	register_role(["minecraft_fan", "minecraftfan", "minecraft", "803"], "Neutral", "Minecraft Fan", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 803");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, visit another player to see if they own a minecraft game, which attacks as follows:\n> Unowned:Unstoppable\n> MC Dungeons:Powerful\n> Bedrock Edition(Win 10/Mobile/Xbox One/PS4/Xbox Series/PS5/Switch):Basic\n> Legacy Edition (Xbox 360/PS3/Xbox One/PS4/Wii U/3DS):Basic\n> Java Edition:None");

		e.addField("Attributes:", "- Prior to the start of the game, the owner of the role must prove they own either version of the 2011 video game \"Minecraft\" (Java or bedrock edition), if not, this role will be rerolled.");

		e.addField("Goal:", "Ensure everyone alive has a Minecraft game.");
	});

	register_role(["pirate_that_got_tired", "piratethatgottired", "tired", "ptgt", "804"], "Neutral", "Pirate That Got Tired", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 804");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to attack a player each night with only a 1/3 chance to succeed.");

		e.addField("Attributes:", "- You cannot attack the same player twice in a row.\n- Detection Immunity\n- Vampires cannot convert you.");

		e.addField("Goal:", "Win 2 dice rolls.");
	});

	register_role(["sailor", "805"], "Loyalist", "Sailor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 805");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to spend a night at sea during the day. This will give you unvisitable, but roleblock you, and deny you access to the Loyalist chat.. You cannot spend 3 nights in a row at sea.");

		e.addField("Attributes:", "- When you are out at sea, you have a 70% chance to return with fish, and a 30% chance to return with treasure. If you are not at sea at night, you may prepare fish that you have, and give it to anyone at night, or give out treasure. It has a 33% chance to increase the attack value of a target for a night, 33% chance to increase their defense for a night, and a 33% chance to poison your target. Treasure has a 50/50 chance to do the first two. You will not trigger protective roles that kill, but they will protect your target if you poison them.");

		e.addField("Goal:", "Keep the Governor alive the entire game and eradicate those who will not submit to the Governor's rule.");
	});

	register_role(["unicorn", "806"], "Neutral", "Unicorn", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 806");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Invoke your natural beauty at night, making yourself immune to lynching the following day. This action can't be prevented in any way. You may only do this twice.\n- Perform an act of altruism at night, setting your defense to None for the night.");

		e.addField("Attributes:", "- All attacks will be redirected towards you.\n- When you die at night, an evil player who killed you will drink your blood, gaining Invincible defense and your first attribute. You will gain the ability to use your first ability on them from the dead, and they'll gain the ability to ask you to do so at any time.");

		e.addField("Goal:", "Survive until the end of the game, or have a player you splashed with Unicorn blood survive until the end of the game.");
	});

	register_role(["first_mate", "firstmate", "807"], "Crew", "The First Mate", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 807");

		e.addField("Alignment", "Crew Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, you may guess someone’s role when they are on the stand, you may only do this twice.");

		e.addField("Attributes:", "- If you successfully get the role, your target will be notified.\n- A wrongful role guess will make your blowgun backfire onto you.\n- A guessed target will die to infection after two days by an unstoppable attack.\n- A Doctor or Guardian Angel can heal a guessed target, a Potion Master cannot.\n- After the first night, your targets infection will leave them voiceless.");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["sailor", "808"], "Crew", "Sailor", {subCat: "Chaotic"}, (e) =>
	{
		e.setDescription("Post 808");

		e.addField("Alignment", "Crew Chaotic", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a bounty on one player's head each day.");

		e.addField("Attributes:", "- Evils will be notified of who the bounty is on.\n- The town will only know a bounty was placed.\n- Killing this bounty increases the killers defense by one level for two nights, hanging the bounty will yield no results and allow the Sailor to cast again.\n- If after two days, the bounty is not killed, a powerful attack may be dealt by the Sailor at any given night.\n**- You may only bounty once and the target cannot be switched unless he is hung.**");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["smuggler", "809"], "Crew", "Smuggler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 809");

		e.addField("Alignment", "Crew Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select ANY Pirate role that is not taken after night 2 to become.\n- Cannot become Crew (Captain) as a selection");

		e.addField("Attributes:", "- Priority over Amnesiac (Remembering).\n- Can select on what night he wishes to remember.\n- Can not be promoted to Crew (Captain) until he has become a role first.\n- Appears as Not Suspicious until they become a role.\n- As Smuggler, can visit once per game whilst doing nothing.\n- CAN remember a crew role of a dead member, but not Quartermaster or Pirate.");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["gunner", "810"], "Crew", "Gunner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 810");

		e.addField("Alignment", "Crew Killing", true);
		e.addField("Attack", "Powerful/Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, select a target, this cannot be changed during the night.\n> If more than one person visits your target, you will fire a cannon and kill at max two, but not the target. This will be Astral, and a powerful attack.\n> If one/zero people visit, you will kill your target only. This will be Physical, meaning all TP can kill you. This will be Basic.");

		e.addField("Attributes:", "- You are the first priority in promotion lists.\n- You must reload your cannon after firing this will take one night, if you fail to fire it for any reason, you will not need to.\n- You can target a crew member once per game, but will not shoot them if the town fails to visit.");

		e.addField("System:", "(Night Announcement)\nA Gunner takes aim.");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["pirate", "811"], "Crew", "Pirate", {subCat: "Captain"}, (e) =>
	{
		e.setDescription("Post 811");

		e.addField("Alignment", "Crew Captain", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player during the day to plunder, that player will be given a menu of three options (Sidestep, Chainmail, Backpedal.)");

		e.addField("Attributes:", "- You will attack your target with a basic attack no matter what.\n- Winning the duel will give all members of the **Crew** detection immunity for that night, and upgrade the attack to Powerful for that kill alone.\n- You will super role-block your target, preventing **Transporters, Escorts, Consorts, Necromancers, Retributionists, and Serial Killers** from using their ability past their immunity to roleblock.\n- If you die, a member of the crew will become the next **Pirate** to take your place.");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["boatswain", "boat", "812"], "Crew", "Boatswain", {subCat: "Chaotic"}, (e) =>
	{
		e.setDescription("Post 812");

		e.addField("Alignment", "Crew Chaotic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two targets at night and swap their night notifications, they will not be notified of the deception.");

		e.addField("Attributes:", "- This effects ALL notifications, including **Poison**.\n- You cannot target yourself or other Crew members.\n- If no other Crew (Captain) is alive, become a **Pirate.**");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["quartermaster", "quarter", "813"], "Crew", "Quartermaster", {subCat: "Captain"}, (e) =>
	{
		e.setDescription("Post 813");

		e.addField("Alignment", "Crew Captain", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select a weapon to use the next night.\n\nMUSKET - Kill your target if they have an attack stat above None on their role card, do nothing otherwise. (Jester, Veteran, Crusader, Trapper included, all technicalities.)\n(Physical, Powerful Attack)\n\nNautical Scope - View all visitors to your target, and view who your target visits.\n(Physical)\n\nCannon - Do a basic attack rampage at your targets house, you are revealed to the town. You can do this only once.\n(Astral)");

		e.addField("Goal:", "Kill all main factions.");
	});

	register_role(["psychopath", "psycho", "814"], "Neutral", "The Psychopath", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 814");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Kill a player at night.\n- Appear as an investigative role of your choice to all investigating players.\n- Kill one player immediately, all of the town will know what has happened.");

		e.addField("Attributes:", "- You will additionally have the abilities of two Town (Investigative) roles not in the game.\n- During a kill, your defense will drop to none.");

		e.addField("Goal", "Be the last person remaining at the end of the game.");
	});

	register_role(["phantom", "815"], "Neutral", "The Phantom", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 815");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Kill a player each night.\n- Disguise yourself as a specific role during your lynch, this can be done at any point, even during the day.");

		e.addField("Attributes:", "- You cannot die at night until day 6, where you will fade away into the afterlife. (Erasure Attack to Self)");

		e.addField("Goal", "Be the last player standing.");
	});

	register_role(["raider", "816"], "Loyalist", "Raider", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 816");

		e.addField("Alignment", "Loyalist Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scout a player's house at night to prepare for a raid. They will be notified of this. Alternatively, raid someone's house. You must have scouted their house on any previous night.");

		e.addField("Attributes:", "- When you raid a player, you learn the outcome of all actions they've previously taken at night. A player can become immune to a raid by staying home the night you raid them. This will not remove the scouting on them, but they will learn your name.");

		e.addField("Goal:", "Loyalist Goal");
	});

	register_role(["ritualist", "817"], "Neutral", "Ritualist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 817");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Attempt to sacrifice someone at night. If they didn't visit and they weren't visited, they'll be forced to commit suicide. The Town will be informed that it was an unnatural suicide. Your defense increases by a level for each player you sacrifice.");

		e.addField("Attributes:", "- You have a layer of Basic defense that can prevent one attack.");

		e.addField("Goal:", "Sacrifice two players.");
	});

	register_role(["thanos", "818"], "Neutral", "Thanos", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 818");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Check a player for owning an Infinity Stone during the night.\n- Snap half of all living players during the day, immediately modkilling them. 0 Uses, +1 Use if all Infinity Stones are acquired.");

		e.addField("Attributes:", "- At the start of the game, the Infinity Stones will be distributed randomly between players besides Thanos.\n- Any player with an Infinity Stone who discusses the Infinity Stones, unless they are Thanos themselves, is immediately modkilled, their Infinity Stone forfeited to Thanos.\n- When you find a player with an Infinity Stone, they may choose to either hand it over to you or fight. If they choose to fight, you will both attack each other with your normal attack values. You will then reduce each others' defense levels by 1. Repeat, until one player kills the other, gaining/keeping the Infinity Stone. If you kill each other at the same time, you live and they don't.\n- The host is encouraged to not snap half of all living players randomly, instead doing so as they see fit.");

		e.addField("Infinity Stones:", "> Space Stone - The owner of the Space Stone will be informed of all visits to them at the end of each night, and their effects. They may choose to redirect any number of these visits. Can't redirect Thanos.\n> Mind Stone - The owner of the Mind Stone will know the roles of all players. May not be given to a Town or Neutral Benign player.\n> Reality Stone - The owner of the Reality Stone gains Powerful Defense.\n> Power Stone - The owner of the Power Stone may deal a Basic attack to any number of players during the night instead of their normal abilities.\n> Time Stone - The owner of the Time Stone may know who was visited with what effects at the end of each night.\n> Soul Stone - The owner of the Soul Stone will be informed of all whispers and may access any private chat between two or more people.");

		e.addField("Goal:", "Find all 6 Infinity Stones and Snap half of all life.");
	});

	register_role(["hitman", "819"], "Neutral", "Hitman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 819");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you are in the game, all players (including yourself) will receive another goal: eliminate their target at all costs. They will know their target's role (and that role's post number), but not their name. No player can be a target to multiple people, and informed minority members cannot have their target be someone they know is on their team. Nobody's target can be themselves. Lynching a target will only satisfy the win condition if the player voted the target (or voted guilty). If someone's target dies to someone that isn't themselves, their target's target is now their target. Your attack level is always one level higher than your target's defense level.");

		e.addField("Goal:", "Eliminate your target.");
	});

	register_role(["kingmaker", "820"], "Neutral", "Pirate that is a Kingmaker", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 820");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to duel each night, which also roleblocks them.");

		e.addField("Attributes:", "- In a duel, the host will decide which of you has played better.\n- The loser will be Modkilled.\n- You cannot duel the same player twice in a row.\n- Detection Immunity\n- Vampires cannot convert you.");

		e.addField("Goal:", "Avoid two modkills.");
	});

	register_role(["nerd", "821"], "Neutral", "Nerd", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 821");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Duel a player to a match of RPS-101 each night.");

		e.addField("Attributes:", "- You will perform five rounds of the infamous game RPS-101 with your target. Both players must send an action in their private channels, and once both players have sent an action, the outcome is decided and told to the players.\n- If your target wins, their defense raises by one value for the night (including any protective abilities used on them), but they will not be told what their defense is.");

		e.addField("Goal:", "Win 3 duels.");

		e.addField("FOR HOSTING:", "I recommend using https://rps101.pythonanywhere.com/ for dealing with who wins. Organizes the information very well.");
	});

	register_role(["pirate_invasion", "pirateinvasion", "822"], "Neutral", "Pirate Invasion", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 822");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this rolls and doesn't get rerolled by whoever gets it, every other player is rerolled into a random role that is a version of the TOS Pirate.");

		e.addField("Goal:", "Survive every Pirate and live to see the end of the game.");
	});

	register_role(["pirate_but_with_defense", "piratebutwithdefense", "pwbd", "823"], "Neutral", "Pirate but with defense", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 823");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "FUCKIN UNNNNKILLABLEEEEEEE", true);

		e.addField("Abilities:", "- Choose a player to duel each night, which also roleblocks them.");

		e.addField("Attributes:", "- In a duel, you will secretly choose Scimitar, Rapier, and Pistol, and your target will secretly choose Sidestep, Chainmail, and Backpedal.\n- Scimitar beats Sidestep, Rapier beats Chainmail, and Pistol beats Backpedal.\n- If your target loses, they are dealt a Powerful Attack.\n- You cannot duel the same player twice in a row.\n- Detection Immunity\n- Vampires cannot convert you.");

		e.addField("Goal:", "Win 2 duels.");
	});

	register_role(["flummery", "hfwatsmpaoas", "824"], "Neutral", "Holy flummery why are there so many pirates all of a sudden?", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 824");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "\"No Bullshit\"", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Know how many pirates are in the game, and if you're visited by a pirate, automatically kill them. No bullshit.\n- If post 822 roles, force all pirates to reroll, including post 822.\n- You can only spawn if at least one pirate exists.");

		e.addField("Goal:", "Kil all pirates.");
	});

	register_role(["equalization_above_all", "equalizationaboveall", "equalization", "eaa", "825"], "Neutral", "The Equalization Above All", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 825");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "\"No Bullshit\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stop any and all reroller class roles, rerolling players do not count.");

		e.addField("Attributes:", "- Trumps all reroller ability and attributes.\n- Wins with post 205, and 205 is allowed to reroll.");

		e.addField("Goal:", "See no role rerolled, except for player rerolls.");
	});

	register_role(["chess_master", "chessmaster", "chess", "826"], "Neutral", "Chess Master", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 826");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- Use one of your chess pieces each night.");

		e.addField("Attributes:", "**Pawn** Deal a basic attack to a target. For every 3 players you kill with a pawn, you may decide to promote the pawn into any other chess piece, giving you 1 charge of that piece\n**Knight** Deal a powerful attack to a target, and bypass all defense values for the night (except permanent values). 2 uses\n**Bishop** Grant yourself Powerful defense  for the night and attack a target with Powerful defense. 2 uses\n**Rook** Deal a Powerful Rampage attack to a target player. 2 uses.\n**Queen** You have the combined abilities of the Pawn, Bishop and Rook, and their attacking values are upped by 1. 1 use.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["sports_better", "sportsbetter", "sports", "827"], "Neutral", "Sports better", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 827");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick 2 players and a sports game that's happening that night. Both of them must choose a team to win, if victorious, they receive something beneficial depending on the role (extra charges, an extra vote, ect.), if they lose, they die.");

		e.addField("Goal:", "Have 5 people see their team win");
	});

	register_role(["innocent_child", "innocentchild", "innocent", "828", "828a"], "Neutral", "Innocent Child", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 828");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Watch another player each night. You'll receive any night messages they do, but night message related to killing or similar things will be replaced with harmless ones.");

		e.addField("Attributes:", "- If the player you watch dies at night, you'll become a Scarred (see below) and be unable to act the next night.\n- If you're killed by something other than your Vulnerable defense and lynching, you'll die but become an Angel (see below).\n- Town roles that kill you, including by being a visitor when you died due to Vulnerable defense, will commit suicide the next night out of guilt.");

		e.addField("Goal:", "Become a Scarred or an Angel and win.");
	});

	register_role(["scarred", "828b"], "Neutral", "Scarred", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 828b");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Scorn a player each night. They'll be roleblocked, and you'll receive any night messages they do, plus any they would have received were they not roleblocked.\n- Wildly attack a player at night. You'll also attack all other players that visit them. You may only do this once.");

		e.addField("Attributes:", "- You may self-target.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["angel", "828c"], "Neutral", "Angel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 828c");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player Powerful defense each night while dead.");

		e.addField("Attributes:", "- Dead players can't be the target of abilities while you're dead.");

		e.addField("Goal:", "Help the Town win.");
	});

	register_role(["plagiarizer", "plag", "829"], "Town", "Plagiarizer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 829");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, visit a player, and learn who made their faction.");

		e.addField("Attributes:", "- Classic ToS factions are listed as \"Vanilla\", everyone else is listed as the original poster in <#970046125065265202>.\n- Neutrals are listed as \"Neutral.\"");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["cupcake_nk", "cupcakenk", "cupcake", "830"], "Neutral", "Cupcake NK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 830");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player at night to kill.");

		e.addField("Attributes:", "- The host decides a completely ridiculous mechanic by which they die. This may result in any number of other unforeseen circumstances, but they cannot lead to your death.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["not_pirate", "notpirate", "pirate", "831"], "Neutral", "Not Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 831");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone during the day to challenge to Rock Paper Scissors.\n- Use a vest to protect yourself.");

		e.addField("Attributes:", "- Anyone you duel will be roleblocked that night.\n- Both players put their choice in their channel.\n- If you win, you deal a powerful attack to your target. If you lose or draw, nothing happens.\n- You cannot duel someone two times in a row.\n- Because this is not Pirate, you get 2 vests that give you basic defense for a night. See? It is not Pirate.\n- This is not a pirate. Any rules/effects that effect pirates do not effect Not Pirate");

		e.addField("Goal:", "Win Rock Paper Scissors twice.");
	});

	register_role(["trisyara_goddess_of_thunder", "trisyaragoddessofthunder", "trisyara", "goddess_of_thunder", "goddessofthunder", "tgot", "832"], "Neutral", "Trisyara, Goddess of Thunder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 832");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Strike someone down each night, dealing to them an Unstoppable attack.");

		e.addField("Attributes:", "- Roleblock, Redirect, Detection, and Conversion Immune\n- Whenever a player is dealt an attack that is greater than the attack value that would've been needed to kill them by anything, you gain an extra attack equal to the difference. (*If an Unstoppable is dealt to someone with no defense, you gain a Powerful attack.*)\n- You may use any number of these extra attacks in addition to your normal night action.\n- This applies to modkills, which are considered one level greater than Overkill. It does not apply to lynches.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["imperfect_clone", "imperfectclone", "imperfect", "833"], "Neutral", "Imperfect Clone", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 833");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Visit a player. This ability is only here in case you are a clone of a role with no ability that can target other players.");

		e.addField("Attributes:", "- You are a clone of a random player's role, sharing their abilities and attributes, but not their goal or alignment. That person will be your Target.\n- You may be a clone of a unique role, but not a Town Power.\n- If you copy a role that would normally have access to a faction chat and/or a faction attack, you will have access to neither.\n- If you visit your target using any ability, you will be notified, and you will deal them an Unstoppable Attack.\n- If your target is killed by someone other than you, you will be given a new role to copy, and you will lose your previously copied abilities and attributes.");

		e.addField("Goal:", "Kill someone who has the role that you are a copy of.");
	});

	register_role(["psychoanalyst", "psycho", "pa", "834"], "Neutral", "Psychoanalyst", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 834");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two players to put through a social experiment during the day.");

		e.addField("Attributes:", "- Both of your targets will be roleblocked through immunity and will be notified that they were put in a social experiment.\n- The first target will have a choice of killing either themselves or the other player. If they do not make a decision, they will automatically kill themselves.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["shifter", "835"], "Neutral", "Shifter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 835");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player each night.\n- Shift any player's stats at night, increasing their Attack or Defense by any amount and decreasing the other by that amount. (*Roles with no attack given attack will attack their targets. Negative attack gives the target that much defense. The highest defense is Invincible and the lowest is Vulnerable; the highest attack is Overkill and the lowest gives the target Invincible defense.*)");

		e.addField("Attributes:", "- You may use both your abilities in the same night.\n- You may use your second ability twice each night if one of the uses targets yourself.\n- You may shift yourself.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["shinigami", "death_note", "deathnote", "836"], "Neutral", "Shinigami", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 836");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, write a player's name in your Death Note, and they will die. Optionally, you may specify the cause and circumstances of their death, controlling other roles to make it happen.");

		e.addField("Attributes:", "- If your cause of death is impossible (ie, it requires a role that doesn't exist), your target will simply die of a heart attack instead.\n- Your cause of death cannot intentionally kill more than a single person per night. (ie, you can't intentionally control people into a Rampage attack that you forced someone to use)");

		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["anathema", "837"], "Umbrae", "Anathema", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 837");

		e.addField("Alignment", "Umbra Assault", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack 2 players each night.");

		e.addField("Attributes:", "- You may only attack during Full Moons.\n- Under a Blood Moon, you will rampage at your house in addition to attacking, your defense will be upgraded to Basic, and your attack will be upgraded to Unstoppable.\n- Full Moons provide Roleblock Immunity.\n- The Blood Moon provides Roleblock, Redirect, and Control Immunity.");

		e.addField("Goal:", "Umbrae Goal");
	});

	register_role(["magical_girl", "magicalgirl", "838"], "Neutral", "Magical Girl", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 838");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Abilities: Each night, choose magic or chocolate.\n*Magic* — Choose up to three other players. The first is roleblocked, the second can't vote the next day, and the third's defense is lowered by one stage for the night (no defense becomes Vulnerable).\n*Chocolate* — Choose up to three players. All abilities used against the first tonight fail, you get investigative results (see Post 35) for the second, and the third gets a layer of Basic defense that can block one attack.");

		e.addField("Attributes:", "- Once you choose a mode three times, you may no longer choose the other.\n- Roleblock and Redirect Immune\n- You may give yourself chocolate.");

		e.addField("Goal:", "Your goal depends on which of magic or chocolate you chose more of. You can't win if it's even.\n*Magic* — Lynch all criminals and evildoers.\n*Chocolate* — Live to see the Town lose the game.");
	});

	register_role(["akimbo", "839"], "Neutral", "Akimbo", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 839");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill two people at night.");

		e.addField("Attributes:", "- If either of your targets would not normally die to your attack, your ability will be cancelled.");

		e.addField("Goal:", "Kill all who may oppose you.");
	});

	register_role(["crystalline_giant", "crystallinegiant", "giant", "840"], "Neutral", "Crystalline Giant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 840");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "- Attack someone each night.\n- Attack someone each night.");

		e.addField("Attributes:", "- Unique, roleblock immune, redirect immune, detection immune, conversion immune, rampage, Astral, highest priority, Invincible autovest, may multitask");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["off_by_one", "offbyone", "error", "oboe", "841"], "Mafia", "Off By One Error", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 841");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cause someone's ability to error at night.");

		e.addField("Attributes:", "- As long as you are alive, all players that die to a Mafia role will flip the role one post higher than theirs (the highest post number will instead flip post 1)\n- Causing someone's ability to error will cause their ability to act as if they are the role one post lower than theirs (post 1 will instead perform the ability of the highest post number). This ability will fail if the action is impossible, and you will be notified of this.\n- You may cause three people's ability to error. You do not lose a charge if your ability fails.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["vampire_hunter", "vampirehunter", "842"], "Neutral", "Vampire Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 842");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you attack a conversion role, deal a Powerful attack instead of a Basic attack.\n- You can hear the factional chat of conversion roles.\n- If a conversion role visits you, you will be immune to all of their effects.");

		e.addField("Goal:", "Kill all conversions roles. If no conversion roles exist in the game, kill all who would oppose you.");
	});

	register_role(["crazy_dave", "crazydave", "dave", "843"], "Neutral", "Crazy Dave", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 843");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Plant plants to defend your lawn.");

		e.addField("Attributes:", "- You start with 100 sun.\n- Every night, gain 50 sun. Other plants can increase this amount.\n- You can only have one of each plant unless you have all plants alive, in which case you can plant duplicates.\n- If someone visits you, they will be effected by your plants. They will also destroy a random plant.\n- Once half the players have died, you can send your plants to attack people. Your visits are astral.\n- Your visit will happen before your plants are destroyed.");

		e.addField("List of Plants:", "Sunflower - 50 sun | Gain an extra 50 sun per night.\n\nSunshroom - 50 sun | Gain 25 sun per night for 2 nights, then gain 100 sun per night. This will be the last plant to be destroyed.\n\nPeashooter - 50 sun | Deal a basic attack to a visitor/your target.\n\nWalnut - 50 sun | Gain powerful defense the next time you are attacked. This will be the first plant destroyed when you are visited unless you have a tallnut.\n\nFume Shroom - 75 sun | Poison all visitors/poison all visitors to your target.\n\nSpikeweed - 75 sun | Deal a powerful attack to a visitor.\n\nTallnut - 100 sun | Gain invincible defense the next time you are attacked. This is the first plant to be destroyed. (Only 1 can ever be planted.)\n\nCherry Bomb - 200 sun | No ability/deal an Unstoppable attack to your target and a basic attack to all their visitors. (This can only be bought once you can visit.)\n\nCome back soon to see the new plants! (this might become an entire essay, Crazy Dave will plant everything.)");

		e.addField("Goal:", "Kill all who oppose you.");
	});

	register_role(["easiest_role", "easiestrole", "easiest", "leritg", "844"], "Neutral", "Literal Easiest Role In The Game", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 844");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the night, give someone basic defense, other than yourself. The basic defense will remain on the target until they are attacked.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", "Give at least 1 person basic defense.");
	});

	register_role(["marker", "845"], "Neutral", "Marker", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 845");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Set up a hit list of four people at night.");

		e.addField("Attributes:", "- During the night, you may choose to create a list of four players. You will deal a Basic attack to them this night.\n- If any of your targets would not normally die, your ability will fail.\n- You may not make a hit list on Night 1.\n- You lose your Basic Defense once you have won.");

		e.addField("Goal:", "Successfully kill four players in one night.");
	});

	register_role(["herbalist", "herb", "846"], "Town", "Herbalist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 846");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gain (n/2 rounded up) herbs each night, where n is the night number.");

		e.addField("Attributes:", "- Spend two herbs on a Herb of Healing, healing a player for the night and giving them Powerful defense. Spend three herbs on a Herb of Truth, which will force them to reveal their true role. Spend three herbs on a Herb of Poison, either poisoning your target or all your target's visitors. You may only use one type of herb at a time.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["jacksfilms", "847"], "Neutral", "Jacksfilms", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 847");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the beginning of a day, give a YIAY prompt. Everyone must participate unless they're dead.");

		e.addField("Attributes:", "- You pick the best and worst responses. The best response cannot be lynched that day. The worst will die.\n- You do not know who sent which prompt, and people cannot say which prompt they sent.");

		e.addField("Goal:", "Have everyone alive submit a good YIAY answer");
	});

	register_role(["wild_card", "wildcard", "848"], "Neutral", "Wild Card", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 848");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the start of the game, you may create a custom role for yourself, choosing your alignment, abilities, and attributes. Your role cannot be neutral. Your role cannot be an exact copy of any role in roles.\n- The Host must accept your role to let you use it. If it is blatantly overpowered, impossible to host, or breaks server rules, the Host might reject it and reroll you into a role other than Wild Card. (The Host may reject a custom role for any reason.)\n- Upon death, your full role card will be revealed, even if you were cleaned.\n- Your role cannot negate any of these attributes.");

		e.addField("Goal:", "Win as whichever faction you choose for your custom role.");
	});

	register_role(["brain_freeze", "brainfreeze", "849"], "Everfrost", "Brain Freeze", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 849");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to freeze the town over at night. If you do, all players who were roleblocked last night will be forced to target themselves tonight. They will not be notified of this. You may only freeze the town over three times.\n**Nevermelt** — All players who have been roleblocked at any point in the game lose all defense and can't have defense tonight. Then, force them to target themselves. You may only use this ability once.");

		e.addField("Attributes:", "- Roleblock Immune");

		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["midnighter", "850"], "Neutral", "Midnighter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 850");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, choose a player to attend to. They will be role-blocked, and investigator roles that also visit them that night will not receive any definitive results.\n- Alternatively, you may choose to stay home. All roles that visit you will be role-blocked");

		e.addField("Attributes:", "- Roleblock Immune");

		e.addField("Goal:", "Eliminate all Unique Roles. You may spare Evil roles.");
	});
};
