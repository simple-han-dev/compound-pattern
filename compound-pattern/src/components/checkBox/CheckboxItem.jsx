import '../../stylesheets/common/check-box-list.css'
import React from 'react';
import CheckboxContext from "../contexts/checkboxContext";
import useCheckboxContext from "../hooks/useCheckboxContext";

// CheckboxContext를 생성합니다.
// const CheckboxContext = React.createContext({
//     id: '',
//     isChecked: false,
//     isDisabled: false,
//     onChange: () => {
//         console.log('CheckboxContext onChanged!');
//     },
// });
//
// const useCheckboxContext = () => {
//     // useContext 훅을 사용하여 CheckboxContext의 값을 가져옵니다.
//     const context = React.useContext(CheckboxContext);
//     console.log("context: ", CheckboxContext);
//     return context;
// };

// CheckboxContext를 사용하여 Checkbox와 Label을 함께 묶어주는 CheckboxItem 컴포넌트를 생성합니다.
const CheckboxItem = ({children, variant="primary", ...rest}) => {
    return (
        // CheckboxContext.Provider를 사용하여 Checkbox와 Label에게 값을 제공합니다.
        <CheckboxContext.Provider value={rest}>
            <div className={`check-box-list__row ${variant}`}>
                {children}
            </div>
        </CheckboxContext.Provider>
    );
};

// Checkbox 컴포넌트를 정의합니다.
const Checkbox = ({...props}) => {
    // useCheckboxContext를 사용하여 CheckboxContext의 값을 가져옵니다.
    const { id, isChecked, isDisabled, onChange } = useCheckboxContext();

    return (
        // Checkbox의 상태를 표시하는 input 요소를 렌더링합니다.
        <input
            className="check-box-list__input"
            type="checkbox"
            id={id}
            checked={isChecked}
            disabled={isDisabled}
            onChange={onChange}
            {...props}
        />
    );
};

// Label 컴포넌트를 정의합니다.
const Label = ({ children, ...props }) => {
    // useCheckboxContext를 사용하여 CheckboxContext의 값을 가져옵니다.
    const { id } = useCheckboxContext();

    return (
        // Checkbox와 연결된 라벨을 렌더링합니다.
        <label
            className="check-box-list__label"
            htmlFor={id} {...props}>
            {children}
        </label>
    );
};

// CheckboxItem 컴포넌트에 Checkbox 및 Label 컴포넌트를 추가합니다.
CheckboxItem.Checkbox = Checkbox;
CheckboxItem.Label = Label;

export default CheckboxItem;
