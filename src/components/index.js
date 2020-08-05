import React, { Component,useState,useEffect } from 'react'
import SideNav from './sidenav'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './dashboard'
import Order from './order'
import Advs from './advs'
import Header from './header'
import Inventory from './inventory'
import {
  useTheme
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core'
var drawerWidth = 240;
var appBarWidth = 50;
export default function Home (props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('isMobile is' + isMobile);
    const [isOpen,setIsOpen]= useState(!isMobile);

    const togleDrawer = (tf) => {
      console.log('toogle Drawer called')
      setIsOpen(tf);
      console.log(isOpen);
    }
    useEffect(() => {
      console.log('useeffect called');
      setIsOpen(!isMobile);
    }, [isMobile])

    return (
      <div className="root">
        <SideNav  isMobile={isMobile} open={isOpen} togleDrawer={togleDrawer} />
        <main style={{marginLeft:`${(!isMobile)?drawerWidth:0}px`}}>
                <Header isMobile={isMobile} open={isOpen} togleDrawer={togleDrawer} />
            <section style={{zIndex:'-1'}}>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/order' component={Order} />
                    <Route path='/adv' component={Advs} />
                    <Route path='/inventory' component={Inventory} />
                    <Redirect to='/dashboard' />
                </Switch>
            </section>
        </main>
      </div>
    )
}
