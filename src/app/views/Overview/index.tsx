import * as React from 'react';
import EPanel from '../../components/panel';
import EMetric from '../../components/metric';
import AreaChart from './charts/AreaChart';
import BarHorizontalChart from './charts/BarHorizontalChart';
import AreaSharpChart from './charts/AreaSharpChart';
import DonutChart from './charts/DonutChart';
import BasicTable from '../../components/table/examples/BasicTable';
import { Row, Col } from 'reactstrap';

class Overview extends React.Component {
    public render() {
        return (
            <>
                <Row className="flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-9 col-xl-10 mb-3">
                        <EPanel title="Area Chart" subtitle="Visual Data">
                            <AreaChart className="mt-3" height={190} />
                        </EPanel>
                    </div>
                    <div className="col-12 col-lg-3 col-xl-2">
                        <div className="row">
                            <Col lg={12}>
                                <EMetric className="mb-3" title="Users" value="3,200" icon="fa-user" />
                            </Col>
                            <div className="col col-lg-12">
                                <EMetric className="mb-3" title="Tickets" value="1,300" icon="fa-tag" />
                            </div>
                            <div className="col col-lg-12">
                                <EMetric className="mb-3" title="Income" value="8,400" icon="fa-usd" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col col-sm-6 col-xl-4 mb-3">
                        <EPanel title="Horizontal Bar" subtitle="">
                            <BarHorizontalChart className="mt-3" height={200} />
                        </EPanel>
                    </div>
                    <div className="col col-sm-6 col-xl-4 mb-3">
                        <EPanel title="Line Chart" subtitle="">
                            <AreaSharpChart className="mt-3" height={200} />
                        </EPanel>
                    </div>
                    <div className="col col-sm-12 col-xl-4 mb-3">
                        <EPanel title="Donut Chart" subtitle="">
                            <DonutChart className="mt-3" height={200} />
                        </EPanel>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-12 mb-3">
                        <BasicTable />
                    </div>
                </Row>
            </>
        );
    }
}

export default Overview;
