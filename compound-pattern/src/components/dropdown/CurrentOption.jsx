/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/3/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';

function CurrentOption({placeholder, value}) {
        return (
        <>
            <div>{value || placeholder}</div>
        </>
    );
}

CurrentOption.propTypes = {};
CurrentOption.defaultProps = {};

export default CurrentOption;