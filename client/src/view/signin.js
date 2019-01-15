<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RGCA Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        html{
        padding:50px;
    }
    </style>
</head>

<body background="./assets/bill.jpg"> <!--image sourced from https://wall.alphacoders.com/big.php?i=36198-->
    <div class="container">
        <div class="col-sm-6 col-sm-offset-3">
            <h2>Login</h2>

      <form id="signin" name="signin" method="post" action="signin">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input class="form-control" name="email" type="text" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input name="password" class="form-control" type="password" />
        </div>

        <input class="btn btn-success btn-lg" type="submit" value="Go!" />
      </form>

      <hr>

      <p><a href="signup">Create An Account</a></p>

    </div>

  </div>


</body>

</html>