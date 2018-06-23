import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
} from 'reactstrap';
import { Link } from 'mobx-router';
import { pages } from '../../../app';
import { Stores, AppStore } from '../../../app/stores';

@observer
@inject(Stores.APP)
class NotAvailable extends React.Component {
    private appStore: AppStore = this.props[Stores.APP];
    public render() {
        return (
            <Row>
                <Col md="6">
                    <Card className="text-centerre">
                        <CardHeader>
                            View Not Available
                        </CardHeader>
                        <CardBody className="p-4">
                            <CardTitle>
                                Only for logged in users
                            </CardTitle>
                            <Link className="nav-link" view={pages.overview} store={this.appStore}>
                                Redirect to overview
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default NotAvailable;
