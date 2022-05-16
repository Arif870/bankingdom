document
  .getElementById("depositebutton")
  .addEventListener("click", function () {
    //   deposite section
    const depositeInput = document.getElementById("depositeinput");
    const depositeInputValue = depositeInput.value;

    if (depositeInputValue === "") {
      alert("Deposite field must not be empty !");
    } else {
      const depositeAmount = document.getElementById("depositeamount");
      const depositeAmountText = depositeAmount.innerText;

      const depositAmountCalculation =
        parseFloat(depositeInputValue) + parseFloat(depositeAmountText);
      depositeAmount.innerText = depositAmountCalculation;

      //   clear input field
      depositeInput.value = "";

      // total balance section

      const totalBalance = document.getElementById("total_balance");
      const totalBalanceText = totalBalance.innerText;
      totalBalance.innerText =
        parseFloat(depositeInputValue) + parseFloat(totalBalanceText);
    }
  });

//   withdraw section
document
  .getElementById("Withdrawbutton")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdrawinput");
    const withdrawInputValue = withdrawInput.value;

    if (withdrawInputValue === "") {
      alert("Withdraw field must not be empty!");
    } else {
      const withdrawAmount = document.getElementById("withdrawamount");
      const withdrawAmountText = withdrawAmount.innerText;

      const withdrawAmountCalculation =
        parseFloat(withdrawInputValue) + parseFloat(withdrawAmountText);

      withdrawAmount.innerText = withdrawAmountCalculation;

      // total balance section

      const totalBalance = document.getElementById("total_balance");
      const totalBalanceText = totalBalance.innerText;

      totalBalance.innerText =
        parseFloat(totalBalanceText) - parseFloat(withdrawInputValue);

      withdrawInput.value = "";
    }
  });
