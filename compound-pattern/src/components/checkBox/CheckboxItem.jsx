import React from 'react';

// CheckboxContext를 생성합니다.
const CheckboxContext = React.createContext({
    id: '',
    isChecked: false,
    isDisabled: false,
    onChange: () => {
        console.log('onChanged!');
    },
});

// CheckboxContext를 사용하여 Checkbox와 Label을 함께 묶어주는 CheckboxItemPrev 컴포넌트를 생성합니다.
const CheckboxItemPrev = ({children, style, ...rest}) => {
    return (
        // CheckboxContext.Provider를 사용하여 Checkbox와 Label에게 값을 제공합니다.
        <CheckboxContext.Provider value={rest}>
            <div style={style || {border: "1px solid red"}}>
                {children}
            </div>
        </CheckboxContext.Provider>
    );
};

// useCheckboxContext 커스텀 훅을 정의합니다.
const useCheckboxContext = () => {
    // useContext 훅을 사용하여 CheckboxContext의 값을 가져옵니다.
    const context = React.useContext(CheckboxContext);
    return context;
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

// CheckboxItemPrev 컴포넌트에 Checkbox 및 Label 컴포넌트를 추가합니다.
CheckboxItemPrev.Checkbox = Checkbox;
CheckboxItemPrev.Label = Label;

export default CheckboxItemPrev;
