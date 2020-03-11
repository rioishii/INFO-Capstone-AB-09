import React from 'react';
import "./styles.scss"

const Dragndrop = props => {
    return (
        <input type="file" name="file" onChange={props.onChangeImageHandler}/>
    );
}

export default Dragndrop;