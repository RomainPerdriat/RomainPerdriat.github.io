import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import ButtonDm from '../BoutonDm/BoutonDm';
import { Box } from '@mui/material';


const Header = ({className, ...rest}) => {
   return (
       <div
            className={classnames('header', className)}
            {...rest}
         >
        <Box sx={{ boxShadow: 7 }}>
            <ButtonDm className = "header-button" >Darkmode</ButtonDm>
        </Box>
        <Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box>
        <Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box>
        <Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box>
        <Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box>
           
            
           
            
        </div>
   );
};

Header.propTypes = {
    className: PropTypes.string,
};
Header.defaultProps = {
    className: '',
};
export default React.memo(Header);
