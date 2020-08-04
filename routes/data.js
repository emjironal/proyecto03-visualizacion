const csv = require('csvtojson')
module.exports = 
{
    getActividadesLudicas: (tipo = "") =>
    {
        const pathCSVFolder = "public/assets/data"
        const pathLudicas = pathCSVFolder + `/data-ludicas${tipo ? "-" + tipo : tipo}.csv`
        return csv().fromFile(pathLudicas)
    }
}