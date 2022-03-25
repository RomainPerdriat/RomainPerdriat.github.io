import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './sqlicon.scss';
import { Box } from '@mui/material';
import sqllog from '../../assets/sql.png'

const Sqlicon = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('sqlicon', className)}
            {...rest}
         >
            <img src = {sqllog} alt = "slq logo"/>
        </Box>
   );
};

Sqlicon.propTypes = {
    className: PropTypes.string,
};
Sqlicon.defaultProps = {
    className: '',
};
export default React.memo(Sqlicon);
