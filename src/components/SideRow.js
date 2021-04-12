import React from 'react'
import styled from "styled-components"

const SideRow = ({ title, Icon, ...props }) => {
    return (
        <SideRowWrap >
            < Icon className="sideBarRow__icon" />
            <h2 className="sideBarRow__title"> {title}</h2>
        </SideRowWrap>
    )
}

export default SideRow

const SideRowWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;

    .sideBarRow__icon{
        color: #606060;
        font-size: 25px !important;
    }

    .sideBarRow__title{
        flex: 1;
        margin-left: 20px;
        font-size: 14px;
        font-weight: 500;
    }

    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transition: 0.2s;

        & > .sideBarRow__icon{
            color: red;
        }

        & > .sideBarRow__title{
            font-weight: bold;
        }
    }


`