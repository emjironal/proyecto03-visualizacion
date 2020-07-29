//Reference: https://github.com/AshKyd/geojson-regions/blob/master/example/app.js
var map, happiness;

map = L.map('map', {
    minZoom: 2,
    zoom: 2,
    center: [0, 0]
}) //end map

$.get("/getHappiness", function(data)
{
    happiness = data
    $.getJSON('/assets/custom.geo.json', function(json)
    {
        L.geoJson(json,
        {
            clickable: true,
            style: function(item)
            {
                if(item.properties.type == 'stateline')
                {
                    return {
                        fill:false,
                        stroke:true,
                        color:'#EAEAEA',
                        weight:2
                    }
                } //end if
                if(item.geometry.type == 'Point')
                {
                    if(item.properties.importance > 1)
                    {
                        return {
                            fill:false,
                            stroke:false
                        }
                    } //end if

                    return {
                        fill:true,
                        fillOpacity:1,
                        stroke:false,
                        fillColor:"#aaa",
                        radius: 2 / item.properties.importance
                    }

                } //end if
                else
                {
                    return {
                        fillColor:'#fff',
                        fillOpacity:1,
                        fill:true,
                        color:'#000',
                        weight:1
                    }
                } //end else
            }, //end style

            //Functions for each feature of the geojson
            onEachFeature: function (feature, layer)
            {
                var name = feature.properties.name;
                //Gets country data
                country = search(happiness, name)
                mapScore = mapFun(7.769 - country.Score, 0, 7.769 - 2.853, 65, 255)
                //Color
                layer.setStyle(
                {
                    fillColor: country.Score == 0 ? '#FFFFFF' :
                        `#${color(mapScore)}${color(mapScore)}FF`
                }); //end setStyle
                //Popup
                layer.bindPopup(`${name}<br>Felicidad: <br>${country["Country_or_region"] ? parseFloat(country.Score) : "No data"}`)
            } //end onEachFeature
        }) //end geoJson
        .addTo(map);
    }); //end getJSON
}) //end getHappiness

function mapFun(value, x1, y1, x2, y2)
{
    //Reference: https://stackoverflow.com/questions/51494376/how-to-transform-one-numerical-scale-into-another#51494556
    temp1 = (value - x1) / (y1 - x1)
    temp2 = (y2 - x2) * temp1 + x2
    return temp2
} //end mapFun

function color(value)
{
    value = 1.34069 * value + -86.1363
    return ("0" + (value | 0).toString(16)).slice(-2)
} //end color

function search(list, goal)
{
    while(list)
    {
        if(list[list.length / 2 | 0]['Country_or_region'] == goal)
        {
            return list[list.length / 2 | 0]
        } //end if
        else if(list.length == 1)
        {
            return {'Score': 0}
        } //end else if
        else if(list[list.length / 2 | 0]['Country_or_region'] < goal)
        {
            list = list.slice(list.length / 2 | 0)
        } //end else if
        else
        {
            list = list.slice(0, list.length / 2 | 0)
        } //end else
    } //end while
    return {'Score': '0'}
} //end search