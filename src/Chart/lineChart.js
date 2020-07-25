import echarts from 'echarts'
const lineOption= {
    backgroundColor:'#7467EF',
    color:'#fff',
    tooltip: {
        trigger: 'axis',
            axisPointer: {
            type: 'cross',
            crossStyle:{
                color:'#fff'
            }
        },

    },
    xAxis: {
        type: 'category',
        data: ['jan', 'feb', 'mar', 'april', 'may', 'jun', 'jul','aug','sep','oct','nov','dec'],
        axisLine: {
            show:false,
            lineStyle: {
                color: "rgba(249, 248, 248, 1)",
                opacity:0
            }
        },
        axisPointer:{
            label:{
                color:'#fff',
                backgroundColor:'rgba(#000,0.1)'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show:false,
            // lineStyle: {
            //     color: "rgba(249, 248, 248, 1)"
            // }
        }
        // axisPointer:{
        //     label:{
        //         color:'#fff',
        //         backgroundColor:'rgba(#000,0.1)'
        //     }
        // }
    },
    series: [{

            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [{
                    offset: 0,
                    color: 'rgba(255, 255, 255,0.5)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 255, 255,0.1)'
                }])
            },
        data: [820, 932, 901, 934, 1290, 1330, 1320,1000,1200,900,1500,700],
        type: 'line',
        smooth: true,
        // label:{
        //     color:'#fff',
        //     backgroundColor:'rgba(#000,0.1)'
        // },
        // lineStyle: {
        //     color: "rgba(249, 248, 248, 1)"
        // }
    }]
};
export default lineOption;