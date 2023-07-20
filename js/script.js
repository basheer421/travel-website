let closeMenuBtns = document.querySelectorAll('.cir_border')
const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

closeMenuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    navlinks.classList.toggle('hide')
    navlinks.classList.toggle('mobile-menu')
  })
})

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('hide')
  navlinks.classList.toggle('mobile-menu')
})

function removeall() {
  $(".cir_border").css("border", "none");
}
$("#sec").on("click", function () {
  removeall();
  $("#sec").css("border", "2px solid whitesmoke");
  $("#sec").css("border-radius", "20px");
});
$("#pri").on("click", function () {
  removeall();
  $("#pri").css("border", "2px solid whitesmoke");
  $("#pri").css("border-radius", "20px");
});
$("#tri").on("click", function () {
  removeall();
  $("#tri").css("border", "2px solid whitesmoke");
  $("#tri").css("border-radius", "20px");
});
$("#quad").on("click", function () {
  removeall();
  $("#quad").css("border", "2px solid whitesmoke");
  $("#quad").css("border-radius", "20px");
});
$("#quint").on("click", function () {
  removeall();
  $("#quint").css("border", "2px solid whitesmoke");
  $("#quint").css("border-radius", "20px");
});
$("#hex").on("click", function () {
  removeall();
  $("#hex").css("border", "2px solid whitesmoke");
  $("#hex").css("border-radius", "20px");
});

var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?66623';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#00e785",
  "ctaText":"Chat with us",
  "borderRadius":"25",
  "marginLeft": "30",
  "marginRight": "20",
  "marginBottom": "20",
  "ctaIconWATI":false,
  "position":"right"
},
"brandSetting":{
  "brandName":"socotraescape",
  "brandSubTitle":"undefined",
  "brandImg":"https://socotratime.com/img/logo.jpg",
  "welcomeText":"Hi there!\nHow can I help you?",
  "messageText":"",
  "backgroundColor":"#00e785",
  "ctaText":"Chat with us",
  "borderRadius":"25",
  "autoShow":false,
  "phoneNumber":"971526954048"
}
};
s.onload = function() {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
