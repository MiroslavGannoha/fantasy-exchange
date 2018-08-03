import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Card, CardBody } from 'reactstrap';
import EPanel from '../../components/panel';
import Loader from '../../components/Loader';
import UsersTable from './UsersTable';
import EditUser from './Edit';
import CreateUserForm, {formFields} from './Form';
import { IAppStore, IStores, UsersStore, AuthStore} from '../../stores';

interface IUsersState {
    page: number;
    perPage: number;
    tab: string;
    filters: {
        name: string;
        status: any;
        date: any[];
    };
    modals: {
        edit: boolean;
        create: boolean;
    };
    userToEdit: any;
}

interface IProps {
    usersStore: UsersStore;
    authStore: AuthStore;
    store: IAppStore;
}

@inject(({ usersStore, store, authStore }: IStores) => ({ usersStore, store, authStore }))
@observer
class Users extends React.Component<IProps, IUsersState> {
    constructor(props) {
        super(props);
        console.log('store', this.props.store);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.editUser = this.editUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.closeModals = this.closeModals.bind(this);
        this.state = {
            filters: {
                date: [],
                name: '',
                status: null,
            },
            modals: {
                create: false,
                edit: false,
            },
            page: 1,
            perPage: 12,
            tab: 'all',
            userToEdit: {},
        };

        this.props.usersStore.initCreateForm(formFields);

    }

    public createUser() {
        this.toggleModal('create', true);
    }

    public render() {
        const {usersStore} = this.props;
        const itemsData = usersStore.itemsObservable.current();
        console.log('itemsData', itemsData);

        const toggleModalEdit = () => this.toggleModal('edit');
        const toggleModalCreate = () => this.toggleModal('create');

        const table = (
            <Row className="flex-lg-nowrap">
                <Col className="mb-3">
                    <EPanel title="Users" subtitle="Be a wise leader">
                        <UsersTable
                            items={itemsData}
                            page={this.state.page}
                            perPage={this.state.perPage}
                            onPageChange={this.handlePageChange}
                            onClickEdit={this.editUser}
                        />
                    </EPanel>
                    <Modal isOpen={this.state.modals.edit} toggle={toggleModalEdit} size="lg">
                        <ModalHeader toggle={toggleModalEdit}>Edit User</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <EditUser closeModal={this.closeModals} />
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.modals.create} toggle={toggleModalCreate} size="lg">
                        <ModalHeader toggle={toggleModalCreate}>Create User</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <CreateUserForm form={usersStore.createForm} />
                            </div>
                        </ModalBody>
                    </Modal>
                </Col>
            </Row>
        );

        return (
            <>
                <Row className="mb-3">
                    <Col>
                        <Card>
                            <CardBody>
                                <Button color="success" onClick={usersStore.refreshItems}>Refresh</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {itemsData === null ? <Loader /> : table}
            </>
        );
    }

    public closeModals() {
        this.setState({modals: {
            create: false,
            edit: false,
        }});
    }

    private handlePageChange(page, perPage) {
        if (page !== this.state.page || perPage !== this.state.perPage) {
            this.setState({
                page,
                perPage,
            });
        }
    }

    private handleFilterChange(filter, value) {
        const filterName = String(filter);
        if (this.state.filters.hasOwnProperty(filterName) && value !== this.state.filters[filterName]) {
            this.setState({
                filters: {...this.state.filters, ...{[filterName]: value}},
            });
        }
    }

    private toggleModal(modal, show?) {
        if (this.state.modals.hasOwnProperty(modal)) {
            this.setState({
                modals: {
                    ...{},
                    ...this.state.modals,
                    ...{ [modal]: show !== undefined ? show : !this.state.modals[modal] },
                },
            });
        }
    }

    private editUser(user) {
        this.setState({
            userToEdit: user,
        });
        const { email, displayName, customClaims, uid } = user;
        this.props.usersStore.setSelectedItemData({ email, displayName, customClaims, uid});
        this.props.usersStore.initUpdateForm(formFields);
        this.toggleModal('edit', true);
    }
}

// function searchArray(array, query, fields = []) {
//     if (!array.length || !String(query)) {
//         return array;
//     }
//     return array.filter((item) => {
//         let found = false;
//         for (const key in item) {
//             if (fields.length && fields.indexOf(key) < 0) {
//                 continue;
//             }
//             if (typeof item[key] === 'string' &&
//                 item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
//                 found = true;
//             }
//         }
//         return found;
//     });
// }

export default Users;
