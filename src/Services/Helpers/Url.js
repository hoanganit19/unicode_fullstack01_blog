import String from "./String";

const string = new String();

export default class Url{
    constructor(){
        this.home = '/';
        this.about = '/gioi-thieu'

        this.post = '/bai-viet/:slug-:id.html';
        this.category = '/chuyen-muc/:slug-:id.html';

        this.search = '/tim-kiem'

    }

    getPost = (id, title) => {
        let url = this.post;
        
        const slug = string.getSlug(title);
        url = url.replace(':id', id).replace(':slug', slug);
        return url;
    }

    getCategory = (id, name) => {
        let url = this.category;
        const slug = string.getSlug(name);
        url = url.replace(':id', id).replace(':slug', slug);
        return url;
    }
}