const express = require('express')
const path = require('path');
const sunburst = require("./routes/sunburst")
const bubble =  require("./routes/bubble")

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
app.get('/sunburst/getSunburstInfo', sunburst.getSunburstInfo)
app.get('/sunburst', sunburst.getSunburstGraphic)

app.get('/bubblechart/getBubbleInfo', bubble.getBubbleInfo)
app.get('/bubblechart', bubble.getBubbleGraphic)

app.listen(PORT, ()=>
{
    console.log('Server started at: http://localhost:'+ PORT)
}) //end listen
