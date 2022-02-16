import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './buttonHeader.scss';
import { Button } from '@mui/material';

const ButtonHeader = ({className, ...rest}) => {
   return (
    <Button variant="contained" color="success"> ButtonContent
    </Button>

  
   );
};

ButtonHeader.propTypes = {
    className: PropTypes.string,
};
ButtonHeader.defaultProps = {
    className: '',
};
export default React.memo(ButtonHeader);
