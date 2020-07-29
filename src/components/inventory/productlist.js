import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'photo',
    label: 'Photo',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
      id:'quantity',
      label: 'Quantity',
      minWidth:170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
  }
];
// , {
//     id: 'action',
//     label: 'Actions',
//     minWidth: 170
// }
function createData(id,name, photo, price,quantity) {
  return { id, name, photo, price,quantity };
}

const rows = [
  createData('1234', 'Headphone', 'https://images-na.ssl-images-amazon.com/images/I/51rRwx6wJgL._SY355_.jpg', 1324171354, 3287263),
  createData('7562', 'Mask', 'https://static05.jockey.in/uploads/dealimages/10928/zoomimages/black-unisex-face-mask-pack-of-2-fm02-10.jpg', 1324171354, 3287263),
  createData('1234', 'Mouse', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVU4O1zvrtXUrKw8w3t0k-RQGU8GHLX8u0Lg&usqp=CAU', 1324171354, 3287263),
  createData('1234', 'Camera', 'https://static.bhphoto.com/images/multiple_images/images2500x2500/1540460716_IMG_1082721.jpg', 1324171354, 3287263),
  createData('1234', 'headphone', 'https://s3.us-east-2.amazonaws.com/cc-prd-s3-uploads/2019/3/12/7dcbe1bafdf6c711b1a1b639539e9291829d1e76.jpeg', 1324171354, 3287263),
];
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
// @connect((state)=>({products:state.products}))
 function ProductList(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                         {
                             (column.id === 'photo')?( < img style={{width:'100px', height:'100px'}} alt={row['name']} src={value} /> ): (column.format && typeof value === 'number' ? column.format(value) : value)
                         }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default ProductList;
// export default connect((state)=>({productlist:state.ProductList}))(ProductList)