import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { toast } from 'react-toastify';

export class MobxForm extends MobxReactForm {
    constructor(fields, onValid) {
        const options = {
            plugins: { dvr: validatorjs },
            hooks: {
                onSuccess: onValid,
                onError: (form) => {
                    toast.error('Form is invalid');
                    console.log(form.errors());
                },
            },
        };

        super({ fields }, options);
    }
}
