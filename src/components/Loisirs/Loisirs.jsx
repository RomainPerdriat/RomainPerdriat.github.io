import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loisirs.scss';
import ProjetPerso from '../ProjetPerso/ProjetPerso';
import { Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';


const Loisirs = ({className, ...rest}) => {

   const [kitchen, setKitchenOpen] = React.useState(false);
   const [music, setMusicOpen] = React.useState(false);
   const [bd, setBdOpen] = React.useState(false);
   const [garden, setGardenOpen] = React.useState(false);

   const handleKitchenClick = () => {
    setKitchenOpen(!kitchen);
   };
   const handleMusicClick = () => {
      setMusicOpen(!music);
   };
   const handleBdClick = () => {
      setBdOpen(!bd);
   };
   const handleGardenClick = () => {
      setGardenOpen(!garden);
   };
   
 
   return (
    
    <div>
       <div
            className={classnames('loisirs', className)}
            {...rest}
         >
         <h1>Loisirs</h1>
            <Typography sx ={{ fontSize: '16px'}}>
            Je m'intèresse à beaucoup de choses! 
            </Typography>
            <Typography sx ={{ fontSize: '16px'}}>L'apprentissage permanent est vraiment important pour moi, et, de ce fait, le nombre de mes centres d'intérêt fait comme mon âge, il croît.</Typography>
            <Typography sx ={{ fontSize: '16px'}}>En voila certains: </Typography>

            <List sx ={{ fontSize: '16px'}}>       
                  <ListItemButton onClick={handleKitchenClick}>
                     <ListItemIcon>
                        <SoupKitchenIcon fontSize="large" />
                     </ListItemIcon>   
                     <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="La Cuisine" />
                     {kitchen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={kitchen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItemButton >
                              <ListItemText primaryTypographyProps={{fontSize: '16px'}}>J'adore la cuisine Thaï et de façon générale la cuisine épicée. Mais je m'amuse (presque) tout autant à faire de la cuisine traditionnelle.</ListItemText> 
                           </ListItemButton>
                        </List>
                  </Collapse>
               
                  <ListItemButton onClick={handleMusicClick}>
                     <ListItemIcon>
                        <MusicNoteIcon fontSize="large"/>
                     </ListItemIcon>   
                     <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="La Musique" />
                     {music ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={music} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItemButton >
                              <ListItemText primaryTypographyProps={{fontSize: '16px'}}>Je joue de la guitare en tant qu'amateur et j'adore découvrir de nouvelles musiques. J'écoute de tout même si j'ai une préférence pour tout ce qui est flok/accoustic (John Butler, Xavier Rudd,...).</ListItemText> 
                           </ListItemButton>
                        </List>
                  </Collapse>
               
                  <ListItemButton onClick={handleBdClick}>
                        <ListItemIcon>
                           <LibraryBooksIcon fontSize="large"/>
                        </ListItemIcon>   
                        <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="La Bande Dessinée" />
                        {bd? <ExpandLess /> : <ExpandMore />}
                     </ListItemButton>
                  <Collapse in={bd} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItemButton >
                              <ListItemText primaryTypographyProps={{fontSize: '16px'}}>Je lis avec autant de plaisir des BD comme BlackSad que des comics (Un long Halloween notamment). J'ai récemment découvert Mathieu Babblet dans le monde de la SF.</ListItemText> 
                           </ListItemButton>
                        </List>
                  </Collapse>
                 
                  <ListItemButton onClick={handleGardenClick}>
                     <ListItemIcon>
                        <LocalFloristIcon fontSize="large" />
                     </ListItemIcon>   
                     <ListItemText primary="Le Jardinage" primaryTypographyProps={{fontSize: '16px'}} />
                     {garden ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={garden} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItemButton >
                              <ListItemText primaryTypographyProps={{fontSize: '16px'}}>A la maison je m'occupe du potager et également d'un petit coin plus décoratif avec des plants d'ornements.</ListItemText> 
                           </ListItemButton>
                        </List>
                  </Collapse>  
               </List>                
        </div>      
</div>
   );
};

Loisirs.propTypes = {
    className: PropTypes.string,
};
Loisirs.defaultProps = {
    className: '',
};
export default React.memo(Loisirs);
