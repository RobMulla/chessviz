import json
import os
import numpy as np
from pprint import pprint


'''Iterate over all player data, create array of total values for pawns, add to aggregate,
   store percentages and then calculate percentages for player data in dictionary by parsed
   player name
   Calculate diff in percentages
'''

piece_dict = {'B': 1, 'N': 2, 'R': 3, 'Q': 4, 'K': 5}


directory = '/Users/mwburke/Documents/MIDS/Summer_2017/W209/chessviz2/app/data/json/as_color/'

agg_data = np.zeros(6, dtype=int)
player_data = {}

for file in os.listdir(directory):

    with open(os.path.join(directory, file)) as data_file:
        name = file.split('.')[0]
        piece_counts = np.zeros(6, dtype=int)
        player_info = json.load(data_file)
        for move in player_info['moves'].keys():
            for move_path in player_info['moves'][move].keys():
                if move[0] in piece_dict.keys():
                    piece_counts[piece_dict[move[0]]] += player_info['moves'][move][move_path]
                    agg_data[piece_dict[move[0]]] += player_info['moves'][move][move_path]
                else:
                    piece_counts[0] += player_info['moves'][move][move_path]
                    agg_data[0] += player_info['moves'][move][move_path]

        piece_counts = piece_counts / np.sum(piece_counts)
        player_data[name] = piece_counts

agg_data = agg_data / np.sum(agg_data)

print('Player data:')
pprint(player_data)
print('Aggregate data:')
pprint(agg_data)

for player in player_data.keys():
    player_data[player] = np.subtract(player_data[player], agg_data)

print('Player minus aggregate data:')
pprint(player_data)



def make_dict(name, arr):

    out_dict = {}
    data_dict = []
    out_dict['Name'] = name

    data_dict.append({"Piece": "Pawn", "Weirdness":np.round(arr[0] * 1000, 5)})
    data_dict.append({"Piece": "Bishop", "Weirdness": np.round(arr[1] * 1000, 5)})
    data_dict.append({"Piece": "Knight", "Weirdness": np.round(arr[2] * 1000, 5)})
    data_dict.append({"Piece": "Rook", "Weirdness": np.round(arr[3] * 1000, 5)})
    data_dict.append({"Piece": "Queen", "Weirdness": np.round(arr[4] * 1000, 5)})
    data_dict.append({"Piece": "King", "Weirdness": np.round(arr[5] * 1000, 5)})

    out_dict['Data'] = data_dict

    return out_dict




keep_names = ['Kasparov', 'Fischer', 'Carlsen', 'Morphy', 'Capablanca', 'Anand', 'Nakamura', 'Tal']

out_data = {}
dict_list =  []
for key in player_data.keys():
    if key in keep_names:
        dict_list.append(make_dict(key, player_data[key]))

out_data['Players'] = dict_list

print('Weirdness file format data:')
pprint(out_data)

with open('/Users/mwburke/Documents/MIDS/Summer_2017/W209/chessviz2/app/data/json/player_weirdness.json', 'w') as outfile:
    json.dump(out_data, outfile)




'''For each piece in the moves for the data frame representing a JSON file,
   find the maximum and minimum for all the move counts. Scale each on a
   scale from 0-100, rounded to the nearest integer and return the data frame
'''
def scale_moves(df):
    for move in df['moves'].keys():
        mv_min = 100
        mv_max = 0

        # Find min/max for this particular piece
        #if type(df['moves'][move]) == dict:
        for move_path in df['moves'][move].keys():
            move_count = df['moves'][move][move_path]
            if move_count < mv_min:
                mv_min = move_count
            if move_count > mv_max:
                mv_max = move_count

        # Use the new min/max values to get ratio to scale values to 0-100
        #if type(df['moves'][move]) == dict:
        for move_path in df['moves'][move].keys():
            df['moves'][move][move_path] = int(np.round((df['moves'][move][move_path] - mv_min) / (mv_max - mv_min) * 100, 0))

    return df['moves']
