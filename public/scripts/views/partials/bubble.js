document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('bubble', {
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
        pointFormat: '<b>{point.name}:</b> {point.value} personas'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
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
    series: [{
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
        
   
});
});