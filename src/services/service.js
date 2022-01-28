import RecipeModel from "../models/Recipe"
export default {
    INGREDIENTS: [
        {
            id: 0,
            name: "flour",
        },
        {
            id: 1,
            name: "sugar",
        },
        {
            id: 2,
            name: "eggs",
        },
        {
            id: 3,
            name: "milk",
        },
        {
            id: 4,
            name: "apple",
        },
        {
            id: 5,
            name: "oil"
        }
    ],
    RECIPES: [
        new RecipeModel(0, 'Cake au amandes', ['Faire le Cake', 'Cuisson 30mn'],
            [
                { id: 0, qty: 500 },
                { id: 1, qty: 200 },
                { id: 2, qty: 1 }
            ]
        ),
        new RecipeModel(0, 'Cake aux olives', ['Faire le Cake', 'Cuisson 45mn'],
            [
                { id: 4, qty: 3 },
                { id: 0, qty: 300 },
                { id: 1, qty: 150 },
                { id: 3, qty: 100 },
                { id: 5, qty: 100 }
            ]
        ),
        new RecipeModel(0, 'Cake a la courgette', ['Faire le Cake', 'Cuisson 45mn'],
            [
                { id: 4, qty: 3 },
                { id: 0, qty: 300 },
                { id: 1, qty: 150 },
                { id: 3, qty: 100 },
                { id: 5, qty: 100 }
            ]
        ),
    ],


    getIngredientsType() {
        return this.INGREDIENTS
    },

    getRecipes() {
        return this.RECIPES
    },

    getListeIngredients() {
        //Check localStorage and retrieve list of ingredients bought
        let liste = localStorage.getItem('liste')
        if (liste == null) {
            localStorage.setItem('liste', JSON.stringify([
                { id: 0, ingredient: this.INGREDIENTS[0], qty: 1500 },
                { id: 1, ingredient: this.INGREDIENTS[1], qty: 200 },
                { id: 2, ingredient: this.INGREDIENTS[2], qty: 5 },
                { id: 3, ingredient: this.INGREDIENTS[3], qty: 200 },
                { id: 4, ingredient: this.INGREDIENTS[4], qty: 100 },
                { id: 5, ingredient: this.INGREDIENTS[5], qty: 90 },
            ]))

        }

        return JSON.parse(liste)
    },


    setListe(liste){
        this.clearListe()
        localStorage.setItem('liste',JSON.stringify(liste))
    },

    clearListe() {
        localStorage.setItem('liste', null)
    }






}