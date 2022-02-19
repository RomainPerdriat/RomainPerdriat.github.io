import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './error404.scss';
import Contact from '../Contact/Contact';

const Error404 = ({className, ...rest}) => {
   return (
      
            <div>     
                <img class="ui medium bordered image" className='error404' src="error404.jpg"></img>       
            </div>           
      
   );
};

Error404.propTypes = {
    className: PropTypes.string,
};
Error404.defaultProps = {
    className: '',
};
export default React.memo(Error404);
