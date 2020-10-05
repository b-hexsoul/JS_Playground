document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer(e) {
  // This instantiates it
  const xhr = new XMLHttpRequest();

  // Add true at the end for async
  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    // check if status is 200 which means OK.
    if (this.status === 200) {
      // console.log(this.responseText);

      // Need to parse as an object
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = "";

      // Need to loop through the parsed JSON object
      customers.forEach(function (customer) {
        // Use += to append onto the output
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
