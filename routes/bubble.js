const data = require("./data")
module.exports = 
{
    getBubbleInfo: async (req, res) =>
    {
        res.send(await data.getActividadesLudicas(req.query.tipo))
    }, //end getBubbleInfo

    getBubbleGraphic: (req, res) =>
    {
        res.render("partials/bubblechart.ejs")
    } //end getBubbleGraphic
} //end module.exports