import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import datas from '../../Datas/datasCard';
import Card from '../ContactCard/ContactCard';

const Contact = ({className, ...rest}) => {
    const cards= datas.cards;
    console.log(`Ensemble des cartes`,cards)
   return (
       
        <footer
                className={classnames('contact', className)}
                {...rest}
            >
                {
                    cards.map((card) => (
                        <Card
                        key = {card.id}
                        src = {card.src}
                        title = {card.title}
                        content= {card.content}
                        alt={card.alt}
                        link={card.link}
                        toShow={card.toShow}
                        />
                    ))
                }          
            </footer>
       
   );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);
