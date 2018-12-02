import * as React from 'react';
import { observer } from 'mobx-react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Card, CardBody } from 'reactstrap';

// import { Collection } from 'firestorter';
import EPanel from '../../components/panel';
import LoaderInCard from '../../components/Loader';
import { ICRUDClassStore } from '../../stores';
import ETable from '../table';

interface IItemsState {
    page: number;
    perPage: number;
    modals: {
        edit: boolean;
        create: boolean;
    };
}

interface IProps {
    CRUDStoreChild: ICRUDClassStore;
    columns: any[];
    ItemForm: any;
    noAdd?: boolean;
}

@observer
class CRUDTable extends React.Component<IProps, IItemsState> {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.createItem = this.createItem.bind(this);
        this.closeModals = this.closeModals.bind(this);
        this.state = {
            modals: {
                create: false,
                edit: false,
            },
            page: 1,
            perPage: 12,
        };

        // this.props.CRUDStore.initCreateForm(formFields);

    }

    public createItem() {
        this.toggleModal('create', true);
    }

    public render() {
        const { columns, CRUDStoreChild, ItemForm, noAdd } = this.props;
        const {items, pendingItems} = CRUDStoreChild.itemsState;

        const toggleModalEdit = () => this.toggleModal('edit');
        const toggleModalCreate = () => this.toggleModal('create');

        const pagination = {
            onPageChange: this.handlePageChange,
            page: this.state.page,
            sizePerPage: this.state.perPage,
        };

        const enhancedColumns = columns.slice();
        enhancedColumns.push({
            classes: 'text-center align-middle',
            dataField: 'docId',
            formatter: (cell, row, index) => {
                return (
                    <div className="btn-group align-top">
                        <Button
                            size="sm"
                            color="secondary"
                            outline={true}
                            className="badge"
                            onClick={this.editItem(row)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="sm"
                            color="secondary"
                            outline={true}
                            className="badge"
                            onClick={this.deleteItem(cell)}
                        >
                            <i className="fa fa-trash" />
                        </Button>
                    </div>
                );
            },
            text: 'Actions',
        });

        const table = (
            <Row className="flex-lg-nowrap">
                <Col className="mb-3">
                    <EPanel title="Items" subtitle="Be a wise leader">
                        <ETable
                            className="table-lg mt-3"
                            keyField="docId"
                            data={items}
                            columns={enhancedColumns}
                            pagination={pagination}
                            isDataLoading={pendingItems}
                        />
                    </EPanel>
                    <Modal isOpen={this.state.modals.create} toggle={toggleModalCreate} size="lg">
                        <ModalHeader toggle={toggleModalCreate}>Create Item</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <ItemForm onFormValid={this.onCreateFormValid} />
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.modals.edit} toggle={toggleModalEdit} size="lg">
                        <ModalHeader toggle={toggleModalEdit}>Edit Item</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <ItemForm onFormValid={this.onUpdateFormValid} data={CRUDStoreChild.selectedItemData} />
                            </div>
                        </ModalBody>
                    </Modal>
                </Col>
            </Row>
        );

        const addBtn = noAdd ? null : <Button color="primary" className="mr-2" onClick={this.createItem}>Add</Button>;

        return (
            <>
                <Row className="mb-3">
                    <Col>
                        <Card>
                            <CardBody>
                                {addBtn}
                                <Button color="success" onClick={CRUDStoreChild.refreshItems}>Refresh</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {items === null ? <LoaderInCard /> : table}
            </>
        );
    }

    public closeModals() {
        this.setState({
            modals: {
                create: false,
                edit: false,
            },
        });
    }

    public deleteItem = (itemId) => {
        return () => this.props.CRUDStoreChild.deleteItem(itemId);
    }

    private handlePageChange(page, perPage) {
        if (page !== this.state.page || perPage !== this.state.perPage) {
            this.setState({
                page,
                perPage,
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

    private editItem = (item) => {
        return () => {
            this.props.CRUDStoreChild.setSelectedItemData(item);
            this.toggleModal('edit', true);
        };
    }

    private onCreateFormValid = (form) => {
        if (this.props.noAdd) {
            return;
        }
        this.closeModals();
        this.props.CRUDStoreChild.createItem(form.values());
    }

    private onUpdateFormValid = (form) => {
        this.closeModals();
        this.props.CRUDStoreChild.updateItem(form.values());
    }

}

export default CRUDTable;
