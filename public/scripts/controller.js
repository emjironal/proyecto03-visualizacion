var current_chart

Highcharts.getOptions().colors.splice(0, 1);

function selectChart(chart)
{
    current_chart = current_chart ? current_chart.destroy() : current_chart
    if(chart == "bubble")
    {
        //current_chart = bubbleChart();
        getBubbleData($("#chart-select").val(), $("#category").val())
    } //end if
    else
    {
        // Splice in transparent for the center circle
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

function bubbleData(name, value = undefined, data = undefined)
{
    var objectBubbleData =
    {
        name: name
    }
    if(value)
    {
        objectBubbleData["value"] = value
    } //end if
    if(data)
    {
        objectBubbleData["data"] = data
    }
    return objectBubbleData
} //end bubbleData

function getSunburstData(chart, category)
{
    var params = {tipo: category}
    $.get(`/${chart}/getSunburstInfo`, params, function(data)
    {
        
        var activityList = Object.entries(data[0])
        var result = [sunburstData('0.0', '', activityList[0][0])]
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
                    var value = Number(activityList[1][1]) * (Number(activityProp[1]) / 100)
                    newActivity = sunburstData(`${i + 1}.${j}`, `${i + 1}.0`, activityProp[0], Number(value.toFixed(0)))
                }
                else
                {
                    newActivity = sunburstData(`${i + 1}.${j}`, '0.0', activityProp[1], Number(activityList[1][1]))
                }
                result.push(newActivity)
            } //end activityList.forEach
        }); //end activities.forEach
        current_chart.series[0].setData(result)
    }) //end get
} //end getData

function getBubbleData(chart, category)
{
    console.log(category)
    bubbleChart(bubbledata(category))
    
} //end getData


selectChart()