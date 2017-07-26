#!/bin/bash

for file in /Users/robmulla/Desktop/pgns/*.pgn; do
  filename=${file##*/}
  filecalled=${filename%%.*}
  echo $filecalled
  /Users/robmulla/Desktop/pgns/pgn-extract/pgn-extract -Wxlalg -C -N -V -D -s -Tb$filecalled $filename > $filecalled.asblack.pgn
  /Users/robmulla/Desktop/pgns/pgn-extract/pgn-extract -Wxlalg -C -N -V -D -s -Tw$filecalled $filename > $filecalled.aswhite.pgn
done
