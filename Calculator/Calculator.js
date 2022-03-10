var x; // input value
var first; // first input value to make an operation

// click functions for the operations

// Plus
$('#plus').click(function (e) {
    x = ' + ';
    input()
    e.preventDefault()
});
// Minus
$('#minus').click(function (e) {
    x = ' - ';
    input()
    e.preventDefault()
});

// Multiple
$('#times').click(function (e) {
    x = ' x ';
    input()
    e.preventDefault()
});

//Divied
$('#divid').click(function (e) {
    x = ' / ';
    input()
    e.preventDefault()
});

//Equal

$('#equal').click(function (e) {
    x = $('input').val()
    calculate()
    e.preventDefault()
});

// input from keyboard 
$('input').keypress(function (e) {
    // numbers (0-9)
    if (e.keyCode > 47 && e.keyCode < 58 || e.keyCode == 46) {
        first = $('input').val() // get the 'first' as the current value of input area
        x = e.key
        input()// add 'x' to the input area as string
        
    }
    //operation symbols( "x"  "."  "/"  "+"  "-")
    else if (e.keyCode == 45 || e.keyCode == 43 || e.keyCode == 120 || e.keyCode == 42 || e.keyCode == 47) {

        first = $('input').val()
        x = ' ' + e.key + ' ' // add space between operational symbols 

        input()
        
    } else if (e.keyCode == 13) {
        
        calculate()
    } else {
        alert('Wrong Input')
    }

    e.preventDefault()

});


function input() {
    first = $('input').val()
    if (first != undefined) {
        x = first + x; // adding the 'x'(operation symbol or number) to the input box as a string 
        //left side of the equation (x) shoul have been another variable
    }
    $('input').val(x) // get all the values of the input box
    first = x; // assing the input value as first value to continue to the operation (this x should have been another variable)

}
// click function for the numbers
$('.col-4 a').click(function (e) {

    if (this.textContent != 'C') { // get x from the buttons as the string value of the button
        x = this.textContent
        input() 
    }

    e.preventDefault()

});
$('#clear').click(function (e) { // if 'C' (clear button) clicked;
    x = '' // clear x
    $('input').val('') // clear input area
    input()
    e.preventDefault()

});
// Calculation function
function calculate() {
    x = x.split(' ') // get 'x' as string (x assigned at the input function as the all the values of input box)
    let i = x.length - 1;
    
    if (x[0] == '') { //if there is no value in the input box; alert
    
        alert('Wrong Input')
    } else if (x[i] == '') {// if there are more values than it should; alert
       
        alert('Wrong Input')
    }else{
  
        let i = 0;
        // gets every integer as seperate point in the x array
        // example: x = 14 + 23 => '14' , '+' , '23'
        for(i;i<x.length;i++){
            // First; checks for the multipication or division
            if(x[i] == 'x'||x[i] == '/'||x[i] == '*'){
                // if there is multipication or division;
                // evaluets seperately
                if(x[i] == 'x'||x[i] == '*'){ // gets the point of operation
                    x[i] = Number(x[i-1])*Number(x[i+1]) // gets the one before and after then does the operation
                    x.splice(i-1,3,x[i]) // deletes the operation and adds the result to that point

                    // example: 12 + 3 x 2 - 4 => 12 + 6 - 4
                    
                    i-- // decrease the number of i
                }
                if(x[i] == '/'){ // does the same with division
                    x[i] = Number(x[i-1])/Number(x[i+1])
                    x.splice(i-1,3,x[i])
                    i--
                }
            }
        }
        // after doing all the priorty operations
        // continues with simpler equation
        // example: 12 + 3 x 2 - 4 / 2 => 12 + 6 - 2
        i=0;
        
        for(i;i<x.length;i++){ // does the same things for the summation and substraction
            if(x[i] == '+'||x[i] == '-'){
                if(x[i] == '+'){
                    x[i] = Number(x[i-1])+Number(x[i+1])
                    x.splice(i-1,3,x[i])
                    i--
                }
                if(x[i] == '-'){
                    x[i] = Number(x[i-1])-Number(x[i+1])
                    x.splice(i-1,3,x[i])
                    i--
                }
            }
        }
    }
    
    $('input').val('') // clears the input area
    x = '='+x
    input() // write the result to the input area as 'x'

}