/**
 * 제작 : HanSeungHyeon
 * 날짜 : 5/2/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';
import CheckboxContext from "../contexts/checkboxContext";

// useCheckboxContext 커스텀 훅을 정의합니다.
function useCheckboxContext()  {
    const context = React.useContext(CheckboxContext);
    return context;
};

useCheckboxContext.propTypes = {};
useCheckboxContext.defaultProps = {};

export default useCheckboxContext;