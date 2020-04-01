import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
		<div className="actions">
			<div className="actions__container actions__container--spaced">
				<Link to="/">Home</Link>
				<Link to="/create">Create</Link>
			</div>
		</div>
	);
}

export default Navigation
