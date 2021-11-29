// let dropZone = document.querySelector(".dropZone")
// let tbody = document.querySelector("tbody")
// let table = document.querySelector("table")

// dropZone.addEventListener("drop", (e) => {
//     e.preventDefault();
//     table.classList.remove("d-none")
//     let files = Array.from(e.dataTransfer.files)
//     console.log(files);
//     files.forEach(file => {
//         showImage(file)
//     })
// })
// dropZone.addEventListener("dragover", (e) => {
//     e.preventDefault();
// })

// function showImage(file) {
//     let fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.addEventListener("loadend", () => {
//         let row = document.createElement("tr")
//         let tdImage = document.createElement("td")
//         let tdSize = document.createElement("td")
//         let tdType = document.createElement("td")
//         let image = document.createElement("img")
//         let btn = document.createElement("button")
//         let btntd = document.createElement("td")
//         btn.className = "btn btn-outline-danger"
//         btn.innerText = "delete"


//         image.src = fileReader.result
//         image.style.width = "70px"
//         tdSize.innerHTML = file.size / 1024 + "Kb"
//         tdType.innerHTML = file.type
//         tdImage.append(image)
//         btntd.append(btn)
//         row.append(tdImage, tdSize, tdType, btntd)
//         tbody.append(row)
//         btn.onclick = function() {
//             let conf = confirm("are you sure?")
//             if (conf) {

//                 row.remove()

//             }
//             let children = Array.from(tbody.children)
//             if (children.length == 0) {
//                 table.className = "d-none"
//             }

//         }





//     })
// }

// let buttons = document.querySelectorAll(".btn")

// buttons.forEach(btn => {
//     btn.onclick = function() {
//         btn.parentElement.parentElement.remove();
//         for (let i = 1; i <= tbody.children.length; i++) {
//             console.log(i);

//         }
//     }

// })

// for (let i = 0; i < tbody.children.length; i++) {
//     // console.log(tbody.children[i]);

// }