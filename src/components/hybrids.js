class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadHybrids()
    }
        initBindingsAndEventListeners(){
          this.hybridsContainer = document.getElementById('hybrids-container')
          this.newHybridName = document.getElementById()
          this.hybridForm = document.getElementById('new-hybrid-form')
          this.hybridForm.addEventListener('submit', this.createHybrid)
        }

        createHybrid(e) {
            e.preventDefault()
            console.log(this.hybridForm.value)
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