<template>
  <div class="store">
    <div class="header">
      <img src="../assets/truck.jpg" />
    </div>
    <div class="content">
      <h1>Store</h1>

      <div class="menu">
        <router-link to="/">
          <img src="../assets/burger.svg" />
          <p>Kitchen</p>
        </router-link>
      </div>
      <section class="ingredients">
        <h1>Ingrédients disponible</h1>
        <form>
        <ul class="ingredientlist">
          <li v-for="item in liste" v-bind:key="item.id">
            <label>{{ item.ingredient.name }} : </label><input type="number"  v-model="item.qty"  >
          </li>
        </ul>
        <button type="submit" v-on:click="buyFood()">Acheter </button>
        </form>
      </section>
     
    </div>
  </div>
</template>


<script>
import dataService from "../services/service.js";

export default {
  name: "Store",
  data() {
    return {
      ingredientsTypes: [],
      liste: [],
      recipeList: [],
    };
  },
  methods: {
    buyFood(){
      console.log('buying food')
      console.log(this.liste)
      dataService.setListe(this.liste)
    }
  },
  mounted() {
    this.liste = dataService.getListeIngredients()
    console.log('Store Mounted !')
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.store .menu {
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  border-radius: 5px;
  padding: 7px;
  background-color: rgba(18, 203, 57, 1);
}
.store .menu img {
  width: auto;
  height: 50%;
  margin: auto;
  display: block;
}
.store .menu p {
  text-align: center;
  padding: 0;
  margin: 0;
  color: white;
}
.store .menu a{
  text-decoration:none;
}
.store .header {
  width: 100%;
}
.store .header img {
  width: 100%;
}

.store .content {
  padding: 20px;
  position: relative;
}

.store .content section {
  margin-top: 10px;
  border-top: 3px solid rgba(255, 200, 100, 0.5);
  padding-top: 10px;
}
.store .content section h1 {
  margin: 0;
}

.store ul{
  width:300px;
  list-style-type: none;
}
.store ul li{
  margin: 10px 0 0 0;
}

.store .content label{
  display: inline-block;
  vertical-align: middle;
  width:100px;
}
.store .content input{
  display: inline-block;
  vertical-align: middle;
  padding:10px;
}

.store .content button[type="submit"]{
  background-color: rgba(18, 203, 57, 1);
  color:white;
  border:0;
  border-radius: 5px;
  margin:auto;
  display: block;
  padding:20px;

}
</style>

