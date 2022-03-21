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
                   <Typography sx= {{p:'0.5em', fontSize : '20px'}}>Projet de fin d'études:</Typography> 
                   <Typography sx= {{ fontSize : '17px'}}> Développement d'une application Web au sein d'une équipe de 5 Développeurs pendant 4 semaines: </Typography> 
                   <Typography sx= {{ fontSize : '16px'}}>Conceptualisation, authentification, partie Front-End de l'utilisateur,... </Typography>      
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
