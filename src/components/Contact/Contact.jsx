import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import datas from '../../Datas/datasCard';
import { Avatar } from '@mui/material';
import{ Typography} from '@mui/material';


const Contact = ({className, ...rest}) => {
    const cards= datas.cards;
    console.log(`Ensemble des cartes`,cards)
   return (
       
        <footer className= "contact"   
            >
             
                    <Typography sx ={{fontSize:'16px', pt:'1.8em', pb : '2em'}}> Téléphone: 06.99.02.24.27</Typography>
                    <Typography sx ={{fontSize:'16px' ,pt:'1.8em', pb : '2em'}}> Email : romainperdriat@yahoo.fr</Typography>
                    <Typography sx ={{pt:'1em', pb : '2em'}}>  <a href = "https://www.linkedin.com/in/romainperdriat/"> <Avatar 
                        alt="LinkedIn Logo"
                        src="LinkedIn.png"                        
                        sx={{ width: 40, height: 40 }} /> </a>
                    </Typography>
                    <Typography sx ={{pt:'1em', pb : '2em'}}>  <a href = "https://github.com/RomainPerdriat"> <Avatar 
                        alt="LinkedIn Logo"
                        src="GitHub.png"                        
                        sx={{ width: 40, height:40 }} />
                        </a>
                    </Typography>
                     
            </footer>
       
   );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);
