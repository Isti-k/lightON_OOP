import JatekTer from "./jatekTer.js";

class Allapot{
    #allapotLISTA = [false, true,false, true,true, false,true,false,true];
    constructor(){
        new JatekTer(this.#allapotLISTA);
        $(window).on("kapcsolas", (event)=>{
            //console.log(event.detail);
            let id = event.detail;
            // itt változtatjuk meg a program állapotát

            this.#szomszedokValtoztatasa(id);
            new JatekTer(this.#allapotLISTA);
    });
    }

    #szomszedokValtoztatasa(id){
        this.#allapotLISTA[id] = !this.#allapotLISTA[id];
        if (id % 3 !== 0){
            this.#allapotLISTA[id -1] = !this.#allapotLISTA[id -1];
        }
        if (id % 3 !== 2){
            this.#allapotLISTA[id +1] = !this.#allapotLISTA[id +1];
        }
        if (id > 2){
            this.#allapotLISTA[id -3] = !this.#allapotLISTA[id -3];
        }
        if (id < 6){
            this.#allapotLISTA[id +3] = !this.#allapotLISTA[id +3];
        }
    }

    #lekapcsoltakSzama(){

    }

    #kezdetiAllapot(){
        
    }
}

new Allapot();
