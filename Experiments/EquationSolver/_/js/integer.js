export default class AddInteger{
    constructor(value){
        this.value = value;
        p.setup(value);
    }

    p = createjs.extend(Integer, createjs.Container);

    p.setup = () => {
        
    }


}