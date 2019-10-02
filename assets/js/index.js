$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

const Token = "Bot NTM5ODUzMTg2NTcyMjIyNDY0.XVsP3A.tFGtvn6e0Ts0duODUn_QrOi22Zg"
 $.ajax({
     url: "https://discordapp.com/api/users/606909018861994026",
      headers: {
        'Authorization': Token
      },
      method: "GET"
    }).done(function(data){   document.getElementById("avenger").src= `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
   })
$.ajax({
     url: "https://discordapp.com/api/users/470705101145767948",
      headers: {
        'Authorization': Token
      },
      method: "GET"
    }).done(function(data){   document.getElementById("async").src= `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
   })
$.ajax({
     url: "https://discordapp.com/api/users/587446735815573514",
      headers: {
        'Authorization': Token
      },
      method: "GET"
    }).done(function(data){   document.getElementById("deep").src= `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
   })
 