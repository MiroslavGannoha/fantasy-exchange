import * as React from 'react';
import {
    Input,
    FormFeedback,
    FormText,
    InputProps,
} from 'reactstrap';
import { observer } from 'mobx-react';

interface Iprops extends InputProps {
    field: any;
    formText?: string;
    validMessage?: string;
}

@observer
export class CustomInputGroup extends React.Component<Iprops> {
    public render() {
        const { field, formText, validMessage, ...restProps } = this.props;
        const fieldBind = field.bind();

        return (
            <>
                <Input
                    {...fieldBind}
                    invalid={!!field.error}
                    valid={validMessage && field.isValid}
                    {...restProps}
                />
                <FormText color="muted">{formText}</FormText>
                <FormFeedback valid={false}>{field.error}</FormFeedback>
                <FormFeedback valid={true}>{validMessage}</FormFeedback>
            </>
        );
    }
}
