  class Hybrid {
    constructor(hybridJSON) {
        this.id = hybridJSON.id
        this.biography = hybridJSON.biography
        
    }

    renderLi() {
        return `<li data-Id=${this.id}>${this.biography}<span class="places">View</span></li>`
        // any instance of hybrid can renderLi and will return this markup
    }
}


// will create instance of hybrid class
// enables us to have an array of hybrid objects