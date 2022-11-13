# Instrucciones de ejecución de pruebas en Cypress
***Por favor asegurese de instalar las dependencias requeridas, las puede consultar [aca](../README.md#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)***. <br>
## Pasos de ejecución de pruebas
1. Descargue el repositorio con el comando `git clone https://github.com/luissanta/ghost-test.git`
2. Navegue en la terminal hasta la carpeta 'cypress-project' con el comnando `cd ghost-test/cypress-project`
3. Ejecute el comando `npm install`
4. Verifique que se realizó la instalación de todas las versiones mencionadas previamente
5. Ejecute las pruebas con el siguiente comando: `./node_modules/cypress/bin/cypress run`

## Nota Importante
Dado que el correcto funcionamiento de las pruebas con Cypress dependen de la capacidad de hardware de la máquina en la que se están ejecutando, es probable que alguna de las pruebas falle porque se intente interactuar con un elemento que no se ha renderizado a tiempo. <br>
En este caso, por favor ejecute la prueba desde la interfaz gráfica de Cypress utilizando el siguiente comando: <br>
`./node_modules/cypress/bin/cypress open` <br>
El comando debe ser ejecutado desde la carpeta 'cypress-project'

## Resultados
Usted podrá consultar las capturas de pantalla y videos que se crean al momento de ejecutar la prueba. Estos se encuentran en las carpetas _screenshots_ y _videos_ respectivamente.
