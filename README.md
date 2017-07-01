# Chess Data

## Source

Source of the data is the [FICS Games Database](http://www.ficsgames.org/), and the data used is all games in their database involving at least one Grand Master from 2016.

## Format

The data is stored in the is the Portable Game Notation (PGN), with an example of a single game as follows:

```
[Event "FICS rated standard game"]
[Site "FICS freechess.org"]
[FICSGamesDBGameNo "410004192"]
[White "BradVanHoozer"]
[Black "figasecond"]
[WhiteElo "2022"]
[BlackElo "2050"]
[WhiteRD "0.0"]
[BlackRD "0.0"]
[TimeControl "600+10"]
[Date "2016.12.31"]
[Time "23:31:00"]
[WhiteClock "0:10:00.000"]
[BlackClock "0:10:00.000"]
[ECO "D37"]
[PlyCount "27"]
[Result "1/2-1/2"]

1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. c4 Be7 5. Nc3 O-O 6. Bd3 c5 7. O-O Nc6 8. dxc5 Bxc5 9. a3 a6 10. b4 Be7 11. Bb2 dxc4 12. Bxc4 b5 13. Be2 Bb7 14. Qb3 {Game drawn by mutual agreement} 1/2-1/2
```

## Data Prep
    
In order to calculate some of the data for specific tasks, the data needs to processed into individual lines for aggregation. The `convert_raw_data.py` script takes the PGN file and goes over them, extracting for each move, the following data:

### Transformed Format

* Game number
* White username
* White ELO
* Black ELO
* Black username
* Turn number
* Result (white win, black win or draw)
* Piece
    - Player (white or black)
    - Piece type
    - Starting piece position
* Move to location
* 
* Taken piece
    - Player (white or black)
    - Piece type
    - Starting piece position


## Final Data Formats

We used the `python-chess` package to read in the PGN file for initial processing.

Here is the mapping of scripts and output data files to specific tasks:


