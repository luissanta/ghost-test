# Ambiente de Ghost
Haciendo uso de Microsoft Azure, se desplegó un servidor en donde se instaló Ghost. <br>
En este servidor se están corriendo dos versiones simultaneas de la aplicación: <br>
Versión 3.41.1: http://20.102.114.58/ghost <br>
Versión 4.44.0: http://20.102.114.58:3002/ghost

# Integrantes del equipo 

Luis Fernando Santa - l.santa@uniandes.edu.co<br>
Luis Felipe García - lf.garciar1@uniandes.edu.co <br>
Milton Beltrán - mj.beltran37@uniandes.edu.co <br>
Diego Alejandro Ramírez - da.ramirez55@uniandes.edu.co

# Índice general

[Versiones de software requeridas](#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)<br>
[Estructura del proyecto](#estructura-del-proyecto)<br>
[Instrucciones para ejecución (semana 6)](#instrucciones-para-ejecución-del-proyecto-semana-6)<br>
[Video Semana 6](https://uniandes-my.sharepoint.com/:v:/g/personal/da_ramirez55_uniandes_edu_co/EWVv6kuuSgdImPxGDLLq-K0BiJff5XXrBiN8zu9VBvm00w?e=XUzQ0r) _Recuerde que por restricción de la universidad debe tener usuario registrado Uniandes_<br>
[Reporte de diferencias visuales](https://github.com/luissanta/ghost-test/issues)<br>
[Pros y contras semana 6](#pros-y-contras-semana-6)<br>
[Descripción de funcionalidades](#funcionalidades)<br>
[Descripción de escenarios de pruebas](#escenarios-de-pruebas) <br>
[Pruebas en Cypress](./cypress-project/) <br>
[Pruebas en Kraken](./kraken-project/) <br>
[Estrategias de pruebas modificadas](#estrategias-de-pruebas-modificadas)

# Versiones de software requeridos para la ejecución de los proyectos

Ghost: 3.41.1 y 4.44.0 <br>
Python: 3.10 <br>
Playwright: ^1.27.1<br>
Resemblejs: ^4.1.0 <br>
Node: 14.20.1 <br>
npm: 6.14.17 <br>
xpath: ^2.0.1 <br>
Kraken-Node: 1.0.24 <br>
Cypress: ^10.10.0 <br>
Google Chrome: 107.0.5304.107 (Build oficial) (64 bits) <br>
Windows: Windows 11 Home Single Language 22H2 64 bits <br>

# Estructura del proyecto
## Cypress
├── cypress-project ***--->(Pruebas semana 5 - 20 escenarios)***<br>
├── cypress-project-ghost-3-41-1-vrt ***--->(Pruebas semana 6 - versión Ghost 3.41.1 - 5 escenarios)***<br>
├── cypress-project-ghost-4-44-0-vrt ***--->(Pruebas semana 6 - versión Ghost 4.44.0 - 5 escenarios)***<br>

## Kraken
├── kraken-project ***--->(Pruebas semana 5 - 20 escenarios)***<br>
├── kraken-project-ghost-3-41-1-vrt ***--->(Pruebas semana 6 - versión Ghost 3.41.1 - 5 escenarios)***<br>
├── kraken-project-ghost-4-44-0-vrt ***--->(Pruebas semana 6 - versión Ghost 4.44.0 - 5 escenarios)***<br>

## Estrategias de pruebas
├── estrategias-pruebas ***--->(Estrategias de pruebas actualizadas)***

## Resemble
├── resemble-project ***--->(Comparación y reporte HTML)***

# Instrucciones para ejecución del proyecto (semana 6)
Dado que la ejecución del proyecto completo para la semana 6 requiere múltiples comandos en diferentes carpetas, se creó un script (_script.py_) en Python que ejecuta por el usuario todos los comandos requeridos.

Siga los siguientes pasos para ejecutar el proyecto: <br>
* Clonar el repositorio con el comando: `git clone https://github.com/luissanta/ghost-test.git`
* Navegar a la raíz del repositorio: `cd ghost-test`
* Ejecutar el script de lanzamiento de todas las pruebas del proyecto: `python3 script.py`. Esta ejecución suele tomar algo más de 25 minutos, por favor no cancele el proceso.
* Los archivos HTML que se generan como resultado de la ejecución de las pruebas los podrá encontrar por escenario de pruebas en la carpeta `resemble-project/results`

***Nota Importante: Dadas las limitaciones para la ejecución de Kraken en diferentes versiones de sistemas operativos, en caso de que el script de ejecución no logre ejecutar las pruebas de kraken, favor ejecutarlas con el binario que se encuentra dentro de la carpeta node_modules***

# Pros y contras semana 6
## Pros
* Reducción significativa del tiempo de pruebas de regresión dado que se realiza una comparación automática y de manera rápida entre las diferentes versiones de un proyecto
* Backstop permite realizar comparaciones dinámicas que permiten una visualización de cambios fácil e interactiva
* Resemble, por ser un paquete mas abierto a edición, permite realizar ajustes de personalización que deja abierta la posibilidad de entregar informes o resultados de la manera que más se ajuste a las necesidades
* Tanto Resemble como Backstop son herramientas open source que se pueden implementar rápidamente.
## Contras
* Backstop no permite modificación de su código base, esto de manera particular en nuestro proyecto dificultó el uso de dicha herramienta puesto que esta no está preparada para realizar la comparación de imágenes directamente, por el contrario, se requiere de una comparación o entrega de paginas web, que en nuestro caso no aplicaba.
* Se deben tener conocimientos avanzados en los lenguajes con los que dichas herramientas están construidas para poder realizar cambios como lo fue en nuestro caso: fue requerida una modificación a profundidad en resemble para poder realizar la comparación directa de imágenes.
* Dado que la comparación de imágenes se realiza pixel a pixel, un cambio de tamaño, posición en pantalla o formato pueden arrojar resultados no confiables en las pruebas si lo que se busca es detectar errores y no cambios.

# Funcionalidades

| Funcionalidad       | Descripción                                                                                                                                                                       |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hacer log-in        | Como punto de partida para todas las pruebas E2E de Ghost es importante hacer log-in en el portal de administrador. Esta funcionalidad se encarga de realizar dicho proceso.      |
| Crear un post       | Esta función permite la creación de un post. La invocación de esta múltiples veces permite crear varios posts. Adicionalmente, se parametrizó el nombre y contenido de los posts. |
| Editar un post      | Esta función permite modificar el contenido de un post específico                                                                                                                 |
| Publicar un post    | Esta función publica un post. Es importante mencionar que un post sin publicar queda en estado ‘draft’, mientras que un post publicado queda en estado ‘published’                |
| Borrar un post      | Esta función borra un post. No tiene en cuenta el estado del post a borrar                                                                                                        |
| Crear un tag        | Esta función crea un tag.                                                                                                                                                         |
| Asociar un tag      | Esta función permite asociar un tag dos tipos de recursos diferentes: posts y páginas. A nivel de código son funciones independientes, pero como funcionalidad es la misma.       |
| Crear una página    | Esta función crea una página con un título y contenido que son parametrizables                                                                                                    |
| Publicar una página | Esta función se encarga de publicar una página. Al igual que los posts, las páginas publicadas quedan en estado ‘published’, mientras las no publicadas quedan en estado ‘draft’  |

# Escenarios de pruebas
Cada uno de los siguientes escenarios combina y prueba diferentes funcionalidades de la herramienta Ghost (en la versión mencionada previamente). 
En la descripción de cada escenario se indica el objetivo principal de la prueba y el listado de pasos y/o funcionalidades respectivas.

| **ID Escenario** | **Objetivo prueba E2E**                                                                | **Detalle de funcionalidades/pasos**                                                                                  |
|------------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| ESCP01           | Validar la creación de un post                                                         | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post en portal administrador                                                                            |
|                  |                                                                                        | ·       Validar la creación del post en el portal administrador                                                       |
| ESCP02           | Validar la publicación de un post                                                      | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post en portal administrador                                                                            |
|                  |                                                                                        | ·       Publicar el post creado                                                                                       |
|                  |                                                                                        | ·       Log-out                                                                                                       |
|                  |                                                                                        | ·       Validar la publicación del post como un usuario externo (no admin)                                            |
| ESCP03           | Validar el borrado de un post                                                          | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post en portal administrador                                                                            |
|                  |                                                                                        | ·       Borrar post en el portal administrador                                                                        |
|                  |                                                                                        | ·       Validar borrado del post en el portal administrador                                                           |
| ESCP04           | Validar la correcta edición de un post                                                 | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post en el portal administrador                                                                         |
|                  |                                                                                        | ·       Publicar post creado                                                                                          |
|                  |                                                                                        | ·       Editar el post creado                                                                                         |
|                  |                                                                                        | ·       Publicar el cambio en el post                                                                                 |
|                  |                                                                                        | ·       Log-out                                                                                                       |
|                  |                                                                                        | ·       Validar la edición del post como un usuario externo (no admin)                                                |
| ESCP05           | Validar el borrado de un post publicado                                                | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post en el portal administrador                                                                         |
|                  |                                                                                        | ·       Publicar el post creado                                                                                       |
|                  |                                                                                        | ·       Borrar el post publicado                                                                                      |
|                  |                                                                                        | ·       Validar el borrado del post publicado                                                                         |
| ESCP06           | Validar la creación de un nuevo tag desde la creación de un post                       | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post                                                                                                    |
|                  |                                                                                        | ·       Crear tag desde el menú de creación del post                                                                  |
|                  |                                                                                        | ·       Publicar el post creado                                                                                       |
|                  |                                                                                        | ·       Validar la creación del tag en el portal administrador                                                        |
| ESCP07           | Validar la creación de un tag                                                          | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear tag desde el portal de administrador                                                                    |
|                  |                                                                                        | ·       Validar la creación del tag en el portal administrador                                                        |
| ESCP08           | Validar la asociación de un tag a un post                                              | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear tag                                                                                                     |
|                  |                                                                                        | ·       Crear post                                                                                                    |
|                  |                                                                                        | ·       Añadir tag creado al post                                                                                     |
|                  |                                                                                        | ·       Validar la asociación del tag al post en el portal de administrador                                           |
| ESCP09           | Borrar todo el contenido del ambiente de Ghost                                                                                  | ·     Log-in                                                      
|||· Borrar todo el contenido actual de Ghost|                                                           |
| ESCP10           | Validar la programación de la publicación de un post                                   | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear un post                                                                                                 |
|                  |                                                                                        | ·       Programar la publicación del post                                                                             |
|                  |                                                                                        | ·       Validar el estado ‘scheduled’ en el portal de administrador                                                   |
| ESCP11           | Validar el correcto funcionamiento de la despublicación de un post | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post y dejarlo en estado ‘draft’                                                                        |
|                  |                                                                                        | ·       Publicar post                                                                                       |
|                  |                                                                                        | ·       Validar como usuario externo la publicación del post |
|||· Despublicar el post|
|||· Validar como usuario externo la despublicación  del post|
| ESCP12           | Validar el correcto funcionamiento de filtro de tags                                   | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear de manera aleatoria entre 3 y 6 posts                                                                   |
|                  |                                                                                        | ·       Crear tag                                                                                                     |
|                  |                                                                                        | ·       Asociar el tag creado con 2 posts                                                                             |
|                  |                                                                                        | ·       Validar en el portal de administrador la cantidad de posts con el tag creado utilizando el filtro             |
| ESCP13           | Validar la creación de una página                                                      | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Validar la creación de la página en el portal de administrador                                                |
| ESCP14           | Validar la publicación de una página                                                   | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Log-out                                                                                                       |
|                  |                                                                                        | ·       Validar como un usuario externo la publicación de la página                                                   |
| ESCP15           | Validar el borrado de una página                                                       | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Borrar la página creada                                                                                       |
|                  |                                                                                        | ·       Validar el correcto borrado de la página en el portal de administrador                                        |
| ESCP16           | Validar la edición de una página                                                       | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Publicar la página                                                                                            |
|                  |                                                                                        | ·       Editar la página creada                                                                                       |
|                  |                                                                                        | ·       Log-out                                                                                                       |
|                  |                                                                                        | ·       Validar la edición de la página como un usuario externo                                                       |
| ESCP17           | Validar el borrado de una página publicada                                             | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Publicar la página                                                                                            |
|                  |                                                                                        | ·       Borrar la página                                                                                              |
|                  |                                                                                        | ·       Log-out                                                                                                       |
|                  |                                                                                        | ·       Validar el borrado de la página siendo un usuario externo                                                     |
| ESCP18           | Validar la creación de un tag desde el menú de páginas                                 | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear una página y un tag desde el menú de creación de página                                                 |
|                  |                                                                                        | ·       Publicar la página                                                                                            |
|                  |                                                                                        | ·       Validar la creación del tag desde el portal de administrador                                                  |
| ESCP19           | Validar la asociación de un tag a una página                                           | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear un tag                                                                                                  |
|                  |                                                                                        | ·       Crear una página                                                                                              |
|                  |                                                                                        | ·       Añadir el tag a la página                                                                                     |
|                  |                                                                                        | ·       Validar la asociación del tag a la página en el portal de administrador                                       |
| ESCP20           | Validar la asociación de un mismo tag a dos páginas diferentes                         | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear un tag                                                                                                  |
|                  |                                                                                        | ·       Crear dos páginas diferentes                                                                                  |
|                  |                                                                                        | ·       Añadir el tag creado a las páginas                                                                            |
|                  |                                                                                        | ·       Validar la asociación del tag con las dos páginas en el portal de administrador                               |



# Estrategias de pruebas modificadas
Esta semana para las dos estrategias de pruebas se decidió asignar tiempo de los desarrolladores en la construcción y desarrollo del proceso de automatización de VRT.<br>
Este proceso es relevante puesto que a mediano plazo significará un ahorro de tiempo y recursos importante. Adicionalmente será posible detectar cambios y posibles fallas que una persona probablemente no notaría a nivel visual en una UI. <br>
A continuación se encuentran los enlaces a las estrategias de pruebas actualizadas: <br>
[Estrategias de pruebas actualizadas](./estrategias-pruebas/)<br>



