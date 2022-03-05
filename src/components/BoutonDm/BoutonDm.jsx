import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './boutonDm.scss';

const Bouton_DM = ({
    className,
    handleButtonClick,
     ...rest}) => {   
              
    const [isClick, setIsClick] = useState(false);   

    const handleClick = () => {
        setIsClick(!isClick)
        handleButtonClick(isClick)
    }
   return ((!isClick
   ?
    <button class="ui yellow button" onClick= {handleClick}>
        <i class="sun icon"> </i>
    </button>
   :
    <button class="ui teal button" onClick= {handleClick}>
        <i class="tree icon"></i>
    </button>
)    
   );
};

Bouton_DM.propTypes = {
    className: PropTypes.string,
    handleButtonClick: PropTypes.func
};
Bouton_DM.defaultProps = {
    className: '',
};
export default React.memo(Bouton_DM);

