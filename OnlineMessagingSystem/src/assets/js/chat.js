/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  socket
// a()

$(document).ready(function () {

 socket= io('ws://localhost:3000')
  $('.friend-drawer--onhover').click(function () {
      $('#chat').hide('slow').show('slow');
  });

  $("#message,#friends").click(function () {
      var chatHistory = document.getElementById("chat");
      chatHistory.scrollTop = chatHistory.scrollHeight;
  });
  $('#send').click(function () {

      alert('click');
      $('#chat-message').append('<div class="row float-right"><div class="col-sm-6"><div class="chat-box--right" style="    position: relative;animation: fadeIn 1s ease-in;padding: 7px;border-right-style: ridge;border-right-color: #006666; border-width:9px;background: #0d8b7f;width: -moz-fit-content; width: fit-content;width:300px;border-radius: 10px;">' + $('#message').val() + '</div></div></div><br><br>');

      sessionStorage.setItem('currentMsg',$('#message').val())
      // console.log('test');
      var user=JSON.parse(sessionStorage.getItem("currentUser"));
      var messagee=sessionStorage.getItem('currentMsg')
      var userName=user.username
     let data={
       user:userName,
       msg:messagee
     }



      socket.emit('my message',data)


      var chatHistory = document.getElementById("chat");
      chatHistory.scrollTop = chatHistory.scrollHeight;
      $('#message').val("");
  });

  $('#message').keypress(function (event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13' && !event.shiftKey) {
        var productData = JSON.parse(sessionStorage.getItem("currentUser"));
        alert(productData.email)
        $('#chat-message').append('<div class="row float-right"><div class="col-sm-6"><div class="chat-box--right" style="    position: relative;animation: fadeIn 1s ease-in;padding: 7px;border-right-style: ridge;border-right-color: #006666; border-width:9px;background: #0d8b7f;width: -moz-fit-content; width: fit-content;width:300px;border-radius: 10px;">' + $('#message').val() + '</div></div></div><br><br>');
          sessionStorage.setItem('currentMsg',$('#message').val())
         // console.log('test');
         var user=JSON.parse(sessionStorage.getItem("currentUser"));
         var messagee=sessionStorage.getItem('currentMsg')
         var userName=user.username
        let data={
          user:userName,
          msg:messagee
        }



         socket.emit('my message',data)

//  a()
          var chatHistory = document.getElementById("chat");
          chatHistory.scrollTop = chatHistory.scrollHeight;

          $('#message').val("");

      } else if (keycode == '13' && event.shiftKey) {

          var text = $('#message').val();

          $('#message').val(text.val() + '&#10;');

      }
      event.stopPropagation();
  });
   socket.on('my broadcast',(data) => {
            $('#chat-message').append('<div class="row float-left"><div class="col-sm-6"><h7 style="color: #ffffff;">'+data.user+'</h7><div class="chat-box--right" style="    position: relative;animation: fadeIn 1s ease-in;padding: 7px;border-left-style: ridge;border-left-color: #006666; border-width:9px;background: #0d8b7f;width: -moz-fit-content; width: fit-content;width:300px;border-radius: 10px;">' +data.msg + '</div></div></div><br><br><br><br>');

          })
// async function a(){

// }
  $("#search").on("keyup", function () {
      var value = $(this).val();
      $("#friends * ").filter(function () {
          $(this).toggle($(this).text().indexOf(value) > -1)
      });
  });


  var widthfortoggle = $(window).width();
  if (widthfortoggle < 750) {
      $("#back").css("display", "none");
      $("#leftpart").css("display", "block");
      $("#rightpart").css("display", "none");
      $('#leftpart').removeClass('col-4 no-gutters').addClass('col-12 no gutters');
      $("#friends").click(function () {
          $("#back").css("display", "block");
          $("#leftpart").css("display", "none");
          $("#rightpart").css("display", "block");
          $('#rightpart').removeClass('col-8 no-gutters').addClass('col-12 no gutters');

      });


  } else {
      $("#back").css("display", "none");
      $("#rightpart").css("display", "block");

  }



  $(window).resize(function () {
      var widthfortoggle = $(window).width();
      if (widthfortoggle < 746) {
          $("#friends").click(function () {
              $("#back").css("display", "block");
              $("#leftpart").css("display", "none");
              $("#rightpart").css("display", "block");
              $('#rightpart').removeClass('col-8 no-gutters').addClass('col-12 no gutters');

          });
      } else {
          $("#back").css("display", "none");
          $("#leftpart").css("display", "block");
          $("#rightpart").css("display", "block");
          $('#rightpart').removeClass('col-12 no-gutters').addClass('col-8 no gutters');

      }
  });
  $(window).resize(function () {
      console.log('resize called');
      var width = $(window).width();
      if (width < 746) {
          $('#leftpart').removeClass('col-4 no-gutters').addClass('col-12 no gutters');
      } else {
          $('#leftpart').removeClass('col-12 no-gutters').addClass('col-4 no gutters');
      }
  });




});
