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
    const API_URL = `https://api.telegram.org/bot${this.bot_token.value}/`;
    e.preventDefault();
    btn.setAttribute("disabled", "true");

    const img = this.file.files[0];
    let message = `<b>${this.text.value}</b>`;
    let CURRENT_API_URL = API_URL + (img === undefined ? "sendMessage" : "sendDocument");

    try {
        await axios.post(CURRENT_API_URL, {
            chat_id: this.chat_id.value,
            parse_mode: "html",
            document: img,
            text: message,
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
        error.textContent = err.response.data.description === "Not Found" ? "Invalid CHAT ID or TOKEN !" : err.response.data.description + "!";

        success.classList.remove("On");
        error.classList.add("On");

        this.text.classList.add("On");
        this.btn.appendChild(error);
    } finally {
        form.text.value = "";
        form.file.value = "";
        btn.removeAttribute("disabled");
    }
});

// input change
document.querySelector('textarea').addEventListener('keyup', function () {
    btn.classList.remove("On");
    error.classList.remove("On");
    this.classList.remove("On");
})

// Get channel posts
// document.querySelector('#btn-get').addEventListener('click', async function () {
//     console.log("kirdi !");
//     try {
//         const res = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates?chat_id=1680103791`, {
//             method: "GET",
//             limit: 100,
//         }, {
//             headers: {
//                 'accept': 'application/json',
//                 "Content-Type": 'application/json'
//             }
//         });
//         const data = (await res.json()).result;
//         console.log(data);
//         renderPosts(data);
//     } catch (error) {
//         console.log(error);
//     }
// })


// render posts to html
// function renderPosts(data) {
//     data?.forEach((post) => {
//         console.log(post.channel_post.text || post.channel_post.caption);

//         document.getElementById("template").innerHTML += `

//             <div class="post">
//                 ${post.channel_post.photo ? `<img src=${post.channel_post.photo[0].file_name} alt=${post.channel_post.caption}>` : `<div class="no-img"></div>`}
                
//                 <div class="post__body">
//                     <p>${post.channel_post.text || post.channel_post.caption || "no comment"}</p>
//                 </div>
                
//             </div>

//         `;
//     })
// }
