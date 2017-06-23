import sqlite3
import csv

conn = sqlite3.connect('chessviz.db')
cur = conn.cursor()
cur.execute("""DROP TABLE IF EXISTS chessdata""")
cur.execute("""CREATE TABLE chessdata
            (gameid integer, white integer, move integer,
             move_piece string, move_to string, move_from string,
             taken_piece string)""")

with open('chessdata.csv', 'r') as f:
    reader = csv.reader(f.readlines()[1:])
    cur.executemany("""INSERT INTO chessdata VALUES (?,?,?,?,?,?,?)""",
                    (row for row in reader))
conn.commit()
conn.close()