# HangMan
Hang Man game with object oriented programming

Object oriented used for the questions

Photoshop is highly used

**Features;**

=> There is a dry bush passing through background

**Process;**

=> The main thing this code does is showing and hiding the blocks

=> Steps

    - By clicking a category; *hideSignButtons* and *Game* functions run, category sign fade right and the other block appears.

    - Every category have two questions. Clicking to a certain category send the category name to the *Game* function
    
    -*Game* function gets a random number (0 or 1) as variable *r*. Finds the right category, then gets a question by using the variable *r*. Creates a *Query* object and uses the *word* prototype. Assigns question and answer to the proper blocks (assign answer to show in case of loosing - see *loose* function)

    - *word* prototype gets the answer, make it all uppercase, split letters and create an array. Then it creates different blocks for each letters with a span to put the letter inside. Hides the span. if there is more than one word, hide the space between.

    - The cowboy is hidden, lives assign as 5, the keyboard is active and the word is hidden.

    *Until this point, all functions run by clicking to the category menu - After here, game will continue by clicking to a key, or it will end by clicking to the show-return menu*

=> Game
    
    - Game starts with clicking to a key
    
    - Assings the letter to the *x* and runs the function *Play(x)*
    
    - Check every letter of the *word*, if there is a same letter, shows the letter and adds *done* class to the letter box. assign true to the *response* so it will not run the *if* for wrong answer

    - if there is no same letter in the *word*, increase the wrong answer number and decrease the lives number

    - if the wrong number increased, shows the proper body part of the cowboy

    - if the wrong answer hits 5, run the *loose* function. That runs the *Return*

    - After *Play* function, win function runs. 

    - Checks the letters of the *word*, if there is no letter left  without the *done* class, runs *Return*

    - In case of win or loose, *Return* function runs and hides everything.

    - Then the proper block appears (*Win* or *Loose*). If its *Loose*, correct answer appears.

    - When OK button clicked, hides both *Win* and *Loose*. Hides parent of those (*result*). Runs the *Return* function again.

    - *Return* function; if *x* is false, shows the result block, hides everything else. If *x* is true(*OK* button clicked), shows the category menu, hides everything else. Runs the *clear* function in both cases

    - *clear* function assign 0 to the wrong answer (lives changes to 5 when a category clicked), deletes the *word*, removes the *disabled* class from the keys.

=> if show - return clicked;

    - if Show Answer clicked, *showAnswer* function runs, shows every letters of the word, add *disabled* class to the keys

    - if Return clicked, *Return* function runs

=> Bush
    
    - runs in 5 second after reload

    - change the position of the bush from left:-100px; to 1700px

    - change the rotation of the bush from 0deg to 3600deg

    - after reaching to the right, hides the bush, reset the position and rotation.
    
    - runs in every 40 seconds. 