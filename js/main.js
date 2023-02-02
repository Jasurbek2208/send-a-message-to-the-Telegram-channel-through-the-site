const CHAT_ID = '-1001680103791';
const TOKEN = '5833819728:AAH1dRS8nucWa5_Mh_CmoKUJOIx5uTsYg6I';
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendDocument`;
// const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// button
const btn = document.getElementById('form-btn');

// error
let error = document.createElement('span');
error.className = "error-text";

// success
let success = document.createElement('span');
success.className = "success-text";

// Form submit
document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const img = this.file.files[0];
    console.log(img);
    let message = `<b>${this.text.value}</b>`;
    btn.setAttribute("disabled", "true");
    
    try {
        await axios.post(API_URL, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            document: img,
            caption: message,
        }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        });
        success.textContent = "Message sent successfully!"
        error.classList.remove("On");
        success.classList.add("On");
        this.btn.appendChild(success);
    } catch (err) {
        error.textContent = err.response.data.description + "!";
        success.classList.remove("On");
        error.classList.add("On");
        this.text.classList.add("On");
        this.btn.appendChild(error);
    } finally {
        console.log("final logics");
        form.reset();
        btn.removeAttribute("disabled");
    }
});

// input change
document.querySelector('textarea').addEventListener('keyup', function () {
    btn.classList.remove("On");
    error.classList.remove("On");
    this.classList.remove("On");
})