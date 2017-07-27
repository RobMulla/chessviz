#!/bin/bash

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

