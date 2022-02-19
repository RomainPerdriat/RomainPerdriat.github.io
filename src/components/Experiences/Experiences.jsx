import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './experiences.scss';

const Experiences = ({className, ...rest}) => {
   return (
       <div
            className={classnames('experiences', className)}
            {...rest}
         >
             <h2>Expérience</h2>
                <strong>O'clock</strong>
                    <p>Projet de fin d'études:</p> 
                   <p> Développement d'une application Web au sein d'une équipe de 5 Développeurs, 4 semaines intensives </p>       
        </div>
   );
};

Experiences.propTypes = {
    className: PropTypes.string,
};
Experiences.defaultProps = {
    className: '',
};
export default React.memo(Experiences);
