# Instrucciones de ejecución de pruebas en Kraken
***Por favor asegurese de instalar las dependencias requeridas, las puede consultar [aca](../README.md#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)***. <br>
Es importante que adicional a las dependencias mencionadas, tenga instalado:
* [Android Studio + SDK](https://developer.android.com/studio?hl=es-419&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEH2zsb71mQ0kZhbsj5HxiuijuPeHdkv-66wrNd9WJnOpI1sJ9VU3KMaAlRrEALw_wcB&gclsrc=aw.ds)
* Appium, este se instala con el comando `npm install -g appium`
## Pasos de ejecución de pruebas
1. Descargue el repositorio con el comando `git clone https://github.com/luissanta/ghost-test.git`
2. Navegue en la terminal hasta la carpeta 'kraken-project' con el comnando `cd ghost-test/kraken-project`
3. Note que dentro de la carpeta de features existen varios archivos que **NO** tienen la extensión .feature.<br>
Dado que Kraken no permite la ejecución de varios tests en serie, usted deberá modificar la extensión de las prueba que requiera ejecutar y asegurarse que sea '.feature'.<br>
**Ejemplo:** <br>
Nombre original del archivo: `create-page.featur`<br>
Nombre que debe quedar para poder ejecutar la prueba: `create-page.feature` <br>
Es importante, por lo mencionado anteriormente, que exista un único archivo con la extensión '.feature', por lo tanto, si está probando múltiples archivos no olvide ir ajustando la extensión de los archivos.
4. Ejecute el comando `kraken-node run`


