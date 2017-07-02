#!/usr/bin/env python3

# Imports
import argparse
from chessviz import ChessMatch
import chess.pgn
import csv
import sys

# Set up argument parser
parser = argparse.ArgumentParser(description='Process PGN game files into a more usable format.')
parser.add_argument('--game_file', type=str,
                    help='a .pgn file with chess match data.')
args = parser.parse_args()

sys.stdout.write('\nProcessing game file {}\n'.format(args.game_file))

# Open connection to a .pgn file with some games
pgn = open(args.game_file)

with open('chessdata.csv', 'w') as f:
    # Set up a CSV writer
    writer = csv.writer(f, dialect='unix')

    # Write a header row
    writer.writerow(['game_number', 'white', 'move_number',
                     'piece', 'move_from', 'move_to', 'taken'])

    # Read in the first game
    game = chess.pgn.read_game(pgn)

    # Parse this and all further games, append into the CSV
    gameNum = 1
    while game is not None:
        sys.stdout.write('Processing game {}...'.format(str(gameNum)))
        moves = game.main_line()
        board = ChessMatch()
        moveNum = 1
        white = 1
        for move in moves:
            # Grab moves and update row
            move_from = move.uci()[0:2]
            move_to = move.uci()[2:4]
            piece, taken = board.handle_move(move_from, white, move_to)
            writer.writerow([game.headers['FICSGamesDBGameNo'], white, moveNum,
                             piece, move_from, move_to, taken])

            # Flip back and forth between white and black
            white = (white + 1) % 2
            moveNum += 1

        sys.stdout.write('DONE\n')
        game = chess.pgn.read_game(pgn)
        gameNum += 1
