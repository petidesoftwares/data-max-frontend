<!DOCTYPE html>
<html>
    <head>
        <title>DataMax App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale=1">
        <link rel="stylesheet" href="../stylesheets/datamax.css">
        <script type="text/javascript" src="../controllers/jquery.js"></script>
        <script type="text/javascript" src="../controllers/controller1.js"></script>
    </head>
    <body>
        <div class="row">
            <div class="col-12 page-header">
                <h1>DataMax System</h1>
                <ul class="navbar-default">
                    <li><a href="../index.php">Home</a></li>
                    <li><a>About</a></li>
                    <li><a class="active">View</a></li>
                    <li><a>Signup</a></li>
                    <li><a>Sign</a></li>
                </ul>
            </div>
        </div>
        <div class="row  display-pane" id="display-pane">
           <div class="col-3"></div>
            <div class="col-6 form-pane" >
                <h3>UPDATE BOOK</h3>
                <span class="col-12">
                    <label>Name: </label><br>
                    <input type="text" name="book-title" id="book-title">
                </span>
                <span class="col-12">
                    <label>ISBN: </label><br>
                    <input type="text" name="isbn" id="isbn">
                </span>
                <span class="col-12">
                    <label>Author: </label><br>
                    <input type="text" name="author" id="author">
                </span>
                <span class="col-12">
                    <label>Country: </label><br>
                    <input type="text" name="country" id="country">
                </span class="col-12">
                <span class="col-12">
                    <label>Number of Pages: </label><br>
                    <input type="text" name="pages" id="pages">
                </span>
                <span class="col-12">
                    <label>Publisher: </label><br>
                    <input type="text" name="publisher" id="publisher">
                </span>
                <span class="col-12">
                    <label>Release Date: </label><br>
                    <input type="text" name="release-date" id="release-date">
                </span>
                <span class="col-12">
                    <button name="update-book-btn" id="update-book-btn" onclick="updateBook()">Update</button>
                </span>
            </div>
        </div>
    </body>
</html>