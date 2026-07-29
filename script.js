function checkPin() {

    const secretPin = "5/04/2024";
    const pin = document.getElementById("pin").value;

    if (pin === secretPin) {
        window.location.href = "in.html";
    } else {
        document.getElementById("error").textContent =
            "❌ Wrong Date! Shakthi ❤️";
    }
}