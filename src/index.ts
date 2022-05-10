let nombreAlumno = prompt ( "Ingrese el nombre del alumno (vacío para cortar)" ) ; 
let notaPractica , notaProblemas , notaTeorica , notaFinal : numero ;
while ( nombreAlumno !== "" ) {
notaPractica = Numero ( prompt ( "Nota práctica: " ) ) ;
notaProblemas = Numero ( prompt ( "Nota problemas: " ) ) ;
notaTeorica = Numero ( prompt ( "Nota teórica: " ) ) ;
if ( ( notaPractica <= 10 && notaPractica >= 0 ) && ( notaProblemas <= 10 && notaProblemas >= 0 ) && 
( notaTeorica <= 10 && notaTeorica >= 0 ) {
notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4 ;
consola _ log ( "La nota final de" , nombreAlumno , "es:" , notaFinal ) ;
} mas {
consola _ log ( "Error en las notas ingresadas" ) ;
}
nombreAlumno = prompt ( "Ingrese el nombre del alumno (vacío para cortar)" ) ;
}
