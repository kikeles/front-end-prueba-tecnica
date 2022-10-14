####### Pasos para la creación del ambiente para ejecutar Vue.js en Windows ###########

Clonar el repositorio y seguir con los siguientes pasos: 

1. Verificar primeramente si se tiene instalado Node.js en el equipo
-> abrir la consola de comandos cmd o PowerShell y colocar 
node -v
npm -v

2. Si no se reconoce el comando anterior descargar el Windows Installer (.msi) 
he instalarlo, la descarga se puede hacer del siguient link:
https://nodejs.org/en/download/

una vez descargado verificar con los comandos del paso 1.

3. Instalar vue/cli desde el cmd o PowerShell 
para poder correr el proyecto SPA mediante el siguiente comando:
npm install -g @vue/cli

una vez instalada verificar la versión de la instalación
vue --version

4. Dirigirse a la carpeta donde se clono el repositorio mediante cmd o PowerShell 
y ejecutar el siguiente comando, para instalar todas las dependencias del SPA:
npm install

5. Una vez terminada la instalación del paso anterior, ejecutar el siguiente comando 
para compilarlo y mostrarlo en el navegador web:
npm run serve

6. aparecerá al final de la ejecución dos direcciones, que se puede abrir dando doble click
en uno de ellos o copiandolo y pegarlo en el navegador web

App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.100.11:8080/








