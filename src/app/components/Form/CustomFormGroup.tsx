import * as React from 'react';
import {
    Label,
    FormGroup,
    Col,
    InputProps,
} from 'reactstrap';
import { CustomInputGroup } from './CustomInputGroup';
import { observer } from 'mobx-react';

interface Iprops extends InputProps {
    field: any;
    formText?: string;
    horizontal?: boolean;
}

@observer
export class CustomFormGroup extends React.Component<Iprops> {
    public render() {
        const { horizontal, field, ...inputGroupProps } = this.props;
        const fieldBind = field.bind();

        const label = <Label htmlFor={field.name}>{fieldBind.label}</Label>;
        const inputElements = <CustomInputGroup field={field} {...inputGroupProps} placeholder={fieldBind.label} />;

        let formGroup: React.ReactFragment = null;
        if (horizontal) {
            formGroup = (
                <FormGroup row={true}>
                    <Col md="3">
                        {label}
                    </Col>
                    <Col xs="12" md="9">
                        {inputElements}
                    </Col>
                </FormGroup>
            );
        } else {
            formGroup = (
                <FormGroup>
                    {label}
                    {inputElements}
                </FormGroup>
            );
        }

        return formGroup;
    }
}
