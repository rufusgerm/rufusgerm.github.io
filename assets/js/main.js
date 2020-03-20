$(document).ready(function() {
    //adds or removes carousel info element based on window width
    var mql = window.matchMedia('(max-width: 768px)');
    function screenTest(e) {
        if (e.matches) {
            $('a.info-btn').remove();
        } else {
            let info = "<a href=\"#projects\" class=\'info-btn\'><i class=\"far fa-question-circle menu-btn info-icon\"></i></a>";
            $('.projects-menu-btns').append(info);
            // fades the carousel caption when info is clicked
            $('.info-btn').click(function() {
                $('.carousel-caption').fadeTo(500, 1);
            })
        }
    }
    screenTest(mql);
    mql.addListener(screenTest);

    
    //fades carousel caption when close btn clicked
    $('.caption-close-btn').click(function() {
        $('.carousel-caption').fadeTo(500, 0);
    })
    

});