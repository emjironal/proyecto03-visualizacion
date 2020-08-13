function bubbleChart(data)
{
    return new  Highcharts.chart('chart', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Actividades Lúdicas en CR'
    },
    subtitle:{
        text: 'Grupos de edad'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}%'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: data 
});
}

function bubbledata(type){
var data1 = [{
    name: 'De 5 a 11 años',
    value: 510053,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 52.3
    }, {
        name: 'Jugar juegos de mesa',
        value: 54.9
    },
    {
        name: "Jugar mejenga",
        value: 64.6
    },
    {
        name: "Participar en juegos tradicionales",
        value: 88.5
    }]
},
{
    name: 'De 12 a 17 años',
    value: 439819,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 65.6
    }, {
        name: 'Jugar juegos de mesa',
        value: 66.1
    },
    {
        name: "Jugar mejenga",
        value: 71.5
    },
    {
        name: "Participar en juegos tradicionales",
        value: 54.9
    }]
},
{
    name: 'De 18 a 35 años',
    value: 1342174,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 72.7
    }, {
        name: 'Jugar juegos de mesa',
        value: 53.1
    },
    {
        name: "Jugar mejenga",
        value: 49.1
    },
    {
        name: "Participar en juegos tradicionales",
        value: 34.1
    }]
},
{
    name: 'De 36 a 64 años',
    value: 1195858,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 80.3
    }, {
        name: 'Jugar juegos de mesa',
        value: 46.9
    },
    {
        name: "Jugar mejenga",
        value: 30
    },
    {
        name: "Participar en juegos tradicionales",
        value: 28.5
    }]
},
{
    name: 'De 65 años y más',
    value: 227236,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 88.1
    }, {
        name: 'Jugar juegos de mesa',
        value: 32.5
    },
    {
        name: "Jugar mejenga",
        value: 7.7
    },
    {
        name: "Participar en juegos tradicionales",
        value: 14.5
    }]
}]

var data2 = [{
    name: 'Sin instrucción',
    value: 258397,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 57.1
    }, {
        name: 'Jugar juegos de mesa',
        value: 42
    },
    {
        name: "Jugar mejenga",
        value: 53.1
    },
    {
        name: "Participar en juegos tradicionales",
        value: 69.8
    }]
},
{
    name: 'Primaria',
    value: 1404731,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 69.8
    }, {
        name: 'Jugar juegos de mesa',
        value: 46.1
    },
    {
        name: "Jugar mejenga",
        value: 45.5
    },
    {
        name: "Participar en juegos tradicionales",
        value: 42.6
    }]
},
{
    name: 'Secundaria',
    value: 1342174,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 73.3
    }, {
        name: 'Jugar juegos de mesa',
        value: 52.2
    },
    {
        name: "Jugar mejenga",
        value: 47
    },
    {
        name: "Participar en juegos tradicionales",
        value: 34.7
    }]
},
{
    name: 'Superior',
    value: 712073,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 81.6
    }, {
        name: 'Jugar juegos de mesa',
        value: 65
    },
    {
        name: "Jugar mejenga",
        value: 38.6
    },
    {
        name: "Participar en juegos tradicionales",
        value: 39.2
    }]
}]

var data3 = [{
    name: 'Central',
    value: 2403276,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 75.8
    }, {
        name: 'Jugar juegos de mesa',
        value: 54.9
    },
    {
        name: "Jugar mejenga",
        value: 43.1
    },
    {
        name: "Participar en juegos tradicionales",
        value: 42
    }]
},
{
    name: 'Chorotega',
    value: 238122,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 58.3
    }, {
        name: 'Jugar juegos de mesa',
        value: 48.7
    },
    {
        name: "Jugar mejenga",
        value: 54.6
    },
    {
        name: "Participar en juegos tradicionales",
        value: 43.4
    }]
},
{
    name: 'Pacífico Central',
    value: 184929,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 59.2
    }, {
        name: 'Jugar juegos de mesa',
        value: 23.3
    },
    {
        name: "Jugar mejenga",
        value: 37.5
    },
    {
        name: "Participar en juegos tradicionales",
        value: 26.2
    }]
},
{
    name: 'Brunca',
    value: 266492,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 79.8
    }, {
        name: 'Jugar juegos de mesa',
        value: 42.6
    },
    {
        name: "Jugar mejenga",
        value: 47.5
    },
    {
        name: "Participar en juegos tradicionales",
        value: 36.6
    }]
},
{
    name: 'Huetar Caribe',
    value: 313703,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 56.1
    }, {
        name: 'Jugar juegos de mesa',
        value: 50
    },
    {
        name: "Jugar mejenga",
        value: 50.7
    },
    {
        name: "Participar en juegos tradicionales",
        value: 43
    }]
},
{
    name: 'Huetar Norte',
    value: 308618,
    data: [{
        name: 'Contar recuerdos bonitos o historias graciosas',
        value: 75.3
    }, {
        name: 'Jugar juegos de mesa',
        value: 54.3
    },
    {
        name: "Jugar mejenga",
        value: 51.9
    },
    {
        name: "Participar en juegos tradicionales",
        value: 41.8
    }]
}]

var data4 = [
    {
        name: 'Hombres',
        value: 1905706,
        data: [{
            name: 'Contar recuerdos bonitos o historias graciosas',
            value: 68.7
        }, {
            name: 'Jugar juegos de mesa',
            value: 51.4
        },
        {
            name: "Jugar mejenga",
            value: 63.5
        },
        {
            name: "Participar en juegos tradicionales",
            value: 37.2
        }]
    },
    {
        name: 'Mujeres',
        value: 1809434,
        data: [{
            name: 'Contar recuerdos bonitos o historias graciosas',
            value: 76.4
        }, {
            name: 'Jugar juegos de mesa',
            value: 51.8
        },
        {
            name: "Jugar mejenga",
            value: 26
        },
        {
            name: "Participar en juegos tradicionales",
            value: 45.1
        }]
    }
]

var data5 = [
    {
        name: 'Total',
        value: 3715140,
        data: [{
            name: 'Contar recuerdos bonitos o historias graciosas',
            value: 72.4
        }, {
            name: 'Jugar juegos de mesa',
            value: 51.6
        },
        {
            name: "Jugar mejenga",
            value: 45.2
        },
        {
            name: "Participar en juegos tradicionales",
            value: 41
        }]
    }
]

var data6 = [
    {
        name: 'Urbana',
        value: 2723783,
        data: [{
            name: 'Contar recuerdos bonitos o historias graciosas',
            value: 73
        }, {
            name: 'Jugar juegos de mesa',
            value: 54.4
        },
        {
            name: "Jugar mejenga",
            value: 44.7
        },
        {
            name: "Participar en juegos tradicionales",
            value: 42.2
        }]
    },
    {
        name: 'Rural',
        value: 991357,
        data: [{
            name: 'Contar recuerdos bonitos o historias graciosas',
            value: 70.8
        }, {
            name: 'Jugar juegos de mesa',
            value: 43.9
        },
        {
            name: "Jugar mejenga",
            value: 46.6
        },
        {
            name: "Participar en juegos tradicionales",
            value: 37.8
        }]
    }
]
    if(type=='edad')
        return data1
    else if(type=='educacion')
        return data2
    else if(type=='region')
        return data3
    else if(type=='sexo')
        return data4
    else if(type=='total')
        return data5
    else 
        return data6
}