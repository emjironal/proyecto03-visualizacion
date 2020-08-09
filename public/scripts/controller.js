var current_chart

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'solid');

function selectChart(chart)
{
    current_chart = current_chart ? current_chart.destroy() : current_chart
    if(chart == "bubble")
    {
        
    } //end if
    else
    {
        current_chart = sunburstChart();
        getSunburstData($("#chart-select").val(), $("#category").val())
    } //end else
} //end selectChart

function sunburstData(id, parent, name, value = undefined)
{
    var objectSunburstData =
    {
        id: id,
        parent: parent,
        name: name
    }
    if(value)
    {
        objectSunburstData["value"] = value
    } //end if
    return objectSunburstData
} //end sunburstData

function getSunburstData(chart, category)
{
    var params = {tipo: category}
    $.get(`/${chart}/getSunburstInfo`, params, function(data)
    {
        var result = []
        var activityList = Object.entries(data[0])
        result.push(sunburstData('0.0', '', activityList[0][0]))
        data.forEach((activity, i) => 
        {
            var activityList = Object.entries(activity)
            for(var j = 0; j < activityList.length; j++)
            {
                const activityProp = activityList[j]
                if(j == 1)
                {
                    continue
                }
                else if(j)
                {
                    newActivity = sunburstData(`${i + 1}.${j}`, `${i + 1}.0`, activityProp[0], Number(activityProp[1]))
                }
                else
                {
                    newActivity = sunburstData(`${i + 1}.${j}`, '0.0', activityProp[1])
                }
                result.push(newActivity)
            } //end activityList.forEach
        }); //end activities.forEach
        console.log(result);
        current_chart.series[0].setData(result)
    }) //end get
} //end getData

selectChart()