/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/2/24
 * 내용 : check box list
 */

import React from 'react';

function CheckBoxList({children, variant="primary"}) {
    return (
        <div className={`check-box-list-wrap ${variant}`}>
            {children}
        </div>
    );
}


export default CheckBoxList;