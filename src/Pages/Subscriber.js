import React, {useState} from 'react';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';
import useTable from '../Component/Table/UseTable';
import data from './Data/advert';
import { makeStyles, TableBody, TableRow, TableCell, Toolbar, TextField, InputAdornment, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import ActionButton from '../Component/ActionButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CloseIcon from '@material-ui/icons/Close';

import {TableContainer} from '../Style/TableContainerStyle';

const headCells = [
    {id: 'BuyersId', label: 'Buyers Id'},
    {id: 'time', label: 'Time', disableSorting: true},
    {id: 'date', label: 'Date', disableSorting: true},
    {id: 'status', label: 'STATUS', disableSorting: true},
    {id: 'Action', label: 'Action', disableSorting: true},
]


const useStyles = makeStyles(theme => ({
    searchInput: {
        width: '65%',
    },
    newButton: {
        position: 'absolute',
        right: '10px',
        height: '50px',

        '& media (max-width: 450px)': {
            right: '-13rem',
        }
    }
}))

const Subscriber = () => {

    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({fn:items => { return items; }});

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordAfterPagingAndSorting
    } = useTable(data, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn:items => {
                if( target.value === "" )
                    return items
                    else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <AdminDashboardLayout>
            <TableContainer>
                <Toolbar>
                    <TextField
                        variant="outlined"
                        label="search"
                        className={classes.searchInput}
                        name="search"
                        InputProps= {{
                        startAdornment: (<InputAdornment position="start"> <Search /> </InputAdornment>)   
                        }}

                        onChange={handleSearch}
                    />
                    <Button 
                        className={classes.newButton}
                        variant="outlined"
                        startIcon = {<AddIcon />}
                    > Add Advert </Button>
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.BuyersId}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                        <ActionButton
                                            color="#84e35d">
                                            <VisibilityOutlinedIcon fontSize="small" />
                                        </ActionButton>
                                        <ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </TableContainer>
        </AdminDashboardLayout>
    )
}

export default Subscriber;