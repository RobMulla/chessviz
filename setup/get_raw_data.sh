#!/bin/bash

# download the chess piece SVGs
wget https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg -O black_pawn.svg
wget https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg -O black_bishop.svg
wget https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg -O black_knight.svg
wget https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg -O black_rook.svg
wget https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg -O black_queen.svg
wget https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg -O black_king.svg
wget https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg -O white_pawn.svg
wget https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg -O white_bishop.svg
wget https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg -O white_knight.svg
wget https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg -O white_rook.svg
wget https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg -O white_queen.svg
wget https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg -O white_king.svg

# move into the image directory
mv white_*.svg ../app/img
mv black_*.svg ../app/img

# Download all the zip files and move them to the appropriate 
# data directory
wget -i ZipURLS.txt && \
    mkdir zips && \
    mv -f *.zip ../app/data/

# Unzip files and move pgns to pgns\ dir
cd ../app/data && \
    find . -name \*.zip -exec unzip {} \; && \
    mv *.pgn pgns/

# conver these pg files (gulp)
cd pgn-extract
find ../pgns/ -name "*.pgn" -exec sh -c "./pgn-extract -Wxlalg -C -N -V -D -s {} > {}.converted" \;
cd ../pgns/
mv *.converted ../pgn_converted/
cd ../pgn_converted/

# Remove the .converted
rename 's/.converted$//' *.converted

cd ..
mv stats.js pgn_converted/
cd /pgn_converted/

# Convert to JSON using stats.js
find . -name \*.pgn -exec sh -c "node stats.js -f {}" \;

# Move JSON to folder
mkdir ../json
mv *.json ../json

