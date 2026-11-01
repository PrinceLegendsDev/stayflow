export function submitForm () {

    const form = document.querySelector(".contact-form");

    if(!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "260775544529";

        const text = `Hello my name is ${name}.
        email: ${email}
        message: ${message}`;

        const url =`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    })
}