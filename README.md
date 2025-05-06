# sprint3 - Caricaturas clásicas
# Verenice Alitzel Alba Hernandez
# 1. Resumen
Se intenta plasmar una plataforma de striming para ver caricturas clásicas, donde se pueda interactuar con la barra de tareas, es específico en el apartado de género, ya que este boton despliega un menú del cual se puede elegir un género, donde despues de elegirlo abre la pestaña donde se encuentran las caricaturas referentes al genero.
# 2. Requerimientos técnicos
Dnetro de la carpeta Sprint 1. se utilizaron dos archivos HTML: uno principal (index.html), que tiene la función de página de inicio e interfaz principal, y otro (resultado.html), para enlazarse con los dos archivos JSON en los cuales se enceuntra la infromación de los generos para mostrar en pantalla, es por esto que se enlaso con resultado.html para mostrar los resultados correspondientes según el género seleccionado por el usuario.
Desde el archivo index.html se enlazó un archivo JavaScript (script.js) encargado de la lógica de interacción con el usuario, y un archivo de estilos CSS (myStyle.css) para la personalización visual de la plataforma.
# 3. ¿Cómo instalar?
1. Puedes descargar el repositorio manualmente como un archivo .zip y descomprimirlo dentro de la carpeta que sea de su elección.
2. Abrir la carpeta de proyecto Sprint1, en esta se encontrarn todos los archivos 
3. Para abrir los archivos es necesario hacerlo desde un servidor local como lo es live server. primero abrir la carpeta sprint desde viaual studio code, tener en cuanta que ya debe de estar instalado live server, hacer click derecho en el archivo index.html elegir la opción de "Open with Live Server". Donde se abrirá en automáticamente en el navegador.
4. Por último podrá explorar dentro de la plataforma, interactuando con el menú de género.
# 4. Mockup de la aplicación
![image](https://github.com/user-attachments/assets/366a22b8-1157-4c57-8dbc-623dc75f7552)

# 5. Capturas de pantalla
Visualización de la página inicial, la cual contiene el nombre de la plataforma "Caricaturas clásicas" a lado de ella se encuentran la barra de tareas, donde se podrá seleccionar según sea el interes.
![image](https://github.com/user-attachments/assets/55724c79-e78f-48ca-a660-ca65e9cfe903)

En el apartado de busquedas se agrega como un acceso rápido si ya se sabe el título de lo que se desea ver.
![image](https://github.com/user-attachments/assets/c788e13c-41e3-45a7-bc8b-192f5981762d)


En el apartado de generos, despliega los dos generos añadidos, en este se puede elegir el género de interes.
![image](https://github.com/user-attachments/assets/5730506e-7627-4087-9cfe-d2fa9c0285af)

Al presionar la tecla con el género deseado, este manda al usuario a una página donde se muestran las caricaturas relacionadas con el género seleccionado, donde se muestra el titulo, la portada, descripción.
![image](https://github.com/user-attachments/assets/66a0c6b4-80d5-4c80-b837-be3dde1d0f75)

En la parte de abajo cuenta con dos botones para seleccionar o añadirla a favoritos para ver después.
![image](https://github.com/user-attachments/assets/ed9d6d9f-6cd2-4908-84b8-96d385e1ae21)

# 6. Proceso que se siguió para realizarlo
El primer paso fue realizar un mockup, lo cual me ayudó a tener una idea más clara de lo que quería plasmar en la página. A partir de ese diseño, ya sabía por dónde empezar y cómo organizar los elementos visuales.
Comencé creando la carpeta principal del proyecto, donde coloqué todos los archivos necesarios, incluyendo una carpeta de imágenes, el archivo index.html, el archivo script.js, la hoja de estilos myStyle.css y dos archivos .json con la información de los diferentes géneros de caricaturas.
Inicialmente, mi idea era implementar un selector de género directamente dentro del index.html, vinculado a los archivos JSON. Esa parte funcionó parcialmente: el selector aparecía en la página, pero como ya había incorporado una barra de navegación con botones para seleccionar género, favoritos y ayuda, no encontraba la manera de integrar bien ese selector dentro del diseño. Por ese motivo, decidí eliminarlo y, en su lugar, implementé un menú desplegable (dropdown) dentro de la barra de navegación (<nav>), utilizando un div con la clase dropdown. Ahí coloqué una lista de opciones que se vinculan directamente con los archivos JSON, y así logré que el selector de género quedara integrado visualmente dentro de la barra de navegación.
También añadí una barra de búsqueda en el index.html para permitir al usuario buscar caricaturas por nombre.
En cuanto a la navegación, para que al seleccionar un género el sistema pudiera mostrar la información correspondiente, creé un segundo archivo: resultado.html. En este archivo se recibe el nombre del archivo JSON a través de la URL, y luego se realiza un fetch para cargar el contenido dinámicamente. Para mostrar los datos, utilicé cadenas de texto dinámicas (template literals) con interpolación de variables, lo que me permitió construir fácilmente los elementos HTML a partir de los datos del JSON.
En el archivo script.js declaré las variables necesarias para controlar tanto la barra de navegación como la barra de búsqueda. Ahí también se encuentra el código que redirige a la página de resultados con el género seleccionado, así como la lógica para mostrar la información desde los archivos JSON.
Durante el proceso, fui aplicando algunos estilos en myStyle.css para observar cómo se acomodaban los elementos y realizar ajustes en el diseño visual de la plataforma.

# 7. Tabla con Sprint Review
|        ¿Qué salio bien?        |       ¿Qué puedo hacer diferente?      |                   ¿Qué no salio bien?               |
|--------------------------------|----------------------------------------|-----------------------------------------------------|
|El menú con los genros añadidos |Organizar mejor el código,              |1. Primeramente el diseño                            |
|                                |porque en algun punto tenía lineas que  |2. Hacer interactiva la barra de busqueda            |
|                                |ya no se necesitaban                    |3. Organización de archivos para enlazarlosentre si  |                 
|                                |Planificar de mejor forma como implentar|4. Considero que la página podia ser mas funcional en| 
|                                |el código porque al final ya no sabía   |cuestion de la barra de tareas                       |
|                                |para que había creado algunas archivos  |5. Aunque pareca que el apartado de género funciona  |
|                                |                                        |   parcialmente bien, creo que en algún punto puede  |
|                                |                                        |   colapsar.
                                                                        
