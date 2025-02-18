// PROGRAMACION ORIENTADA A OBJETOS - POO

// clases -> objetos
// clase: jugadorFutbol -> objeto: Messi CR7
// const paolo = new jugadorFutbol();
// paolo.goles  paolo.edad   paolo.equipo

//EJEMPLO:

// Objetos ->
interface IMenu {
    name: string;
    url: string;
}
// interface IPage {
//     title: string;
//     menu: IMenu[];
//     loadMenu: any;
// }

// const pageHome: IPage = {
//     title: "",
//     menu: [],
//     loadMenu: () => {
//         const data = [{name: "contactos", url: "/contactos"}];
//         return data;
//     }
// }

// pageHome.title = "Home";
// pageHome.menu = pageHome.loadMenu();

//class ->
class PageClass {
    //atributos
    private title: string = "";
    menu: IMenu[] = [];
    //constructor
    constructor(title: string) {
        console.log("estoy en el constructor");        
        //this: apunta a los atributos y metodos dentro de una clase
        this.title = title;
        this.loadMenu();
    }
    //metodos
    public vista(){} //public es opcional.
    pedir(){}        //Por defecto es "public"
    private loadMenu(){
        console.log("load Menu");
    }
    getTitle(){
        return this.title;
    }
    setTitle(name: string){
        if(name){
            this.title = name;
        }
    }
}

const HomePage = new PageClass("Home");
const FooterPage = new PageClass("Footer");

HomePage.setTitle("HOME");

console.log("HomePage.title->", HomePage.getTitle());
console.log("FooterPage.title->", FooterPage.getTitle());

