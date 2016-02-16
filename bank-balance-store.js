import AppDispatcher from './dispatcher';
import bankConstants from './constants';
import { ReduceStore } from 'flux/utils';

class BankBalanceStore extends ReduceStore {

    getInitialState() {
        return 0;
    }

    reduce(action) {
        switch (action.type) {
            case bankConstants.CREATED_ACCOUNT:

                return 0;
                break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
                return state + action.ammount;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
                return state - action.ammount;
            default:
                return state;
        }
    }
}

export default BankBalanceStore;
