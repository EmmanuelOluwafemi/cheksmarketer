import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import useTable from "../Component/Table/UseTable";
// import data from './Data/advert';
import {
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";

import { TableContainer } from "../Style/TableContainerStyle";

import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { DashboardHeader } from "../Style/DashboardHeader";

import AxiosAuth from "../lib/AxiosAuth";
import Empty from "../Component/Empty";
import { Loader } from "../Component/loader/Loader";
import CreateUser from "../CreateUser/CreateUser";
import DeleteUser from "../Component/DeleteUser/DeleteUser";

const headCells = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email", disableSorting: true },
  { id: "location", label: "Location", disableSorting: true },
  { id: "telephone", label: "Telephone", disableSorting: true },
];

const useStyles = makeStyles((theme) => ({
  tool: {
    display: "flex",
    "@media (max-width: 450px)": {
      flexDirection: "column",
    },
  },
  searchInput: {
    width: "65%",

    "@media (max-width: 450px)": {
      display: "block",
      width: "100%",
    },
  },
  newButton: {
    position: "absolute",
    right: "10px",
    height: "50px",
    background: "#0175b1",
    color: "white",

    "&:hover": {
      color: "white",
      background: "#0175b1",
    },

    "@media (max-width: 450px)": {
      position: "static",
      right: "0",
      width: "70%",
      marginLeft: "auto;",
      marginTop: "1.2rem",
      display: "flex",
      fontSize: "12px",
    },
  },
}));

const Subscriber = () => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [subscriber, setSubscriber] = useState([]);
  const [loading, setLoading] = useState([]);

  const [openModal, setModal] = useState(false);
  const [openDel, setDel] = useState(false);
  const [getId] = useState("");

  const handleModal = () => {
    setModal(true);
  };

  useEffect(() => {
    setLoading(true);
    // Get Subscriber
    AxiosAuth()
      .get("/marketer/check-referrals")
      .then((res) => {
        console.log(res.data.data);
        setSubscriber(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const { TblContainer, TblHead, recordAfterPagingAndSorting } = useTable(
    subscriber,
    headCells,
    filterFn
  );

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  // set up pagination
  const [pageNumber, setPageNumber] = useState(0);

  const transPerPage = 6;
  const pageVisited = pageNumber * transPerPage;
  const pageCount = Math.ceil(subscriber.length / transPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayData =
    subscriber.length &&
    subscriber.slice(pageVisited, pageVisited + transPerPage).map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.location}</TableCell>
        <TableCell>{item.telephone}</TableCell>
      </TableRow>
    ));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AdminDashboardLayout>
          <CreateUser
            title="Add Subscriber"
            userType="seller"
            openModal={openModal}
            setModal={setModal}
          />

          <DeleteUser
            userRole="seller"
            userId={getId}
            setModal={setDel}
            openModal={openDel}
          />

          <DashboardHeader>
            <div className="icon">
              <AiOutlineUsergroupAdd className="icon-fill" />
            </div>
            <div className="heading">
              <h6>Subscriber</h6>
              <p>Add the subscriber info here for proper registration</p>
            </div>
          </DashboardHeader>

          {subscriber.length > 0 ? (
            <TableContainer>
              <Toolbar className={classes.tool}>
                <TextField
                  variant="outlined"
                  label="search"
                  className={classes.searchInput}
                  name="search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <Search />{" "}
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleSearch}
                />
                <Button
                  className={classes.newButton}
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={handleModal}
                >
                  {" "}
                  Add Subscriber{" "}
                </Button>
              </Toolbar>
              <TblContainer>
                <TblHead />
                <TableBody>{displayData}</TableBody>
              </TblContainer>
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"disableBtn"}
                activeClassName={"activePage"}
              />
            </TableContainer>
          ) : (
            <Empty func={handleModal} />
          )}
        </AdminDashboardLayout>
      )}
    </>
  );
};

export default Subscriber;
