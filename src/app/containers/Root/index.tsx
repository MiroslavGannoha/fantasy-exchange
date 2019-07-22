import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export const RootContainer = (props) => (
    <div>
        {props.children}
        <ToastContainer hideProgressBar={true} />
    </div>
);
