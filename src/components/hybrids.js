class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadHybrids()

        initBindingsAndEventListeners(){
          this.hybridsContainer = document.getElementById('hybrids-container')
          this.hybridForm = document.getElementById('new-hybrid-form')
        }
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
        this.hybridsContainer.innerHTML = this.hybrids.map(hybrid => hybrid.renderLi()).join('')

        }
}