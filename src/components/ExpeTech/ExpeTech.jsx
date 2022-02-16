import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './expeTech.scss';

const ExpeTech = ({className, ...rest}) => {
   return (
       <div
            className={classnames('expeTech', className)}
            {...rest}
         >
            Expérience et technos
        </div>
   );
};

ExpeTech.propTypes = {
    className: PropTypes.string,
};
ExpeTech.defaultProps = {
    className: '',
};
export default React.memo(ExpeTech);
