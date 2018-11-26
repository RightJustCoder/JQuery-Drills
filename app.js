$(document).ready (function()   {
    //Disables button 
    $('#btnSubmit').prop('disabled', true)

    //when letter is typed in the text area function  
    //enables button
    $('#txtHere').keypress(function () {
        $('#btnSubmit').prop('disabled', false)

    });

    // Function when button clicked 
    $('#btnSubmit').click(function () {
       // Alert value of text input field when button clicked
        let txtValue = $('#txtHere').val();
        alert(txtValue)

        //Create a Div Element and append it to the body
        $('body').append('<div id="myDiv"> </div>')
        //Create Unordered list and append to body
        $('body').append('<ul id ="myList"> </ul>')

        //Append the text as list item to unordered list
        li = $(`<li>${txtValue}</li>`)
        $('#myList').append(li)
        $('#myDiv').append($('#myList'))

        

        // list changes colors when clicked
        li.click(function () {
            let colorList = ['Green', 'Pink', 'Yellow', 'blue', 'black', 'brown', 'purple', 'red', 'orange'];
            let randomIndex = Math.floor(Math.random() * colorList.length)
            $(this).css('color', colorList[randomIndex])
            
            
        });

        // Doubleclicked list disappears
        li.dblclick(function () {
            $(this).remove();
        });

       
        //End of btn submit function
    });

    // DOM Content Closing Tag   
});