const express = require('express');
const app = express();

const mockUserData = [
    { name: 'Oliver' },
    { name: 'Connor' }
]

app.get('/', function (req, res)
{
    res.json({
        success: true,
        message: 'Successfully got users!',
        users: mockUserData
    })
})

//This stays at the bottom

app.listen(8000, function ()
{
    console.log("Server is running")
})