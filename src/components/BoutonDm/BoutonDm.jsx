import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './boutonDm.scss';

const Bouton_DM = ({className, ...rest}) => {
   return (
       <button
            className={classnames('boutonDm', className)}
            {...rest}
         >
            
        </button>
   );
};

Bouton_DM.propTypes = {
    className: PropTypes.string,
};
Bouton_DM.defaultProps = {
    className: '',
};
export default React.memo(Bouton_DM);

