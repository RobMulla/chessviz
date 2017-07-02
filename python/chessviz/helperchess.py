"""
Class to represent a chess game.
"""


class ChessMatch:

    def __init__(self):
        self.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        self.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        self.board = {}
        self.initialize_board()

    def __str__(self):
        print('pretty printing coming soon!')

    def initialize_board(self):
        """
        Create a representation of a chess board.

        We represent the board as  dictionary of the form
        {"space_id":"piece_id"}.

        References:
        [1] http://bit.ly/2ubo5bn
        [2] https://en.wikipedia.org/wiki/Algebraic_notation_(chess)
        """
        self.board = {}
        for number in [2, 7]:
            for letter in self.letters:
                space = letter + str(number)
                self.board[space] = 'P' + str(number)

        for number in [1, 8]:
            for letter in ['a', 'h']:
                space = letter + str(number)
                self.board[space] = 'R' + str(number)
            for letter in ['b', 'g']:
                space = letter + str(number)
                self.board[space] = 'N' + str(number)
            for letter in ['c', 'f']:
                space = letter + str(number)
                self.board[space] = 'B' + str(number)
            space = 'd' + str(number)
            self.board[space] = 'Q'
            space = 'e' + str(number)
            self.board[space] = 'K'

    # Takes in move specifications
    def handle_move(self, move_from, white, move_to=None):
        """
        Update the board given some input move
        """
        piece = self.board[move_from]
        taken = None
        if move_to == 'O-O-0':
            # Queenside castling
            if white == 1:
                self.board['c1'] = self.board['e1']
                self.board['e1'] = None
                self.board['d1'] = self.board['a1']
                self.board['a1'] = None
            else:
                self.board['c8'] = self.board['e8']
                self.board['e8'] = None
                self.board['d8'] = self.board['a8']
                self.board['a8'] = None
        elif move_to == 'O-O':
            # Kingside castling
            if white == 1:
                self.board['g1'] = self.board['e1']
                self.board['e1'] = None
                self.board['f1'] = self.board['h1']
                self.board['h1'] = None
            else:
                self.board['g1'] = self.board['e1']
                self.board['e1'] = None
                self.board['f1'] = self.board['h1']
                self.board['h1'] = None
        else:
            if self.board.get(move_to):
                taken = self.board[move_to]
            self.board[move_to] = self.board[move_from]
            self.board[move_from] = None
        return piece, taken
