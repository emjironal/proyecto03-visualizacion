function createLineChart(data, categories)
{
    Highcharts.chart("chart", {

        title: {
            text: 'Cambio en actividades lúdicas respecto a la edad'
        },

        yAxis: {
            title: {
                text: 'Porcentaje que realiza la actividad'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Grupos de edad'
            },
            categories: categories
        },

        series: [
        {
            name: 'Contar recuerdos bonitos o historias graciosas',
            data: data["Contar recuerdos bonitos o historias graciosas"]
        },
        {
            name: 'Jugar juegos de mesa',
            data: data["Jugar juegos de mesa"]
        },
        {
            name: 'Jugar mejenga',
            data: data["Jugar mejenga"]
        },
        {
            name: 'Participar en juegos tradicionales',
            data: data["Participar en juegos tradicionales"]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    })
}

function getData()
{
    $.get("/sunburst/getSunburstInfo?tipo=edad", function(data)
    {
        var categories = []
        var result = {}
        for(var i = 0; i < data.length; i++)
        {
            var objectList = Object.entries(data[i])
            categories.push(objectList[0][1])
            for(var j = 2; j < objectList.length; j++)
            {
                if(result[objectList[j][0]])
                {
                    result[objectList[j][0]].push(Number(objectList[j][1]))
                }
                else
                {
                    result[objectList[j][0]] = [Number(objectList[j][1])]
                }
            }
        }
        createLineChart(result, categories)
    })
}

getData()