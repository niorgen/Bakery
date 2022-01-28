<template>
  <div class="kitchen">
    <div class="header">
      <img src="../assets/header-kitchen.jpg" />
    </div>
    <div class="content">
      <h1>Kitchen</h1>

      <div class="menu">
        <router-link to="/Store">
          <img src="../assets/cart_icon.svg" />
          <p>Store</p>
        </router-link>
      </div>
      <section class="ingredients">
        <h1>Ingrédients disponible</h1>
        <ul class="ingredientlist">
          <li v-for="item in liste" v-bind:key="item.id">
            {{ item.ingredient.name }} : {{ item.qty }}
          </li>
        </ul>
      </section>
      <section class="recipes">
        <h1>Listes des recettes</h1>
        <div v-for="recipe in recipeList" v-bind:key="recipe.id">
          <Recipe :recipe="recipe" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Recipe from "./RecipeModule.vue";
import dataService from "../services/service.js";

export default {
  name: "Kitchen",
  components: {
    Recipe,
  },
  data() {
    return {
      ingredientsTypes: [],
      liste: [],
      recipeList: [],
    };
  },
  methods: {
    cakes: (liste, recipe) => {
      let missingIngredients = [];
      let nbCook = 100;
      recipe.contenu.forEach((recipeItem) => {
        let search = liste.filter((listItem) => {
          if (listItem.ingredient.name == "oil") {
            console.log("searching for ");
            console.log(listItem.ingredient.name);
            console.log("check ==========================");
            console.log(listItem.id + " =? " + recipeItem.id + " => ");
            console.log(Number(listItem.id) == Number(recipeItem.id));
            console.log(listItem.qty + ">=" + recipeItem.qty);
          }
          if (listItem.id == recipeItem.id && listItem.qty >= recipeItem.qty) {
            if (listItem.qty / recipeItem.qty < nbCook) {
              nbCook = Math.floor(listItem.qty / recipeItem.qty);
              recipe.nombre = nbCook;
            }
            return listItem;
          }
        });

        if (search.length == 0) {
          nbCook = 0;
          missingIngredients.push(recipeItem);
        }
      });
      recipe.nombre = nbCook;
      recipe.missing = missingIngredients;
      console.log("can we bake " + recipe.name + " ? ");
      console.log(missingIngredients.length == 0);
      console.log("nombre de fois ? " + nbCook);
      console.log(missingIngredients);
    },
  },
  mounted() {
    //Type d'ingrédient existant :
    this.ingredientsTypes = dataService.getIngredientsType();

    //Ingrédients à disposition dans la cuisine
    this.liste = dataService.getListeIngredients();

    //Liste des recettes :
    this.recipeList = dataService.getRecipes();
    console.log("lets cook ******************************************");
    //Test des recettes possible
    this.recipeList.forEach((recipe) => {
      this.cakes(this.liste, recipe);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kitchen .menu {
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  border-radius: 5px;
  padding: 7px;
  background-color: rgba(18, 203, 57, 1);
}
.kitchen .menu img {
  width: auto;
  height: 50%;
  margin: auto;
  display: block;
}
.kitchen .menu p {
  text-align: center;
  padding: 0;
  margin: 0;
  color: white;
}
.kitchen .menu a{
  text-decoration:none;
}
.kitchen .header {
  width: 100%;
}
.kitchen .header img {
  width: 100%;
}

.kitchen .content {
  padding: 20px;
  position: relative;
}

.kitchen .content section {
  margin-top: 10px;
  border-top: 3px solid rgba(255, 200, 100, 0.5);
  padding-top: 10px;
}
.kitchen .content section h1 {
  margin: 0;
}
</style>
