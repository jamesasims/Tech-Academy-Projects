function getReceipt() {
	var text1= "<h3>You Ordered:</h3>;
	var runningTotal=0;
	var sizeTotal=0;
	var sizeArray= document.getElementsByClassName("psize");

	for (var i=o; i<sizeArray.length; i++){
		if (sizeArray[i].checked) {
			var selectedSize=sizeArray[i].value;
			text1=text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
	sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} 
	runningTotal=sizeTotal;
	getMeat(runningTotal,text1);
	
	function getMeat(runningTotal,text1) {
		var meatTotal=0;
		var selectedMeat=[];
		var meatArray=document.getElementsByClassName("meats")
		for (var j=0; j<meatArray.length; j++) {
			if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value);
				text1=text1+meatArray[j].value+"<br>";
				
			}
		}
		
	}
	document.write(text1);
}