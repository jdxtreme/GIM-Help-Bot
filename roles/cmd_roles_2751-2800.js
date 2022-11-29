//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["lunarcultbeekeeper", "lunarbeekeeper", "umbrabeekeeper", "beekeeper", "lcbk", "2751"], "Umbrae", "Lunar Cult Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2751\n*The full bzzzz, it calls you.*");

		e.addField("Alignment", "Umbra Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to prevent a player from visiting their first target tonight.\n- Use 2 bees to suspend all abilities used on a player tonight and choose a number 1-3. Abilities suspended this way will resolve after that many nights. You learn all abilities suspended this way.\n- Use 3 bees to permanently remove a player from the game. ‎");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- On Full Moon nights, you learn your targets' roles.\n- On Blood Moon nights, you may use one ability without paying its bee cost.‎");

		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["silverthornbeekeeper", "silverthorn", "silverbeekeeper", "palemoonbeekeeper", "beekeeper", "stbk", "2752"], "PaleMoon", "Silver Thorn Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2752\n*Go forth, Bzzzz Serpents!*");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to transport two Pale Moon members.\n- Use 2 bees to redirect all non-Pale Moon abilities used on up to three players to yourself tonight.\n- Use 3 bees to cause a player to deal a Powerful attack to their first target in addition to their ability's effect tonight.‎");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- Once the PMCS begins, you gain 3 bees immediately and an additional bee every night for the rest of the game.‎");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["darksidebeekeeper", "darkbeekeeper", "sithbeekeeper", "beekeeper", "dsbk", "2753"], "Sith", "Dark Side Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2753\n*Peace is a lie. There is only bzzzz*");

		e.addField("Alignment", "Sith Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to roleblock a player tonight. You will learn who they would have visited.\n- Use 2 bees to remove all non-Sith players' conversion immunity tonight. Sith Commanding abilities can convert players with any roles tonight.\n- Use 3 bees to make the factional kill instead convert a player to the Sith tonight.‎");

		e.addField("Attributes:", "‎- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["psychosiskami", "psychosis", "kami", "2754"], "Neutral", "Psychosis Kami", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2754\n*Peoples' roles just come to me. Sometimes I don't know if it's them or me rolling.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "`+2`: Choose a player. You learn the ability they're using tonight. You may choose to prevent that ability.\n`0`: Choose three players. You learn each of their roles, then you may choose an ability from among those roles to gain one use of.\n`-1`: Choose a player. Prevent their ability tonight and temporarily remove them from the game. One of their faction members can spend a night to return them to the game.\n`-12`: Permanently remove all Town players from the game.‎");

		e.addField("Attributes:", "**Divine Power** — You start with 7 power. When you use an ability, add or subtract power according to the ability. You may not use abilities that cost more power than you have. If you would be attacked, instead the attacker learns that your Defense was too strong and you lose power equal to the level of the attack— Basic: 1, Powerful: 2, Unstoppable: 3, Overkill+: 4. You still die if you're lynched.\n- You have roleblock, redirect, conversion and detection immunity.‎");

		e.addField("Goal:", "See the Town lose.");
	});

	register_role(["slovenia", "sl", "🇸🇮", "2755"], "Civilization", "Slovenia", {subCat: "Scientific"}, (e) =>
	{
		e.setDescription("Post 2755\n*“Even though the bee is small, there she is on the flower, doing something of value. And the value she creates there contributes to a larger ecosystem of value, in that mountain meadow, in that range of mountains, in the world and even the universe. And can’t you just feel how happy she is?” - Jay Ebben, Painted Hives*");

		e.addField("Alignment", "Civilization Scientific", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use 1 bee to ski down someone's house, redirecting them to their neighbor with the lower post number. You will know which this is.\n- Use 2 bees to protect someone, granting them Powerful defense and Lynch immunity for this night and the next day.\n- Use 3 bees to sting all visitors to someone, poisoning them. This attack is considered a Powerful attack.\n- Purchase a bee. (Costs 3 Gold)");

		e.addField("Attributes:", "‎- You will earn 1 bee every night.\n- You can use 2 abilities per night.\n- You may hold up to 3 bees. If you are holding 3 and do not use any, you will instead generate 3 Gold.");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["gamebug", "bug", "2756"], "Neutral", "Game Bug", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2756\n`DATA NOT FOUND`");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "XXXXX (XXXXXXX)", true);
		e.addField("Defense", "\"Glitched\"", true);

		e.addField("Abilities:", "- Fill an X amount of “X”s with a letter or number.\n- Mass glitch X amount of townies. (1 use)\n- Attack a player.‎");

		e.addField("Attributes:", "-Match glitching causes (XXXXXXXXXXXXXXXXXXXXXXX) to happen to what “X” is set to in your second ability.\n- You start off by filling only 1 “X” a night, unless you alter the amount\n- You may not alter any “X”s in quotation marks.\n- Any “X”s in parentheses are optional to edit.\n- Spaces fill up an “X”.\n- A special character counts as an X.\n- You can be voted, but if you are hung, it will instead lynch a random player.\n- You bug out attackers, causing them to reroll their role into a role from the same faction and their attack will fail.\n- Your mass glitch cannot mass kill. If you attempt to make it, you’re immediately modkilled, even if you meant it as a joke. This cannot and will not be stopped. So don’t‎.");

		e.addField("Goal:", "Cause X faction(s) to lose by wiping out 3 of their members.");
	});

	register_role(["astronomer", "2757"], "Town", "Astronomer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2757\n*Thunderbolts and lightning, very, very frightening!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Study the constellations at night to figure out the distance between a number of players' roles.‎");

		e.addField("Attributes:", "- Choose a constellation from the following list each night and a number of players equal to the number of stars in that constellation. You will learn the order of those players' post numbers from least to greatest as well as one number that is in between the post numbers of all pairs of consecutively-ordered players.\n> - Canis Minor: 2\n> - Coma Berenices: 3\n> - Crux: 4\n> - Cassiopeia: 5\n- You will receive your results (X-1) night(s) after you perform your night ability, where X is the number of stars in the constellation you studied that night.\n- Roleblock immune. Your ability does not count as a visit towards your targets - you effectively stay home.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["oneselfishasshole", "selfishasshole", "asshole", "2758"], "Neutral", "One Selfish Asshole", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2758\n*Hey, my name’s Kyle, and I’m a narcissistic piece of shit*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Overprotective)", true);

		e.addField("Abilities:", "- Steal someone’s ability, as every good thing should only happen to you.\n- Put someone down at night, granting you powerful defense for the night and roleblock them.‎");

		e.addField("Attributes:", "- You can’t take abilities that copy other abilities, or kill, because you’re a narcissist, not a murderer.\n- If a person only has the ability to kill, learn their role instead. Cannot be fooled by frames hexes douses and other sorts of investigative changes.\n- The town will receive an announcement on day 5 that “Some fucktard is shouting that he’s the king”.\n- On day 5 you will receive death immunity.\n- Town has 3 days to win before your ego grows too much, allowing you to overpower anyone with your pointless stories about how great you are.\n- The only way for you to lose is if at least 3 town members visit you .\n- All evils will be notified of who you are, and if you die half of them lose and die because they’re your homies who put you up.‎");

		e.addField("Goal:", "Make town lose because they hate you even though you did *nothing* wrong.");
	});

	register_role(["rokkandoct2", "rokk", "oct2", "2759"], "Neutral", "Rokk and Oct2", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2759");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At any time, win. You win.");

		e.addField("Attributes:", "‎- This is usable outside of GIM, but only 50% of the time because Oct2 is only 50% of this.");

		e.addField("Goal:", "Win.");
	});

	register_role(["factionalkillgiver", "factionalkiller", "killgiver", "fkg", "2760"], "Neutral", "Factional Kill Giver", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2760");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Perform a Factional Kill for a faction.");

		e.addField("Attributes:", "‎- This role may only spawn in the presence of factions without a factional kill.\n- Your Factional Kill will be accredited to a faction in the game that does not have a factional kill. If you attack a member of one of these factions, you will join their chat and your win condition will be changed to theirs.\n- Roles that see factional visits (e.g. 62 Spy) will see your visit as a visit of the faction to which your kill is accredited. ");

		e.addField("Goal:", "See the Town lose the game. You may win while dead.");
	});

	register_role(["game5butunbalanced", "gamefivebutunbalanced", "game5", "gamefive", "1482u", "2761"], "Unseen", "Game 5 But Unbalanced", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2761\nConverted from: Game 5 But Balanced (1482)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Create a factional chat. Except instead of a chat, you send an anonymous message to all town. You may include your name. Triggers instantly on use, you can use it once each day and twice each night.\n- Use the Town FMK. Except, instead of an FMK, at the beginning of each night, you may choose to have all town players anonymously vote to kill someone. These votes, however, do absolutely nothing and you decide who you kill.\n- Choose three marked players during the day. At night, you will learn who they target.");

		e.addField("Attributes:", "- \"Town\" refers to Town roles, while \"town\" refers to people you have marked as such. All players except yourself start as being marked as town, and at any time, regardless of the circumstances, you may unmark or remark any player as town, except yourself.\n- You may multitask.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["cauldron", "1380u", "2762"], "Unseen", "Cauldron", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2762\nConverted from: Pot (1380)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Learn how many sentences a player's role's post/website has. If they're a kettle (over 15 sentences), you'll learn the name of their role.");

		e.addField("Attributes:", "- Anyone who visits a member of the Unseen will have a copy of their ability stirred into a factional cauldron. Any Unseen member may instead replace their nightly ability with one from there, however abilities in the cauldron are one-use.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["serpent", "1320u", "2763"], "Unseen", "Serpent", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2763\nConverted from: Good Snake (1320)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, slither outside someone's house. They and all visitors to them will be scared of you and walk back to their own house. In other words, they will be forced to visit themselves. They will not know they were scared.\n- Bite a player. They will be poisoned (Basic attack) and have their ability nullified for this night and the next night, but they will not be notified. They will die at the end of the next night unless healed, and the cause of death with be identical to having Vulnerable defense. You may use this twice, but must wait a night in between uses.‎");

		e.addField("Attributes:", "- Slithering outside someone's house is Astral, since you're keeping your distance and technically aren't coming inside.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["furrykeeper", "furry", "1950u", "2764"], "Unseen", "Furry Keeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2764\n*Don't ask where I got them.*\nConverted from: Animal Keeper (1950)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an animal every night, except it's actually just a furry and it does different things depending on the subalignment of your target.‎");

		e.addField("Attributes:", "- You will know what your furry did. (You know, you could've just included 'what the furry does' in these otherwise barren attributes. smh.)‎");

		e.addField("What the Furry Does:", "‎(Killing/Assault/Keter/Single/Entity): If your target attacked someone, they will see their target's defense was too strong to kill. They will actually be roleblocked through immunities, and any attack they performed (even if delayed) will fail.\n(Investigative/Investigator/Informant/Investigating): If your target relies on getting someone's role, they will see their target as a (2285) Furry. Otherwise, they will receive no feedback and they cannot perform any abilities that day.\n(Protective/Protection/Bouncer/Defensive/Protector): Their target receives Vulnerable defense that night instead of what they would normally receive.\n(Support/Militaristic/Euclid/Communication/Supportive): Their attributes are nullified for this night and the next day/night cycle.\n(Power/Head/Legendary/AAAAAAAA/Hero): They are converted into a random Neutral non-Killing role.\n(Deception/Saboteur/Sabotage): Their target is informed exactly of what happened to them.");

		e.addField("What the Furry Does (cont.):", "‎(Town/Green): They become a random Town role.\n(Mafia/Red): They become a random Mafia role.\n(Coven): They become a random Coven role.\n(Benign/White): Their role is publicly revealed, similar to (52) Mayor.\n(Blue): They become a random Serial Killer. This can be any role with Serial Killer in the name.\n(Evil/Beta/All-Rounder/Black): You learn their exact role.\n(Production/Economic): Your target will not generate any currency for their faction.");

		e.addField("What the Furry Does (moar.):", "(Offensive): Their target will become undoused, the node they target cannot be hacked for two nights, and if they attack someone they will be roleblocked through immunity.\n(Commanding/Commander/Object): Your target loses communication with their faction for two days and two nights.\n(Onslaught): All existing strikes fade.\n(Chaos/Chaotic/Casual): Instead of their normal target, they will use their ability on three random targets. This will never target an Unseen.\n(Base/Evolved): If evolved, they will revert back into their Base form and all evolution progress is reset.\n(Operation): Their faction will not gain points from their abilities for this night and the next.\n(Algebraic/Religious/Scientific): Their paid abilities cost 5 more permanently.\n(Geometric/of the Sun/Special): Modkill them because I hate them. (how cruel)\n(King): Their abilities with cooldowns gain an extra night of cooldown until the next usage.‎");

		e.addField("What the Furry Does (why.):", "(Sexyman): All seduced targets are released from their seduction.\n‎(Nutrition/Other): They will instead use one of their other abilities on their target at random.\n(Woodwind/Brass/Percussion/String/Digital/Vocal): The concert starts one day later.\n(Sin/Command/Field Operations): Lose all uses of their limited-use abilities. \n(Fire/Air/Water/Earth/Dark/Light): Unlocked abilities become locked for two days and two nights.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["whale", "🐳", "🐋", "wales", "2765"], "Neutral", "🐳", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2765\n*Y'all are gonna have a whale of a time.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 🐳 someone, giving them Powerful defense from all their blubber.‎");

		e.addField("Attributes:", "- You may reroll this role for free.\n- Anyone who kills you is modkilled and is banned because killing whales is illegal. This means if you are lynched, everyone who voted guilty is modkilled and banned.‎");

		e.addField("Goal:", "React to every message in all day chats with 🐳.");
	});

	register_role(["theend", "end", "2695u", "2766"], "Unseen", "The End", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2766\nConverted from: Finale (2695)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player. | Locked 1: Attack now Rampages, and you may stay home to rampage all attackers. If you are jailed, you will Rampage the Jailor. |\n- Guard a player, giving them Powerful defense. | Locked 2: If your target is attacked, kill all visitors. You also grant your target roleblock and redirect immunity. |\n- Investigate (35) a player. | Locked 3: Learn your target's exact role, through immunities, and who they visited. All Unseen will learn your result. |‎");

		e.addField("Attributes:", "‎- [Each of your abilities has a two-night cooldown.]\n- You have three lives. Each time you would die, you lose a life instead. If you lose all three lives and die, all Unseen members die immediately.\n- Unlock Condition 1: Hit someone naturally immune to your attack, or have your attack otherwise fail twice.\n- Unlock Condition 2: Successfully protect the Mastermind or Assassin.\n- Unlock Condition 3: Receive a result that is not what your target's true role is.\n- | Locked 4: You may multitask. Your defense is raised to Powerful. You are permanently Cleaved, removing text in []. |\n- Unlock Condition 4: Unlock all conditions 1-3.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["candlemaker", "candle", "2767"], "Town", "Candlemaker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2767");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Light someone’s home at night");

		e.addField("Attributes:", "‎- You will learn if something happens to your target, such as if they’re transported, attacked, poisoned, and other things.\n- You will not learn if your target is doused, blackmailed, roleblocked, bugged, or converted. Generally anything that can’t be physically seen will not be learned.\n- Your visit always happens last. You will always visit your target after everyone else has left. This essentially means you would avoid a werewolf rampage because they’re gone, but would still die to veteran, Medusa, and  crusader if you were the only visit on them. Generally if the role attacks visitors but stays home, you will die to it. If it attacks visitors but at another player’s house, you will avoid it unless it is a role the host would consider to stay all night if they have to.\n- If your target is transported, you will learn so, and everything that happens to the person who your target was transported with.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["pyromancer", "pyro", "2505u", "2768"], "Unseen", "Pyromancer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2768\nConverted from: Firebender (2505)");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blast a player with flames, attacking them.\n- Create a ring of fire around a target, roleblocking and attacking anyone who visits them. (2 uses)‎");

		e.addField("Attributes:", "- Players you kill are incinerated, hiding their role and will from the public. You will learn what their role is, but not their will. The effect is permanent. ‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["organmodifier", "organs", "organ", "2769"], "Neutral", "Organ Modifier", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2769\n*modifies your organs*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Modify a player's organs at night, permanently applying one of the following effects to them:\n> - Brain: Converted to Neutral Evil with the goal \"Live to see the Town lose.\"\n> - Heart: Dealt an Unstoppable attack\n> - Lungs: Roleblocked\n> - Stomach: Short circuited\n> - Skin: Defense set to Vulnerable\n> - Genitals: Unable to use abilities that would add new players to the game");

		e.addField("Attributes:", "- You may only choose each organ twice, except Brain, which you may only choose once. ‎");

		e.addField("Goal:", "See the Town lose.");
	});

	register_role(["dictator", "2770"], "Town", "Dictator", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2770");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Mark someone for immediate public execution. The target you vote will be the one to be lynched, not the one who received voting majority. Infinite uses, but you die if you execute a Townie, as you will be overthrown for incompetence.\n- At night, you may declare martial law, which lasts for the rest of the game. You gain a Basic Attack, Basic defense, and deal an Unstoppable attack to your attacker the first time you are attacked. However, all public executions will be canceled, meaning nobody (including you) can vote during the day once martial law has been declared.\n- At night, send an agent to dispose of a target, dealing an Astral Basic attack. Only works once martial law has been declared. Infinite uses, but this ability is locked if you kill a Townie.‎");

		e.addField("Attributes:", "- With your first ability, your vote is still public, but the reason why your target was lynched instead is not revealed.\n- All players receive an announcement when martial law has been declared.\n- Your Unstoppable attack retaliation can only trigger on a single attack, but that attacker's attack will fail.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["amazondeliveryperson", "amazondelivery", "deliveryperson", "amazon", "2771"], "Town", "Amazon Deliveryperson", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2771\n*You would not \*believe\* how many people order same day delivery minutes before midnight.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deliver a package to a player each night, healing and protecting them with Powerful defence for the night. [0 uses] ‎");

		e.addField("Attributes:", "- You're given one package at the start of each night.\n- You may deliver multiple packages each night.\n- Once a game, you may steal one of the packages and use it on yourself. Doing so will additionally remove all negative effects from you.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["oleanderarchwitchofinfection", "oleander", "archwitch", "witchofinfection", "archwitchofinfection", "2772"], "Coven", "Oleander, Archwitch of Infection", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2772");

		e.addField("Alignment", "Coven Power", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- Bleed (Day): Curse a player, instantly bleeding them. They die in 2 days and become susceptible to infection due to their open wounds.\n- Poison (Night): Cast a spell of poison at a player. They will die in two nights.\n- Plagued Infection (Night, Necronomicon only): Plague all players who are susceptible to infection. Non-original targets die the next night and spread the plague to their visitors, their target, their target's visitors, and everyone who votes them the next day. Original targets die when the bleeding kills them.");

		e.addField("Attributes:", "‎- Astral.\n- Targets can differentiate between all of your attacks. They will know if they were poisoned, bled, or plagued.\n- Poison and bleeding are curable, plague is not.\n- With the Necronomicon, gain Unstoppable attack, Basic defense, and Poisoned targets who are healed now become susceptible to infection.\n- You cannot spawn with Coven Head roles and the Coven Leader. You count as Coven Head for their spawning purposes.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["strictboss", "strict", "boss", "2773"], "Mafia", "Strict Boss", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2773");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Whip a member of the Mafia into shape each night, raising their attack and defense values by a stage and making their ability prevention immune.");

		e.addField("Attributes:", "- Whenever a non-Mafia player angleshoots, attack them immediately.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["terramancer", "terra", "2506u", "2774"], "Unseen", "Terramancer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2774\nConverted from: Earthbender (2506)");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Twist the ground surrounding two different players, granting them both Powerful defense.\n- Stomp on the ground, creating a massive earthquake around a player's house. Anyone who visits this target will be swallowed in earth, blackmailing them and preventing them from using abilities until someone visits them. (3 uses)");

		e.addField("Attributes:", "- You are capable of self-targeting.\n- If you use your earthquake, you may target as many people as you have uses left. Any uses you use that night will be refunded if you do not swallow anyone.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["aeromancer", "aero", "2508u", "2775"], "Unseen", "Aeromancer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2775\nConverted from: Airbender (2508)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Visit a player each night and learn how many times they've been visited throughout the game. This processes at the end of each night, after other night abilities. Additionally, anyone who visited them that night will receive no feedback.\n- Alter the wind around four players. Transport all of them randomly. (2 uses)");

		e.addField("Attributes:", "- You are astral have roleblock and prevention immunity.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["hydromancer", "hydro", "2504u", "2776"], "Unseen", "Hydromancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2776");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Heal the wounds of a player tonight, simply healing them like a Doctor. You can self-target with this ability. \n- Split the town with a violent, roaring river. Select two positions in the player list, between the players themselves. Anyone between those two points and anyone outside, including dead players, will be separated into two different games starting the next morning. It's similar to Dimensional Mage, but you can choose between which houses the river runs.");

		e.addField("Attributes:", "- The river will last three days before it runs dry, and the games will be remerged.\n- You will phase through everyone who visits you on the first three nights. Anyone who you phase through will get a standard \"ability failed\" message.\n- Unseens are immune to the river.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["notritualleader", "nrl", "1684u", "2777"], "Unseen", "Not Ritual Leader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2777\nConverted from: Not Ritualist (1684)");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ritual (Day): Select a player to sacrifice, If they are pure-blooded (NB, Town, NC that can win with Town) they will die at the beginning of the night unless another day-targetter visits them.\n- Summoning (Night): If the day ability was performed successfully, kill a target with an unstoppable attack.‎");

		e.addField("Attributes:", "‎- Redirect, Control, Roleblock immune.\n- You have infinite uses. See? It's not Ritual Leader. Definitely.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["mirrorcannon", "aliteralmirrorcannon", "2182u", "2778"], "Unseen", "Mirror Cannon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2778\nConverted from: A Literal Glass Cannon (2182)");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Fragile", true);

		e.addField("Abilities:", "- During the day, BLAST THE FUCKING SHIT OUT OF SOMEONE, immediately dealing an Overkill attack to them right there and then.\n- During the night, BLAST THE FUCKING SHIT OUT OF SOMEONE'S HOUSE, immediately dealing an Overkill attack to them and whoever intended on visiting them right there and then.‎");

		e.addField("Attributes:", "- If you are visited by someone, you will die. However, you will also shatter on anyone who visits you, dealing an Overkill attack to them.\n- If you are jailed, you will immediately die and kill the Jailor.\n- It takes one-third the majority of votes to lynch you. You will shatter over the last person to vote you in this case, and that will count as the daily lynch.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["remotejailor", "jailor", "rj", "2779"], "Town", "Remote Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2779\n*Uh, Grandma? That crossed-out speaker means the TV's muted. You have to turn the volume up.*");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- During the day, choose another player to jail.\n- Give your remote or move it to another player at night. If a player doesn't have your remote, you must give it out.");

		e.addField("Attributes:", "- The player with your remote can send messages to your target, and your target can send messages to you. To your target, it appears like a normal Jailor.\n- Your target will be unable to communicate in any private chats they may have for the night.\n- While jailed, targets are roleblocked through immunities, gain Powerful defense, and all other abilities used against them will fail. Indirect effects may still apply.\n- The player with your remote may, in addition to their night action, execute your target, dealing an Unstoppable attack to them even if they lose the remote that night. If they execute a Town member this way, they may no longer execute, but others may. Only three players may be executed total.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["deepslategolem", "deepslate", "golem", "2271u", "2780"], "Unseen", "Deepslate Golem", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 2780\nConverted from: Tuff Golem (2271)");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Come alive and scare everyone who visited you. You will roleblock them and collect a use of all abilities that were used on you that night.\n- Visit someone and scare all visitors to them. You will roleblock the visitors and collect a use of all abilities that were used on your target that night. (2 uses)\n- During the day, distribute collected abilities among Unseen members. They may use them alongside their normal ability.");

		e.addField("Attributes:", "‎- If you do not use any abilities, you will be stone. Anything negative will not be able to affect you for that night and the next day. This includes death, roleblocks, etc. However, you cannot speak (including in factional chats) or vote that day, though you may react using Discord's reaction feature. You will learn all visitors.\n- You will learn if you scare a player but they aren't roleblocked because of roleblock immunity or something similar. ");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["botanist", "2230u", "2781"], "Unseen", "Botanist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2781\nConverted from: Gardener (2230)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a plant to grow each day.\n- Choose a plant to use each night.‎");

		e.addField("Attributes:", "- When you grow a plant, you will be able to use one of its abilities until the end of the next night. If it has a day ability, you may use it the same day you choose to grow it.\n- You may grow plants of any Florae or Plant role. You may only grow one plant of the subalignment (Killing).\n- You have a private reserve of Sun that you keep to use the Plants' paid abilities. You will naturally produce 1 Sun per day.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["2dash2", "2hyphen2", "0", "literallyanythingotherthan2-2", "2688u", "2782"], "Unseen", "2-2", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2782");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two players and swap their roles.\n- Select a player and change their role to one of the same alignment and subalignment.\n- Select a player and change their role into a completely random role. ‎");

		e.addField("Attributes:", "- You can't self target.\n- Your targets are **not** told why their role was changed.\n- Your ability is stopped by conversion immunity.\n- You don't know the outcome of your ability, or if it fails or succeeds.\n- If you switch an Unseen with a Town, the initial Unseen will become the Unseen version of the role, and the initial Town will become the Town version of the role. You may not target the Mastermind or Assassin.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["randomadjective", "adjectivegenerator", "2783"], "Random", "Random Adjective", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2783\n*Panicky.*");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone a random adjective each night.‎");

		e.addField("Attributes:", "- At the start of each day, generate a random adjective at https://randomwordgenerator.com/adjective.php. The target of your ability the following night permanently becomes that attribute, which is a status effect that the host comes up with and tells you as the adjective is generated.‎");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["randomnoun", "noungenerator", "2784"], "Random", "Random Noun", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2784\n*Relationship.*");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Give someone a random noun each night.");

		e.addField("Attributes:", "- At the start of each day, generate a random noun at https://randomwordgenerator.com/noun.php. The target of your ability the following night gets that noun, which is an item that the host comes up with and tells you as the noun is generated.‎");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["rotatingjohnwillardcube", "johnwillardcube", "rotatingcube", "johnwillard", "rjwc", "2784"], "Neutral", "Rotating John Willard Cube", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2784\n*Cubically Cool!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "‎- John Willard cube someone at night ");

		e.addField("Attributes:", "- Your target will be sent the gif attached.\n- Your target will have all their visitors be rotated and sent the attached gif as well.\n- Your targets visitors will visit a random player that isn’t you or your target. Overrides control and redirect immunity.\n- Your attackers will be rotated as well, except this will only happens twice, and anyone with unstoppable attack will not be rotated when visiting you.\n- If you John Willard cube someone that is attacked, you will know, and can John Willard cube an extra person the next night.\n- You know everyone who has been sent the John Willard Cube- You have a two-use Powerful autovest.‎");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1044391684215160902/IMG_3386.gif");

		e.addField("Goal:", "Save 3 people from an attack **OR** have everyone be John Willard Cubed at least once.");
	});

	register_role(["spinfadinggilescorey", "gilescorey", "spinfading", "spin", "sfgc", "2785"], "Neutral", "Spin-Fading Giles Corey", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2785\n*Fadingly Fantastic!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Cause a player to spin-fade out of existence.");

		e.addField("Attributes:", "‎- Your target will be sent the gif attached\n- Your target will seem to no longer exist. They will be removed from the player list, their messages will be deleted, and no role or will shall be shown. This ability bypasses removal immunity.\n- Anyone visiting your target will have their ability fail, and they will also have the gif sent to them and spin-fade out of existence.\n- Investigative roles visiting you will also passively be sent the attached gif and will spin-fade out of existence.\n- You’re also roleblock immune, and will spin-fade roleblockers out of existence too, along with them being sent the gif.");

		e.addField("Attributes (cont.):", "- Also the last person to vote you if you are lynched will spin fade out of existence instantly, along with having the gif posted in public chat.\n- The first time someone attempts to use a day ability on you, it will fail and you will spin-fade them out of existence and your role will be revealed. The first person to vote you that day will spin-fade out of existence.\n- If anyone says the word “Pretzels” on day 1 you fucking explode and this cannot be stopped. You die instantly and lose. 🥨‎");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1044429875181801472/IMG_3388.gif");

		e.addField("Goal:", "Spin-fade everyone out of existence. Only Giles Corey shall exist.");
	});

	register_role(["birdthatcarriesyouoveramoderatesizegap", "btcyoamsg", "bird", "1279u", "2786"], "Unseen", "Bird That Carries You Over A Moderate-Sized Gap", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2786\nConverted from: Bird That Carries You Over A Disproportionately Small Gap (1279)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Carry someone over a gap of a moderate size.‎");

		e.addField("Attributes:", "- The players you carry will be roleblocked through immunity, unable to be visited that night, and blackmailed the next day.\n- If you are attacked, whoever you carried that night will be dealt an attack of the same value.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sphericaljohnproctorspinning", "sphericaljohnproctor", "johnproctor", "spherical", "sphere", "sjps", "2787"], "Neutral", "Spherical John Proctor Spinning", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2787\n*Spherically Superb!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Unkillable", true);

		e.addField("Abilities:", "- Sphere someone at night.‎");

		e.addField("Attributes:", "- Your target will be sent the attached gif.\n- Sphering someone will trap them in a sphere, roleblocking them. All town visits one them will fail, but evils are smart enough to notice an opening so they can still use their ability.\n- You can’t die, because the town is unable to hang or kill spheres.\n- You’re immune to role-related modkills.\n- You can’t be roleblocked either.\n- Anyone visiting you will be trapped in a sphere the next night, and will be sent the attached gif.\n- You die if Nlove (42) visits you. This role doesn’t have to exist for Spherical John Proctor Spinning to spawn. ‎");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1044434476035489853/IMG_3390.gif");

		e.addField("Goal:", "Cause a heal to fail the same night your target is attacked 3 times **OR** make any current good factions lose.");
	});

	register_role(["regifter", "2637u", "2788"], "Unseen", "Regifter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2788\nConverted from: Christualist (2637)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Regift one player's presents to another at night.\n- Regift one player's complete ability to another at night. (1 use)");

		e.addField("Attributes:", "- Regifting a player's presents roleblocks them and grants a single use of each ability they would have used to your second target.\n- Regifting a player's ability roleblocks them and permanently transfers the ability they would have used that night to your second target. When your second target dies, the ability is restored to its original owner.\n- You cannot keep a last will due to needing to preserve your Christmas secrets.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["celebrant", "1246u", "2789"], "Unseen", "Celebrant", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2789\nConverted from: Cerimonialist (1246)");

		e.addField("Alignment", "Unseen.....\"Support\"", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice a Town member to revive another player.\n- Sacrifice yourself to revive two players.‎");

		e.addField("Attributes:", "- Sacrificing a Town member deals an Overkill attack to them.\n- If you attempt to sacrifice a non-Town member, your ability will fail.\n- You will change the Goal of the first Neutral you revive to the Unseen goal.\n- You cannot sacrifice someone more than one time, if you were to be made able to use your ability multiple times at once by any means.\n- You cannot sacrifice someone that you have previously revived with your ability.\n- You cannot keep a last will due to your practices being forbidden.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["anotheradmin", "admin2", "admin", "1584u", "2790"], "Unseen", "Another Admin", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2790\nConverted from Admin (1584)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During any phase, modkill someone.\n- During any phase, kick someone from the server.\n- During any phase, timeout someone for any amount of time.\n- During any phase, ban someone. This gives them the @BANNED role.\n- During any phase, literally ban someone from the server.‎");

		e.addField("Attributes:", "- Your abilities take effect immediately and have a limit of 1 per phase.\n- At the end of the game, anyone who is banned or still timed out has their punishment removed.\n- Roleblock, Conversion, & Control Immunity\n- No I didn't change anything if I gave it any more buffs it would be even more stupid‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["mafiatowntraitor", "maftowntraitor", "mtt", "1548u", "2791"], "Unseen", "Mafia Town Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2791\nConverted from: Mafia Traitor (1548)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the roles you get.‎");

		e.addField("Attributes:", "- You will be given two random Mafia roles. Those are your roles, but you win with the Unseen.\n- You will not gain permanent defense, even if your role grants that.\n- You will not get access to the factional chat, you will also not get access to the factional kill.\n- You may only get one Mafia (Head) or one Mafia (Killing) role.\n- You may multitask.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["costumer", "2527u", "2792"], "Unseen", "Costumer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2792\nConverted from: Tailor (2527)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, weave a costume based on three people of your choice.\n- During the night, fit your costume on someone.‎");

		e.addField("Attributes:", "‎- At the end of the day, you will learn the alignment and subalignment of everyone you based your costume on.\n- When you fit someone in a costume, you may choose one or more of the people you learned from to base it on. If you select multiple, it will be a completely random role in one of the subalignments.\n- Costumed players will appear to be the role you based your costume on to investigatives, and if they die at night they will appear to be that role.\n- Costumes only last for the night you put them on.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["raccoon", "242u", "2793"], "Unseen", "Raccoon", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post Converted from: Forager (242)");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hunt for an item each night.\n- Use one of your acquired items at night.‎");

		e.addField("Attributes:", "- When someone visits the same target as you, you will collect an item from them depending on the ability they used.\n> - Investigative abilities give you **Binoculars**: Perform a (35) Investigator check on someone.\n> - Killing abilities give you a **Gun**: Deal a Basic attack to someone.\n> - Protective abilities give you a **Vest**: Grant someone Basic defense for the night.\n> - Other abilities give you a **Smoke Bomb**: Roleblock someone.\n- You can collect more items while using one. \n- You may hold up to two of each item.\n- You cannot self target.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["bouncymarywarren", "marywarren", "bouncy", "2794"], "Neutral", "Bouncy Marry Warren", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2794\n*Bouncingly Blessed!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "‎- Bounce at someone’s house at night.\n- Choose a second target to control people to.");

		e.addField("Attributes:", "- Your target and their visitors will be sent the attached gif.\n- Your target and their visitors will all by controlled into your second target.\n- Your target and their visitors gain roleblock immunity for the night.\n- If anyone says the word “Pretzels” day 1, you deal a powerful attack to your target and their visitors as well. 🥨\n- You learn the name and role of everyone you control.\n- Anyone visiting you will also be controlled, unless they’re within the support or killing subalignments.\n- If day 5 is reached and you are not dead, then you automatically activate attribute 4.\n- You learn everyone that has been sent the attached gif, and may access one of their private chats that are not dead chat or their personal channel. You also hear their whispers.\n- You can only see two chats at a time, and learn everyone there.\n- This role can only roll if there is at least 1 town of salem role from the base game.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1044651392956104774/IMG_3392.gif");

		e.addField("Goal:", "Make it so that any base town of salem roles lose.");
	});

	register_role(["post####", "####", "randomfourdigitrole", "2795"], "Any", "Post ####", (e) =>
	{
		e.setDescription("Post 2795\n*Post ####'s flavourtext*");

		e.addField("Alignment", "Post ####'s alignment and subalignment", true);
		e.addField("Attack", "Post ####'s attack value", true);
		e.addField("Defense", "Post ####'s defense value", true);

		e.addField("Abilities:", "- Use Post ####'s first ability, if any.\n- Use Post ####'s second ability, if any. ‎");

		e.addField("Attributes:", "- You have Post ####'s first attribute.\n- You have Post ####'s second attribute.\n- You have Post ####'s third attribute. Also, #### refers to a random four digit role.");

		e.addField("Goal:", "Post ####'s goal");
	});

	register_role(["post2795", "2795", "2796"], "Any", "Post 2795", (e) =>
	{
		e.setDescription("Post 2796");

		e.addField("Alignment", "Post 2795's alignment and subalignment", true);
		e.addField("Attack", "Post 2795's attack value", true);
		e.addField("Defense", "Post 2795's defense value", true);

		e.addField("Abilities:", "‎- Use Post 2795's first ability.\n- Use Post 2795's second ability.");

		e.addField("Attributes:", "- You have Post 2795's first attribute.\n- You have Post 2795's second attribute.\n- You have Post 2795's third attribute.");

		e.addField("Goal:", "Post 2795 goal");
	});

	register_role(["post2796", "2796", "2797"], "Any", "Post 2796", (e) =>
	{
		e.setDescription("Post 2797");

		e.addField("Alignment", "Post 2796's alignment and subalignment", true);
		e.addField("Attack", "Post 2796's attack value", true);
		e.addField("Defense", "Post 2796's defense value", true);

		e.addField("Abilities:", "‎- Use Post 2796's first ability.\n- Use Post 2796's second ability.");

		e.addField("Attributes:", "- You have Post 2796's first attribute.\n- You have Post 2796's second attribute.\n- You have Post 2796's third attribute.");

		e.addField("Goal:", "Post 2796 goal");
	});

	register_role(["post2797", "2797", "2798"], "Any", "Post 2797", (e) =>
	{
		e.setDescription("Post 2798");

		e.addField("Alignment", "Post 2797's alignment and subalignment", true);
		e.addField("Attack", "Post 2797's attack value", true);
		e.addField("Defense", "Post 2797's defense value", true);

		e.addField("Abilities:", "‎- Use Post 2797's first ability.\n- Use Post 2797's second ability.");

		e.addField("Attributes:", "- You have Post 2797's first attribute.\n- You have Post 2797's second attribute.\n- You have Post 2797's third attribute.");

		e.addField("Goal:", "Post 2797 goal");
	});

	register_role(["chainbreaker", "chainer", "2799"], "Neutral", "CHAIN BREAKER", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2799\n*You see this? I’m gonna break it. ⛓*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Break a chain in any channel.");

		e.addField("Attributes:", "- When you break a chain, anybody who participated in said chain, and is currently alive in an ongoing game, they will be roleblocked the next night.\n- If they are not participating in a game, they will be roleblocked N1 the next game they participate in.\n- This role counts as breaking a chain. Anyone who participated in a chain in the roles channel before this role was made will be roleblocked N1 if this role spawns.\n- Yes, this role was made to spite the “post” roles above this one.\n- You may attempt to start a chain, and may participate in one.\n- You will not be affected by your own ability.");

		e.addField("Goal:", "Roleblock at least 5 people in one game.");
	});

	register_role(["stickybomber", "stickybomb", "sb", "716u", "2800"], "Unseen", "Sticky Bomber", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 2800\nConverted from: Bomb (716)");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attach a sticky bomb to someone.\n- Remotely detonate one of your sticky bombs. (1 use)‎");

		e.addField("Attributes:", "- If the person holding a sticky bomb dies, everyone visiting them and the target themselves are dealt an Unstoppable attack. You, the Assassin, and the Mastermind are immune to these explosions.\n- If someone holding a sticky bomb visits someone after they receive the bomb and they both live, then the bomb will be passed to that person.\n- Anyone holding a sticky bomb returns unfavorable results to Investigatives regardless of their role.\n- You may have two bombs active.\n- When a bomb goes off, you must spend 2 nights building another one.\n- You may not attach a sticky bomb to yourself.");

		e.addField("Goal:", factions.Unseen.goal);
	});
};
