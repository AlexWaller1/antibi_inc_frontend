// will talk to backend Api
// kind of similar to the controller in a rails app
// this is where hybrids are transferred back and forth
class HybridsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/hybrids'
    }

    getHybrids() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
     // get request to base URL
     // once that request is completed, then objects will be parsed through JSON
     // since it's a class it needs a constructor
    createHybrid(value) {
        const hybrid = {
            biography: value
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ hybrid }),
        }).then(res => res.json())
    }
    // post request
    updateHybrid(value, id) {
        const hybrid = {
            biography: value,
        }

        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // extra instructions to server, establishing protocols
            },
            body: JSON.stringify({ hybrid }),
        }).then(res => res.json())
    }
    // patch request
    
    getPlaces(id) {
        const url = `${this.baseUrl}/${id}/places`
        return fetch(url).then(res => res.json()
        )
    }
     // get request to base URL
     // once that request is completed, then objects will be parsed through JSON
     // since it's a class it needs a constructor
    createPlace(value) {
        const place = {
            report: value
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ place }),
        }).then(res => res.json())
    }
    // post request
    updatePlace(value, id) {
        const place = {
            report: value,
        }

        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // extra instructions to server, establishing protocols
            },
            body: JSON.stringify({ place }),
        }).then(res => res.json())
    }
}

// cause its asynchronous we are given a promise, when its ready it will return data
// and then we can do something with it
// like our boss standing over us asking if we've completed our task.