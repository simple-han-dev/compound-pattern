import React from 'react';

const CheckboxContext = React.createContext({
    id: '',
    isChecked: false,
    isDisabled: false,
    onChange: () => {
        console.log('onChanged!');
    },
});

export default CheckboxContext;
