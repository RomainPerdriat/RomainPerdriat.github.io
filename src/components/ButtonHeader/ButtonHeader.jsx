import React from 'react';
import PropTypes from 'prop-types';
import './buttonHeader.scss';




const ButtonHeader = ({
    className,
    name,
    to,
    ...rest   
    }) => {
   return (
   
   <button class="ui teal button">{name}</button>
   
         
   );
};

ButtonHeader.propTypes = {
    className: PropTypes.string,
    name : PropTypes.string.isRequired
};
ButtonHeader.defaultProps = {
    className: '',
};
export default React.memo(ButtonHeader);
