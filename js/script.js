
$(".js-drawer").on("click", function(e) {
  e.preventDefault();
  let targetClass = jQuery(this).attr("data-target");
  jQuery("." + targetClass).toggleClass("is-checked");
  return false;
});


// <!-- スムーススクロール -->

$(function(){
  $('a[href^="#"]').click(function() {
let header = $("header").innerHeight(); 
let speed = 1000;
let id = $(this).attr("href");
let target = $("#" == id ? "html" : id);
let position = jQuery(target).offset().top - header;
$("html, body").animate(
  {
    scrollTop: position
  },
  speed
);
return false;
});
});



// <!-- ふわっと表示 Wow-->
<script>
new WOW().init();
</script>



// <!-- google-form -->

let $form = $('#js-form')
$form.submit(function (e) { 
$.ajax({ 
  url: $form.attr('action'), 
  data: $form.serialize(), 
  type: "POST", 
  dataType: "xml", 
  statusCode: { 
    0: function () { 
    //送信に成功したときの処理 
    $form.slideUp()
    $('#js-success').slideDown()
    }, 
    200: function () { 
    //送信に失敗したときの処理 
    $form.slideUp()
    $('#js-error').slideDown()
    } 
  } 
}); 
return false; 
}); 

