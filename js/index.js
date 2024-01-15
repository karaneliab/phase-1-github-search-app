document.addEventListener('DOMContentLoaded', function (){
 document.querySelector('#github-form').addEventListener('submit', (e) =>{
  e.preventDefault();
    const searchvalue = e.target.search.value;
    searchId(searchvalue)
})  
    // console.log(input.value);
//    fetchData();
  })

  function searchId(searchvalue){
     return fetch (`https://api.github.com/users/${searchvalue}`)
     .then(res => res.json())
     .then(users => {
      Displayuser(users)
      Displayrepos(users.repos_url)
     })
  }
  function Displayuser(users){
    let list = document.querySelector('ul#user-list')
    let card = document.createElement('div')
    card.innerHTML = `
    <h2> Name: ${users.name}</h2>
    <img src = "${users.avatar_url}"/>
    <p>Profile Link:<a href="${users.html_url}">See Profile</a></p>
    

    `
      list.appendChild(card);
  }
function Displayrepos(repos_url){
  fetch (repos_url)
  .then (res => res.json())
  .then (data => {
    let lists = document.querySelector('#repos-list')
    let reposcard = document.createElement('div')
    reposcard.innerHTML=` <strong>Repository Names:</strong><br>`

    data.forEach(repo  => {
      let reposlist = document.createElement('li')
      reposlist.textContent = repo.name
      reposcard.appendChild(reposlist)
    });
    lists.appendChild(reposcard)
  })
}

