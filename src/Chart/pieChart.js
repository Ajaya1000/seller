const pieOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        bottom:0,
        data: ['Shipping', 'to be delivered', 'Successful transaction', 'Refunding']
    },
    series: [
        {
            name: 'Order Summary',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Shipping'},
                {value: 310, name: 'to be delivered'},
                {value: 234, name: 'Successful transaction'},
                {value: 135, name: 'Refunding'}
                
            ]
        }
    ]
};
export default pieOption;