import * as React from 'react';
import EChart from '../../../components/chart';
import { colors } from '../../../components/chart/options';

interface IAreaChartState {
    data: any;
}

interface IAreaChartProps {
    className?: string;
    height?: number;
}

class AreaChart extends React.Component<IAreaChartProps, IAreaChartState> {
    private options: any;
    constructor(props) {
        super(props);
        this.options = {
            legend: {
                display: false,
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgb(240, 240, 240)',
                            display: true,
                            drawBorder: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            color: 'rgb(240, 240, 240)',
                            display: true,
                            drawTicks: false,
                            zeroLineColor: 'rgb(240, 240, 240)',
                        },
                        ticks: {
                            display: false,
                        },
                    },
                ],
            },
        };
        this.state = {
            data: {
                datasets: [
                    {
                        backgroundColor: colors.green.string(),
                        borderColor: colors.green.alpha(0.9).string(),
                        borderWidth: 2,
                        data: [10, 5, 10, 5, 20, 10, 5, 35, 15, 25, 10, 15],
                        fill: 'start',
                        label: 'Dataset 1',
                        pointRadius: 0,
                    },
                    {
                        backgroundColor: colors.red.string(),
                        borderColor: colors.red.alpha(0.9).string(),
                        borderWidth: 2,
                        data: [20, 35, 35, 25, 75, 40, 85, 10, 45, 15, 25, 10],
                        fill: 'start',
                        label: 'Dataset 3',
                        pointRadius: 0,
                    },
                    {
                        backgroundColor: colors.blue.string(),
                        borderColor: colors.blue.alpha(0.9).string(),
                        borderWidth: 2,
                        data: [30, 80, 50, 60, 35, 10, 0, 5, 20, 40, 70, 40],
                        fill: 'start',
                        label: 'Dataset 2',
                        pointRadius: 0,
                    },
                ],
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
        };
    }

    public render() {
        return (
            <EChart type="line" data={this.state.data} options={this.options} {...this.props} />
        );
    }
}

export default AreaChart;
