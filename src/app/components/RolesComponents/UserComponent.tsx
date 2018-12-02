import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import { IStores, AuthStore, IAppStore } from '../../stores';
import { pages } from '../../../app';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
} from 'reactstrap';
import LoaderInCard from '../../components/Loader';

interface IProps {
    store: IAppStore;
    authStore: AuthStore;
    children: any;
}

@inject(({authStore, store}: IStores) => ({authStore, store}))
@observer
export class UserComponent extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        let { children: ChildComponent } = this.props;

        if (!this.props.authStore.isLoggedIn) {
            ChildComponent = this.props.authStore.userLoading ?
                <LoaderInCard loading={this.props.authStore.userLoading} size={8} />
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
                                <Link className="nav-link" view={pages.overview} store={this.props.store}>
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
