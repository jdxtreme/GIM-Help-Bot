module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["enraged_prostitute", "enragedprostitute", "801"], "Neutral", "Enraged Prostitute", (e) =>
	{
		e.setDescription("Post 801");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night. You'll also roleblock each other player who target them that night.");

		e.addField("Attributes:", "- Roleblock Immune");
		
		e.addField("Goal:", "Town Goal");
	});
};
