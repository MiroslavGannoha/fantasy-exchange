import * as React from 'react';
import { inject, observer } from 'mobx-react';
import * as moment from 'moment';

// import { Collection } from 'firestorter';
import ItemForm from './ItemForm';
import { IStores, UsersStore } from '../../stores';
import CRUDTable from '../../components/CRUDTable';

interface IProps {
    usersStore: UsersStore;
}

@inject(({ usersStore }: IStores) => ({ usersStore }))
@observer
class Users extends React.Component<IProps> {

    public render() {
        const columns = [
            {
                classes: 'align-middle text-center',
                dataField: 'photo',
                formatter: (cell, row, index) => (
                    <div
                        className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                        style={{ width: '35px', height: '35px', borderRadius: '3px' }}
                    >
                        <i className="fa fa-fw fa-photo" style={{ opacity: 0.8 }} />
                    </div>
                ),
                text: 'Photo',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'username',
                headerClasses: 'max-width',
                text: 'Name',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'email',
                headerClasses: 'max-width',
                text: 'Email',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'accessLevel',
                headerClasses: 'max-width',
                formatter: (accessLevel) => accessLevel,
                text: 'Access level',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'creationTime',
                formatter: (creationTime) => (
                    <span>{moment(creationTime).format('DD MMM YYYY')}</span>
                ),
                sort: true,
                text: 'Date',
            },
        ];

        const {usersStore} = this.props;

        return (
            <CRUDTable
                CRUDStoreChild={usersStore}
                columns={columns}
                ItemForm={ItemForm}
                noAdd={true}
            />
        );
    }
}

export default Users;
