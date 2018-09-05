import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Col, Row, Button, FormGroup, FormFeedback, Label, CustomInput } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/Utils';
import { formFields } from './formFields';
// import Select from 'react-select';
import CustomFormGroup from '../../../components/Form/CustomFormGroup';

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
                    <Label htmlFor="playerId">Player</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                    <FormFeedback valid={false}>{form.$('playerId').error}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="title">Holder</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                    <FormFeedback valid={false}>{form.$('holderId').error}</FormFeedback>
                </FormGroup>
                <CustomFormGroup field={form.$('volume')} />
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
