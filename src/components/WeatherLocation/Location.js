import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
    // const city = props.city;
    // const {city} = props;
        <div className='LocationCont'>
            <h1>
                {city}
            </h1>
        </div>
);

Location.proptypes = {
    city: PropTypes.string.isRequired,
}

export default Location;