# Instrucciones de ejecución de pruebas en Kraken
***Por favor revise las versiones de software requeridas [aca](../README.md#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)***. Es necesario que tenga instalas las versiones mencionadas previo a inicial la ejecución de las pruebas<br>
1. Descargue el repositorio
2. Navegue en la terminal hasta la carpeta 'kraken-project'
3. Note que dentro de la carpeta de features existen varios archivos que **NO** tienen la extensión .feature.<br>
Dado que Kraken no permite la ejecución de varios tests en serie, usted deberá modificar la extensión de las prueba que requiera ejecutar y asegurarse que sea '.feature'.<br>
Ejemplo: <br>
Nombre original del archivo: _create-page.featur_
Nombre que debe quedar para poder ejecutar la prueba: _create-page.feature_ <br>
Es importante, por lo mencionado anteriormente, que exista un único archivo con la extensión '.feature', por lo tanto, si está probando múltiples archivos no olvide ir ajustando la extensión de los archivos.
4. Ejecute el comando `kraken-node run`


