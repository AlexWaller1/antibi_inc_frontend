// will talk to backend Api
// kind of similar to the controller in a rails app
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
            },
            body: JSON.stringify({ hybrid }),
        }).then(res => res.json())
    }
    // patch request
}