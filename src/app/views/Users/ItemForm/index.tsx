import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, FormGroup, Col, Label, Row, Button } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/Utils';
import { formFields } from './formFields';
import Select from 'react-select';
import { accessLevelsList } from '../../../constants';

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
                <FormGroup row={true}>
                    <Col sm="6">
                        <Label htmlFor="username">Display name</Label>
                        <Input {...form.$('username').bind()} />
                        <small className="text-danger">{form.$('username').error}</small>
                    </Col>
                    <Col sm="6">
                        <Label htmlFor="email">Email</Label>
                        <Input {...form.$('email').bind()} />
                        <small className="text-danger">{form.$('email').error}</small>
                    </Col>
                </FormGroup>
                <FormGroup row={true}>
                    <Col>
                        <Label htmlFor="accessLevel">Access level</Label>
                        <Select
                            {...form.$('accessLevel').bind()}
                            options={accessLevelsList}
                            simpleValue={true}
                        />
                        <small className="text-danger">{form.$('accessLevel').error}</small>
                    </Col>
                </FormGroup>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Save Changes</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
