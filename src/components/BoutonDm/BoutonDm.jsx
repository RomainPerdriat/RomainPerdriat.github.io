import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './boutonDm.scss';
import { Button } from '@mui/material';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

const Bouton_DM = ({className, ...rest}) => {
   return (
        <Button variant="contained" color="success">
              DarkMode
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

