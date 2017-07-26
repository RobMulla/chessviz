
import json
import random

with open('data/json/Zvjaginsev_stats.json') as f:
    data = json.load(f)

for move in data['moves'].keys():
    for submove in data['moves'][move].keys():
        data['moves'][move][submove] = random.randint(-100,100)

with open('data/json/test.json', 'w') as outfile:
    json.dump(data, outfile)