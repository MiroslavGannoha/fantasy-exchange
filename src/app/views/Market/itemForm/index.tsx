import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Col, Row, Button } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/Utils';
import { formFields } from './formFields';
// import Select from 'react-select';
import { CustomFormGroup } from '../../../components/Form';

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
                <CustomFormGroup field={form.$('volume')} />
                <CustomFormGroup field={form.$('startingPrice')} />
                <CustomFormGroup field={form.$('playerId')} />
                <CustomFormGroup field={form.$('duration')} />
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
