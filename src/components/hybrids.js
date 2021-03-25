 class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        // adapter property for Hybrids set to the Hybrids Adapter
        this.initBindingsAndEventListeners()
        this.fetchAndLoadHybrids()
    }
    initBindingsAndEventListeners() {
        this.hybridsContainer = document.getElementById('hybrids-container')
        this.biography = document.querySelector('biography')
        this.newHybridBiography = document.getElementById('new-hybrid-biography')
        this.hybridForm = document.getElementById('new-hybrid-form')
        this.hybridForm.addEventListener('submit', this.createHybrid.bind(this))
        this.hybridsContainer.addEventListener('dblclick', this.handleHybridClick.bind(this))
        this.hybridsContainer.addEventListener('blur', this.updateHybrid.bind(this), true)
        // this method is for making catching DOM elements more efficient
    }

    createHybrid(e) {
        e.preventDefault()
        const value = this.newHybridBiography.value

        this.adapter.createHybrid(value).then(hybrid => {
            this.hybrids.push(new Hybrid(hybrid))
            // hybrid pushed into hybrids array
            this.newHybridBiography.value = ''
            this.render()
        })
    }

    handleHybridClick(e) {
        this.toggleHybrid(e)
    }

    toggleHybrid(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
    }

    updateHybrid(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateHybrid(newValue, id)
    }

    fetchAndLoadHybrids() {
        this.adapter
            .getHybrids()
            // have access to this method through the adapter
            .then(hybrids => {
                console.log("hybrids", hybrids)
                hybrids.sort((a, b) => a.id - b.id).forEach(hybrid => this.hybrids.push(new Hybrid(hybrid)))
                // pushing new hybrid instance into hybrids array
                // use hybrid to create a new instance of hybrid as we iterate over the array
                console.log(this.hybrids)
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        console.log("in render")
        this.hybridsContainer.innerHTML = this.hybrids.map(hybrid => hybrid.renderLi()).join('')

    }

}

