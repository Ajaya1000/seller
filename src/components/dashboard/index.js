import React, { Component,useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import lineOption from '../../Chart/lineChart'
import pieOption from '../../Chart/pieChart'
import '../../scss/dashboard/index.scss'
import {
  Grid,
  Paper,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell

} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StoreIcon from '@material-ui/icons/Store';
import 
  ImageIcon
 from '@material-ui/icons/Image'
import { Link as RLink } from 'react-router-dom';

const columns = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 10
  },
  {
    id: 'photo',
    label: 'Photo',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'income',
    label: 'Revenue',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];
function createData(name, photo, income, quantity) {
  return {
    name,
    photo,
    income,
    quantity
  }
}
const rows = [
  createData( 'Headphone', 'https://images-na.ssl-images-amazon.com/images/I/51rRwx6wJgL._SY355_.jpg', 1324171354, 10),
  createData( 'Mask', 'https://static05.jockey.in/uploads/dealimages/10928/zoomimages/black-unisex-face-mask-pack-of-2-fm02-10.jpg', 1324171354, 15),
  createData( 'Mouse', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVU4O1zvrtXUrKw8w3t0k-RQGU8GHLX8u0Lg&usqp=CAU', 1324171354, 25),
  createData( 'Camera', 'https://static.bhphoto.com/images/multiple_images/images2500x2500/1540460716_IMG_1082721.jpg', 1324171354, 45),
  createData( 'headphone', 'https://s3.us-east-2.amazonaws.com/cc-prd-s3-uploads/2019/3/12/7dcbe1bafdf6c711b1a1b639539e9291829d1e76.jpeg', 1324171354, 78),
];

export default function DashBoard(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

 
    return (
      <>
        <div className='chart-container'>
          <div className='chart-header'>
            <h5>Last 12 Months Sale</h5>
          </div>
          <div className='chart'>
              < ReactEcharts option = {
                lineOption
                
              }
              style = {
                {height: '350px'}
              }
              />
          </div>
        </div>
        <div className='card-container'>
          < Grid container
          direction = "row"
          justify = "center"
          
          spacing={2}
          >
            <Grid container direction="column" item sm={12} md={8} spacing={2}>
              <Grid container direction = "row" item sm={12} spacing={2}>
                <Grid item xs={12} sm>
                  <Paper className='card'>
                    <div className='card-item'>
                      <div className='card-head'>
                        <div className='card-icon'>
                            < ShoppingCartIcon style = {
                              {
                                fontSize: '40px'
                              }
                            }
                            />
                        </div>
                        <div className='card-title'>
                            <p className='title'>New Orders</p>
                            <p className='subtitle'>350</p>
                        </div>
                      </div>
                      <div className='card-tail'>
                            <RLink>
                              <Link>
                              < ArrowRightAltIcon / >
                              </Link>
                            </RLink>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm>
                  < Paper className = 'card' >
                    <div className='card-item'>
                      <div className='card-head'>
                        <div className='card-icon'>
                            < AttachMoneyIcon style = {
                              {
                                fontSize: '40px'
                              }
                            }
                            />
                        </div>
                        <div className='card-title'>
                            <p className='title'>Today's Sale</p>
                            <p className='subtitle'>$3509</p>
                        </div>
                      </div>
                      <div className='card-tail'>
                            <RLink>
                              <Link>
                              < ArrowRightAltIcon / >
                              </Link>
                            </RLink>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
             
              <Grid container direction = "row" item sm={12} spacing={2}>
                <Grid item xs={12} sm>
                  < Paper className = 'card' >
                    <div className='card-item'>
                      <div className='card-head'>
                        <div className='card-icon'>
                            < StoreIcon style = {
                              {
                                fontSize: '40px'
                              }
                            }
                            />
                        </div>
                        <div className='card-title'>
                            <p className='title'>Inventory Status</p>
                            <p className='subtitle' style={{fontSize:'13px'}}>9.1 % stock surplas</p>
                        </div>
                      </div>
                      <div className='card-tail'>
                            <RLink>
                              <Link>
                              < ArrowRightAltIcon / >
                              </Link>
                            </RLink>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm>
                  < Paper className = 'card' >
                    <div className='card-item'>
                      <div className='card-head'>
                        <div className='card-icon'>
                            < ShoppingCartIcon style = {
                              {
                                fontSize: '40px'
                              }
                            }
                            />
                        </div>
                        <div className='card-title'>
                            <p className='title'>Total Orders</p>
                            <p className='subtitle'>350</p>
                        </div>
                      </div>
                      <div className='card-tail'>
                            <RLink>
                              <Link>
                              < ArrowRightAltIcon / >
                              </Link>
                            </RLink>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              {/* trending items */}
              <Grid item sm={12} style={{width:'100%'}}>
                    <Paper className='trending-menu' style={{padding:'20px'}}>
                            <h1 className='heading'>
                              Top Selling Products
                            </h1>
                            <TableContainer className='table-container'>
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
                    </Paper>
              </Grid>
            </Grid>
            <Grid container direction="column" item sm={12} md={4} spacing={2}>
                    <Grid item sm={12}>
                          <Paper className='pie-container'>
                            <div className='heading'>
                              <h5>Orders</h5>
                              <p>Last 30 days</p>
                            </div>
                           
                             < ReactEcharts option = {
                               pieOption

                             }
                             className = 'piechart' /
                               >
                          </Paper>
                    </Grid>
            </Grid>
          </Grid>
        </div>

      </>
    )
}
