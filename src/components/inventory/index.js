import React, { Component } from 'react'
import {Link, Breadcrumbs,TextField,Divider, Button, Fab} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem';
import '../../scss/inventory/index.scss';
import ProductList from './productlist'
const LinkRouter = (props) => <Link {...props} component={RouterLink} />;
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },          
}));
const currencies = [{
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
export default function Inventory(props) {
    const classes = useStyles();
    const products=[];
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    return (
      <div className='inventory-container'>
        <Fab className='fab' color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        <Breadcrumbs style={{marginTop:'12px'}}>
            <LinkRouter className={classes.link} to='/dashboard'> <HomeIcon className={classes.icon} /> Home</LinkRouter>
            <Typography color="textPrimary" className={classes.link}>
            Inventory
            </Typography>
        </Breadcrumbs>
        <div className='heading' >
          <h2>Product List</h2>
          <p>Warehouse product information display, you can add new product,edit existing product,public product and export products</p>
        </div>
        {/* <hr className='divider' /> */}
        <Divider />
        
            < form className = 'filter-menu' >
              <div className='input-group'>
                <label htmlFor='id'>Id : &nbsp;&nbsp;&nbsp;</label>
                <TextField size='small' variant='outlined' />
              </div>
              <div className='input-group'>
                <label htmlFor='id'>Product :&nbsp;</label>
                < TextField size = 'small'
                variant = 'outlined' / >
              </div>
              <div className='input-group'>
                <label htmlFor='id'>Category :&nbsp;&nbsp;&nbsp;</label>
                < TextField 
                  id="outlined-select-currency"
                  select
                  value={currency}
                  onChange={handleChange}
                  helperText="Please select your currency"
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className='input-group'>
                 < Button
                 variant = "contained"
                 color = "primary" > Apply </Button>
              </div>
            </form>
        <Divider />
        <div className='product-menu'>
          <ProductList />
        </div>
      </div>
    )
  
}
