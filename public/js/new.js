function submit(e) {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let type = document.querySelector("#type").value


    let data = {
        name: name,
        type: type,
    }

    console.log(data)
    fetch("http://localhost:3000/new", {
            method: "post",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {

        })
}

document.querySelector('#submit').addEventListener('click', submit);