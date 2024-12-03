function myTable() {  
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
        .then(response => response.json())
        .then(data => {

            var newLength = data.slice(0, 50);
            
            document.getElementById('head').innerHTML = `<h1 class="header text-center">Latest 50 Data</h1>`
            var output = 
                `<tr class="bg-info">
                <th>Row_Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Measurement_Type</th>
                <th>Value</th>
                </tr>`;
            for (i = 0; i < newLength.length; i++) {
                output +=
                `<tr>
                    <td>${i+1}</td>
                    <td>${data[i].date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                    <td>${data[i].date_time.substring(11, 19)}</td>
                    <td>${Object.keys(data[i].data)}</td>
                    <td>${data[i].data[Object.keys(data[i].data)[0]]}</td>
                </tr>`;
            }
            document.getElementById('myTable').innerHTML = output;
        });
}

$(document).ready(function() {
    var __chart = document.getElementById("chartReport");
    var __myChart = echarts.init(__chart);

    var option;
    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
        .then(res => res.json())
        .then((out) => {
            
            $("#heading").text("Temperature latest 20 Table");
            
            let tab =
                `<tr class="bg-info">
                <th>Row_Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Measurement_Type</th>
                <th>Value</th>
                </tr>`;

            // Loop to access all rows 
            let count = 0;
            for (let r of out) {

                count = count + 1;
                if (count <= 20) {
                    tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                    <td>${r.date_time.substring(11, 19)}</td>
                    <td>temperature</td>
                    <td>${r.temperature}</td>
             
              
                    </tr>`;
                    option = {
                        title: {
                            text: "Temperature",
                            subtext: "latest 20 temperature data",
                            left: "center",
                            top: "center",
                            textStyle: {
                                fontSize: 26
                            },
                            subtextStyle: {
                                fontSize: 16
                            }
                        },
                        xAxis: {
                            type: 'category',
                            data: out.map(item => item.date_time.slice(11, 19))
                        },
                        yAxis: {
                            type: 'value'
                        },

                        color: '#2ed573',
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                        series: [{
                            data: out.map(item => item.temperature),
                            type: 'bar'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        __myChart.setOption(option);
                    }
                }
            }
            // Setting innerHTML as tab variable
            document.getElementById("tempTable").innerHTML = tab;

        })
        .catch(err => { throw err });

    $('#list').change(function() {
        var list = $('#list').find(":selected").text();

        if (list == "Now") {

            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature latest 20 Table");
                    
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;
                        if (count <= 20) {
                            tab += `<tr> 
                            <td>${count} </td>
                            <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                            <td>${r.date_time.substring(11, 19)}</td>
                            <td>temperature</td>
                            <td>${r.temperature}</td>
                            </tr>`;
                            option = {
                                title: {
                                    text: "Temperature",
                                    subtext: "latest 20 temperature data",
                                    left: "center",
                                    top: "center",
                                    textStyle: {
                                        fontSize: 26
                                    },
                                    subtextStyle: {
                                        fontSize: 16
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    data: out.map(item => item.date_time.slice(11, 19))
                                        // [r.date_time.slice(11, 19)]
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                label: {
                                    backgroundColor: '#6a7985'
                                },
                                series: [{
                                    data: out.map(item => item.temperature),
                                    type: 'bar'
                                }]
                            };

                            if (option && typeof option === 'object') {
                                __myChart.setOption(option);
                            }

                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });

        } 
        else if (list == "24 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature latest 24 hours");
                    
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;

                        tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                        <td>${r.date_time.substring(11, 19)}</td>
                        <td>temperature</td>
                        <td>${r.temperature}</td>
                        </tr>`;
                        option = {
                            title: {
                                text: "Temperature",
                                subtext: "latest 24 hours temperature data",
                                left: "center",
                                top: "center",
                                textStyle: {
                                    fontSize: 26
                                },
                                subtextStyle: {
                                    fontSize: 16
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: out.map(item => item.date_time.slice(11, 19))
                            },
                            yAxis: {
                                type: 'value',
                                
                            },
                            color: "#1e90ff",
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],

                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            
                           
                            series: [{
                                data: out.map(item => item.temperature),
                                type: 'bar',
                              
                            }]
                        };
                        

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }

                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (list == "48 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature latest 48 hours");
                    
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;
                        tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                        <td>${r.date_time.substring(11, 19)}</td>
                        <td>temperature</td>
                        <td>${r.temperature}</td>
                        </tr>`;
                        option = {
                            title: {
                                text: "Temperature",
                                subtext: "latest 48 hours temperature data",
                                left: "center",
                                top: "center",
                                textStyle: {
                                    fontSize: 26
                                },
                                subtextStyle: {
                                    fontSize: 16
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: out.map(item => item.date_time.slice(11, 19))
                                    // [r.date_time.slice(11, 19)]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            color: "#0abde3",
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],

                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            
                            series: [{
                                data: out.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (list == "72 hours") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature latest 72 hours");
                    
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;
                        tab += `<tr> 
                                <td>${count} </td>
                                <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                                <td>${r.date_time.substring(11, 19)}</td>
                                <td>temperature</td>
                                <td>${r.temperature}</td>
                                </tr>`;
                        option = {
                            title: {
                                text: "Temperature",
                                subtext: "latest 72 hours temperature data",
                                left: "center",
                                top: "center",
                                textStyle: {
                                    fontSize: 26
                                },
                                subtextStyle: {
                                    fontSize: 16
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: out.map(item => item.date_time.slice(11, 19))
                            },
                            yAxis: {
                                type: 'value'
                            },
                            color: "#3742fa",
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],

                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            series: [{
                                data: out.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (list == "Week") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature Latest 1 Week");
                   
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;
                        tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                        <td>${r.date_time.substring(11, 19)}</td>
                        <td>temperature</td>
                        <td>${r.temperature}</td>
                        </tr>`;
                        option = {
                            title: {
                                text: "Temperature",
                                subtext: "latest 1 week temperature data",
                                left: "center",
                                top: "center",
                                textStyle: {
                                    fontSize: 26
                                },
                                subtextStyle: {
                                    fontSize: 16
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: out.map(item => item.date_time.slice(11, 19))
                            },
                            yAxis: {
                                type: 'value'
                            },
                            color: "#0abde3",
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],

                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            series: [{
                                data: out.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });
        } else

        if (list == "Month") {
            fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/730")
                .then(res => res.json())
                .then((out) => {
                     
                    $("#heading").text("Temperature 1 Month");
                    
                    let tab =
                        `<tr class="bg-info">
                        <th>Row_Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Measurement_Type</th>
                        <th>Value</th>
                        </tr>`;

                    // Loop to access all rows 
                    let count = 0;
                    for (let r of out) {

                        count = count + 1;
                        tab += `<tr> 
                        <td>${count} </td>
                        <td>${r.date_time.substring(0, 10).split('-').reverse().join('/')}</td>
                        <td>${r.date_time.substring(11, 19)}</td>
                        <td>temperature</td>
                        <td>${r.temperature}</td>              
                        </tr>`;
                        option = {
                            title: {
                                text: "Temperature",
                                subtext: "latest 1 month temperature data",
                                left: "center",
                                top: "center",
                                textStyle: {
                                    fontSize: 26
                                },
                                subtextStyle: {
                                    fontSize: 16
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: out.map(item => item.date_time.slice(11, 19))
                            },
                            yAxis: {
                                type: 'value'
                            },
                            color: "#7bed9f",
                            
                            tooltip: [{
                                trigger: 'axis'
                            }],

                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            series: [{
                                data: out.map(item => item.temperature),
                                type: 'bar'
                            }]
                        };

                        if (option && typeof option === 'object') {
                            __myChart.setOption(option);
                        }
                    }
                    // Setting innerHTML as tab variable
                    document.getElementById("tempTable").innerHTML = tab;

                })
                .catch(err => { throw err });
        }
    })
})


