import React, { Fragment } from "react";

import HomeView from "../components/home";
import { Nav } from "../components/layout";

const Home = () => {
	return (
		<Fragment>
			<Nav />
			<HomeView />
		</Fragment>
	);
};

export default Home;
