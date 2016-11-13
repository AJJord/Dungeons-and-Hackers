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
      var gameStatContent = $('main #gameStatContent');

      $('#navBar ul #home').click(function () {
        console.log("showhomecontent executed");
        $(signUpContent).hide();
        $(homeContent).slideDown();
        $(gameStatContent).hide();
        return false;
      });

      $('#navBar ul #signUp').click(function () {
        console.log("showsignup executed");
        $(signUpContent).slideDown();
        $(homeContent).hide();
        $(gameStatContent).hide();
        return false;
      });

      $('#navBar ul #gameStat').click(function () {
        console.log("showgamestat executed");
        $(signUpContent).hide();
        $(homeContent).hide();
        $(gameStatContent).slideDown();
        return false;
      });
    });
    </script>
  </head>
  <body>
      <header>
        <h1><a href="#" id="home">Dungeons</a></h1>
        <h1><a href="#" id="home">&amp; <span>Hackers</span></a></h1>
      </header>
      <nav id="navBar">
        <p class="username">guest</p>
        <ul>
          <li><a href="#" id="home">Play</a></li>
          <li><a href="#" id="signUp">Sign Up</a></li>
          <li><a href="#" id="gameStat">Game Stats</a></li>
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
                    cmd.out  =  'Use the password command to complete registration.';
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
                      if(typeof login !== 'undefined'){
                        cmd.data = { email : cmd[1] }
                        $ptty.set_command_option({
                            out : 'Password stored.'
                        });
                        password = cmd[1];
                        console.log(login);
                        console.log(password);
                      }
                      else {
                        $ptty.set_command_option({
                            out : 'Use signup first.'
                        });
                        cmd = false;
                      }
                  }

                },
                options : [1],
                help: 'Register password.'
            };
            $ptty.register('command', cmd_signup);




          });
          </script>
        </div>
        <div id="gameStatContent" style="display: none;">
          <p>Insanity</p>
          <progress max="100" value="80"></progress>
          <p>Tiredness</p>
          <progress max="100" value="80"></progress>
          <p>Progess</p>
          <progress max="100" value="80"></progress>
          <p>Time</p>
          <progress max="100" value="80"></progress>
          <p>Bladder</p>
          <progress max="100" value="80"></progress>
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
