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
};
