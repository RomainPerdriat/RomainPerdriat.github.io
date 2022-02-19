import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './boutonDm.scss';
import { Button } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { grey } from '@mui/material/colors';









const Bouton_DM = ({
    className,
    handleButtonClick,
     ...rest}) => {

          

        

    const [isClick, setIsClick] = useState(false);   

    const handleClick = () => {
        setIsClick(!isClick)
        handleButtonClick(isClick)
    }
   return ((!isClick ?
    <Button      
        onClick= {handleClick}           
        > <BeachAccessIcon className ='beach' sx={{ color: grey[900] }}/>
   </Button>  
   :
   <Button 
        onClick= {handleClick}             
        > <ParkIcon className ='forest' sx={{ color: grey[900] }} />
   </Button>  
)    
   );
};

Bouton_DM.propTypes = {
    className: PropTypes.string,
};
Bouton_DM.defaultProps = {
    className: '',
};
export default React.memo(Bouton_DM);

