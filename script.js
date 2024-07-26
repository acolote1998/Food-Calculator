function calculateNutrients(nutrientP100g,gramsnutrientP){
return gramsnutrientP * nutrientP100g / 100;
}

function calculateCalories(){

	return   calculateNutrients(parseFloat(document.getElementById('caloriesi1').value),parseFloat(document.getElementById('gramsi1').value))
            +calculateNutrients(parseFloat(document.getElementById('caloriesi2').value),parseFloat(document.getElementById('gramsi2').value))
            +calculateNutrients(parseFloat(document.getElementById('caloriesi3').value),parseFloat(document.getElementById('gramsi3').value))
            +calculateNutrients(parseFloat(document.getElementById('caloriesi4').value),parseFloat(document.getElementById('gramsi4').value));
}

function calculateCarbs(){
 
    return  calculateNutrients(parseFloat(document.getElementById('carbsi1').value),parseFloat(document.getElementById('gramsi1').value))
        +   calculateNutrients(parseFloat(document.getElementById('carbsi2').value),parseFloat(document.getElementById('gramsi2').value))
        +   calculateNutrients(parseFloat(document.getElementById('carbsi3').value),parseFloat(document.getElementById('gramsi3').value))
        +   calculateNutrients(parseFloat(document.getElementById('carbsi4').value),parseFloat(document.getElementById('gramsi4').value));
}

function calculateProteins(){
 
    return  calculateNutrients(parseFloat(document.getElementById('proteini1').value),parseFloat(document.getElementById('gramsi1').value))
        +   calculateNutrients(parseFloat(document.getElementById('proteini2').value),parseFloat(document.getElementById('gramsi2').value))
        +   calculateNutrients(parseFloat(document.getElementById('proteini3').value),parseFloat(document.getElementById('gramsi3').value))
        +   calculateNutrients(parseFloat(document.getElementById('proteini4').value),parseFloat(document.getElementById('gramsi4').value));
}

function calculateFats(){

    return  calculateNutrients(parseFloat(document.getElementById('fati1').value),parseFloat(document.getElementById('gramsi1').value))
        +   calculateNutrients(parseFloat(document.getElementById('fati2').value),parseFloat(document.getElementById('gramsi2').value))
        +   calculateNutrients(parseFloat(document.getElementById('fati3').value),parseFloat(document.getElementById('gramsi3').value))
        +   calculateNutrients(parseFloat(document.getElementById('fati4').value),parseFloat(document.getElementById('gramsi4').value));
}

function calculatePortionGrams(){

    const gramsportion1 = parseFloat(document.getElementById('gramsi1').value);
    const gramsportion2 = parseFloat(document.getElementById('gramsi2').value);
    const gramsportion3 = parseFloat(document.getElementById('gramsi3').value);
    const gramsportion4 = parseFloat(document.getElementById('gramsi4').value);
	const resultgramsportiontotal = gramsportion1+gramsportion2+gramsportion3+gramsportion4;

	return resultgramsportiontotal;
}

function calculate(){


    // Display the result in the result textbox
    console.log("Ingredient 1:")
    console.log("Calories:"+calculateNutrients(parseFloat(document.getElementById('caloriesi1').value),parseFloat(document.getElementById('gramsi1').value)));
    console.log("Carbs:"+calculateNutrients(parseFloat(document.getElementById('carbsi1').value),parseFloat(document.getElementById('gramsi1').value)));
    console.log("Fat:"+calculateNutrients(parseFloat(document.getElementById('fati1').value),parseFloat(document.getElementById('gramsi1').value)));
    console.log("Protein:"+calculateNutrients(parseFloat(document.getElementById('proteini1').value),parseFloat(document.getElementById('gramsi1').value)));

    console.log("Ingredient 2:")
    console.log("Calories:"+calculateNutrients(parseFloat(document.getElementById('caloriesi2').value),parseFloat(document.getElementById('gramsi2').value)));
    console.log("Carbs:"+calculateNutrients(parseFloat(document.getElementById('carbsi2').value),parseFloat(document.getElementById('gramsi2').value)));
    console.log("Fat:"+calculateNutrients(parseFloat(document.getElementById('fati2').value),parseFloat(document.getElementById('gramsi2').value)));
    console.log("Protein:"+calculateNutrients(parseFloat(document.getElementById('proteini2').value),parseFloat(document.getElementById('gramsi2').value)));

    console.log("Ingredient 3:")
    console.log("Calories:"+calculateNutrients(parseFloat(document.getElementById('caloriesi3').value),parseFloat(document.getElementById('gramsi3').value)));
    console.log("Carbs:"+calculateNutrients(parseFloat(document.getElementById('carbsi3').value),parseFloat(document.getElementById('gramsi3').value)));
    console.log("Fat:"+calculateNutrients(parseFloat(document.getElementById('fati3').value),parseFloat(document.getElementById('gramsi3').value)));
    console.log("Protein:"+calculateNutrients(parseFloat(document.getElementById('proteini3').value),parseFloat(document.getElementById('gramsi3').value)));

    console.log("Ingredient 4:")
    console.log("Calories:"+calculateNutrients(parseFloat(document.getElementById('caloriesi4').value),parseFloat(document.getElementById('gramsi4').value)));
    console.log("Carbs:"+calculateNutrients(parseFloat(document.getElementById('carbsi4').value),parseFloat(document.getElementById('gramsi4').value)));
    console.log("Fat:"+calculateNutrients(parseFloat(document.getElementById('fati4').value),parseFloat(document.getElementById('gramsi4').value)));
    console.log("Protein:"+calculateNutrients(parseFloat(document.getElementById('proteini4').value),parseFloat(document.getElementById('gramsi4').value)));



    document.getElementById('resultname').value = document.getElementById('foodname').value;
    document.getElementById('resultbarcodename').value = document.getElementById('barcode').value;
    document.getElementById('resultbarcode').value = "*"+document.getElementById('barcode').value;+"*";
    document.getElementById('portiongrams').value = calculatePortionGrams() +" grams";
    document.getElementById('resultcaloriesportion').value = calculateCalories() +" calories";
    document.getElementById('resultcalories').value = 100 * calculateCalories() / calculatePortionGrams() +" calories";
    document.getElementById('resultcarbs').value = 100 * calculateCarbs() / calculatePortionGrams() +" g";
    document.getElementById('resultprotein').value = 100 * calculateProteins() /calculatePortionGrams() +" g";
    document.getElementById('resultfat').value = 100 * calculateFats() /calculatePortionGrams() +" g";
}