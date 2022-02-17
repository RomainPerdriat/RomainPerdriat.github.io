import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import ButtonDm from '../BoutonDm/BoutonDm';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = ({className, ...rest}) => {
   return (
       <nav
            className={classnames('header', className)}
            {...rest}
         >
        <Box sx={{ boxShadow: 7 }}>
            <ButtonDm className = "header-button" >Darkmode</ButtonDm>
        </Box>
        <NavLink to= "/"><Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box></NavLink>
        <NavLink to= "/Formations"><Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box></NavLink>
        <NavLink to= "/Loisirs"><Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box></NavLink>
        <NavLink to= "/VPComp"><Box sx={{ boxShadow: 7 }}><ButtonHeader/></Box></NavLink>
        
       
           
            
           
            
        </nav>
   );
};

Header.propTypes = {
    className: PropTypes.string,
};
Header.defaultProps = {
    className: '',
};
export default React.memo(Header);
