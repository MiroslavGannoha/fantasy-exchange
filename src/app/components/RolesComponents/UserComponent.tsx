import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import { Stores, AuthStore, AppStore } from '../../stores';
import { pages } from '../../../app';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
} from 'reactstrap';
import Loader from '../../components/Loader';

interface IUserComponentProps {
    children: any;
}

@inject(Stores.AUTH, Stores.APP)
@observer
export class UserComponent extends React.Component<IUserComponentProps> {
    private authStore: AuthStore = this.props[Stores.AUTH];
    private appStore: AppStore = this.props[Stores.APP];
    constructor(props) {
        super(props);
    }

    public render() {
        let { children: ChildComponent } = this.props;

        if (!this.authStore.isLoggedIn) {
            ChildComponent = this.authStore.userLoading ?
                <Loader loading={this.authStore.userLoading} size={8} />
            :
            (
                <Row>
                    <Col md="6">
                        <Card className="text-center">
                            <CardHeader className="bg-warning text-white">
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

        return (
            <>
                {ChildComponent}
            </>
        );
    }
}
