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
}

@observer
export class CustomInputGroup extends React.Component<Iprops> {
    public render() {
        const { field, formText, ...restProps } = this.props;
        const fieldBind = field.bind();
        return (
            <>
                <Input
                    {...fieldBind}
                    value={fieldBind.value === null ? '' : fieldBind.value}
                    invalid={!field.isValid && field.changed}
                    {...restProps}
                />
                <FormText color="muted">{formText}</FormText>
                <FormFeedback valid={false}>{field.error}</FormFeedback>
            </>
        );
    }
}
