const express = require('express');
const app = express();

const mockUserData = [
    { name: 'Oliver' },
    { name: 'Connor' }
]

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

//This stays at the bottom

app.listen(8000, function ()
{
    console.log("Server is running");
})