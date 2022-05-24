module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["top_10_best_gim_roles", "top_10", "551"], "Neutral", "Top 10 Best GIM Roles", (e) =>
	{
		e.setDescription("Post 551");

		e.addField("Alignment", "Neutral (Other)", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When you roll this role, pick 10 roles in the GIM roles thread. Your role will be rerolled to one of those roles at random.");
		
		e.addField("Goal:", "N/A");
	});
};
