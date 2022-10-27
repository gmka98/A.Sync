document.querySelector('button').addEventListener('click', function()){
const api ="https://github.com/becodeorg/BXL-Johnson-09/blob/main/2.The-Hill/Frontend-sprint/3.Async-Fetch/becode.json"

fetch(api)
.then(reponse=> 'becode.json')
.then(text => {
    console.log(json)
});

}

<button id="btn" type="button">becode</button>