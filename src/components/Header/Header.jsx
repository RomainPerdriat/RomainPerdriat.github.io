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
     ...rest
    }) => {
        
        const titleAndWayButtons = buttons.articles
        console.log(`YOUHOU`,titleAndWayButtons)
        console.log(`YOUHOU`,buttons)
    
   return (
       <nav
            className={classnames('header', className)}
            {...rest}
         >
        <Box sx={{ boxShadow: 7 }}>
            <ButtonDm className = "header-button" >Darkmode</ButtonDm>
        </Box>
        {titleAndWayButtons.map((button) => (
            <ButtonHeader
              key={button.id}
              name={button.title}
              to={button.to}
              />))
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
