(function () {
    let myChart = echarts.init(document.querySelector('.bar .chart'));
    let option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
                // type: 'line'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {  // 刻度颜色
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 10,
                    interval: 0  // 每隔几个柱子显示刻度提示
                    // 如果遇到底部刻度提示显示不全的情况，将 fontSize 缩小，interval 设置为0
                },
                axisLine: {
                    show: false  // 不显示 x 坐标轴
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {  // 刻度颜色
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                axisLine: {
                    show: true,  // 显示 y 坐标轴
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],  // --Ajax
                itemStyle: {
                    barBorderRadius: [5, 5, 0, 0],  //（顺时针左上，右上，右下，左下）
                }
            }
        ]
    };
    myChart.setOption(option);
})()