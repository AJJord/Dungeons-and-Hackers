<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dungeons and Hackers</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="ptty.jquery.js"></script>
    <script>

    // Wait for the page to load first
    $(document).ready(function(){
      var homeContent = $('main #homeContent');
      var signUpContent = $('main #signUpContent');

      $('#navBar ul #home').click(function () {
        console.log("showhomecontent executed");
        $(signUpContent).hide();
        $(homeContent).slideDown();
        return false;
      });

      $('#navBar ul #signUp').click(function () {
        console.log("showsignup executed");
        $(signUpContent).slideDown();
        $(homeContent).hide();
        return false;
      });
    });
    </script>
  </head>
  <body>
      <header>
        <h1>Dungeons</h1>
        <h1>&amp; <span>Hackers</span></h1>
      </header>
      <nav id="navBar">
        <p>$ [guest@greatunihack2016] >></p>
        <ul>
          <li><a href="#" id="home">Play</a></li>
          <li><a href="#" id="signUp">Sign Up</a></li>
        </ul>

      </nav>
      <main>
        <h2>You are your own worst enemy.</h2>
        <div id="homeContent">
          <p>
            Fighting to stay awake and enjoying what you're doing are two
            different things.<br>Or are they?<br>
            Prove they're different in <i>Dungeons and Hackers</i>, a roleplaying
            game powered by Amazon Echo, a web server, some lazy code, and you.
            Watch as time falls away before your very eyes, your solutions prove
            to fail, and you learn - in real life! - that this is the absolute
            truth. If this is getting to you already, you may cry now.<br>
            Follow the project here on <a href="https://github.com/BlooMaan/dungeons-and-hackers">GitHub</a>.
          </p>
        </div>
        <div id="signUpContent" style="display: none;">
          <div id="terminal"></div>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script src="ptty.jquery.js"></script>
          <script>
          $(document).ready(function(){
            var $ptty = $('#terminal').Ptty();

            var cbf_login = {
            name: 'login',
            method: function(cmd){
                var opts, $input = $ptty.get_terminal('.prompt .input');

                if(cmd[1] && cmd[2]){
                    opts = {
                        out : 'Identifying...',
                        last : 'xxxxxxxxxx',
                        data : { usr : cmd[1], psw : $input.text() }
                    };
                    $input
                        .text('xxxxxxxxxx')
                        .css({'visibility' : 'visible'});
                }else if(cmd[1]){
                    opts = {
                        out  : 'Password?',
                        next : 'login '+cmd[1]+' %cmd%',
                    };

                    $input.css({'visibility' : 'hidden'});
                    $(document).on('keydown.escape', function( e ) {
                        if(e.which == 27){ // escape key exits command
                            $input.css({'visibility' : 'visible'});
                            $( this ).unbind( e );
                        }
                    });

                    cmd = false;
                }else{
                    opts = {
                        out  : 'Username?',
                        ps   : 'usr: ',
                        next : 'login %cmd%',
                    };
                    cmd = false;
                }

                $ptty.set_command_option(opts);

                return cmd;
            }
};
$ptty.register('callbefore', cbf_login );

var cmd_login = {
    name: 'login',
    method: '/ptty/',
    options : [1,2],
    help: 'Login command. Usage: login [username] [password]'
};
$ptty.register('command', cmd_login);


var cbk_login =  {
    name : 'login',
    method : function(cmd){
        if(cmd.data && cmd.data.is_loggedin && cmd.data.is_loggedin === true){
            // remove these commands using a response
            cmd.rsp_batch_unregister = ['login', 'signup'];
            $ptty.register('command', cmd_logout);
            $ptty.register('callback', cbk_logout);
        }
        return cmd;
    }
};
$ptty.register('callback', cbk_login);


var rsp_batch_unregister = {
    name : 'rsp_batch_unregister',
    method : function(cmd){
        // commands to remove
        var cmd_names = cmd.rsp_batch_unregister;

        // from these stacks
        var stacks = ['callbefore', 'command', 'callback'];
        for (var i = 0; i < stacks.length; i++) {
            for (var n = 0; n < cmd_names.length; n++) {
                $ptty.unregister(stacks[i], cmd_names[n]);
            }
        }

        // Always delete your response property if you
        // don't want it to fire in unexpected places.
        delete(cmd.rsp_batch_unregister);

        return cmd;
    }
};
$ptty.register('response', rsp_batch_unregister);
          </script>
        </div>
<!--
          <form class="" action="index.html" method="post">
            <label for="username">Username</label><input type="text" name="username" value="">
            <label for="password">Password</label><input type="password" name="password" value="">
            <button type="button" name="submit">Submit</button>
          </form>
-->
      </main>
      <footer>&copy; 2016, The Watch-men. <a href="http://github.com/BlooMaan">Alex</a>, <a href="http://github.com/undying-fish">Simon</a></footer>
  </body>
</html>
