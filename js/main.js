//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('#getPic').addEventListener('click',getPOD)


function getPOD() {
    const year = document.querySelector('#year').value
    const month = document.querySelector('#month').value.padStart(2,'0')
    const day = document.querySelector('#day').value.padStart(2,'0')

    fetch(`https://api.nasa.gov/planetary/apod?api_key=wHzsaYP8IpCpR6pWuWPl9LQYDhR30PUxfFnFg08V&date=${year}-${month}-${day}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => new Error(`failed fetch: ${err}`))
}