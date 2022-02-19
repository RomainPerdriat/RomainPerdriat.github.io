import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pres.scss';
import { Avatar } from '@mui/material';




const Pres = ({className,
    state,
     ...rest}) => {
   return (
       
       <div
            className={classnames('pres', className)}
            {...rest}
         >        <h1>Présentation</h1>
          {(state ? <Avatar 
                        alt="ma 2nde photo de profil"
                        src="profilplage.jpeg"                        
                        sx={{ width: 200, height: 200 }} />
                : <Avatar 
                alt="ma photo de profil"
                src="profil_cv.jpg"
                sx={{ width: 200, height: 200 }} />) }             
            <p className = "pres-p">
                Bonjour!
                Je suis actuellement en formation Développeur FullStack chez O'clock.
                L'équipe dont je fais partievient de commencer son  projet de fin de formation, c'est parti pour un mois de dèv en équipe.
                Au programme? refaire en entier le site d'une association finistèrienne!
            
                A bientôt

                Ps: Cette pâge est encore en cours de construction, les éléments manquants seront ajoutées sous peu. Bonne visite
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
