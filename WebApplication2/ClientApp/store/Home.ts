import { Action, Reducer } from 'redux';

export interface showAlert {
    show: boolean;
}

interface Show { type: 'SHOW-ALERT' }
interface Hide { type: 'HIDE-ALERT' }

type KnownAction = Show | Hide;

export const actionCreators = {
    showAlert: () => <Show>{ type: 'SHOW-ALERT' },
    hideAlert: () => <Hide>{type: 'HIDE-ALERT' }
};

export const reducer: Reducer<showAlert> = (state: showAlert, action: KnownAction) => {
    switch (action.type) {
        case 'SHOW-ALERT':
            return { show: true };
        case 'HIDE-ALERT':
            return { show: false };
        default:
            
        // The following line guarantees that every action in the KnownAction union has been covered by a case above
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { show: false };
};
