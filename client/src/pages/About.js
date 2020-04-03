import React, { Fragment } from "react";

import { Nav } from "../components/layout";

const About = () => {
	return (
		<Fragment>
			<Nav />
			<div className="container">
				<h3 style={{ marginTop: 40 }}>About</h3>
				<p>
					Author:{" "}
					<strong style={{ fontStyle: "italic" }}>Darryl Mangibin</strong>
				</p>
				<p>Version: 1.0.1</p>
			</div>
		</Fragment>
	);
};

export default About;
