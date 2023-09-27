$(document).ready(function () {

    $("#menu").click(function(){
        $(".nav").slideToggle();
    });

    $(".nav p").click(function(){
        $(".nav").toggle();
    })

    let url = "https://script.google.com/macros/s/AKfycbx-38ZX5Q8hH7zSBtZWWwLXEPA9ZI__Le71eksXHsA2xh94ybaAT-NdvL1zVN0KGFW2/exec";

        var form = document.getElementById("form");
        form.addEventListener("submit",e=>{
            e.preventDefault();
            let data = new FormData(form);
            let date = new Date();
            data.append("date",date);
            fetch(url,{
                method:"POST",
                body:data
            }).then(response=>{
                if(response.ok==true)
                {
                    $("#response").text("Message Sent");
                    $(".message").css({"background":"rgb(123, 201, 123)"});
                    $(".message-box").css("display","flex");
                    setTimeout(time=>{
                        $(".message-box").fadeOut(1000);
                    },5000)
                }
                else{
                    $("#response").text("Failed to send message");
                    $(".message").css({"background": "rgb(226, 46, 46)"});
                    $(".message-box").css("display","flex");
                    setTimeout(time=>{
                        $(".message-box").fadeOut(1000);
                    },5000)
                }
            })
        });

        AOS.init();
        var typed = new Typed('#typed', {
            strings: ['Web Development.', 'Frontend Development','Backend Development.'],
            typeSpeed: 85,
            loop:true,
            backDelay: 900,
            backSpeed: 20,
        });

});
