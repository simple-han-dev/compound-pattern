import './App.css';
import CheckboxItem from "./components/checkBox/CheckboxItem";
import {useState} from "react";
import CHECK_BOX_LIST from "./constants/checkBox/checkBoxList";
import CheckBoxList from "./components/checkBox/CheckBoxList";

function App() {
    const [isCheckedList, setIsCheckedList] = useState(CHECK_BOX_LIST)
    const [isCheckedList2, setIsCheckedList2] = useState(CHECK_BOX_LIST)

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
                    onChange={() => onChange(isCheckedList,setIsCheckedList, index)}
                >
                    <CheckboxItem.Checkbox style={{accentColor: _item.color}}/>
                    <CheckboxItem.Label style={{color: _item.color}}>{_item.label}</CheckboxItem.Label>
                </CheckboxItem>
            ))}
        </CheckBoxList>
        <CheckBoxList variant="secondary">
            {CHECK_BOX_LIST && CHECK_BOX_LIST.map((_item,index) => (
                <CheckboxItem
                    key={`secondary-${_item.id}`}
                    id={`secondary-checkbox-${_item.id}`}
                    isChecked={_item.isChecked}
                    isDisabled={_item.isDisabled}
                    onChange={() => onChange(isCheckedList2,setIsCheckedList2, index)}
                >
                    <CheckboxItem.Checkbox style={{accentColor: _item.color}}/>
                    <CheckboxItem.Label style={{color: _item.color}}>{_item.label}</CheckboxItem.Label>
                </CheckboxItem>
            ))}
        </CheckBoxList>
    </div>
  );
}

export default App;
