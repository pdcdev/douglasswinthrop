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
  <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
  <link href='http://fonts.googleapis.com/css?family=Istok+Web' rel='stylesheet' type='text/css'>
</head>


<body>
    <header>
        <div class="inner_header">
            <h1><a href ="index.php">Douglass Winthrop</a></h1>

            <link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>

            <div id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <!-- <a class="burgWrapper" href="##">
              <div class="burg"></div>
            </a> -->

            <!-- <button><span>Menu</span></button> -->

            <!-- <div class="Trigger">
              <div class="Trigger-lines"></div>
            </div> -->
            <!-- <div class="mob-nav">
              <div class="nav-tab">
                <a id="hamburger">
                  <span class="first-child">&nbsp;</span>
                  <span class="second-child">&nbsp;</span>
                  <span class="third-child">&nbsp;</span>
                  
                </a>
              </div>
            </div> -->
            

            <nav class="open">
              <ul class="overlay">
                <li><a class="menu-mob" href="index.php">Home</a></li>
                <li><a class="menu-mob" href="firm.php">About</a></li>
                <li><a class="menu-mob" href="value.php">Value</a></li>
                <li><a class="menu-mob" href="process.php">Process</a></li>
                <li><a class="menu-mob" href="people.php">People</a></li>
                <li><a class="menu-mob" href="letters.php">Letters</a></li>
                <li><a class="menu-mob" href="contact.php">Contact</a></li>
              </ul>
            </nav>

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
    <script type="text/javascript">
      $(function(){
      $('#nav-icon4, nav').click(function(){
        $('#nav-icon4').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('open');
      });
      });

      $("#nav-icon4").click(function(){
            $(this).toggleClass("menu-on");
      });
    </script>

