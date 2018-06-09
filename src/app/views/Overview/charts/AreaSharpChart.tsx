import * as React from 'react';
import EChart from '../../../components/chart';
import { colors } from '../../../components/chart/options';

interface IAreaSharpChartState {
    data: any;
}

interface IAreaSharpChartProps {
    className?: string;
    height?: number;
    ticks?: any;
}

class AreaSharpChart extends React.Component<IAreaSharpChartProps, IAreaSharpChartState> {
    private options: any;
    constructor(props) {
        super(props);
        this.options = {
            elements: {
                line: {
                    tension: 0.000001,
                },
            },
            legend: {
                display: false,
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            display: true,
                        },
                        ticks: {
                            autoSkip: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            display: true,
                            drawTicks: false,
                            zeroLineColor: 'rgba(255, 146, 139, 0.8)',
                        },
                        ticks: {
                            display: this.props.ticks,
                            max: 80,
                            min: -80,
                            padding: 10,
                            stepSize: 40,
                        },
                    },
                ],
            },
            spanGaps: false,
        };
        this.state = {
            data: {
                datasets: [
                    {
                        backgroundColor: colors.red.alpha(0.4).string(),
                        borderColor: colors.red.alpha(0.9).string(),
                        borderWidth: 1,
                        data: [-60, 20, -40, 40, -20, 60],
                        fill: 'origin',
                        label: 'Dataset',
                        pointBackgroundColor: colors.red.alpha(0.9).string(),
                        radius: 0,
                    },
                ],
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
        };
    }

    public render() {
        return (
            <EChart type="line" data={this.state.data} options={this.options} {...this.props} />
        );
    }
}

export default AreaSharpChart;
