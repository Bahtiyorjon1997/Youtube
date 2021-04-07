import styled from 'styled-components'
import React from 'react'

const SideBar = () => {
    return (
        <div>
            <SideWrapper>SideBar</SideWrapper>
        </div>
    )
}

export default SideBar

const SideWrapper = styled.div`
    left: 0;
    text-align: left;
`
