import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('RolloutAddedToInformer', 'Rollout resource added to informer: tfy-trial-workspace/simple-fastapi', 'Rollout: simple-fastapi', 1, '13m ago<br>Today at 16:02:51'),
    createData('Started', 'Started container simple-fastapi', 'Pod: simple-fastapi-745f447d7-z5nhc', 1, '1h 21m ago<br>Today at 14:54:53'),
    createData('Created', 'Created container simple-fastapi', 'Pod: simple-fastapi-745f447d7-z5nhc', 1, '1h 21m ago<br>Today at 14:54:53'),
    createData('Pulled', 'Successfully pulled image "526077812922.dkr.ecr.eu-west-1.amazonaws.com/tfy-ctl-euwe1-devtest-tfy-trial-workspace-simple-fastapi:1714375635" in 549ms (549ms including waiting)', 'Pod: simple-fastapi-745f447d7-z5nhc', 1, '1h 21m ago<br>Today at 14:54:52'),
];

const columns = [
    'REASON',
    'MESSAGE',
    'INVOLVED OBJECT',
    'COUNT',
    'LAST OCCURRED'
]

export default function BasicTable() {
    return (
        <TableContainer component={Paper}> 
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {columns.map((columns) => <TableCell>{columns}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{color: '#1ab394'}}>
                                {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            <TableCell>{row.carbs}</TableCell>
                            <TableCell sx={{color: '#999'}}>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
