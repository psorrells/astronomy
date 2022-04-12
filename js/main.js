//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

fetch('https://api.nasa.gov/planetary/apod?api_key=wHzsaYP8IpCpR6pWuWPl9LQYDhR30PUxfFnFg08V&start_date=2017-07-08&end_date=2017-07-10')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => new Error(`failed fetch: ${err}`))