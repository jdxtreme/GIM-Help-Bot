local BTYPES = {["()"] = "()", ["[]"] = "[]", ["{}"] = "{}"}

local args = {...}
local filename = args[1]
local btype = BTYPES[args[2]]

if not btype then
	print("Unrecognized Bracket Type! Using default: ()\nValid Options: () or [] or {}")
	btype = "()"
end

local openers = {}
local opener = btype:sub(1,1)
local closer = btype:sub(2,2)

print("Loading file...")

local lines = {}
for line in io.lines(filename) do
	lines[#lines+1] = line
end

print("Analyzing file...")

for l, line in ipairs(lines) do
	for i = 1, #line do
		local c = line:sub(i, i)
		
		if c == opener then
			table.insert(openers, {line = l, char = i})
		elseif c == closer then
			if #openers > 0 then
				table.remove(openers)
			else
				print("Extra '"..closer.."': Line "..l..", Char "..i)
			end
		end
	end
end

if #openers > 0 then
	for _, o in ipairs(openers) do
		print("Extra '"..opener.."': Line "..o.line..", Char "..o.char)
	end
end

print("Analysis complete.")
