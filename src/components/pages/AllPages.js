import React, { useState, useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import DB from '../../data.json'
import SingleCard from './SingleCard'

const AllPages = () => {
	const [data, getData] = useState([]);

	useEffect(() => {
		getData(DB);
	}, []);

	const allMapped = data.map(card => {
		console.log(card)
		return (
			<NavLink to={`/page/${card.slug}`} key={card._id.$oid}>
				<SingleCard card={card}/>
			</NavLink>
		)
	})

		
		return (
			<Fragment>
				{/* title */}
				<div className="ui cards">

				{allMapped}
				</div>
			</Fragment>
		);
	}


export default AllPages