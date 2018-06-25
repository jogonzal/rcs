import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as GameData from '../store/PlayerData';

// At runtime, Redux will merge together...
type GameDataStateProps =
	GameData.GameDataState        // ... state we've requested from the Redux store
	& typeof GameData.actionCreators      // ... plus action creators we've requested
	& RouteComponentProps<{}>; // ... plus incoming routing parameters

class RawData extends React.Component<GameDataStateProps, {}> {
	componentWillMount() {
		this.props.requestGameData();
	}

	componentWillReceiveProps(nextProps: GameDataStateProps) {
		this.props.requestGameData();
	}

	public render() {
		return <div>
			<h1>Raw data</h1>
			<p>Not sure why you'd want this, but here it is:</p>
			{this.renderGameTable()}
		</div>;
	}

	private renderGameTable() {
		return <pre>{JSON.stringify(this.props.data, undefined, 2)}</pre>;
	}
}

export default connect(
	(state: ApplicationState) => state.gameData, // Selects which state properties are merged into the component's props
	GameData.actionCreators                 // Selects which action creators are merged into the component's props
)(RawData) as typeof RawData;
