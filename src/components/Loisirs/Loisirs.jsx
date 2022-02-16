import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loisirs.scss';

const Loisirs = ({className, ...rest}) => {
   return (
       <div
            className={classnames('loisirs', className)}
            {...rest}
         >
            Loisirs
        </div>
   );
};

Loisirs.propTypes = {
    className: PropTypes.string,
};
Loisirs.defaultProps = {
    className: '',
};
export default React.memo(Loisirs);
