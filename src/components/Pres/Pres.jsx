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
         >        
          {(state ? <Avatar 
                        alt="ma 2nde photo de profil"
                        src="profilplage.jpeg"                        
                        sx={{ width: 200, height: 200 }} />
                : <Avatar 
                alt="ma photo de profil"
                src="profil_cv.jpg"
                sx={{ width: 200, height: 200 }} />) }             
            <p className ="p1" >
                Bonjour!  </p>              
                <p>Je suis actuellement en formation Développeur FullStack chez <strong>O'clock</strong>.</p>
                <p>L'équipe dont je fais partie vient de commencer son  projet de fin de formation, c'est parti pour <strong>un mois de dèv en équipe</strong>.
                Au programme? Refaire en entier le site d'une association finistèrienne!</p>
            
                <p>A bientôt</p>

                <p>Ps: Cette pâge est encore en cours de construction, les éléments manquants seront ajoutés sous peu.
                Ce site utilise <strong>React</strong>, <strong>Material-UI</strong> et <strong>Sémantic-UI</strong></p>
                <p> Bonne visite
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
