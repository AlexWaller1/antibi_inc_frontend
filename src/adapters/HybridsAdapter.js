// will talk to backend Api
class HybridsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/hybrids'
    }

    getHybrids() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createHybrid(value) {
        const hybrid = {
            name: value
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            name: JSON.stringify({ hybrid }),
        }).then(res => res.json())
    }
}