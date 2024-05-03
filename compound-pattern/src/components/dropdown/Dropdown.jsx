/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/3/24
 * 내용 :
 */

import React from 'react';
import CurrentOption from "./CurrentOption";
import OptionList from "./OptionList";
import OptionItem from "./OptionItem";


function Dropdown({children}) {
    return (
        <>
            <div>{children}</div>
        </>
    );
}

Dropdown.CurrentOption = CurrentOption;
Dropdown.OptionList = OptionList;
Dropdown.OptionItem = OptionItem;


export default Dropdown;