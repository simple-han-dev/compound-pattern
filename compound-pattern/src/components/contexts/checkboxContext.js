import React from 'react';

// CheckboxContext를 생성합니다.
const CheckboxContext = React.createContext({
    id: '',
    isChecked: false,
    isDisabled: false,
    onChange: () => {
        console.log('CheckboxContext onChanged!');
    },
});

export default CheckboxContext;
