import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pres.scss';

const Pres = ({className, ...rest}) => {
   return (
       <div
            className={classnames('pres', className)}
            {...rest}
         >
            Présentation
        </div>
   );
};

Pres.propTypes = {
    className: PropTypes.string,
};
Pres.defaultProps = {
    className: '',
};
export default React.memo(Pres);
