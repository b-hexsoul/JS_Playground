// UI Vars
const amountEl = document.getElementById("amount");
const interestEl = document.getElementById("interest");
const yearsEl = document.getElementById("years");
const monthlyPaymentEl = document.getElementById("monthly-payment");
const totalPaymentEl = document.getElementById("total-payment");
const totalInterestEl = document.getElementById("total-interest");

// Listen for submit
document.getElementById("loan-form").addEventListener("submit", calculateResults);

// Calculate Results
function calculateResults(e) {
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPaymentEl.value = monthly.toFixed(2);
    totalPaymentEl.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestEl.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    console.log("Please Check numbers");
  }
  e.preventDefault();
}
