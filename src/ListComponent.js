import React from 'react';
import LiComponent from './ElementComponent'

const UlComponent = (props) => {
    const array = props.value;
    const liComponents = array.map((array) =>
        <LiComponent key={array.id} value={array.content} />
    );
    return (
        <ul>
            {liComponents}
        </ul>
    );
}

export default UlComponent;
