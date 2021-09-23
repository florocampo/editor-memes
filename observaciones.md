# Observaciones

Flor, felicitaciones por su trabajo. Estoy muy contenta recorriendo tu TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. Este es un trabajo para compartir, publicar, mostrarle a potenciales empleadores y del que estar muy, muy orgullosa. 

Lamentablemente tengo poco para decirte, porque este trabajo es excelente y hay poco para aportar de mi lado. Mantené este excelente nivel! 

## Estructura correcta de documento HTML

Te comenté la importancia de usar bien el lenguaje del documento. También una nota sobre los imports de tipografias. 

## Respeta el diseño dado

Cumplido, me encantó como lo dejaste! Un detalle molesto es que los botones de Imagen y Texto se "mueven" cuando les hago hover. Eso es por el borde por defecto de los botones. Agregale "border: 2px solid transparent" en lugar de "border: none". 

No acuerdo la decision de usar `value` en el input de texto en lugar de `placeholder`. Es molesto para el usuario tener que borrar cuando quiere agregar texto arriba o abajo del meme. Si queremos indicarle al usuario qué tiene que escribir, usamos `placeholder`. Si queremos darle el campo pre-rellenado, usamos `value`, que no es el caso aquí. 

## Respeta el funcionamiento

Cumplido.

## Responsive funciona correctamente

Cumplidisimo.

## Buena estructura de proyecto

Cumplido salvo por el README, que deberia estar en mayusculas: README.md

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Te dejé varios comentarios. Veo la intención de usarlas bien, pero algunas confusiones. 

## Buenos nombres de clases

Cumplido.

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, aunque te dejo varios comentarios. 

## Funciones pequeñas

Cumplido. Te dejé un par de comentarios sobre interpolacion de variables - consultame si tenes dudas sobre el tema. 

## Accesibilidad

Cumplido a medias, hay dos decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a todos tus inputs, urls y botones. Y si bien agregaste el fondo rosa en *algunos* elementos, no lo hiciste en todos. Trata, por ejemplo, de mover el filtro "escala de grises" usando solamente el teclado: es muy dificil! No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- A veces olvidas de usar label, lo reemplazas por h3, que no es lo mismo.

## Commits con mensajes adecuados

Cumplido, y menciono tambien el excelente nivel del README. 

# Nota final: 9

