import React, { useState, useEffect, Fragment } from 'react'
import DB from '../../data.json'

const AllPages = () => {
	const [data, getData] = useState([]);

	useEffect(() => {
		getData(DB);
	}, []);


		
		console.log(data);
		return (
			<Fragment>
				<h2>all pages</h2>
			</Fragment>
		);
	}


export default AllPages
