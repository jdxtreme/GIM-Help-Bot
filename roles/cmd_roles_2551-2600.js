//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["wm_drunk_driver", "wmdrunkdriver", "drunkdriver", "dd", "wdd", "2551"], "Neutral", "WM Drunk Driver", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2551\n*I'm a master at making bad decisions.*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Get someone drunk on Full Moon nights.\n- Go on a drive on non-Full Moon nights.‎");

		e.addField("Attributes:", "- When you get someone drunk, you will roleblock and attack them.\n- When you go on a drive, you may choose to attack one or two players.\n- When you go on a drive and attack one player, you will clean them.\n- When you go on a drive and attack two players, you may choose one target. Your second target will be chosen randomly within the players that are one or two spaces from them on the player list.\n- If you go on a drive and would attack yourself as the random target, you will not die, and will instead only attack your first target, cleaning them.\n- If you go on a drive and your second target is protected by something other than a heal, is being visited by an Incarcerator or Fisherman, is an alerted Veteran, or is Medusa that is stone gazing visitors, you will instead only attack your first target, cleaning them.\n- You gain roleblock immunity on non-Full Moon nights.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["wet_slippers", "wetslippers", "slippers", "ws", "2552"], "Neutral", "Wet Slippers", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2552\n*you are fuck*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Visit a player at night. If the player you visited was Town, you will attach a pair of wet slippers to their feet, causing them to only be able to visit their direct neighbors for the rest of the game. If they were not town, you will donate a pair of wet slippers to them, which they will automatically attach to the next Town member they visit. You will know which effect occurred as a result of your visit.‎");

		e.addField("Attributes:", "‎- you are fuck");

		e.addField("Goal:", "Live to see the town lose.‎");
	});

	register_role(["round_two", "roundtwo", "rt", "2553"], "Neutral", "Round Two", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2553\n*Fate has given you a chance for redemption. Now go.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill someone each night.‎");

		e.addField("Attributes:", "- You do not know you have this role. Instead, you spawn believing you are a random role that can fit within the role list. Until death, you keep all abilities, attributes, and win conditions of that role. Upon dying, this role is revealed to you.\n- When you die with your original role, you will appear dead, and your original role will appear in the graveyard. If you are revived, you regain your original role until you die again.\n- After you kill for the first time, all dead players become valid targets for abilities and lynching. They remain dead.\n- When you are killed with this role, you die permanently. You cannot be revived by any means.\n- **This role cannot spawn if there are any modifiers in play regarding death actions or disabling cause of death.‎**");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["mimikyu_real_not_fake", "mimikyurealnotfake", "realmimikyu", "mrnf", "2554"], "Pokemon", "Mimikyu Real Not Fake", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2554\n*SHIT ASS ROLE*");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Play Rough: Choose a player. If they don't have a Mimikyu profile picture, set their defense to **Isolated** for the next three nights. The **Isolated** must be bolded.\n- Let's Snuggle Forever: Choose a player. Permanently set their defense to **Isolated**, **Fragile**, and **Vulnerable** at the same time, which must all be bolded. You may only do this once.");

		e.addField("Attributes:", "- You have 105 Special Defense (Overoveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroverprotective). This only applies to attacks that are magical in flavour.\n- Your attack value cannot be higher than your Special Defense value for any reason.‎");

		e.addField("Pokemon Ability:", "- Disguise: You have an Overoveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroveroverprotective autovest. Your role is 2301: Pikachu until your autovest is broken. If you evolve as Pikachu, you still return to being Mimikyu Real Not Fake when your autovest is broken.‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["gifmailer", "2555"], "Mafia", "Gifmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2555");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to gifmail.‎");

		e.addField("Attributes:", "‎- Gifmailed targets can only speak in gifs for the day, including in private channels.\n- If any gifmailed player sends a message that isn't a gif, they become blackmailed for the next three days.\n- If any gifmailed player sends the \"Repost if pigeon\" gif they will be modkilled.\n- You can read whispers.\n- At any point you can send a gif anonymously to any player. If it's the \"Repost if pigeon\" gif, you will be modkilled.\n- This is totally pigeon discrimination.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["normalmailer", "mailer", "2556"], "Neutral", "Normalmailer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2556");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select three people to give an envelope to. The recipients will not know what the envelope contains, and they may choose to either open it or trash it.\n- During the night, mail yourself someone's will. You will read it then burn it. The host will delete the message in the player's channel containing the will.‎");

		e.addField("Attributes:", "- You may choose what an envelope contains. The options are:\n> - The Secret to Life: The recipient gains a Powerful autovest.\n> - Prank'd: Deal a Powerful attack to the recipient.\n> - Your Secrets, Which Are Threatened To Be Revealed: Blackmail the recipient.\n> - The Bible: Change the recipient's win condition to one of your choice.\n> - The Art of War: The recipient's attack value is permanently increased by one. If they do not have an attack, they gain a one-use Basic attack.\n- You may not send the same letter to multiple people each night.\n- When someone opens the envelope, you must wait one night before using that effect again.‎");

		e.addField("Goal:", "‎Have three people open your letters, one of which must be a negative effect.");
	});

	register_role(["predictor", "2557"], "Neutral", "Predictor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2557\n*Try me. I'm never wrong.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the night, guess a player's role. If you're correct, gain 1 point. If you're incorrect, lose 3 points.\n- During the day, predict some person's next night target. You can also choose to guess that they do nothing/don't visit anyone. If you're correct, gain 3 points. Even if they target multiple people, you just need to get one target right. \n- During the night, guess who gets **lynched** next day. You can also guess no lynch/nightfall. If you're correct, gain 4 points. If you're incorrect, lose 1 point.\n- During the day, guess that some person will die next night. If you're correct, gain 3 points. \n- At any time, you may guess that the game will end next phase. If you're correct, gain 10 points. Incorrect, and you lose 2. ‎");

		e.addField("Attributes:", "‎- You may multitask __and__ self-target.\n- __You may only use each of your abilities on any specific player **once**__. To clarify, you can use any of your abilities multiple times, but you can't target the same person with the same ability more than once. No guessing the same person's role every night.\n- You start with three points and you'll **die** if you go below zero.");

		e.addField("Goal:", "‎Get 20 points. You can win after the game ends. ");
	});

	register_role(["anticipator", "2558"], "Town", "Anticipator", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2558");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players during Daybreak.‎");

		e.addField("Attributes:", "- Daybreak is an extension of the Night phase after Night would normally end. Night abilities cannot be edited/used, Daybreak abilities can, and they count as being used at Night. **Daybreak appears as Night to those without Daybreak abilities**.\n- During Daybreak, you learn all players who would die tonight if you do not use your ability.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["clique", "2559"], "Town", "Clique", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2559");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player during Daybreak, healing and purging them of all negative effects. ");

		e.addField("Attributes:", "‎- Daybreak is an extension of the Night phase after Night would normally end. Night abilities cannot be edited/used, Daybreak abilities can, and they count as being used at Night. **Daybreak appears as Night to those without Daybreak abilities.**");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hitman", "2560"], "Neutral", "Hitman", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2560");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Powerful (Piercing)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player at night.\n- Determine a player's loyalty. You'll know if they are your target faction. 1 night cooldown.\n- During the day, disguise yourself as any role to investigative role tonight. 2 uses.‎");

		e.addField("Attributes:", "‎- **Piercing** - You bypass all natural defenses, but temporary ones stop you.\n- Basic defense autovest, 1 use.\n- At the beginning of the game, you are assigned a random REF to eliminate, you know what REF you must take out.\n- You cannot act the next night if you kill a Good faction member.");

		e.addField("Goal:", "Live to see your target faction be eradicated (you win on their death), or have your target faction lose while having killed half of their members (rounded down, achievable while dead)‎");
	});

	register_role(["riolu", "2561"], "Pokemon", "Riolu", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 2561\n*Riolu radiates a powerful aura to let others know how it is feeling. It does not know how to control it, and most townies are uncomfortable feeling this aura.*");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force Palm - Neutralize one of your target's abilities at random for the next day and night.\n- Swords Dance - Your next usage of Force Palm will deal a Basic attack in addition to its normal effect.\n- Vacuum Wave - Deal a Basic attack. Bypasses all protective effects. (1 Use)\n- Evolve - Evolve into (2562) Lucario. You must have killed at least two people.‎");

		e.addField("Attributes:", "- Inner Focus - You have roleblock and prevention immunity. Your abilities cannot be neutralized.‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["lucario", "2562"], "Pokemon", "Lucario", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2562\n*Lucario can now read the auras of those around it. It revels in sensing the fear of its foes.*");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Close Combat - Deal a Powerful attack to someone. Your defense is reduced to Vulnerable for the night.\n- Swords Dance - Your attack level is raised by one for each of your other abilities.\n- Extreme Speed - Deal a Basic attack to someone. Bypasses protective effects.‎");

		e.addField("Attributes:", "- Inner Focus - Roleblock and Prevention Immunity. Your abilities cannot be neutralized.\n- Justified - If you are attacked, your attack level is permanently raised by one stage.‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["vigilantest", "vigi", "2563"], "Town", "Vigilantest", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2563");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to take justice into your own hands and shoot someone. (5 uses)‎");

		e.addField("Attributes:", "‎- If you shoot another Town member you will commit suicide over the guilt.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["true_retributionist", "trueretributionist", "trueretri", "tr", "2564"], "Town", "True Retributionist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2564");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Raise a dead player's corpse each night.");

		e.addField("Attributes:", "‎- Roleblock and redirect immune.\n- You may make your raised corpse use one of their abilities on any legal target. The corpse you target uses the ability and performs the visit. You visit the corpse.\n- You learn all night feedback that the corpse would receive.\n- You may in fact use the ability of a dead player whose corpse has already been raised by yourself or another role that can raise corpses.\n- You may not use the ability of a dead player whose role is hidden.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["stalkererererererest", "stalkerest", "2565"], "Stalker", "Stalkererererererest", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2565\n*you googled my mom and sent me my grandpa's obituary*");

		e.addField("Alignment", "Stalker Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. You will attack their target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target's target. ‎");

		e.addField("Attributes:", "- If you would not attack due to attempting to find the target of a player with no target, you will instead attack that player.‎");

		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["scrambler", "2566"], "Neutral", "Scrambler", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2566\n*ipppaapaapaapprarprappap*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "*Game On* — During the day, challenge another player. The next time they and the host are both present, the host will ping them in their private channel. Once they send a message, the host will, if or when they're both still online, the host will tell them they have 120 seconds to complete the following challenge:\n> - Unscramble the names of five random roles that have each had the characters in their names rearranged randomly.");

		e.addField("Attributes:", "‎*Prize!* — If a challenged played successfully completes your challenge, they may gain one use of any ability of the role whose name they unscrambled first. ");

		e.addField("Goal:", "Have three people win your challenges.‎");
	});

	register_role(["we_love_neutrals", "weloveneutrals", "neutrallover", "wln", "2567"], "Neutral", "We Love Neutrals", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2567\n*Everyone loves to play neutral!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Convert someone into the Neutral role nearest to their current post number. In the event of a tie, it will be the one below their post number.‎");

		e.addField("Attributes:", "- You know all Neutral roles in the game at all times.\n- If a member of an informed faction is converted to a Neutral, they will keep their win condition the same until all other members of that faction are dead or converted. Only factional heads can be converted to Neutral (Killing). (Preventative measure so they can't out their teammates without gamethrowing)\n- If you try to convert someone who is already Neutral, they will be rerolled into another completely random neutral.\n- The Crew faction counts as an \"informed faction,\" however you do not need to kill them to win.‎");

		e.addField("Goal:", "Kill all opposing factions and leave only Neutrals alive.‎");
	});

	register_role(["treasure_hunter", "treasurehunter", "th", "2568"], "Crew", "Treasure Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2568\n*I'm in it for the win.*");

		e.addField("Alignment", "Crew **Killing**", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Each morning, choose a role to muse over. You'll learn it's **value**.\n- Overpower an enemy and attack 'em. Deals a Piercing attack to `Gold` targets, attacking 'em a tier higher than their base Defense value.\n- Duel two targets. If they have the same **value**, attack them both. (2 uses) ");

		e.addField("Attributes:", "- At the start of the game, the host will rank each role in the game as `Gold`, `Silver` and `Bronze` by how **valuable** it is. The **value** of a role is dependent on the host's interpretation of how powerful and gamechanging it would be.\n- Each kill earns you some cash. `Bronze` targets get you $200, `Silver`s worth $300 and `Gold`s being $400. Throughout the game, the amount of cash you have gives you some upgrades. (You don't need to spend anything, it's cumulative. As soon as you reach the quota, you get the upgrade.)\n> $300: Your attack value is upped to Powerful.\n> $500: Your defense value is raised to Basic.\n> $1000: You immediately win the game, regardless of if the rest of the Crew is victorious.\n- If you're killed at night, anyone who killed you gets their Defense tier raised by one for the next night. Same things happens if you get lynched for the first person who voted you.‎");

		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["taxidermist", "2569"], "Neutral", "Taxidermist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2569\n*Beauty is in the eye of the beholder.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a person to put down at night and make up their corpse. You may choose a fake role, will, and method of death for them to show up as in the graveyard. You will be privately informed what their real role, will, and cause of death are. **If any of these pieces of information would normally be hidden due to game rules, you may not edit them.**‎");

		e.addField("Attributes:", "‎- You may choose any role for your target to show up as, including showing up as a role that does not exist and showing up as Cleaned. You may choose to not change any number of their role, will, or cause of death.\n- If you choose a fake role for your target to show up as, and that role is in the same alignment and subalignment as their actual role, your attack will be upgraded to Powerful for the night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tol_mercenary", "tolmercenary", "mercenary", "tm", "2570"], "Neutral", "ToL Mercenary", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2570");

		e.addField("Alignment", "Unique Neutral Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Don Armor (Day) - Use one brilder to give yourself Basic defence tonight.‎\n- Stand Guard (Night) - Roleblock everyone targeting your target. You cannot target the same target 2 nights in a row. Gain 1 brilder for each ability prevented.\n- Shield (Night) - Perpetually shield target player throughout multiple nights, preventing **1** attack. Upon success, earn **+3** brilders. *Shield* ends on success (or target changes).");

		e.addField("Attributes:", "- Brilder Hungry (Passive) - You're roleblock, redirect and control immune.‎\n- Protection Services (Passive) - You start with 2 brilders, and gain more with successful ability uses.");

		e.addField("Goal:", "Have at least seven brilders at the end of the game.‎");
	});

	register_role(["poison_master", "poisonmaster", "pm", "2571"], "Coven", "Poison Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2571\n*It's driving you out of your mind!*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a poison on another player each night.‎");

		e.addField("Attributes:", "‎- When using a poison, you may choose to poison your target, poison them, or poison them. Each choice has a two-night cooldown unless you have the Necronomicon. Each cooldown ends when you gain the Necronomicon.\n- You have three poison choices: the first deals a Basic attack and kills your target in one night, the second deals a Powerful attack and kills your target in two nights, and the third deals an Unstoppable attack and kills your target in three nights.\n- At the end of the night that a player you poisoned would die, they will die if they would have died if you dealt an attack that would have killed them on the night you poisoned them.\n- Poisoning counts as an attack.\n- Your targets will learn they were poisoned.\n- With the Necronomicon, your poisons cannot be healed.\n- You are immune to effects that would alter how your target’s role appears to investigative effects.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["steward", "2572"], "Crew", "Steward", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2572\n*I'm just a lowly steward, but I've seen things no man should see.*");

		e.addField("Alignment", "Crew Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Polish the crew's ship, granting all Crew members Roleblock, Redirect and Control immunity for the night. (1 use)\n- Raise the team morale, granting all Crew members Astral visits for the night. (1 use)\n- Wax the crew uniforms, making all Crew members appear as a random Town role tonight. (1 use)\n- Wipe the floorboards, making all Crew kills clean their targets tonight. (1 use)‎");

		e.addField("Attributes:", "*I thought I was rid of it... But it came back. I can't let this cursed beast destroy the Town... or the Crew. I know what I have to do.*\n- When you've used all four of your abilities, you'll succumb to the **Sunken Vassal**, mutilating your body along with another target of your choice and dealing an Unstoppable attack to both.‎");

		e.addField("Goal:", "Kill all main factions. *...and make sure the **Sunken Vassal** is kept at bay...if only for a little longer.*");
	});

	register_role(["chief_executive", "chiefexecutive", "executive", "ce", "2573"], "Town", "Chief Executive", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2573\n*My approval rates are down? When are they NOT?*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a cabinet of five other players on Day/Night 1.\n- Replace a cabinet member with another player or appoint a new member in the event of a death in the cabinet.\n- Declare a state of emergency with respect to three other players. (1 use)\n- Declare war with three other players. (1 use)\n- Issue a pardon to the current player with the most votes.‎");

		e.addField("Attributes:", "- The five players you choose as your cabinet members will be put into a private chat with you named #the-cabinet. This happens as soon as you confirm your selection. You must also make a line of succession for a vice president. The current vice president gains permanent Basic defense. You may not declare a state of emergency or war without a cabinet. Once you have made your cabinet, it will be announced to the Town that the Chief Executive's term has begun along with the identity of the Chief Executive and vice president. If you die, your cabinet will be immediately disbanded. If you have not made a cabinet by Day 2, you will be impeached.‎");

		e.addField("Attributes (cont.):", "- When declaring a state of emergency or war, you must state your intentions in #the-cabinet. The alive cabinet members must vote on whether they would like to go through with or reject your declaration. You may override their vote and go through with your declaration immediately, but you may only do this once. If most of the remaining cabinet members confirm your declaration, it will be successful and go through immediately. In the event of a tie, your vice president's vote will be the deciding factor. You may make a declaration at any time, but only if you have a remaining use.\n- To replace a cabinet member you need the absolute majority of the cabinet members to confirm the replacement. If a cabinet member dies, you may appoint a new player to fill their position, but this requires the majority vote of the current cabinet members.‎");

		e.addField("Attributes (moar.):", "‎- A successful state of emergency will give your three targets Unstoppable defense for the next two nights. A successful war declaration will immediately deal an Unstoppable Astral attack to all three players. If you kill a Town member with your war declaration, you will immediately be impeached.\n- At any point, the cabinet members may choose to hold an impeachment vote. If there is a unanimous consent among the cabinet members, you will be impeached.\n- Pardoning a player will rescind all votes made against them and make them immune to lynching for the current day. You may not pardon yourself. **This does not require approval from the cabinet.**\n- Impeachment is the equivalent of a Modkill-level attack.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["scp-4666", "scp4666", "2574"], "SCP", "SCP-4666", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 2574\n*When you can't make the toys, you become the toys.*");

		e.addField("Alignment", "SCP Keter", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Choose a player's house at night to prepare for a Weissnacht Event.");

		e.addField("Attributes:", "‎- On the night you choose a target, you will learn who they visit and who visits them.\n- The night after you target a player, you will deal an Unstoppable rampaging attack at their house. Additionally, you will kidnap one player that you would normally attack. This favors anyone who would survive your attack, then visitors, then your target.\n- A kidnapped player will be announced missing from the Town square the following day. They will lose access to any game-related chats that they are in. \n- If you are attacked, you will not die. Instead, the Town will discover a horribly disfigured life-size doll resembling the first remaining player you have kidnapped. It is at this point that they will be as announced dead and access to all in-game chats are restored.\n- You may not perform the factional kill on the night of your rampage.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["generous_soul", "generoussoul", "gs", "2575"], "Town", "Generous Soul", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2575\n*Take that! And that! And that! And that!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a player a gift at night.\n- Construct a gift for a player at night.‎");

		e.addField("Attributes:", "- You may give a player a tangible item that any other role in the GIM thread can give. You are not given a list of items - it is up to you to do research on what items are available to give out.\n- If you must construct a certain item in order to give it out, such as a Trapper's trap, you must spend as much time doing so as needed. You may not construct a gift and give one in the same night.\n- You cannot give out multiple items from the same role.\n- You act compulsively. If you do not submit an action, the host will choose a random role that can give out items and give an item to a random player.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["swashbuckler", "2576"], "Crew", "Swashbuckler", {subCat: "Chaotic"}, (e) =>
	{
		e.setDescription("Post 2576\n*Keep up, won't you?*");

		e.addField("Alignment", "Crew **Chaotic**", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn the tables on a player each night. If they're a role that grants a form of direct protection, they will instead hit their target(s) with an attack. The attack tier is equivalent to whatever defense they *would* have given. If there was no specified Defense value, it deals a Basic attack. \n- Use your silver tongue on a player. Their visit tonight will roleblock the target instead of it's original purpose. (3 uses)\n- Create a private chat with a target of your choice. You'll be known as the Swashbuckler. Using your second ability on your target will now deal a Basic attack in addition to the roleblock. (1 use)");

		e.addField("Attributes:", "‎- Any targets killed by your abilities are **cleaned**, and you'll learn their true roles and wills.\n- You may multitask.");

		e.addField("Goal:", factions.Crew.goal);
	});

	register_role(["browncoat_zombie", "browncoatzombie", "browncoat", "bz", "2577"], "Zombie", "Browncoat Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2577");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Baic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Once per game, choose who dies to the factional kill.‎");

		e.addField("Attributes:", "This cannot spawn naturally.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["conehead_zombie", "coneheadzombie", "conehead", "cz", "2578"], "Zombie", "Conehead Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2578\n*…braiiiinz…….*");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Cast off the traffic cone on your head, becoming 2577: Browncoat Zombie.‎");

		e.addField("Attributes:", "‎- Detection immunity (the cone obscures your face).\n- After being attacked once, you will transform into 2577: Browncoat Zombie.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["buckethead_zombie", "bucketheadzombie", "buckethead", "bz", "2579"], "Zombie", "Buckethead Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2579\n*Its mentions of \"brainz\" permanently echo within the bucket.*");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Cast off the bucket on your head, becoming 2578: Conehead Zombie.");

		e.addField("Attributes:", "- Detection immunity (the bucket obscures your face).\n- After being attacked once, you will transform into 2578: Conehead Zombie.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["flag_zombie", "flagzombie", "fz", "2580"], "Zombie", "Flag Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2580");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Once per game, choose who dies to the factional kill.\n- Wave a flag during the day to signal the start of a huge wave. All Zombie members may choose a player to kill the following night except for the one performing the factional kill.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["brickhead_zombie", "brickheadzombie", "brickhead", "bz", "2581"], "Zombie", "Brickhead Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2581");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "‎- Cast off the brick on your head, becoming 2579: Buckethead Zombie.");

		e.addField("Attributes:", "- At any point you may choose a role to appear as to investigatives (you paint the bricks that obscure your face).\n- After being attacked once, you will transform into 2579: Buckethead.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["gargantuar", "2582"], "Zombie", "Gargantuar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2582");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Smash someone at night, killing them. 2 night cooldown.‎");

		e.addField("Attributes:", "- You will smash past anything that prevents your visit.\n- You cannot be the only Zombie (Killing) that spawns.\n- When you are attacked for the first time, you gain an Imp, which is effectively the same as a (2577) Browncoat Zombie. This means if you are the only Zombie (Killing) alive then the Zombies will still perform the Factional Kill.\n- You cannot perform the Factional Kill.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["super_brainz", "superbrainz", "brainz", "sb", "2583"], "Zombie", "Super Brainz", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 2583\n*Flying at altitudes the Balloon Zombie can only dream of.*");

		e.addField("Alignment", "Zombie Hero", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Redirect someone, learning their role and who they intended to target.\n- Carry a Zombie, granting them Astral, Roleblock immunity and Redirect immunity for the night.");

		e.addField("Attributes:", "- You're roleblock and redirect immune.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["the_smash", "thesmash", "smash", "ts", "2584"], "Zombie", "The Smash", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 2584\n*No need for a telephone pole with THESE arms.*");

		e.addField("Alignment", "Zombie Hero", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Smash someone at night, killing them. (2 uses)\n- Throw an imp at someone. If they have Basic or higher defense (including temporary or external defense), roleblock them. Otherwise, they will be roleblocked through immunity. ‎");

		e.addField("Attributes:", "‎- Roleblock immune when throwing an imp.\n- The first time you are attacked, kill the attacker.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["impfinity", "2585"], "Zombie", "Impfinity", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 2585\n*Great things come in threes. Three musketeers, three little pigs, three fates...*");

		e.addField("Alignment", "Zombie Hero", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- During the day, place two extra votes on someone.");

		e.addField("Attributes:", "- The first two times any Zombie would die, a Clone dies instead. This Clone's death is not announced to the town. This includes yourself.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["balloon_zombie", "balloonzombie", "bz", "2586"], "Zombie", "Balloon Zombie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2586");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "‎- Pop your balloon, dropping your defense to None");

		e.addField("Attributes:", "- While you have your balloon, you will ignore all negative effects (ie roleblocks, poisons, etc.) that target you during the night, including attacks. They will still happen, you just are not affected by them.\n- If you get hit by a Basic Attack, your balloon pops and you lose your first attribute & overprotective defense.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["zomboni", "2587"], "Zombie", "Zomboni", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2587");

		e.addField("Alignment", "Zombie Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Run over a player at night.");

		e.addField("Attributes:", "‎- A random living neighbor to the player you run over will have their lawn covered in ice, preventing any non-Zombie abilities from being used on them.");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["gun", "2588"], "Nothing", "Gun", {subCat: "Nothing"}, (e) =>
	{
		e.setDescription("Post 2588");

		e.addField("Alignment", "Nothing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night.‎");

		e.addField("Goal:", factions.Nothing.goal);
	});

	register_role(["john_willard", "johnwillard", "willard", "jw", "2589"], "Neutral", "John Willard", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2589");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- When in jail, divine the words \"waga baba bobo\".");

		e.addField("Attributes:", "- Any carping miscreant who jails you is dealt an Unstoppable attack if they execute you.\n- It is required of you, with utmost important, to post the sacred attached image in jail when you are rudely and disgracefully prompted for your role.‎");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1038078480295940247/nez-remade-you-were-hauled-off-to-jaill-you-feel-like-42858138.png");

		e.addField("Goal:", "By any and all means, avoid execution from roles which detain others within their cells.‎");
	});

	register_role(["nothing", "2590"], "Nothing", "Nothing", {subCat: "Nothing"}, (e) =>
	{
		e.setDescription("Post 2590");

		e.addField("Alignment", "Nothing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Goal:", factions.Nothing.goal);
	});

	register_role(["air", "2591"], "Nothing", "Air", {subCat: "Nothing"}, (e) =>
	{
		e.setDescription("Post 2591");

		e.addField("Alignment", "Nothing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎Leave someone. They suffocate to death.");


		e.addField("Goal:", factions.Nothing.goal);
	});

	register_role(["god_2", "god2", "god", "2592"], "Nothing", "God 2", {subCat: "Nothing"}, (e) =>
	{
		e.setDescription("Post 2592");

		e.addField("Alignment", "Nothing Nothing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn the role of all Players.\n- Kill everyone who doesnt win with you.\n- Inspire yourself or someone else at day, they can do their action 25 times the next night.‎");

		e.addField("Attributes:", "‎- You cannot use your abilities.\n- You may choose a person to attack each full moon.");

		e.addField("Goal:", factions.Nothing.goal);
	});

	register_role(["royal_advisor", "royaladvisor", "advisor", "ra", "2593"], "Town", "Royal Advisor", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2593\n*Sir, here's the newest report...*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to survey each night. If they visited someone last night, you will learn the Sheriff result of whoever they visited. This ability will fail if the target visited no one or visited more than one person. Failing does not refund a use. (3 uses)\n- Hold a grand inspection during the night. Next morning, you will learn how many alive players are evil. (1 use)‎");

		e.addField("Attributes:", "- At the end of Night 2 and Night 4, you will learn a random non-unique alive Town role. You can't learn about your own role, guaranteed roles, or the same role twice.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["exclusivity", "ka_role_counter", "2594"], "Neutral", "Exclusivity", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2594\n*We are our own game! We don’t need any impostors!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (\"Unstoppable\")", true);

		e.addField("Abilities:", "- Visit a player. If their role is based on something from any other game, kill them.‎");

		e.addField("Attributes:", "‎- You have Unstoppable defense against roles that your ability can kill.\n- If anyone that you can kill visits you, kill them.");

		e.addField("Goal:", "Kill everyone that you can‎");
	});

	register_role(["rasen_demigod_of_ice", "rasendemigodofice", "rasen", "demigod", "rdoi", "rdi", "2595"], "Everfrost", "Rasen, Demigod of Ice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2595\n*what*");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player with an Ice Mark. Their touch will become one of ice, roleblocking their target instead of the intended effect.\n- **Blood of Ice** - Redirect up to 3 players with an Ice Mark to themselves and roleblock their targets, then coldsnap. You may only use this ability once each game.‎");

		e.addField("Attributes:", "‎- Roleblock immune.\n- Whenever a player is roleblocked, they are given an Ice Mark and you learn their name.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["nub_demigod_of_nationality", "nubdemigodofnationality", "nub", "nubs", "demigod", "ndon", "ndn", "2596"], "Civilization", "Nub, Demigod of Nationality", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2596\n*uwu*");

		e.addField("Alignment", "Civilization Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Learn of a player's nationality, revealing their true faction to you.\n- Attempt to change a target's loyalty. (Costs 4 gold, doubled if outcome would be Civilization) (2 uses)");

		e.addField("Attributes:", "‎- Your first ability also reveals subalignment if the target is Neutral.\n- Your second ability fails if your target is conversion immune.\n- If you're changing a target's loyalty to Neutral, you may choose their goal. Options include NK goal, NE goal, and survive.");

		e.addField("Messages:", "- They were decimated by the Demigod of Nationality. (Factional kill)\n- A smiling face appears, revealing your target is loyal to (the) [faction]. (If target is good)\n- A sinister face appears, revealing your target is loyal to (the) [faction]. (If target is evil)\n- A helpful face appears, revealing your target is Neutral Benign. (If target is Neutral Benign)\n- An expressionless face appears, revealing your target is Neutral Killing. (If target is Neutral Killing/Genocidal, or has an NK/NG goal)\n- A face of evil appears, revealing your target is Neutral Chaos. (If target is Neutral Chaos)\n- A face of determination appears, revealing your target is Neutral Evil. (If target is Neutral Evil)\n- A face of mystery appears, revealing your target is some other Neutral. (If target is an unlisted Neutral)\n- You convince your target that they are on the wrong path. They are now (a) [faction]. (On successful ability use)");

		e.addField("Messages (cont.):", "- You try to convince your target that they are on the wrong path, but they refuse to listen. (If target is conversion immune)\n- A stranger has convinced you to change your path. You are now (a) [faction]. (Given to target on successful ability use)\n- Someone tried to convert you but you are immune. (Given to conversion immune targets, can be replaced by standard failed conversion message)‎");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["accent_demigoddess_of_performing", "accentdemigoddessofperforming", "accent", "demigoddess", "adop", "adp", "2597"], "PaleMoon", "Accent, Demigoddess of Performing", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2597\n*Oh*");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Put on a cute show at a target's house. All non-Pale Moon abilities on them will not take place.\n- Put on a very cute show during the day. The day phase will end immediately without a lynch. 1 use.‎");

		e.addField("Attributes:", "‎- During the PMCS, your first ability also roleblocks your target. Additionally, you learn everyone who your ability affected. You gain a charge of your second ability.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["Ωmbrella", "umbrella", "2598"], "Agent", "Ωmbrella", {subCat: "Sabotage"}, (e) =>
	{
		e.setDescription("Post 2598\n*Ωm, I've got access to their database. When you're ready, I'll... *");

		e.addField("Alignment", "Agent Sabotage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Radio Interference (3-shot): Choose a target at night. If they're a Support or Killing role, redirect them to a random non-Agent.\n- Ameliorate (1-shot): Choose a target and a role. The next time they're investigated, they'll show up as that role.\n- Insidious Malfunction (1-shot): Select a target. If they're a role with protective capabilities, the next time they would successfully protect a member of their faction, it fails.‎");

		e.addField("Attributes:", "- Abilities used on the wrong type of role are refunded and you'll be notified they failed. ‎");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["a", "2599"], "Neutral", "A", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2599");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- **A**ttack a player, killing them.\n- **A**mend a player's win condition at night, changing it to \"Live to see A win the game.\" 2 night cooldown.\n- **A**bsorb a player's abilities and attributes, killing them in the process. 2 uses.");

		e.addField("Attributes:", "- You cannot **a**ffiliate yourself with any faction. (Your win condition cannot be changed)\n- There are two NKs named A now.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["multitalented", "2600"], "Town", "Multitalented", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2600\n*I am your angle and yuor devil at the same time.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Choose a target at night, and use all three abilities on them.\n- Investikill a player at night, using your investigative ability and your killing ability on them. One use.\n- Protectigate a player at night, using your protective ability ad your investigative ability on them. One use. \n- Killtect a player, using your killing ability and your protective ability on them. One use.");

		e.addField("Attributes:", "- At the beginning of the game, you roll three abilities; one from a Town Investigative role, one from a Town Protective role and one from a Town Killing role. You may only use these abilities through your own ones listed. \n- All relevant attributes from those roles are assumed to apply to the ability.‎");

		e.addField("Goal:", factions.Town.goal);
	});
};
