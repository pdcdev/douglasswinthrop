<!DOCTYPE html> 
<html> 
<head> 
<meta charset="UTF-8"> 
<title>Douglass Winthrop</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/main.css" rel="stylesheet" type="text/css">
<link href="css/people.css" rel="stylesheet" type="text/css">
<!-- <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/> -->
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/c0791320-eb3a-41c7-8868-c0ceb0eb6a90.css"/>
<link href="css/fontello/css/fontello.css" rel="stylesheet" type="text/css">
    
</head>
<script type="text/javascript" charset="utf-8">
//<![CDATA[
jQuery(function() {
  jQuery('.main-nav li').each(function() {
    var href = jQuery(this).find('a').attr('href');
    if (href === window.location.pathname) {
      jQuery(this).addClass('current');
    }
  });
});  
//]]>
</script>
<body>
    <header>
        <div class="inner_header">
            <h1><a href ="index.php">Douglass Winthrop</a></h1>
            <!-- <div class="menuIcon">
                <h1><a href="#menuExpand">Menu</a></h1>
            </div> -->
            <button class="overlay c-hamburger c-hamburger--htx">
                <span>toggle menu</span>
                <label for="op"></label>
                <div class="mob-nav-container">
                    <nav>
                        <ul>
                            <li<?php if ($thisPage=="About") echo " id=\"currentpage\""; ?>><a href ="firm.php">About</a></li>
                            <li<?php if ($thisPage=="Value") echo " id=\"currentpage\""; ?>><a href ="value.php">Value</a></li>
                            <li<?php if ($thisPage=="People") echo " id=\"currentpage\""; ?>><a href ="people.php">People</a></li>
                            <li<?php if ($thisPage=="Letters") echo " id=\"currentpage\""; ?>><a href ="letters.php">Letters</a></li>
                            <li<?php if ($thisPage=="Contact") echo " id=\"currentpage\""; ?>><a href ="contact.php">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </button>
            
            <nav class="main-nav">
                <ul>
                    <li<?php if ($thisPage=="About") echo " id=\"currentpage\""; ?>><a href ="firm.php">About</a></li>
                    <li<?php if ($thisPage=="Value") echo " id=\"currentpage\""; ?>><a href ="value.php">Value</a></li>
                    <li<?php if ($thisPage=="People") echo " id=\"currentpage\""; ?>><a href ="people.php">People</a></li>
                    <li<?php if ($thisPage=="Letters") echo " id=\"currentpage\""; ?>><a href ="letters.php">Letters</a></li>
                    <li<?php if ($thisPage=="Contact") echo " id=\"currentpage\""; ?>><a href ="contact.php">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>