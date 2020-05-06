# coding: utf-8
import json


def Location(name):
	if(name == "モミ"):
		return "left"
	elif(name == "ユータ"):
		return "right"
	else:
		return "center"

story = {}

# ファイル処理
with open("1-1;邂逅.txt") as f:
	# 一行ずつ処理
	i = 0
	for s_line in f:
		s_array = s_line.split('「') # "「"を削除
		name = s_array[0]
		text = s_array[1].split('」')[0]
		item = {"name":name, "text":text, "loc":Location(name)}
		story[i] = item
		i += 1


with open("1-1.json", 'w') as f:
	json.dump(story, f, ensure_ascii = False, indent = 4)
print(story)