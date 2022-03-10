# TicTacToe

A simple tic tac toe - my first game

**Features**

=> 2 Player option

=> JQuery used for the animations

=> Responsive design

=> Saves to game in case of reloading

**Process**

- If a single player game is chosen, *one* function will run.

- Main goal of the function is finding checking the box, and checking if its players turn. If yes, puts *X* to the clicked box by running the *CreateX* function.

- *Check* function will run and check the area if is there a winner.

- *Pc* function will run and find a place for the pc to play. First it will get a random number. if hard clicked, *hard* variable will be true, it will get another number but this time, with *int* function, it will check for priority. 

- In case of winning, *check* function will call *win* function. a line that found in *check*, will appear. *win* will call the *clear* and *score* functions

- *Clear* function will clean the area, *score* function will increase the score and call the *save* function.

- *save* function will save the score to the Local Storage.

- In case of reload, *get* function will run at the top of the code, and get the score from Local Storage.

- If the Two Player is chosen, *two* function will run, and instead of just 'X', it will decide who is playing, and will put the proper symbol.

- If restart button clicked, *clearAll* function will run and clears the score