class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadHybrids()
    }

    fetchAndLoadHybrids(){
        this.adapter.getHybrids().then(hybrids => {
            console.log(hybrids)
        })
    }
}