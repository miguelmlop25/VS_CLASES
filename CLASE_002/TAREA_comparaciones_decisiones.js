const nota = 100;

console.log("La nota del alumno es: " + nota);

if (nota > 0) {

  if (nota >= 90) {
    console.log("Excelente");
  } else if (nota >= 75) {
    console.log("Bien");
  } else if (nota >= 60) {
    console.log("Suficiente");
  } else {
    console.log("No aprobado")
  }

} else if (nota === 0){
  console.log("No aprobado")
} else {
  console.log("La nota ingresada no es válida, ingresa otro valor")
}