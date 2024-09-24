import React from 'react';
import { Box, Divider, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const getLabelStyled = (part1, part2) => {
    return (
        <div>
            <span style={{ color: '#82A0CE', textTransform: 'lowercase' }}>{part1}</span>&nbsp;
            <span style={{ color: '#010202', textTransform: 'capitalize' }}>{part2}</span>
        </div>
    )
}

const Header = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check for small screen

    return (
        <div>
            <Typography sx={{ marginBottom: '8px' }}>ml-deploy</Typography>
            <Divider />
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: isSmallScreen ? 'center' : 'space-between', // Center items on small screens
                    alignItems: 'center',
                    flexDirection: isSmallScreen ? 'column' : 'row', // Stack on small screens
                }}
            >
                <Box sx={{ marginBottom: isSmallScreen ? '16px' : '0', width: '100%' }}>
                    <Tabs 
                        value={2}
                        onChange={(e) => { e.stopPropagation(); e.preventDefault(); }}
                        aria-label="basic tabs example"
                        sx={{
                            width: '100%',
                            overflowX: isSmallScreen ? 'auto' : 'hidden', // Scroll horizontally on small screens
                        }}
                    >
                        <Tab label={getLabelStyled('list-timeline', 'Logs')} {...a11yProps(0)} />
                        <Tab label={getLabelStyled('chart-line-up', 'Metrics')} {...a11yProps(1)} />
                        <Tab label={getLabelStyled('bell-exclamation', 'Events')}
                            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: isSmallScreen ? '8px' : '0',
                    alignItems: isSmallScreen ? 'stretch' : 'center', // Stretch select boxes on small screens
                }}>
                    <Select
                        value={'Last 24 hours'}
                        onChange={() => { }}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ height: '2rem', minWidth: '150px' }}
                    >
                        <MenuItem value="Last 24 hours">
                            Last 24 hours
                        </MenuItem>
                    </Select>

                    <Select
                        value={'All Events'}
                        onChange={() => { }}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ height: '2rem', minWidth: '150px' }}
                    >
                        <MenuItem value="All Events">
                            All Events
                        </MenuItem>
                    </Select>
                </Box>
            </Box>
            <Divider />
        </div>
    )
}

export default Header
