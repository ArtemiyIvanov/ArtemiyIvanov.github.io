$('.sl').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.show_popup').click(function() { 
    var popup_id = $('#' + $(this).attr("rel")); 
    $(popup_id).show();
    $('.overlay_popup').show(); 
    history.pushState(null, '', 'form');
}) 
$('.overlay_popup').click(function() { 
    $('.overlay_popup, .popup').hide();
    history.back();
})
$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Заявка отправлена");
                }else{
                    alert("Ошибка" + response.message);
                }
            }
        });
    });
});
