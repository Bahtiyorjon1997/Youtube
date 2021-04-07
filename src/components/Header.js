import React from 'react';
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar"

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="header__left">
                <MenuIcon />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                    alt=""
                    className="header__logo"
                />
            </div>
            <div className="header__center">
                <input type="text" placeHolder="Search" />
                <Search className="header__inputField" />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon"></AppsIcon>
                <NotificationsIcon className="header__icon" />
                <Avatar
                    className="header__icon"
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                />
            </div>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 56px;
    padding: 16px 20px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;

    .header__logo{
        height: 25px;
        width: 80px;
        object-fit: contain;
        margin-left: 20px;
    }

    .header__left{
        display: flex;
        align-items: center;
    }

    .header__center{
        display: flex;
        align-items: center;
        width: 40%;
        border: 1px solid lightgray;

        & > input{
            flex: 1;
            border: none;
            outline: none;
        }

        .header__inputField{
            width: 50px !important;
            background-color: #fafafa;
            border-left: 1px solid lightgray;
            color: grey;
        }
    }

    .header__right{
        display: flex;
        align-items: center;

        & .header__icon{
            margin-right: 8px;
        }
    }
`
