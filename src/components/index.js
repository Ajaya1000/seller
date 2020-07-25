import React, { Component } from 'react'
import SideNav from './sidenav'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './dashboard'
import Order from './order'
import Advs from './advs'
import Header from './header'
import Inventory from './inventory'
var drawerWidth = 240;
var appBarWidth = 50;
export default class Home extends Component {
    constructor(props){
        super (props);
        this.state = {
            isOpen: true
        }
    }
    toogleDrawer=(tf)=>{
      this.setState(
            { isOpen:tf }
        );
    }
  render() {
    return (
      <div className="root">
        <SideNav open={this.state.isOpen} toogleDrawer={this.toogleDrawer} />
        <main style={{marginLeft:`${drawerWidth}px`}}>
                <Header open={this.state.isOpen} toogleDrawer={this.toogleDrawer} />
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
}
