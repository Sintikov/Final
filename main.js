function create() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let error="Please write on each box";
    let passW="Passwords aren't matching";
    if (username==="" || password==="" || password2===""){
        document.getElementById("demo").innerHTML = error;
    }
    else if (password2 != password){
          document.getElementById("demo").innerHTML =  passW;
      var audio = new Audio();
      audio.src = './click.mp3';
      audio.play();
        document.getElementById("demo") = audio;

    }
    else{
        document.location.href = "WebProSintikovmain/index.html";
    }
}
function hide1() {
    let x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function hide() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }}
$( "p1" ).click(function() {

    $( this ).slideUp();
});
$( "p" ).click(function() {
    $( this ).slideUp();
    $( this ).slideDown();
});
$('.hah').on("keypress", function(e) {
    if (e.keyCode == 13) {
        create();
    }
});
$( "h1" ).click(function() {
  var audio = new Audio();
  audio.src = './JARVIS.mp3';
  audio.play();
    document.getElementById("demo").innerHTML = audio;
    $( this ).slideUp();
    $( this ).slideDown();
});
