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

class BarHorizontalChart extends React.Component<IAreaSharpChartProps, IAreaSharpChartState> {
    private options: any;
    constructor(props) {
        super(props);
        this.options = {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
                yAxes: [
                    {
                        barPercentage: 0.8,
                        categoryPercentage: 0.6,
                    },
                ],
            },
        };
        this.state = {
            data: {
                datasets: [
                    {
                        backgroundColor: colors.green.string(),
                        data: [35, 25, 40, 20],
                        label: 'One',
                    },
                    {
                        backgroundColor: colors.blue.string(),
                        data: [40, 15, 35, 30],
                        label: 'Two',
                    },
                ],
                labels: ['Vue', 'Angular', 'React', 'Ember'],
            },
        };
    }

    public render() {
        return (
            <EChart type="horizontalBar" data={this.state.data} options={this.options} {...this.props} />
        );
    }
}

export default BarHorizontalChart;
