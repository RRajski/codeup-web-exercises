$(document).ready(() =>{
    $('.hint-box').on('click',()=>{
        $('.hint').slideToggle(500);
    })
    // wrong answer
    $('.wrong-answer-one').on('click',()=>{
        $('.wrong-text-one').fadeOut('slow');
        $('.frown').show();
    })
    $('.wrong-answer-two').on('click',()=>{
        $('.wrong-text-two').fadeOut('500');
        $('.frown').show();
    })
    $('.wrong-answer-three').on('click',()=>{
        $('.wrong-text-three').fadeOut('fast');
        $('.frown').show();
    })
    // Correct Answer
    $('.correct-answer').on('click',()=>{
        // $('.wrong-text-three').fadeOut('fast');
        $('.frown').hide();
        $('.smiley').show();
        $('.wrong-text-one', '.wrong-text-two', 'wrong-text-three').fadeOut('fast');
    })

});

// Mouse events jQuery

$('.login-button').on('click', () => {
    $('.login-form').show();
});

$('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
})

$('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
})

$('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
}).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
})

});