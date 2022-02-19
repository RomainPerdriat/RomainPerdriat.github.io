import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './formations.scss';
import datasForm from '../../Datas/datasForm';
import FormationsCard from '../FormationsCard/FormationsCard';

const Formations = ({className, ...rest}) => {
    const formations= datasForm.formations;
    console.log(formations)
   return (
       
       <div>
       <div
            className={classnames('formations', className)}
            {...rest}
         >
            <h1>Formations</h1>
            {
                    formations.map((formation) => (
                        <FormationsCard
                        key = {formation.id}
                        title = {formation.title}
                        content = {formation.content}
                        />
                    ))
                }      
        </div>
        
       </div>
   );
};

Formations.propTypes = {
    className: PropTypes.string,
};
Formations.defaultProps = {
    className: '',
};
export default React.memo(Formations);
