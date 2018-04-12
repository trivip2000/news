$( document ).ready( function(){
    $(".btn-login").on('click',function(){
        $(".form-login").animate({top: "0"});
    })
    $(document).click(function(e) 
    {
        var container = $(".form-login,.btn-login");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $(".form-login").animate({top: "-400px"});
        }
    });
    $(".menu-toogle-mobile").on('click',function(){
        $(".navbar-border-bottom").slideToggle('fast');
    })
})