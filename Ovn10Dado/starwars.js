

function getApi(){
    fetch('https://www.swapi.tech/api/people/?name=lll')
        .then(response => response.json())
        .then(data => 
            
            
            
            console.log(data.result[0].properties.height))
        .catch(err => console.log(err));
}

document.getElementById("button").addEventListener("click", getApi);

