
const convert = function() { 
	const inputValue = document.getElementById("inputValue").value;
	const firstSelection = document.getElementById("firstSelection").value;
	const secondSelection = document.getElementById("secondSelection").value;

	if (inputValue == ""){
		document.getElementById("result").value = "";
		return;
	} else if (firstSelection === secondSelection){
		console.log("here");
		document.getElementById("result").value = inputValue;
        return;
	}

	switch (firstSelection) {
		case "kg":
			kgConvertion(inputValue, secondSelection);
            break;
		case "g":
			gConvertion(inputValue, secondSelection);
            break;
		case "mg":
			mgConvertion(inputValue, secondSelection);
            break;
		case "t":
			tConvertion(inputValue, secondSelection);
            break;
		case "lbs":
			lbsConvertion(inputValue, secondSelection);
            break;
		case "oz":
			ozConvertion(inputValue, secondSelection);
            break;

		default:
			break;
	}
}

const kgConvertion = (inputValue, secondSelection) => {

	switch (secondSelection) {
		case "g":
			document.getElementById("result").value = parseFloat(inputValue) * 1000;
			break;
		case "mg":
			document.getElementById("result").value = parseFloat(inputValue) * 1000000;
			break;		
		case "t":
			document.getElementById("result").value = parseFloat(inputValue) * 0.001;
			break;	
		case "lbs":
			document.getElementById("result").value = parseFloat(inputValue) * 2.2046226218;
			break;
		case "oz":
			document.getElementById("result").value = parseFloat(inputValue) * 35.27396195;
			break;		
		default:
			break;
	}
}

const gConvertion = (inputValue, secondSelection) => {
	switch (secondSelection) {
		case "kg":
			document.getElementById("result").value = parseFloat(inputValue) * 0.001;
			break;
		case "mg":
			document.getElementById("result").value = parseFloat(inputValue) * 1000;
			break;		
		case "t":
			document.getElementById("result").value = parseFloat(inputValue) * 0.000001;
			break;	
		case "lbs":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0022046226;
			break;
		case "oz":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0352739619;
			break;		
		default:
			break;
	}
}

const mgConvertion = (inputValue, secondSelection) => {
	switch (secondSelection) {
		case "kg":
			document.getElementById("result").value = parseFloat(inputValue) * 0.000001;
			break;
		case "g":
			document.getElementById("result").value = parseFloat(inputValue) * 0.001;
			break;		
		case "t":
			document.getElementById("result").value = parseFloat(inputValue) * 1.E-9;
			break;	
		case "lbs":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0000022046;
			break;
		case "oz":
			document.getElementById("result").value = parseFloat(inputValue) * 0.000035274;
			break;		
		default:
			break;
	}
}

const tConvertion = (inputValue, secondSelection) => {
	switch (secondSelection) {
		case "kg":
			document.getElementById("result").value = parseFloat(inputValue) * 1000;
			break;
		case "g":
			document.getElementById("result").value = parseFloat(inputValue) * 1000000;
			break;		
		case "mg":
			document.getElementById("result").value = parseFloat(inputValue) * 1000000000;
			break;	
		case "lbs":
			document.getElementById("result").value = parseFloat(inputValue) * 2204.6226218;
			break;
		case "oz":
			document.getElementById("result").value = parseFloat(inputValue) * 35273.96195;
			break;		
		default:
			break;
	}
}

const lbsConvertion = (inputValue, secondSelection) => {
	switch (secondSelection) {
		case "kg":
			document.getElementById("result").value = parseFloat(inputValue) * 0.45359237;
			break;
		case "g":
			document.getElementById("result").value = parseFloat(inputValue) * 453.59237;
			break;		
		case "mg":
			document.getElementById("result").value = parseFloat(inputValue) * 453592.37;
			break;	
		case "t":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0004535924;
			break;
		case "oz":
			document.getElementById("result").value = parseFloat(inputValue) * 16;
			break;		
		default:
			break;
	}
}

const ozConvertion = (inputValue, secondSelection) => {
	switch (secondSelection) {
		case "kg":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0283495231;
			break;
		case "g":
			document.getElementById("result").value = parseFloat(inputValue) * 28.349523125;
			break;		
		case "mg":
			document.getElementById("result").value = parseFloat(inputValue) * 28349.523125;
			break;	
		case "t":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0000283495;
			break;
		case "lbs":
			document.getElementById("result").value = parseFloat(inputValue) * 0.0625;
			break;		
		default:
			break;
	}
}