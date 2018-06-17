import * as React from 'react';
import { Chart as ChartJS } from 'chart.js';
import { defaults } from './options';

type Chart = 'bar' | 'line' | 'doughnut' | 'pie' | 'horizontalBar' | 'radar' | 'polar' | 'bubble' | 'scatter';
interface IEChartProps {
    type: Chart;
    height?: number;
    width?: number;
    data?: any;
    options?: any;
}
// ChartJS.defaults.global
class EChart extends React.Component<IEChartProps, {}> {
    public canvasElem: any = null;
    private chart: any = null;
    constructor(props) {
        super(props);
        this.refCallback = this.refCallback.bind(this);
    }

    public componentDidMount() {
        this.createChart(this.props);
    }

    public componentWillReceiveProps(nextProps) {
        if (!this.chart) { return; }
        this.chart.destroy();
        this.createChart(nextProps);
    }

    public componentWillUnmount() {
        this.chart.destroy();
    }

    public render() {
        const { type, data, options, height, width, ...attributes } = this.props;
        return (
            <div {...attributes}>
                <canvas ref={this.refCallback} height={height} width={width} />
            </div>
        );
    }

    public refCallback(element) {
        this.canvasElem = element;
    }

    private createChart(props) {
        const options = props.options || ChartJS.defaults.global;
        const canvas: any = this.canvasElem;
        // if (!canvas) { return; }
        this.chart = new ChartJS(canvas.getContext('2d'), {
            data: props.data,
            options: { ...defaults, ...options },
            type: props.type,
        });
    }
}

export default EChart;
