<!DOCTYPE html> 
<html> 
<head> 
  <link href="http://fast.fonts.net/cssapi/c0791320-eb3a-41c7-8868-c0ceb0eb6a90.css" type="text/css" rel="stylesheet"/>
  <meta charset="UTF-8"> 
  <title>Douglass Winthrop</title>

  <link rel="shortcut icon" type="image/x-icon" href="images/fav-dw.ico">

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <link href="css/reset.css" rel="stylesheet" type="text/css">
  <link href="css/main.css" rel="stylesheet" type="text/css"> 
  <link href="css/people.css" rel="stylesheet" type="text/css">

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-24286242-3', 'auto');
  ga('send', 'pageview');

</script>

</head>
<style type="text/css">
  nav.open {
    display: block;
    background-color: #000;
    position: fixed;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  .overlay {
    background-color: #000;
    position: fixed;
    top: 0;
    left:0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    padding-top: 60px;
    vertical-align: middle;
    overflow: scroll;
    min-height: 500px;
  }
</style>

<body>
    <header>
        <div class="inner_header">
            <h1><a href ="index.php">Douglass Winthrop</a></h1>

            <link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>

            <!-- <div id="nav-icon4">
              <span></span>
              <span></span>
              
            </div> -->


            <div id="container">
              <span id="mobile-menu-button"><a href="#menu"></a></span>
              <nav class="nav">

              <ul class="overlay">
                  
                <li class="mm"><a class="menu-mob" href="index.php" >Home</a></li>
                <li class="mm"><a class="menu-mob" href="firm.php">About</a></li>
                <li class="mm"><a class="menu-mob" href="value.php">Value</a></li>
                <li class="mm"><a class="menu-mob" href="process.php">Process</a></li>
                <li class="mm"><a class="menu-mob" href="people.php">People</a></li>
                <li class="mm"><a class="menu-mob" href="letters.php">Letters</a></li>
                <li class="mm"><a class="menu-mob" href="contact.php">Contact</a></li>
              </ul>
            
              </nav>
            </div>

            <div class="main-nav">
                <ul>
                    <li><a href ="firm.php">About</a></li>
                    <li><a href ="value.php">Value</a></li>
                    <li><a href ="process.php">Process</a></li>
                    <li><a href ="people.php">People</a></li>
                    <li><a href ="letters.php">Letters</a></li>
                    <li><a href ="contact.php">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
   

    <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'></script>
    <script type="text/javascript">

    

    $(document).ready(function(){
        $("#nav-icon4").click(function(){
            $(".open").toggle();
        });
    });


    $(document).ready(function(){
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });

    $(function(){
      $('#nav-icon4, nav').click(function(){
      $('#nav-icon4').toggleClass('open');
      $('.nav').fadeToggle();
      $('.nav').removeClass('open');
      });
      });
    //   $("#nav-icon4").click(function(){
    //       $(this).removeClass("menu-on");
    // });

      $(document).ready(function(){
      $( ".overlay" ).click(function() {
          $( ".overlay" ).removeClass( 'nav', function() {
            // Animation complete.
          });
        });
      });

      


      $(document).ready(function(){
      $('#mobile-menu-button').click(function() {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.nav').slideToggle('fast');
        $('.overlay').removeClass('nav');
      });
      });

    </script>

    

    