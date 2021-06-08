# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Instruccions de uso](#3-instrucciones-de-uso)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
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

## 2. Resumen del proyecto

La temática del proyecto es facilitar la comunicación de una organización de 
derechos humanos con sus aliados en una zona de conflicto de manera directa.
El objetivo es que se envien información encriptada para lograr realizar sus 
operaciones, de la manera más discreta posible.

Los usuarios del proyecto son los miembros de la organización y sus aliados.

Codificando sus mensajes pueen interactuar sin interferencia de terceras personas.
+Eligiendo el número de posiciones de desplazamiento.
+Dando del texto a proteger, en su caso a desproteger.
+Obteniendo el cifrado.

## 3. Instrucciones de uso.
+Para usar este proyecto se requieren:
 a) un editor como Atom o Visual Studio Code.
 b) una shell con CLI y cmder
 c) acceso a github.

+Proceso
 a) hacer fork al repositorio https://github.com/AnaMartinez040816/CDMX010-cipher.git 
 b) Clonar con cmder
 c) con el editor abrir la carpeta creada
 d) instalar las dependencias del proyecto con 'npm install'
 e) para utilizar el programa se usa el comando 'npm start' que nos da el host en el browser
 f) copiar 'http://localhost:5000' en la ventana del browser y listo !!.
    ya puedes codificar mensajes
