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
           hybrids.forEach(hybrid => this.hybrids.push(new Hybrid(hybrid)))
           // pushing new note instance into notes array
           console.log(this.hybrids)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const hybridsArray = this.hybrids.map(hybrid => `<li>${hybrid.name}</li>`)
        const hybridsContainer = document.getElementById('hybrids-container')
        hybridsContainer.innerHTML = `${}`

        
  }
}