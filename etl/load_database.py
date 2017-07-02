#!/usr/bin/env python3

# Imports
import argparse
import sqlite3
import csv
import sys

# Set up argument parser
parser = argparse.ArgumentParser(description='Store chess game data in  SQLite database.')
parser.add_argument('--game_db', type=str,
                    help='Path to store the DB created by this script.')
parser.add_argument('--game_csv', type=str,
                    help='Path to store the CSV with data to be pushed to the database.')
args = parser.parse_args()

# Create the database
sys.stdout.write('\nCreating a SQLite DB to store game data...')
conn = sqlite3.connect(args.game_db)
sys.stdout.write('DONE\n')

# Start fresh
cur = conn.cursor()
cur.execute("""DROP TABLE IF EXISTS gamedata""")

# Create a table to hold the game data
sys.stdout.write('Creating new table for game data...')
cur.execute("""CREATE TABLE gamedata
            (gameid integer, white integer, move integer,
             move_piece string, move_to string, move_from string,
             taken_piece string)""")
sys.stdout.write('DONE\n')

# Read in the CSV and put it into the database
sys.stdout.write('Reading in data and writing to DB...')
with open('chessdata.csv', 'r') as f:
    reader = csv.reader(f.readlines()[1:])
    cur.executemany("""INSERT INTO gamedata VALUES (?,?,?,?,?,?,?)""",
                    (row for row in reader))
sys.stdout.write('DONE\n')

# Clean up
conn.commit()
conn.close()

sys.stdout.write('Done populating database with game data. See {}.\n'.format(args.game_db))
