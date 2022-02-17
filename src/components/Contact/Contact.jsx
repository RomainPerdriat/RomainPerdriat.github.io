import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import datas from '../../Datas/datasCard';
import Card from '../Card/Card';

const Contact = ({className, ...rest}) => {
    const cards= datas.cards;
    console.log(cards)
   return (
       <footer
            className={classnames('contact', className)}
            {...rest}
         >
            <h1>Contact</h1>
            {
            cards.map((card) => (
                <Card
                key = {card.id}
                url = {card.url}
                title = {card.title}
                content= {card.content}

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
