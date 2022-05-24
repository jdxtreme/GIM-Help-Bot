module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["maiden", "701"], "Neutral", "Maiden", (e) =>
	{
		e.setDescription("Post 701");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- (Day Ability): Choose a player to serve during day 1, you will gain this players win condition and gain a night chat with them, if your target is a factional member, you will gain their night chat.\n- (Night Ability): you may choose twice per game to use your skills and serve all players visiting your target, turning away all visits back onto themselves.");

		e.addField("Attributes:", "- You cannot die at night until your target is dead.\n- When your target dies, you will become 702: Hopeless.");
		
		e.addField("Goal:", "See your master win the game.");
	});
};
