module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["creepy_girl", "creepygirl", "651"], "Neutral", "Creepy Girl", (e) =>
	{
		e.setDescription("Post 651");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone your doll on night one.\n- Force your doll onto another player at night.\n- Choose to roleblock the player with your doll at night.");

		e.addField("Attributes:", "- A player who possesses your doll may choose to give the doll to another player during the night.\n- Forcing your doll onto another player will override the player choosing to give their doll to another player. You may do this once.\n- When you roleblock the player with your doll, you will also learn their identity. You may do this twice.\n- If the player with your doll is lynched, you will come into possession with the doll again at the beginning of the night and may choose another player to receive the doll.");
		
		e.addField("Goal:", "Have the player in possession of your doll die at night.");
	});
};
