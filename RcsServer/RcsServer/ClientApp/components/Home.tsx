import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
	public render() {
		return <div>
			<h1>Welcome to RCS!</h1>
			<p>A few useful links to get started:</p>
			<ul>
				<li><Link to={'/topscorers'}>Top scores/assists</Link></li>
				<li><Link to={'/rawdata'}>Raw data</Link></li>
				<li><a href="https://apps.dashplatform.com/beta/dash/index.php?Action=Team/index&teamid=133124&company=arenasports">Spring 2018 game calendar</a></li>
			</ul>
		</div>;
	}
}
