module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["cameraman", "2351"], "Town", "Cameraman", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2351\n*I'd rather have cameras that always watch us than cameras that... blink.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set up any number of cameras outside any number of players' houses each night.");

		e.addField("Attributes:", "- Whenever a player with cameras outside their house is visited by a player, you will learn that visitor's name, then one of those cameras is used up. If they're visited by multiple players each night, this triggers as many times as there are cameras.\n- You start with zero cameras. Whenever a player died and isn't cleaned, stoned, or similar, you gain two cameras.\n- Once per game, at any time, you may grow desperate, gaining two cameras but permanently losing your ability to see the day chat.");

		e.addField("Goal:", factions.Town.goal);
	});
};
