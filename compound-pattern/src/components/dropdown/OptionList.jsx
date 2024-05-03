/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/3/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';

function OptionList({children}) {
    return (
        <>
            <div>{children}</div>
        </>
    );
}

OptionList.propTypes = {};
OptionList.defaultProps = {};

export default OptionList;