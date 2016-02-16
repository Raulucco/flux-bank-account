import { Dispatcher } from 'flux';


class BankAccountDispatcher extends Dispatcher {

    dispatch(action = {}) {
        console.log('Dispatching', action);
        super.dispatch(action);
    }

}

export default new BankAccountDispatcher();
