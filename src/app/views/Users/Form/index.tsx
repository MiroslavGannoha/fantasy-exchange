import * as React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, FormGroup, Col, Label, Row, Button } from 'reactstrap';

export * from './formFields';

interface IProps {
    form: any;
}

@observer
export default class UsersForm extends React.Component<IProps> {

    public render() {
        const {form} = this.props;
        return (
            <Form >
                <FormGroup row={true}>
                    <Col sm="6">
                        <Label htmlFor="displayName">Display name</Label>
                        <Input {...form.$('displayName').bind()} />
                        <small className="text-danger">{form.$('displayName').error}</small>
                    </Col>
                    <Col sm="6">
                        <Label htmlFor="email">Email</Label>
                        <Input {...form.$('email').bind()} />
                        <small className="text-danger">{form.$('email').error}</small>
                    </Col>
                </FormGroup>

                <Row>
                    <Col  className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Save Changes</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
