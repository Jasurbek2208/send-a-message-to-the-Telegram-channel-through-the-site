const CHAT_ID = '-1001680103791';
const TOKEN = '5833819728:AAH1dRS8nucWa5_Mh_CmoKUJOIx5uTsYg6I';
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// 
const btn = document.getElementById('form-btn');

document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    let message = `<b>${this.text.value}</b>`;

    try {
        btn.setAttribute("disabled", "true");

        await axios.post(API_URL, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        });
        console.log("ishladi !", this.text.value);
    } catch (error) {
        console.log(error);
    } 
});
