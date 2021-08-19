const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dublin.json?access_token=pk.eyJ1IjoiZmVsaWNpYXJvbWFuMiIsImEiOiJja3JnbWxzaDgwcDI1MnRvMGtud2o1a2duIn0.mwKTuqSAuHRCXfUGg_nXDg&limit=1'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()