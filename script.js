const body = document.getElementsByTagName('body')
const btn = document.createElement('button')

fetch('becode.json') // No need to put fetch()with url because it's a local server
.then(response => response.json())
.then()
  
    function createListElem() {
        const ul = document.createElement('ul')
        document.body.appendchild('ul')
        const liste1 = document.createElement('li');
        const liste2 = document.createElement('li');
        const liste3 = document.createElement('li');
        const liste4 = document.createElement('li');

        ul.appendChild(liste1)
        ul.appendChild(liste2)
        ul.appendChild(liste3)
        ul.appendChild(liste4)
    
    }

    btn.addEventlistener('click', createListElem){

    };


   const bouton = document.createElement('button')
   const becode = fetch('https://agify.io/')
   
   bouton.addEventListener('click',function ){
    fetch(becode)
    .then (response => becode.json() )
    .then (becode.json)
    }
    catch(error => {
        console.log('There was an error!', error)
    })








    
    

