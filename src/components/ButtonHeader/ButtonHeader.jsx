import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './buttonHeader.scss';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ButtonHeader = ({
    className,
    name,
    to,
    ...rest   
    }) => {
   return (
    <Button 
        variant="contained" color="success"> {name}
        <NavLink to = {to}/>
    </Button>  
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
