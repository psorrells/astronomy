//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('#getPic').addEventListener('click',getPOD)


function getPOD() {
    const year = document.querySelector('#year').value
    const month = document.querySelector('#month').value.padStart(2,'0')
    const day = document.querySelector('#day').value.padStart(2,'0')

    let media = document.querySelector('.media')

    fetch(`https://api.nasa.gov/planetary/apod?api_key=wHzsaYP8IpCpR6pWuWPl9LQYDhR30PUxfFnFg08V&date=${year}-${month}-${day}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            media.childNodes.forEach(child => child.remove())
            if (data.media_type === 'image') {
                img = document.createElement('img')
                img.src = data.url
                media.appendChild(img)
            } else if (data.media_type === 'video') {
                img = document.createElement('iframe')
                img.src = data.url
                media.appendChild(img)
            }
        })
        .catch(err => new Error(`failed fetch: ${err}`))
}