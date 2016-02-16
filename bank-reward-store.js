import AppDispatcher from './dispatcher';
import BankBalanceStore from './bank-balance-store';
import bankConstants from './constants';
import { ReduceStore } from 'flux/utils';

class BankRewardStore extends ReduceStore {

    getInitialState() {
        return 'Basic';
    }

    reduce(state, action) {
        this.getDispatcher().waitFor([
            BankBalanceStore.getDispatchToken()
        ]);

        if (action.type === bankConstants.DEPOSITED_INTO_ACCOUNT ||
            action.type === bankConstants.WITHDREW_FROM_ACCOUNT ) {
            let balance = BankBalanceStore.getState();
            if (balance < 50000) {
                return 'Basic';
            } else if (balance < 10000) {
                return 'Silver';
            } else if (balance < 50000) {
                return 'Gold';
            } else {
                return 'Platinum';
            }
        }
        return state;
    }

}

export default new BankRewardStore(AppDispatcher);