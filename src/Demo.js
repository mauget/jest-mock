import React from 'react';

export default function Demo(props) {
    const {prop1, prop2} = {...props};

    return (
        <div>
            <p>{prop1}</p>
            <p>{prop2}</p>
        </div>
    );
}
