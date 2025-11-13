document.getElementById("shippingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(weight) || isNaN(distance) || weight <= 0 || distance <= 0) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    const ratePerKm = 0.05; // ₹ per km per kg
    const baseCharge = 50;  // ₹ base shipping cost

    const totalCost = baseCharge + (weight * distance * ratePerKm);
    const estimatedDays = Math.ceil(distance / 500);

    document.getElementById("result").innerHTML = `
        💰 Estimated Shipping Cost: ₹${totalCost.toFixed(2)} <br>
        🚚 Estimated Delivery Time: ${estimatedDays} day(s)
    `;
});
