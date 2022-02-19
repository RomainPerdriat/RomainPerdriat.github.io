import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './techCard.scss';


const TechCard = ({
    className,
    title,
    icons,
     ...rest
    }) => {
   return (
       <div
            className={classnames('techcard', className)}
            {...rest}
         >
        <p>{title} <i class={icons}> </i></p>  
                
        </div>
   );
};

TechCard.propTypes = {
    className: PropTypes.string,
};
TechCard.defaultProps = {
    className: '',
};
export default React.memo(TechCard);
