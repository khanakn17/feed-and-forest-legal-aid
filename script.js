// =========================
// FEED & FOREST LEGAL AID
// script.js
// =========================

// Custom Razorpay Payment




if (payBtn) {

  payBtn.addEventListener("click", async function () {

    const amount = document.getElementById("amount").value;

    if (!amount || amount < 10) {
      alert("Please enter minimum ₹10");
      return;
    }

    try {

      const response = await fetch("https://feed-and-forest-legal-aid.onrender.com/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: amount
        })
      });

      const data = await response.json();

      if (!data.success) {
        alert("Unable to create payment.");
        return;
      }

      const options = {

        key: data.key,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "Feed And Forest Legal Aid",

        description: "Donation",

        order_id: data.order.id,

        handler: function (response) {

          alert("❤️ Thank you for your donation!");

          console.log(response);

        },

        theme: {
          color: "#2E7D32"
        }

      };

      const rzp = new Razorpay(options);

      rzp.open();

    } catch (err) {

      console.log(err);

      alert("Server Error");

    }

  });

}