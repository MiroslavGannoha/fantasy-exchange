import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Col, Row, Button, FormGroup, FormFeedback, Label, CustomInput, Input } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/Utils';
import { formFields } from './formFields';
// import Select from 'react-select';
import { CustomFormGroup } from '../../../components/Form';
import { IStores, PlayersStore, UsersStore } from '../../../stores';

export * from './formFields';

interface IProps {
    onFormValid: () => void;
    data?: any;
    playersStore?: PlayersStore;
    usersStore?: UsersStore;
}

@inject(({ playersStore, usersStore }: IStores) => ({ playersStore, usersStore }))
@observer
export default class ItemForm extends React.Component<IProps> {
    private form: MobxReactForm = null;

    constructor(props) {
        super(props);
        this.form = new MobxForm(formFields, props.onFormValid);
        if (props.data) {
            this.form.set(props.data);
        }
    }

    public render() {
        const personas = this.props.usersStore.itemsObservable.current();
        const players = this.props.playersStore.itemsObservable.current();
        let personasOptions = [];
        let playersOptions = [];
        if (personas) {
            personasOptions = personas.map(({docId, displayName}) => {
                return <option key={docId} value={docId}>{displayName}</option>;
            });
        }

        if (players) {
            playersOptions = players.map(({ docId, nickname }) => {
                return <option key={docId} value={docId}>{nickname}</option>;
            });
        }

        const form = this.form;
        return (
            <Form onSubmit={form.onSubmit}>
                <FormGroup>
                    <Label htmlFor="playerId">Player</Label>
                    <CustomInput {...form.$('playerId').bind()}>
                        <option value="">Select</option>
                        {playersOptions}
                    </CustomInput>
                    <FormFeedback valid={false}>{form.$('playerId').error}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="holderId">Holder</Label>
                    <CustomInput {...form.$('holderId').bind()}>
                        <option value="">Select</option>
                        {personasOptions}
                    </CustomInput>
                    <FormFeedback valid={false}>{form.$('holderId').error}</FormFeedback>
                </FormGroup>
                <CustomFormGroup field={form.$('volume')} />
                <Input {...form.$('docId').bind()} />
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
