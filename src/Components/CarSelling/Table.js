import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { Button, TextField } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        margin: "10px 0px 0 0px"
    }
});

const TableHead = withStyles((theme) => ({
    root: {
        backgroundColor: "#1976d2",
    }
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
    root: {
        color: "white"
    }
}))(TableCell);

const mainData = [
    {
        "registrationNo": "REGIST01",
        "chassisNo": "CHASSIS01",
        "soldTo": "Adam Lambart",
        "transferDone": "No",
        "totalDealValue": 423944,
        id: "sadkfnslealkdnfl",
    },
    {
        "registrationNo": "REGIST02",
        "chassisNo": "CHASSIS02",
        "soldTo": "John Mclean",
        "transferDone": "No",
        "totalDealValue": 543992,
        id: "idoeek002",
    },
    {
        "registrationNo": "REGIST03",
        "chassisNo": "CHASSIS03",
        "soldTo": "Ron Fits",
        "transferDone": "No",
        "totalDealValue": 933944,
        id: "idoeek003",
    },
]

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'registrationNo',
        numeric: false,
        disablePadding: true,
        label: 'Registration Number',
    },
    {
        id: 'chassisNo',
        numeric: true,
        disablePadding: false,
        label: 'Chassis Number',
    },
    {
        id: 'soldTo',
        numeric: true,
        disablePadding: false,
        label: 'Sold To',
    },
    {
        id: 'transferDone',
        numeric: true,
        disablePadding: false,
        label: 'Transfer Done',
    },
    {
        id: 'totalDealValue',
        numeric: true,
        disablePadding: false,
        label: 'Total Deal Value',
    },
    {
        id: 'icon',
        numeric: true,
        disablePadding: false,
        label: '',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell> */}
                {headCells.map((headCell) => (
                    <TableHeaderCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? '5px' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ fontWeight: "500" , color: "white"}}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <span style={{ fontWeight: "600" }}>{headCell.label}</span>
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableHeaderCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected, deleteSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Car Sell Data
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete" onClick={() => deleteSelected()}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        {/* <FilterListIcon onClick={() => localStorage.removeItem("carData")} /> */}
                    </IconButton>
                </Tooltip>
            )}
            <a style={{ textDecoration: "none", color: "black" }} href='/dashboard/add-sell-car'>
                <Button style={{ height: "40px" }} variant='contained' >Add</Button>
            </a>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
    const [tableData, setTableData] = React.useState(mainData)

    useEffect(() => {
        let data = localStorage.getItem("carSell")
        if (data)
            setTableData(JSON.parse(data))
        else
            localStorage.setItem("carSell", JSON.stringify(mainData))
    }, [])

    const requestSearch = (e) => {
        console.log(mainData)
        const filteredRows = mainData.filter((row) => {
            return row.chassisNo.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.soldTo?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.transferDone?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.totalDealValue.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.registrationNo?.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setTableData(filteredRows);
        setPage(0)
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = tableData.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const deleteSelected = () => {
        let allData = tableData;
        let filteredArr = []
        filteredArr = allData.filter((item) => {
            return item.id !== selectedId
        })
        setTableData(filteredArr)
        handleClose()
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];


        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    const showCarDetails = (id) => {
        window.location.pathname = `/dashboard/edit-sell-car/${id}`
    }

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenuItem = (event, id) => {
        setSelectedId(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [selectedId, setSelectedId] = React.useState("")
    const classes = useStyles();
    const moveToCarMaster = (id) => {
        localStorage.setItem("move-to-cm",id)
        window.location.pathname = "/dashboard/add-car-master"
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} deleteSelected={deleteSelected} />
                <TableContainer>
                    <TextField label="search" onChange={(e) => requestSearch(e)} style={{ margin: "5px 0 0 10px" }} />
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        className={classes.table}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={tableData.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(tableData, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            {/* <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    onClick={(event) => handleClick(event, row.id)}
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell> */}
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="5px"
                                                onClick={() => showCarDetails(row.id)}

                                            >
                                                {row.registrationNo}
                                            </TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.chassisNo}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.soldTo}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.transferDone}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">₹ {row.totalDealValue}</TableCell>
                                            <TableCell align='right'>
                                                <div>
                                                    <MoreVertIcon
                                                        style={{ cursor: "pointer" }}
                                                        id="basic-button"
                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={(e) => handleClickMenuItem(e, row.id)}
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => showCarDetails(selectedId)}>Edit</MenuItem>
                <MenuItem onClick={() => deleteSelected(selectedId)}>Delete</MenuItem>
                <MenuItem onClick={() => moveToCarMaster(selectedId)}>Sub Menu</MenuItem>
                <MenuItem onClick={handleClose}>Sub Menu</MenuItem>
                <MenuItem onClick={handleClose}>Sub Menu</MenuItem>
            </Menu>
        </Box>
    );
}
