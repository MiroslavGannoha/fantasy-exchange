import * as React from 'react';
import { observer } from 'mobx-react';
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Card, CardBody } from 'reactstrap';

// import { Collection } from 'firestorter';
import EPanel from '../../components/panel';
import LoaderInCard from '../../components/Loader';
import ETable from '../table';
import { useQuery, RootStoreType } from '../../../models';

const {useState} = React;

interface IProps {
    tableName: string;
    columns: any[];
    ItemForm: any;
    noAdd?: boolean;
}

const CRUDTable = observer((props: IProps) => {
    // constructor(props) {
    //     this.createItem = this.createItem.bind(this);
    //     this.closeModals = this.closeModals.bind(this);
    //     this.state = {
    //         modals: {
    //             create: false,
    //             edit: false,
    //         },
    //         page: 1,
    //         perPage: 12,
    //     };

    //     // this.props.CRUDStore.initCreateForm(formFields);
    // }

    // public createItem() {
    //     this.toggleModal('create', true);
    // }
        const { columns, ItemForm } = props;
        const { store, error, loading, data } = useQuery((s: RootStoreType) => s.queryPlayer());
        
        console.log(data, loading);
        const r = useQuery((s) => s.queryPlayer());
        console.log(r);
        const [selectedItem, setSelectedItem] = useState();
        const [editModalShown, toggleEditModal] = useState(false);
        const [createModalShown, toggleCreateModal] = useState(false);
        const [currentPage, setPage] = useState(1);
        const [currentPerPage, setPerPage] = useState(12);

        const editItem = (item) => {
            return () => {
                setSelectedItem(item);
                toggleModalEdit();
                // this.toggleModal('edit', true);
            };
        };

        const handlePageChange = (page, perPage) => {
            if (page !== currentPage) { setPage(page); }
            if (perPage !== currentPerPage) { setPerPage(currentPerPage); }
        };
        const aa =  `
            returning {
                countryCode
                id
                name
                nickname
                playerRole
                steamId
            }
        `;
        const onCreateFormValid = async (form) => {
            const values = form.values();
            console.log(values);
            
            const res = await store.mutateInsert_Player({ objects: values }, aa);
            console.log(res);
            // if (this.props.noAdd) {
            //     return;
            // }
            // this.closeModals();
        };

        const deleteItem = (itemId) => {
            return () => console.log(itemId);
        };

        const onUpdateFormValid = (form) => {
            // this.closeModals();
            // console.log(form.values());
            // this.props.CRUDStoreChild.update(form.values())
                // .then((r) => console.log(r))
                // .catch((err) => console.log(err));
        };

        const refresh = () => {
            const r = store.queryPlayer();
            r.refetch();
            console.log(r);
            // this.props.CRUDStoreChild.getAllResult.ref.refetch();
        };

        const toggleModalEdit = () => toggleEditModal(!editModalShown);
        const toggleModalCreate = () => toggleCreateModal(!createModalShown);

        const pagination = {
            onPageChange: handlePageChange,
            page: currentPage,
            sizePerPage: currentPerPage,
        };

        const enhancedColumns = columns.slice();
        enhancedColumns.push({
            classes: 'text-center align-middle',
            dataField: 'id',
            formatter: (cell, row, index) => {
                return (
                    <div className="btn-group align-top">
                        <Button
                            size="sm"
                            color="secondary"
                            outline={true}
                            className="badge"
                            onClick={editItem(row)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="sm"
                            color="secondary"
                            outline={true}
                            className="badge"
                            onClick={deleteItem(cell)}
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
                            keyField="id"
                            data={loading ? [] : data}
                            columns={enhancedColumns}
                            pagination={pagination}
                            isDataLoading={loading}
                        />
                    </EPanel>
                    <Modal isOpen={createModalShown} toggle={toggleModalCreate} size="lg">
                        <ModalHeader toggle={toggleModalCreate}>Create Item</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <ItemForm onFormValid={onCreateFormValid} />
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={editModalShown} toggle={toggleModalEdit} size="lg">
                        <ModalHeader toggle={toggleModalEdit}>Edit Item</ModalHeader>
                        <ModalBody>
                            <div className="py-1">
                                <ItemForm onFormValid={onUpdateFormValid} data={selectedItem} />
                            </div>
                        </ModalBody>
                    </Modal>
                </Col>
            </Row>
        );

        const addBtn = <Button color="primary" className="mr-2" onClick={toggleModalCreate}>Add</Button>;

        return (
            <>
                <Row className="mb-3">
                    <Col>
                        <Card>
                            <CardBody>
                                {addBtn}
                                <Button color="success" onClick={refresh}>Refresh</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {data === undefined ? <LoaderInCard /> : table}
            </>
        );
});

export default CRUDTable;
