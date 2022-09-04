module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["i_am_inside_your_home", "inside", "601"], "Neutral", "I Am Inside Your Home", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 601");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fucking shank a player during the night, dealing an Astral Basic Attack to them");

		e.addField("Attributes:", "- You have access to all private channels, evil faction chats, and jailor/wisteria-like chats.\n- During Day 1, everyone else may vote to give you a win condition, propositions chosen by players themselves (1 proposition each). If nobody can reach a clear plurality, you get to decide for yourself.");
		
		e.addField("Goal:", "Win with the goal given to you");
	});

	register_role(["undercover_agent", "undercoveragent", "undercover", "602"], "Town", "Undercover Agent", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 602");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 2 uses: Mimic the effect of any role of the faction that you're disguised as.\n- 1 use: In the following day, you will be allowed to speak in the day chat. Can only be used if your first ability is out of uses.");

		e.addField("Attributes:", "- At the beginning of the game, you will disguise yourself as a member of the largest evil faction.\n- By default, you may speak in the chat of the faction you are disguised as, but you cannot whisper or speak in the day chat.\n- If you kill or lynch a member of the faction you're disguised as, every other member will be notified that you're an Undercover Agent.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["flexible_role", "flexiblerole", "flexible", "603"], "Neutral", "Flexible Role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 603");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose your abilities to bring about the end of the town.");

		e.addField("Attributes:", "- You can kill a player at night, dealing a powerful attack\n- During the role distribution phase, choose 2 extra abilities. If the host decides your abilities are fine, you have both of them along with your attack.\n- You can only use 1 ability per night\n- All of your abilities have a 1 night cooldown.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["quipper", "604"], "Neutral", "Quipper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 604\n*Be funny now.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two players to force to answer a Quiplash prompt during the day.");

		e.addField("Attributes:", "- The two players you chose will be given a Quiplash prompt at the start of the following night that they must respond to.\n- Immediately after both players have responded to the prompt, the prompt and answers will be shown to everyone in the server in a different channel. The answers will not indicate who sent them in. All of the players in the game (apart from the two players that answered the prompt) will be able to vote on which response they like more through their private channels. The player that receives fewer votes will be dealt a Powerful attack. The attack will happen in 12 real hours after the answers were shown even if it occurs during the day.\n- If there is a tie, both players will be dealt a Powerful attack.\n- If either player does not send a response by the time the night should end, they will automatically be dealt a Powerful attack at the end of the night.\n- If both players send the same exact response, a JINX is enacted, and both players will be blackmailed the following day.");

		e.addField("Attributes (cont.):", "- You may choose yourself to answer the prompt, and you will automatically win regardless of the results of the votes.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["solar_tomato", "solartomato", "tomato", "605"], "Plant", "Solar Tomato", {subCat: "Production"}, (e) =>
	{
		e.setDescription("Post 605\n*What an uncreative name.*");

		e.addField("Alignment", "Plant Production", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player. If you successfully stopped an action with this ability, generate two sun.\n- Grant a non-plant roleblock immunity, generating two sun.\n- Grant an ally plant permanent roleblock immunity. Costs 1 sun.\n- Roleblock one player for every time you've successfully stopped an action and for every time you've negated a roleblock. Costs 2 sun. (One use)");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["president", "606"], "Town", "President", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 606");

		e.addField("Alignment", "Town Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Pass a law forbidding an action.");

		e.addField("Attributes:", "- If a player suspects someone of breaking a law, they may report it to the host. If it is true, the suspect is modkilled. If it is false, the player loses reporting permissions.\n- The host has the right to bar ridiculously stupid and/or broken laws from being passed.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["lunar_telepath", "lunartelepath", "telepath", "607"], "Town", "Lunar Telepath", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 607\n*To become someone else, to share those experiences and thoughts—it's...quite unlike anything else.*");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to share your mind with.");

		e.addField("Attributes:", "- At night, linked players cannot talk in their own personal channel, but can talk in and control the other's channel.\n- Linked players have a whisper channel at night.\n- They gain their win goal as an alternate goal\n- They cannot die from the other linked player's faction's attacks.\n- If one player dies, the link is broken, and you may create a new link after waiting a night.");
		
		e.addField("Goal:", "Town goal (or current linked player's)");
	});

	register_role(["darth_sidious", "darthsidious", "sidious", "palpatine", "608"], "Sith", "Darth Sidious", {subCat: "Commanding"}, (e) =>
	{
		e.setDescription("Post 608");

		e.addField("Alignment", "Unique Sith Commanding", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Convert another player to a random Sith role. You only convert the roles if they are any of the following: Town/City, Neutral Benign, or Neutral Evils/Chaos with the witch wincon of seeing Town/City lose");

		e.addField("Attributes:", "- Once there are two Sith left, your defense drops to basic, and you may no longer convert.\n- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["darth_maul", "darthmaul", "maul", "609"], "Sith", "Darth Maul", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 609");

		e.addField("Alignment", "Sith Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Lie in wait at another player's house. You will attack the first registered visitor.");

		e.addField("Attributes:", "- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["darth_vader", "darthvader", "vader", "anakin_skywalker", "anakinskywalker", "anakin", "610"], "Sith", "Darth Vader", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 610");

		e.addField("Alignment", "Sith Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player. You will learn their role.");

		e.addField("Attributes:", "- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["hand_of_death", "handofdeath", "hand", "611"], "Neutral", "Hand Of Death", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 611\n*They were gonna die anyways, you know. It's just happening a bit faster.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pursue a player, attacking them if something else does first.\n- Alternatively choose to scry at night, revealing a random killer's identity and role to you.");

		e.addField("Attributes:", "- You will rampage at a player's house when attacking, killing those who visit your target except for the attacker.\n- If you try to pursue someone who has not been attacked, your visit fails.\n- You will learn the initial attacker's role upon successfully pursuing.");
		
		e.addField("Goal:", "Successfully pursue and attack 2 players");
	});

	register_role(["fucker-upper", "fuckerupper", "fucker", "612"], "Neutral", "Fucker-Upper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 612");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Fuck a player up each night. This ability has the lowest possible priority (i.e. the highest). Thus, any actions that player would perform or that would be done to them won't happen, since they're already dead.");

		e.addField("Attributes:", "- Night actions resolve in reverse order.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["bard", "613"], "Neutral", "Bard", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 613");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Put someone on the spotlight each day");

		e.addField("Attributes:", "- The following night, spotlighted players must make up a story of at least 3 paragraphs. The topic or contents don't matter so long as they don't break server rules or discord TOS, but it must be fictional.\n- The day after spotlighting a player, their work will be publicly revealed, though the author will not. People may vote whether to slay or spare the author. If they are chosen to be slayed, you will attack them immediately.");
		
		e.addField("Goal:", "Choose one of the following goals at the start of the game. This becomes your goal:\n> Have 3 spotlighted players be spared.\n> Have 3 spotlighted players be slain by your own hand.");
	});

	register_role(["jedi_knight", "jediknight", "jedi", "614", "614a"], "Town", "Jedi Knight", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 614");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Check to see if someone is a Sith.");

		e.addField("Attributes:", "- If you visit a Sith, you will attack them.\n- First town you visit will be your apprentice, and will change their role accordingly (Post 614.5).\n- If you are visited by a Sith, they will be attacked. If they are a Sith Commanding role, you will die as well.\n- Once all Sith are dead, You will either become a Vigilante (Post 67) with 5 bullets or your original town role if you were taken in by another Jedi Knight.\n- Guaranteed if a member of the Sith faction is rolled.\n- You have Invincible Defense against non-Sith-Commanding attackers.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["jedi_apprentice", "jediapprentice", "614.5", "614b"], "Town", "Jedi Apprentice", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 614.5");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Check to see if someone is a Sith.");

		e.addField("Attributes:", "- If you visit a Sith, you will attack them.\n- First town you visit will be your apprentice, and will change their role accordingly (Post 614.5).\n- If you are visited by a Sith, they will be attacked. If they are a Sith Commanding role, you will die as well.\n- Once all Sith Lords are dead, Your original town role will be given back to you. If your master dies, you will become a Jedi Knight (Post 614)\n- Cannot roll naturally.\n- You have Invincible Defense against non-Sith-Commanding attackers.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["higher_or_lower", "higherorlower", "hol", "615"], "Town", "Higher or Lower", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 615");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, choose a player. The next night, you will play the \"Higher or Lower\" game with their role.");

		e.addField("Attributes:", "- In the \"Higher or Lower\" game, you first name a number. The host will tell you whether that number is greater than, less than, or equal to your target's role's number. Repeat this process four more times.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["jormungandr", "jorm", "616"], "FallenAngel", "Jörmungandr", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 616");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Swallow someone each night. Their role and will will appear as \"Devoured\".");

		e.addField("Attributes:", "- If you swallow a Fallen Angel, you will have roleblock, redirection, conversion, and detection immunity while doing so, as well as total death immunity except for against other Fallen Angels, and other negative effects against you will be negated.\n- If you judge a non-Fallen Angel, you will learn their role and be able to read their will.\n**Sin of Gluttony** — If you're the last Fallen Angel remaining, you can choose a faction each night instead. You will swallow every member of that faction after (4 - X) days, where X is the number of dead Fallen Angels, and the Town will be informed that you are doing so.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["vital_late_game_townie", "vitallategametownie", "vital", "vlgt", "617"], "Town", "VITAL Late Game Townie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 617");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wait until the late game and then become vital.");

		e.addField("Attributes:", "- You start the game with no abilities.\m- Once only half the players remain, gain 3 town abilities of your choice. The abilities must be from different subalignments. You can not pick the same subalignment again, even if you are picking a new set of abilities.\n- You can only get 1 day ability per set of abilities.\n- Once you use all your abilities, gain a new set of abilities. You may not repeat abilities.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["excommunicator", "excom", "618"], "Town", "Excommunicator", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 618");

		e.addField("Alignment", "Town Assault", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone each night. You must disguise their cause of death as a killing role that could possibly appear in the current game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Under a Full Moon, your ability is Astral.\n- During Night 4, you will mimic the mechanics of your disguised cause of death.\n- You will appear to be 658: Invoker to all investigative effects.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["weredolphin", "wd", "619"], "Were", "WereDolphin", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 619");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Splash your target. You may do this on both a new moon and a full moon. You cannot do this on a Hunting Moon.\n- During a Full Moon, Deal a powerful attack to all splashed targets");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Splashing a target changes their investigative result to your investigation results\n- You cannot splash other weres");

		e.addField("Hunting Moon Enhancement: Marine Call", "Automatically kill all Splashed targets. In addition, deal a basic attack to their visitors.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["adrenaline_doctor", "adrenalinedoctor", "adrenaline", "620"], "Town", "Adrenaline", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 620\n*It's amazing what adrenaline does to the human body. Let's exploit it.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player a shot of adrenaline (3 use).");

		e.addField("Attributes:", "- If a player that you have given an adrenaline shot to would die at night, they will automatically inject themselves with their adrenaline shot. They will die the following night instead of the night they were killed. They will not be able to perform their night ability on the night they die. Their killer will be told that their defense was too strong to kill.\n- Players will not be notified that they have received an adrenaline shot, but they will be notified when they inject themselves with the shot.\n- You will automatically inject yourself if you are attacked.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["e621", "621"], "Neutral", "e621", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 621");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, make someone horny. They won't know it, but their direct neighbors will\\");

		e.addField("Attributes:", "- Horny players will occasionally miss their action due to... ...sus.\n- Members of the Were faction has a higher chance of missing.\n- You can only attack players that have horn.\n- Your ability will fail on Asmodeus (Post 359)\n\nMiss chances:\nregular:20%\nWeres:40%");
		
		e.addField("Goal:", "Be the last player standing");
	});

	register_role(["wm_ghost", "wmghost", "ghost", "622"], "Town", "WM Ghost", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 622*I've come for your pickle.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt somebody each night.");

		e.addField("Attributes:", "- You will know if your target is attacked, and your target will know if they were protected.\n- If your target is attacked, you will roleblock them and scare all of their visitors away.\n- Your visits are always Astral, unless you stay at your own house.\n- You may haunt your own house once.\n- You ignore Roleblock Immunity");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wm_marshal", "wmmarshal", "marshal", "623"], "Town", "WM Marshal", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 623\n*Woke army be like: drop and give me 20 pronouns.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player each night.");

		e.addField("Attributes:", "- When you follow a player, you will scare one visitor away.\n- You will only be informed if you scare a role who had killing intentions.\n- Your target will only be informed that they were protected if you scared a role who had killing intentions.\n- You may stay at your own house to scare a visitor away once.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tcg_player", "tcgplayer", "tcg", "624"], "Neutral", "TCG Player", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 624");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You draw a hand of 5 cards at the beginning of the game. After drawing your hand, you may choose to mulligan, drawing a new hand of 4 cards. You may repeat this process any number of times, drawing one less card each time.\n- Cards are random roles from the Grand Idea Mafia roles thread.\n- You draw an additional card at the beginning of each day.");

		e.addField("Attributes:", "- Each night, you may play a card as either a creature or a sorcery.\n- If you play it as a creature, create a new player with that role named whatever you want at the beginning of the next day. You control that player.\n- If you play it as a sorcery, use any number of its abilities and gain any number of its attributes that night, then it goes to the Graveyard.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tierlister_accent", "tierlisteraccent", "accent", "tierlister", "625"], "Neutral", "Tierlister Accent", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 625");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hunt for roles that accent has labeled as F-tier as of the day the game started");
		
		e.addField("Goal:", "Can only win as long as there's no F-tier role alive.");
	});

	register_role(["caroler_on_shrooms", "caroleronshrooms", "cos", "626"], "Neutral", "Caroler on Shrooms", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 626");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At any point after Night 5, you may sing a carol. When you start singing a carol, the Town will become a list of three players of your choice, which may include yourself, and all other players will be removed from the game entirely until you stop singing a carol. (You can't stop singing a carol unless you die, are removed from the game, or your abilities are otherwise turned off.)");

		e.addField("Attributes:", "- Before Night 5, you're Post 191: Caroler but you have Basic defense. (You'll know that you're actually on shrooms.)");
		
		e.addField("Goal:", "Successfully sing your carol.");
	});

	register_role(["bomb_maker", "bombmaker", "627"], "Neutral", "Bomb Maker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 627");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a bomb during the day and toss a bomb at someone during the night.");

		e.addField("Attributes:", "- During the day, you can make a bomb.\n- You will say an ingredient to put in your bomb, and the host will give you an effect based on your word.\n- After making a bomb, you may throw it at someone, dealing a powerful attack as well as doing whatever the ingredient adds to it.\n- If you do not make a bomb during the day, you will be given a Basic Bomb which has no effect (just a plain powerful attack).");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["doomsayer", "628"], "Neutral", "Doomsayer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 628");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Foretell a catastrophic event that will happen.");

		e.addField("Attributes:", "- At night, tell the host a catastrophe to foretell. You specify what happens in the catastrophe\n- The next day, the host will announce that a Doomsayer has announced a catastrophe.\n- The next night, the catastrophe happens, applying whatever effects you predicted. \n- During a catastrophe, you will hide in your bunker, giving you basic defense and making you immune to the effects of the catastrophe.\n- Limits to catastrophe:\n> Cannot kill more than 2 people.\n> Can not make anyone be unable to win/unable to lose.\n> Can only revive 2 people.\n> The targets of the catastrophe will always be random.");
		
		e.addField("Goal:", "Live to see 2 catastrophes take place.");
	});

	register_role(["chairman", "629"], "Town", "Chairman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 629\n*Hold on! You need to apply for a warrant before just murdering someone, geez.*");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hold a gathering, preventing all deaths from happening for the night.");

		e.addField("Attributes:", "- Attacked players will be put on special trial simultaneously at the beginning of the following day.\n- Players choose to vote or not vote on every player on trial. Votes are anonymous, however if a player is lynched, the factions of the players who voted are revealed (neutral killing/evil/benign/chaos are included)\n- The attack level determines how many votes a player needs to be lynched, regardless of defence level.\n> Basic, 1/2 of living players\n> Powerful, 1/4 of living players\n> Unstoppable, 1/8 of living players\n> Overkill, 1 vote\n- At the end of the day, if a player on special trial reaches the vote threshold, they are lynched.\n- A regular trial can still happen during the day and functions as normal\n- You may hold a gathering three times");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["conga_leader", "congaleader", "conga", "630"], "Mafia", "Conga Leader", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 630\n*Conga, conga, con-ga! Don't you just wanna join in?*");

		e.addField("Alignment", "Unique Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Add a player to the end of your Conga Line.");

		e.addField("Attributes:", "- You start as the first person in the Conga Line.\n- Any investigative abilities used on any members of the Conga Line will instead inform what position of the Conga Line that member is.\n- When a member of the Conga Line dies, their role will appear as the first member of the Conga Line, and with each death it’ll go down the list.\n- If members of the Conga Line try to use abilities on you, they will secretly fail.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["eyisa", "goddess_of_winter", "goddessofwinter", "egow", "gow", "631"], "Everfrost", "Eyisa, Goddess of Winter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 631");

		e.addField("Alignment", "Unique Everfrost Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Call upon the divine cold each night, giving an Everfrost player Basic defense and making them Astral and redirect immune. Their ability that night will have the highest possible priority and, if it's a roleblock, will roleblock players through immunities and any other effects that would prevent it.\n**Winter's Judgment** — Roleblock up to one player, then coldsnap. (*Coldsnapping causes all roleblocked players to be dealt an Astral Basic attack immediately.*) You may only use this ability once each game.");

		e.addField("Attributes:", "- Whenever a player is roleblocked by anything while you're alive, they'll be notified that they're covered in frost. If they're not visited by at least two other non-Everfrost players the next night, they're dealt an Astral Basic attack by you at the end of that night. This effect cannot be prevented by anything. If you die, this will only apply to the Everfrost's factional roleblock.\n- You have a veil of ice that makes you appear to be a Town role of your choice to all investigative effects of any kind. You may change the role you appear as at any time.");

		e.addField("Immunities:", "- Roleblock, Redirect, Detection, Conversion");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["glacier", "632"], "Everfrost", "Glacier", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 632");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze a player each night, doubling the length that they're being roleblocked if they're being roleblocked.\n**Arctic Cold** — Roleblock up to two players who were roleblocked last night at random, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything except an Everfrost attribute, they're roleblocked for an additional night afterwards as well.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["verglas", "633"], "Everfrost", "Verglas", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 633");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess a player's role each night, and if you're correct, roleblock them.\n**Icy Verdict** — Roleblock up to two players whose roles you've guessed correctly, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, you learn their name and role.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["rime", "634"], "Everfrost", "Rime", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 634");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player with an Ice Mark each night and name a number X. They permanently lose their Xth ability. If they don't have X abilities, they don't lose anything and you'll be notified.\n**Frozen Form** — Use any number of abilities that you've caused players to lose. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["permafrost", "635"], "Everfrost", "Permafrost", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 635");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. If they've been roleblocked at any point previously, roleblock them.\n**Ice Age** — Freeze a player, causing them to be roleblocked every night for the rest of the game. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Non-Everfrost players who are roleblock immune aren't. Non-Everfrost players can't be roleblock immune.\n- Roleblocked players can't use day abilities the day after they're roleblocked.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["chill", "636"], "Everfrost", "Chill", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 636");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Chill up to two players each night, visiting them but doing nothing. You may choose the same player as both targets.\n**Glacial Dawn** — Set up to two players' defences to Vulnerable. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, their defence is lowered by a stage the following night.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["absolute_zero", "absolutezero", "zero", "637"], "Everfrost", "Absolute Zero", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 637");

		e.addField("Alignment", "Unique Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player with an Ice Mark each night. They permanently lose all Defense and can't have Defense for the rest of the game.\n**Utter End** — The Everfrost wins the game and all non-Everfrost players lose the game. You may only use this ability if more than half of all living non-Everfrost players have Ice Marks and you've removed their vote.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["monkeeeee", "monke", "638"], "Neutral", "MONKEEEEE", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 638");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Assert Bigger Number Better™️ during the day. 2 Uses.\n- Check a player to find if they have a smaller number than you");

		e.addField("Attributes:", "- When you assert Bigger Number Better™️, the following night, any attacks dealt to a person from a role with a bigger Role # than them will automatically succeed, regardless of whether the killer doesn't have the required attack, is roleblocked, or otherwise hindered.\n- You will attack players you check who have a lower Role # than you.");
		
		e.addField("Goal:", "Assure that all players alive have Role #s over x/2, where x is the number of roles introduced so far. This does not include yourself.");
	});

	register_role(["judicator", "639"], "Town", "Judicator", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 639\n*Well, I'm off to commit several crimes against humanity. Au revior!*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player during the day to force them to transcend humanity tonight. (3 use)");

		e.addField("Attributes:", "- A player that transcends humanity is entitled to all of the following effects:\n> - Abilities that resolve at the beginning of the night (e.g. Jailor, Pirate) will fail.\n> - Anything that should happen to them tonight will not - all kills will fail, all visits will fail, all abilities will fail. This cannot be overridden.\n> - The first time a player transcends humanity, all negative effects on them will be purged (e.g. ice marks, douses, hexes).\n> - They will gain all immunities while transcending.\n- You may not force yourself to transcend humanity.");
		
		e.addField("Goal:", "~~Transcend humanity.~~ " + factions.Town.goal);
	});

	register_role(["snowdrift", "640"], "Everfrost", "Snowdrift", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 640");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose one:\n> - Redirect a player with an Ice Mark to another player with an Ice Mark.\n> - Cause all visits against a player with an Ice Mark to fail.\n> - Transport two players with Ice Marks. (Players visiting one instead visit the other, and vice versa.)\n- You may only choose each mode up to twice.\n**White Blanket** — Cause all non-Everfrost players' night abilities to not resolve tonight. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name and all night messages they would have received had they not been roleblocked.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["commuter", "641"], "Town", "Commuter", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 641");

		e.addField("Alignment", "Unique Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transcend humanity during the day.");

		e.addField("Attributes:", "- All Immunities while Transcending\n- Beginning of the night abilites (such as being jailed by the Jailor, pirated by a Pirate, etc.) will fail if they are targeting you.\n- While you are transcending humanity, everything that should happen to you will not. All attacks will fail, all visits will fail, all abilities will fail. This ability is absolute.\n- At the end of the night, you will recieve a list of everyone who had an ability fail against you. You will also not recieve any notifications that you should've.\n- Transcending humanity will also purge negative effects such as Ice Marks, douses, hexes, etc the first time you do so.\n- You may transcend humanity three times.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["avalanche", "642"], "Everfrost", "Avalanche", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 642");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. If they were roleblocked last night by your attribute, roleblock them again.\n**Boreal Wrath** — Roleblock the player below you in the player list, and the player below that player, then coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything other than an Everfrost attribute, the player directly beneath them in the player list (including dead players) is roleblocked as well.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["quack", "643"], "Town", "Quack", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 643");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock a player. If they were using a single-target ability, copy one charge of it for yourself.");

		e.addField("Attributes:", "- You won't know the ability you copied, though you will receive feedback.\n- If the ability requires attributes to function, you will unknowingly give yourself those attributes on the night you use the ability.\n- Can only use one ability per night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["robespierre", "robes", "644"], "Neutral", "Robespierre", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 644");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Variable\n- Attack someone every night after getting this rolecard.");

		e.addField("Attributes:", "- You will be given the rolecard of a random town role instead of this, along with the respective abilities and attributes. This role must be able to vote.\n- At the end of the day, whoever you vote will be lynched, regardless of whether they had the required votes. It will be publicly revealed this is because of Robespierre if they did not have majority, however it will not be revealed who Robespierre is.\n- After you successfully lynch 2 people, you will be given the Robespierre rolecard, and get the respective attack ability. Your original Town role abilities & voting abilities will remain, and you may use your abilities in conjunction with your attacks.\n- You are immune to guilt mechanics or otherwise limiting mechanics upon killing or negatively affect a Townie, if your rolecard gives you such repercussions.\n\n- If attempted to be rerolled by Wolfi, give them another town rolecard, but otherwise keep them as Robespierre.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sleet", "645"], "Everfrost", "Sleet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 645");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player with an Ice Mark each night. You receive all night feedback messages they would that night, and they don't and instead learn that their senses were obscured by sleet.\n**River of Snow** — Roleblock up to one player whose night feedback messages you received last night, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.\n- You hear all whispers sent to and by players with Ice Marks. ");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["blizzard", "646"], "Everfrost", "Blizzard", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 646");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night and roleblock that player's night target(s).\n**Ravaging Storm** — Choose up to two players. If both of them would visit tonight, roleblock both of them. Then, coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything other than an Everfrost attribute, non-Everfrost players who target them that night will be roleblocked as well.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["demolitionist", "demo", "647"], "Neutral", "Demolitionist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 647");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Destroy a house.\n- Hide in the rubble.");

		e.addField("Attributes:", "- Whenever you kill someone, their house will become rubble. The next night, nobody can pass the destroyed house (it is assumed all players are in a line, going from 1 to the last player. If house 5 is destroyed, then player 4 cannot visit player 6.)\n- The rubble is cleaned up after 1 day.\n- Whenever there is rubble, you can hide in the rubble, giving you Powerful defense for the night, and giving you favorable results for all Investigative abilities.\n- The first time you are lynched, you do not die.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["idealist", "648"], "Mafia", "Idealist", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 648*I like to think the glass is always half fu-- IS THE GLASS FULL OF PISS?*");

		e.addField("Alignment", "Mafia Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to idealize the Mafia the following night during the day (2 use).");

		e.addField("Attributes:", "- At the start of the following night, the Mafia will be informed that the Idealist will create an ideal vision for them tonight.\n- When you create an ideal vision for the Mafia, all members of the Mafia will be able to choose a role in the GIM thread to appear as. This will cause any and all investigative abilities to perceive the Mafia members as the role that they chose.\n- If an idealized Mafia member dies on the night they were idealized, or if they are lynched the day after, they will appear to be the role they were idealized as in the graveyard.\n- If a Mafia member does not choose a role to idealize, they will be perceived as a random role based on their subalignment (Mafia Support/Espionage = random Town Support role, Mafia Deception = random Town Investigative role, Mafia Head/Killing = random Town Killing role, any other Mafia alignment = random Town role). They will be notified what role they were idealized as.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["hail", "649"], "Everfrost", "Hail", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 649");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. If they would die tonight, their role and will will be hidden from the town and shown as \"Frozen\".\n**Blaze of Frost** — Roleblock a non-Everfrost player at random, then do that again, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Each night, a random non-Everfrost the player who isn't the target of the Everfrost's factional roleblock will be roleblocked.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["snow_globe", "snowglobe", "sg", "650"], "Everfrost", "Snow Globe", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 650");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player not covered in frost. Roleblock all their visitors.\n**Super Snowy Sphere** - Roleblock a player. Super Freeze them and all of their non-Everfrost visitors. A player who has been Super Frozen requires 3 non-Everfrost players to visit them to be bale to survive. Roleblock immune roles can be Super Frozen. This is not usable until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune.\nWhile this is alive, players covered in frost are not able to help defrost other players.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});
};
