import styled from 'styled-components'
import React from 'react'
import SideRow from "./SideRow"
import HomeIcon from "@material-ui/icons/Home"
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const SideBar = () => {
    return (

        <SideWrapper>
            <SideRow title="Home" Icon={HomeIcon} />
            <SideRow title="Trending" Icon={ExploreIcon} />
            <SideRow title="Subscribtion" Icon={SubscriptionsIcon} />
        </SideWrapper>

    )
}

export default SideBar

const SideWrapper = styled.div`
    flex: 0.12;
    left: 0;
    text-align: left;
    z-index: 100;
    
`
