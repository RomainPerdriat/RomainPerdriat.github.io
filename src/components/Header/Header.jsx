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
     ...rest
    }) => {
        
        const titleButtons = buttons.articles
        console.log(titleButtons)
    
   return (
       <nav
            className={classnames('header', className)}
            {...rest}
         >
        <Box sx={{ boxShadow: 7 }}>
            <ButtonDm className = "header-button" >Darkmode</ButtonDm>
        </Box>
        {titleButtons.map((button) => (
            <ButtonHeader
              key={button.id}
              name={button.title}
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
