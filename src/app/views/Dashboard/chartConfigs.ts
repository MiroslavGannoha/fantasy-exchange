export const brandPrimary = '#36a9e1';
export const brandSuccess = '#4dbd74';
export const brandInfo = '#67c2ef';
export const brandWarning = '#f8cb00';
export const brandDanger = '#f86c6b';

// Card Chart 1
export const cardChartData1 = {
    datasets: [
        {
            backgroundColor: brandPrimary,
            borderColor: 'rgba(255,255,255,.55)',
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'My First dataset',
        },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

export const cardChartOpts1 = {
    elements: {
        line: {
            borderWidth: 1,
        },
        point: {
            hitRadius: 10,
            hoverRadius: 4,
            radius: 4,
        },
    },
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent',
            },
            ticks: {
                fontColor: 'transparent',
                fontSize: 2,
            },

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
                min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
            },
        }],
    },
};

// Card Chart 2
export const cardChartData2 = {
    datasets: [
        {
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
            label: 'My First dataset',
        },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

export const cardChartOpts2 = {
    elements: {
        line: {
            borderWidth: 1,
            tension: 0.00001,
        },
        point: {
            hitRadius: 10,
            hoverRadius: 4,
            radius: 4,
        },
    },
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent',
            },
            ticks: {
                fontColor: 'transparent',
                fontSize: 2,
            },

        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
            },
        }],
    },
};

// Card Chart 3
export const cardChartData3 = {
    datasets: [
        {
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'My First dataset',
        },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

export const cardChartOpts3 = {
    elements: {
        line: {
            borderWidth: 2,
        },
        point: {
            hitRadius: 10,
            hoverRadius: 4,
            radius: 0,
        },
    },
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: false,
        }],
        yAxes: [{
            display: false,
        }],
    },
};

// Card Chart 4
export const cardChartData4 = {
    datasets: [
        {
            backgroundColor: 'rgba(255,255,255,.3)',
            borderColor: 'transparent',
            data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
            label: 'My First dataset',
        },
    ],
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
};

export const cardChartOpts4 = {
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            barPercentage: 0.6,
            display: false,
        }],
        yAxes: [{
            display: false,
        }],
    },
};
