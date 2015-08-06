<!DOCTYPE html> 
<html> 
<head> 
<link href="http://fast.fonts.net/cssapi/c0791320-eb3a-41c7-8868-c0ceb0eb6a90.css" type="text/css" rel="stylesheet"/>
<meta charset="UTF-8"> 
<title>Douglass Winthrop</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/main.css" rel="stylesheet" type="text/css">
<link href="css/people.css" rel="stylesheet" type="text/css">
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=Istok+Web' rel='stylesheet' type='text/css'>
 
 </head>
<style>
    @import "bourbon/bourbon";
    @import "grid-settings";
    @import "neat/neat";
    @import "utilities/variables";
    @import "utilities/universal";
    @import "compass/css3";

      nav,  .burger-menu {
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
        }

        .nav-hide { display: none; 
        }

        nav ul {
          padding-top: 100px;
          vertical-align: middle;
          padding-left: 0 !important;
          height: 500px;
          overflow: scroll;
        }

        nav ul li { list-style: none;
            margin-bottom: 20px;
         }

        nav ul li a {
          font-size: 25px;
          color: #b2b2b2;
          font-weight: bolder;
          text-decoration: none;
          font-family: inherit;
        }

        @media only screen and (min-device-width : 320px) and (max-device-width : 568px) and (orientation : landscape) { 
              nav ul {
                  padding-top: 100px;
                  vertical-align: middle;
                  padding-left: 0 !important;
                  height: 300px;
                  overflow: scroll;
                }
        }

        .burger-menu {
          position: absolute;
          width: 30px;
          height: 50px;
          cursor: pointer;
          right:0;
          margin-right: 30px;
        }
        .burger {
          position: absolute;
          background: #b2b2b2;
          width: 100%;
          height: 3px;
          top: 33px;
          left: 0px;
          margin-top: -5px;
        }
        .burger::before {
          position: absolute;
          background: #b2b2b2;
          width: 30px;
          height: 3px;
          top: 8px;
          content: "";
          display: block;
          z-index: 999;
        }
        .burger::after {
          position: absolute;
          background: #b2b2b2;
          width: 30px;
          height: 3px;
          bottom:8px;
          content: "";
          display: block;
          z-index: 999;
        }
        .burger::after, .burger::before, .burger {
          transition: all .3s ease-in-out;
          -webkit-transition: all .3s ease-in-out;
        }
        .burger-menu.menu-on .burger::after{
           transform: rotate(-45deg);
           -webkit-transform: rotate(-45deg);
          bottom: 0px;
        }
        .burger-menu.menu-on .burger::before{
           transform: rotate(45deg);
           -webkit-transform: rotate(45deg);
          top: 0px;
        }
        .burger-menu.menu-on .burger{
         background: rgba(111,111,111,.0);
        }

        @media screen and (min-width: 768px) {
            .burger-menu{
                display: none;
            } 
        }

        nav.nav-hide ul.overlay li a{
          font-family: inherit !important;
        }

</style>

<body>
    <header>
        <div class="inner_header">
            <h1><a href ="index.php">Douglass Winthrop</a></h1>

            <link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>

<div class="hamburger-slim">
</div>


            <div class="burger-menu">
              <div class="burger"></div>  
            </div>

            <nav class="nav-hide">
              <ul class="overlay">
                <li><a href="index.php">Home</a></li>

                <li><a href="firm.php">About</a></li>
                
                <li><a href="value.php">Value</a></li>

                <li><a href="process.php">Process</a></li>
                
                <li><a href="people.php">People</a></li>
                
                <li><a href="letters.php">Letters</a></li>
                
                <li><a href="contact.php">Contact</a></li>

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
      $('.burger-menu, nav').click(function(){
        $('.burger-menu').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
      });
    });
    </script>
    <script type="text/javascript">
    $(".burger-menu").click(function () {
          $(this).toggleClass("menu-on");
    });
    // var _gaq = _gaq || [];
    // _gaq.push(['_setAccount', 'UA-36251023-1']);
    // _gaq.push(['_setDomainName', 'jqueryscript.net']);
    // _gaq.push(['_trackPageview']);

    // (function() {
    // var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    // ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    // var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    // })();
    </script>

