module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["violin", "1651"], "Band", "Violin", {subCat: "String"}, (e) =>
	{
		e.setDescription("Post 1651");

		e.addField("Alignment", "Band String", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform an Investigator (35) check on a player.\n- (Rehearsal) Poison a player if they are an enemy that is non-good, then rehearse.\n- (Concert) Learn the true role of a player. Twice per game, after learning their role, you may choose to attack them.");

		e.addField("Attributes:", "- You do not notify your targets that they were investigated.\n- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["paramedic", "1652"], "Sentry", "Paramedic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1652");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Restabalize an authorized target.\n- Restabalize yourself, even if you are not authorized. 1 use.\n- Restabilize any unauthorized target. 1 use.");

		e.addField("Attributes:", "- Restabalization will cause all and any cause of death to a target to fail, regardless of the specifics of the cause of death. This does absolutely nothing else, such as remove Poison. Contact a Patrol for that.\n- If your target is not a Sentry, restabalization will instead grant them a Powerful defense auto-vest.\n- Oh yeah, you can't tell the difference between the two. All you'll know is if you saved your target from literally anything the night you targeted them.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["zerosage", "zero", "zage", "1653"], "Discordian", "Zerosage", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1653");

		e.addField("Alignment", "Unique Discordian Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "\"Immortal\"", true);

		e.addField("Abilities:", "- Tell someone to return to oblivion, causing them to cope, seethe and mald. This is an attack, and can only be performed on odd-numbered nights.");

		e.addField("Attributes:", "- Astral Visitor\n- As you have transcended humanity numerous times, your attacks cannot be interacted with whatsoever, except by roles that heal your target.\n- You don't exist. No abilities that interact with you will affect you in any way whatsoever. You are absolutely immune to everything in the game possible that can happen to any player whatsoever, except for being lynched normally during the day, at a grade even higher than the Commuter. You do not count towards the majority. Your vote does nothing (it will appear to). You cannot hear whispers. If you are the last Discordian alive, the Discordians will lose.");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["satan", "1654"], "Seven", "Satan", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1654");

		e.addField("Alignment", "Unique Seven Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Offer a player a contract during the day. (3 uses)");

		e.addField("Attributes:", "- Redirect, Control, Conversion, and Roleblock immunity.\n- You will be notified when your target has decided on their contract, but not what they chose.");

		e.addField("The Contract:", "- If you accept the contract, you must see the Seven win, you will replace your current wincondition with this.");
		
		e.addField("Goal:", "Devolve the town into sin and chaos.");
	});

	register_role(["wrath", "1655"], "Seven", "Wrath", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1655");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "Powerful (Overkill)", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Destroy a players house in rage during the night, roleblocking them, their visitors, and who they visit. (3 uses)\n**Insatiable Vexation** — Instead of roleblocking, kill your target, their visitors, and who they visit. (1 use)");

		e.addField("Attributes:", "- Roleblock, Control, and Redirection Immunity.\n- When you are attacked for the first time, you will kill your target in rage regardless of their defense level.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["lust", "1656"], "Seven", "Lust", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1656");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Cause a player to give into their darkest desires, forcing them to visit you past immunity, this resolves first, meaning they are guaranteed to visit you even if transported, controlled, or roleblocked.\n**Insatiable Desire** — Super-roleblock three players for this night, then disable their ability for the next. (1 use)");

		e.addField("Attributes:", "- You may not target the same person twice with your first ability.\n- You will appear to be a role you selected on Day 1 to all Town members.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["peacekeeper", "peace", "1657"], "Sentry", "Peacekeeper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1657");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, keep the peace. You will deal a Basic Attack to anyone who uses any attack that is more powerful than Basic or if they use a Rampage attack.\n- Once per game, crush the opposition. Deal a Powerful Attack to an authorized target who voted to lynch someone who wasn’t lynched.");

		e.addField("Attributes:", "- If you attack an authorized target while keeping the peace, you will deal a Powerful Attack instead of a Basic Attack.\n- Your ability counts as a visit against any player you attack.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["greed", "1658"], "Seven", "Greed", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1658");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Copy a random ability from a target at night. They will be notified of this. You may not target members of the Seven. (3 uses)\n**Insatiable Avarice** — Gain a charge of every single ability used tonight from non-Seven roles. Once you use this, you may no longer multitask. (1 use)");

		e.addField("Attributes:", "- Your visits are Astral.\n- You may Multitask, though this does include performing the factional Seven kill.\n- When you're visited by any non-Seven role you will copy all of their abilities without their knowledge.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["sloth", "1659"], "Seven", "Sloth", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1659\n*..........hell.....o..........good.....bye..........*");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Delay a player. After tonight, everything they do will happen 1 day later. For example, if they investigated someone on N2, it will act like they investigated someone on N3 instead. A player will be notified they were delayed and the delay will last for 2 nights. (3 uses)\n**Insatiable Exhaustion** — When this is used, if a member of Seven is killed during the night or lynched in next morning, the death will be delayed for 2 days. (1 use)");

		e.addField("Attributes:", "- - Roleblock immunity.\n- When a member of Seven is visited, the effect will be delayed for 1 day. ");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["envy", "1660"], "Seven", "Envy", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1660");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control a player into another. If they are control immune, redirect them. If they're also redirect immune, attack them out of anger.\n**Insatiable Control** - Select a player. Permanently gain the ability to use their ability. When you use their ability, you will also automatically roleblock them. If they die at night, automatically attack their killer. If they die at day, automatically kill the last person to vote them. 1 use.");

		e.addField("Attributes:", "- You will learn the outcome of the abilities of everyone you've previously targeted.\n- Insatiable Control will fail if your target only has limited use abilities.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["sundew", "1661"], "Florae", "Sundew", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1661\n*Who said I was carnivorous?*");

		e.addField("Alignment", "Florae Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Repress your hunger tonight. Your defense will be lowered to None, and you will not attack anyone who visits you tonight. (3 uses)\n- Lure a target tonight, redirecting them to you. (1 use)");

		e.addField("Attributes:", "- Control and roleblock immune.\n- You will indiscriminately attack anyone who visits you at night. On Night 6, you will be worn out, removing this attribute and your Basic defense.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["pride", "1662"], "Seven", "Pride", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1662\n*You could shine so brilliantly, if you wanted it enough.*");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose a player to grace. The following night, they may use their ability twice, and are granted powerful defence, but afterwards are astrally roleblocked by you every night. If you use this ability, you cannot perform the factional kill the following night. (3 uses)\n**Insatiable Hubris** — All abilities that heal or provide protection will instead set their target's defence to vulnerable tonight. (1 use)");

		e.addField("Attributes:", "- The first time a member of the Seven is lynched, all players who voted for them are removed from the lynch vote the following day.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["blackout", "1663"], "Stalker", "Blackout", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1663");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose to initiate a Blackout tonight. 2 uses.");

		e.addField("Attributes:", "- At the beginning of the night, the town will be notified there is a Blackout. All members of the good faction will only be able to visit people within 2 radius of them. (If the player order was TLHP, Viri, Rasen, Me, Wolfi. Zage, Vik, i would not be able to visit tlhp, vik, or anyone beyond them, but i can visit viri, rasen, wolfi, and zage)\n- Your ability does not affect non-good roles.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["gluttony", "1664"], "Seven", "Gluttony", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1664");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Attempt to absorb a player's abilities. If they have None or worse defense, you will gain access to 1 shot of a random ability they have.\n**Insatiable Hunger** - Target a player and attack them. If successful, raise your Attack and Defense by one stage each, to a maximum of Unstoppable and Invincible. Each night after the first, you will randomly select a target to attack. If you ever fail to attack for any reason, your Attack returns to Basic and your Defense becomes Vulnerable. 1-use. This ability uses the factional kill for each night of its duration.");

		e.addField("Attributes:", "- If your target dies by any means while you are attempting to absorb their ability, you will fail.\n- While you're alive, all players killed by the Seven will have their cause of death to appear as simply \"Seven\", their will is wiped, and their role appears as \"Devoured\".\n- \"Randomly\" selected targets are constrained to players who are alive and not members of the Seven team.");
		
		e.addField("Goal:", factions.Seven.goal);
	});

	register_role(["scp-002", "scp_002", "scp002", "1665"], "SCP", "SCP-002", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 1665");

		e.addField("Alignment", "SCP Keter", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Entrap all your visitors at night, then kill them and wipe their will. 3 uses.\n- Once you are out of entraps, use the players you have turned into furniture and attack a player. 1 use per player killed. If you killed less than 2 people, you get 2 uses instead.");

		e.addField("Attributes:", "- Additionally, when you are entrapping, the abilities of your visitors will fail.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["exponential_killer", "exponentialkiller", "exponential", "ek", "1666"], "Neutral", "Exponential Killer", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 1666");

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night. You may use this as many times per night for each person you've killed so far, plus one.\n- Attack all your visitors.\n- Attack all of someone else's visitors.");

		e.addField("Attributes:", "- You may not multitask multiple abilities.");
		
		e.addField("Goal:", "Eliminate absolutely everyone, including Neutrals who would otherwise assist you.");
	});

	register_role(["bomber", "1667"], "Warfleet", "Bomber", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1667");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Intercept a player's visit. 2 uses.");

		e.addField("Attributes:", "- When you use the Factional Attack, you may instead choose to bomb your target's target, killing anyone intending on visiting them.\n- Because you have to depart and land, you cannot use your ability two nights in a row.\n- Intercepting a visit will cause the visit to fail.");

		e.addField("Upgrade:", "- 1 use Basic defense.\n- Gain a use of your ability.\n- You will no longer need to wait a night to use your ability.");
		
		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["archmage_of_fire", "archmageoffire", "archmage", "fire", "aof", "1668"], "Coven", "Archmage of Fire", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1668\n*I am better than Fire Mage. They are an Impersonator. Smh.*");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Burn two players at night. They can no longer use a will and it will be burnt if they die. Their abilities will no longer affect the Coven members. However, they won‘t be notified.");

		e.addField("Attributes:", "- With the Necromonicon, burning players will be basic attacked after 2 days. If they survive, then next day, the burning will increase by one tier and they‘re attacked again. This will continue until they’re killed.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["reve_kagemura", "revekagemura", "reve", "kagemure", "rêve_kagemura", "rêvekagemura", "rêve", "rk", "1669"], "City", "Rêve Kagemura", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1669");

		e.addField("Alignment", "City Protective", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Track a player. If they attack, redirect the attack to yourself. If you survive, counterattack with an attack of the same tier.");

		e.addField("Attributes:", "- After being attacked, your Defense decreases by 1 tier.\n- If you are not attacked during the night, your Defense increases by 1 tier, up to Powerful.");
		
		e.addField("Goal:", factions.City.goal);
	});

	register_role(["viola", "1670"], "Band", "Viola", {subCat: "String"}, (e) =>
	{
		e.setDescription("Post 1670");

		e.addField("Alignment", "Band String", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch a player to see who they visited during the night.\n- (Rehearsal) Target two players. If one visits the other, attack the visitor. If both visit each other, attack both, then rehearse,\n- (Concert) Target two players. You will see who they visit and who visits them every night. If either of them ever visit you, you will attack them.");

		e.addField("Attributes:", "- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["eagle", "1671"], "Thundercry", "Eagle", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 1671");

		e.addField("Alignment", "Thundercry Onslaught", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player during the night. In addition, check the target chain originating from them (who the target visited, who that person visited, etc.). The attack tier is equal to the number of Striked players in that chain.\n- Check a player’s chain during the night. If it is at least 4 players long without counting loops, gain a Strike. You will know who is in the chain.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If two or more Striked players are alive, gain basic defense.\n- If three or more Striked players are alive, your attack will hit the second player in the chain with an attack tier 1 less than the first.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["scout_cruiser", "scoutcruiser", "scout", "cruiser", "sc", "1672"], "Warfleet", "Scout Cruiser", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1672");

		e.addField("Alignment", "Warfleet Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scout out a player, performing an Investigator (35) check on them and seeing who they visit.\n- Weaken a player’s defenses, dropping it by 1 tier for that night, to a minimum of Vulnerable.");

		e.addField("Attributes:", "- Attacks made by the Warfleet against Scouted targets cannot be redirected or otherwise changed to target a different player. (they can still be roleblocked or fail via defense)\n- Your Scouting ability is Astral.");

		e.addField("Upgrade:", "- Weakening defenses now drops a player’s Defense to None, or Vulnerable if their Defense is already None.\n- You may Scout two times in one night.");
		
		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["poltergeist", "1673"], "Spirit", "Poltergeist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1673");

		e.addField("Alignment", "Spirit Support", true);
		e.addField("Attack", "Faction Variable", true);
		e.addField("Defense", "Faction Variable", true);

		e.addField("Abilities:", "- Meddle with your surroundings during the night, redirecting all of your visitors into themselves.\n- Hide a player’s ability during the night. While you are alive, they will not be able to use that ability. This is not a roleblock and only takes effect after the current night ends. (2-shot)");

		e.addField("Attributes:", "- If you fail to redirect someone who visits you, you will instead roleblock them.\n- You may choose to unhide a player’s ability at any time, giving it back to them, but this will not refund a shot of hiding.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["yarrow", "1674"], "Florae", "Yarrow", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1674");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Purge a player at night. Additionally, you will nullify any effects given to them by non-Florae roles.\n- You may purge yourself once. You will also nullify effects.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["nightmare_doll", "nightmaredoll", "nightmare", "doll", "nd", "1675"], "PaleMoon", "Nightmare Doll", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 1675");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trap someone in your Nightmare.\n- You may trap yourself in your Nightmare once. You will not nullify your night action if you do so.\n- When the PMCS start, you may trap 2 people each night, and If they are a Pale Moon, their night action will not be nullified.");

		e.addField("Attributes:", "- Your trapped target's night action is completely nullified. You will also nullify any night actions dealt on them. This action has the highest priority and overrides everything, meaning nothing can bypass it.");
		
		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["dreaming_pegasus", "dreamingpegasus", "dreaming", "pegasus", "dp", "1676"], "PaleMoon", "Dreaming Pegasus", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 1676");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trap someone in your Dreams.\n- You may trap yourself in your Dreams once.\n- When the PMCS starts, you may trap 2 people each night, and If they are a Pale Moon, they will not be roleblocked through immunity.");

		e.addField("Attributes:", "- Your trapped target is granted Invincible Defense the night you trap them, but will be roleblocked through immunity the night after.");
		
		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["health_reporter", "healthreporter", "health", "reporter", "hr", "1677"], "Biohazard", "Health Reporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1677");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deem a player as infectious.\n- Spread gossip that a player is infectious.");

		e.addField("Attributes:", "- You may only have 2 players deemed as infectious.\n- The gossip about the two act separate.\n- When someone visits you, or you visit them (unless you're deeming them infectious), you will inform them about all currently \"infectious\" players. They will not be notified.\n- This spreads like a Plaguebearer's plague, anyone who knows about gossip who visits or gets visited will spread it.\n- If someone who has heard gossip about someone tries to visit the player, their ability will fail.\n- If someone who has heard gossip gets visited by an \"infectious\" player, they will run from their house, and the \"infectious\" player's ability will fail.\n- Biohazard players cannot be fooled by gossip. However, they can be deemed as \"infectious\".\n- To prevent an endless loop, \"infectious\" players cannot spread gossip about themselves. Yes, this means you cannot mark yourself as \"infectious\".");
		
		e.addField("Goal:", factions.Biohazard.goal);
	});

	register_role(["lunch", "1678"], "Town", "Lunch", {subCat: "Nutrition"}, (e) =>
	{
		e.setDescription("Post 1678");

		e.addField("Alignment", "Town Nutrition", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a good meal, granting someone Powerful defense for the night.\n- Make someone a bad meal, roleblocking them.\n- Make someone a poisoned meal, poisoning them.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["yttd_hater", "yttdhater", "yttd", "hater", "yh", "1679"], "Neutral", "YTTD Hater", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1679");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At any point during the game, force half of the living players (of your choosing) into a game of Minority Rules. You must include yourself.");

		e.addField("Attributes:", "- The Minority Rules game will not stop the GIM game from proceeding. However, the Minority Rules game must end before the GIM game ends.");
		
		e.addField("Goal:", "Win in a game of Minority Rules.");
	});

	register_role(["accentillia", "accentilla", "accent", "1680"], "Discordian", "Accentillia", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1680");

		e.addField("Alignment", "Discordian Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "-At any night, you may choose to use the ability of Accent OC roles (see Post 354 Wielder of Hope, Asahi), post 727 Light of Accent, or post 625 Tierlister Accent for the night.");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["attached", "1681"], "Neutral", "Attached", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1681");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone at night.\n- Perform your host's abilities at night.");

		e.addField("Attributes:", "- At the beginning of the game, you are attached to a player. Their Alignment and goal is changed to that of a Neutral Killing's and they become only able to win with you.\n- The first and second time your host would die, you will attach yourself to another player. The third time, you will die. Unstoppable and higher attacks, as well as lynches don't take this attribute into account, and kill your normally.\n- Your host loses their immunities.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["genie", "1682"], "Coven", "Genie", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1682\n*Will give you three wishes. And you'll like it.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Choose a non-Coven player each day and offer three random wishes to them.");

		e.addField("Attributes:", "- All three wishes must be distinct.\n- The wishes will be shown to the target once the night begins, and must be chosen before the target is allowed to use any ability.\n- With the Necronomicon, the target will always take a Basic Attack at the end of the night. If they chose the Wish to deal themselves a Basic Attack, they'll instead unknowingly take a Powerful Attack.\n- Wishes that would have no effect cannot be chosen. For example, a player cannot be offered a \"Get Roleblocked for tonight\" wish if they're RB Immune or lack night abilities.\n- Your ability will fail if you would be forced to target a Coven member for any reason.\n- You will learn what your target(s) chose at the end of the night.");

		e.addField("Wishes:", "1. Get Roleblocked for tonight.\n2. Lose half (rounded up) uses from each of your limited-use abilities.\n3. Allow the Genie an additional use of their ability each day, permanently.\n4. Permanently increase the Genie's defense tier.\n5. Hit yourself with a Basic Attack that ignores your passive defense if you have any.\n6. Randomly disable one of your abilities for two nights and two days.\n7. Take a Powerful Poison (Post 85)\n8. Permanently lose all immunities that you currently have.\n9. Become unable to vote in the next phase.\n10. Allow the Genie to secretly submit another vote each day, permanently.\n11. Mute yourself in all game chats except your own player chat for tomorrow and the next night.\n12. Grant a Necronomicon to a Coven player that lacks one, even if one already exists.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["trigger_happy", "triggerhappy", "trigger", "happy", "th", "1683"], "Town", "Trigger Happy", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1683");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a target tonight, dealing an Unstoppable attack to them.");

		e.addField("Attributes:", "- If you target a non-Town player with your ability, you will heal yourself that night. You will be notified that this happened.\n- If you target a Town player with your ability, you will also deal an Overkill attack to yourself.\n- You will always shoot the player you target at night, bypassing redirections, controls, and anything else that would alter who gets shot.\n- Starting on N3, you're forced to use your ability each night.\n- This role can always be rerolled.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["not_ritualist", "notritualist", "ritualist", "1684"], "Town", "Not Ritualist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1684");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice a Town member to haunt another player.");

		e.addField("Attributes:", "- Sacrificing a Town member deals an Overkill attack to them and allows you to deal an Unstoppable attack to your second target.\n- If you attempt to sacrifice a non-Town member, you will sacrifice yourself instead. You may also choose to sacrifice yourself normally.\n- If you kill a Town member with your haunt, you can only sacrifice yourself for the rest of the game.\n- You cannot keep a last will due to your practices being forbidden.\n- If you sacrifice a Town member to kill a Town member N1, you are given the nice shiny <@&976214023857111060> role.\n- You also can sacrifice any roles that can win with Town. See? It's not Ritualist!");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["overseer_of_the_dead", "overseerofthedead", "overseer", "ootd", "1685"], "Neutral", "Overseer of the Dead", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1685");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revoke a player's permission to return to the realm of the living at night. They may no longer be voted during the Revival Meeting.\n- Cancel the next Revival Meeting at night. No meeting will be held in the day.");

		e.addField("Attributes:", "- You have access to the dead chat.\n- On every day besides D1, you will host a Revival Meeting in the dead chat. All dead players, and you, may vote for each other to decide someone to revive. That player is revived at the beginning of the next night, and cannot be lynched during the next morning.\n- You have two votes during this meeting.\n- Your attributes will remain active and your abilities can still be used while you're dead.");
		
		e.addField("Goal:", "See at least 5/6 of the players in the game enter the graveyard at some point.");
	});

	register_role(["poppy", "1686"], "Florae", "Poppy", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1686");

		e.addField("Alignment", "Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant a seed of remembrance in a player once per day, allowing you to see into their voters.");

		e.addField("Attributes:", "- Your action resolves immediately.\n- Of your target's voters, you will learn how many of them are not of the same faction.\n- You cannot target a player with 1 or less votes to their name.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["soul_edge", "souledge", "soul", "edge", "se", "1687"], "Neutral", "Soul Edge", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1687\n*Those who grasp its hilt are unable to escape its curse, as its spirit invades the mind like a parasite and drives its wielder insane.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- At night, select a target for the player you are Equipped to to attack. If you both selected different targets, the attack will be directed toward one of them at random, and both you and the player you are Equipped to will be notified.");

		e.addField("Attributes:", "- If a player visits you while you are not Equipped to another player, you become Equipped to that player. They are notified as to who you are and the fact that you have become Equipped to them.\n- Players that you are Equipped to have their Attack value raised to Unstoppable, unless it is higher. This value cannot be lowered.\n- All visits toward you or a player that you are Equipped to will be directed toward both of you, if applicable.\n- Players that you are Equipped to are forced to attack another living player at night. They cannot use any other Night ability unless the role is capable of multitasking. They may choose who to attack, but if they do not choose, they will attack whoever you chose. If neither of you chose a target, their target will be chosen randomly amongst living players, excluding themselves and you.\n- You will absorb the soul of any player that is killed by the player you are Equipped to.");

		e.addField("Attributes:", "- If you have been Equipped to the same player for the 3rd night in a row, you will absorb their soul at the end of the night. This will deal an Overkill attack to them. You may not die on the night that this happens.\n- If the player that you are Equipped to dies, you become unequipped. If they die as a result of a visit, you will become Equipped to their visitor.\n- You may only be Equipped to one player at a time. If you would become Equipped to multiple players at the same time, the player you become Equipped to is chosen randomly.\n- Each time you are attacked, your Defense value is lowered by one stage.\n- If you are lynched, you will not die, but your role will be revealed. If you are not Equipped to another player at the time this happens, you become Equipped to the first player that voted against you during this day.");
		
		e.addField("Goal:", "Absorb 5 souls.");
	});

	register_role(["very_dumb", "verydumb", "mgt-based", "mtg_based", "mtgbased", "rasen_role", "rasenrole", "vdmtgbrr", "bdmbrr", "1688"], "Neutral", "Very Dumb MTG-Based Rasen Role", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1688");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use your random abilities each night.");

		e.addField("Attributes:", "- At the start of each night, the host generates a random ability by hitting the \"Random Card\" or \"🔀 Random\" button at https://scryfall.com/ until they get an instant or sorcery card. You will be given an ability that corresponds to that spell's effect. Yup the host's just gonna hafta figure this the fuck out again lmao.");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["ritualist_nk", "ritualistnk", "ritualist", "1689"], "Neutral", "Ritualist but its NK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1689");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice a Good Faction member to haunt another player.");

		e.addField("Attributes:", "- The player you sacrifice will be killed by an Overkill Attack.\n- The player you haunt will be killed by an Unstoppable Attack.\n- If you try to sacrifice a non-Good member, you will instead sacrifice yourself. This stops being the case if there are no Good players alive.\n- If you try to haunt a Good player, you will only be able to sacrifice people for the rest of the game.\n- You are unable to use your ability more than once per night even if another effect would try to allow you to do more.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["hag", "1690"], "Stalker", "Hag", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1690");

		e.addField("Alignment", "Unique Stalker Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night and curse them to die in three nights' time.\n- Choose a player and curse them to unable to use abilities on odd days/nights from now on.");

		e.addField("Attributes:", "- Players will be notified when you curse them, and will know the specific effect applied to them.\n- Both curses can be removed by any effect that purges negative effects.\n- You cannot use either ability two nights in a row.\n- Control and Redirect immunity.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["rafflesia_arnoldii", "rafflesiaarnoldii", "rafflesia", "arnoldii", "raar", "1691"], "Florae", "Rafflesia Arnoldii", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1691");

		e.addField("Alignment", "Florae Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a guardian plant at a player's house. The plant will appear at the beginning the day.\n- Command the plant to release its scent, attacking everyone who visits tonight.");

		e.addField("Attributes:", "- The guardian plant will remain at your targets house until triggered.\n- If your target is attacked during the day or the night, the guardian plant will react, attacking the attacker and all other visitors with a Powerful attack.\n- When the plant attacks someone for any reason, or if you use your second ability, it will rot that night and you will spend the next night summoning another.\n- You may only have one plant summoned at a time.\n- The plant is not able to be interacted with, making you immune to effects which cancel or prevent abilities from happening. This is not Roleblock Immunity.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["campaigner", "campaign", "camp", "1692"], "Loyalist", "Campaigner", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1692");

		e.addField("Alignment", "Loyalist Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Campaign at a target’s home during the night.\n- Campaign for a player during the day (2-shot)");

		e.addField("Attributes:", "- While campaigning during the night, if your target takes an action that would result in them attacking a Loyalist, including the Governor, you will attempt to roleblock them.\n- When you campaign during the day, the target will secretly gain one additional voting power for that day. They will know that they have this new voting power.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["infiltrator", "infil", "1693"], "Insurgency", "Infiltrator", {subCat: "Informant"}, (e) =>
	{
		e.setDescription("Post 1693");

		e.addField("Alignment", "Insurgent Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Infiltrate a target’s private chat during the night.\n- Disable a player’s ability for the next night.");

		e.addField("Attributes:", "- If you infiltrate a target, you will learn if they have any private chats. If they do, you will learn one of the following at random:\n> - The size of the chat\n> - The role of one random player in the chat\n> - The name of one other player in the chat\n> - A random message sent by a player in the chat\n- If your target does not have any private chats, you will know.\n- If your target has multiple private chats, one will be selected at random, and you will not be informed of that.\n- If you disable a player’s ability, it will not be usable during the next night. If the target has multiple abilities, one will be chosen at random. In addition, you will learn the target’s role subcategory.\n- You may disable an ability that has no ammo or otherwise cannot be used.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["racist", "1694"], "Town", "racist", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1694");

		e.addField("Alignment", "Town Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prejudice someone each night. If their subalignment isn't Investigative, Killing, or Protective, roleblock them.\n- Discriminate someone at night. If their subalignment isn't Investigative, Killing, or Protective, they'll be the only player that can be voted for tomorrow. You may only do this once each game.");

		e.addField("Attributes:", "- Roleblock Immunity\n- If either of your abilities are used on yourself, you'll die immediately, and then you'll die again, and then you'll burn in the fiery pits of Hell.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["weretiger", "wt", "1695"], "Were", "WereTiger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1695");

		e.addField("Alignment", "Were Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, attack a player. You will bleed (Post 214, Animal Breeder) two of their visitors.\n- During a New Moon, attack a player, and bleed all those that the attacked player targetted. If your target did not target anybody or self targetted, you will instead bleed one of their visitors.");

		e.addField("Hunting Moon Enhancement: Sharp Claws", "Your Attack is upgraded to Powerful, and you will bleed all of their visitors.");
		
		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["follower", "1696"], "Stalker", "Follower", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1696");

		e.addField("Alignment", "Stalker Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player at night, roleblocking them.");

		e.addField("Attributes:", "- You will attack the target of your target. If the target did not target, you will attack your target. If the target targetted multiple targets, you will target one at random.");
		
		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["dracula", "1697"], "Neutral", "Dracula", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1697");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- You may choose a target to drain blood from, attacking them.");c

		e.addField("Attributes:", "- You will gain defense equal to the Attack Level of your drained target for the night. For example, if you drain a target with Unstoppable Attack, you will gain Invincible Defense.\n- You may win with roles related to vampires, if any spawn.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["apostle", "1698"], "Umbrae", "Apostle", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 1698");

		e.addField("Alignment", "Umbra Assault", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Attack a player.");

		e.addField("Attributes:", "- Your Attack Value, Defense Value and mechanics vary depending on the Moon:\n- Under no moon, you have Basic Attack and Basic Defense\n- Under a Full Moon, you have Powerful Attack, Basic Defense and you rampage.\n- Under a Blood Moon, you have Unstoppable Attack and Powerful Defense, you rampage, and you will clean everyone that you killed.");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["unionist", "1699"], "Insurgency", "Unionist", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 1699");

		e.addField("Alignment", "Insurgent Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target to protest with, and a target to protest against, during the night. 1 use.\n- Choose a target to parade with. 2 uses.");

		e.addField("Attributes:", "- If the target you protested with is lynched the following day, they are not lynched and the target you protested against Is lynched instead.\n- When you parade with someone, you will learn their night notifications, and they will learn your role.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["writer", "1700"], "Loyalist", "Writer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1700");

		e.addField("Alignment", "Loyalist Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect someone's Last Will during the day. 2 uses.\n- Investigate someone during the night, and you will learn the string of 10 roles   that your target's role is in. For example, if you investigated Post 4, Role Jury, you would learn your target's role is in between Post 1 and Post 10.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});
};
