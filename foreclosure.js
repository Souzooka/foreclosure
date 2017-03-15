'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  var account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaltsToForeclose: 5,
    foreclosed: false
  };

  function missPayment() {
    account.defaulted++;
    if (account.defaulted >= account.defaltsToForeclose) {
      account.foreclosed = true;
    }
  }

  var getBalance = function() {
    return account.balance;
  };

  var receivePayment = function(amount) {
    if (amount < account.monthlyPayment) {
      missPayment();
    }
    account.balance -= amount;
  };

  var getMonthlyPayment = function() {
    return account.monthlyPayment;
  };

  var isForeclosed = function() {
    return account.foreclosed;
  };

  return {
    getBalance,
    receivePayment,
    getMonthlyPayment,
    isForeclosed
  };
}

function borrower(loan) {
  var account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan
  };

}