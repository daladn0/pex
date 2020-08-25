$(document).ready(() => {

    // Header

    $(window).on('scroll', () => {
        if ( window.pageYOffset - 200 > $('#header').innerHeight()) {
            $('#header').addClass('fixed')
        } else {
            $('#header').removeClass('fixed')
        }
    })

    if ( window.pageYOffset - 200 > $('#header').innerHeight()) {
        $('#header').addClass('fixed')
    }

    // Burger menu
    
    $('#burger').on('click', () => {
        $('#header').toggleClass('active')
        $('.header__nav').toggleClass('active')
        $('#burger').toggleClass('active')
    })


    // scrollTo

    $('[data-scrollTo]').on('click', e => {
        e.preventDefault()

        const target = e.target
        const scrollToSection = document.querySelector($(target).attr('data-scrollTo'))

        $("html, body").animate({
            scrollTop: ( scrollToSection.offsetTop - $('#header').innerHeight() ) + "px"
        }, 600);

        $('#header').removeClass('active')
        $('.header__nav').removeClass('active')
        $('#burger').removeClass('active')
    })
})