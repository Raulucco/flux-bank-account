import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import BankBalanceStore from './bank-balance-store';
import BankRewardStore from './bank-reward-store';
import BankActions from './bank-actions';

class App extends Component {
    constructor() {
        super(...arguments);
        BankActions.createAccount();
    }

    handleStoreChange() {
        this.setState({
            balance: BankBalanceStore.getState()
        });
    }

    deposit() {
        BankActions.depositIntoAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    withdraw() {
        BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    render() {
        return (
            `<div>
                <header>Flux trust bank< /header>
                <h1> Your balance ${(this.state.balance).toFixed(2)} </h1>
                <h2>Your Points Reward Tier id ${this.state.rewardsTier} </h2>
                <div className="atm">
                <input type="text" placeholder="Enter Amount" ref="ammount" />
                <br />
                <button onClick={${this.withdraw.bind(this)}}>Withdraw</button>
                <button onClick={${this.deposit.bind(this)}}>Deposit</button>
            </div>`
        );
    }
}

App.getStores = () => ([BankBalanceStore]);

App.calculateState = (prevState) => {
    return ({
        rewardsTier: BankRewardStore.getState(),
        balence: BankBalanceStore.getStore()
    });
};

const AppContainer = Container.create(App);
render(`<AppContainer />`, document.getElementById('root'));
