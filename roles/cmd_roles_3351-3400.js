//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["probability_density_function", "probablydensityfunction", "probability_density", "probabilitydensity", "density_function", "densityfunction", "probability", "density", "pdf", "3351"], "Mathematic", "Probability Density Function", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 3351");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night, guess the parameters of your Uniform Distribution.\n- During the night, choose up to 5 players. The host must describe the parameters of a Normal Distribution within which all players' role numbers are within 2 standard deviations of the mean. This costs 7 points.");

		e.addField("Attributes:", "- You have a Discrete Uniform Distribution with minimum and maximum values each from 0 to the current maximum role number. At the start of each night, you will receive 5 numbers randomly picked from this distribution.\n- If you incorrectly guess a parameter of your Uniform Distribution, you will be told if the true parameter is lower or higher.\n- The first time you correctly guess one of the parameters of your Uniform Distribution, gain 10 points.\n- If you successfully guess both parameters of your Uniform Distribution, gain another 10 points and choose a player. That player will be converted to a role corresponding to one of the two parameters.\n- The host's Normal Distribution must not have any number below 0 or above the current number of roles within 2 standard deviations of the mean.");

		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["moralist", "3352"], "Neutral", "Moralist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3352\n*Your Judgment will Come.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check someone's D&D alignment at night.\n- Smite someone during the day.");

		e.addField("Attributes:", "- All roles are secretly assigned a D&D alignment by the host. (Lawful/Neutral/Chaotic) + (Good/Neutral/Evil)\n- You are immune to frames and disguises.\n- You may only smite once per day.\n- You cannot be killed by Travellers.");

		e.addField("Goal:", "Kill all players of three D&D alignments at random. You know which three you have to kill.");
	});

	register_role(["parole_officer", "paroleofficer", "parole", "po", "3353"], "Storyteller", "Parole Officer", {subCat: "Introduction"}, (e) =>
	{
		e.setDescription("Post 3353\"*Warden - I promise he's good for the job. He has a loyal background to the king and previous service.*\"");

		e.addField("Alignment", "Storyteller Introduction", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the game, one good player becomes your target, but you don't know who. At the start of each night, you are told exactly who your target has visited each night.\n- At night, choose a player to Investigate.\n- If they are not your target, you will gain a clue about your target's Attack, Defense, or Immunities.\n- If they are your target, you will increase their attack by one stage and when they visit a target, they will attack them. Players they kill are cleaned and the cause of death seems to be the Parole Officer.");

		e.addField("Attributes:", "- If you find your target, the introduction becomes \"*The protagonist shivers in the cold cell. The parole officer has just woken the protagonist up, informing them that they have been drafted to the front line. The protagonist cries in relief as the harsh chains are removed from their body.*\" When the story is completed with this introduction, all attacks made by Storytellers become astral and the victims are cleaned.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["mommy_kink", "mommykink", "mommy", "kink", "mk", "3354"], "Neutral", "Mommy Kink", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3354\n*A mommy kink is an arousal to nurturing women, generally perceived to be in control over the subject.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the game, one protective role is named as your \"Mommy\"\n- At night, you may force your Mommy to heal you up to 3 times. This will redirect their visit from their original target to you.\n- If your Mommy dies, you become an Executioner with a new random target.");

		e.addField("Goal:", "Cause someone to die by stealing your mommy's healing from them and see the Town lose.");
	});

	register_role(["castigator", "3355"], "Neutral", "Castigator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3355\n*I seek **justice**, and I will stop at nothing to achieve it.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Patrol a target's house tonight, learning whether or not they're a `Criminal`. If they are, you'll roleblock them. If they aren't, you'll prevent anyone besides you from visiting them tonight and mark anyone who attempted to do so as a `Criminal`.\n- Select a target to purify of sins. If they're a `Criminal`, you'll deal an Astral attack to them. If they're not, this ability does nothing. (1 use)");

		e.addField("Attributes:", "- Your abilities primarily interact with `Criminals`. Whenever a non-Neutral player...\n> - Attacks a non-`Criminal`\n> - Was the first vote of a lynch that killed a non-`Criminal`\n> - Disturbs the peace of non-`Criminals` thrice (roleblocking, redirection, blackmailing, prevention, etc.; host interpretation)\n... they are permanently marked as a `Criminal`. You'll no longer mark anyone after you die, but `Criminals` still remain `Criminals`.\n- Anyone with detection immunity cannot be marked as a `Criminal`.\n- You have a one-use Basic autovest. You also have permanent Basic defense against all `Criminals`.\n- You will know which faction has the most `Criminals` at all times.\n- Roleblock, redirect, detection and prevention immune");

		e.addField("Goal:", "See the faction with the most `Criminals` lose, with at least 2 `Criminals` dead. You may win while dead.");
	});

	register_role(["metronome", "3356"], "Town", "Metronome", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3356\n*Hold on, I'm getting a sense of it...*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select three or more people to start recording the rhythm of. The order of those people will then be randomized.\n> Each night, including the one you used this ability on, you will learn the Sheriff's result of the first person in the set. Next night, you'll learn the result of the next person in the set, etc. Upon reaching the last person, it'll loop back to the beginning.");

		e.addField("Attributes:", "- You can be recording the rhythm of multiple sets of people at a time. You'll be able to differentiate each set.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["metronome", "3357"], "Town", "Metronome", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3357\n*Praying to RNGesus*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, use a random ability from a random role. Your targets are random.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["last_christmas", "lastchristmas", "christmas", "lc", "3358"], "Town", "Last Christmas", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 3358");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("I gave you my heart:", "(Ability) - Give someone your heart, giving them Invincible defense.");

		e.addField("But the very next day, you gave it away:", "(Attribute) - The defense you give lasts until the beginning of the night two nights from now (if you give defense N1, it's removed N3). You cannot give someone your heart when someone else already has it. Also, you cannot use any ability on yourself, because you already have your heart and giving it back to yourself would be weird.");

		e.addField("This year, to save me from tears:", "(Attribute) - Giving your heart to a player two times in a row will force you to attack yourself and your target. They still get defense though, since it's completely irrelevant.");

		e.addField("I'll give it to someone special", "(Ability) - Permanently give someone Invincible defense and lynch immunity. This persists until you die. You cannot use any abilities for the rest of the game after using this. This persists until your target (somehow) dies. 1 use.");

		e.addField("Goal:", "Cause all opponents to the Town to fail Whamageddon. (Town goal)");
	});

	register_role(["metronome", "3359"], "Town", "Metronome", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3359");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deal a Basic attack to a player.");

		e.addField("Attributes:", "- Every time you attack, your attack ability will increase by a tier afterwards.\n- You lose the boost if you dont attack in a night.\n- Boosts the power of a move by 20% for each previous, consecutive turn it has been used successfully, up to a maximum increase of 100%. (This means nothing)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["color_wheel", "colorwheel", "colour_wheel", "colourwheel", "cw", "3360"], "Town", "Color Wheel", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3360");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check 1 of the roles you recieved with your attribute, you will learn a random color in the Profile Picture of someone with that role.");

		e.addField("Attributes:", "- You learn a random alive role in the game every night, you cannot recieve the same one twice.\n- Checking the same role again will give a different result if there are more colors/people.\n- You will only recieve a single word for thr role's color. (Blue, Lime, Magenta.)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role([":rosabonk:", "rosabonk", "rosa", "bonk", "3361"], "Town", ":RosaBonk:", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3361");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/1053832437802750022.webp?size=96&quality=lossless";

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", ":RosaBonk:", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player, dealing to them a :RosaBonk: attack.\n- Defend a player, giving them :RosaBonk: defense.\n- :RosaBonk: a player, preventing them from taking an action this night and next night.\n- Stay home, dealing a :RosaBonk: attack to all your visitors.\n- :RosaBonk: a player, placing them in prison.\n- :RosaBonk: a imprisoned player, dealing to them a :RosaBonk: attack.");

		e.addField("Attributes:", "- If a :RosaBonk: is before or after attack or defense, it is replaced with unstoppable and powerful respectively.\n- You may multitask.\n- You may communicate with imprisoned players anonymously.\n- Imprisoned players may not take their action and all visits against them will fail. \n- At the start of the game, if this role spawns, the host must use :RosaBonk: in every private channel.\n- None of the effects with :RosaBonk: in them can fail.\n- The :RosaBonk: doesn't translate to the bot ;~;");

		e.addField("Goal:", ":RosaBonk: (Lynch all criminals and evildoers.)");
	});

	register_role(["kind_critic", "kindcritic", "kind", "critic", "kc", "3362"], "Mafia", "Kind Critic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3362");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Compare 10 players tonight. Their player numbers in the player list will be taken.");

		e.addField("Attributes:", "- When a player's number is taken, they can only be visited by other people that don't have numbers.\n- They will be given back at the start of the next day.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["puppet_master", "puppetmaster", "puppet", "master", "pm", "3363"], "Neutral", "Puppet Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3363");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Each night, wish upon a star for any event to happen (i.e \"I want Player 3 to fail to use their ability tonight.\") The host will comply with your wish to the best of their ability.");

		e.addField("Attributes:", "- The host will comply by controlling whichever players have the abilities needed to have your wish come true, to the players they have to target in order for your wish to come true. If your wish cannot be completed with the abilities of the players alive, your ability fails.\n- You receive the feedback of all players you control. However, they will also get their feedback, and know exactly who they target.\n- You cannot ask directly for players to be killed.\n- You ignore Control Immunity.\n- You have Basic defense until the first time you're attacked by a non-Town role.\n- You have Redirect and Control immunity.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["violet_beauregarde", "violetbeauregarde", "violet", "beauregarde", "vb", "3364"], "Neutral", "Violet Beauregarde", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3364");

		e.addField("Alignment", "Unique Neutral Chaotic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Trust Fund", true);

		e.addField("Abilities:", "- Steal all the abilities from another player each night, removing them from play indefinitely. Each ability stolen is liquidated into $1,000,000,000 per ability, which is then put into your trust fund.");

		e.addField("Attributes:", "- Your targets will be able to perform their desired action on the night you steal their abilities. Additionally, they will be informed that Violet Beauregarde stole their abilities.\n- Your trust fund starts out with a balance of $5,000,000,000.\n- Each time you are attacked, subtract money from your trust fund based on the corresponding attack tier (Basic attack reduces trust fund by $1,000,000,000, Unstoppable by $3,000,000,000, etc. If any attack falls outside of this system, reduce by $2,000,000,000).\n- Attempted roleblocks, redirects, controls or conversions will reduce your trust fund by $500,000,000.");

		e.addField("Attributes (cont.):", "- If an attack/ability used on you causes your trust fund to go into the negative, any funds earned from that night's steal will automatically bring your trust fund balance to $0 and will make you completely vulnerable the following night. Earnings from the next night's steal will only be added if you survive that night.\n- Being lynched during the day phase will automatically bring your trust fund balance to negative $1, triggering the vulnerability period; any other day phase attacks fall under the aforementioned deduction policy.\n- If you die, all stolen abilities are returned to the affected players.");

		e.addField("Goal:", "Survive till the end, steal the abilities of every living player, or have a trust fund balance of at least $15,000,000,000 at a given time.");
	});

	register_role(["brick_wall", "brickwall", "wall", "bw", "3365"], "Partisan", "Brick Wall", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 3365");

		e.addField("Alignment", "Partisan of the Sun", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Block someone's door, preventing them from leaving.\n- Go to the end of a player's house's path. If that player visits anyone, they run head first into you and are attacked.\n- You can remember, at the very beginning of the day, that you are a brick wall and have no neck and are lynch immune for that day. 1 use.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["dimensional_bandit", "dimensionalbandit", "dimensional", "bandit", "db", "3366"], "Neutral", "Dimensional Bandit", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3366");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a Target, If successful, You will learn their Abilities and may choose one to copy permanently.\n- Short-circuit a Target, If successful, You will learn their attributes and may choose one to copy permanently.");

		e.addField("Attributes:", "- You may use 2 abilities each night.\n- You retain abilities/attributes through games, please ping <@654448067969548338> to add new abilities/attributes.");

		e.addField("Goal:", "See Town lose.");
	});

	register_role(["lucky_guy", "luckyguy", "lucky", "guy", "lg", "3367"], "Town", "Lucky Guy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3367");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two sets of three players. You will use a random ability from a random player in the first set on a random target in the second set.\n- Once per game, at any time, use a random ability in the game randomly.");

		e.addField("Attributes:", "- Good things always seem to happen to you. RNG is skewed in your favour. This applies while dead.\n- Each time this role is kept, its chance to roll increases by 1. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["the_bone_collector", "thebonecollector", "bone_collector", "bonecollector", "collector", "tbc", "bc", "3368"], "Neutral", "The Bone Collector", {subCat: "Traveller"}, (e) =>
	{
		e.setDescription("Post 3368");

		e.addField("Alignment", "Neutral Traveller", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one dead player; they may use their ability(s) tonight. ");

		e.addField("Attributes:", "- Your ability is a day ability.\n- You will be aligned with the Town or the REF at random.\n- You may only use this ability once per day.\n- This role cannot spawn naturally.\n- **Dark Times** (Passive): If you are lynched, the Town gains another 24 hours in the day phase, and may lynch again.\n- **Lost Hope** (Passive): If you are lynched as good traveler, every Town member is roleblocked tonight.\n- **Travelling** (Special Mechanic): If a player is not a spectator and wishes to join the game before Night 2, they may decide to join as the Outsider. Limit of 1 per game, and travelling may be denied at the hosts discretion.");

		e.addField("Goal:", "Enter the town and assist in the elimination of your opposition.");
	});

	register_role(["the_butcher", "thebutcher", "butcher", "3369"], "Neutral", "The Butcher", {subCat: "Traveller"}, (e) =>
	{
		e.setDescription("Post 3369");

		e.addField("Alignment", "Neutral Traveller", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player; if there were to be a lynch today, you may choose for that player to be immediately lynched. You may choose this during any point in the same day you used your ability.");

		e.addField("Attributes:", "- Your ability is a day ability.\n- You will be aligned with the Town or the REF at random.\n- You may only use this ability once per day.\n- This role cannot spawn naturally.\n- If there is a lynch and you targeted a player; the day lasts 12 more hours.\n- **Dark Times** (Passive): If you are lynched, the Town gains another 24 hours in the day phase, and may lynch again.\n- **Lost Hope** (Passive): If you are lynched as good traveler, every Town member is roleblocked tonight.\n- **Travelling** (Special Mechanic): If a player is not a spectator and wishes to join the game before Night 2, they may decide to join as the Outsider. Limit of 1 per game, and travelling may be denied at the hosts discretion.");

		e.addField("Goal:", "Enter the town and assist in the elimination of your opposition.");
	});

	register_role(["the_beggar", "thebeggar", "beggar", "3370"], "Neutral", "The Beggar", {subCat: "Traveller"}, (e) =>
	{
		e.setDescription("Post 3370");

		e.addField("Alignment", "Neutral Traveller", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You will be aligned with the Town or the REF at random.\n- This role cannot spawn naturally.\n- Dead players may vote as well when this is in game, as well as speak, use their abilities, have all attributes they would have, and register as alive for investigative results.\n- While this is in the game, dead players roles are not revealed.\n- If a dead player ever votes, you learn their role.\n- Majority is not affected by this. \n- **Dark Times** (Passive): If you are lynched, the Town gains another 24 hours in the day phase, and may lynch again.\n- **Lost Hope** (Passive): If you are lynched as good traveler, every Town member is roleblocked tonight.\n- **Travelling** (Special Mechanic): If a player is not a spectator and wishes to join the game before Night 2, they may decide to join as the Outsider. Limit of 1 per game, and travelling may be denied at the hosts discretion.");

		e.addField("Goal:", "Enter the town and assist in the elimination of your opposition.");
	});

	register_role(["musketeer", "3371"], "Linirean", "Musketeer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3371");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sniper Shot: An *Astral* Attack\n- Shrapnel Shot: A *Rampage* Attack");

		e.addField("Attributes:", "- You may only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["host_hates_me", "hosthatesme", "hhm", "3372"], "Town", "Host Hates Me", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3372");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Before starting the game, the host creates 3 new roles and you get to choose one of them to use the abilities of.\n- Whenever someone is lynched, you can't copy your current role's abilities anymore and must choose a new role that the host created to copy.\n- If there are no more roles for you to use the abilities of, the host creates 5 new roles and the cycle repeats.");

		e.addField("Attributes:", "- You may only use one ability per night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["william_afton", "williamafton", "william", "afton", "wa", "3373"], "Neutral", "William Afton", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3373\n*Lost to this monster. To the man behind the slaughter*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Murder someone.\n- Stuff a dead player into a robotic suit.");

		e.addField("Attributes:", "- You may only use your second ability on players you have killed.\n- Players you stuff into an animatronic suit will control an NPC named after one of the four respective FNAF 1 animatronics. (Freddy, Chica, Bonnie, Foxy)\n- Players you stuff into an animatronic will get the role Animatronic (3373.5).\n- Only a max of 4 animatronics may exist at a time. You can still kill people though.\n*\"FIVE NIGHT FREDERICKSON\"* - Bionic");

		e.addField("Goal:", "Kill all who oppose you, or stuff them into a robotic bear suit.");
	});

	register_role(["animatronic", "freddy", "bonnie", "chica", "foxy", "3373.5"], "Neutral", "Animatronic", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3373.5\n*This fuckin’ bear suit’s full of springlocks that could fail at any time. STAY SAFE!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Bite someone’s frontal lobe.\n- Initiate a springlock failure, killing yourself instantly.");

		e.addField("Attributes:", "- This role may not spawn naturally.\n- Everyone knows you’re an animatronic.\n- If William Afton (3373) dies, you die as well, and may not be brought back ever again.\n- You share a night chat with William Afton (3373).\n- You may target William Afton. Only some very specific scenario would you use this, but you can.\n- You have a three-use Basic scumshield.");

		e.addField("Goal:", "Ensure that William Afton wins the game.");
	});

	register_role(["townie", "3374"], "Town", "Townie", {subCat: "Town"}, (e) =>
	{
		e.setDescription("Post 3374\n*Deodat Lawson*");

		e.addField("Alignment", "Town Town", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate (35) someone.\n- Learn the names of a player's visitors tonight.\n- Check someone, you will learn if they are Suspicious.\n- Bug a player, learning all night feedback they recieved from other than their own role.\n- During the day, You may choose one person to jail for the night.\n- Execute the player you jailed, dealing them an Unstoppable attack. (3 uses)\n- Check someone, if they are a Conversion capable role, Conversion faction member or converted, deal a Basic attack to them.\n- Go on Alert, gaining Basic defense and dealing a Powerful attack to all your visitors.\n- Shoot a player with your gun. (3 uses)\n- Guard a player, if they are attacked, you will intercept the attack, causing yourself to die and dealing the attacker a Powerful attack.\n- Put on a Bulletproof vest, giving yourself basic defense. (1 use)\n- Heal someone, giving them Powerful defense.");

		e.addField("Abilities (cont.):", "- Protect someone, You will give them Powerful defense and deal a Basic attack to a random player visiting them.\n- Place a trap on someone, this will dismantle an active trap if one is placed.\n- Distract someone, roleblocking them.\n- Reveal yourself as the Mayor, your vote now counts as 3.\n- While dead, Seance with a Player during the day, Opening a chat with them at the start of the night, it will close at the end of the night.\n- Use an ability from a dead Town member, you may not use one from the same player twice.\n- Transport 2 Players.");

		e.addField("Attributes:", "- At the end of odd-numbered nights, you will recieve the name of 3 players, at least 1 of them doesnt win with Town.\n- At the end of even-numbered nights, you will recieve the name of 2 players, at least 1 of them wins with Town.\n- You will know who the Evil factions visit each night, Visits are separated by factions.\n- Conversion capable roles, Conversion faction members or converted players who visit you will be dealt a Basic attack and their visit will fail. \n- Roleblock Immunity.\n- If you shoot a Town member with your gun your next night action will be suiciding due to guilt.\n- You may not self-target.\n- You will know when a healed target is attacked.");

		e.addField("Attributes (cont.):", "- If a player with a trap is visited, the trap will trigger, telling you the role of every visitor.\n- If a player with a trap is attacked, the trap will trigger, attacking the attacker and granting your target Powerful defense.\n- You may have only 1 trap out at a time.\n- Roleblock Immunity.\n- You may not gain temporary defense from outside sources when revealed as the mayor.\n- You may privately talk with the dead.\n- Roleblock Immunity.\n- When transporting, Other players targeting your first target will secretly be redirected to your second. Other players targeting your second target will secretly be redirected to your first.\n- Your targets will know that they were transported.\n- Roleblock Immunity.");

		e.addField("Goal:", factions.Town.goal);
	});
  
	register_role(["gambling_mafioso", "gamblingmafioso", "gamblemafioso", "gm", "3375"], "Mafia", "Gambling Mafioso", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3375");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose any number of these abilities to perform at night. Each ability may only be used once:\n- Shoot someone at night.\n- Shoot someone at night.\n- Shoot someone at night.\n- Shoot someone at night.\n- Shoot someone at night.\n- Shoot someone at night.");

		e.addField("Attributes:", "- Mafia chat, factional mafia kill, can be ordered by GF.\n- If you shoot someone who doesn't die from the attack, no one is shot that night and you lose all abilities.\n- If you die or use all your abilities and everyone you shot was good, all players who you killed are revived.");

		e.addField("Goal:", factions.Mafia.goal);
	});
  
	register_role(["psychopath", "psycho", "3376"], "Town", "Psychopath", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3376");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a target to attack, and you clean your target.");

		e.addField("Attributes:", "- After killing a player, you can’t talk the next day.\n- You can't whisper to other people.\n- If you are jailed you kill whoever is jailing you.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["silent_knight", "silentknight", "knight", "sk", "3377"], "Neutral", "Silent Knight", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3377");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Slash someone with your sword.\n- Carol at someone’s house (Only useable in the month of December).");

		e.addField("Attributes:", "- Attacking someone BMs them if they survive, as you puncture their lungs with your sword.\n- Caroling at someone’s house will fill their heart with Christmas joy, and will be unable to kill for the next 2 nights. If they attempt to do so anyways, attack them along with your target.\n- You may not speak in day chat, but you may whisper to people as well as receive whispers. When it is December, you may only speak using lyrics from popular Christmas songs.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["blanc_sawyer", "blancsawyer", "blanc", "sawyer", "bs", "3378"], "City", "Blanc Sawyer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3378\n*\"A blank canvas is infinitely more beautiful than a messy one.\"*");

		e.addField("Alignment", "City Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Every night, you may choose to astrally visit another player and learn what roles visit them. You will learn up to 5 roles that visit your target");

		e.addField("Attributes:", "- You have a one-use Basic autovest.");

		e.addField("Goal:", factions.City.goal);
	});
  
	register_role(["alexander_wenston", "alexanderwenston", "alexander", "wenston", "aw", "3379"], "City", "Alexander Wenston", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3379\n*\"Perhaps we could discuss this in more detail privately...*\"");

		e.addField("Alignment", "City Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- If you have one, set up a laser at another player's house.");

		e.addField("Attributes:", "- If you do not have a laser set up, You will spend the night preparing one unless you are roleblocked.\n- Once you have a laser set up, you will learn who visits your target.\n- If someone tries to attack your target, you will astrally deal a powerful attack to your target's attacker, and grant your target powerful defense. However, the laser will break, removing the laser from your target.\n- You have a one-use Basic autovest.");

		e.addField("Goal:", factions.City.goal);
	});
  
	register_role(["clumsy_cop", "clumsycop", "cop", "cc", "3380"], "Town", "Clumsy Cop", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3380\n*Oopsie*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player, you will learn their role.");

		e.addField("Attributes:", "- Bypass Frames and other investigation modifiers.\n- The second time you learn the role of an Evil faction member you will be dealt a Overkill attack.\n- You may not keep a last will due to your dangerous job.");

		e.addField("Goal:", factions.Town.goal);
	});
  
	register_role(["sketcher", "3381"], "Neutral", "Sketcher", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3381");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Copy a change from <#1055913287952384031> to your role.");

		e.addField("Attributes:", "- If the change mentions abilities/attributes, you will get all that were mentioned.\n- If your attack value ever changes, you gain an attacking ability.");

		e.addField("Goal:", "See the good faction lose.");
	});
  
	register_role(["sketchey_sketcher", "sketcheysketcher", "sketchey", "sketcher", "sksk", "ss", "3382"], "Neutral", "Sketchey Sketcher", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3382");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Copy a change from <#1055914229024165969> to your role.");

		e.addField("Attributes:", "- If the change mentions abilities/attributes, you will get all that were mentioned.\n- If your attack value ever changes, you gain an attacking ability.\n- Upon winning the game, you may post a picture of grapes in <#1055914229024165969>. If you post anything other than grapes your win is revoked.");

		e.addField("Goal:", "See the good faction lose.");
	});

	register_role(["paradox", "3383"], "Neutral", "Paradox", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3383");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit your target. Any visits against them will fail, including your own!");

		e.addField("Attributes:", "- This role specifically ignores Rule 22. (?!)\n- You may not use your ability until Night 5. (!!)\n- Since this ability causes a paradox, cause your target to be converted into a role that should be “impossible” to exist (as determined by the host)!");

		e.addField("Goal:", "Create a paradox then survive until the end of the game.");
	});

	register_role(["jacob_flynn_stael", "jacobflynnstael", "jacob_stael", "jacobstael", "jacob", "flynn", "stael", "jfs", "3384"], "City", "Jacob Flynn Stael", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3384");

		e.addField("Alignment", "City Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may visit another player. You will learn 3 roles that they could be. Your target is not notified of this.");

		e.addField("Attributes:", "- You will get the same 3 roles from repeat visits unless your target is framed or their role changes.");

		e.addField("Goal:", factions.City.goal);
	});
 
	register_role(["magic_clone_2", "magicclone2", "magic_clone_two", "magicclonetwo", "magic_clone", "magicclone", "mc2", "mct", "3385"], "Coven", "Magic Clone 2", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3385\n*I cloned myself!*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone during the day to learn their ability to use at night.");

		e.addField("Attributes:", "- You can use your target's ability at night.\n- With the Necronomicon, any ability you learn will be permanent. You can't have 2 permanent copies of the same role.\n- With the Necronomicon, you will get an ability to deal a basic attack to 1 player.\n- With the Necronomicon, you can use all your permanent learned abilities at the same time every night.");
		
		e.addField("Goal:", factions.Coven.goal);
	});
  
	register_role(["ghost_of_christmas_past", "ghostofchristmaspast", "ghost_of_christmas", "ghostofchristmas", "christmas_ghost", "christmasghost", "christmas_past", "christmaspast", "gocp", "gcp", "3386"], "Town", "Ghost of Christmas Past", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3386\n*Read attributes first*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- While dead, choose a player at night to channel the Christmas Spirit through. The next day, your chosen player will be announced in chat.\n- The night after the announcement, the chosen player will stay at home and perform no action. If they live through that night, you will be revived.\n- At night while alive, choose any number of players. You will learn how many players in the chosen list are naughty (evil) and nice (good or non-evil).\n- Once per game, you may Judge. If all living players in your will are correctly identified as \"naughty\" or \"nice\" (you cannot use other words than these), you deal an overkill attack to all naughty players.");

		e.addField("Attributes:", "- You begin the game as a dead player (which is revealed to all players along with your role).\n- You cannot be the target of abilities while dead. (ie: Revived, reverse-seanced, used by necromancer)\n- If you are killed by an evil, you can no longer use your abilities while dead.\n- You can always have a will if it's disabled.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["coronavirus_beekeeper", "coronavirusbeekeeper", "covidbeekeeper", "coronavirus", "covid", "biohazardbeekeeper", "beekeeper", "cvbk", "cbk", "3387"], "Biohazard", "Coronavirus Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3387\n*It'll be over in a bzzzz.*");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to remove all negative effects from a player of your choice.\n- Use 2 bees to poison a player.\n- Use 3 bees to plague all players who visit or are visited by Biohazard members tonight.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- You are immune to poison.");

		e.addField("Goal:", factions.Biohazard.goal);
	});

	register_role(["disgraced_light_beekeeper", "disgracedlightbeekeeper", "disgraced_light", "disgracedlight", "fallenangelbeekeeper", "beekeeper", "dlbk", "3388"], "FallenAngel", "Disgraced Light Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3388\n*Mankind is dead. Blood is fuel. Hell is bzzzz.*");

		e.addField("Alignment", "Unique Fallen Angel Support", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Use 1 bee to attack the target of a player of your choice.\n- Use 2 bees to rampage attack a player.\n- Use 3 bees to use an ability of another Fallen Angel role of your choice, and it acts as if its Sin attribute was applied.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- If you attack a Fallen Angel, you will also attack all their visitors.\n- If you attack a non-Fallen Angel, you will also short-circuit them.\n**Sin of Bees** — If you're the last Fallen Angel remaining, you instead get 6 bees every night and may multitask.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});
  
	register_role(["tack_monkey", "tackmonkey", "tm", "3389"], "Monkey", "Tack Monkey", {subCat: "Primary"}, (e) =>
	{
		e.setDescription("Post 3389");

		e.addField("Alignment", "Monkey Primary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player; kill anybody who visits them or their neighbors.");

		e.addField("Attributes:", "- You may only choose one upgrade, outlined in bold. \n- Redirection immunity\n- Roleblock immunity\n- If you ever stay home, it will be treated as visiting yourself.\n- You may never kill yourself.\n**Ring of Fire** Unlock Condition: Kill three players.\n- You will now burn your target, roleblocking them and setting their defense to fragile.\n- Upon getting seven kills, you now attack their target and their alive neighbors. You skip monkeys.\n**Maelstrom** Unlock Condition: Kill a player you used your ability on that night.\n- You will now deal a basic attack to the player you used your ability on and their two alive neighbors in both directions.\n- Upon getting 7 kills, you now deal a powerful attack.\n- You skip over monkeys. ");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["boyfriend_fnf", "boyfriendfnf", "fnf_boyfriend", "fnfboyfriend", "boyfriend", "bffnf", "bfnf", "3390"], "Neutral", "Boyfriend", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3390\n*Beep*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful (Basic)", true);
		e.addField("Defense", "Basic", true);	

		e.addField("Abilities:", "- Select a target and an FNF song.");

		e.addField("Attributes:", "- Your target will be forced to play that FNF song. They have to send a screenshot of the completion of this song before the end of the night. They may alternatively submit a screen recording that will be sent to you. If they do and miss less than 15 notes, their protection will be upgraded to powerful.\n- If they missed 15 or more notes, deal a powerful attack to them.\n- If they miss less than 15 notes, grant them basic protection for the night.\n- If they do not submit a screenshot, then deal a rampage basic attack to them.\n- Your target is roleblocked for that night through immunities.\n- You receive the exact number of missed your target has once the night ends.");

		e.addField("Goal:", "Kill all who would oppose you, or prevent 5 deaths.");
	});

	register_role(["egg", "🥚", "3391"], "Neutral", "Egg", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3391\n*Better scramble like an egg before you get folded like an omelet.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- At night, choose a player to learn from them.");

		e.addField("Attributes:", "- The first night you are attacked, you will hatch and become a random role of your most recently learned from target. If you haven't learned yet, you become a random Neutral.");

		e.addField("Goal:", "Hatch and complete your new goal.");
	});

	register_role(["chaos", "3392"], "Neutral", "Chaos", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3392\n\"*Time to spin the Wheel of Chaos! Will our random target manage to survive all 5 spins, or will they die trying, let's find out!*\"");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- At night, choose a player. You will use random abilities on the target until either they die or you use 5 abilities. You know which abilities you used.");

		e.addField("Attributes:", "- You must use your ability every night.\n- You start with a Powerful autovest. Every time you use 5 abilities in 1 night, gain another Powerful autovest.");

		e.addField("Goal:", "Live to see the end of the game.");
	});

	register_role(["the_sassy_barista", "thesassybarista", "sassy_barista", "sassybarista", "sassy", "barista", "tsb", "sb", "3393"], "Town", "The Sassy Barista", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3393");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Offer sarcastic comments to one player, roleblocking them.\n- Do an eye roll during the day. Once you do this, the host MUST show why the argument is flawed, if at all. They may reveal information leaked in private channels in order to do so.\n- Serve somebody piping hot coffee, burning them, setting their defense to Fragile and attacking them with a Basic attack.");

		e.addField("Attributes:", "- You serve everybody who visits you piping hot coffee.\n- You may not be roleblocked.\n- You may never multitask, even if another ability says you can. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["charades", "3394"], "Town", "Charades", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3394\n*I think has been done before*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you can use one ability from any non-unique Wiki Mafia town role, but you can’t tell your host which one through words or emojis.\n- You must draw a visual depiction of what you want to do. You may not include words in your drawing.\n- The host interprets the drawing and you perform the interpreted action.\n- You can’t communicate to the host of your intentions in other ways. (ie: “if I draw a cowboy hat it means I’m targeting sheriff” as a whisper or in day chat)\n- Your host can ask you up to one question per night about either the action or targets. You may answer with a sentence.");

		e.addField("Attributes:", "- Attributes from your chosen role are copied over. (ie: kill self on failed Vigilante shot, roleblock immunity for Escort)");

		e.addField("Goal:", factions.Town.goal);
	});
  
	register_role(["whalekeeper", ":w:w:w:", ":whalegun:", "wk", "3395"], "Town", "Whalekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3395\n*whale noises*");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/1057710710689386518.webp?size=96&quality=lossless";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one whale and select three targets, and learn how many of them are evil.\n- Use two whales to deal a Basic attack to a target. You can use one extra whale to make this attack Unstoppable and prevention immune.\n- Use three whales to create a massive whirlpool. Select three targets, and each of them will be redirected to themselves. If you use this ability twice in the same night, all evil players will be redirected to themselves. ");

		e.addField("Attributes:", "- You will earn whales at the start of each even night. The amount of whales you earn is equal to half of the number of which night it's currently.\n- You can use any of your abilities multiple times, but you can only use 2 abilities total each night.\n- You have redirect immunity.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["v1", "3396"], "Neutral", "V1", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3396");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- **Feedbacker Arm** — Deal a Basic attack to all of your visitors. You will parry any attackers of a tier lower than Unstoppable you attack this way, preventing the attack and dealing it back at them, but it rampages.\n- **Knuckleblaster Arm** — Deal a Powerful attack to all your visitors. You will roleblock any attackers you attack this way. (*1 night cooldown*)\n- **Whiplash Arm** — Move yourself directly below or above a player on the playerlist, or move them directly below or above you.\n- **Piercer Revolver** — Deal an Astral Powerful attack to a player. If you didn't use this ability last night, you may deal an Astral Unstoppable attack to them and their target instead.\n- **Marksman Revolver** — Deal an Astral Basic attack to a player. You may also shoot a coin, which will redirect each Astral attack to the two targets that most benefit you. This duplicates the attack. You only have four coins.");

		e.addField("Abilities (cont.):", "- **Core Eject Shotgun** — Deal a rampaging Powerful attack to a player. If you didn't use this ability for three nights, you may instead shoot a grenade at a player, dealing an Unstoppable attack to them and their closest living neighbours that also hits an additional set of those neighbours' neighbours and so on for each other attack that the first target was dealt. (*2 night cooldown*)\n- **Pump Charge Shotgun** — Deal a rampaging Basic attack to a player. If you didn't use this ability last night, you may instead deal a rampaging Powerful attack; if you didn't use it for two nights, you may instead deal a rampaging Powerful-And-A-Half attack; and if you didn't use it for three nights, you may instead deal an Unstoppable attack to yourself and your closest living neighbours. (*1 night cooldown*)");

		e.addField("Abilities (moar.):", "- **Attractor Nailgun** — Fire three silver nails. Each does a Basic attack to a random player other than yourself, with the attacks increasing in tier if multiple hit the same player. You may also first shoot a magnet at a player, causing all nails to hit them tonight. If that player dies tonight, each nail also hits a random one of their visitors. You only have three magnets and ten silver nails.\n- **Overheat Nailgun** — Fire two nails. You may instead fire four overheated nails, which deal Unstoppable attacks, but only if you've fired three or more normal nails since the last time you fired overheated nails. You only have eight overheated nails.\n- **Electric Railcannon** — Deal an Astral Overkill attack to a player, their target, and their target's target. (*3 night cooldown, during which you also can't use other Railcannons*)");

		e.addField("Abilities (stop.):", "- **Screwdriver Railcannon** — Deal an Overkill attack to a player. You will also deal an Unstoppable attack to them the next night, even if they're dead.\n- **Malicious Railcannon** — Deal an Overkill attack to a player and their closest living neighbours. If this hits the same player as the Core Eject Shotgun's grenade, it counts for three attacks (attacking your target's neighbours and their neighbours' neighbours three times over).");

		e.addField("Attributes:", "- You may self-target.\n- You may multitask, but you can't use different variants of the same weapon (like both Nailguns or multiple Arms) at once.\n- You recover a point of Hellbent damage for each tier of each attack you deal.\n- You take an additional Hellbent damage for each tier of each attack you're hit with. This damage can't be recovered until a night after it's dealt.\n- All \"If you didn't use this last night / for X nights\" conditions apply on Night 1.");

		e.addField("Goal:", "NK goal + get at least 2000 style points.");
	});

	register_role(["agitation", "3397"], "Town", "Agitation", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3397\n*Who's there?! Ah, just a twig. Never mind then.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone at night. You will learn their exact role.");

		e.addField("Attributes:", "- During the day, if all players don't speak for three hours or more, immediately investigate the first player to break the silence. The investigation is random from the following:\n> (6) Investicreator\n> (35) Investigator\n> (37) Investiletter\n> (948) Sheriff\n> (1776) Crayon Kid\n> (1802) ToL Princess\n> (1934) The Sniffer [Plants are only for investigative purposes]\n- You may only investigate two people each day.\n- You may only use your ability at night if your first attribute did not trigger the previous day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["recap_of_gim_2022", "recapofgim2022", "recap_of_gim", "recapofgim", "gim_recap", "gimrecap", "2022_recap", "2022recap", "recap_of_2022", "recapof2022", "rog2022", "rog2", "rogttt", "rog", "3398"], "Neutral", "Recap of GIM 2022", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3398\n*\"GIM is good\" mfs when Recap of GIM 2022 spawns*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Start a subgame the next day in which dead players are not players. This can only be done on N3, N6, etc.\n- Kill as many players as you have charges. All of the kills must neighbor each other, and dead people count as neighbors for this ability.\n- Choose 2 players. If the first player is a town member, deal an Overkill attack to them to deal an Unstoppable attack to the second. If your first target was the Town Power, both kills are Overkill and you can't be killed tonight.\n- Split the game in half, with both sides having an equal amount of players. This counts both living and dead players. 1 use.\n- Choose 2 players. Roleblock them and all their visitors, then deal a basic attack to everyone you roleblocked.\n- Give someone a new attribute.\n- Choose someone during the day to learn one of their abilities. You may use that ability tonight. 1 use.");

		e.addField("Abilities (cont.):", "- Roleblock up to three players, then coldsnap. 1 use. Only usable starting N3.\n- During the day, authorize 1/3 of living players. Only those players can be targeted tonight. 1 use.\n- During the night, choose 2 players. They will be forced into a game of Guess Who tomorrow (2547 for details).\n- If only 4 players remain, you may convert someone into a Locust (Post 40).");

		e.addField("Attributes:", "- The first person to refer to your role as anything other than \"Recap of GIM 2022\" is banned.\n- At the start of the game, gain the attributes and abilities of a random negative numbered \"I Hate Game X\" role.\n- You may use 2 abilities per night, but only one can kill.\n- Losers of the subgame are all dealt a Basic attack.\n- Each night, gain a charge for your second ability.\n- Once half the players are dead, gain 3 random town roles from different subalignments.");

		e.addField("Goal:", "Live to the end of the game to trap everyone in GIM forever **or** send 1/3 of the players to hell by killing them.");
	});

	register_role(["small_room_attendant", "smallroomattendant", "small_room", "smallroom", "room_attendant", "roomattendant", "sra", "mafiainterviews", "3399"], "Mafia", "Small Room Attendant", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3399\n\"*So what can you provide for the Mafia?*\"\n\"*Well... I have access to a small room?*\"");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each full moon night, select up to eight people to force into a small room. Any of their abilities targeting people outside of the small box will fail.");

		e.addField("Attributes:", "- You may self-target.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["amplifier_wielder", "amplifierwielder", "amplifier", "aw", "mafiainterviews", "3400"], "Mafia", "Amplifier Wielder", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3400\n\"*So what can you provide for the Mafia?*\"\n\"*So I have this really distracting amplifier-*\"");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wield your amplifier during the night, roleblocking the two people who have the most messages in the previous day chat. \n- Once per game, you may wield your amplifier accurately, roleblocking two players of your choice. ");

		e.addField("Attributes:", "- Roleblock immunity.");

		e.addField("Goal:", factions.Mafia.goal);
	});
};
