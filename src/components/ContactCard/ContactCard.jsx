import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contactCard.scss';

const Card = ({
    className,
    key,
    src,
    title,
    content,
    alt,
     ...rest}) => {
   return (
        <div class="ui secondary  menu">
            <div class="item">{title}
                <div> 
                    <p className= "contenu">
                        {content} 
                        <img src ={src} alt={alt}/>      
                    </p>  
                </div>
            </div>
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


