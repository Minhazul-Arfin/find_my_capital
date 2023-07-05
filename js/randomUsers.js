const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data))
}


const displayData = data =>{
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');


    name.innerText = data.results[0].name.title + ". " + data.results[0].name.first + " " + data.results[0].name.last;

    gender.innerText = data.results[0].gender;
    console.log(data.results[0].picture.large)
}

loadUser()