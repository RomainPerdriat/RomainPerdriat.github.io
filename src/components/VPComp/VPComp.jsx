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
            <h1>Vies Pro et compétences</h1>
            <p>
            
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p> 
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
