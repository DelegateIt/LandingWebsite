<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>DelegateIt</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="css/site.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://nathanchapman.net/flex-grid/css/u-tilities.css">
    <script src="js/site.min.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-70929121-1', 'auto');
      ga('send', 'pageview');

    </script>
  </head>
  <body>
    <div class="first-section">
      <div class="container">
        <!-- HEADER -->
        <header class="navbar navbar-static-top" role="banner" id="top">
          <nav class="navbar navbar-default">
            <div class="navbar-header">
              <a class="brand" href="#">
                <img src="./images/logo-delegateit-gradient.png" title="DelegateIt" style="margin-top: 12px">
              </a>
              <div class="navbar-collapse" id="menus">
                <a href="#" class="btn btn-lg btn-brand delegate-now">Sign up now</a>
              </div>
            </div>
          </nav>
        </header>
        <hr><br>
        <div class="row">
          <div class="first-paragraph col-md-7">
            <div class="header-block shown">
              <h1 class="type">Any Delivery.<br>Any Task.</h1>
              <p>DelegateIt allows you to delegate any task or delivery through a simple text conversation.</p>
              <p>Text us your request to get started.</p>
              <span class="phone-number"><a href="tel:5123563557">512-359-3557</a></span>
            </div>
          </div><!--
       --><div class="second-paragraph col-md-5">
            <img src="./images/iphone.png" alt="">
          </div>
          <div class="down-arrow">
            <a href="#second-section"><i class="fa fa-chevron-down"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Second section -->
    <div class="container section second-section" id="second-section">
        <div class="row">
          <div class="col-sm-12 right-extra-padding">
            <h3>How it works</h3>
            <p>We provide a 24/7 concierge service that is simple and quick to use.</p>
            <p>Send us a text with your requests and one of our team members will reply with options. All billing is done through a secure Stripe link.</p>
          </div>
        </div>
    </div>

    <!-- Fourth section -->
    <div class="aqua-box" id="delegate-form">
      <div class="container">
        <h2>delegate now</h2>
        <div>
          <hr>
          <div class="horizontal-center reduced-width">
            <p>Fill out the form and we will get back to you with a text message response. We look forward to helping you!</p>
            <p style="display: none; color: #FF9D00; font-weight: 500;">Invalid phone number.</p>
            <p style="display: none;">Thank you for signing up for our service!</p>
          </div>
          <form action="http://gator-api.elasticbeanstalk.com/core/customer?sendtext=true" method="post" class="horizontal-center">
            <input type="text" id="first_name" name="first_name" placeholder="First Name">
            <input type="text" id="last_name" name="last_name" placeholder="Last Name">
            <input type="text" id="phone" name="phone" placeholder="Phone">
            <input type="text" id="zip" name="zip" placeholder="Zip Code">
            <!-- Using test URL temporarly -->
            <input type="submit" value="Submit" class="submit">
            <!-- <input type="submit" value="Submit" class="submit" action="http://backend-lb-125133299.us-west-2.elb.amazonaws.com/core/customer?sendtext=true" id="formid"> -->
          </form>
        </div>
      </div>
    </div>

  <!-- Footer -->
  <footer>
    <div class="container">
      <a class="brand" href="#">
        <img src="./images/gray-logo.png" title="DelegateIt" style="margin-top: 12px">
      </a>
      <div class="pull-right links">
        <p><a href="docs/privacy-policy.pdf" style="padding: 0;" target="_blank">Privacy Policy</a> | <a href="mailto:Contact@DelegateIt.co">Contact@DelegateIt.co</a></p>
      </div>
    </div>
  </footer>

  </body>
</html>
