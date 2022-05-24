module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["robber", "751"], "Neutral", "Robber (Stealer is too unique of a name ngl)", (e) =>
	{
		e.setDescription("Post 751");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "None... yet >:D");

		e.addField("Attributes:", "- During the day, choose someone. You will temporarily steal their ability.\n- You can use your abilities at night.\n- After 2 nights of having the ability, you will return it to the original target.\n- You may use multiple abilities in 1 night.");
		
		e.addField("Goal:", "Use 3 different abilities.");
	});
};
