import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, FormGroup, Col, Label, Row, Button } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/Utils';
import { formFields } from './formFields';
// import Select from 'react-select';

export * from './formFields';

interface IProps {
    onFormValid: () => void;
    data?: any;
}

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
        const form = this.form;
        return (
            <Form onSubmit={form.onSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Full Name</Label>
                    <Input {...form.$('name').bind()} />
                    <small className="text-danger">{form.$('name').error}</small>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="nickname">Nickname</Label>
                    <Input {...form.$('nickname').bind()} />
                    <small className="text-danger">{form.$('nickname').error}</small>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="steamId">Steam account id</Label>
                    <Input {...form.$('steamId').bind()} />
                    <small className="text-danger">{form.$('steamId').error}</small>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="playerRole">Player role</Label>
                    <Input {...form.$('playerRole').bind()} />
                    <small className="text-danger">{form.$('playerRole').error}</small>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="countryCode">Country code</Label>
                    <Input {...form.$('countryCode').bind()} />
                    <small className="text-danger">{form.$('countryCode').error}</small>
                </FormGroup>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
