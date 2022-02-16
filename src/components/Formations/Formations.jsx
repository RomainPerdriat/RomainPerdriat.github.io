import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './formations.scss';

const Formations = ({className, ...rest}) => {
   return (
       <div
            className={classnames('formations', className)}
            {...rest}
         >
            Formations
        </div>
   );
};

Formations.propTypes = {
    className: PropTypes.string,
};
Formations.defaultProps = {
    className: '',
};
export default React.memo(Formations);
