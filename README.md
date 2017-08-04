# chessviz

This repo holds all files related to `chessviz`, and interactive visualization of chess game data created as a final project for W209: Data Visualization, a course in UC-Berkeley's Masters of Information in Data Science (MIDS) program.

## Contents
1. [Target Use Case](#usecase)
2. [Repo Structure](#repo)
3. [Data Source](#datasource)
4. [How to Create an App Instance](#appdirections)
5. [References](#references)

## Target Use Case <a name="usecase"></a>

[Check out our mid-term presentation](https://docs.google.com/presentation/d/1ETH_qVW7gRb50b5nWkVr1sMjRkvGRLXMzrisy-z7-YI/edit?usp=sharing)

## Repo Structure <a name="repo"></a>

This repo is structured as follows:

- `app/` = all files necessary to run the app (JS, CSS, HTML, and data)
- `app/<language>` = JS, CSS, and HTML code written by the project authors
- `app/<language>/lib/` = JS, CSS, and HTML code from external sources
- `setup/` = all files needed to seed a new directory for running the app. The scripts in this directory handle installing dependencies and pulling data. The directory assumes a Unix-alike operating system, so Windows users should use it with [Ubuntu on Windows 10]() or in a VM
- `sandbox/` = workspace for experimentation. Not needed to run the applicaiton.

## Data Source <a name="datasource"></a>

Raw data used in this project come from the [FICS Games Database](http://www.ficsgames.org/). That database holds chess match records for all games since 2016 involving at least one [Grand Master](https://en.wikipedia.org/wiki/Grandmaster_(chess)).

### Format

The data is stored in the Portable Game Notation (PGN), with an example of a single game as follows:

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

### Data Prep
    
In order to calculate some of the data for specific tasks, the data needs to processed into individual lines for aggregation. The `convert_raw_data.py` script takes the PGN file and goes over them, extracting for each move, the following data:

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
* Taken piece
    - Player (white or black)
    - Piece type
    - Starting piece position

### Final Data Formats

We used the `python-chess` package to read in the PGN file for initial processing.

## How to Create an App Instance

Begin by cloning this repo.

```
git clone https://github.com/jameslamb/chessviz
```

## References <a name="references"></a>

1. [chess-dataviz D3 library and examples](https://ebemunk.com/chess-dataviz/)
2. [FICS Games Database](http://www.ficsgames.org/)
3. [Grandmaster wikipedia](https://en.wikipedia.org/wiki/Grandmaster_(chess))
4. [python-chess library](http://python-chess.readthedocs.io/en/latest/pgn.html)
5. [Portable Game Notation Wikipedia](https://en.wikipedia.org/wiki/Portable_Game_Notation)
6. [Getting Started with Bootstrap](https://v4-alpha.getbootstrap.com/layout/grid/)
7. [How to Include Bootstrap in a Project](https://www.codecademy.com/articles/bootstrap)

