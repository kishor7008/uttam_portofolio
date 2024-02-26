const contactFunc = async () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message1").value;

    if (!name || !email || !subject || !message) {
        alert("All fields are required !! ")
        return;
    }
    try {
        fetch("https://backend-portofolio-isok.onrender.com/contact", {
            method: "POST",
            headers: {
                "COntent-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status == true) {
                    alert(data.message)
                    document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("subject").value = ""
                    document.getElementById("message").value = ""
                } else {
                    alert(data.message)
                }
            })
    } catch (error) {
        alert(error.message)
    }
};


const abc = () => {
    fetch("https://backend-portofolio-isok.onrender.com").then(res => res.data).then(data => console.log(data)).catch(err => console.log(err))
}

abc()