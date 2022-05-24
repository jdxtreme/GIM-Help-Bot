module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["journalist", "451"], "Town", "Journalist", (e) =>
	{
		e.setDescription("Post 451");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Select someone during the day to anonymously talk with them during the night.\n- During the night, you may choose to equip a bulletproof vest.");

		e.addField("Attributes:", "- When interviewing someone, you will appear as \"Journalist\".\n- You have 1 **Basic** defense vest.");
		
		e.addField("Goal:", "Town Goal");
	});
};
