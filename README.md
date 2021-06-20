# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Proceso de desarrollo](#3-proceso-de-desarrollo)
* [4. Instruccions de uso](#4-instrucciones-de-uso)
* [5. Demostración](#5-demo)
+ [6. Retrospectiva](#6-retrospectiva)

***

## 1. Preámbulo.

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado César es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Objetivo del proyecto.

La objetivo del proyecto es facilitar la comunicación de una organización de 
derechos humanos con sus aliados en una zona de conflicto de manera directa.

Para lograr esto es necesario que los mensajes se envien de forma encriptada, 
coordinando sus operaciones, de la manera más discreta posible.

Los usuarios del proyecto son los miembros de la organización y sus aliados.

Codificando sus mensajes pueen interactuar sin interferencia de terceras personas.

+Eligiendo el número de posiciones de desplazamiento.

+Dando del texto a proteger, en su caso a desproteger.

+Obteniendo el cifrado.

## 3. Proceso de desarrollo.

El proceso utilizado para desarrollar el proyecto fue:

  -Entender claramente lo que hay que hacer y con que elementos contamos; 

  -Crear varias alternativas de solución y de estas elegir la mejor;

  -Desarrollar;

  -Implementar.

![proceso-creativo](/src/assets/proceso.png)

## 4. Instrucciones de uso.

+Para usar este proyecto se requieren:

 a) un editor como Atom o Visual Studio Code.

 b) una shell con CLI y cmder

 c) acceso a github.

+Proceso

 a) hacer fork al repositorio https://github.com/AnaMartinez040816/CDMX010-cipher.git

 b) Clonar con cmder

 c) con el editor abrir la carpeta creada

 d) instalar las dependencias del proyecto con 'npm install
 '
 e) para utilizar el programa se usa el comando 'npm start' que nos da el host en el browser

 f) copiar 'http://localhost:5000' o la url dada por el comando anterior en la ventana del browser.

    ¡ ya puedes codificar y decodificar mensajes!.

## 5. Demostración.

Aqui se muestra el funcionamiento de la aplicación.

![demostración](/src/assets/cipherdemo.gif)

## 6. Retrospectiva.

Para el desarrollo de este proyecto inicié el aprendizaje de varias herramientas, entre ellas:

-Metodología Ágil

-Editor Visual Estudio Code y su Shell

-HTML

-JS

-CSS

Esto no hubiera sido posible sin el gran apoyo de mis couches, que constantemente aclaraban
mis dudas y me indicaban el paso a seguir.
