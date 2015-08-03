<!DOCTYPE html> 
<html> 
<head> 
<meta charset="UTF-8"> 
<title>Douglass Winthrop</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/main.css" rel="stylesheet" type="text/css">
<link href="css/people.css" rel="stylesheet" type="text/css">
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/c0791320-eb3a-41c7-8868-c0ceb0eb6a90.css"/>
<link href='http://fonts.googleapis.com/css?family=Istok+Web' rel='stylesheet' type='text/css'>
</head>
<style>

@import "utilities/variables";
@import "utilities/universal";

nav,
        .navbar-toggle {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        nav {
          position: fixed;
          left: 0;
          z-index: 10;
          background-color: #000;
          opacity: 0.8;
          width: 100%;
          height: 100%;
          text-align: center;
          display: table;
          color: white;
          font-family: $frutigerLightCond;
        }

        .nav-hide { display: none; 
            font-family: georgia;
        }



        nav ul {
          padding-top: 100px;
          vertical-align: middle;
          padding-left: 0 !important;
        }

        nav ul li { list-style: none;
            margin-bottom: 30px;

         }

        nav ul li a {
          font-size: 25px;
          color: #b2b2b2;
          font-weight: bolder;
          text-decoration: none;
          font-family: $frutigerLightCond !important;
        }

        .navbar-toggle {
            @include span-columns(12);
          display: inline-block;
          position: absolute;
          right: 30px;
          margin: 20px 0 0 0;
          width: 30px;
          height: 30px;
          z-index: 20;
          cursor: pointer;

        }

        .bar1,
        .bar2,
        .bar3 {
          width: 100%;
          height: 3px;
          margin-bottom: 5px;
          background-color: #b2b2b2;
          -webkit-transition: 0.3s ease-in-out;
            -moz-transition: 0.3s ease-in-out;
            -o-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }

        .navbar-on .bar1,
        .navbar-on .bar2,
        .navbar-on .bar3 { 
            background-color: #b2b2b2; 
        }

        @media only screen and (min-device-width: 220px) and (max-device-width: 480px) {
                .navbar-on .bar1 {
              transform-origin: 10% 40%;
              transform: rotate(45deg);
            }

            .navbar-on .bar3 {
              transform-origin: 10% 40%;
              transform: rotate(-45deg);
            }

            .navbar-on .bar2 { 
                background-color: transparent; 

            }

            .bar1,
            .bar2,
            .bar3 {
              width: 100%;
              height: 3px;
              margin-bottom: 5px;
              background-color: #b2b2b2;
              -webkit-transition: 0.3s ease-in-out;
                -moz-transition: 0.3s ease-in-out;
                -o-transition: 0.3s ease-in-out;
              transition: 0.3s ease-in-out;
            }
        }   

        .navbar-on .bar1 {
          transform-origin: 10% 40%;
          transform: rotate(45deg);
        }

        .navbar-on .bar3 {
          transform-origin: 10% 40%;
          transform: rotate(-45deg);
        }

        .navbar-on .bar2 { 
            background-color: transparent; 

        }

        @media screen and (min-width: 768px) {
            .navbar-toggle{
                display: none;
            } 
            
        }

</style>

<body>
    <header>
        <div class="inner_header">
            <h1><a href ="index.php">Douglass Winthrop</a></h1>

            <div class="navbar-toggle">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>

            <nav class="nav-hide">
              <ul>
                <li><a href="index.php" style="font-family: 'Istok Web', sans-serif;">Home</a></li>

                <li><a href="firm.php" style="font-family: 'Istok Web', sans-serif;">About</a></li>
                
                <li><a href="value.php" style="font-family: 'Istok Web', sans-serif;">Value</a></li>

                <li><a href="process.php" style="font-family: 'Istok Web', sans-serif;">People</a></li>
                
                <li><a href="people.php" style="font-family: 'Istok Web', sans-serif;">People</a></li>
                
                <li><a href="letters.php" style="font-family: 'Istok Web', sans-serif;">Letters</a></li>
                
                <li><a href="contact.php" style="font-family: 'Istok Web', sans-serif;">Contact</a></li>

              </ul>
            </nav>
            
            <div class="main-nav">
                <ul>
                    <li<?php if ($thisPage=="About") echo " id=\"currentpage\""; ?>><a href ="firm.php">About</a></li>
                    <li<?php if ($thisPage=="Value") echo " id=\"currentpage\""; ?>><a href ="value.php">Value</a></li>
                    <li<?php if ($thisPage=="Process") echo " id=\"currentpage\""; ?>><a href ="process.php">Process</a></li>
                    <li<?php if ($thisPage=="People") echo " id=\"currentpage\""; ?>><a href ="people.php">People</a></li>
                    <li<?php if ($thisPage=="Letters") echo " id=\"currentpage\""; ?>><a href ="letters.php">Letters</a></li>
                    <li<?php if ($thisPage=="Contact") echo " id=\"currentpage\""; ?>><a href ="contact.php">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    <script type="text/javascript">
    $(function(){
      $('.navbar-toggle, nav').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
      });
    });
    </script>
    <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

</script>
