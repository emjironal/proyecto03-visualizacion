const data = require("./data")
module.exports = 
{
    getSunburstInfo: async (req, res) =>
    {
        res.send(await data.getActividadesLudicas(req.query.tipo))
    }, //end getSunburstInfo

    getSunburstGraphic: (req, res) =>
    {
        res.render("partials/sunburst.ejs")
    } //end getSunburstGraphic
} //end module.exports