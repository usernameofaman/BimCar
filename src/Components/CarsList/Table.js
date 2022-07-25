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
        "dateUpdated": "December 13, 2018",
        "make": "Skoda",
        fuelEconomy: "18",
        "model": "Superb",
        fuelTankCapacity: 31,
        "variant": "Sportline 2.0L Tdi At",
        "fuelType": "Petrol",
        id: "iejelkjssdfdflkr",
        onRoadPrice: 2899599,
    },
    {
        "dateUpdated": "December 11, 2018",
        "make": "Skoda",
        fuelEconomy: "18",
        "model": "Superb",
        fuelTankCapacity: 31,
        "variant": "Sportline 1.8L Tsi At",
        "fuelType": "Petrol",
        id: "iejelkjssdfdflkr",
        onRoadPrice: 3149599,
    },
    {
        "dateUpdated": "December 11, 2018",
        "make": "Nissan",
        fuelEconomy: "18",
        "model": "Micra",
        fuelTankCapacity: 31,
        "variant": "Active",
        "fuelType": "Petrol",
        id: "iejelkjssdfdflkr",
        onRoadPrice: 599950,
    },
    {
        "dateUpdated": "December 11, 2018",
        "make": "Premier",
        fuelEconomy: "18",
        "model": "Rio",
        fuelTankCapacity: 31,
        "variant": "Ex",
        "fuelType": "Petrol",
        id: "iejelkdsdjsdflkr",
        onRoadPrice: 668949,
    },
    {
        "dateUpdated": "December 18, 2019",
        "make": "Tata",
        fuelEconomy: "18",
        "model": "Tiago",
        fuelTankCapacity: 31,
        "variant": "Revotron Xza Plus",
        "fuelType": "Petrol",
        id: "iejelkjsdflkr",
        onRoadPrice: 650000,
    },
    {
        "dateUpdated": "November 18, 2014",
        "make": "Hyundai",
        fuelEconomy: "18",
        "model": "Santro",
        fuelTankCapacity: 31,
        "variant": "Magna Amt",
        "fuelType": "Petrol",
        id: "iejelkjlkr",
        onRoadPrice: 530190,
    },
    {
        "dateUpdated": "December 18, 2015",
        "make": "Volkswagen",
        fuelEconomy: "18",
        "model": "Polo",
        fuelTankCapacity: 31,
        "variant": "Trendline 1.0L (P)",
        "fuelType": "Petrol",
        id: "iejelkjlkr",
        onRoadPrice: 582000,
    },
    {
        "dateUpdated": "December 18, 2013",
        "make": "Renault",
        fuelEconomy: "18",
        "model": "Triber",
        fuelTankCapacity: 31,
        "variant": "Rxz",
        "fuelType": "Petrol",
        id: "lkaljsnnkflkmd",
        onRoadPrice: 663485,
    },
    {
        "dateUpdated": "December 18, 2013",
        "make": "Maruti Suzuki",
        fuelEconomy: "18",
        "model": "Eeco",
        fuelTankCapacity: 38,
        "variant": "5 Str With Ac+Htr",
        "fuelType": "Petrol",
        id: "pwoeporklnwkjn",
        onRoadPrice: 392967,
    },
    {
        "dateUpdated": "June 13, 2015",
        "make": "Hyundai",
        fuelEconomy: "15",
        "model": "Verna",
        fuelTankCapacity: 35,
        "variant": "1.4 Vtvt",
        "fuelType": "Diesel",
        id: "ewporjwoenksdnfl",
        onRoadPrice: 817647
    },
    {
        "dateUpdated": "December 18, 2013",
        "make": "Datsun",
        fuelEconomy: "18",
        "model": "Redi-Go",
        fuelTankCapacity: 38,
        "variant": "1.0 S",
        "fuelType": "Petrol",
        id: "lkandlnmoiwef",
        onRoadPrice: 390000
    },
    {
        "dateUpdated": "October 18, 2021",
        "make": "Tata",
        fuelEconomy: "15",
        "model": "Harrier",
        fuelTankCapacity: 42,
        "variant": "XMV",
        "fuelType": "Diesel",
        id: "sadkfnslealkdnfl",
        onRoadPrice: 1384000
    },
    {
        "dateUpdated": "June 18, 2016",
        "make": "Mahindra",
        fuelEconomy: "15",
        "model": "Verito",
        fuelTankCapacity: 38,
        "variant": "1.4 Vtvt Ex",
        "fuelType": "Diesel",
        id: "ewporjwejrlnsdf",
        onRoadPrice: 936000
    },
    {
        "dateUpdated": "June 18, 2016",
        "make": "Toyota",
        fuelEconomy: "17",
        "model": "Etios Cross",
        fuelTankCapacity: 35,
        "variant": "1.4 X Edition",
        "fuelType": "Diesel",
        id: "ernw,mern,dlkfms",
        onRoadPrice: 816000
    },
    {
        "dateUpdated": "June 13, 2015",
        "make": "Hyundai",
        fuelEconomy: "15",
        "model": "Verna",
        fuelTankCapacity: 35,
        "variant": "1.4 Vtvt E",
        "fuelType": "Diesel",
        id: "ewporjwoenksdnfl",
        onRoadPrice: 817647
    },
    {
        "dateUpdated": "October 18, 2021",
        "make": "Tata",
        fuelEconomy: "15",
        "model": "Harrier",
        fuelTankCapacity: 42,
        "variant": "XMT",
        "fuelType": "Diesel",
        id: "sadkfnsalkdnfl",
        onRoadPrice: 1347000
    },
    {
        "dateUpdated": "October 18, 2021",
        "make": "Fiat",
        fuelEconomy: "15",
        "model": "Urban Cross",
        fuelTankCapacity: 39,
        "variant": "1.4 T-Jet Emotion",
        "fuelType": "Diesel",
        id: "ksadnflksnpfj",
        onRoadPrice: 977000
    },
    {
        "dateUpdated": "October 18, 2021",
        "make": "Hyundai",
        fuelEconomy: "21",
        "model": "Venue",
        fuelTankCapacity: 32,
        "variant": "1.4 Crdi Mt Sx Dual Tone",
        "fuelType": "Petrol",
        id: "asldkfnapsdjfp",
        onRoadPrice: 998000
    },
    {
        "dateUpdated": "January 18, 2019",
        "make": "Jeep",
        fuelEconomy: "12",
        "model": "Compass",
        fuelTankCapacity: 32,
        "variant": "1.4 Limited (O) At",
        "fuelType": "Petrol",
        id: "saldkjfiajsdfiopj",
        onRoadPrice: 2055000
    },
    {
        "dateUpdated": "October 18, 2021",
        "make": "Tata",
        fuelEconomy: "21",
        "model": "Punch",
        fuelTankCapacity: 34,
        "variant": "Creative",
        "fuelType": "Petrol",
        id: "kdhjhfksd",
        onRoadPrice: 468328
    },
    {
        "dateUpdated": "September 7, 2020",
        "make": "Kia",
        fuelEconomy: "15",
        fuelTankCapacity: 26,
        "model": "Sonet",
        "variant": "HTM",
        "fuelType": "Diesel",
        id: "sdfjppeshksjd",
        onRoadPrice: 868328
    },
    {
        "dateUpdated": "October 18, 2021",
        fuelEconomy: "19",
        "make": "Tata",
        "model": "Punch",
        fuelTankCapacity: 31,
        "variant": "Adventure", "fuelType": "Petrol",
        id: "sadjfpaijsdiof",
        onRoadPrice: 568328
    },
    {
        "dateUpdated": "September 21, 2017",
        fuelEconomy: "18",
        "make": "Tata", "model": "Nexon",
        "variant": "XZ",
        "fuelType": "Diesel",
        fuelTankCapacity: 29,
        id: "sdlfjlaksdjf",
        onRoadPrice: 768328
    },
    {
        "dateUpdated": "September 21, 2017",
        "make": "Tata",
        fuelEconomy: "16",
        "model": "Nexon",
        fuelTankCapacity: 25,
        "variant": "XZ+",
        "fuelType": "Petrol",
        id: "sdfmsakldf",
        onRoadPrice: 968328
    },
    {
        "dateUpdated": "September 7, 2020",
        "make": "Kia",
        fuelEconomy: "15",
        fuelTankCapacity: 26,
        "model": "Sonet",
        "variant": "HTK",
        "fuelType": "Diesel",
        id: "sdfjhksjd",
        onRoadPrice: 868328

    },
    { "dateUpdated": "October 30, 2021", fuelEconomy: "19", onRoadPrice: 958328, fuelTankCapacity: 29, "make": "Mahindra", "model": "XUV700", "variant": "MX", "fuelType": "Petrol", id: "sdkljfk" },
    { "dateUpdated": "October 18, 2021", fuelEconomy: "18", onRoadPrice: 1038328, fuelTankCapacity: 28, "make": "Tata", "model": "Punch", "variant": "Pure", "fuelType": "Petrol", id: "uhdksjnf" }
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
        id: 'make',
        numeric: false,
        disablePadding: true,
        label: 'Make',
    },
    {
        id: 'model',
        numeric: true,
        disablePadding: false,
        label: 'Model',
    },
    {
        id: 'fuelEconomy',
        numeric: true,
        disablePadding: false,
        label: 'Fuel Economy',
    },
    {
        id: 'variant',
        numeric: true,
        disablePadding: false,
        label: 'Variant',
    },
    {
        id: 'fuelType',
        numeric: true,
        disablePadding: false,
        label: 'Fuel Type',
    },
    {
        id: 'fuelTankCapacity',
        numeric: true,
        disablePadding: false,
        label: 'Fuel Capacity',
    },
    {
        id: 'onRoadPrice',
        numeric: true,
        disablePadding: false,
        label: 'On Road Price Delhi',
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
                    All Cars
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
            <a style={{ textDecoration: "none", color: "black" }} href='/dashboard/add-new-car'>
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
        let data = localStorage.getItem("carData")
        if (data)
            setTableData(JSON.parse(data))
        else
            localStorage.setItem("carData", JSON.stringify(mainData))
    }, [])

    const requestSearch = (e) => {
        const filteredRows = mainData.filter((row) => {
            return row.make.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.model?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.variant?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.fuel?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.fuelType?.toLowerCase().includes(e.target.value.toLowerCase());
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
        window.location.pathname = `/dashboard/car-details/${id}`
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
                                                {row.make}
                                            </TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.model}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.fuelEconomy}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.variant}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.fuelType}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">{row.fuelTankCapacity}</TableCell>
                                            <TableCell onClick={() => showCarDetails(row.id)} align="right">₹ {row.onRoadPrice}</TableCell>
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
                <MenuItem onClick={handleClose}>Sub Menu</MenuItem>
                <MenuItem onClick={handleClose}>Sub Menu</MenuItem>
                <MenuItem onClick={handleClose}>Sub Menu</MenuItem>
            </Menu>
        </Box>
    );
}
