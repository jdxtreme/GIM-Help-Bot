//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["alice", "3201"], "Twilight", "Alice", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3201");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, at night, choose a specific night or day.");

		e.addField("Attributes:", "- If any Twilight member dies during that phase, during the next night, you may pick anyone amount of players you want and will roleblock all of them. If you only choose one player, they will be roleblocked for two nights.\n- Vampire Fixation: Upon using your ability, every day afterwards, you will learn the contents of every whisper sent.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["rosalie", "3202"], "Twilight", "Rosalie", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3202");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Resurrect any non-Twilight player at night.");

		e.addField("Attributes:", "- You can only do this twice.\n- You may disguise your revival as having been done by any other role of your choice.\n- After you revive someone, if Edward is alive, he can attack three players the next time he is able to.\n- After you revive someone, if Jacob is alive, he can attack two players the next time he is able to.\n- After both revivals, if no Renesmee is alive, your role becomes Renesmee.\n- Vampire Fixation: Whoever you revive will receive a Powerful Attack two nights later.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["renesmee", "3203"], "Twilight", "Renesmee", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3203");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Break someone’s back at night, paralyzing them.");

		e.addField("Attributes:", "- Paralyzed players will lose the last line of their attributes every night, until they have none left, in which they become roleblocked until Renesmee dies. Players do not know when they lose lines.\n- Vampire Fixation: You may target two players per night. Retargetting an already paralyzed player either removes an additional line from them, or blackmails them if they’ve already lost all of their attributes.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["volturi", "3204"], "Twilight", "Volutri", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3204");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Touch a player at night, learning their exact role.");

		e.addField("Attributes:", "- Vampire Fixation: Your ability changes to attack two players at night, killing them. If you are alive after two nights of a Vampire Fixation having been active, Bella dies.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["victoria", "3205"], "Twilight", "Victoria", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3205");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bite down on a player at night, secretly granting them a Basic Attack that will hit whoever they visit the following night.");

		e.addField("Attributes:", "- If they kill you, you will appear as the last role Bella disguised you as, if any, and killed by Edward or Jacob, whoever has killed more people.\n- Bella’s disguises on you are permanent.\n- If they visit a Vampire player that isn’t you, nothing happens.\n- Vampire Fixation: Your effect lasts an additional night.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["quil_ateara_v", "quilatearav", "quil_ateara", "quilateara", "quil", "ateara", "qav", "3206"], "Twilight", "Quil Ateara V", {subCat: "Werewolf"}, (e) =>
	{
		e.setDescription("Post 3206");

		e.addField("Alignment", "Twilight Werewolf", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imprint on a player at night, roleblocking them.");

		e.addField("Attributes:", "- The first person to vote them the next day is instantly dealt a Powerful Attack. If your target is lynched, your role is publicly revealed.\n- If you target a Twilight player and they are lynched, whoever you imprint tonight will be dealt a Powerful Attack instead.\n- Roleblock and redirection immunity.\n- Werewolf Fixation: During the night, you may decide what your imprinted target appears as if lynched. If you choose to make them appear as a Twilight role, you get to deal a Powerful Attack if they are lynched, regardless of what they actually were.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["sam", "3207"], "Twilight", "Sam", {subCat: "Werewolf"}, (e) =>
	{
		e.setDescription("Post 3207");

		e.addField("Alignment", "Twilight Werewolf", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Send wolves after a player at night.");

		e.addField("Attributes:", "- If they ever visit a Twilight Werewolf player in the future, they will be dealt an Astral Powerful Attack. They will be informed that they are being hunted by wolves\n- Werewolf Fixation: Anybody killed by you gets their will erased.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["seth", "3208"], "Twilight", "Seth", {subCat: "Werewolf"}, (e) =>
	{
		e.setDescription("Post 3208");

		e.addField("Alignment", "Twilight Werewolf", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Publicly launch a hunt during the day, choosing a player as your victim.");

		e.addField("Attributes:", "- Bella’s disguises on you are permanent but she may only choose non-Power or Killing roles of whatever the dominant good faction is (if unknown, Town).\n- You have all of the abilities and attributes of your current disguised role that you may use alongside with your regular ability.\n- During the following night, all non-Twilight players may guess who Seth is. If none of them are correct, your victim dies. If any of them are correct, nothing happens and the correct guessers will know they were right. \n- Bella and all Twilight Werewolves, including you, will learn the roles of the correct guessers, if any.\n- Werewolf Fixation: The hunt is not announced until the beginning of the night, and it will only be announced to your victim, who is the only person able to guess.");

		e.addField("Goal:", factions.Twilight.goal);
	});
 
	register_role(["bad_role", "badrole", "disapproved", "notapproved", "3209"], "Other", "Bad Role", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3209\nThat's a terrible role above this message. Bionic disapproves."); 
	});
 
	register_role(["town-sided_framer", "town-sidedframer", "townsidedframer", "town_framer", "townframer", "framer", "tsf", "3210"], "Town", "Town-Sided Framer", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 3210");

		e.addField("Alignment", "Town Mafia", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frame someone at night. They will appear to be a Town-Sided Framer to all investigative effects unless they are Town.");

		e.addField("Attributes:", "- Frames go away the day after someone checks the target.\n- You are Suspicious to sheriffs.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["connect_4", "connect4", "connect_four", "connectfour", "3211"], "Neutral", "Connect 4", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3211\n*It's much less fun making these Town roles.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, scout someone. You will learn how long their connected line is.\n- During the night, place a Green, White, Red, or Wild chip in between two players.");

		e.addField("Attributes:", "- The Town is a circle.\n- Players are assigned colors based on their alignment. The Good faction is Green, REFs and NKs are Red, and other Neutrals are White. When you scout someone, you learn how many connecting people/chips have the same color, including the target. (e.g. if you scout a Townie with one Town neighbor and the other surrounding players are Evil, you get a result of 2.)\n- Whenever someone is part of a line of four of the same color, they die. All chips that were part of this sequence are removed from play.\n- Wild chips can count for any color. You may only place 2 Wild chips throughout the game.\n- Once only yourself and four other people are alive, you may place two chips each night.\n- At the start of the game, no one can be part of a sequence of 4.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["snake", "🐍", "3212"], "Neutral", "Snake", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3212\n*nomnomnomnomnomnom*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic (Variable)", true);

		e.addField("Abilities:", "- Attack a player each night. After using this ability once, you may only attack anyone within two houses of last person you targeted, ignoring dead folks. ");

		e.addField("Attributes:", "- After attacking your first target, a random person besides you is given the `Apple`, granting them Basic defense. They're not told they have the `Apple`, but you are. Whenever someone with the `Apple` dies, it's given to a new person besides you.\n- If you kill the person with the `Apple`, your Attack and Defense are permanently raised a tier, your attack reach is increased one house further, and you're lynchproof the next morning.\n- When attacking someone with the `Apple`, your attack becomes Piercing, using an attack value one higher than their defense unless it would be lower than your current Attack tier anyway.");

		e.addField("Goal:", "Kill all who would oppose you and collect at least three `Apple`s.");
	});
 
	register_role(["godfather_with_a_white_rose", "godfatherwitharose", "godfather", "whiterosegodfather", "whiterosegf", "gwawr", "gwwr", "wrgf", "3213"], "Mafia", "Godfather with a White Rose", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3213");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may perform the factional Mafia kill.");

		e.addField("Attributes:", "- For the purposes of lore this role is treated as having a white rose in their pocket.\n- This role hates <@327918538419601409> and is obligated to attack them first, or else they are modkilled.\n- If you perform the factional mafia kill, another mafia killing will do so if they exist.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["a_forest", "aforest", "forest", "3214"], "Neutral", "A Forest", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3214\n*Yes, it's literally just a forest*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grow another tree at night. (2 night cooldown)");

		e.addField("Attributes:", "- You are 10 trees in the same person. Every time you die, you lose a tree. This includes lynching and modkills.\n- When someone attacks you, they have 10 seconds to confirm they’re moving out of the way otherwise they are dealt a basic attack. The host should ping them about this after processing actions.\n- If you lose all of your trees, anyone without invincible defense dies because there is no longer enough oxygen being produced.\n- You can regrow a tree every 3 nights in an attempt to prevent the death of the forest.\n- You may not grow a tree on N1 and N2.\n- You may reroll this for free if you desire.");

		e.addField("Goal:", "Survive until the end of the game and have grown at least 2 extra trees.");
	});
 
	register_role(["a_forest", "aforest", "forest", "3215"], "Neutral", "A Forest", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3215\n*Yes, it's literally just a forest*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You are a spectator and not a player, but your attributes still apply. As a spectator, you may not cheat by giving or hinting at outside information, but you may offer advice, as long as you do not state or imply anything that the player does not or could not mechanically know.\n- The game takes place in a circular forest. This is announced at the start of the game or when it triggers.\n- There is a tree between each player's house. When players die, their house becomes another tree.\n- Players can only move through an amount of trees equal to half the number of players there were at the beginning of the game (not counting you) rounded up minus one. This doesn't apply to Astral abilities or indirect effects. This means they can target anyone as long as everyone's alive, but as players die and get replaced with trees, they lose access to further away players.");

		e.addField("Attributes (cont.):", "- Players can use abilities on trees as long as they can move there. Trees have no defense, and are removed if they would die.\n- At the end of the game, you become a player again so that your goal can be evaluated.\n- You may reroll this for free.");

		e.addField("Goal:", "Have there be at least X more trees than there were to start with, where X is the number of players there were at the beginning of the game minus 5.");
	});
 
	register_role(["town_consort", "townconsort", "towncons", "escort", "3216"], "Town", "Town Consort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3216");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player.");

		e.addField("Attributes:", "- Roleblock immune.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["mafia_escort", "mafiaescort", "mafesc", "consort", "3217"], "Mafia", "Mafia Escort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3217");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player.");

		e.addField("Attributes:", "- Roleblock immune.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["ghost_lady", "ghostlady", "gl", "3218"], "Town", "Ghost Lady", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3218");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit one person. If they are visited, a ghost will appear in front of the visitor, blocking all visits on them.  They are also shocked, notifying them that they've been roleblocked by a ghost.\n- Shock one person, dealing a powerful attack to them. If they somehow live, they are notified who you are.");

		e.addField("Attributes:", "- If somebody calls you out on who you are, you are modkilled.\n- All visits on you will fail.\n- If somebody calls you on on who you are, and they are wrong, they are modkilled.\n- When this role is killed, they will show as a random town role not in game. ");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["sleepy", "zzz", "💤", "3219"], "Neutral", "Sleepy", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3219\n*yawn*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make somebody sleepy, roleblocking them the following night. They will be vulnerable that night.\n- Wake somebody up, allowing them to act twice that night. \n- Put somebody into a deep sleep, making it so they cannot speak or do actions, or vote. They will wake up in three nights, or if two people visit them. (Night Ability)");

		e.addField("Attributes:", "- All abilities of this role are day abilities unless specified otherwise, since they're sleepy during night. \n- You cannot be roleblocked or redirected, since you're asleep anyways.");

		e.addField("Goal:", "See that the original good faction loses the game. (You may achieve this goal when dead, so long as the host deemed you did something \"useful\").");
	});
 
	register_role(["tech_support", "techsupport", "3220"], "Town", "Tech Support", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3220\n*Hello, I have found virus on your computer*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist someone with their tech problems at night.\n- Aquire a user’s login information. (2 uses)");

		e.addField("Attributes:", "- Your target will gain immunity from anything that would cause their ability to stop working, and they gain all immunities from tech related roles (like Mainframe and Androids).\n- When you acquire someone’s computer login info, the host will send you a number that is twice the digits of your target’s post number. At least half of these numbers must contain the numbers to the actual post (example: Post 436 is targeted. Tech Support gains the numbers 742396. The numbers do not have to be in order)");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["criminal", "3221"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3221");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night.");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["criminal", "3222"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3222");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal from someone, controlling them into another person and gaining 1 charge of the ability they used.");

		e.addField("Attributes:", "- You do not get an ability if your target is control immune.");

		e.addField("Goal:", factions.Criminal.goal);
	});
  
	register_role(["criminal", "3223"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3223");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rig the vote, and anonymously vote someone for as many times as there are living Criminals. ");

		e.addField("Attributes:", "- You see all votes that occur before they actually happen. You may choose to cancel a vote, 2 vote cooldown, they will not be allowed to place another vote.");

		e.addField("Goal:", factions.Criminal.goal);
	});
  
	register_role(["criminal", "3224"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3224");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set someone’s house ablaze, roleblocking them and their visitors.");

		e.addField("Attributes:", "- Roleblock immune.");

		e.addField("Goal:", factions.Criminal.goal);
	});
  
	register_role(["criminal", "3225"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3225");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stalk someone, then stab them at the very beginning of the day.\n- Stalk someone, then stab them at the very beginning of the night.\n- You may also perform the Criminal factional kill.");

		e.addField("Attributes:", "- The first ability is a night ability.\n- The second ability is a day ability.\n- You can't use an ability if you used one last phase.");

		e.addField("Goal:", factions.Criminal.goal);
	});
  
	register_role(["criminal", "3226"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3226");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge someone's documents, making them appear as that role to everything else, including death, for 2 days.\n- Once per game, permanently apply the above effect to a player.");

		e.addField("Attributes:", "- You select what role your target appears at.\n- Your effects are removed by Purges, unless they were permanently applied.");

		e.addField("Goal:", factions.Criminal.goal);
	});
  
	register_role(["criminal", "3227"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3227");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to vandalize their house. All players who visit them will receive completely random feedback.\n- Follow a player to vandalize who they visit, giving your target completely random feedback.");

		e.addField("Attributes:", "- If your target doesn't get feedback normally, you'll still create false feedback for them.\n- Your false feedback can only be things that could theoretically occur in some capacity.");

		e.addField("Goal:", factions.Criminal.goal);
	});
 
	register_role(["citizen", "3228"], "Town", "Citizen", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3228\n\n\"*\"She waits until night falls, then gently takes out her crystal ball. She murmurs her secret words, foreign to others' ears but warmly familiar to her own. The opaque clouds swirling within the glass clear away to reveal a shining, translucent orb of clarity.\nThe town has called her foolish many times for meddling with \"fake magic,\" but they know not of the true nature of her powers. They say dead men tell no tales, but that isn't true for the Medium. As she moves her hands lightly over the gleaming crystal, words from the souls of the dearly departed begin to appear before her. She sifts through their words, carefully looking for any snippets of information that may help the Town. Her eyes light up – the town Sheriff had found a member of the Mafia, but had not been able to tell the Town before being stabbed by the Serial Killer at large. The next morning, she informs her fellow townspeople of the Sheriff's final discovery. The Mafia member is hanged and the townspeople cheer, but this victory does not come without a price. She is shot the next night by the Mafia, come to seek revenge for their brother's spilled blood.\n\nHer life may be over, but her job is not. The next night, the Medium performs her final, miraculous act from beyond the grave. She speaks to the Mayor of Salem, sharing the final pieces of information gleaned from the dead. As the night ends, she knows she can rest easy. The Town will be all right.\"\n- Flavor Text from HOM3STUCK413 on the ToS wiki*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- If you are dead, you may Seance a living player to tell them a message.");

		e.addField("Attributes:", "- You will speak to the dead anonymously each night you are alive.\n- You may only speak to a living person once.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["shirou_emiya", "shirouemiya", "shirou", "emiya", "se", "3229"], "Town", "Shirou Emiya", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3229\n*\"Even if I'm a fraud, I know my dream isn't wrong.\"*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use projection magic to copy another player's weapon. You'll gain a use of their first ability, except the first verb is replaced with \"kill\" (or its equivalent, such as \"killing\").");

		e.addField("Attributes:", "- People die when they are killed. If someone uses an ability to \"kill\" someone, including a factional kill, the killed player dies regardless of attack or defense values. Additionally, extra lives can't prevent people from dying, and people can't be resurrected.\n- Just because you're correct doesn't mean you're right. If someone plays in a way that's counterproductive to their current goal in the hopes of being converted or otherwise \"gamethrows\" in a way that's not technically against the rules, they're modkilled.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["whalebearer", "wb", "3230"], "Neutral", "Whalebearer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3230\n*Do you support whales?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each day, whisper someone a message containing the Good Word. This is actually just the first whisper you send each day, and the contents of said message don't matter. They become Whaled.\n- Each night, grant someone Powerful defense. Because whales. You may target yourself.");

		e.addField("Attributes:", "- Whenever someone is Whaled, the first 3 whispers they send each day will spread the effect. They may spread the effect the same day they get Whaled.\n- The first person to whisper you each day will also get the Whaled effect.\n- You will know who is Whaled at all times.\n- When all living players become Whaled, you will become (3231) Wailord, Whaleman of the Whalepocalypse at the end of the day. The town will be notified that \"The Whale God has risen!\".\n- This role cannot spawn with Partisans, and no player can become a Partisan while you are alive.\n- Douse Immunity");

		e.addField("Goal:", "Transform into (3231) Wailord, Whaleman of the Whalepocalypse.");
	});
 
	register_role(["wailord_whaleman_of_the_whalepocalypse", "wailordwhalemanofthewhalepocalypse", "wailord", "whaleman", "whalepocalypse", "wwotw", "www", "3231"], "Neutral", "Wailord, Whaleman of the Whalepocalypse", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3231\n*You do support whales.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Flop on someone's house, killing them and all visitors. You can kill Astral visitors this way.");

		e.addField("Attributes:", "- Roleblock, Control, Redirect, Frame, Mute, and Conversion Immunity.\n- It is constantly raining outside, and people don't want to go out much. They cannot visit more than four houses away from them. You are immune to this.\n- Anyone who visits you or you directly kill will drown, dying and appearing as Drowned in the graveyard (role/will cleaned).");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["ian_knode", "ianknode", "ian", "knode", "ik", "3232"], "Town", "Ian Knode", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3232");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to die them so that you're able to not die better.\n- Hang out with a player. Both of you will be able to dien't (invincible defense). 1 night cooldown.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["electric_transcendant_corrupt_cheerleader", "electrictranscendantcorruptcheerleader", "etcc", "3233"], "Neutral", "Electric Transcendant Corrupt Cheerleader", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3233\n*It makes more sense the less you think about it.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Cheerlead someone each day. The next night, you may choose to also short circuit them, and, once per game, you may commute them.");

		e.addField("Attributes:", "- You have a Basic autovest. ");

		e.addField("Goal:", "See the Town lose the game.");
	});
 
	register_role(["the_alignment_chart", "thealignmentchart", "alignment_chart", "alignmentchart", "alignment", "chart", "tac", "3234"], "Neutral", "The Alignment Chart", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3234\n*Yes I organized this fairly and it’s not at all biased*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and give them an alignment. Something different will happen based on which alignment you choose.");

		e.addField("Attributes:", "-The alignments you may choose from and their effects are:\n>**Lawful Good**: Turn someone into a Town Power.\n> **Neutral Good**: Turn someone into a Town Support role.\n> **Chaotic Good**: Turn someone into a Town Killing role.\n> **Lawful Neutral**: Turn someone into a Neutral Benign.\n> **True Neutral**: Turn someone into Survivor (96).\n> **Neutral Chaotic**: Turn someone into a Neutral Chaos role.\n> **Lawful Evil**: Turn someone into a Support role for the local REF.\n> **Neutral Evil**: Turn someone into an NE role.\n> **Chaotic Evil**: Turn someone into a Killing role in an REF that is in play.\n- Your abilities will fail if you attempt to put someone into a faction they’re already in.");

		e.addField("Goal:", "Convert 5 people out of their original faction without dying.");
	});
 
	register_role(["microphone", "🎤", "🎙️", "3235"], "Neutral", "Microphone", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3235");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night you may visit 2 players. They will receive no action feedback and can only whisper for the rest of the day.");

		e.addField("Goal:", "Survive to see the town lose.");
	});
 
	register_role(["bat", "🦇", "3236"], "Minecraft", "Bat", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3236");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Screech**: Screech at one player, redirecting them to a non Minecraft player at random.\n- **Stalk**: Stalk a player, learning who they visit and who visits them.");

		e.addField("Attributes:", "- **Echolocation**: Each day, you learn one players role. You are aware of which player you learned the role from, and you cannot learn from the same player twice.\n- You see Astral visits.\n- Redirection immune\n- Roleblock immune");

		e.addField("Goal:", factions.Minecraft.goal);
	});
 
	register_role(["arcane_magus", "arcanemagus", "arcane", "magus", "teleporterman", "am", "3237"], "Linirean", "Arcane Magus", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3237");

		e.addField("Alignment", "Linirean Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Teleport**: Swap two players tonight.\n- **Arcane Storm**: Rampage at someone's house.");

		e.addField("Attributes:", "- You have a mystical barrier that protects against one attack.\n- You may only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});
 
	register_role(["anxious_rester", "anxiousrester", "rester", "ar", "3238"], "Mafia", "Anxious Rester", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3238\n*You're, like, totally not tired, but, like, literally starving, gosh—*");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player at night.\n- Stay home at night.");

		e.addField("Attributes:", "- If your target visits someone who dies, deal an Unstoppable attack to them.\n- If you stay home, you will instead attack your visitors.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["mayorfighter", "3239"], "Mafia", "Mayorfighter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3239\n*It's like a firefighter*");

		e.addField("Alignment", "Mafia Supporter", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a Mayor at night to Un-Mayor. They become a Citizen with no abilities.");

		e.addField("Attributes:", "- Factional mafia chat and factional mafia kill\n- Rerolled unless there is a Mayor in game");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["long_distance_communicator", "longdistancecommunicator", "communicator", "long_distance", "longdistance", "ldc", "3240"], "Neutral", "Long Distance Communicator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3240\n*Don't worry about the maintenance costs.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Set up a telephone wire at a player's house.\n- Set up a pipe between two people's houses.\n- Give a player a letter.");

		e.addField("Attributes:", "- A telephone wire will allow players to anonymously send messages to all other players with a wire, though being unable to differentiate each other.\n- Players with a pipe may open a private chat with the other person for one phase by using it during the phase before, but only if both players use it at the same time. It has a one day cooldown.\n- Writing a letter allows a player to send any body of text to another player at the end of the next night.");

		e.addField("Goal:", "Survive to the end of the game.");
	});
 
	register_role(["pictionary", "3241"], "Neutral", "Pictionary", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3241\n*MS Paint is a perfectly fine drawing tool.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, draw a picture in 1 minute. You may not include any words in this picture. Although you don't have to use MS paint, it is recommended.");

		e.addField("Attributes:", "- The picture will be posted at the start of the day. Players may, in their private channel, select a role that they think the picture represents. \n- At the start of the next night, you are presented with a list of **anonymized** submissions. The host will pick the submission they think the picture most accurately represents. Whoever had that submission is converted to the role that they guessed. You will see the submission that won.");

		e.addField("Goal:", "Convert three people into different alignments.");
	});
 
	register_role(["paintmailer", "pm", "3242"], "Neutral", "Paintmailer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3242\n*It doesn't do much, but it's hilarious to watch.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two people at night to Paintmail.\n- Choose one person at night to Paintmail. This Rampages.\n- Choose one person at night to Paintmail. You will also Paintmail whoever they visit.\n- Spread Paintmail like the plague. Anyone who is Paintmailed will spread the Paintmail effect to whoever they visit and whoever visits them. You may be Paintmailed this way. (1 Use)");

		e.addField("Attributes:", "- Anyone who is Paintmailed is disabled from speaking for one day. Instead, they must communicate by posting images they draw in MS paint or a similar application. These images may contain at most a single letter.\n- Paintmailing lasts permanently, even if it doesn't have the muting effect. Paintmail may be reapplied to mute someone again.\n- You may never multitask.\n- Roleblock and Prevention Immune.");

		e.addField("Goal:", "Live to see at least all other players be Paintmailed at least once.");
	});
 
	register_role(["pokémon_trainer", "pokémontrainer", "pokemon_trainer", "pokemontrainer", "pokémon", "pokemon", "trainer", "pt", "3243"], "Neutral", "Pokémon Trainer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3243");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose 3 players at day, you will put the first 2 in a battle and battle the third one yourself.");

		e.addField("Attributes:", "- The battles will happen at night, this will roleblock all battlers.\n> If you win, You can do 1 extra action each phase permanently.\n> If you lose, You get hit by a Powerful attack.\n> If you draw or the match gets to round 300, end the game and play another match.\n- The winner will have to save a replay and the host will post it on their opponent's death message, if they dont, they die.\n- The mode is Random battles and generation is chosen at random.\n- You gain 1 point for winning a duel, you also gain 1 point by having the first target of your ability win the duel.");

		e.addField("Goal:", "Get 3 points.");
	});
 
	register_role(["experimental_inspector", "experimentalinspector", "experimental", "inspector", "ei", "3244"], "Town", "Experimental Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3244\n*I'll fuck around and find out.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use any Town Investigative ability from the role ideas forum in this server https://discord.gg/6TgDjRcTDH.");

		e.addField("Attributes:", "- You may not use abilities of role ideas that were posted after the game started.\n- Editing a role idea you posted or convincing someone else to edit theirs is cheating.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["plaguebearer", "pb", "3245"], "Town", "Plaguebearer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3245");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/f/f6/RoleIcon_PlagueBearer_1.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Infect a player with the plague.\n- Desinfect any number of players you want.");

		e.addField("Attributes:", "- You know the name of infected players at all times.\n- If you die, all infected players are put in your will automatically, including the ones who were infected tonight.\n- You may multitask.\n- Players who visit you become infected, you may disable this passive each night.\n- Players who visit infected players also become infected.\n- Randomly, between day 3 to 6, the Town will be informed that a plague has consumed the Town, you will not know when it will happen.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["plaguebearer", "3246"], "Town", "Plaguebearer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3246\n*Listen, if you all get sick, I can probably figure something out with like medical science!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Infect a player each night.");

		e.addField("Attributes:", "- Players who visit you or infected players become infected.\n- Players infected players visit become infected.\n- If, at the end of the phase, all other players are infected, you will learn every player's role. When you do, the Town will be informed that a plague has consumed the Town.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["king", "3247"], "Inquisition", "King", {subCat: "Government"}, (e) =>
	{
		e.setDescription("Post 3247\n*You are the leader of the land and are unafraid to prosecute non-believers.*");

		e.addField("Alignment", "Unqiue Inquisition Government", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Condemn two players.\n- You may prosecute the night after a player who you condemn is lynched. ");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["missionary", "3248"], "Inquisition", "Missionary", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3248\n*You are a traveling priest who forces others to confess to their sins.*");

		e.addField("Alignment", "Inquisition Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Travel to a players house, learning their role.");

		e.addField("Attributes:", "- You will appear to be your most recent target upon death.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["swordsmith", "3249"], "Inquisition", "Swordsmith", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3249\n*You are a weapon manufacturer who fights for your faith.*");

		e.addField("Alignment", "Inquisition Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Expend one kill charge to attack somebody.");

		e.addField("Attributes:", "- Each kill charge you have increases your attack value by one.\n- You gain a kill charge every night.\n- If you choose not to use your attack at overkill level, you will stay home and attack all visitors.\n- Your attack may not go beyond overkill.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["hitman", "3250"], "Inquisition", "Hitman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3250\n*You are employed by the government to kill heretics in secrecy.*");

		e.addField("Alignment", "Inquisition Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack one player.\n- Assassinate your target, making your attack astral and piercing. (2 uses)");

		e.addField("Attributes:", "- Piercing attacks ignore all protection.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
};
