import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './buttonHeader.scss';

const ButtonHeader = ({className, ...rest}) => {
   return (
       <button
            className={classnames('buttonheader', className)}
            {...rest}
         >
            
        </button>
   );
};

ButtonHeader.propTypes = {
    className: PropTypes.string,
};
ButtonHeader.defaultProps = {
    className: '',
};
export default React.memo(ButtonHeader);
