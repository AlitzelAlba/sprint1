# sprint3 - Caricaturas clásicas
# Verenice Alitzel Alba Hernandez
# 1. Descripción 
Se intenta plasmar una plataforma de striming para ver caricturas clásicas, donde se pueda interactuar con la barra de tareas, es específico en el apartado de género, ya que este boton despliega un menú del cual se puede elegir un género, donde despues de elegirlo abre la pestaña donde se encuentran las caricaturas rceferentes al genero.

# 2. Objetivo

# 3. Mockup de la aplicación
![image](https://github.com/user-attachments/assets/366a22b8-1157-4c57-8dbc-623dc75f7552)

# 5. Proyecto en ejecución
Imagen de la pantalla inicial, se encuentra una barra de tareas.
![image](https://github.com/user-attachments/assets/2ab36a7f-e64a-445a-b77b-ce250194fe3a)

El boton de genero despliega un menú de seleccion.
![image](https://github.com/user-attachments/assets/976af056-6c77-40c9-b47d-cf65d0f0d57a)

Al seleccionar alguno de los dos generos este debera redireccionarte a la pagina con el genero correspondiente
En la siguiente imagen solo se mostrara un anuncio en pantalla ya que aun no logro enlazar el json de forma correcta, pero si se puede ver en el url que se hace la busqueda.
![image](https://github.com/user-attachments/assets/c87087ab-7bbe-4890-9004-9ddf2642f4d3)

De igual forma pasa lo mismo con el segundo género.
![image](https://github.com/user-attachments/assets/d08e4507-c895-4ae8-9bbc-17989ccfe94c)

La pagina se adapta al tamaño de la pantalla, según sea el caso.
![image](https://github.com/user-attachments/assets/0d7a1084-a3a8-4697-871c-9d932ee2a4f1)

# 6. Instrucciones para instalar y usar el repo

# 7. Dependencias o bibliotecas utilizadas

# 8. Descripción del como se realizo

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

# 11. Retrospectiva
¿Que hice bien?

¿Qué no salio bien?

¿Qué puedo hacer diferente?
      
