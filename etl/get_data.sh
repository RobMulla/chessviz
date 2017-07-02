#!/bin/sh

# Break if anything goes wrong
set -e

# Some random bank of chess data (doesn't really matter which month we choose)
FICS_DATA="http://www.ficsgames.org/dl/ficsgamesdb_201701_standard2000_nomovetimes_1476768.pgn.bz2"

# Grab the data and unzip it
wget $FICS_DATA -O games.pgn.bz2
bzip2 -d games.pgn.bz2

# Convert those data to CSV
source activate chessviz
python convert_raw_data.py --game_file games.pgn

# Put that CSV into a SQLite database
DB_PATH=$(pwd | grep -o '/.*[^etl]')/app/data/gamedata.db
python load_database.py --game_db $DB_PATH --game_csv 'chessdata.csv'