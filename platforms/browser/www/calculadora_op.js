function inicio(){
	var suma = document.getElementById("bSumar");
	suma.addEventListener("click", sumar);
	var resta = document.getElementById("bRestar");
	resta.addEventListener("click", restar);
	var determinante = document.getElementById("bDet");
	determinante.addEventListener("click", determinar);
	var trans = document.getElementById("bTrans");
	trans.addEventListener("click", transpuesta);
	var rango = document.getElementById("bRango");
	rango.addEventListener("click", rangear);
	var sheldon = document.getElementById("bEc");
	sheldon.addEventListener("click", ecuacionar);	
}



function transpuesta(){
	var taa = parseInt(document.getElementById('aa').value);
	var tab = parseInt(document.getElementById('ab').value);
	var tac = parseInt(document.getElementById('ac').value);
	var tba = parseInt(document.getElementById('ba').value);
	var tbb = parseInt(document.getElementById('bb').value);
	var tbc = parseInt(document.getElementById('bc').value);
	var tca = parseInt(document.getElementById('ca').value);
	var tcb = parseInt(document.getElementById('cb').value);
	var tcc = parseInt(document.getElementById('cc').value);
	matTrans = [[taa,tab,tac],
				[tba,tbb,tbc],
				[tca,tcb,tcc]]
	var matResT = [[0,0,0],
				  [0,0,0],
				  [0,0,0]]
	for (var i = 0; i < 3; i++) {
		for(var j = 0; j<3; j++){
			matResT[j][i] = matTrans[i][j];
		}
	}
	resultadoTrans1.textContent = (matResT[0][0] + ",");
	resultadoTrans2.textContent = (matResT[0][1] + ",");
	resultadoTrans3.textContent = (matResT[0][2]);

	resultadoTrans4.textContent = (matResT[1][0] + ",");
	resultadoTrans5.textContent = (matResT[1][1] + ",");
	resultadoTrans6.textContent = (matResT[1][2]);

	resultadoTrans7.textContent = (matResT[2][0] + ",");
	resultadoTrans8.textContent = (matResT[2][1] + ",");
	resultadoTrans9.textContent = (matResT[2][2]);
}
function determinar(){
	var d1 = parseInt(document.getElementById('det1').value);
	var d2 = parseInt(document.getElementById('det2').value);
	var d3 = parseInt(document.getElementById('det3').value);
	var d4 = parseInt(document.getElementById('det4').value);
	var d5 = parseInt(document.getElementById('det5').value);
	var d6 = parseInt(document.getElementById('det6').value);
	var d7 = parseInt(document.getElementById('det7').value);
	var d8 = parseInt(document.getElementById('det8').value);
	var d9 = parseInt(document.getElementById('det9').value);
	var matDet = [[d1,d2,d3],
				  [d4,d5,d6],
				  [d7,d8,d9]];
	var det;
	var dPrinc = 1;
	var dInv = 1;
	var dP1 = 1;
	var dP2 = 1;
	var dI1 = 1;
	var dI2 = 1;
	for (var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++){
			if(i == j){
                dPrinc *= matDet[i][j];
            }
            if(2-i == j){
                dInv *= matDet[i][j];
            }
            if(1+i == j || i == j+2){
                dP1 *= matDet[i][j];
            }
            if(2+i == j || i == j+1){
                 dP2 *= matDet[i][j];
            }
            if(1-i == j || 2-i == j-2){
                dI1 *= matDet[i][j];
            }
            if(2-i == j-1 || 1-i == j+1 ){
                dI2 *= matDet[i][j];
            }
		}
	}
	det =((dPrinc + dP1 + dP2) - (dInv + dI1 + dI2));
	resultadoDet.textContent = ("Determinante = " + det);
}
function rangear(){
	var r1 = parseInt(document.getElementById("ran1").value);
	var r2 = parseInt(document.getElementById("ran2").value);
	var r3 = parseInt(document.getElementById("ran3").value);
	var r4 = parseInt(document.getElementById("ran4").value);
	var r5 = parseInt(document.getElementById("ran5").value);
 	var r6 = parseInt(document.getElementById("ran6").value);
 	var r7 = parseInt(document.getElementById("ran7").value);
 	var r8 = parseInt(document.getElementById("ran8").value);
 	var r9 = parseInt(document.getElementById("ran9").value);
 	matRan = [[r1,r2,r3],
			 [r4,r5,r6],
	      	 [r7,r8,r9]];
	var resultado_rango;
	var det_rango;
	var rPrinc = 1;
	var rInv = 1;
	var rP1 = 1;
	var rP2 = 1;
	var rI1 = 1;
	var rI2 = 1;
	for (var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++){
			if(i == j){
                rPrinc *= matRan[i][j];
            }
            if(2-i == j){
                rInv *= matRan[i][j];
            }
            if(1+i == j || i == j+2){
                rP1 *= matRan[i][j];
            }
            if(2+i == j || i == j+1){
                rP2 *= matRan[i][j];
            }
            if(1-i == j || 2-i == j-2){
                rI1 *= matRan[i][j];
            }
            if(2-i == j-1 || 1-i == j+1 ){
                rI2 *= matRan[i][j];
            }
		}
	}
	det_rango = ((rPrinc + rP1 + rP2) - (rInv + rI1 + rI2));
	if(det_rango == 0){
		matA = [[r1,r2],
			   [r4,r5]];
		var a = range2(r1,r2,r4,r5);
		matB = [[r2,r3],
			   [r5,r6]];
		var b = range2(r2,r3,r5,r6);
		matC = [[r4,r5],
			   [r7,r8]];
		var c = range2(r4,r5,r7,r8);
		matD = [[r5,r6],
			   [r8,r9]];
		var d = range2(r5,r6,r8,r9);
		if(a != 0 || b != 0 || c != 0 || d != 0){
			resultado_rango = 2;h
		}else{
			resultado_rango = 1;
		}		   	   
	}else{
		resultado_rango = 3;
	}
	resultadoRango.textContent = ("Rango = " + resultado_rango);
}
function range2 (a,b,c,d){
	var x = a * d;
	var y = b * c;
	var r = x - y;
	return r; 
}

function ecuacionar(){
	
	var ea1 = parseInt(document.getElementById("ex1").value);
	var eb1 = parseInt(document.getElementById("ey1").value);
	var ec1 = parseInt(document.getElementById("ez1").value);
	var ef1 = parseInt(document.getElementById("er1").value);
	var ea2 = parseInt(document.getElementById("ex2").value);
	var eb2 = parseInt(document.getElementById("ey2").value);
	var ec2 = parseInt(document.getElementById("ez2").value);
	var ef2 = parseInt(document.getElementById("er2").value);
	var ea3 = parseInt(document.getElementById("ex3").value);
	var eb3 = parseInt(document.getElementById("ey3").value);
	var ec3 = parseInt(document.getElementById("ez3").value);
	var ef3 = parseInt(document.getElementById("er3").value);
    
	var resultado_x;
	var resultado_y;
	var resultado_z;

	var mat_principal = [[ea1,eb1,ec1],
			            [ea2,eb2,ec2],
	      	            [ea3,eb3,ec3]];
	var mat_i = [[ef1,eb1,ec1],
			     [ef2,eb2,ec2],
	      	     [ef3,eb3,ec3]];
	var mat_j = [[ea1,ef1,ec1],
			     [ea2,ef2,ec2],
	      	     [ea3,ef3,ec3]];
	var mat_k = [[ea1,eb1,ef1],
			     [ea2,eb2,ef2],
	      	     [ea3,eb3,ef3]];
	var det_p = det_ec(ea1,eb1,ec1,ea2,eb2,ec2,ea3,eb3,ec3);
	var det_i = det_ec(ef1,eb1,ec1,ef2,eb2,ec2,ef3,eb3,ec3);
	var det_j = det_ec(ea1,ef1,ec1,ea2,ef2,ec2,ea3,ef3,ec3);
	var det_k = det_ec(ea1,eb1,ef1,ea2,eb2,ef2,ea3,eb3,ef3);
	
	if(det_p == 0){
		resultado_ec.textContent = ("Error! resultado de la primer determinante = 0")
	}else{
		resultado_x = (det_i/det_p);
		resultado_y = (det_j/det_p);
		resultado_z = (det_k/det_p);
		
		resultado_ec.textContent = ("x = " + resultado_x + " y = " + resultado_y + " z = " + resultado_z);
	}

	function det_ec(a,b,c,d,e,f,g,h,i){
	var determinacion;
	var Princ = 1;
	var Inv = 1;
	var P1 = 1;
	var P2 = 1;
	var I1 = 1;
	var I2 = 1;

	var matrix = [[a,b,c],
				  [d,e,f],
				  [g,h,i]];
	for (var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++){
			if(i == j){
                Princ *= matrix[i][j];
            }
            if(2-i == j){
                Inv *= matrix[i][j];
            }
            if(1+i == j || i == j+2){
                P1 *= matrix[i][j];
            }
            if(2+i == j || i == j+1){
                 P2 *= matrix[i][j];
            }
            if(1-i == j || 2-i == j-2){
                I1 *= matrix[i][j];
            }
            if(2-i == j-1 || 1-i == j+1 ){
                I2 *= matrix[i][j];
            }
		}
	}
	determinacion = ((Princ + P1 + P2) - (Inv + I1 + I2));	
	return determinacion;		  
	}
}