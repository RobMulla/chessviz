import sqlite3
import time
from flask import Flask
from flask import request
from flask import g
from flask import jsonify

app = Flask(__name__)

DB_PATH = '/Users/mwburke/Documents/MIDS/Summer_2017/W209/W209-Final-Project/data/fics/chessviz.db'

app.config.from_object(__name__)


def connect_to_database():
    return sqlite3.connect(app.config['DB_PATH'])


def get_db():
    db = getattr(g, 'db', None)
    if db is None:
        db = g.db = connect_to_database()
    return db


def execute_query(query, args=()):
    cur = get_db().execute(query, args)
    rows = cur.fetchall()
    cur.close()
    return rows


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()


@app.route("/viewdb")
def viewdb():
    """Basic select all query for testing"""
    rows = execute_query("""SELECT * FROM chessdata""")
    return jsonify(rows)


@app.route("/pieceusage")
def pieceusage():
    """Returns the results of how
    many times a piece was
    used during move numbers"""
    # TODO return total (scaled?) usage per move for all pieces
    rows = execute_query("""select white, move_piece, move, count(*)
                            from chessdata
                            group by white, move_piece, move""")
    return '<br>'.join(str(row) for row in rows)


@app.route("/pieceinfo")
def pieceinfo():
    """Respond to a query of the format:
    pieceinfo/?player=white&piece=P2 with
    """
    start_time = time.time()
    cur = get_db().cursor()
    player = request.args.get('player')
    white = 1
    if player == 'black':
        white = 0
    piece = request.args.get('piece')
    print(player)
    print(piece)
    result = execute_query(
        """SELECT white, move_piece, taken_piece, count(*)
           FROM chessdata
           WHERE white = ? AND move_piece = ?
           group by white, move_piece, taken_piece""",
        (white, piece)
    )
    str_rows = [','.join(map(str, row)) for row in result]
    query_time = time.time() - start_time
    # logging.info("executed query in %s" % query_time)
    cur.close()
    return jsonify(result)


@app.route("/getcount")
def getcount():
    """Returns the count of
    rows in the dastabase"""
    cur = get_db().cursor()
    result = execute_query(
        """SELECT count(*)
           FROM chessdata"""
    )
    cur.close()
    return jsonify(result)

if __name__ == '__main__':
    app.run()