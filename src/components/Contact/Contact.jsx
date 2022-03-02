import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import datas from '../../Datas/datasCard';
import { Avatar } from '@mui/material';


const Contact = ({className, ...rest}) => {
    const cards= datas.cards;
    console.log(`Ensemble des cartes`,cards)
   return (
       
        <footer className= "contact"   
            >
             <h2 className= "contact-container"></h2>   
                    <p className = "ptext">Télephone: 06.99.02.24.27</p>
                    <p className = "ptext">Mail : romainperdriat@yahoo.fr</p>
                    <p className = "plogo"> <a href = "https://www.linkedin.com/in/romainperdriat/"> <Avatar 
                        alt="LinkedIn Logo"
                        src="LinkedIn.png"                        
                        sx={{ width: 40, height: 40 }} /> </a>
                    </p>
                    <p className = "plogo"> <a href = "https://github.com/RomainPerdriat"> <Avatar 
                        alt="LinkedIn Logo"
                        src="GitHub.png"                        
                        sx={{ width: 40, height:40 }} />
                        </a>
                    </p>
                     
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
