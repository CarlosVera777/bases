// PROGRAMACION ORIENTADA A OBJETOS - POO
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
var PageClass = /** @class */ (function () {
    //constructor
    function PageClass(title) {
        //atributos
        this.title = "";
        this.menu = [];
        console.log("estoy en el constructor");
        //this: apunta a los atributos y metodos dentro de una clase
        this.title = title;
        this.loadMenu();
    }
    //metodos
    PageClass.prototype.vista = function () { }; //public es opcional.
    PageClass.prototype.pedir = function () { }; //Por defecto es "public"
    PageClass.prototype.loadMenu = function () {
        console.log("load Menu");
    };
    PageClass.prototype.getTitle = function () {
        return this.title;
    };
    PageClass.prototype.setTitle = function (name) {
        if (name) {
            this.title = name;
        }
    };
    return PageClass;
}());
var HomePage = new PageClass("Home");
var FooterPage = new PageClass("Footer");
HomePage.setTitle("HOME");
console.log("HomePage.title->", HomePage.getTitle());
console.log("FooterPage.title->", FooterPage.getTitle());
//REFORZAMIENTO
