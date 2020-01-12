// In main.js, start by using jQuery to add a ready method call to the document.
$(document).ready(() =>{
    $('#cart').on('click',() => {
        // In the .ready() callback function, add click event handlers to '#cart', '#account', and '#help'.
// Add an empty callback function to each event
        $('#cartMenu').show();
    });

    Inside of each header’s callback function, use a jQuery method to make the corresponding drop-down menu appear.
        // $('#someID').on('click', () => {
        //   $('#someIDMenu').show();
        // });

        $('#account').on('click',() => {
            $('#accountMenu').show();
        });
    $('#help').on('click',() => {
        $('#helpMenu').show();
    });
    $('.dropdown-menu').on('mouseleave', () => {
    }
    $('.dropdown-menu').hide();
});
})