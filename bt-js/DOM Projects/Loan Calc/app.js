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
  hideLoadingResults();

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

    loadingTime();
  } else {
    showError("Please check you numbers");
    hideLoadingResults();
  }
  e.preventDefault();
}

// Show Error
function showError(error) {
  // Create a div
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add Class
  errorDiv.className = "alert alert-danger";

  // Create text node
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
  document.querySelector(".alert").remove();
}

// Brandon's Initial code for loading gif and results popup
function hideLoadingResults() {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";
}

function loadingTime() {
  let time = 0;
  let timer = setInterval(function () {
    time++;
    document.querySelector("#loading").style.display = "block";
    if (time === 3) {
      clearInterval(timer);
      document.querySelector("#loading").style.display = "none";
      document.querySelector("#results").style.display = "block";
    }
  }, 1000);
}
