import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Col, Row, Button } from 'reactstrap';
import MobxReactForm from 'mobx-react-form';
import { MobxForm } from '../../../stores/utils';
import { formFields } from './formFields';
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
        } else {
            this.form.$('nickname').observe(({form, field, change}) => {
                this.form.$('id').set(change.newValue.replace(/[^\w\s]/gi, ''));
            });
        }
    }

    public render() {
        const form = this.form;
        return (
            <Form onSubmit={form.onSubmit}>
                <CustomFormGroup field={form.$('name')} />
                <CustomFormGroup field={form.$('nickname')} />
                <CustomFormGroup field={form.$('id')} />
                <CustomFormGroup field={form.$('steamId')} />
                <CustomFormGroup field={form.$('playerRole')} />
                <CustomFormGroup field={form.$('countryCode')} />
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
