module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["blue_dragon", "bluedragon", "bd", "501"], "Town", "Blue Dragon", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 501");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- If a player is on trial, you may choose to override the voting process and have them found guilty instantly. If the hanged player is Town, your attack power becomes Unstoppable but you lose your Basic defense and all uses of this ability. If trials cannot occur in the current game of GIM, you may instead choose a player to instantly hang. (2 uses.)\n- Deal a Powerful attack (Unstoppable if you used your other ability to forcefully hang a Town member) to another player at night. If the target dies and is Town, you lose your Basic defense and all uses of this ability, your role becomes revealed, and your vote now counts as 2 votes. (2 uses.)");

		e.addField("Attributes:", "- If both of the Blue Dragon's abilities cause the deaths of Town members, the Blue Dragon instantly dies.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["saint", "502", "502a"], "Hallow", "Saint", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 502A");

		e.addField("Alignment", "Unique Hallow Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player to enact the Hallow’s will upon, killing them.");

		e.addField("Attributes:", "- When you have accumulated Saint points from all other living Hallow members, you will transform into the Paragon. All players will be given the notification: “The Hallow has awakened their god…”\n- Death of a Hallow member will revoke their Saint point and decrease the number of required Saint points for you to transform by 1.\n- The Saint will always spawn in Hallow games.\n- If you are dead, the Hallow will gain a factional kill ability.\n- Conversion, Detection Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["paragon", "502b"], "Hallow", "Paragon", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 502B");

		e.addField("Alignment", "Unique Hallow Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- All Immunities\n- You will attack all visitors to your target, and roleblock your initial target.\n- You will automatically attack anyone who targets you, astral or not.\n- Your immunities cannot be bypassed whatsoever, even by things which bypass immunities.\n- This role cannot roll normally. It must upgrade from the Saint.\n- If you are dead, the Hallow will gain a factional kill ability.");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["prince", "503"], "Hallow", "Prince", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 503");

		e.addField("Alignment", "Unique Hallow Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Open your church at night.\n- Allow your vote to count as two during the day. Have one more charge of this ability when the Paragon awakens.");

		e.addField("Attributes:", "- If you open your church and are attacked, you will deal a basic attack to the visitors. If you are killed while your church is open, you will gain 2 Faith Points.\n- You learn the roles of all your visitors while your church is open.\n- All visitors to your church while it is open will net you 1 Faith Point.\n- When you have accumulated 2 Faith points, The Saint will gain a Saint point.\n- There will be no indication that your vote was two, other than the vote count appearing to be wrong. You may only make your vote count once per day, and you cannot reactivate it if you switch who you’re voting.\n- If the player you increased your voting power against is lynched, gain a Faith point.\n- You may open your church three times. Lose a charge when the Paragon awakens.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["missionary", "504"], "Hallow", "Missionary", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 504");

		e.addField("Alignment", "Unique Hallow Espionage", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to invite to the Hallowed grounds during the day.");

		e.addField("Attributes:", "- Conversion and Control Immunity\n- The player you invite will be roleblocked through immunity. They can, however, be visited.\n- Your target can be protected, but you cannot be killed by Town Protective while executing.\n- You may converse with your prisoner anonymously. You will appear to be the Jailor, or if he is dead, the Missionary.\n- You may execute your prisoner. You have one execution.\n- If you execute an enemy player, the Saint will gain a Saint point.\n- You cannot attack on Night One or Night Two.\n- Gain access to the Hallow factional kill if you are the last Hallow player alive. Lose if it another player becomes a non-espionage Hallow role by any means.");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["inquisitor", "505"], "Hallow", "Inquisitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 505");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frame a player at night.\n- Shroud a Hallow member during the day.");

		e.addField("Attributes:", "- Framed players will return unfavorable results to all Investigative abilities: they will appear to be random existing evil in the game to Consigliere, appear to visit a dead player to a Tracker or Lookout, have the word “kill” to the Zoltar, etc. You will gain a Faith point for every Investigative ability used against a Framed player.\n- Shrouding a Hallow member will make them detection immune for the night. You will gain a Faith point for every Investigative ability activated against a shrouded Hallow member.\n- Shrouding Hallow members also astralizes their visits. Gain a Faith Point for every ability the astralization allowed them to avoid.\n- When you have accumulated 2 Faith points, the Saint will gain a Saint point.\n- If no Investigative roles are in the game, reroll this slot to another Hallow role.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["hierophant", "hiero", "506"], "Hallow", "Hierophant", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 506");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player at night.\n- Silence a player during the day.");

		e.addField("Attributes:", "- The target player will be silenced for twenty minutes. You may do this twice.\n- Your results are identical to that of the Investigator (See Post 35)\n- You may choose to guess your target’s role immediately–if you are correct, gain a Faith Point.\n- When you have accumulated 2 Faith points, the Saint will gain a Saint point.\n- Lose your day ability when the Paragon awakens.");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["twins", "twin", "507"], "Any", "The Twins", (e) =>
	{
		e.setDescription("Post 507");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the start of the game, you will be given two random roles of the same faction. They may have different goals, as long as those goals don't directly oppose each other (i.e. needing to kill and protect the same person to win)\n- You will have the abilities, attributes, and goals of your roles combined. If your roles normally have a faction chat, you will join that chat.\n- The first time you die, only one of your roles will actually die, locking you out of using its abilities and attributes. Publicly, it will just appear that you survived.\n- The second time you die, you will be revealed as the Twins, and your two roles will also be revealed.");
		
		e.addField("Goal:", "Ensure that both of your roles' goals are fulfilled by the time the game ends.");
	});

	register_role(["pietist", "508"], "Hallow", "Pietist", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 508");

		e.addField("Alignment", "Hallow Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force a player to target another at night.");

		e.addField("Attributes:", "- Your first target will perform their ability on the second.\n- If your first target has a self-targeting ability or cannot visit, the second target will automatically use the first target's ability unless not applicable (i.e Medium)\n- Every time you make a player target a player of their own faction, gain a Faith Point. When you have gained 3 Faith Points, the Saint will gain a Saint point.\n- Conversion, Control, Roleblock Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["adherent", "509"], "Hallow", "Adherent", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 509");

		e.addField("Alignment", "Unique Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspire your target’s visitors at night, allowing them to power through distractions.\n- Falsify which role a player will flip when they are lynched during the day. Lose this ability if the Paragon awakens and you have not used it.");

		e.addField("Attributes:", "- All intended visits against your target will succeed, regardless of what should prevent them (You will not succeed kills that would fail). You will gain a Faith point every time you inspire an action.\n- When you have accumulated 3 Faith points, the Saint will accumulate a Saint point.\n- Inspired players will know who else visited their target. You will be on that list.\n- You may only falsify a player’s role once. You will be able to edit their will, but you will not be able to falsify them as a Hallow member, nor will you ever learn what they had written before your change.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["acolyte", "510"], "Hallow", "Acolyte", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 510");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Preach to a player at night, roleblocking them.\n- Forcibly switch a player’s vote to another during the day, then prevent them from voting further. Lose this ability when the Paragon awakens.");

		e.addField("Attributes:", "- Anyone who visits your target will have their action fail, but they will all learn your name. Everyone you roleblock or fail gives you 1 point.\n- When you have accumulated 3 points, the Saint will gain 1 Saint point.\n- While the Paragon is alive, you will be unable to fail visits against your targets.\n- You cannot force a player to vote if they are not already voting, but your name will remain hidden.\n- You may only force a vote switch once per day, and thrice per game.\n- Conversion and Roleblock Immunity");
		
		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["hunter", "511"], "Stalker", "Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 511");

		e.addField("Alignment", "Unique Stalker Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, pick a player to trap in the void.");

		e.addField("Attributes:", "- You will be able to talk with your prisoner anonymously; you will appear to be a Jailor, or if he is dead, a Wisteria. If both are dead, you will appear to be the Hunter.\n- You have last priority over a target; if you attempt to jail a Jailor or Wisteria’s target, your ability will fail. If you and the Jailor or Wisteria jail each other, your ability will fail.\n- You may execute your prisoner; the kill will be attributed to a Hunter rather than a Jailor or Wisteria. You have one execution, and it will cancel the factional Stalker kill if you use it.\n- You cannot perform the factional Stalker kill if you have trapped someone in the void.\n- While in the void, you will roleblock your target. However, they will have Basic defense and can be visited normally–transporting abilities will not stop your execution.\n- Detection and Control Immunity");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["shadower", "512"], "Stalker", "Shadower", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 512");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shadow over a player’s house at night, roleblocking them.");

		e.addField("Attributes:", "- You will block the notifications of every other player who visits your target.\n- Roleblock Immunity");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["unveiler", "513"], "Stalker", "Unveiler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 513");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Snoop through a player’s home at night.");

		e.addField("Attributes:", "- You will learn their exact role, and you are not fooled by anything that should change what they show up as. You will learn if they are doused, framed, or hexed, however.\n- Your visits are Astral.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["gloom", "514"], "Stalker", "Gloom", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 514");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Obscure a player’s house at night.");

		e.addField("Attributes:", "- You will fail all visits against your target. If your target is able to kill, they will be roleblocked. Lookouts are not affected by your ability.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["traveler", "515"], "Stalker", "Traveler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 515");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Command the shadows to switch two players around at night, swapping all targets against them.");

		e.addField("Attributes:", "- You may not act two nights in a row.\n- You may transport yourself. You will not die if you transport yourself into an attack.\n- Roleblock and Control Immune");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["ghost", "516"], "Stalker", "Ghost", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 516");

		e.addField("Alignment", "Unique Stalker Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Launch surprise attacks on busy targets at night.");

		e.addField("Attributes:", "- If your target is visited, you will attack them. The visitors will receive a list of every other player who visited the target.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["echo", "517"], "Stalker", "Echo", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 517");

		e.addField("Alignment", "Unique Stalker Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Echo a player, activating their abilities against another player.");

		e.addField("Attributes:", "- You will perform your first target’s night ability on their second.\n- If the first target is a self-targeter, the second target will use that ability on themselves instead of whatever they would have done that night. (Example: If the Veteran is the first target, the second target will go on alert and attack their visitors.)\n- You do not visit the second target.\n- Control Immunity");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["remnant", "518"], "Stalker", "Remnant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 518");

		e.addField("Alignment", "Unique Stalker Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a black hole over your house at night.");

		e.addField("Attributes:", "- The black hole will attack your visitors, dealing Powerful attacks to all of them, and failing their visit.\n- If you are transported, you will attack visitors to both you and the other player. Players killed by you have their will deleted and show up as “Erased” in the graveyard.\n- Players who survive will know that you are the Remnant.\n- You may summon a black hole three times. You cannot do so two nights in a row.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["devil", "519"], "Neutral", "Devil", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 519");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "- Blight: Basic Attack a player. If they're part of your Enemy Faction, use a Powerful attack instead.\n- Unholy Sense: Select exactly 3 players. Learn how many of them are part of your Enemy Faction.");

		e.addField("Attributes:", "- At the start of the game, the Evil Faction with the most members will be chosen as your Enemy Faction and be notified that you're coming for them. If there's a tie, the faction is picked randomly.\n- You have Basic Defense. This is upgraded to Unstoppable on the first night where an Enemy Faction member targets you with a Powerful or Unstoppable attack.\n- If an Enemy Faction member targets you, you will be notified with their name.\n- The Enemy Faction will have access to an additional Factional Attack each night. This one may be used alongside another night ability. If it hits you, it will bypass your Defense.");
		
		e.addField("Goal:", "Ensure that every member of your Enemy Faction dies before you. If the last member dies on the same night as you, it counts as a loss.");
	});

	register_role(["walker", "520"], "Stalker", "Walker", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 520");

		e.addField("Alignment", "Unique Stalker Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trigger a player at night.");

		e.addField("Attributes:", "- If the player is visited by two or more people, one visitor at random will attack another visitor at random. This will be seen by Lookouts, Trackers, and whoever else should see it.\n- Protective roles guarding the attacked visitor will kill the attacker.\n- You will never be killed by the attacking visitor.\n- You may walk three times.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["more_shaharazad", "moreshaharazad", "wdwms", "521"], "Neutral", "Who Doesn't Want More Shaharazad", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 521");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Start a Grand Idea Mafia subgame every third night with the dead players from the main game.");

		e.addField("Attributes:", "- Living players aren't players in the subgame.\n- Players who win the subgame get brought back to life in the main game immediately.\n- Players who die on the night you activate this ability count as dead for the subgame.\n- The subgame happens at the same time as the main game.");
		
		e.addField("Goal:", "Bring three different players back from the dead with your subgames.");
	});

	register_role(["godfather", "522"], "Rock", "Godfather", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 522");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to father at night. At the start of the next next day, a new player will be added named whatever you want with a random Rock role. You can only father twice.\n- Choose to god at night. At the start of the next next next day, you will gain Overkill attack, Invincible defense, and the ability to attack people for one day/night cycle. You can only god twice.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["no_bs_on_nbs", "nobsonnbs", "no_bs", "nobs", "nbon", "nbonb", "523"], "Neutral", "No BS on NBs", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 523");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- While you're alive, all NB roles (aside from this post) have invincible defense.");
		
		e.addField("Goal:", "\"Prevent BS on NBs\"");
	});

	register_role(["magic_meta_man", "magicmetaman", "mmm", "524"], "Town", "Magic Meta Man", {subCat: "Investigative", spawnRate: 2}, (e) =>
	{
		e.setDescription("Post 524");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. You will learn the last five messages that the host sent in their player channel that night, not counting their end-of-night feedback message, except their rolecard and the name of their role will appear as [redacted].");

		e.addField("Attributes:", "- This role has twice the chance to be rolled.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["overlord", "525"], "Neutral", "Overlord", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 525");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Bunker: Use in the day to give yourself Powerful Defense in the following night. This will lock you out of reading and speaking in the Evil Chat until the night ends. Can only be used 3 times in a game.");

		e.addField("Attributes:", "- While you are alive, every evil faction will be allowed to win with each other, as long as they kill every player who isn't in an evil faction, even if they're a neutral who wouldn't normally oppose any evil faction.\n- Every evil faction will share a single chat, which you are also a part of by default, but roles and other important information won't be shared there.\n- Individual evil factions still have their own private chats open as usual.\n- If you die, the evil faction chat will immediately close, and the evil factions will no longer be aligned.\n- If a member of an evil faction kills you, their whole faction will gain a single-use Unstoppable Defense.");
		
		e.addField("Goal:", "Lead all the evils to victory without letting them betray you.");
	});

	register_role(["mary_sue", "marysue", "526"], "Neutral", "Mary Sue", {subCat: "Evil", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 526");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Every night, you can change a player's target");

		e.addField("Attributes:", "- While you're alive, nobody can win. However, everyone will know that you exist.");
		
		e.addField("Goal:", "Live until the end of the game.");
	});

	register_role(["werewolf", "ww", "527"], "Were", "WereWolf", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 527");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/b/b8/RoleIcon_Werewolf.png";

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, rampage at your target's house.\n- During a New Moon, Mark another player's house.");

		e.addField("Attributes:", "- If you don't select a target, you will rampage at your own house on Full Moon Nights.\n- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Marking a house will roleblock all visitors that night.");

		e.addField("Hunting Moon Enhancement: Canine Origins", "Learn everyone who visited you at any point in the game who is still alive, alongside their faction. You will not learn other Weres");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["wererat", "wr", "528"], "Were", "WereRat", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 528");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, poison another player\n- During a New Moon, steal another player's rations");

		e.addField("Attributes:", "- Your poison cannot be cured\n- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- For information on rations, please see Ravenous Rat (Post 1434)");

		e.addField("Hunting Moon Enhancement: Infestation", "Your Target's Visitors will be poisoned.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["werelion", "wl", "529"], "Were", "WereLion", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 529");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, kill and clean a random visitor\n- During a New Moon, roleblock one other player");

		e.addField("Attributes:", "- If you don't select a target, you will kill one random visitor at your home on Full Moon Nights.\n- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres");

		e.addField("Hunting Moon Enhancement: Pride", "Roleblock your target in addition to killing a random visitor");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["werebear", "wb", "530"], "Were", "WereBear", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 530");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, kill and clean your target\n- During a New Moon, get investigator results of your target");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Investigation results are shared with other Weres.");

		e.addField("Hunting Moon Enhancement: Charge", "Kill and clean your target's visitors as well");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["werebat", "wb", "531"], "Were", "WereBat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 531");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, Shroud a player\n- During a New Moon, learn what happens to a player");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Shrouding another player will prevent them from reciveing end-of-night notifications, excluding death messages.\n- Investigation results are shared with other Weres.\n- You cannot target other Weres");

		e.addField("Hunting Moon Enhancement: Night Overhang", "Learn who your target visits as well as shrouding them.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["werebird", "wb", "532"], "Were", "WereBird", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 532");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During a Full Moon, learn who visits your target\n- During a New Moon, learn what happens to your target");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Investigation results are shared with other Weres.\n- You cannot target other Weres");

		e.addField("Hunting Moon Enhancement: From The Skies Above", "You will also learn what happens to your taget's neighbors. In addition, Learn who your target visits.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["weresquirrel", "ws", "533"], "Were", "WereSquirrel", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 533");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock your target. You may do this on a new moon and a full moon. You may do this on a Hunting Moon.\n- During Full Moons, learn 3 roles your target might be.");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Investigation results are shared with other Weres.\n- You cannot target other Weres\n- You are Roleblock Immune");

		e.addField("Hunting Moon Enhancement: Places You Shouldn't Be", "You will learn your target's exact role instead");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["wereturtle", "wt", "534"], "Were", "WereTurtle", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 534");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a New Moon, Learn who visits you and your teammates\n- During a Full Moon, Provide Basic Defense to one other player");

		e.addField("Attributes:", "- You have Detection Immunity, but only during non-Full Moon Nights.\n- You have a night chat with other Weres\n- Visit results are shared with other Weres.\n- You cannot target other Weres");

		e.addField("Hunting Moon Enhancement: Strong Spell", "You will learn who visits your target, in addition to granting them Powerful defense. You may only target another Were.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["sleep_agent", "sleepagent", "sleep", "535"], "Town", "Sleep Agent", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 535");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Administer a sleep agent to someone each day, causing them to fall asleep. Sleeping players can't talk, vote, use day abilities, or use night abilities the following night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sleeping_agent", "sleepingagent", "sleeping", "536"], "Town", "Sleeping Agent", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 536");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Attack a player each night when you're not asleep.");

		e.addField("Attributes:", "- You're asleep for the first day/night cycle. (You can't talk, vote, use day abilities, or use night abilities.)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["quickdraw", "537"], "Neutral", "Quickdraw", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 537");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Attributes:", "- You have 9999 votes\n- You are publicly revealed to be the Quickdraw at the start of the game");
		
		e.addField("Goal:", "KILL EVERYONE! KILL ANYONE! KILL EVERYTHING THAT ISN'T DEAD!");
	});

	register_role(["trailblazer", "538"], "Town", "Trailblazer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 538");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Incinerate someone. If this is the first ability targetting them that has resolved in the game and they are evil, they will be dealt an Unstoppable attack. You may only do this once.\n- Light someone ablaze each night. Players who are lit ablaze will have every other ability targetting them be turned into a Basic attack.");

		e.addField("Attributes:", "- Your abilities both have the highest possible priority.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["general", "539"], "Town", "General (the name should NOT change btw)", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 539");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to reveal yourself during the day.");

		e.addField("Attributes:", "- When you reveal, you gain three Powerful Attack charges to be used at night.\n- If you shoot a Townie, you lose all remaining shots.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["dogsong", "ds", "540"], "Neutral", "Dogsong", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 540\n*It's so excited that it thinks fighting is just play.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- (Night) **Beckon**: Choose to be beckoned tonight. The first player that visited you will beckon you towards them (order determined by when actions were sent). You will be redirected to them tomorrow night. If nobody visits you, this ability fails. Gain 1 charge of Pet. (1 use)\n- (Night) **Play**: Choose a player to play with you. If they stayed home, they will play with you; if they did not stay home, their first visitor will play with you; if they did not stay home and were not visited, this ability fails. Your target will become energized tonight causing their action to Rampage (any non-attackers will be notified who they visited and any results associated with those players). Gain 2 charges of Pet. (0 use)\n- (Night) **Pet**:  Choose a player to pet you tonight. They will spend the entire night petting you which roleblocks them. The first time you successfully use this, gain a charge of Play. This ability fails on roleblock immune players. (0 use)");

		e.addField("Attributes:", "- If the game would normally end but you have not yet achieved your win condition, the game will continue. This attribute is nullified upon your death.\n- You have a suit of armor on you that allows you to survive two Basic attacks before it breaks.");
		
		e.addField("Goal:", "Beckon, then pet, then play, then pet, then pet. (Only successful uses of actions will register for the win condition)");
	});

	register_role(["chaos_mayor", "chaosmayor", "541"], "Neutral", "Chaos Mayor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 541");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", " - At any point in the day, you may reveal yourself. Once you do, EVERY player will be allowed to submit an unlimited amount of votes during every day phase, but they are forced to submit one vote at a time. (Saying \"Vote Rasen 100 times\" only counts as 1 vote)");

		e.addField("Attributes:", "- Once you reveal, Majority will be 100x the amount of players.\n- You have Lynch Immunity, but only after revealing yourself.\n- If you die after being revealed, voting goes back to normal.");
		
		e.addField("Goal:", "Lynch at least 3 members of the Town after revealing yourself. Town Lynches before you reveal don't count.");
	});

	register_role(["metal_crusher", "metalcrusher", "metal", "crusher", "ms", "542"], "Neutral", "Metal Crusher", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 542");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- (Day) **Cooking Show**: Duel someone in a cooking show. During the night, you and the target will choose three ingredients, who are other players. When you have finished deciding, every player can vote for one of the dishes. They will know the ingredients but the votes are anonymous. Which dish gains the most votes will win, but the loser's dish will be discarded and those three targets will be roleblocked.\n- (Day) **Dance Battle**: Duel someone in a dance battle. During the night, you and the target will choose another player, who's a dance move. They will be controlled and target each other tonight.");

		e.addField("Abilities (cont.):", "- (Day) **Bombs Search**: Duel someone in a bombs search. You will basically play Battleship. During the night, you and the target will hide a bomb in another player's house. You and the target will alternate and visit a player and check for the bomb. If the enemy's bomb isn't there, you will roleblock your target. Then the cycle repeats, on the enemy's turn. Your enemy will use their ability on the target if they fail instead of just a roleblock. If you lose, nothing will happen but if you win, the loser and the player who they gave a bomb to will be attacked.");

		e.addField("Attributes:", "- All of your abilities are astral.\n- You cannot be affected by your abilities. For example, if you're given a Bomb by the enemy, you will not attack yourself if you win. And if you're chosen as an ingredient and your dish loses, you will not be roleblocked.\n- You have a suit of metal that allows you to survive two Basic attacks before it breaks.");
		
		e.addField("Goal:", "See the good faction lose the game.");
	});

	register_role(["500_kilogram_brain", "500kilogrambrain", "500kg", "543"], "Town", "500 Kilogram Brain", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 543");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Duel someone in 5D Chess w/ Multiverse Time Travel™️ on Steam\n- (Dueling happens during the night, but you choose to duel them during the day.)");

		e.addField("Attributes:", "- If your target does not own 5D Chess w/ Multiverse Time Travel™️ on Steam, you will deal a Powerful Attack to them.\n- In the case you yourself do not own 5D Chess w/ Multiverse Time Travel™️ on Steam, you may ask Wolfi to act in your place since they do own the game. They may not talk about having done this, though, unless you let them.\n- You will also attack them if the loser of the game. In the case of a draw, rematch.\n- Regardless of whether they lose, you will roleblock them.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["powerful_being", "powerfulbeing", "544"], "Town", "The Powerful Being", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 544");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "\"Negative\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- Negative Attack: Your attacks will revive dead players however they will die after 1 days and also you cannot target alive players and also you cannot target the same dude twice.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rasen", "545"], "Neutral", "The Rasen", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 545");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- GM Echo: In the day, you may tell the Host absolutely anything (within server rules) to then repeat exactly in the Day Chat. You may use this ability as many times as you wish.");
		
		e.addField("Goal:", "At least once in a game, convince players to vote to execute a player who wasn't even on Trial in the first place. (Such an event would not kill anyone.)");
	});

	register_role(["snow_queen", "snowqueen", "546"], "Coven", "Snow Queen", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 546");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a blizzard at night.");

		e.addField("Attributes:", "- All players will be shut into their houses, with the exception of those planning to kill another player. All non-killing abilities are disabled. You may summon a blizzard once.\n- With the Necronomicon, you gain the ability to attack and kill a player with a Basic attack, failing all visits which could harm you in the process. You will prevent kill-capable Protectives, Rampage/visitor-attackers, roleblockers and Lookouts.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["pedantic_player", "pedanticplayer", "pedantic", "player", "pp", "547"], "Town", "Pedantic Player", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 547");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Every time the host makes a host error, you are informed of exactly what happened. You may then gain one use of your choice of the following: a Basic attack, a Basic autovest, or a vote that counts as three.\n- You may reroll this role for free if you think the host is competent.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["morality_researcher", "moralityresearcher", "548"], "Town", "Morality Researcher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 548\n*You have two choices. Think carefully about what you do.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose two players to study, putting them into a chat with each other for the night.");

		e.addField("Attributes:", "- Each player will need to choose whether to ally or betray. Their decision is revealed to each other at the end of the night. You will not know what they choose.\n- If both ally, you'll learn the roles of both players. Detection immune players may pick a role to appear as.\n- If one player allies and the other betrays, the allier will lose all abilities for the rest of the game, and the betrayer will have their defense upgraded by one level.\n- If both betray, you will attack both players.\n- If a player doesn't choose in time, they will automatically betray.\n- You are able to see what goes on in the chat by the host relaying messages (So that the Morality Researcher is not revealed).");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["overmind", "549"], "Neutral", "The Overmind", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 549");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Indocrinate a player during the day, immediately kicking them from that day chat, and adding the following goal to them along with their original:\n> Eliminate all who oppose the overmind before another faction wins.\n- Fucking assassinate another player, making an indocrinated player of your choice deal a Basic attack to them.");

		e.addField("Attributes:", "- Any night visits on you that are not Unstoppable/Overkill attacks will automatically fail.\n- You have a private chat with anyone you indocrinate");
		
		e.addField("Goal:", "Eliminate all who oppose the overmind before another faction wins.");
	});

	register_role(["speedrunner", "550"], "Neutral", "Speedrunner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 550");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Deal a Basic Attack to a player.\n- Wear a bulletproof vest, granting you Basic Defense.\n- Guard another player, granting them Powerful Defense. If another player attacks this player, you will deal a Powerful Attack to them, and you will also die unless another player grants you a defense level of Powerful or higher.\n- Control a living player into performing their night action on a second player of your choice.\n- Control a dead player into performing their night action on a second player of your choice.\n- Transport two players of your choice, causing any abilities targeted towards either player to instead target the other one.\n- Go on Alert, granting you Basic Defense and dealing a Powerful Attack to all players who visit you tonight. (1 use)");

		e.addField("Attributes:", "- Cannot be stopped from performing a night action by any means.\n- If the Speedrunner chooses not to perform a night action on any given night, they may use an extra night action in the following night.");
		
		e.addField("Goal:", "Eliminate the Town, Mafia, Coven, etc. End the game by the beginning of Day 5. Additionally, the Speedrunner must be the first player to perform a night action on at least one night in the game in order to win. (If the Speedrunner is the first to choose their night action, but then changes their night action at any point after someone else chooses their night action, then it will not count as being the first to choose their night action for that night.");
	});
};
