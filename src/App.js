import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
				<h1 className='title'>Simple SPA</h1>
				<ul>
					<li><NavLink exact to='/'>Home</NavLink></li>
					<li><NavLink to='/stuff'>Stuff</NavLink></li>
					<li><NavLink to='/contact'>Contact</NavLink></li>
				</ul>
				<div className='content'>
					<Route exact path='/' component={Home} />
					<Route path='/stuff' component={Stuff} />
					<Route path='/Contact' component={Contact} />
				</div>
				</div>
			</Router>
		)
	}
}

export default App
