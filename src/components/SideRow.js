import React from 'react'
import styled from "styled-components"

const SideRow = ({ title, icon, ...props }) => {
    return (
        <SideRowWrap>
            {icon}
            <h2> {title}</h2>
        </SideRowWrap>
    )
}

export default SideRow

const SideRowWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;


`