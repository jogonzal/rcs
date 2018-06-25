import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import RawData from './components/RawData';
import TopScorers from './components/TopScorers';

export const routes = <Layout>
	<Route exact path='/' component={Home} />
	<Route path='/counter' component={Counter} />
	<Route path='/RawData' component={RawData} />
	<Route path='/TopScorers' component={TopScorers} />
	<Route path='/fetchdata/:startDateIndex?' component={FetchData} />
</Layout>;
