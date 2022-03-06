var images  = [
"https://lh3.googleusercontent.com/wU406eFn6SRQZ1905M7F4YmYVgJT0mwlQ9BXYomuWorfkLIClIDb3pghNTb1vf5vOQkZ__B-5tXIpUY_5AMHoKIcfi1LQgpGiU1m=w600",
"https://lh3.googleusercontent.com/HsoH6p_tBtX6b2wqHTgHY-J7Eb-65XwtURKXuz8IFTCJl7pPGkYdMH4iPTGe0-8bW-PChQ7J2v8V8ij_7Olk9fxQKpj4qBY36Qk4KA=w600",
"https://lh3.googleusercontent.com/XaFy3k3nCWUBa_pnwdlwlcKW0srYjd9Xli0obPr9pLeBBpKOcVQkBAlF28iNR9F7_vFqbHwAcAC4-Q6-RwrLMJ8sisYcDYmqak6YjA=w600",
];
var images1  = [
    "https://lh3.googleusercontent.com/6oEbe31EQZTOOx8q-27X-hjjTO_9axcgBmg4_1Wx9-SzS8J3_NAelHG0lENvMJTvWQKJNhLlZ-w4gy6gbJaMkZsG06G5D-2IKhGL=w600",
    "https://lh3.googleusercontent.com/BdeS_xLgclQ4sDk91B1wMTS65iwKnWZItzqy1hMwRDvD7d6IhPwx4vJSS-_e3FHSidAjLVYWrwwBhGspTwO2iHEBEjIYSA6amzQG=w600",
    "https://lh3.googleusercontent.com/MNuV2Rd0gCbR14nfG9as-gDCSmXcn6VD5gx7yoNit2EX0lHw__35a-cYCZO-nIqy5VgxYu7XmwG6fvEukmsx9JL84F0rQdmJjRF8HHw=w600",
    ];
var images2  = [
  "https://lh3.googleusercontent.com/Q2Zacj0nGc3X0WT4j8xO1VLlUzOPLfB9cq-5_359fQ5BYLPv_uSzzLIYs3lAPNOxAToZWIquCZirYI590sKAtaQw54Nj9uODWHG18Q=w600",
  "https://lh3.googleusercontent.com/H3XNBnaXD0CGdMeQ9Ic7knAIkzPBbN2cQ_AXRPgLfWrkdMzI29tC8XNRBvw2-Q0R3v22dzw4VhnRPJmP6WWnTBLUHM5kr8fqSJODMPs=w600",
  "https://lh3.googleusercontent.com/Yww8B748obIX9XKoktB5xzqVPa2BT3Q0F-FiH3CIdvanyaJ6k1N9oCGkbkJgxZvA20hrgkXpAFfroUpwP3y3ksIJ3y6VmXnwbXpDIw=w600",
    ];

var num = 0;
function next() {
    var slider = document.getElementById("ChangeImg");
    var slider1 = document.getElementById("ChangeImg1");
    var slider2 = document.getElementById("ChangeImg2");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
    slider1.src = images1[num];
    slider2.src = images2[num];
}
function prev() {
    var slider = document.getElementById("ChangeImg");
    var slider1 = document.getElementById("ChangeImg1");
    var slider2 = document.getElementById("ChangeImg2");
    num--;
    if(num < 0){
        num  = images.length - 1;
    }
    slider.src = images[num];
    slider1.src = images1[num];
    slider2.src = images2[num];
}
