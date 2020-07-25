import React, { Component } from 'react'
import {Link, Breadcrumbs,TextField,Divider} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem';
import '../../scss/inventory/index.scss'
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
        <div>
            < form className = 'filter-menu' >
              <div className='input-group'>
                <label htmlFor='id'>Id:</label>
                <input type='text' />
              </div>
              <div className='input-group'>
                <label htmlFor='id'>Product :</label>
                <input type='text' />
              </div>
              <div className='input-group'>
                <label htmlFor='id'>Category :</label>
                <TextField
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
                 < input type = 'submit' / >
              </div>
            </form>
        </div>
        <div className='product-menu'>

        </div>
      </div>
    )
  
}
