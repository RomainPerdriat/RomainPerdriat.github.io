import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './formationsCard.scss';

const FormationsCard = ({
    className,
    title,
    content,
     ...rest}) => {
   return (
       <div
            className={classnames('formationscard', className)}
            {...rest}
         >
            <p>{title}{content}</p>
        </div>
   );
};

FormationsCard.propTypes = {
    className: PropTypes.string,
};
FormationsCard.defaultProps = {
    className: '',
};
export default React.memo(FormationsCard);
