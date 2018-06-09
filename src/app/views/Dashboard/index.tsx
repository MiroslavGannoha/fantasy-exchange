import * as React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardBody,
    ButtonGroup,
    ButtonDropdown,
    Progress,
    // Label,
    // Input,
    Table,
} from 'reactstrap';

import {
    cardChartData1,
    cardChartOpts1,
    cardChartData2,
    cardChartOpts2,
    cardChartData3,
    cardChartOpts3,
    cardChartData4,
    cardChartOpts4,
} from './chartConfigs';

import avatarImg1 from '../../../../img/avatars/1.jpg';
import avatarImg2 from '../../../../img/avatars/2.jpg';
import avatarImg3 from '../../../../img/avatars/3.jpg';
import avatarImg4 from '../../../../img/avatars/4.jpg';
import avatarImg5 from '../../../../img/avatars/5.jpg';
import avatarImg6 from '../../../../img/avatars/6.jpg';

export interface IDashboardState {
    card1: boolean;
    card2: boolean;
    card3: boolean;
    card4: boolean;
}

class Dashboard extends React.Component<{}, IDashboardState> {

    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            card1: false,
            card2: false,
            card3: false,
            card4: false,
        };
    }

    public render() {
        const toggleHandler1 = () => {
            this.setState({ card1: !this.state.card1 });
        };

        const toggleHandler2 = () => {
            this.setState({ card2: !this.state.card2 });
        };

        const toggleHandler3 = () => {
            this.setState({ card3: !this.state.card3 });
        };

        const toggleHandler4 = () => {
            this.setState({ card4: !this.state.card4 });
        };

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-primary">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <ButtonDropdown
                                        id="card1"
                                        isOpen={this.state.card1}
                                        toggle={toggleHandler1}
                                    >
                                        <DropdownToggle caret={true} className="p-0" color="transparent">
                                            <i className="icon-settings"/>
                                        </DropdownToggle>
                                        <DropdownMenu right={true}>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled={true}>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                                <h4 className="mb-0">9.823</h4>
                                <p>Members online</p>
                            </CardBody>
                            <div className="chart-wrapper px-3" style={{ height: '70px' }}>
                                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown
                                        id="card2"
                                        isOpen={this.state.card2}
                                        toggle={toggleHandler2}
                                    >
                                        <DropdownToggle className="p-0" color="transparent">
                                            <i className="icon-location-pin"/>
                                        </DropdownToggle>
                                        <DropdownMenu right={true}>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </ButtonGroup>
                                <h4 className="mb-0">9.823</h4>
                                <p>Members online</p>
                            </CardBody>
                            <div className="chart-wrapper px-3" style={{ height: '70px' }}>
                                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-warning">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown
                                        id="card3"
                                        isOpen={this.state.card3}
                                        toggle={toggleHandler3}
                                    >
                                        <DropdownToggle caret={true} className="p-0" color="transparent">
                                            <i className="icon-settings"/>
                                        </DropdownToggle>
                                        <DropdownMenu right={true}>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </ButtonGroup>
                                <h4 className="mb-0">9.823</h4>
                                <p>Members online</p>
                            </CardBody>
                            <div className="chart-wrapper px-0" style={{ height: '70px' }}>
                                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-danger">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <ButtonDropdown
                                        id="card4"
                                        isOpen={this.state.card4}
                                        toggle={toggleHandler4}
                                    >
                                        <DropdownToggle caret={true} className="p-0" color="transparent">
                                            <i className="icon-settings"/>
                                        </DropdownToggle>
                                        <DropdownMenu right={true}>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                                <h4 className="mb-0">9.823</h4>
                                <p>Members online</p>
                            </CardBody>
                            <div className="chart-wrapper px-3" style={{ height: '70px' }}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Traffic {'&'} Sales
                            </CardHeader>
                            <CardBody>
                                <Table hover={true} responsive={true} className="table-outline mb-0 d-none d-sm-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center">
                                                <i className="icon-people"/>
                                            </th>
                                            <th>User</th>
                                            <th className="text-center">Country</th>
                                            <th>Usage</th>
                                            <th className="text-center">Payment Method</th>
                                            <th>Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg1}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-success" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Yiorgos Avraamu</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"/>
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>50%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="success" value="50" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }} />
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>10 sec ago</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg2}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-danger"/>
                                                </div>
                                            </td>
                                            <td>
                                                <div>Avram Tarasios</div>
                                                <div className="small text-muted">
                                                    <span>Recurring</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br" />
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>10%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="info" value="10" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }} />
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>5 minutes ago</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg3}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-warning" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Quintin Ed</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in" />
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>74%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="warning" value="74" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }} />
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>1 hour ago</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg4}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-secondary" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Enéas Kwadwo</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr" />
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>98%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="danger" value="98" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }} />
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>Last month</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg5}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-success" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Agapetus Tadeáš</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es" />
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>22%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="info" value="22" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}/>
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>Last week</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar">
                                                    <img
                                                        src={avatarImg6}
                                                        className="img-avatar"
                                                        alt="admin@bootstrapmaster.com"
                                                    />
                                                    <span className="avatar-status badge-danger" />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Friderik Dávid</div>
                                                <div className="small text-muted">
                                                    <span>New</span> | Registered: Jan 1, 2015
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl" />
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <strong>43%</strong>
                                                    </div>
                                                    <div className="float-right">
                                                        <small className="text-muted">
                                                            Jun 11, 2015 - Jul 10, 2015
                                                        </small>
                                                    </div>
                                                </div>
                                                <Progress className="progress-xs" color="success" value="43" />
                                            </td>
                                            <td className="text-center">
                                                <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }} />
                                            </td>
                                            <td>
                                                <div className="small text-muted">Last login</div>
                                                <strong>Yesterday</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
