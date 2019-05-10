/*function loadTable() {
    let name = "Manolo"
    let cd = "1"
    let type = "Product Owenr"

    let table = document.querySelector(".tableT")
    for (let index = 0; index < 15; index++) {
        table.innerHTML += `<div class="lineT">
            <div>${name}</div>
            <div>${type}</div>
            <div>
                <a href="edit.html?c=${cd}" >
                    <svg xmlns = "http://www.w3.org/2000/svg"
                    viewBox = "0 0 576 512" >
                        <path
                    d = "M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z" / >
                        </svg>
                </a>
                
            </div>
            <div>
                <a onclick = "deleteItem(${cd})" >
                    <svg xmlns = "http://www.w3.org/2000/svg"
                    viewBox = "0 0 448 512" >
                        <path
                    d = "M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z" / >
                        </svg>
                </a>
            </div>
        </div>`
    }
}

function deleteItem(cd) {
    console.log(cd)
    fetch("http://localhost:3000/delete" + cd)
        .then(response => response.json())
        .then(response => {

        })
}
loadTable()*/

const display = (".line");
const form = ("#form");
const contributorUserInput = ("#contributeUserInput");

const getContributors = ()=>{
    fetch('/', {method : "get"}).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        displayContributors(data);
    });
}

getContributors();

const resetContributeInput = ()=>{
    contributorUserInput.val('');
}

const buildIDS = (contributor)=>{
    return{
        editID : "edit_" + contributor._id,
        deleteID : "delete_" + contributor._id,
        listItemID : "listItem_" + contributor._id,
        contributorID : "contributor_" + contributor._id,
    }
}

const buildTemplate = (contributor,ids)=>{
    return `<li class="" id"${ids.listItemID}">
                <div class="" id="${ids.contributorID}">${contributor.contributor}</div>
                <div class=""></div>
                <div class="">
                    <button type="button" id="${ids.editID}">Edit</button>
                    <button type="button" id="${ids.deleteID}">delete</button>
                </div>
            </li>`
}

const displayContributors = (data)=>{
    data.forEach((todo)=>{
        let ids = buildIDS(contributor);
        display.append(buildTemplate(contributor,ids));
        editContributor(contributor,ids.todoID,ids.editID);
        deleteContributor(contributor,ids.listItemID,ids.deleteID)
    });
}