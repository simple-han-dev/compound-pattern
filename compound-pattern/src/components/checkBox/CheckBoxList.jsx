/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/2/24
 * 내용 : check box list
 */

import React from 'react';
import {COMMON_CHECK_BOX_LIST_STYLE} from "../../stylesheets/common/commonCheckboxStyle";


function CheckBoxListPrev({children, style}) {
    return (
        <div className="check-box-list-wrap" style={style || COMMON_CHECK_BOX_LIST_STYLE}>
            {children}
        </div>
    );
}


export default CheckBoxListPrev;