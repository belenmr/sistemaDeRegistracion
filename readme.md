# Sistema de Registracion V1

## Objetivo
Para la construcción de esta versión del aplicativo, esperamos contar con la posibilidad de acceso a las siguientes URL's:
- **/ register (GET)**
    - Mostrará el formulario de registro de usuario con los campos:
        - Nombre
        - Apellido
        - Email
        - Contraseña
        - Repetir Contraseña
        - Avatar (subida de archivos de imagen)
- **/profile (GET)**
    - A esta sección se deberá llevar al usuario cuando el mismo haya completado su proceso de registro. Esta sección deberá mostrar: nombre del usuario, su email y su avatar.


## Consignas
A continuación se detalla lo que deberá mostrar cada ruta.

#### 1. Sobre la interfaz
De momento no queremos que la interfaz tenga ningún estilo visual específico, así que por esta vez podés escapar del CSS.

#### 2. Sobre el desarrollo
De momento no queremos algo "tan" estructurado, desde que el sistema registre usuarios con sus correspondientes avatares, estaremos más que bien.

#### 3. Sobre los requerimientos técnicos
Como siempre, queremos que todo ande bajo un esquema de Node y Express. Y que las personas registradas se persistan en un archivo JSON. Así mismo queremos que los avatares de las personas registradas se suban correctamente al servidor y que se puedan relacionar los mismos con los datos de cada persona.

Como plus quisiéramos que las personas registradas no se pudieran registrar más de una vez con el mismo correo electrónico.

Como plus quisiéramos que la ruta /profile pudiera ser accedida también desde un formulario de login.