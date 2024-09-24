import { Button } from '@mui/material';
import React from 'react';
import Drawer from './Drawer';

const anchor = 'right';

const Main = () => {

    const [drawerState, setDrawerState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerState({ ...drawerState, [anchor]: open });
    };

    return (
        <div className='main-container'>
            <Button variant="outlined" onClick={toggleDrawer(anchor, true)} color='black'>Click Me</Button>
            <Drawer toggleDrawer={toggleDrawer} drawerState={drawerState} />
        </div>
    )
}

export default Main;
