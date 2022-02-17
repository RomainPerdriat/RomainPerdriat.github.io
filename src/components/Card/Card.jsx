import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './card.scss';

const Card = ({
    className,
    key,
    src,
    title,
    content,
     ...rest}) => {
   return (
       <div
            className={classnames('card', className)}
            {...rest}
         >
         <p>{title}</p>
         <p>{src}</p>         
         <p>{content}</p>            
        </div>
   );
};

Card.propTypes = {
    className: PropTypes.string,
};
Card.defaultProps = {
    className: '',
};
export default React.memo(Card);
