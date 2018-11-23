$(document).ready(function () {
  //Disables button 
  $('#btnSubmit').prop('disabled', true)

  //when letter is typed in the text area function  
//   enables button
  $('#txtHere').keyup (function()    {
    $('#btnSubmit').prop('disabled', false)
});

    // Function when button clicked 
    $('#btnSubmit').click(function () {
        alert('It got clicked!!')
        let txtValue = $('#txtHere').val();
        alert(txtValue)

    });


    //Create a Div Element and append it to the body
    let div = document.createElement('div')
    document.body.appendChild(div)
    // DOM Content Closing Tag     
});