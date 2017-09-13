
import React, { Component } from 'react';

const ContainerBlock = (props) => {
    return (
        <div className={"container-block " + props.className}>
            {props.children}
        </div>
    );
};

export {
    ContainerBlock
}