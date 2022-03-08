const text = document.querySelector ("h2") 
const image = document.querySelector("#myImage")
const all = document.querySelector("#all");
const ingredients = document.querySelector("#ingredients")
const preparation = document.querySelector("#preparation");
const steps = document.querySelector("#steps");
 

const buttonFruit = document.querySelector("#fruit")
buttonFruit.addEventListener("click", fruit)

 
function fruit(){
    image.style = "display: block";
    image.setAttribute ("src","https://www.acouplecooks.com/wp-content/uploads/2020/07/Orange-Smoothie-009.jpg")
    text.textContent = "Orange Smoothie"
    buttonFruit.textContent = "Pick"
    buttonVegetable.textContent = "Find anotner"
    buttonFruit.addEventListener("click", pick);
    buttonVegetable.addEventListener("click", another)

}
 
function pick(){
  
    image.setAttribute ("src", "https://www.acouplecooks.com/wp-content/uploads/2020/07/Orange-Smoothie-009.jpg")
    text.textContent = "Orange Smoothie "
    buttonFruit.style = "display: none";
    buttonVegetable.style = "display: none";
    ingredients.style = "display: block";
    all.style = "display: block";
    preparation.style = "display: block";

    all.textContent =` 
    2 large peeled oranges (or 3 medium)
    ½ tablespoon orange zest
    1 banana (room temperature)
    ¼ cup Greek yogurt
    ½ teaspoon vanilla extract
    1 tablespoon maple syrup or honey (optional)
    2 to 2 1/2 cups ice`
steps.textContent =`
    Add the peeled oranges, orange zest, banana, Greek yogurt, vanilla, maple syrup or honey, and ice to a blender. 
    Blend until smooth.
    Enjoy immediately or store up to 1 day refrigerated.`
    
}

function another(){
    image.setAttribute ("src", "https://www.acouplecooks.com/wp-content/uploads/2020/04/Strawberry-Smoothie-003-735x919.jpg")
    text.textContent = "Perfect Strawberry Smoothie"
    buttonFruit.style = "display: none";
    buttonVegetable.style = "display: none";
    ingredients.style = "display: block";
    all.style = "display: block";
    preparation.style = "display: block";

    all.textContent = `  
    2 cups frozen strawberries
    1 banana (room temperature)
    ¼ cup Greek yogurt*
    1 cup milk (or almond milk or oat milk)
    1 ½ tablespoons maple syrup, honey, or agave syrup
    ½ cup ice
    Optional add-ins: 1 tablespoon almond butter, ¼ teaspoon vanilla, fresh mint leaves or basil leaves.`
 
    steps.textContent = ` 
 Place all ingredients in a blender, breaking the banana into pieces. 
 Blend until creamy and frothy, stopping and scraping down the sides as necessary.
 If desired, garnish with a frozen strawberry and mint sprig. 
 Serve immediately or store in a covered jar in the refrigerator for 2 days.`

}

const buttonVegetable = document.querySelector("#vegetable")
buttonVegetable.addEventListener("click", vegetable)

function vegetable (){
    image.style = "display: block";
    image.setAttribute ("src","https://www.acouplecooks.com/wp-content/uploads/2020/07/Beet-Smoothie-007-735x919.jpg")
    text.textContent = "Beet Smoothie"
    buttonFruit.textContent = "Pick"
    buttonVegetable.textContent = "Find anotner"
    buttonFruit.addEventListener("click", anotherOne);
    buttonVegetable.addEventListener("click", choose)
}

function anotherOne(){
    image.setAttribute ("src", "https://www.acouplecooks.com/wp-content/uploads/2020/07/Beet-Smoothie-003.jpg")
    text.textContent = "Beet Smoothie with ice"
    buttonFruit.style = "display: none";
    buttonVegetable.style = "display: none";
    ingredients.style = "display: block";
    all.style = "display: block";
    preparation.style = "display: block";
     
   
    all.textContent = `  
    Raw beet: Yep, just peel it, dice it and throw it in the blender!
    Green apple: Beets and apples are a fitting pair. It’s the key many smoothies: it brings in sweetness and texture.
    Banana: Banana adds creamy texture and more sweetness.
    Frozen pineapple: Here’s the kicker: it enhances the sweet tart flavor and adds the right icy texture.
    Water and ice: Ice and water add texture and body.`
 
    steps.textContent = ` 
    Peel the raw beet, then dice it (be careful of the beet juice, as it stains!).
    Chop the apple, leaving the skin on. Break the banana into pieces.
    Add the beet, apple, banana, frozen pineapple, water, and ice cubes. 
    Blend until smooth. Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.`

}
function choose(){
    image.setAttribute ("src", "https://www.acouplecooks.com/wp-content/uploads/2020/06/Avocado-Smoothie-002.jpg")
    text.textContent = "Perfect Avocado Smoothie"
    buttonFruit.style = "display: none";
    buttonVegetable.style = "display: none";
    ingredients.style = "display: block";
    all.style = "display: block";
    preparation.style = "display: block";
    steps.style = "display: block";
    all.textContent = `
   
    1/2 ripe avocado
    1 large green apple
    1 banana
    1 cup baby spinach or kale, loosely packed (or other chopped greens)
    ½ cup water
    1 cup frozen pineapple chunks
    10 ice cubes
    1 tablespoon lemon juice`
 
    steps.textContent = `What To Do:

Pit the avocado and scoop out one half of the flesh into the blender.
Chop the apple, leaving the skin on. 
Break the banana into pieces and place them both in the blender. Add the water and baby kale leaves.
Blend until smooth.
Add the ice, frozen pineapple or mango, and lemon juice. 
Blend again until smooth. Eat immediately or store 1 to 2 days in a sealed jar; if it separates, shake to re-integrate it.`

}
 