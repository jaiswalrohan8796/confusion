import React, { Component} from 'react'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments : COMMENTS,
            promotions : PROMOTIONS,
            leaders : LEADERS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                promotions={this.state.promotions.filter((promo)=> promo.featured)[0]}
                leaders={this.state.leaders.filter((lead)=> lead.featured)[0]}
                />
            )
        };
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={()=> <About leaders={this.state.leaders}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;