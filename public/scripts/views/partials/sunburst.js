function sunburstChart(data)
{
    return new Highcharts.chart("chart",
    {
        chart: {
            height: "100%"
        },
        title: {
            text: "Actividades lúdicas en CR",
        },
        subtitle: {
            text: "Clasificaciones"
        },
        series: [{
            type : "sunburst",
            data: data,
            allowDrillToNode: true,
            cursor: "pointer",
            datalabels: {
                format: '{point.name}',
                filter: {
                    property: "innerArcLenght",
                    operator: ">",
                    value: 16
                },
                rotationMode: "circular"
                },
                levels: [{
                    level: 1,
                    levelIsConstant: false,
                    dataLabels: {
                        filter: {
                            property: 'outerArcLength',
                            operator: '>',
                            value: 64
                        }
                    }
                }, {
                    level: 2,
                    colorByPoint: true
                },
                {
                    level: 3,
                    colorVariation: {
                        key: 'brightness',
                        to: -0.5
                    }
                }, {
                    level: 4,
                    colorVariation: {
                        key: 'brightness',
                        to: 0.5
                    }
                }]
            }], //end series
        tooltip: {
            headerFormat: "",
            pointFormat: "Personas que realizan la actividad lúdica <b>{point.name}</b> es <b>{point.value}"
        }
    }) //end Highcharts.chart
}