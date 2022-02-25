import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { requestRobots, setSearchField } from '../actions';

function App({props})  {
	// const [robots, setRobots] = useState([]);
	const robotsState = useSelector(state => state.requestRobots);
	const { robots, isPending, error } = robotsState;
	const searchField = useSelector(state => state.searchRobots.searchField);
	const dispatch = useDispatch();
	const  onSearchChange = event => dispatch(setSearchField(event.target.value));
	
	useEffect(() => {
		dispatch(requestRobots());
	}, [dispatch]);

	const filteredRobots = robots.filter(robot => {
	return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

	let renderRobots;
	if(isPending) {
		renderRobots = <h1>Loading</h1>;
	} else if (error) {
		renderRobots = (
			<div>
				<h1>There was an error loading the robots.</h1>
				<p>Please refresh the page to try again.</p>
			</div>
		);
	} else {
		renderRobots = (
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
	return renderRobots
}

export default connect()(App);