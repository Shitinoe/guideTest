var code = window.location.href.split("?c=")[1]

function submit(e) {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let type = document.querySelector("#type").value


    let data = {
        name: name,
        type: type,
        cd: code
    }

    console.log(data)
    fetch("http://localhost:3000/update", {
            method: "put",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {

        })
}

document.querySelector('#submit').addEventListener('click', submit);