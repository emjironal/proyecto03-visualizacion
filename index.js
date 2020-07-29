const express = require('express')
const path = require('path');
const csv = require('csvtojson')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); 
app.use(express.static(path.join(__dirname, 'public')))

function getMain(req, res)
{
	res.render("pages/index.ejs") 
}

app.get('/', getMain)

app.listen(PORT, ()=>
{
    console.log('Server started at: http://localhost:'+ PORT)
}) //end listen
