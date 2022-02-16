import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';

const Contact = ({className, ...rest}) => {
   return (
       <div
            className={classnames('contact', className)}
            {...rest}
         >
            Contact
        </div>
   );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);
