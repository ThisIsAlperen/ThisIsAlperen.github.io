# Calculator
This is my first JavaSctipt code.
Date: Feb 19 2022
I will add comments but there will be no change at the code to be able to look back.

Features;

=> Process priority is valid

=> Keyboard can be used (has some issues)


Process;

=> There are two steps;

    - add values to the input box

    - get the values from input box and calculate the result


=> There are two different ways to get the input from the user

    - From keyboard 

    - From buttons

=> Buttons are seperated to 6 different function: five function for operations and one for the numbers

=> When an operation button pushed, the function gets the proper symbol for it. Assing the symbol with spaces around, to the variable 'x'. Then the input function runs.

=> Input function gets the value of the input box as string and add x to the end of that value. Assing the total value as 'x'(this can be another variable than x)  Then arrange the x as the new input value. Also assing x to the 'first'

=> If a number button pushed, it gets the inside value of that button and does the same thing with input function

=> If its equation button, the calculation function runs.

=> If its 'C', clears the value of x and the value of the input box

=> For the key codes; 

    - if its a number,gets the value of the key and does the same thing 

    - if its a operational key, adds spaces around and does the same thing

    - if its 'enter', runs the calculation function.

    - if its something else, alerts.


=> Calulate function steps;

    - gets the input value as string, then split it from the spaces

    - check every data of x array in a for loop

    - if its run into a multipication or division symbol, gets the values before and after

    - then does the proper calculation fo those values, 

    - deletes the values and the symbol,

    - add the result to that point

    - decrease the i(loop variable), to be able to continue to the loop from the same point (if it does the deleting at i = 5 it means it will delete i = 3,4,5 that it will add one to the i = 3, to continue from same point i should be 4 )

    - After prior operations, does the same to the - and +;

    - clears input box and assign the result as input value.
