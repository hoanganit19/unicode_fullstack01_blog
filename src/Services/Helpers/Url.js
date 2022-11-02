export default class Url{
    constructor(){
        this.home = '/';
        this.about = '/gioi-thieu'
        this.product = '/san-pham/:id';
        this.post = '/tin-tuc/:id';
    }

    getProduct = (id) => {
        let url = this.product;
        url = url.replace(':id', id);
        return url;
    }

    getPost = (id) => {
        let url = this.post;
        url = url.replace(':id', id);
        return url;
    }
}