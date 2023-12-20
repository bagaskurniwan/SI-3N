let nilai = prompt("inputkan nilai akhir:");
let grade = "";
function contoh IfElse()
{
	let nilai = prompt("inputkan nilai akhir:");
	let grade = "";

// kondisi if else ="";
if (nilai >= 80) grade ="A"
else if (nilai > = 70) grade = "B"
else if (nilai > = 60) grade = "C"
else if (nilai > = 50) grade = "D"	
	else grade = "E";

//document.write(`grade yang diperolehkan adalah : ${grade}`);

document.write('grade yang diperolehkan adalah : +grade');
}
function contohswichtCase()
{
	let nilai = prompt("inputkan nilai akhir:");
	let grade = "";
	switch(grade){

	case nilai >= 80:
	grade= "A";
	break;

	case nilai >= 70:
	grade= "B";
	break;

	case nilai > 60:
	grade ="C";
	break

	case nilai > 50:
	grade ="D";
	break

	default:
	grade = "E";
}

	document.write('nilai uas' :+grade);
}

function contohforeach()
{
	let hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];// nilai array
	hari.foreach(function(day){
		document.write(day +"<br>");
	});
}

