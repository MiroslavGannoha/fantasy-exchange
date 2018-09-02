import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { toast } from 'react-toastify';

export class MobxForm extends MobxReactForm {
    constructor(fields, onValid) {
        const options = {
            plugins: { dvr: validatorjs },
            hooks: {
                onSuccess: onValid,
                onError: () => toast.error('Form is invalid'),
            },
        };

        super({ fields }, options);
    }
}
