#!/usr/bin/env python3

from helperchess import HelperChess
import chess.pgn
import csv
import bz2


SAN_REGEX = '([A-Z]?[db]?[A-Z]?[x]?[a-z][0-9][#=+]?)|(O-O-O)|(O-O)'

#pgn = open('data/fics/testfile.pgn')
#pgn = open('testfile.pgn')
#pgn = bz2.open('ficsgames.pgn.bz2', 'rb')
pgn = open('ficsgames.pgn')

# Read in next game in file, EOF returns None
game = chess.pgn.read_game(pgn)

moves = game.main_line()

with open('chessdata.csv', 'w') as f:
    writer = csv.writer(f, dialect='unix')
    while game is not None:
        #print(game.headers)
        #print('new game:')
        moves = game.main_line()
        board = HelperChess()
        moveNum = 1
        white = 1
        for move in moves:
            #print(move)
            move_from = move.uci()[0:2]
            move_to = move.uci()[2:4]
            piece, taken = board.handle_move(move_from, white, move_to)
            writer.writerow([game.headers['FICSGamesDBGameNo'], white, moveNum, piece, move_from, move_to, taken])
            #print(game.headers['FICSGamesDBGameNo'], white, moveNum, piece, move_from, move_to, taken)
            white = (white + 1) % 2
            moveNum += 1
        game = chess.pgn.read_game(pgn)


