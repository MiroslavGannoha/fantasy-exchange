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

class DonutChart extends React.Component<IAreaSharpChartProps, IAreaSharpChartState> {
    private options: any;
    constructor(props) {
        super(props);
        this.options = {
            legend: {
                labels: {
                    padding: 20,
                    usePointStyle: true,
                },
                position: 'bottom',
            },
        };
        this.state = {
            data: {
                datasets: [
                    {
                        backgroundColor: colors.array(),
                        data: [5, 10, 8],
                        hoverBorderColor: '#fff',
                        label: 'Donut',
                    },
                ],
                labels: ['Mon', 'Tue', 'Wed'],
            },
        };
    }

    public render() {
        return (
            <EChart type="doughnut" data={this.state.data} options={this.options} {...this.props} />
        );
    }
}

export default DonutChart;
