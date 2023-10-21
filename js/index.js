const githubform = document.getElementById('githubform');
const search = document.getElementById('search');
const githubcontainer = document.getElementById ('githubcontainer');
const userlist = document.getElementById('userid');

fetch (`https://api.ithub.com/search/users?q=${username}`)
METHOD : "POST"
Accept : application/VideoEncoder.github.v3+json
.then (res => res.db.json)
.then(data => {
    displaygithubcontainer(data.items);
})

function displaygithubcontainer(users){
    githubcontainer.innerText= '';
}

githubform.addEventListener('submit', function(e){
    e.preventDefault();
    const username= search.value;
})

userDiv.addEventListener("click", (e)=>{
    e.preventDefault();
    fetch(`https://api.github.com/users/${data}/repos`)
    .then(res => res.json())  
    .then(data => data.forEach(element=> element.name))
    .catch(console.error())
})