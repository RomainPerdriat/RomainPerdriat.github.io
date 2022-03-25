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
            <Typography sx= {{fontSize :'17px', mt: .5}}>{title}</Typography>
            <Typography sx= {{fontSize :'15px'}}>{content}</Typography>
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
