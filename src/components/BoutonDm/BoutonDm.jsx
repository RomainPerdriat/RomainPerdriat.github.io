import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './boutonDm.scss';
import { Button } from '@mui/material';
import ButtonHeader from '../ButtonHeader/ButtonHeader';



const Bouton_DM = ({className, ...rest}) => {

    const [isClick, setIsClick] = useState(false);
    console.log('Etat du bouton', isClick);

    const handleClick = () => {
        console.log(`On a cliqué sur le bouton`)
        setIsClick(!isClick)
    }
   return (
        <Button 
            variant="contained" 
            color="success"
            onClick= {handleClick}
            >
            {(!isClick ? 'BeachMode' : 'ForestMode') }
              
       </Button>     
   );
};

Bouton_DM.propTypes = {
    className: PropTypes.string,
};
Bouton_DM.defaultProps = {
    className: '',
};
export default React.memo(Bouton_DM);

