module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["violin", "1651"], "Band", "Violin", {subCat: "String"}, (e) =>
	{
		e.setDescription("Post 1651");

		e.addField("Alignment", "Band String", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform an Investigator (35) check on a player.\n- (Rehearsal) Attack a player if they are an enemy that is non-good, then rehearse.\n- (Concert) Learn the true role of a player. Twice per game, after learning their role, you may choose to attack them.");

		e.addField("Attributes:", "- You do not notify your targets that they were investigated.\n- **Rehearse Radius**: 2");
		
		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["paramedic", "1652"], "Sentry", "Paramedic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1652");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Restabalize an authorized target.\n- Restabalize the Censor instead of an authorized target. 1 use.");

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

	register_role(["bionic", "bio", "1657"], "Discordian", "Bionic", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1657");

		e.addField("Alignment", "Discordian Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Brick Break** - Attack your target, this ignores passive defense, Can only be used N1.");

		e.addField("Attributes:", "- If you are lynched, you may choose (# of Alive players / 5, Rounded Up) players to deliver an Unstoppable attack to the following night.");
		
		e.addField("Goal:", factions.Discordian.goal);
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
		e.setDescription("Post 1659");

		e.addField("Alignment", "Unique Seven Sin", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player tonight and delay them. After tonight, everything they do will happen 1 day later. For example, if they investigated someone on N2, it will act like they investigated someone on N3 instead. A player will not be notified they were roleblocked or delayed and the delay will last until the end of the game. (3 uses)\n**Insatiable Exhaustion** — Delay every single person tonight for 1 day unless they're a member of Seven. If a member of Seven is killed during the night or lynched in next morning, it will be delayed for 2 days. (1 use)");

		e.addField("Attributes:", "- Roleblock and immunity.\n- When a member of Seven is visited, the effect will be delayed for 1 day.");
		
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
		e.setDescription("Post 1661");

		e.addField("Alignment", "Florae Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Repress your hunger tonight. Your defense will be lowered to None, and you will not attack anyone who visits you tonight. (3 uses)\n- Lure a target tonight, redirecting them to you. (1 use)");

		e.addField("Attributes:", "- You will indiscriminately attack anyone who visits you at night. You will be worn out by Day 6, and this attribute will no longer apply.");
		
		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["pride", "1662"], "Seven", "Pride", {subCat: "Sin"}, (e) =>
	{
		e.setDescription("Post 1662");

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
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Attempt to absorb a player's abilities. If they have None or worse defense, you will gain access to 1 shot of a random ability they have.\n**Insatiable Hunger** - Target a player and attack them. If successful, raise your Attack and Defense by one stage each, to a maximum of Overkill and Overprotective. Each night after the first, you will randomly select a target to attack. If you ever fail to attack for any reason, your Attack returns to Basic and your Defense becomes Vulnerable. 1-use.");

		e.addField("Attributes:", "- If your target dies by any means while you are attempting to absorb their ability, you will fail.\n- While you're alive, all players killed by the Seven will have their cause of death to appear as simply \"Seven\", their will is wiped, and their role appears as \"Devoured\".");
		
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
		
		e.addField("Goal:", "NG Goal");
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
		e.setDescription("Post 1668");

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
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

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
};
