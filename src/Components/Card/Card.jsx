import React from 'react';

const Card = ({ name, phone, email, website }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>
        </div>
    );
}

export { Card }