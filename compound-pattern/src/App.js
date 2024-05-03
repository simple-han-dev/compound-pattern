import './App.css';
import CheckboxItem from "./components/checkBox/CheckboxItem";
import {useState} from "react";
import CHECK_BOX_LIST from "./constants/checkBox/checkBoxList";
import CheckBoxList from "./components/checkBox/CheckBoxList";
import Dropdown from "./components/dropdown/Dropdown";
import DROP_DOWN_LIST from "./constants/dropdown/dropdownList";
import useDropdownList from "./components/hooks/useDropdownList";

function App() {
    const [isCheckedList, setIsCheckedList] = useState(CHECK_BOX_LIST)
    const [isCheckedList2, setIsCheckedList2] = useState(CHECK_BOX_LIST)

    const [dropDownValue, setDropDownValue] = useDropdownList();
    const [dropDownValue2, setDropDownValue2] = useDropdownList();

    /**
     * checked toggle
     * @param index {number}
     */
    const onChange = (_prev, _setFunc, index) => {
        const nextIsCheckedList = [..._prev];

        nextIsCheckedList[index].isChecked = !nextIsCheckedList[index].isChecked;

        _setFunc(nextIsCheckedList);
    };

    return (
        <div className="App">
            <div style={{width: "fit-content"}}>
                <p>아래는 같은 context를 공유하게 되는 문제점이 발생</p>
            </div>

            <CheckBoxList>
                {CHECK_BOX_LIST && CHECK_BOX_LIST.map((_item, index) => (
                    <CheckboxItem
                        key={_item.id}
                        id={`checkbox-${_item.id}`}
                        isChecked={_item.isChecked}
                        isDisabled={_item.isDisabled}
                        onChange={() => onChange(isCheckedList, setIsCheckedList, index)}
                    >
                        <CheckboxItem.Checkbox style={{accentColor: _item.color}}/>
                        <CheckboxItem.Label style={{color: _item.color}}>{_item.label}</CheckboxItem.Label>
                    </CheckboxItem>
                ))}
            </CheckBoxList>
            <CheckBoxList variant="secondary">
                {CHECK_BOX_LIST && CHECK_BOX_LIST.map((_item, index) => (
                    <CheckboxItem
                        key={`secondary-${_item.id}`}
                        id={`secondary-checkbox-${_item.id}`}
                        isChecked={_item.isChecked}
                        isDisabled={_item.isDisabled}
                        onChange={() => onChange(isCheckedList2, setIsCheckedList2, index)}
                    >
                        <CheckboxItem.Checkbox style={{accentColor: _item.color}}/>
                        <CheckboxItem.Label style={{color: _item.color}}>{_item.label}</CheckboxItem.Label>
                    </CheckboxItem>
                ))}
            </CheckBoxList>


            <div style={{width: "fit-content"}}>
                <p>아래는 각자 다른 state를 이용한 경우</p>
            </div>

            <Dropdown>
                <Dropdown.CurrentOption placeholder={"선택해주세요"} value={dropDownValue}/>
                <Dropdown.OptionList>
                    {DROP_DOWN_LIST && DROP_DOWN_LIST.map((_item, index) => (
                        <Dropdown.OptionItem key={`drop-down-${index}`} label={_item.label} handler={() => {
                            setDropDownValue(_item.value)
                        }}/>
                    ))}
                </Dropdown.OptionList>
            </Dropdown>

            <Dropdown>
                <Dropdown.CurrentOption placeholder={"각자 값이 달라!"} value={dropDownValue2}/>
                <Dropdown.OptionList>
                    {DROP_DOWN_LIST && DROP_DOWN_LIST.map((_item, index) => (
                        <Dropdown.OptionItem key={`drop-down-${index}`} label={_item.label} handler={() => {
                            setDropDownValue2(_item.value)
                        }}/>
                    ))}
                </Dropdown.OptionList>
            </Dropdown>
        </div>
    );
}

export default App;
