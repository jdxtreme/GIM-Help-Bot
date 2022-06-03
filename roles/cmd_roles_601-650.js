module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["i_am_inside_your_home", "inside", "601"], "Neutral", "I Am Inside Your Home", (e) =>
	{
		e.setDescription("Post 601");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fucking shank a player during the night, dealing an Astral Basic Attack to them");

		e.addField("Attributes:", "- You have access to all private channels, evil faction chats, and jailor/wisteria-like chats.\n- During Day 1, everyone else may vote to give you a win condition, propositions chosen by players themselves (1 proposition each). If nobody can reach a clear plurality, you get to decide for yourself.");
		
		e.addField("Goal:", "Win with the goal given to you");
	});

	register_role(["undercover_agent", "undercoveragent", "undercover", "602"], "Town", "Undercover Agent", (e) =>
	{
		e.setDescription("Post 602");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 2 uses: Mimic the effect of any role of the faction that you're disguised as.\n- 1 use: In the following day, you will be allowed to speak in the day chat. Can only be used if your first ability is out of uses.");

		e.addField("Attributes:", "- At the beginning of the game, you will disguise yourself as a member of the largest evil faction.\n- By default, you may speak in the chat of the faction you are disguised as, but you cannot whisper or speak in the day chat.\n- If you kill or lynch a member of the faction you're disguised as, every other member will be notified that you're an Undercover Agent.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["flexible_role", "flexiblerole", "flexible", "603"], "Neutral", "Flexible Role", (e) =>
	{
		e.setDescription("Post 603");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose your abilities to bring about the end of the town.");

		e.addField("Attributes:", "- You can kill a player at night, dealing a powerful attack\n- During the role distribution phase, choose 2 extra abilities. If the host decides your abilities are fine, you have both of them along with your attack.\n- You can only use 1 ability per night\n- All of your abilities have a 1 night cooldown.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["quipper", "604"], "Neutral", "Quipper", (e) =>
	{
		e.setDescription("Post 604");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two players to force to answer a Quiplash prompt during the day.");

		e.addField("Attributes:", "- The two players you chose will be given a Quiplash prompt at the start of the following night that they must respond to. You may choose yourself as one of the two players.\n- Immediately after both players have responded to the prompt, the prompt and answers will be shown to everyone in the server in a different channel. The answers will not indicate who sent them in. All of the players in the game (apart from the two players that answered the prompt) will be able to vote on which response they like more through their private channels. The player that receives fewer votes will be dealt a Powerful attack.\n- If there is a tie, both players will be dealt a Powerful attack.\n- If either player does not send a response by the time the night should end, they will automatically be dealt a Powerful attack at the end of the night.\n- If both players send the same exact response, a JINX is enacted, and both players will be blackmailed the following day.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["muffin_baker", "muffinbaker", "muffin", "605"], "Town", "Muffin Baker", (e) =>
	{
		e.setDescription("Post 605");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bake one muffin during the night.\n- Give one of your muffins to a player during the night.");

		e.addField("Attributes:", "- Muffins take a day to bake.\n- Giving a muffin to a player gives them a one-use day ability which deals a basic attack to a target of their choice.\n- You can't self target and you can only use one ability per night.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["i_won", "iwon", "won", "606"], "Neutral", "I Won!", (e) =>
	{
		e.setDescription("Post 606");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the day, change someone's goal into something that you want. Takes effect at the start of the night.");

		e.addField("Attributes:", "- You may not pick yourself.\n- (choose like framer but during day)");
		
		e.addField("Goal:", "Have at least one of your changed players win with their new goal.");
	});

	register_role(["lunar_telepath", "lunartelepath", "telepath", "607"], "Town", "Lunar Telepath", (e) =>
	{
		e.setDescription("Post 607");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to share your mind with.");

		e.addField("Attributes:", "- At night, linked players cannot talk in their own personal channel, but can talk in and control the other's channel.\n- Linked players have a whisper channel at night.\n- You gain their win goal as an alternate goal\n- You cannot die from their faction's attacks.\n- If one player dies, the link is broken, and you may create a new link after waiting a night.");
		
		e.addField("Goal:", "Town goal (or current linked player's)");
	});

	register_role(["palpatine", "palp", "608"], "Sith", "Palpatine", (e) =>
	{
		e.setDescription("Post 608");

		e.addField("Alignment", "Sith Master", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "- \"The Senate\" (Unlynchable)", true);

		e.addField("Abilities:", "- Convert to the Dark Side: Converts the role to a Sith (Apprentice) role of the target's choosing. There can only be two Sith roles alive at a time. You cannot convert roles with role chats\n- Unlimited Power: Go in for the factional kill. Your attack will be unstoppable, but your defense will drop to none since you are now exposed as a Sith, Lord? One charge");

		e.addField("Attributes:", "- Can perform the factional Sith kill (Basic)\n- Has private chat with the other Sith.\n- If he dies, the current Sith (Apprentice) will become the new Palpatine.");
		
		e.addField("Goal:", "Eliminate those that do not join to the Dark Side");
	});

	register_role(["maul", "609"], "Sith", "Maul", (e) =>
	{
		e.setDescription("Post 609");

		e.addField("Alignment", "Sith Apprentice", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Double bladed Lightsaber: You can perform two kills at night.");

		e.addField("Attributes:", "- DBL is the Factional kill.\n- Sith Chat\n- Becomes Palpatine if Palpatine dies");
		
		e.addField("Goal:", "Eliminate those that do not join to the Dark Side");
	});

	register_role(["vader", "610"], "Sith", "Vader", (e) =>
	{
		e.setDescription("Post 610");

		e.addField("Alignment", "Sith Apprentice", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force Avatar: Your version of the factional kill");

		e.addField("Attributes:", "- FA is the Factional kill.\n- Sith Chat\n- Becomes Palpatine if Palpatine dies");
		
		e.addField("Goal:", "Eliminate those that do not join to the Dark Side");
	});

	register_role(["hand_of_death", "handofdeath", "hand", "611"], "Neutral", "Hand Of Death", (e) =>
	{
		e.setDescription("Post 611");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pursue a player, attacking them if something else does first.\n- Alternatively choose to scry at night, revealing a random killer's identity and role to you.");

		e.addField("Attributes:", "- You will rampage at a player's house when attacking, killing those who visit your target except for the attacker.\n- If you try to pursue someone who has not been attacked, your visit fails.\n- You will learn the initial attacker's role upon successfully pursuing.");
		
		e.addField("Goal:", "Successfully pursue and attack 2 players");
	});

	register_role(["fucker-upper", "fuckerupper", "fucker", "612"], "Neutral", "Fucker-Upper", (e) =>
	{
		e.setDescription("Post 612");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Fuck a player up each night. This ability has the lowest possible priority (i.e. the highest). Thus, any actions that player would perform or that would be done to them won't happen, since they're already dead.");

		e.addField("Attributes:", "- Night actions resolve in reverse order. (Those with lowest priority happen first, etc.)");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["bard", "613"], "Neutral", "Bard", (e) =>
	{
		e.setDescription("Post 613");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Put someone on the spotlight each day");

		e.addField("Attributes:", "- The following night, spotlighted players must make up a story of at least 3 paragraphs. The topic or contents don't matter so long as they don't break server rules or discord TOS, but it must be fictional.\n- The day after spotlighting a player, their work will be publicly revealed, though the author will not. People may vote whether to slay or spare the author. If they are chosen to be slayed, you will attack them immediately.");
		
		e.addField("Goal:", "Choose one of the following goals at the start of the game. This becomes your goal:\n> Have 3 spotlighted players be spared.\n> Have 3 spotlighted players be slain by your own hand.");
	});

	register_role(["jedi_master", "jedimaster", "jedi", "614", "614a"], "Town", "Jedi Master", (e) =>
	{
		e.setDescription("Post 614");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "\"Justice\" (Bypasses the Senate)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check to see if someone is a Sith, Lord?");

		e.addField("Attributes:", "- If your target is indeed a Sith, Lord? You will kill them on the spot. If you are attacked by a Sith, Lord, you will kill them on the spot and survive, unless you are attacked by Palpatine, in which case, you also die.\n- First town you visit will be your apprentice, and will change their role accordingly (Post 614.5).\n- Once all Sith Lords are dead, You become a Vigilante (Post 67) with 7 bullets or your original town role if you were taken in by another Jedi Master or not as an apprentice.\n- Guaranteed if a member of the Sith faction is rolled");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["jedi_apprentice", "jediapprentice", "614.5", "614b"], "Town", "Jedi Master", (e) =>
	{
		e.setDescription("Post 614.5");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "\"Justice\" (Bypasses the Senate)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check to see if someone is a Sith, Lord?");

		e.addField("Attributes:", "- If your target is indeed a Sith, Lord? You will kill them on the spot. If you are attacked by a Sith, Lord, you will kill them on the spot and survive, unless you are attacked by Palpatine, in which case, you also die.\nIf you visit Palpatine, you will die instead, but your master will be notified.\nOnce all Sith Lords are dead, Your original town role will be given back to you. If your master dies, you will become a Jedi Master (Post 614)\nCannot roll naturally.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["higher_or_lower", "higherorlower", "hol", "615"], "Town", "Higher or Lower", (e) =>
	{
		e.setDescription("Post 615");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, choose a player. The next night, you will play the \"Higher or Lower\" game with their role.");

		e.addField("Attributes:", "- In the \"Higher or Lower\" game, you first name a number. The host will tell you whether that number is greater than, less than, or equal to your target's role's number. Repeat this process four more times.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["cold-water_snapper", "coldwatersnapper", "snapper", "616"], "Neutral", "Cold-Water Snapper", (e) =>
	{
		e.setDescription("Post 616");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill a player each night. (People die when they are killed.)");

		e.addField("Attributes:", "- Hexproof. (You can't be the target of abilities, votes, whispers, or anything else.)\n- You must attack each night.\n- This role can only role if there are at least two other roles that could kill it without targetting it.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["vital_late_game_townie", "vitallategametownie", "vital", "vlgt", "617"], "Town", "VITAL Late Game Townie", (e) =>
	{
		e.setDescription("Post 617");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Varies", true);

		e.addField("Abilities:", "- Wait until the late game and then become vital.");

		e.addField("Attributes:", "- You start the game with no abilities.\n- At the start of the game, get a random Town (Protective) role. This role will be assumed to be on you every night until the first time you would die from an attack.\n- Once only half the players remain, gain 1 ability charge from 1 random role of each town subalignment.\n- You cannot get abilities that harm you.\n- Once you use all your abilities, gain a new set of abilities.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["vote-rigger", "voterigger", "rigger", "618"], "Mafia", "Vote-Rigger", (e) =>
	{
		e.setDescription("Post 618");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. The next day, you control their votes, and they can change their vote up to four times that day.");

		e.addField("Attributes:", "- Votes remain when they're changed. Non-Mafia players can't change their votes more than twice each day, and Mafia players can't change their votes more than four times each day.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["weredolphin", "619"], "Were", "WereDolphin", (e) =>
	{
		e.setDescription("Post 619");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- May mark half of all alive players every 3 days, starting day 1\n- May kill up to 3 Marked players every day starting day 3");

		e.addField("Attributes:", "- Dies at the end of night 5 from no water\n- Detection Immune\n- Consig/PM/CL see as WereLion\n- Chat with other weres");
		
		e.addField("Goal:", "Were Goal");
	});

	register_role(["adrenaline_doctor", "adrenalinedoctor", "adrenaline", "620"], "Town", "Adrenaline", (e) =>
	{
		e.setDescription("Post 620");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player a shot of adrenaline to each night.");

		e.addField("Attributes:", "- If a player that you have ever given an adrenaline shot to is attacked, they will automatically inject themselves with their adrenaline shot. They will die the following night instead of the night they were attacked.\n- You may give an adrenaline shot to three players.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["e621", "621"], "Neutral", "e621", (e) =>
	{
		e.setDescription("Post 621");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, make someone horny. They won't know it, but their direct neighbors will.");

		e.addField("Attributes:", "- Horny players will occasionally miss their action due to... ...sus.\n- Members of the Were faction has a higher chance of missing.\n- You can only attack players that have horn.");
		
		e.addField("Goal:", "Be the last player standing");
	});

	register_role(["wm_ghost", "wmghost", "ghost", "622"], "Town", "WM Ghost", (e) =>
	{
		e.setDescription("Post 622");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt somebody each night.");

		e.addField("Attributes:", "- You will know if your target is attacked, and your target will know if they were protected.\n- If your target is attacked, you will roleblock them and scare all of their visitors away.\n- Your visits are always Astral, unless you stay at your own house.\n- You may haunt your own house once.\n- You ignore Roleblock Immunity");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["wm_marshall", "wmmarshall", "marshall", "623"], "Town", "WM Marshall", (e) =>
	{
		e.setDescription("Post 623");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player each night.");

		e.addField("Attributes:", "- When you follow a player, you will scare one visitor away.\n- You will only be informed if you scare a role who had killing intentions.\n- Your target will only be informed that they were protected if you scared a role who had killing intentions.\n- You may stay at your own house to scare a visitor away once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["tcg_player", "tcgplayer", "tcg", "624"], "Neutral", "TCG Player", (e) =>
	{
		e.setDescription("Post 624");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You draw a hand of 5 cards at the beginning of the game, and an additional 1 card at the beginning of each day.\n- Cards are random roles from the Grand Idea Mafia roles thread.");

		e.addField("Attributes:", "- Each night, you may play a card as either a creature or a sorcery. (This uses up the card.)\n- If you play it as a creature, create a new player with that role named whatever you want at the beginning of the next day. You control that player.\n- If you play it as a sorcery, use any number of its abilities and gain any number of its attributes that night, then it goes to the Graveyard.");
		
		e.addField("Goal:", "Eliminate all who would oppose you.");
	});

	register_role(["tierlister_accent", "tierlisteraccent", "accent", "tierlister", "625"], "Neutral", "Tierlister Accent", (e) =>
	{
		e.setDescription("Post 625");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hunt for roles that accent has labeled as F-tier as of the day the game started");
		
		e.addField("Goal:", "Can only win as long as there's no F-tier role alive.");
	});

	register_role(["caroler_on_shrooms", "caroleronshrooms", "cos", "626"], "Neutral", "Caroler on Shrooms", (e) =>
	{
		e.setDescription("Post 626");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At any point after Night 5, you may sing a carol. When you start singing a carol, the Town will become a list of three players of your choice, and all other players will be removed from the game entirely until you stop singing a carol. (You can't stop singing a carol unless you die, are removed from the game, or your abilities are otherwise turned off.)");

		e.addField("Attributes:", "- Before Night 5, you're Post 191: Caroler but you have Basic Defense. (You'll know that you're actually on shrooms.)");
		
		e.addField("Goal:", "Successfully sing your carol.");
	});

	register_role(["bomb_maker", "bombmaker", "627"], "Neutral", "Bomb Maker", (e) =>
	{
		e.setDescription("Post 627");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a bomb to toss at someone.");

		e.addField("Attributes:", "- At night, you can make a bomb.\n- You will say an ingredient to put in your bomb, and the host will give you an effect based on your word. \n- Making a bomb takes 1 night.\n- After making a bomb, you may throw it at someone, dealing a powerful attack as well as doing whatever the ingredient adds to it.\n- You may only have 1 bomb at a time.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["doomsayer", "628"], "Neutral", "Doomsayer", (e) =>
	{
		e.setDescription("Post 628");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Foretell a catastrophic event that will happen.");

		e.addField("Attributes:", "- At night, tell the host a catastrophe to foretell. You specify what happens in the catastrophe\n- The next day, the host will announce that a Doomsayer has announced a catastrophe.\n- The next night, the catastrophe happens, applying whatever effects you predicted. \n- During a catastrophe, you will hide in your bunker, giving you basic defense and making you immune to the effects of the catastrophe.\n- Limits to catastrophe:\n> Cannot kill more than 2 people.\n> Can not make anyone be unable to win/unable to lose.\n> Can only revive 2 people.\n> The targets of the catastrophe will always be random.");
		
		e.addField("Goal:", "Live to see 2 catastrophes take place.");
	});

	register_role(["chairman", "629"], "Town", "Chairman", (e) =>
	{
		e.setDescription("Post 629");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hold a gathering, preventing all deaths from happening for the night.");

		e.addField("Attributes:", "- Attacked players will be put on special trial simultaneously at the beginning of the following day.\n- Players choose to vote or not vote on every player on trial. Votes are anonymous, however if a player is lynched, the factions of the players who voted are revealed (neutral killing/evil/benign/chaos are included)\n- The attack level determines how many votes a player needs to be lynched, regardless of defence level.\n> Basic, 1/2 of living players\n> Powerful, 1/4 of living players\n> Unstoppable, 1/8 of living players\n> Overkill, 1 vote\n- At the end of the day, if a player on special trial reaches the vote threshold, they are lynched.\n- A regular trial can still happen during the day and functions as normal\n- You may hold a gathering three times");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["conga_leader", "congaleader", "conga", "630"], "Mafia", "Conga Leader", (e) =>
	{
		e.setDescription("Post 630");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Add a player to the end of your Conga Line.");

		e.addField("Attributes:", "- You start as the first person in the Conga Line.\n- Any investigative abilities used on any members of the Conga Line will instead inform what position of the Conga Line that member is.\n- When a member of the Conga Line dies, their role will appear as the first member of the Conga Line, and with each death it’ll go down the list.\n- If members of the Conga Line try to use abilities on you, they will secretly fail.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["eyisa", "goddess_of_winter", "goddessofwinter", "egow", "gow", "631"], "Everfrost", "Eyisa, Goddess of Winter", (e) =>
	{
		e.setDescription("Post 631");

		e.addField("Alignment", "Unique Everfrost Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Call upon the divine cold at night, giving an Everfrost player Basic defense and making them Astral and redirect immune.\n**Winter's Judgment** — Roleblock up to three players, then coldsnap. (Coldsnapping causes all roleblocked players to be dealt an Astral Basic attack immediately if Eyisa is alive.) You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock, Redirect, and Detection Immune\n- This role will appear as long as any other Everfrost role does.\n- Town roles that roleblock players can't be rolled as long as the Everfrost does.\n- At the beginning of Day 1, players will be notified that the eternal winter is coming.\n- Instead of a factional kill, the Everfrost has a factional roleblock each night that any member may spend the night to perform. (This applies even if Eyisa is dead.)\n- Whenever a player is roleblocked by anything while you're alive, they'll be notified that they're covered in frost. If they're not visited by at least two other non-Everfrost players the next night, they're dealt an Astral Basic attack by you at the end of that night. This effect cannot be prevented by anything.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["glacier", "632"], "Everfrost", "Glacier", (e) =>
	{
		e.setDescription("Post 632");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze a player each night, doubling the length that they're being roleblocked if they're being roleblocked.\n**Arctic Cold** — Roleblock all players who were roleblocked in the last two nights, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything except this attribute, they're roleblocked for an additional night afterwards as well.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["verglas", "633"], "Everfrost", "Verglas", (e) =>
	{
		e.setDescription("Post 633");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess a player's role, and if you're correct, roleblock them.\n**Icy Verdict** — Roleblock any number of players whose roles you've guessed correctly, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, you learn their name and role.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["rime", "634"], "Everfrost", "Rime", (e) =>
	{
		e.setDescription("Post 634");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player with an Ice Mark and name a number X. They permanently lose their Xth ability. If they don't have X abilities, they don't lose anything and you'll be notified.\n**Frozen Form** — Use any number of abilities that you've caused players to lose. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["permafrost", "635"], "Everfrost", "Permafrost", (e) =>
	{
		e.setDescription("Post 635");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. If they've been roleblocked at any point previously, roleblock them.\n**Ice Age** — Freeze all players who are currently roleblocked, causing them to be roleblocked every night for the rest of the game. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Non-Everfrost players who are roleblock immune aren't. Non-Everfrost players can't be roleblock immune.\n- Roleblocked players can't use day abilities the day after they're roleblocked.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["chill", "636"], "Everfrost", "Chill", (e) =>
	{
		e.setDescription("Post 636");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night. At the beginning of the next day, if they don't have any attributes, they gain the attribute \"You can't use abilities, talk, whisper, or vote.\"\n**Glacial Dawn** — Cause all non-Everfrost players to lose all attributes for the rest of the night and the following day. Then, coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they temporarily lose all attributes for the rest of that night and the following day.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["absolute_zero", "absolutezero", "zero", "637"], "Everfrost", "Absolute Zero", (e) =>
	{
		e.setDescription("Post 637");

		e.addField("Alignment", "Unique Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player with an Ice Mark. They permanently lose all Defense and can't have Defense for the rest of the game.\n**Utter End** — The Everfrost wins the game and all non-Everfrost players lose the game. You may only use this ability if more than half of all living non-Everfrost players have Ice Marks and you've removed their Defense.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["monkeeeee", "monke", "638"], "Neutral", "MONKEEEEE", (e) =>
	{
		e.setDescription("Post 638");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Assert Bigger Number Better™️ during the day. 2 Uses.\n- Check a player to find if they have a smaller number than you");

		e.addField("Attributes:", "- When you assert Bigger Number Better™️, the following night, any attacks dealt to a person from a role with a bigger Role # than them will automatically succeed, regardless of whether the killer doesn't have the required attack, is roleblocked, or otherwise hindered.\n- You will attack players you check who have a lower Role # than you.");
		
		e.addField("Goal:", "Assure that all players alive have Role #s over x/2, where x is the number of roles introduced so far. This does not include yourself.");
	});

	register_role(["judicator", "639"], "Town", "Judicator", (e) =>
	{
		e.setDescription("Post 639");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force one player to transcend humanity each night.");

		e.addField("Attributes:", "- A player who transcends humanity will be completely immune to anything else that happens to them that night.\n- You may only commute three players.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["snowdrift", "640"], "Everfrost", "Snowdrift", (e) =>
	{
		e.setDescription("Post 640");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose one:\n> - Redirect a player with an Ice Mark to another player with an Ice Mark.\n> - Cause all visits against a player with an Ice Mark to fail.\n> - Transport two players with Ice Marks. (Players visiting one instead visit the other, and vice versa.)\n- You may only choose each mode up to twice.\n**White Blanket** — Non-Everfrost players' night abilities don't resolve tonight. Then, coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark and you learn their name and all night messages they would have received had they not been roleblocked.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["commuter", "641"], "Town", "Commuter", (e) =>
	{
		e.setDescription("Post 641");

		e.addField("Alignment", "Unique Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transcend humanity during the day.");

		e.addField("Attributes:", "- Beginning of the night abilites (such as being jailed by the Jailor, pirated by a Pirate, etc.) are immediately canceled.\n- While you are transcending humanity, everything that should happen to you will not. All attacks will fail, all visits will fail, all abilities will fail. This cannot be overidden.\n- At the end of the night, you will recieve a list of everyone who had an ability fail against you. You will also not recieve any notifications that you should've.\n- Commuting will also purge negative effects such as Ice Marks, douses, hexes, etc the first time you do so.\n- All Immunities while Transcending\n- You may commute three times.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["avalanche", "642"], "Everfrost", "Avalanche", (e) =>
	{
		e.setDescription("Post 642");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player. If they were roleblocked last night by your attribute, roleblock them.\n**Boreal Wrath** — Roleblock a player, and their neighbours, and their neighbours' neighbours, then coldsnap. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything other than this attribute, the two players directly next to them in the player list (including dead players) are roleblocked as well.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["quack", "643"], "Town", "Quack", (e) =>
	{
		e.setDescription("Post 643");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock a player. If they were using a single-target ability, copy one charge of it for yourself.");

		e.addField("Attributes:", "- You won't know the ability you copied, though you will receive feedback.\n- If the ability requires attributes to function, you will unknowingly give yourself those attributes on the night you use the ability.\n- Can only use one ability per night.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["robespierre", "robes", "644"], "Neutral", "Robespierre", (e) =>
	{
		e.setDescription("Post 644");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Variable\n- Attack someone every night after getting this rolecard.");

		e.addField("Attributes:", "- You will be given the rolecard of a random town role instead of this, along with the respective abilities and attributes. This role must be able to vote.\n- At the end of the day, whoever you vote will be lynched, regardless of whether they had the required votes. It will be publicly revealed this is because of Robespierre if they did not have majority, however it will not be revealed who Robespierre is.\n- After you successfully lynch 2 people, you will be given the Robespierre rolecard, and get the respective attack ability. Your original Town role abilities & voting abilities will remain, and you may use your abilities in conjunction with your attacks.\n- You are immune to guilt mechanics or otherwise limiting mechanics upon killing or negatively affect a Townie, if your rolecard gives you such repercussions.\n\n- If attempted to be rerolled by Wolfi, give them another town rolecard, but otherwise keep them as Robespierre.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["sleet", "645"], "Everfrost", "Sleet", (e) =>
	{
		e.setDescription("Post 645");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player with an Ice Mark. You receive all night feedback messages they would that night, and they don't and instead learn that their senses were obscured by sleet.\n**River of Snow** — Roleblock all players whose whispers you heard yesterday or whose night feedback messages you received last night, then coldsnap. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.\n- You hear all whispers sent to and by players with Ice Marks.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["blizzard", "646"], "Everfrost", "Blizzard", (e) =>
	{
		e.setDescription("Post 646");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player and roleblock that player's night target(s).\n**Ravaging Storm** — Roleblock all players who have night targets tonight, then coldsnap. You may only use this ability once per game and you can't use it until Night 3.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything other than this attribute, non-Everfrost players who target them that night will be roleblocked as well.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["demolitionist", "demo", "647"], "Neutral", "Demolitionist", (e) =>
	{
		e.setDescription("Post 647");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Destroy a house and witness the rubble you leave behind.");

		e.addField("Attributes:", "- Whenever you kill someone, their house will become rubble. The next night, nobody can pass the destroyed house (it is assumed all players are in a line, going from 1 to the last player. If house 5 is destroyed, then player 4 cannot visit player 6.)\n- The rubble is cleaned up after 1 day.\n- You cannot kill if there is a destroyed house needing to be cleaned up.\n- The first time you are lynched, you do not die.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["idealist", "648"], "Mafia", "Idealist", (e) =>
	{
		e.setDescription("Post 648");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to idealize the Mafia the following night during the day.");

		e.addField("Attributes:", "- At the start of the following night, the Mafia will be informed that the Idealist will create an ideal vision for them tonight.\n- When you create an ideal vision for the Mafia, all member of the Mafia will be able to choose a role in the GIM thread to appear as. This will cause all investigative abilities to perceive the Mafia members as the role that they chose.\n- If an idealized Mafia member dies on the night they were idealized, or if they are lynched the day after, they will appear to be the role they were idealized as in the graveyard.\n- You may only idealize the Mafia three times per game.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["hail", "649"], "Everfrost", "Hail", (e) =>
	{
		e.setDescription("Post 649");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player. If they would die tonight, their role and will will be hidden from the town and shown as \"Frozen\".\n**Blaze of Frost** — Roleblock a non-Everfrost player at random four times, then coldsnap. You may only use this ability once per game and you can't use it until Night 3. (This can target the same player more than once. It's random.)");

		e.addField("Attributes:", "- Roleblock Immune\n- Each night, a random non-Everfrost the player who isn't the target of the Everfrost's factional roleblock will be roleblocked.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["editor", "650"], "Mafia", "Editor", (e) =>
	{
		e.setDescription("Post 650");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- See what happened at night, and change the script of what happened.");

		e.addField("Attributes:", "- At the end of the night, see 3 actions that happened. You may choose to remove one of these actions, and the night will process as if it never happened.\n- You only get 1 hour after night ends to choose to delete something.\n- If you do not delete an action, learn 2 more actions that happened.\n- Actions are formatted as follows:\n> [Role] used [Ability] on [Role].");
		
		e.addField("Goal:", "Mafia Goal");
	});
};
