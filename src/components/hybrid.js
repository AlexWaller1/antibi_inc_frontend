  class Hybrid {
    constructor(hybridJSON) {
        this.id = hybridJSON.id
        this.biography = hybridJSON.biography
        
        
    }

    renderLi() {
        return `<li data-Id=${this.name}</li>`
        // any instance of note can renderLi and will return this markup
    }
}


// will create instance of hybrid class
// enables us to have an array of hybrid objects