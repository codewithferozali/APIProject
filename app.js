async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (!amount || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount';
        return;
    }

    const apiKey = 'f9baa4d6dc0b0cc73d7e82d8'; // Replace with your real API key
    const url = `https://v6.exchangerate-api.com/v6/f9baa4d6dc0b0cc73d7e82d8/latest/USD`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const conversionRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * conversionRate).toFixed(2);
            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = 'Error fetching conversion rate';
        }
    } catch (error) {
        resultDiv.textContent = 'Failed to fetch conversion data. Please try again.';
    }
}