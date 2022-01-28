
class RecipeModel{
    id=0
    name=""
    preparation = []
    contenu=[]
    nombre=0
    missing=[]

    constructor(id,name,preparation,contenu){
        this.id = id
        this.name = name;
        this.preparation = preparation
        this.contenu = contenu
    }

}

export default RecipeModel
