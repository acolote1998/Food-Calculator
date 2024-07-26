
function calculateCaloriesi1(){
    // Get the values from the input fields
    const caloriesp100g = parseFloat(document.getElementById('caloriesi1').value);
    const gramsportion = parseFloat(document.getElementById('gramsi1').value);
    
    // Perform the calculation
    const caloriesperportion = gramsportion * caloriesp100g / 100;
    
    return caloriesperportion;
}
function calculateCaloriesi2(){
    // Get the values from the input fields
    const caloriesp100g = parseFloat(document.getElementById('caloriesi2').value);
    const gramsportion = parseFloat(document.getElementById('gramsi2').value);
    
    // Perform the calculation
    const caloriesperportion = gramsportion * caloriesp100g / 100;
    
    return caloriesperportion;
}
function calculateCaloriesi3(){
    // Get the values from the input fields
    const caloriesp100g = parseFloat(document.getElementById('caloriesi3').value);
    const gramsportion = parseFloat(document.getElementById('gramsi3').value);
    
    // Perform the calculation
    const caloriesperportion = gramsportion * caloriesp100g / 100;
    
    return caloriesperportion;
}
function calculateCaloriesi4(){
    // Get the values from the input fields
    const caloriesp100g = parseFloat(document.getElementById('caloriesi4').value);
    const gramsportion = parseFloat(document.getElementById('gramsi4').value);
    
    // Perform the calculation
    const caloriesperportion = gramsportion * caloriesp100g / 100;
    
    return caloriesperportion;
}

function calculateCarbsi1(){
    // Get the values from the input fields
    const carbsp100g = parseFloat(document.getElementById('carbsi1').value);
    const gramsportion = parseFloat(document.getElementById('gramsi1').value);
    
    // Perform the calculation
    const carbsperportion = gramsportion * carbsp100g / 100;
    
    return carbsperportion;

}
function calculateCarbsi2(){
    // Get the values from the input fields
    const carbsp100g = parseFloat(document.getElementById('carbsi2').value);
    const gramsportion = parseFloat(document.getElementById('gramsi2').value);
    
    // Perform the calculation
    const carbsperportion = gramsportion * carbsp100g / 100;
    
    return carbsperportion;

}
function calculateCarbsi3(){
    // Get the values from the input fields
    const carbsp100g = parseFloat(document.getElementById('carbsi3').value);
    const gramsportion = parseFloat(document.getElementById('gramsi3').value);
    
    // Perform the calculation
    const carbsperportion = gramsportion * carbsp100g / 100;
    
    return carbsperportion;

}
function calculateCarbsi4(){
    // Get the values from the input fields
    const carbsp100g = parseFloat(document.getElementById('carbsi4').value);
    const gramsportion = parseFloat(document.getElementById('gramsi4').value);
    
    // Perform the calculation
    const carbsperportion = gramsportion * carbsp100g / 100;
    
    return carbsperportion;

}

function calculateProteinsi1(){
    // Get the values from the input fields
    const proteinsp100g = parseFloat(document.getElementById('proteini1').value);
    const gramsportion = parseFloat(document.getElementById('gramsi1').value);
    
    // Perform the calculation
    const proteinsperportion = gramsportion * proteinsp100g / 100;
    
    return proteinsperportion;

}
function calculateProteinsi2(){
    // Get the values from the input fields
    const proteinsp100g = parseFloat(document.getElementById('proteini2').value);
    const gramsportion = parseFloat(document.getElementById('gramsi2').value);
    
    // Perform the calculation
    const proteinsperportion = gramsportion * proteinsp100g / 100;
    
    return proteinsperportion;

}
function calculateProteinsi3(){
    // Get the values from the input fields
    const proteinsp100g = parseFloat(document.getElementById('proteini3').value);
    const gramsportion = parseFloat(document.getElementById('gramsi3').value);
    
    // Perform the calculation
    const proteinsperportion = gramsportion * proteinsp100g / 100;
    
    return proteinsperportion;

}
function calculateProteinsi4(){
    // Get the values from the input fields
    const proteinsp100g = parseFloat(document.getElementById('proteini4').value);
    const gramsportion = parseFloat(document.getElementById('gramsi4').value);
    
    // Perform the calculation
    const proteinsperportion = gramsportion * proteinsp100g / 100;
    
    return proteinsperportion;

}

function calculateFatsi1(){
    // Get the values from the input fields
    const fatsp100g = parseFloat(document.getElementById('fati1').value);
    const gramsportion = parseFloat(document.getElementById('gramsi1').value);
    
    // Perform the calculation
    const fatsperportion = gramsportion * fatsp100g / 100;
    
    return fatsperportion;

}
function calculateFatsi2(){
    // Get the values from the input fields
    const fatsp100g = parseFloat(document.getElementById('fati2').value);
    const gramsportion = parseFloat(document.getElementById('gramsi2').value);
    
    // Perform the calculation
    const fatsperportion = gramsportion * fatsp100g / 100;
    
    return fatsperportion;

}
function calculateFatsi3(){
    // Get the values from the input fields
    const fatsp100g = parseFloat(document.getElementById('fati3').value);
    const gramsportion = parseFloat(document.getElementById('gramsi3').value);
    
    // Perform the calculation
    const fatsperportion = gramsportion * fatsp100g / 100;
    
    return fatsperportion;

}
function calculateFatsi4(){
    // Get the values from the input fields
    const fatsp100g = parseFloat(document.getElementById('fati4').value);
    const gramsportion = parseFloat(document.getElementById('gramsi4').value);
    
    // Perform the calculation
    const fatsperportion = gramsportion * fatsp100g / 100;
    
    return fatsperportion;

}

function calculateCalories(){

	const resultcaloriestotal = calculateCaloriesi1()+calculateCaloriesi2()+calculateCaloriesi3()+calculateCaloriesi4();

	return resultcaloriestotal;
}

function calculateCarbs(){

	const resultcarbstotal = calculateCarbsi1()+calculateCarbsi2()+calculateCarbsi3()+calculateCarbsi4();

	return resultcarbstotal;
}

function calculateProteins(){

	const resultproteinstotal = calculateProteinsi1()+calculateProteinsi2()+calculateProteinsi3()+calculateProteinsi4();

	return resultproteinstotal;
}

function calculateFats(){

	const resultfatstotal = calculateFatsi1()+calculateFatsi2()+calculateFatsi3()+calculateFatsi4();

	return resultfatstotal;
}

function calculatePortionGrams(){

    const gramsportion1 = parseFloat(document.getElementById('gramsi1').value);
    const gramsportion2 = parseFloat(document.getElementById('gramsi2').value);
    const gramsportion3 = parseFloat(document.getElementById('gramsi3').value);
    const gramsportion4 = parseFloat(document.getElementById('gramsi4').value);
	const resultgramsportiontotal = gramsportion1+gramsportion2+gramsportion3+gramsportion4;

	return resultgramsportiontotal;
}

function getName(){
	const foodname = document.getElementById('foodname').value;
	return foodname;
}

function getBarcode(){
	const barcode = document.getElementById('barcode').value;
	return "*"+barcode+"*";
}

function getBarcodeName(){
	const barcode = document.getElementById('barcode').value;
	return barcode;
}

function calculate(){


    // Display the result in the result textbox
    console.log("Ingredient 1:")
    console.log("Calories:"+calculateCaloriesi1());
    console.log("Carbs:"+calculateCarbsi1());
    console.log("Fat:"+calculateFatsi1());
    console.log("Protein:"+calculateProteinsi1());

    console.log("Ingredient 2:")
    console.log("Calories:"+calculateCaloriesi2());
    console.log("Carbs:"+calculateCarbsi2());
    console.log("Fat:"+calculateFatsi2());
    console.log("Protein:"+calculateProteinsi2());

    console.log("Ingredient 3:")
    console.log("Calories:"+calculateCaloriesi3());
    console.log("Carbs:"+calculateCarbsi3());
    console.log("Fat:"+calculateFatsi3());
    console.log("Protein:"+calculateProteinsi3());

    console.log("Ingredient 4:")
    console.log("Calories:"+calculateCaloriesi4());
    console.log("Carbs:"+calculateCarbsi4());
    console.log("Fat:"+calculateFatsi4());
    console.log("Protein:"+calculateProteinsi4());



    document.getElementById('resultname').value = getName();
    document.getElementById('resultbarcodename').value = getBarcodeName();
    document.getElementById('resultbarcode').value = getBarcode();
    document.getElementById('portiongrams').value = calculatePortionGrams() +" grams";
    document.getElementById('resultcaloriesportion').value = calculateCalories() +" calories";
    document.getElementById('resultcalories').value = 100 * calculateCalories() / calculatePortionGrams() +" calories";
    document.getElementById('resultcarbs').value = 100 * calculateCarbs() / calculatePortionGrams() +" g";
    document.getElementById('resultprotein').value = 100 * calculateProteins() /calculatePortionGrams() +" g";
    document.getElementById('resultfat').value = 100 * calculateFats() /calculatePortionGrams() +" g";

}
