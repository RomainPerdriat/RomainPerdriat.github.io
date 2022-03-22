import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './formationsCard.scss';
import { Typography } from '@mui/material';

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
            <strong>{title}</strong>
            <Typography sx= {{fontSize :'14px'}}>{content}</Typography>
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
