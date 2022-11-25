args = {...}
lines = {}
output = "module.exports = (g) =>\n{\n\tconst {register_role, factions, GOOD, EVIL} = g;"

SPECIAL = "[^_%w]"
EXCLUDE = {"a", "an", "the", "to", "of", "but", "or", "and", "with", "without", "can", "cannot", "can't", "no", "do", "does", "don't", "doesn't", "us", "our", "you", "i", "me", "this", "that", "there", "then", "in", "out", "not", "if", "it", "it's", "its", "role", "event"}
for _, w in ipairs(EXCLUDE) do
	EXCLUDE[w] = true
end

function split(input, sep)
	if not sep then
		sep = " "
	end

	local t = {}

	for str in string.gmatch(input, "([^"..sep.."]+)") do
		t[#t+1] = str
	end

	return t
end

for line in io.lines(args[1]) do
	lines[#lines+1] = line
end

for a, line in ipairs(lines) do
	if line:sub(1, 1) ~= "#" then
		output = output.."\n\n\tregister_role(["
		local param = split(line, "\t")

		local namewords = split(param[2]:lower())

		if #namewords > 1 then
			local names = {}
			local acroS = ""
			local acroL = ""

			names[1] = param[2]:lower():gsub(" ", "_")
			names[2] = names[1]:gsub("_", "")

			if names[1]:find(SPECIAL) then
				names[3] = names[1]:gsub(SPECIAL, "")
				names[4] = names[2]:gsub(SPECIAL, "")
			end

			for _, n in ipairs(namewords) do
				if not EXCLUDE[n] then
					names[#names+1] = n
					acroS = acroS..n:sub(1, 1)

					if n:find(SPECIAL) then
						names[#names+1] = n:gsub(SPECIAL, "")
					end
				end

				acroL = acroL..n:sub(1, 1)
			end

			names[#names+1] = acroL

			if acroS ~= acroL then
				names[#names+1] = acroS
			end

			for _, n in ipairs(names) do
				output = output.."\""..n.."\", "
			end
		else
			output = output.."\""..namewords[1].."\", "
		end

		output = output..string.format("\"%s\"], \"%s\", \"%s\", {subCat: \"%s\"}, (e) =>\n\t{\n\t\te.setDescription(\"Post %s\");\n\n\t\te.addField(\"Alignment\", \"", param[1], param[4], param[2], param[5], param[1])..(param[6] == "Y" and "Unique " or "")..string.format("%s %s\", true);\n\t\te.addField(\"Attack\", \"None\", true);\n\t\te.addField(\"Defense\", \"None\", true);\n\n\t\te.addField(\"Abilities:\", \"‎\");\n\n\t\te.addField(\"Attributes:\", \"‎\");", param[4], param[5])

		if param[4] == "Any" or (param[4] == "Neutral" and param[5] ~= "Killing") then
			output = output.."\n\n\t\te.addField(\"Goal:\", \"‎\");\n\t});"
		else
			output = output.."\n\n\t\te.addField(\"Goal:\", "..(param[4] == "Neutral" and "factions.Neutral.goalNK" or "factions."..param[4]..".goal")..");\n\t});"
		end
	end
end

output = output.."\n};"

print(output)
fileout = io.open("base.js", 'w')
fileout:write(output)
fileout:close()
