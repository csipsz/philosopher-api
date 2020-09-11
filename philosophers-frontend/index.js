document.addEventListener("click", function(){
    alert("hi")
})

let branchDiv = () => document.querySelector("#branches")

function loadBranches(){
    fetch("http://localhost:3000/branches")
    .then(resp => resp.json())
    .then(data => displayBranches(data))
}

loadBranches()

function displayBranches(branches){
    branches.forEach(branch => {
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const list = document.createElement("ul")
        h2.textContent = branch.name 
        p.textContent = branch.content 
        branch.philosophers.forEach(philosopher => {
            const li = document.createElement('li')
            li.textContent = philosopher.name 
            list.appendChild(li)
        })
        branchDiv().appendChild(h2)
        branchDiv().appendChild(p)
        branchDiv().appendChild(list)

    });
}