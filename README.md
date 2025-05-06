# sprint3 - Caricaturas clásicas
# Verenice Alitzel Alba Hernandez
# 1. Descripción 
Este proyecto busca simular una plataforma de *streaming* para visualizar caricaturas clásicas. El enfoque principal está en la interacción mediante una barra de navegación, en particular en el apartado de géneros. Al seleccionar un género desde el menú desplegable, se redirige al usuario a una vista donde se muestran caricaturas pertenecientes a dicha categoría.

# 2. Objetivo
El objetivo de esta actividad es desarrollar una plataforma interactiva para el consumo de caricaturas clásicas, que permita la navegación por géneros a través de una estructura basada en archivos JSON. Adicionalmente, se busca integrar `RxJS` y realizar pruebas unitarias para asegurar un rendimiento adecuado y estabilidad en el código. Finalmente, se deben ejecutar pruebas de cobertura para alcanzar al menos un 50% de *code coverage*.

# 3. Mockup de la aplicación
![image](https://github.com/user-attachments/assets/366a22b8-1157-4c57-8dbc-623dc75f7552)

# 5. Proyecto en ejecución
Pantalla inicial con barra de tareas:  
![Pantalla inicial](https://github.com/user-attachments/assets/2ab36a7f-e64a-445a-b77b-ce250194fe3a)

Menú desplegable al presionar el botón de géneros:  
![Menú de géneros](https://github.com/user-attachments/assets/976af056-6c77-40c9-b47d-cf65d0f0d57a)

Redirección según el género seleccionado (aunque aún no se carga el JSON correctamente):  
![Redirección 1](https://github.com/user-attachments/assets/c87087ab-7bbe-4890-9004-9ddf2642f4d3)  
![Redirección 2](https://github.com/user-attachments/assets/d08e4507-c895-4ae8-9bbc-17989ccfe94c)

El diseño es adaptable a diferentes tamaños de pantalla:  
![Responsive](https://github.com/user-attachments/assets/0d7a1084-a3a8-4697-871c-9d932ee2a4f1)

# 6. Instrucciones para instalar y usar el repo
1. Verificar si se tiene git instalado
   Abre la terminal en tu dispositivo e ingresa el siguiente comando
   git --version
   Si te regresa una versión como git version 2.40.1, significa que ya lo tienes. Si te dice que el comando no se reconoce, entonces necesitas instalarlo.
2. Copia la URL del repositorio que se quiere clonar.
3. Ya que tienes la URL, abre la terminal y clona el repositorio con el siguiente comando git clone anexa la url del repositorio. Con esto git va a empezar a descargar todo el contenido del repositorio en una carpeta con el mismo nombre. Git lo genera en automatico.
4. Cuando termine de clonar, cambia de directorio con el siguiente comando: cd nombre-del-repositorio. Aquí es donde vas a trabajar todo el tiempo. Siempre que vayas a hacer git status, git pull, git commit o cualquier otro comando, asegúrate de estar dentro de esta carpeta.
5. Por ultimo, para asegurarte que se clonó bien ejecuta git status

# 7. Dependencias o bibliotecas utilizadas
@angular/*: Todos los módulos principales de Angular.
bootstrap: Para el diseño y estilos CSS.
express: Usado probablemente para el server-side rendering (SSR) con Angular Universal.
rxjs: Para programación reactiva en Angular.
zone.js: Angular lo usa para detectar cambios.
tslib: Soporte para TypeScript.

@angular/cli, @angular-devkit/build-angular: Herramientas para compilar, servir y crear proyectos Angular.
jasmine, karma, @types/*: Librerías y tipados para pruebas unitarias.
typescript: El compilador TS que Angular necesita para funcionar.
@types/node, @types/express: Tipados de TypeScript para que el editor/autocompletado funcione
bien al escribir código de servidor.

# 8. Descripción del como se realizo
Este proyecto es el resultado de la migración de un sitio web estático (hecho con HTML, CSS y JavaScript puro) a Angular usando la arquitectura standalone. Se creó una nueva estructura en Angular donde cada funcionalidad fue separada en componentes como generos-pelicula, lista-peliculas y search-pelicula.
Para lograr la interacción dinámica con archivos JSON como lo son 1_comedia.json, 2_superHeroes.json, se usó el servicio TmdbService que realiza peticiones HTTP hacia los archivos ubicados en la carpeta assets. Además, se configuraron rutas dinámicas utilizando ActivatedRoute para capturar parámetros desde la URL, permitiendo mostrar diferentes géneros de caricaturas según la selección del usuario.
El sistema de navegación fue rediseñado utilizando RouterModule y rutas tipo /listapeliculas/:archivo, y todo el proyecto se adaptó a la estructura modular standalone.
# 9. Reporte de Code Coverage y reporte de testing
![image](https://github.com/user-attachments/assets/6e4b0a7a-e6eb-4161-bab3-c9bbdb08e314)
![image](https://github.com/user-attachments/assets/0a492545-ddbe-4ed3-be3e-a66d7ed8b84a)
✔ Browser application bundle generation complete.
⠙ Generating browser application bundles (phase: building)...06 05 2025 02:08:06.882:WARN [karma]: No captured browser, open http://localhost:9876/
06 05 2025 02:08:06.955:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 05 2025 02:08:06.956:INFO [launcher]: Launching browser⠹ Generating browser application bundles (phase: building)...06 05 2025 02:08:06.973:INFO [launcher]: Starting brows✔ Browser application bundle generation complete.
06 05 2025 02:08:07.424:WARN [karma]: No captured browser, open http://localhost:9876/
06 05 2025 02:08:08.594:INFO [Chrome 135.0.0.0 (Windows 10)]: Connected on socket XzF2WRz9o6qPWpHKAAAB with id 52624303
Chrome 135.0.0.0 (Windows 10): Executed 0 of 9 SUCCESS (0 Chrome 135.0.0.0 (Windows 10): Executed 1 of 9 SUCCESS (0 Chrome 135.0.0.0 (Windows 10) ListaPeliculasComponentComponent should create FAILED
        NullInjectorError: R3InjectorError(Standalone[ListaPeliculasComponentComponent])[ActivatedRoute -> ActivatedRoute -> ActivatedRoute]:
          NullInjectorError: No provider for ActivatedRoute!
        error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'ActivatedRoute', 'ActivatedRoute', 'ActivatedRoute' ] })
            at NullInjector.get (node_modules/@angular/core/fesm2022/core.mjs:1624:27)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at ChainedInjector.get (node_modules/@angular/core/fesm2022/core.mjs:17238:36)
            at lookupTokenUsingModuleInjector (node_modules/@angular/core/fesm2022/core.mjs:5063:39)
            at getOrCreateInjectable (node_modules/@angular/core/fesm2022/core.mjs:5111:12)
            at ɵɵdirectiveInject (node_modules/@angular/core/fesm2022/core.mjs:17289:19)
            at NodeInjectorFactory.factory (ng:///ListaPeliculasComponentComponent/ɵfac.js:4:76)
            at getNodeInjectable (node_modules/@angular/core/fesm2022/core.mjs:5323:44)
Chrome 135.0.0.0 (Windows 10): Executed 2 of 9 (1 FAILED) Chrome 135.0.0.0 (Windows 10) ListaPeliculasComponentComponent debería cargar las caricaturas desde el servicio FAILED
        NullInjectorError: R3InjectorError(Standalone[ListaPeliculasComponentComponent])[ActivatedRoute -> ActivatedRoute -> ActivatedRoute]:
          NullInjectorError: No provider for ActivatedRoute!
        error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'ActivatedRoute', 'ActivatedRoute', 'ActivatedRoute' ] })
            at NullInjector.get (node_modules/@angular/core/fesm2022/core.mjs:1624:27)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at R3Injector.get (node_modules/@angular/core/fesm2022/core.mjs:2151:33)
            at ChainedInjector.get (node_modules/@angular/core/fesm2022/core.mjs:17238:36)
            at lookupTokenUsingModuleInjector (node_modules/@angular/core/fesm2022/core.mjs:5063:39)
            at getOrCreateInjectable (node_modules/@angular/core/fesm2022/core.mjs:5111:12)
            at ɵɵdirectiveInject (node_modules/@angular/core/fesm2022/core.mjs:17289:19)
            at NodeInjectorFactory.factory (ng:///ListaPeliculasComponentComponent/ɵfac.js:4:76)
            at getNodeInjectable (node_modules/@angular/core/fesm2022/core.mjs:5323:44)
Chrome 135.0.0.0 (Windows 10): Executed 3 of 9 (2 FAILED) Chrome 135.0.0.0 (Windows 10): Executed 4 of 9 (2 FAILED) Chrome 135.0.0.0 (Windows 10) AppComponent should render title FAILED
        Expected undefined to contain 'Hello, Sprint_1'.  
            at <Jasmine>
            at UserContext.apply (src/app/app.component.spec.ts:27:55)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:369:28)
            at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:2082:39)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:368:34)
Chrome 135.0.0.0 (Windows 10): Executed 5 of 9 (3 FAILED) Chrome 135.0.0.0 (Windows 10): Executed 6 of 9 (3 FAILED) Chrome 135.0.0.0 (Windows 10) TmdbService should fetch peliculas desde archivo JSON FAILED
        Error: Expected one matching request for criteria "Match URL: assets/json/comedia.json", found none. Requests received are: GET assets/comedia.
            at HttpClientTestingBackend.expectOne (node_modules/@angular/common/fesm2022/http/testing.mjs:277:19)   
            at UserContext.apply (src/app/services/tmdb.service.spec.ts:38:26)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:369:28)
            at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:2082:39)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:368:34)
            at ZoneImpl.run (node_modules/zone.js/fesm2015/zone.js:111:43)
            at runInTestZone (node_modules/zone.js/fesm2015/zone-testing.js:216:38)
            at UserContext.<anonymous> (node_modules/zone.js/fesm2015/zone-testing.js:234:32)
            at <Jasmine>
        Error: Expected no open requests, found 1: GET assets/comedia
            at HttpClientTestingBackend.verify (node_modules/@angular/common/fesm2022/http/testing.mjs:305:19)      
            at UserContext.apply (src/app/services/tmdb.service.spec.ts:20:14)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:369:28)
            at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:2082:39)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:368:34)
            at ZoneImpl.run (node_modules/zone.js/fesm2015/zone.js:111:43)
            at UserContext.<anonymous> (node_modules/zone.js/fesm2015/zone-testing.js:234:32)
            at <Jasmine>
Chrome 135.0.0.0 (Windows 10): Executed 7 of 9 (4 FAILED) Chrome 135.0.0.0 (Windows 10): Executed 8 of 9 (4 FAILED) Chrome 135.0.0.0 (Windows 10): Executed 9 of 9 (4 FAILED) Chrome 135.0.0.0 (Windows 10): Executed 9 of 9 (4 FAILED) (0.011 secs / 0.236 secs)
TOTAL: 4 FAILED, 5 SUCCESS

=============================== Coverage summary ===============================
Statements   : 48.27% ( 14/29 )
Branches     : 16.66% ( 1/6 )
Functions    : 45.45% ( 5/11 )
Lines        : 42.3% ( 11/26 )
================================================================================


# 10. Problemas conocidos
La integración de los archivos JSON aún no refleja contenido en la vista, aunque el fetch se realiza correctamente.
Al trabajar con Git, surgieron confusiones entre ramas y conflictos al hacer commits y push, lo que llevó a errores que no supe corregir en su momento.
Las pruebas unitarias fallan por configuraciones pendientes en ActivatedRoute y el uso de rutas dinámicas.
# 11. Retrospectiva
¿Que hice bien?
Logré migrar un proyecto web a Angular utilizando componentes standalone.
Implementé la navegación dinámica mediante rutas con parámetros.
Separé las funciones en componentes reutilizables, para mejorar la organización del código.
Implementacio y uso de servicios HttpClient y el acceso a datos externos mediante JSON.
¿Qué no salio bien?
No logré que el contenido de los archivos JSON se mostrara correctamente en pantalla, a pesar de que las rutas funcionan.
No terminé de configurar correctamente algunas partes del entorno como pruebas unitarias o rutas mal construidas.
¿Qué puedo hacer diferente?
Planificar mejor la estructura del proyecto antes de comenzar a migrar.
Verificar cada etapa de forma modular y hacer pruebas unitarias pequeñas para no acumular errores.
Mejorar el control de versiones en Git.

