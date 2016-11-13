<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dungeons and Hackers</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" type="text/css" href="ptty.themes.css">
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
        <p class="username">guest</p>
        <ul>
          <li><a href="#" id="home">Play</a></li>
          <li><a href="#" id="signUp">Sign Up</a></li>
        </ul>

      </nav>
      <main>
        <div id="homeContent">
        <h2>You are your own worst enemy.</h2>
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
        <h2>Who are you?</h2>
          <div id="terminal"></div>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script src="ptty.jquery.js"></script>
          <script>
          var login;
          var password;
          $(document).ready(function(){
            var $ptty = $('#terminal').Ptty({ theme : 'fallout', i18n : {
        welcome : 'GreatUniHack2016 Simulator',
        error_not_found : 'Our search geese flocked up somewhere.'
    } });

            $ptty.register('command', {
              name: 'signup',
              method: function(cmd){
                console.log(cmd);
                if( cmd[1] && /^[a-zA-Z_\-]+$/.test(cmd[1]) ){
                    cmd.data = { email : cmd[1] }
                    login = cmd[1];
                    console.log(login);
                    cmd.out  =  'Success!';
                    $("p.username").html(login);
                }
                else if(cmd[1]){
                    $ptty.set_command_option({
                        next : 'signup %cmd%',
                        ps : 'username? ',
                        out : 'Try again. Or exit with escape key.'
                    });
                    cmd = false;
                }
                else{
                    $ptty.set_command_option({
                        out : 'Usage: signup username. Spaces not accepted.'
                    });
                    cmd = false;
                }
                return cmd;
              },
              options: [1], /*[]*/
              help: 'Stores email'
            });

            var cmd_signup = {
                name: 'password',
                method: function(cmd){

                  if(cmd[1]){
                      cmd.data = { email : cmd[1] }
                      cmd.out  =  'Password stored.';
                      password = cmd[1];
                      console.log(login);
                      console.log(password);
                  }

                },
                options : [1],
                help: 'Register password.'
            };
            $ptty.register('command', cmd_signup);




          });
          </script>
        </div>
        <div id="gameStatContent">

        </div>



<!--
          <form class="" action="index.html" method="post">
            <label for="username">Username</label><input type="text" name="username" value="">
            <label for="password">Password</label><input type="password" name="password" value="">
            <button type="button" name="submit">Submit</button>
          </form>
-->
      </main>
      <footer>&copy; 2016, The Watch-men. <a href="http://github.com/BlooMaan">Alex</a>, <a href="http://github.com/undying-fish">Simon</a>, <a href="https://github.com/WilliamStott">Will</a>, Michael</footer>
  </body>
</html>
