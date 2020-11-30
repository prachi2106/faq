$(".faq").on("click",function(){
    $(this).find("p").toggle();
    $(this).toggleClass("font-toggle");
    $(this).find(".img-fluid").toggleClass("flip");
});
$(".faq").on("click", function(){
    $(this).find("p").show();
    $("p").hide();
});

