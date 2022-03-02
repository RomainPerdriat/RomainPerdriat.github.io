import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './expeTech.scss';
import TechCard from '../TechCard/TechCard';
import datasTech from '../../Datas/dataTechnos';
import Formations from '../Formations/Formations';
import Experiences from '../Experiences/Experiences';

const ExpeTech = ({
    className,
     ...rest
    }) => {
        const techs= datasTech.technos;
        console.log(techs)
   return (
       <div>
            <div
                className={classnames('expeTech', className)}
                {...rest}
            >
                <h1> Technologies </h1>
                {
                    techs.map((tech) => (
                        <TechCard
                        key = {tech.id}
                        title = {tech.title}
                        icons = {tech.icons}
                        />
                    ))
                } 
            </div>   
                <Experiences/>
                <Formations/>
        </div>

   );
};

ExpeTech.propTypes = {
    className: PropTypes.string,
    techs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          icons: PropTypes.string
        }),
      ),
};
ExpeTech.defaultProps = {
    className: '',
};
export default React.memo(ExpeTech);
