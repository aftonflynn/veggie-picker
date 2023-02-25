//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.split(" ").join("-")
  const url = 'https://openfarm.cc/api/v1/crops/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let commonNames = data.data.attributes.name;
        let capitalizedCommonNames = commonNames.split(' ').map(word => word.charAt(0).       toUpperCase() + word.slice(1)).join(' ');
        document.querySelector('h2').innerText = capitalizedCommonNames;

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

