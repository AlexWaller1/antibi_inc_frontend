// will talk to backend Api
class HybridsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/hybrids'
    }

    getHybrids() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}