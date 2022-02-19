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
            Je m'intéresse à beaucoup de choses! 
            </p>
            <p>L'apprentissage permanent est vraiment important pour moi, et, mon âge avançant (33 ans , ce qui est encore jeune), le nombre de mes loisirs également: </p>
                <ol class="ui list">               
                  
                     <li value="-">La cuisine</li>
                     <li value="-">La musique (beaucoup de folk entre autres)</li>
                     <li value="-">La Bande Dessinée</li>
                     <li value="-">Le jardinage</li>
                     <li value="-">Rick et Morty et The Office</li>
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
