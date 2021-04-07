import styled from 'styled-components';
import React from 'react'

const Content = () => {
    return (
        <ContextWrap>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </ContextWrap>
    )
}

export default Content;

const ContextWrap = styled.div`
    flex: 1;
    border: 1px solid blue;
`
