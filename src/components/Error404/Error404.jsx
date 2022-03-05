import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './error404.scss';
import Contact from '../Contact/Contact';

const Error404 = ({className, ...rest}) => {
   return (
      
                 
                <img className="ui medium bordered image" className='error404' src="error404.jpg" alt  ="you should not pass!"></img>       
                      
      
   );
};

Error404.propTypes = {
    className: PropTypes.string,
};
Error404.defaultProps = {
    className: '',
};
export default React.memo(Error404);
