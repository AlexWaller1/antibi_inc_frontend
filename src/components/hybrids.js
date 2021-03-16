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
        const hybridsContainer = document.getElementById('hybrids-container')
        hybridsContainer.innerHTML = 'Hybrids Here'
        
  }
}