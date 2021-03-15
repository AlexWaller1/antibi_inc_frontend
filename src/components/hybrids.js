class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadHybrids()
    }

    fetchAndLoadHybrids(){
        this.adapter
        .getHybrids()
        .then(hybrids => {
           hybrids.forEach(hybrid => this.hybrids.push(hybrid))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const hybridsContainer = document.getElementById('hybrids-container')
        hybridsContainer.innerHTML = 'Hybrids Here'

    }
}