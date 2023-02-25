//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.split(" ").join("-")
  const url = 'https://openfarm.cc/api/v1/crops/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#icon').innerHTML = data.data.attributes.svg_icon
        document.querySelector('#sowing').innerHTML = 'Sowing Method: ' + data.data.attributes.sowing_method
        document.querySelector('#sun').innerHTML = 'Requires: ' + data.data.attributes.sun_requirements

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

