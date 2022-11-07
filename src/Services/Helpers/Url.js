export default class Url{
    constructor(){
        this.home = '/';
        this.about = '/gioi-thieu'

        this.post = '/bai-viet/:id';
        this.category = '/chuyen-muc/:id';

    }

    getPost = (id) => {
        let url = this.post;
        url = url.replace(':id', id);
        return url;
    }

    getCategory = (id) => {
        let url = this.category;
        url = url.replace(':id', id);
        return url;
    }
}