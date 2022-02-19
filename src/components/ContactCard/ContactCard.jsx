import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contactCard.scss';
import {Link} from 'react-router-dom'

const Card = ({
    className,
    key,
    src,
    title,
    content,
    alt,
    link,
    toShow,
     ...rest}) => {
   return (
        <div class="ui secondary  menu">
            <div class="item">{title}
                <div> 
                    <p className= "contenu">
                        {content} 
                        <Link to= "{link}">{toShow}</Link>      
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


