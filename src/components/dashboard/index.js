import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import lineOption from '../../Chart/lineChart'
import pieOption from '../../Chart/pieChart'
import '../../scss/dashboard/index.scss'
import { Grid, Paper,Link } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import 
  ImageIcon
 from '@material-ui/icons/Image'
import { Link as RLink } from 'react-router-dom'
export default class DashBoard extends Component {
  render() {
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
          alignItems = "center" 
          spacing={2}
          >
            <Grid container direction="column" item xs={12} sm={8} spacing={2}>
              <Grid container direction = "row" item xs={12} spacing={2}>
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
              </Grid>
             
              <Grid container direction = "row" item xs={12} spacing={2}>
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
              </Grid>
             
            </Grid>
            <Grid container direction="column" item xs={12} sm={4} spacing={2}>
                    <Grid item xs={12}>
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
}
