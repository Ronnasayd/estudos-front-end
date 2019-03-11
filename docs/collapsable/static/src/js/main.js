$('.collapsable-header').on('click',function(event){
    
    var content = $(this).siblings()
    if (content.css('display') === "none"){
        $('.collapsable-content').css("display","none");
        content.css("display","block");
    }
    else{
        content.css("display","none");
    }
});