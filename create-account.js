function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN. Sike that's the wrong numbaa!";
      return `$${amount}`;
    },
    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      amount += newAmount;
      return `Succesfully deposited $${newAmount}. Your Current balance is ${amount}. Damn son you broke broke!`;
    },
    withdraw(inputPin, withdrawalAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      if (withdrawalAmount > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      amount -= withdrawalAmount;
      return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}. Damn son you still broke broke!`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
