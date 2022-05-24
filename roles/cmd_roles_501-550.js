module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["blue_dragon", "bluedragon", "501"], "Town", "Blue Dragon", (e) =>
	{
		e.setDescription("Post 501");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- If a player is on trial, you may choose to override the voting process and have them found guilty instantly. If the hanged player is Town, your attack power becomes Unstoppable but you lose your Basic defense. (1 use.)\n- Deal a Powerful attack (Unstoppable if you used your other ability to forcefully hang a Town member) to another player at night. If the target dies and is Town, you lose your Basic defense, your role becomes revealed, and your vote now counts as 2 votes. (1 use.)");

		e.addField("Attributes:", "- If both of the Blue Dragon's abilities cause the deaths of Town members, the Blue Dragon instantly dies.");
		
		e.addField("Goal:", "Town Goal");
	});
};
