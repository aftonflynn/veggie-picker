//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.split(" ").join("-").toLowerCase()
  const url = 'https://openfarm.cc/api/v1/crops/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#icon').innerHTML = data.data.attributes.svg_icon
        document.querySelector('h2').innerHTML = data.data.attributes.name
        document.querySelector('#description').innerHTML = data.data.attributes.description
        document.querySelector('#sowing').innerHTML = `<span><b>Sowing Method:</b> ${data.data.attributes.sowing_method}</span>`
        document.querySelector('#sun').innerHTML = `<span><b>Requires:</b> ${data.data.attributes.sun_requirements}</span>`
        document.querySelector('.hidden').classList.remove('hidden')

      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}

