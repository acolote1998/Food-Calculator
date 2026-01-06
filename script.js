function calculateNutrients(nutrientP100g, grams) {
  return grams * nutrientP100g / 100;
}

// Agregar nuevo ingrediente
function addIngredient() {
  const container = document.getElementById('ingredients');
  const count = container.children.length + 1;

  const div = document.createElement('div');
  div.className = 'ingredient';
  div.innerHTML = `
    <h3>Ingredient ${count}<br><input type="text" class="iname"></h3>

    <label>Grams:</label><br>
    <input type="number" class="grams" value="0"><br><br>

    <label>Calories per 100g:</label><br>
    <input type="number" class="calories" value="0"><br><br>

    <label>Carbs per 100g:</label><br>
    <input type="number" class="carbs" value="0"><br><br>

    <label>Protein per 100g:</label><br>
    <input type="number" class="protein" value="0"><br><br>

    <label>Fat per 100g:</label><br>
    <input type="number" class="fat" value="0"><br><br>
    <hr>
  `;

  container.appendChild(div);
}

// Cálculo general (recorre todos los ingredientes)
function calculate() {
  const ingredients = document.querySelectorAll('.ingredient');

  let totalGrams = 0;
  let totalCalories = 0;
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;

  ingredients.forEach(ing => {
    const grams = parseFloat(ing.querySelector('.grams').value) || 0;
    const calories = parseFloat(ing.querySelector('.calories').value) || 0;
    const carbs = parseFloat(ing.querySelector('.carbs').value) || 0;
    const protein = parseFloat(ing.querySelector('.protein').value) || 0;
    const fat = parseFloat(ing.querySelector('.fat').value) || 0;

    totalGrams += grams;
    totalCalories += calculateNutrients(calories, grams);
    totalCarbs += calculateNutrients(carbs, grams);
    totalProtein += calculateNutrients(protein, grams);
    totalFat += calculateNutrients(fat, grams);
  });

  document.getElementById('resultname').value = document.getElementById('foodname').value;
  document.getElementById('resultbarcodename').value = document.getElementById('barcode').value;
  document.getElementById('resultbarcode').value = "*" + document.getElementById('barcode').value + "*";
  document.getElementById('portiongrams').value = totalGrams + " grams";
  document.getElementById('resultcaloriesportion').value = totalCalories + " calories";
  document.getElementById('resultcalories').value = (100 * totalCalories / totalGrams).toFixed(2);
  document.getElementById('resultcarbs').value = (100 * totalCarbs / totalGrams).toFixed(2);
  document.getElementById('resultprotein').value = (100 * totalProtein / totalGrams).toFixed(2);
  document.getElementById('resultfat').value = (100 * totalFat / totalGrams).toFixed(2);
}
