import React, {useState, useEffect} from 'react';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';
import useTable from '../Component/Table/UseTable';
// import data from './Data/advert';
import { TableBody, TableRow, TableCell, Toolbar, TextField, InputAdornment, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import ActionButton from '../Component/ActionButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CloseIcon from '@material-ui/icons/Close';

import {TableContainer} from '../Style/TableContainerStyle';

import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import {DashboardHeader} from '../Style/DashboardHeader';

import AxiosAuth from "../lib/AxiosAuth";
import Empty from '../Component/Empty';
import Loader from '../Component/loader/Loader';

const headCells = [
    {id: 'BuyersId', label: 'Buyers Id'},
    {id: 'name', label: 'Name'},
    {id: 'email', label: 'Email', disableSorting: true},
    {id: 'location', label: 'Location', disableSorting: true},
    {id: 'telephone', label: 'Telephone', disableSorting: true},
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

    const [subscriber, setSubscriber] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        setLoading(true)
        // Get Subscriber
        AxiosAuth()
        .get("/marketer/check-referrals")
        .then((res) => {
            console.log(res.data)
            setSubscriber(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        });
    }, [])

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordAfterPagingAndSorting
    } = useTable(subscriber, headCells, filterFn);

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
        <>
        {
            loading ?
        <Loader />
            :
        <AdminDashboardLayout>
            <DashboardHeader>
                <div className="icon">
                    <AiOutlineUsergroupAdd className='icon-fill' />
                </div>
                <div className="heading">
                    <h6>Buyer</h6>
                    <p>Add the buyers info here for proper registration</p>
                </div>
            </DashboardHeader>

            {subscriber.length > 0 ?
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
                    > Add Buyer </Button>
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.cheks_id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.telephone}</TableCell>
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
            </TableContainer> :
            <Empty />
            }
        </AdminDashboardLayout>
        }
        </>
    )
}

export default Subscriber;