 class Hybrids {
    constructor() {
        this.hybrids = []
        this.adapter = new HybridsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadHybrids()
    }
    initBindingsAndEventListeners() {
        this.hybridsContainer = document.getElementById('hybrids-container')
        this.name = document.querySelector('name')
        this.newHybridName = document.getElementById('new-hybrid-name')
        this.hybridForm = document.getElementById('new-hybrid-form')
        this.hybridForm.addEventListener('submit', this.createHybrid.bind(this))
        this.hybridsContainer.addEventListener('dblclick', this.handleHybridClick.bind(this))
        this.hybridsContainer.addEventListener('blur', this.updateHybrid.bind(this), true)
    }

    createHybrid(e) {
        e.preventDefault()
        const value = this.newHybridName.value

        this.adapter.createHybrid(value).then(hybrid => {
            this.hybrids.push(new Hybrid(hybrid))
            this.newHybridName.value = ''
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
            .then(hybrids => {
                hybrids.sort((a, b) => a.id - b.id).forEach(hybrid => this.hybrids.push(new Hybrid(hybrid)))
                // pushing new hybrid instance into hybrids array
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

