import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IStores, UsersStore } from '../../../stores';
import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import EditForm from '../Form';
import Select from 'react-select';
import { accessLevelsList, AccessLevel } from '../../../constants';
import { setAccessLevel } from '../../../api/users';

interface IProps {
    usersStore?: UsersStore;
    closeModal: () => void;
}

interface IState {
    selectedLevel: AccessLevel;
}

@inject(({ usersStore }: IStores) => ({ usersStore }))
@observer
class EditUser extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedLevel: this.props.usersStore.selectedItemData.customClaims.accessLevel,
        };

        this.setAccessLevel = this.setAccessLevel.bind(this);
        this.onLevelChange = this.onLevelChange.bind(this);
    }

    public render() {
        const { usersStore: { updateForm } } = this.props;
        return (
            <Row>
                <Col>
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle>
                                Personal data
                            </CardTitle>
                            <EditForm form={updateForm} />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                Access level
                            </CardTitle>
                            <Select
                                value={this.state.selectedLevel}
                                onChange={this.onLevelChange}
                                options={accessLevelsList}
                                simpleValue={true}
                                className="mb-3"
                            />
                            <Button color="primary" onClick={this.setAccessLevel}>
                                Set access level
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }

    private setAccessLevel() {
        this.props.closeModal();
        setAccessLevel(this.props.usersStore.selectedItemData.uid, this.state.selectedLevel);
    }

    private onLevelChange(value) {
        console.log(value);
        this.setState({ selectedLevel: value });
    }
}

export default EditUser;
