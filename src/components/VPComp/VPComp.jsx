import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './vPComp.scss';

const VPComp = ({className, ...rest}) => {
   return (
       <div
            className={classnames('vPComp', className)}
            {...rest}
         >
            Vies Pro et compétences 
        </div>
   );
};

VPComp.propTypes = {
    className: PropTypes.string,
};
VPComp.defaultProps = {
    className: '',
};
export default React.memo(VPComp);
