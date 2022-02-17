import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pres.scss';
import { Avatar } from '@mui/material';
import Contact from '../Contact/Contact';


const Pres = ({className,
    state,
     ...rest}) => {
   return (
       
       <div
            className={classnames('pres', className)}
            {...rest}
         >        <h1>Présentation</h1>
          {(state ? <Avatar 
                        alt="ma photo de profil"
                        src="profil_cv.jpg"
                        sx={{ width: 200, height: 200 }} />
                : <Avatar 
                alt="ma 2nde photo de profil"
                src="profilplage.jpeg"
                sx={{ width: 200, height: 200 }} />) }
 
            
            <p className = "pres-p">
                Bonjour!
                Je suis actuellement en formation Développeur FullStack chez O'clock.
                On commence demain notre projet de fin de formation, c'est parti pour un mois de dèv en équipe.
                A bientôt
            </p>
        </div>        
        
   );
};

Pres.propTypes = {
    className: PropTypes.string,
};
Pres.defaultProps = {
    className: '',
};
export default React.memo(Pres);
