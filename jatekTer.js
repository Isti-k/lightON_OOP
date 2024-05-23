import lampa from "./lampa.js";

export default class JatekTer{
    #allapotLISTA=[];
    constructor(allapotLISTA){
        this.#allapotLISTA=allapotLISTA;
        let szuloElem = $(".jatekter");
        szuloElem.empty();
        this.#allapotLISTA.forEach((element,index)=>{
            new lampa(element,index, $(".jatekter"));
        });
    }
}


