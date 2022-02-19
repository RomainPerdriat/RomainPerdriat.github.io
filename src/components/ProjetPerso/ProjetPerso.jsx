import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './projetPerso.scss';
import { Avatar } from '@mui/material';

const ProjetPerso = ({className, ...rest}) => {
   return (
       <div
            className={classnames('projetPerso', className)}
            {...rest}
         >


         <h1>Projets Perso</h1>
            
            <Avatar 
                alt="travaux en cours"
                src="travaux.jpg"                        
                sx={{ width: 125, height: 125 }}
             />                
        </div>
   );
};

ProjetPerso.propTypes = {
    className: PropTypes.string,
};
ProjetPerso.defaultProps = {
    className: '',
};
export default React.memo(ProjetPerso);
