import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loisirs.scss';
import ProjetPerso from '../ProjetPerso/ProjetPerso';

const Loisirs = ({className, ...rest}) => {
   return (
    
    <div>
       <div
            className={classnames('loisirs', className)}
            {...rest}
         >

         <h1>Loisirs</h1>
            <p>
            Je m'intèresse à beaucoup de choses! 
            </p>
            <p>L'apprentissage permanent est vraiment important pour moi, et, de ce fait, le nombre de mes centres d'intérêt fait comme mon âge, il croît.</p>
            <p>En voila certains: </p>
                <ol class="ui list">               
                     <li value="-">La cuisine</li>
                     <li value="-">La musique </li>
                     <li value="-">La Bande Dessinée</li>
                     <li value="-">Le jardinage</li>
                     <li value="-">L'astronomie</li>                
                </ol>              
        </div>
        <ProjetPerso/>       
</div>
   );
};

Loisirs.propTypes = {
    className: PropTypes.string,
};
Loisirs.defaultProps = {
    className: '',
};
export default React.memo(Loisirs);
