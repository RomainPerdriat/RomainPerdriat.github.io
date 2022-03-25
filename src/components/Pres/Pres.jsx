import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pres.scss';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';




const Pres = ({className,
    state,
     ...rest}) => {
   return (
       
       <Box
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
            <Typography sx ={{fontSize:'20px', mb:'1em'}} className ="p1" >
                Bonjour!  </Typography>              
               <Typography sx ={{fontSize:'20px'}}>Je m'appelle Romain et j'ai terminé ma formation de développeur FullStack chez O'clock le 18 Mars 2022 \0/.</Typography>
               <Typography sx ={{fontSize:'20px', mt: '1em', mb: '.5em'}} >Lors du dernier mois de formation j'ai participé au sein d'une équipe de 5 développeurs en formation à un projet de fin d'étude ambitieux: la refonte complète du site de l'association Lud'Autisme. Il s'agit d'une association qui prête du matériel adaptée à des particuliers et des professionnels.
               Vous pouvez voir ci dessous la présentation du livrable :  </Typography>
               <Typography >  <a href = "https://youtu.be/0TCe_tGBYFs?t=4201"> <Avatar
                        alt="YouTubeLogo"
                        src="Youtube-Logo-PNG.png"                        
                        sx={{ width: 70, height:70 }} />
                        </a>
                    </Typography>


               <Typography sx ={{fontSize:'20px' , mt: '.5em'}}>Actuellement je suis à la recherche d'un stage d'une durée minimum de deux mois dès le mois de Mai. 
                En parallèle, je prépare mon passage de Titre Professionnel pour la fin du mois
                d'Avril.</Typography>

                
                <Typography sx ={{fontSize:'20px' , mt: '1em'}} >
                Ce site utilise <strong>React</strong> et <strong>Material-UI</strong> 
                </Typography>
                {/* <Typography>N'oubliez pas de tester la 404!</Typography> */}
                <Typography sx ={{fontSize:'20px' , mt: '1em'}}> Bonne visite
            </Typography>            
        </Box>        
        
   );
};

Pres.propTypes = {
    className: PropTypes.string,
};
Pres.defaultProps = {
    className: '',
};
export default React.memo(Pres);
