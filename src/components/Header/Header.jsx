import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import ButtonHeader from '../ButtonHeader/ButtonHeader';


const Header = ({className, ...rest}) => {
   return (
       <div
            className={classnames('header', className)}
            {...rest}
         >
            HEADER
        </div>
   );
};

Header.propTypes = {
    className: PropTypes.string,
};
Header.defaultProps = {
    className: '',
};
export default React.memo(Header);
