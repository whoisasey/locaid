import React from 'react'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
	return (
		<div>
			<h1>Donate with impact.</h1>
			<p>Donate your clothes to charities you trust.</p>
			<NavLink to="/locaid/all" className="ui button">Find a Trusted Charity</NavLink>
		</div>
	)
}

export default Dashboard
