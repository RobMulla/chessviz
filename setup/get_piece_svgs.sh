#!/bin/sh

# break if bad things happen
set -e

# download the chess piece SVGs
echo "Pulling chess piece SVGs..."
wget --quiet https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg -O black_pawn.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg -O black_bishop.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg -O black_knight.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg -O black_rook.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg -O black_queen.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg -O black_king.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg -O white_pawn.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg -O white_bishop.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg -O white_knight.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg -O white_rook.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg -O white_queen.svg
wget --quiet https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg -O white_king.svg
echo "Done pulling chess piece SVGs."

# move into the image directory
echo "Moving piece SVGs into app/img..."
mv white_*.svg ../app/img
mv black_*.svg ../app/img
echo "Done moving piece SVGs."