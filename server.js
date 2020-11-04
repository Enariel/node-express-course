/**
 * Oliver Conover
 * Optional Node.js lab
 **/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    { name: 'Oliver' },
    { name: 'Connor' }
]

//GET requests only returns requests from server
//POST requests send data to server
//Post requests come after get requests.
//A 'login' test function


// '/' is a directory within the server root folder/url
// http://localhost:8000/users
app.get('/users/', function (req, res)
{
    res.json({
        success: true,
        message: 'Successfully got users!',
        users: mockUserData
    })
})

//URLS can have variables with a colon : 

app.get('/users/:id', function (req, res)
{
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Got one user',
        user: req.params.id
    })
})

app.post('/login', function (req, res)
{
    //Passwords are encrypted and set to database
    const username = req.body.username;
    const password = req.body.password;

    //This information usually comes from said database
    const testUser = "ThreeCats";
    const testPass = "NamiHasAMustache";

    if (username === testUser && password === testPass)
    {
        //a json webtoken method here
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'Encryption stuff goes here'
        })
    }
    else
    {
        res.json({
            success: false,
            message: 'Denied',
        })
    }
})


//This stays at the bottom

app.listen(8000, function ()
{
    console.log("Server is running");
})