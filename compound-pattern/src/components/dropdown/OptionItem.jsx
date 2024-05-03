/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/3/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';

function OptionItem({label, value, handler}) {
    return (
        <>
            <div onClick={handler}>{label}</div>
        </>
    );
}

OptionItem.propTypes = {};
OptionItem.defaultProps = {};

export default OptionItem;