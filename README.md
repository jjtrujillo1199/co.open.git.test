<p align="center">
  <img src="https://openits.co/wp-content/uploads/2020/07/log-peque.png" alt="Opentecnologia"><br>
  <img src="https://img.shields.io/badge/language-JavaScript-yellow" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/Tributaria-OPentecnologia-green" alt="JavaScript Badge">
</p>

# CO.OPEN.GIT.TEST ![JavaScript](https://img.shields.io/badge/Retos-Git-blue)

## Repositorio para pruebas con GIT y GitHub

Este repositorio ha sido creado con el propósito de llevar a la práctica el uso de Git y GitHub en proyectos reales. En este repositorio tendremos la oportunidad de experimentar en los comandos para el control de versiones en diferentes ramas haciendo merge, pull requests y entre otros. El objetivo es investigar y llevar a la práctica las diferentes funcionalidades que nos brinda la herramienta de GIT la cual nos permite tener un entorno de trabajo controlado y organizado, de igual forma nos ayuda a la adopción de buenas prácticas en el desarrollo de software mediante el uso de otras herramientas como VSCode.

# #1 Reto

1. Actualizar git
```
brew upgrade git
```
2. Crear la rama y la renombrar 
```
git init -b main
```
3. Se crea el archivo README.md
```
touch README.md
```
4. Agregar el archivo (El . permite agregar todos los archivos que estan dentro de una carpeta el -A agerga todos los archivos del repositorio)
```
git add .
```
5. Comit del inicio del proyecto
```
git commit -m "Inicio del proyecto"
```
6. Hace el llamado del repositorio remoto y hace push
```
git remote add origin https://github.com/jjtrujillo1199/co.open.git.test.git
git push -u origin main
git push origin main
```
(El -u envia los archivos que no tienen segumiento por ejemplo los que fueron creados recientemente)

7. Generar historial de comandos
```
history | grep git
```

# #2 Reto

1.  Crear las Carpetas vendor y node_modules
```
mkdir vendor node_modules
```

2. Crear los archivos dentro de las carpetas 
```
touch index.html test.log
touch vendor/autoload.php
touch node_modules/index.ts
touch .gitignore
```
Se crea el archivo .gitignore para indicar que archivos o carpetas excluir al momento de hacer push al repo remoto (*) Todos los archivos con la extensión

3. Agregar todos los archivos 
```
git add -A
git status
```

4. Hacer commit al repo remoto
```
git commit -m "Excluir archivos y carpetas al momento de hacer push"
git push origin main
```

# #3 Reto

1. Se eliminaron los archivos index y test y las carpetas vendor y node_modules

2. Se valido el estado de los archivos
```
git status
```

3. Inidicalizar el proyecto de node.js y completar la información del package.json
```
npm init 
```

4. Se agregan los nuevos archivos, se hace el commit y push al repo remoto
```
git add .
git commit -m "Inicializar el proyecto de Node"
git push origin main
```

# #4 Reto

1.  Ejecutar el siguiente comando para crear la rama development a partir de main y quedar en ella
```
git checkout -b development
```
'checkout' Permite quedar en la rama development directamente

2. Ejecutar el comando para regresar a la rama main
```
git checkout main
```

3. Se modifica el archivo index en la rama main

4. Ejecutar el comando para guardar temporalmente los cambios en el stash
```
git stash
git stash list
```
Se puede definir un nombre al stash con el comando 
```
git stash save -m "Nombre del stash"
```

5. Ejecutar el comando para cambiar a la rama development
```
git checkout development
```

6. Se modifica el archivo index en la rama main

7. Agragar los cambios realizados, realizar commit y push a la rama development
```
git add .
git commit -m "Se creo la rama development a partir de main"
git push origin development
```
Al hacer push siempre indicar el nombre de la rama

8. Cambiar a la rama main
```
git checkout main
```

9. Se recuperan los cambio guardados en el stash
```
git stash pop
```
El comando anterior recupera los ultimos cambios guardados y elimina el stash de la lista

10. Agragar los cambios realizados, realizar commit y push a la rama main
```
git add .
git commit -m "Se modificó la rama main en el archivo index.js"
git push origin main
```

# #5 Reto
1. Ubicarse en la rama main
```
git checkout main
```
2. Crear un archivo llamado operaciones.ts agregando una función que permita sumar dos números y retornar el resultado
```
touch operaciones.ts
```
3. Sin perder el cambio de la rama main y sin hacer commit o push de los cambios, cambiar a la rama development,
recuperar las modificaciones hechas en el punto 2 asegurandose que los cambios permanezcan disponibles para ser usados en cualquier otra rama
```
git stash -u -m "Se crea el archivo operaciones.ts en rama main"
git checkout development
git stash apply
```
4. Hacer push a la rama development
```
git add .
git commit -m "Creación del archivo operaciones.ts rama development"
git push origin development
```

5. Regresar a la rama main, recuperar los cambios. NO se debe hacer commit ni push a la rama main
```
git checkout main
git stash apply stash@{0}
```
6. Eliminar el archivo package.json del proyecto
```
rm package.json
```
7. Recuperar el archivo package.json
```
git restore package.json
```


# #Reto 6

1. Ubicarse en la rama main
```
git checkout main
```
2. Actualizar el repo remoto en la rama main con los cambios pendientes del reto anterior
```
git add -A
git commit -m "Creación del archivo operaciones.ts rama main"
git push origin main
```
3. Cambiar a la rama development
```
git checkout development
```
4. Modificar el archivo operaciones.ts para:
    4.1. Agrega en la primera línea del archivo: console.log('Operaciones Matamáticas');
    4.2. Cambia el nombre del método suma por opAdd
    4.3. Agregar un tercer parámetro al método opAdd y que sea tenido en cuenta en la operación
    4.4. Agregar un nuevo método llamado opLess, que reciba dos parámetros y retorne el valor de la operación de restar los dos parámetros

Se hizo la modificación manualmente en el archivo

5. Actualizar la rama development en el repo remoto
```
git add -A
git commit -m "Modificación del archivo operaciones.ts para agregar nueva función rama development"
git push origin development
```
6. Cambiar a la rama main y modificar el archivo operaciones.ts agregando una operación de división, luego actualizar la rama main con el cambio en el repo remoto 
```
git checkout main

git add -A
git commit -m "Modificación del archivo operaciones.ts para agregar nueva función rama main"
git push origin main
```

7. Fusionar los cambios de la rama remota development en la rama local main
```
git fetch origin
git merge origin/development
git status
git add :/
```

git fetch origin Permite obtener los cambio mas recientes desde el repo remoto
git add :/ permite visualizar cuales fueron los cambios realizados en el merge

8. Actualizar la rama main en el repo remoto
```
git add -A
git commit -m "Modificación de los archivos fusionados en rama main"
git push origin main
```

# #Reto 7
Rama main: El objetivo es recuperar el estado y contenido del archivo operaciones.ts en donde solo tenía el método suma()

## Solución 1
```
git reset --soft 869dafb13e5a874d8d2f491940826c747d83cb6d # Recupera el estado del archivo
git restore --staged operaciones.ts # Devuelve cambios en el stage
git restore operaciones.ts # Deja el archivo en el estado inicial antes del commit

# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 83e5ac1a304f3628d531a43390b52845e9c2844b
```

## Solución 2
```
# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 869dafb13e5a874d8d2f491940826c747d83cb6d
```

Cual de las dos es la solución recomendada? eso depende, si estoy seguro de devolver todos los cambios la solución 2 es mejor, pero si debo ir con cuidado para revisar algo en el camino, la solución recomendada es la 1 que es útil cuando hay muchos archivos/cambios en el histórico

Otra diferencia va a ser la conservación del histórico de cambios de GIT, la solución 1 conserva todo el histórico, la solución 2 no

## Reto 8

Agrega el siguiente método en el archivo de operaciones en la rama main:

```
function multiplicar(a, b) {
    return a*b;
}
```

1. Actualiza el cambio en repo remoto (commit y push)
```
git add -A
git commit -m "Modificación del archivo operaciones.ts se agregó método multiplicar rama main"
git push origin main
```

Supongamos que el PO del proyecto nos indicó que el método no debía ser ese sino que debía ser el siguiente por lo que debes reemplazar el método multiplicar():
```
function porcentaje(a, b) {
    return (a*b)/100;
}
```

2. Actualiza el cambio en repo remoto (commit y push)
```
git add -A
git commit -m "Modificación del archivo operaciones.ts se reemplazó el método multiplicar rama main"
git push origin main
```

Nuevamente el PO nos indica que debemos devolver el cambio y dejar solo el método múltiplicar, pero además notas que el método multiplicar() tiene un bug,
porque generará una excepción si los parámetros a y b no son números, por lo que debes corregirlo

Para corregir el bug deberás tener en cuenta:

1. No puedes usar git checkout <commit>
2. No puedes usar git reset <commit>
3. No puedes simplemente modificar el archivo y hacer un nuevo commit, en este caso sería la solución más sencilla pero no esta permitido
4. Debes buscar otra manera de realizar el cambio, en donde a nivel del histórico de cambios quede registrada (commit) la recuperación del cambio
5. Soluciona el bug del método multiplicar
6. Actualiza los cambios en el repo remoto
7. Mezcla la rama main local en la rama development local y actualiza el repo remoto

Deja registro de todo el proceso


3. Se ejecuta el comando el cual permite deshacer el último commit, pero mantiene el historial de los commit
```
git revert HEAD
```

4. Se hace el commit con los cambios realizados y se llevan a la rama remota
```
git add -A
git commit -m "Modificación del archivo operaciones.ts se restauró el método multiplicar rama main"
git push origin main
```

5. Me paso a la rama development para hacer merge con la rama local main y se llevan los cambios a la rama remota
```
git checkout development
git merge main
git push origin development
```