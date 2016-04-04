$(document).ready(function() {
  var dispatcher = new WebSocketRails(window.location.host + "/websocket");
  // var dispatcher = new WebSocketRails("https://localhost:443/websocket");
  console.log('dispatcher', dispatcher);

  dispatcher.on_open = function(data) {
    console.log('Connection has been established: ', data);
    // You can trigger new server events inside this callback if you wish.
  }

  try {
    var user = {
      name: 'den'
    }
    console.log('user', user);
    dispatcher.trigger('new_message', user, success_cb, error_cb);
    console.log("dispatcher", dispatcher.trigger('new_message', user, success_cb, error_cb));

    dispatcher.bind('new_message', function(data) {
      console.log('new mesage', data);
    })

    function success_cb(data){
      console.log('success_cb', data);
    }
    function error_cb(data){
      console.log('error', data);
    }
  } catch (e) {
    console.log("Ага, попался!", e);
  }



  $('#soketdiv').append('<button id="mes_btn">SEND_MESS</button>');

  $("#mes_btn").click(function () {
    console.log('start send');
    var post = {
      title: 'This post was awful',
      text: 'really awful'
    }
    dispatcher.trigger('create_posts', post, success_cb, error_cb);

    function success_cb(data){
      console.log('success_cb', data);
    }
    function error_cb(error){
      console.log('error', error);
    }

    console.log('stop send');
    });

  dispatcher.bind('messa', function(data) {
    console.log('data message', data); // would output 'this is a message'
  });
});
