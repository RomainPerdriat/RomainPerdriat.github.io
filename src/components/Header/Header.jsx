import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import ButtonDm from '../BoutonDm/BoutonDm';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = ({
    className,
    buttons,
    to,
    handleButtonClick,
     ...rest
    }) => {
        const titleAndWayButtons = buttons.articles  
        
   return (
    <nav
              className={classnames('header', className)}
            {...rest}
         >
         
        <Box sx={{ boxShadow: 7 }}>
            <ButtonDm  handleButtonClick = {handleButtonClick} >Darkmode</ButtonDm>
        </Box>
        {titleAndWayButtons.map((button) => (
            <NavLink
                key={button.id} 
                to={button.to}>
                <ButtonHeader name = {button.title}/>
            </NavLink>
              ))
            }  
        
        </nav>
  

   );
};

Header.propTypes = {
    className: PropTypes.string,
    buttons : PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }))
};
Header.defaultProps = {
    className: '',
};
export default React.memo(Header);
