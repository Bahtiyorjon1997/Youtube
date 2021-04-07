import styled from 'styled-components'
import React from 'react'
import SideRow from "./SideRow"
import HomeIcon from "@material-ui/icons/Home"
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const SideBar = () => {
    return (

        <SideWrapper>
            <SideRow title="Home" icon={<HomeIcon />} />
            <SideRow title="Trending" icon={<ExploreIcon />} />
            <SideRow title="Subscribtion" icon={<SubscriptionsIcon />} />
        </SideWrapper>

    )
}

export default SideBar

const SideWrapper = styled.div`
    flex: 0.2;
    left: 0;
    text-align: left;
    border: 1px solid blue;
`
