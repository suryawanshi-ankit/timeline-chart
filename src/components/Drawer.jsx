import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Content from './Content';

const anchor = 'right';

const Drawer = ({toggleDrawer, drawerState}) => {

    const list = (anchor) => (
        <Box
            sx={{width: '95vw', margin: '12px' }}
            className='hereIsClass'
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Content />
        </Box>
    );

    return (
        <React.Fragment key={anchor}>
            <SwipeableDrawer
                anchor={anchor}
                open={drawerState[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                {list(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default Drawer
