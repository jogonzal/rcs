import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface GameDataState {
	isLoading: boolean;
	data: any;
}

//export interface GameData {
//	Opponnent: string;
//	Date: string;
//	GoalsInFavor: number;
//	GoalsAgainst: number;
//	Notes: string;
//	PlayerStats: string;
//}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestGameDataAction {
	type: 'REQUEST_GAME_DATA';
}

interface ReceiveGameDataAction {
	type: 'RECEIVE_GAME_DATA';
	data: any;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestGameDataAction | ReceiveGameDataAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
	requestGameData: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		let fetchTask = fetch(`api/SampleData/GameData`)
			.then(response => response.json() as Promise<any>)
			.then(data => {
				dispatch({ type: 'RECEIVE_GAME_DATA', data: data });
			});

		addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
		dispatch({ type: 'REQUEST_GAME_DATA' });
	}
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: GameDataState = { data: undefined, isLoading: false };

export const reducer: Reducer<GameDataState> = (state: GameDataState, incomingAction: Action) => {
	const action = incomingAction as KnownAction;
	switch (action.type) {
		case 'REQUEST_GAME_DATA':
			return {
				data: state.data,
				isLoading: true
			};
		case 'RECEIVE_GAME_DATA':
			return {
				data: action.data,
				isLoading: false
			};
		default:
			// The following line guarantees that every action in the KnownAction union has been covered by a case above
			const exhaustiveCheck: never = action;
	}

	return state || unloadedState;
};
