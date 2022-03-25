import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './experiences.scss';
import { Box, Typography } from '@mui/material';

const Experiences = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('experiences', className)}
            {...rest}
         >
             <h2>Expérience</h2>
                <strong>O'clock</strong>
             
                   <Typography sx= {{ fontSize : '17px'}}> Refonte d'un site Web au sein d'une équipe de 5 Développeurs pendant 4 semaines: </Typography> 
                   <Typography sx= {{ fontSize : '15px'}}>Définition du besoin client</Typography> 
                   <Typography sx= {{ fontSize : '15px'}}>Analyse et wireframes</Typography> 
                   <Typography  sx= {{ fontSize : '15px'}}> Gestion de l'authentification</Typography> 
                   <Typography sx= {{ fontSize : '15px'}}> Développement from scratch</Typography> 
                  <Typography  sx= {{ fontSize : '15px'}}> Utilisation de material UI </Typography>      
        </Box>
   );
};

Experiences.propTypes = {
    className: PropTypes.string,
};
Experiences.defaultProps = {
    className: '',
};
export default React.memo(Experiences);
