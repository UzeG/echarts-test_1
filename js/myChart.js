// 左上
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
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
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

    window.addEventListener('resize', function () {
        myChart.resize();  // 图表自适应
    })
})();

// 右上
(function () {
    const myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6'];
    let myChart = echarts.init(document.querySelector('.bar2 .chart'));
    let option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [  // 可以是数组形式，即一个 x 对应两个 y
            {
                type: 'category',
                inverse: true,
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                axisLine: {
                    show: false
                },
                axisTick: {  // 不显示刻度
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                }
            },
            {
                inverse: true,
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        series: [  // 数组 两份数据对应了两个 y
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,  // 类似css中的z-index
                itemStyle: {
                    barBorderRadius: 20,
                    // 可以在此修改柱子的颜色
                    // color: 'white'
                    color: function (params) {
                        // console.log(params);
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 9,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 2.5,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();  // 图表自适应
    })
})();

// 左中
(function () {
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    let myChart = echarts.init(document.querySelector('.line .chart'));
    let option = {
        color: ['#00f2f1', '#ed3f35'],  // 修改series中线的颜色
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // 若 series 对象中有 name 属性，则 legend 中不需要写 data
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 四周边框颜色
            containLabel: true // 包含刻度文字在内
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                // stack: 'Total',  // stack 数据叠加
                smooth: true,  // 直线 -> 弧度
                data: yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                // stack: 'Total',
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    };
    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();  // 图表自适应
    })

    // 点击切换数据
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    let yearBtns = document.querySelectorAll('.panel h2 a');
    yearBtns.forEach(element => {
        element.addEventListener('click', e => {
            // console.log(e.target.dataset.year);
            yearData.forEach(element => {
                if (element.year == e.target.dataset.year) {
                    console.log(element.data[1]);
                    option.series[0].data = element.data[0];
                    option.series[1].data = element.data[1];

                    myChart.setOption(option);  // *** 需要重新渲染数据
                }
            });
        })
    });
})();