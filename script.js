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
    let newfio = localStorage.getItem('fio');
    let newtel = localStorage.getItem('tel');
    let newcom = localStorage.getItem('com');
    document.getElementById('fio').value = newfio;
    document.getElementById('tel').value = newtel;
    document.getElementById('com').value = newcom;
}) 
$('.overlay_popup').click(function() { 
    $('.overlay_popup, .popup').hide();
    history.back();
})
window.onpopstate = function(event) {
$('.overlay_popup, .popup').hide();
}
function rem() {
let fio = document.getElementById('fio').value;
let tel = document.getElementById('tel').value;
let com = document.getElementById('com').value;
localStorage.setItem('fio', fio);
localStorage.setItem('tel', tel);
localStorage.setItem('com', com);
}

function forget() {
localStorage.clear();
}
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