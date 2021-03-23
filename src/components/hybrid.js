  class Hybrid {
    constructor(hybridJSON) {
        this.id = hybridJSON.id
        this.name = hybridJSON.name
        this.species = hybridJSON.species
        this.personality = hybridJSON.personality
        this.biography = hybridJSON.biography
        this.image = hybridJSON.image
        
    }

    renderLi() {
        return `<li data-Id=${this.name}</li>`
        
    }
}


// will create instance of hybrid class
// enables us to have an array of hybrid objects