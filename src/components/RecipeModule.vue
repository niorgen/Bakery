<template>
  <div class="recipe">
    <div class="available"><span class="fois">x</span>{{ recipe.nombre }}</div>
    <img src="../assets/cake-kitchen.jpg" />
    <div class="content">
      <p class="title">{{ recipe.name }}</p>
      <div class="preparation">
        <p>Conseil de préparation</p>
        <ul>
          <li v-for="(conseil, index) in recipe.preparation" :key="index">
            {{ conseil }}
          </li>
        </ul>
      </div>
      <div class="ingredients">
        <p>Ingrédients</p>
        <ul>
          <template v-if="ingredients.length > 0">
            <li
              class="ingredient"
              v-for="(ingredient, index) in recipe.contenu"
              :key="index"
            >
              {{ ingredients[ingredient.id].name }} : {{ ingredient.qty }}
            </li>
          </template>
        </ul>
      </div>
        <template v-if="recipe.missing.length > 0">
      <div class="missing">
        <p>Ingrédients Manquant</p>
          <ul>
            <li v-for="(ingredient, index) in recipe.missing" :key="index">
              <span v-if="ingredients.length > 0">
                {{ ingredients[ingredient.id].name }}
              </span>
            </li>
          </ul>
      </div>
        </template>
    </div>
  </div>
</template>

<script>
import dataService from "../services/service";
export default {
  name: "Recipe",
  props: {
    recipe: {},
  },
  data() {
    return {
      ingredients: [],
    };
  },
  mounted() {
    this.ingredients = dataService.getIngredientsType();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe {
  margin: 20px 10px;
  position: relative;
  background-color: #FEFEFE;
  max-height: 300px;
}
.recipe .content {
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  width: 52%;
}
.recipe .content .preparation {
  display: block;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
}

.recipe .content .ingredients p{
  text-decoration: underline;
}
.recipe .content .missing p{
  text-decoration: underline;
}
.recipe .content .ingredients,
.recipe .content .missing {
  width: 48%;
  display: inline-block;
  vertical-align: top;
}
.recipe .content .ingredients p,
.recipe .content .missing p {
  margin-left: 10px;
}
.recipe .content .ingredients ul,
.recipe .content .missing ul {
  margin-left: 10px;
}
.recipe .title {
  margin: 10px 0 20px 0;
  font-weight: bold;
  font-size: 1rem;
}

.recipe .content p {
  margin: 0;
  padding: 0;
}

.recipe .available {
  background-color: rgba(18, 203, 57, 1);
  padding: 10px;
  position: absolute;
  color: white;
  font-weight: bold;
  right: 0;
  top: 0;
  border-bottom-left-radius: 5px;
}

.recipe img {
  display: inline-block;
  vertical-align: top;
  height: auto;
  max-height: 300px;
}

@media (max-width: 550px) {
  .content{
    font-size: 0.8rem;
    height: 100%;
  }
  .recipe {
    margin: 20px 0;
    padding:0;
  }
  .recipe img {
    width:40%;
    height:auto;
  }
  .content .title {
    margin: 10px 0 0 0 !important;
  
  }
  .content ul {
    margin: 0 0 0 0;
    padding: 0;
    list-style-type: none;
  }
  .content ul li {
    padding: 0 0 0 10px;
  }
  .recipe .content .ingredients ul,
  .recipe .content .missing ul {
    margin-left: 0;
    list-style-type: none;
    margin:0;
  }
}
</style>
