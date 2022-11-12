# Integrantes del equipo 

Luis Fernando Santa <br>
Luis Felipe García <br>
Milton Beltrán <br>
Diego Alejandro Ramírez

# Índice general

[Versiones de software requeridas](#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)<br>
[Descripción de funcionalidades](#funcionalidades)<br>
[Descripción de escenarios de pruebas](#escenarios-de-pruebas) <br>
[Cypress (pros y contras)](#cypress) <br>
[Pruebas en Cypress]() <br>
[Kraken (pros y contras)](#kraken)<br>
[Pruebas en Kraken]() <br>
[Estrategias de pruebas modificadas]()

# Versiones de software requeridos para la ejecución de los proyectos

Ghost: 3.41.1 <br>
Node: 14.20.1 <br>
npm: 6.14.17 <br>
Kraken-Node: 1.0.24 <br>
Cypress: ^10.10.1 <br>
Google Chrome: 107.0.5304.107 (Build oficial) (64 bits) <br>

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
| ESCP09           | Check                                                                                  | Check                                                                                                                 |
| ESCP10           | Validar la programación de la publicación de un post                                   | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear un post                                                                                                 |
|                  |                                                                                        | ·       Programar la publicación del post                                                                             |
|                  |                                                                                        | ·       Validar el estado ‘scheduled’ en el portal de administrador                                                   |
| ESCP11           | Validar el correcto funcionamiento del filtro de estados de post para el valor ‘draft’ | ·       Log-in                                                                                                        |
|                  |                                                                                        | ·       Crear post y dejarlo en estado ‘draft’                                                                        |
|                  |                                                                                        | ·       Crear post y publicarlo                                                                                       |
|                  |                                                                                        | ·       Validar en el portal de administrador la cantidad correcta de posts en el estado ‘draft’ utilizando el filtro |
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




# Cypress
En la siguiente sección se presentan los pros y contras de Cypress
## Pros
* Matenimiento y actualizaciones constantes
* Facilidad en el uso
* Amplia documentación
* Compatibilidad con múltiples navegadores
* Versatilidad en la organización de la estructura del código fuente
## Contras
* Curva de aprendizaje moderada
* No cuenta con una manera nativa de utilizar nativamente los patrones vistos (Given-When-Then y PageObject)
# Kraken
En la siguiente sección se presentan los pros y contras de Kraken
## Pros
* Fácil codificación
* Fácil lectura de código
* Organización nativa de la estructura del código
* Posibilidad de simular interacción simultanea por varios usuarios (desde diferentes perspectivas) en una misma aplicación
* Posibilidad de usar señalizaciones
* Nativamente soporta la capacidad de fácilmente utilizar los patrones vistos (Given-When-Then y PageObject)
## Contras
* Documentación inexistente
* Dificultad en la instalación y puesta a punto para iniciar pruebas
* Falta de mantenimiento