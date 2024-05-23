export default class lampa{
    #allapot;
    #id;
    #divElem;
    #szuloElem;
    constructor(allapot, id, szuloElem){
        this.#allapot=allapot;
        this.#id=id;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        this.#divElem=this.#szuloElem.children("div:last-child");
        this.#szinBeallit();
        this.#esemenyKezelo();

    }

    #megjelenit(){
        let txt=`
                <div class="elem">
                    
                </div>
            `;
        this.#szuloElem.append(txt);
    }

    #esemenyKezelo(){
        this.#divElem.on("click", ()=>{
            this.#kattintasTrigger("kapcsolas");
        });
    }

    #szinBeallit(){
        // Az elem állapotától függően hozzáadja a .felkapcs classt
        if(this.#allapot){
            this.#divElem.addClass("felkapcs")
        }
    }

    #kattintasTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev,{detail:this.#id});
        window.dispatchEvent(e);
    }

}