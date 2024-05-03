/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/3/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';

function useDropdownList(props) {
    const [value, setValue] = React.useState(props?.defaultValue || null);

    const onChange = (_value) => {
        if (_value !== value) {
            setValue(_value);
        }
    }

    return [value, onChange];
}

useDropdownList.propTypes = {};
useDropdownList.defaultProps = {};

export default useDropdownList;