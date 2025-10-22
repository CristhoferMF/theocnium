import type { RedCard, YellowCard, GreenCard, BlueCard } from "../types/card";

export const redCards: RedCard[] = [
  // --- Cartas de la primera imagen (image_6801eb.png) ---
  {
    id: 1,
    tipo: "opciones",
    pregunta: "¿Cual fue el nombre babilonico del profeta Daniel?",
    opciones: ["Belsasar", "Beltsasar", "Belisario", "Belisama"],
    respuesta: "Beltsasar",
  },
  {
    id: 2,
    tipo: "si o no",
    pregunta:
      "Abrahán tenía 90 años cuando Jehová les prometió que tendrían un hijo",
    respuesta:
      "FALSO. Abraham tenia 99 años cuando recibio esa promesa y un año más tarde, cuando Abrahán tenía 100 años, nació Isaac",
  },
  {
    id: 3,
    tipo: "responde",
    pregunta: "El nombre Abraham significa ...",
    respuesta: "Padre de una Muchedumbre [Multitud]",
  },
  {
    id: 4,
    tipo: "responde",
    pregunta: "En el primer día creativo Dios creó...",
    respuesta: "La distinción entre el DÍA y la NOCHE",
  },
  {
    id: 5,
    tipo: "si o no",
    pregunta:
      "En el primer día creativo Dios llamó a la luz Mañana, y la oscuridad, Noche",
    respuesta: "FALSO. Dios llamó a la luz Día, y a la oscuridad, Noche",
  },
  {
    id: 6,
    tipo: "si o no",
    pregunta:
      "En el tercer día creativo Dios llamó al suelo seco Tierra, y al conjunto de aguas, Mar",
    respuesta:
      "FALSO. Dios llamó al suelo seco Tierra, y al conjunto de aguas, Mares",
  },
  {
    id: 7,
    tipo: "responde",
    pregunta: "En el segundo día creativo Dios creó...",
    respuesta: "La expasión cielo",
  },
  {
    id: 8,
    tipo: "opciones",
    pregunta: "¿Cual de los siguientes ríos no salia del jardín de Edén?",
    opciones: ["Pisón", "Guihón", "Eufrates", "Havilá"],
    respuesta: "Havilá",
  },
  {
    id: 9,
    tipo: "responde",
    pregunta: "La palabra Edén significa...",
    respuesta: "Placer o Deleite",
  },
  {
    id: 10,
    tipo: "responde",
    pregunta:
      "Génesis 2:15 dice: “Jehova Dios puso al hombre en el jardín de Edén para que lo...”",
    respuesta: "Cultivara y cuidara",
  },

  // --- Cartas de la segunda imagen (image_67fee4.png) ---
  {
    id: 11,
    tipo: "si o no",
    pregunta:
      "Adán y Eva cosieron hojas de Higuera al darse cuenta que estaban desnudos",
    respuesta: "VERDAD",
  },
  {
    id: 12,
    tipo: "responde",
    pregunta: "En el tercer día creativo Dios creó...",
    respuesta: "La tierra seca, los mares, y la vegetación (hierba y árboles)",
  },
  {
    id: 13,
    tipo: "si o no",
    pregunta: 'El nombre de Caín significaba: "Exhalación"',
    respuesta: 'FALSO. El nombre Caín significa: "Algo producido"',
  },
  {
    id: 14,
    tipo: "opciones",
    pregunta: "Caín atacó a su hermano con:",
    opciones: ["Palo", "Roca", "Daga", "La Biblia no lo dice"],
    respuesta: "La Biblia no lo dice",
  },
  {
    id: 15,
    tipo: "responde",
    pregunta: "Según la cronología bíblica, Adan fue creado el año...",
    respuesta: "4026 a. E.C",
  },
  {
    id: 16,
    tipo: "opciones",
    pregunta: "Caín tuvo __ esposas",
    opciones: ["1", "2", "3", "0"],
    respuesta: "1",
  },
  {
    id: 17,
    tipo: "opciones",
    pregunta: "¿El sol y la luna se creó en...?",
    opciones: ["Cuarto día", "Primer día", "En el principio", "Quinto día"],
    respuesta: "Cuarto día",
  },
  {
    id: 18,
    tipo: "opciones",
    pregunta: "Adán vivió __ años",
    opciones: ["930", "890", "940", "960"],
    respuesta: "930",
  },
  {
    id: 19,
    tipo: "responde",
    pregunta: "¿Cual fue la primera creación de JEHOVÁ?",
    respuesta: "Jesús",
  },
  {
    id: 20,
    tipo: "si o no",
    pregunta:
      "Según la cronología bíblica, el diluvio sucedió en el año 2370 a. E.C",
    respuesta: "VERDAD",
  },

  // --- Cartas de la tercera imagen (image_67fe48.png) ---
  {
    id: 21,
    tipo: "opciones",
    pregunta:
      "Desde el momento en el que Jehová avisó a Noé del diluvio hasta que vino pasaron ___ años",
    opciones: ["120", "80", "100", "140"],
    respuesta: "120",
  },
  {
    id: 22,
    tipo: "si o no",
    pregunta: "Noé no recibió la declaración del Diluvio cuando tenía 470 años",
    respuesta:
      "FALSO. Dado que el Diluvio tuvo lugar en el año 2370 antes de nuestra era, es logico concluir que Dios hizo esta declaración en el 2490. Para entonces, Noé ya tenia 480 años de edad",
  },
  {
    id: 23,
    tipo: "opciones",
    pregunta: "¿Cuál fue el primer animal que salió del arca?",
    opciones: ["Paloma", "Tortola", "Cuervo", "Aguila"],
    respuesta: "Cuervo",
  },
  {
    id: 24,
    tipo: "si o no",
    pregunta: "Noé tenia 600 años cuando inició el diluvio",
    respuesta: "VERDAD",
  },
  {
    id: 25,
    tipo: "responde",
    pregunta: "Como se llama el hijo de Manases que llego a ser Rey?",
    respuesta: "Amón",
  },
  {
    id: 26,
    tipo: "opciones",
    pregunta: "¿Cuál de los siguientes no fue hijo de Noé?",
    opciones: ["Sem", "Jafet", "Cam", "Set"],
    respuesta: "Set",
  },
  {
    id: 27,
    tipo: "responde",
    pregunta: "¿En qué país actual se encuentra las montañas de Ararat?",
    respuesta: "Turquía",
  },
  {
    id: 28,
    tipo: "si o no",
    pregunta:
      "Bernabé y Pablo discutieron acaloradamente por Mateo en uno de sus viajes",
    respuesta: "FALSO. Discutieron por Marcos",
  },
  {
    id: 29,
    tipo: "si o no",
    pregunta: "Noé estuvo vivo durante los días de Nemrod",
    respuesta: "VERDAD",
  },
  {
    id: 30,
    tipo: "si o no",
    pregunta: "Pedro uso la segunda llave en el pentecostes del año 33",
    respuesta: "FALSO. En el Pentecostes del 33 uso la primera llave",
  },
  {
    id: 31,
    tipo: "si o no",
    pregunta:
      "En la torre de Babel se uso betún para unir las piedras de la construccion",
    respuesta: "FALSO. Se uso betún para unir los ladrillos, no piedras",
  },
  {
    id: 32,
    tipo: "opciones",
    pregunta: "A quién uso Jehova para devolver la vista a Pablo",
    opciones: ["Pedro", "Malaquias", "Ananias", "Abdias"],
    respuesta: "Ananías",
  },
  {
    id: 33,
    tipo: "opciones",
    pregunta: 'El nombre "Babel" significa:',
    opciones: ["Confusión", "Esplendor", "Torre de idioma", "Expansion"],
    respuesta: "Confusión",
  },
  {
    id: 34,
    tipo: "opciones",
    pregunta: "¿Cuál fue el pueblo que fue comparado a una vaca terca?",
    opciones: ["Ammonitas", "Cananeos", "Israel", "Jerusalen"],
    respuesta: "Israel",
  },

  // --- Cartas de la cuarta imagen (image_67fb61.png) ---
  {
    id: 35,
    tipo: "si o no",
    pregunta: "Abrahán cruza el Jordan a los 75 años en direccion a Canaán",
    respuesta:
      "FALSO. Por mandato de Dios deja la ciudad caldea de Ur y, a los 75 años de edad, cruza el Éufrates en dirección a la tierra de Canaán",
  },
  {
    id: 36,
    tipo: "opciones",
    pregunta: "Jehova le cambia de nombe a Sara cuando Abrahan tenia __ años",
    opciones: ["90", "99", "89", "100"],
    respuesta: "99",
  },
  {
    id: 37,
    tipo: "responde",
    pregunta: "El rey de Salem se llamaba:",
    respuesta: "Melquisedec",
  },
  {
    id: 38,
    tipo: "opciones",
    pregunta: "¿Cuál es la sexta plaga de Egipto?",
    opciones: ["Oscuridad", "Langostas", "Ulceras", "Mosquitos"],
    respuesta: "Ulceras",
  },
  {
    id: 39,
    tipo: "si o no",
    pregunta: "¿Pedro fue la piedra Angular?",
    respuesta: "FALSO. Fue Jesús",
  },
  {
    id: 40,
    tipo: "si o no",
    pregunta: "El primer año de Jubileo empezó en el año 1424 a. E.C",
    respuesta: "VERDAD",
  },
  {
    id: 41,
    tipo: "si o no",
    pregunta: "El primer año de Jubileo empezó en el año 1324 a. E.C",
    respuesta: "FALSO. Fue en el año 1424 a. E.C",
  },
  {
    id: 42,
    tipo: "opciones",
    pregunta:
      "Desde la entrada en la Tierra Prometida, en 1473 a. E.C., hasta la caída de Jerusalén, en 607 a. E.C., los israelitas estaban obligados a celebrar ___ Jubileos",
    opciones: ["17", "16", "14", "15"],
    respuesta: "17",
  },
];

export const yellowCards: YellowCard[] = [
  {
    id: 1,
    tipo: "donde dice",
    pregunta:
      "Así pues, por medio de un solo hombre, el pecado entró en el mundo y por medio del pecado entró la muerte, y así fue como la muerte se extendió a todos los hombres, porque todos habían pecado...",
    respuesta: "Romanos 5:12",
  },
  {
    id: 2,
    tipo: "quien lo escribio",
    pregunta:
      "Es más, alegrémonos cuando pasemos por dificultades, porque sabemos que las dificultades producen aguante",
    respuesta: "Pablo",
  },
  {
    id: 3,
    tipo: "dime tres",
    pregunta: "Felicidad",
    respuesta: "",
  },
  {
    id: 4,
    tipo: "dime tres",
    pregunta: "Amor",
    respuesta: "",
  },
  {
    id: 5,
    tipo: "dime tres",
    pregunta: "Aguante",
    respuesta: "",
  },
  {
    id: 6,
    tipo: "dime tres",
    pregunta: "Juventud",
    respuesta: "",
  },
  {
    id: 7,
    tipo: "dime tres",
    pregunta: "Nuevo mundo",
    respuesta: "",
  },
  {
    id: 8,
    tipo: "dime tres",
    pregunta: "Muerte",
    respuesta: "",
  },
  {
    id: 9,
    tipo: "dime tres",
    pregunta: "Ungidos",
    respuesta: "",
  },
  {
    id: 10,
    tipo: "dime tres",
    pregunta: "Predicacion",
    respuesta: "",
  },
  {
    id: 11,
    tipo: "dime tres",
    pregunta: "Fe",
    respuesta: "",
  },
  {
    id: 12,
    tipo: "dime tres",
    pregunta: "Vejez",
    respuesta: "",
  },
  {
    id: 13,
    tipo: "dime tres",
    pregunta: "Lealtad",
    respuesta: "",
  },
  {
    id: 14,
    tipo: "dime tres",
    pregunta: "Valor",
    respuesta: "",
  },
  {
    id: 15,
    tipo: "dime tres",
    pregunta: "Adan",
    respuesta: "",
  },
  {
    id: 16,
    tipo: "dime tres",
    pregunta: "Resurreccion",
    respuesta: "",
  },
  {
    id: 17,
    tipo: "dime tres",
    pregunta: "Trabajo",
    respuesta: "",
  },
  {
    id: 18,
    tipo: "donde dice",
    pregunta:
      "Y, en caso de que te desvíes a la derecha o a la izquierda, oirás con tus propios oídos estas palabras dentro de ti: “Este es el camino. Anda en él”.",
    respuesta: "Isaias 30:21",
  },
  {
    id: 19,
    tipo: "donde dice",
    pregunta:
      "Y el Señor dijo: “¿Quién es en realidad el mayordomo fiel, el prudente, a quien su amo pondrá a cargo de los sirvientes de la casa para que siga dándoles su ración de alimento al tiempo debido?",
    respuesta: "Lucas 12:42",
  },
  {
    id: 20,
    tipo: "donde dice",
    pregunta:
      "Por último, estén todos unidos en su forma de pensar y demuestren empatía, cariño fraternal, tierna compasión y humildad.",
    respuesta: "1 Pedro 3:8",
  },
  {
    id: 21,
    tipo: "donde dice",
    pregunta:
      "Durante todas sus angustias, él también estuvo angustiado. Y su propio mensajero personal los salvó. En su amor y compasión, él los recompró, y los levantó y los sostuvo todos los días de tiempos pasados.",
    respuesta: "Isaias 63:9",
  },
  {
    id: 22,
    tipo: "donde dice",
    pregunta:
      "Por lo tanto, imiten a Dios como hijos amados 2 y sigan el camino del amor, tal como el Cristo también nos amó y se entregó por nosotros como ofrenda y",
    respuesta: "Efesios 5:1,2",
  },
  {
    id: 23,
    tipo: "donde dice",
    pregunta:
      "mientras buscan no solo sus propios intereses, sino también los de los demás.",
    respuesta: "Filipenses 2:4",
  },
  {
    id: 24,
    tipo: "donde dice",
    pregunta:
      "Sean obedientes y sumisos a los que los dirigen, porque ellos están cuidando de ustedes y van a rendir cuentas por eso. Así, ellos los harán felices y no con suspiros, porque esto los perjudicaría a ustedes.",
    respuesta: "Hebreos 13:17",
  },
  {
    id: 25,
    tipo: "donde dice",
    pregunta: "Alégrense con los que se alegran; lloren con los que lloran.",
    respuesta: "Romanos 12:15",
  },
  {
    id: 26,
    tipo: "donde dice",
    pregunta:
      "Hijitos, no amemos de palabra ni de labios para afuera, sino con hechos y de verdad.",
    respuesta: "1 Juan 3:18",
  },
  {
    id: 27,
    tipo: "donde dice",
    pregunta: "“Dejen de juzgar, para que no sean juzgados.",
    respuesta: "Mateo 7:1",
  },
  {
    id: 28,
    tipo: "donde dice",
    pregunta:
      "Quiero que sepan, mis queridos hermanos, que todos deben ser rápidos para escuchar, pero lentos para hablar y lentos para la ira,",
    respuesta: "Santiago 1:19",
  },
  {
    id: 29,
    tipo: "donde dice",
    pregunta:
      "Vi a otro ángel que volaba en medio del cielo. Tenía buenas noticias eternas que anunciarles a los que viven en la tierra: a toda nación, tribu, lengua y pueblo.",
    respuesta: "Apocalipsis 14:6",
  },
  {
    id: 30,
    tipo: "donde dice",
    pregunta:
      "“Por eso, hagan por los demás todo lo que les gustaría que hicieran por ustedes. De hecho, en eso se resumen la Ley y los Profetas.",
    respuesta: "Mateo 7:12",
  },
  {
    id: 31,
    tipo: "donde dice",
    pregunta:
      "Responder a un asunto antes de oír los hechos es tonto y humillante.",
    respuesta: "Proverbios 18:13",
  },
  {
    id: 32,
    tipo: "quien lo escribio",
    pregunta:
      "Oh, Jehová, ¿por qué se han hecho tantos mis adversarios? ¿Por qué se levantan contra mí?",
    respuesta: "David",
  },
  {
    id: 33,
    tipo: "quien lo escribio",
    pregunta:
      "Porque nos ha nacido un niño; se nos ha dado un hijo; y el gobierno estará en sus manos. Se le llamará por nombre Maravilloso Consejero,† Dios Poderoso, Padre Eterno, Príncipe de Paz.",
    respuesta: "Isaias",
  },
  {
    id: 34,
    tipo: "quien lo escribio",
    pregunta:
      "De ti, Belén [...], de ti saldrá para mí el que será gobernante [...] su grandeza llegará hasta los confines de la tierra",
    respuesta: "Miqueas",
  },
  {
    id: 35,
    tipo: "quien lo escribio",
    pregunta:
      "No me dejarás en la Tumba. No permitirás que tu siervo leal vea el hoyo [...]; a tu derecha habrá felicidad para siempre",
    respuesta: "David",
  },
  {
    id: 36,
    tipo: "quien lo escribio",
    pregunta:
      "Una respuesta amable aparta la furia, pero una palabra hiriente provoca la ira.",
    respuesta: "Salomon",
  },
  {
    id: 37,
    tipo: "quien lo escribio",
    pregunta:
      "Además, los tirios que vivían en la ciudad traían pescado y mercancías de todo tipo, y se lo vendían a la gente de Judá. Lo hacían en Jerusalén en sábado",
    respuesta: "Nehemias",
  },
  {
    id: 38,
    tipo: "quien lo escribio",
    pregunta:
      "Él extiende el cielo del norte sobre el vacío, suspende la tierra sobre la nada;",
    respuesta: "Job",
  },
  {
    id: 39,
    tipo: "quien lo escribio",
    pregunta:
      "Pero los santos del Supremo recibirán el reino y poseerán el reino para siempre, sí, para siempre jamás'.",
    respuesta: "Daniel",
  },
  {
    id: 40,
    tipo: "quien lo escribio",
    pregunta:
      "Le oré a Jehová mi Dios e hice una confesión. Dije: 'Oh, Jehová, el Dios verdadero, grande e imponente, el que cumple su pacto y les muestra amor leal a los que lo aman y obedecen sus mandamientos,",
    respuesta: "Daniel",
  },
  {
    id: 41,
    tipo: "quien lo escribio",
    pregunta:
      "Dios es un espíritu, y los que lo adoran tienen que adorarlo con espíritu y con verdad'.",
    respuesta: "Juan",
  },
  {
    id: 42,
    tipo: "quien lo escribio",
    pregunta:
      "a Dios, el único que es sabio, vaya la gloria mediante Jesucristo para siempre. Amén.",
    respuesta: "Pablo",
  },
  {
    id: 43,
    tipo: "quien lo escribio",
    pregunta:
      "La amistad íntima con Jehová es para quienes le temen, y él les da a conocer su pacto.",
    respuesta: "David",
  },
  {
    id: 44,
    tipo: "quien lo escribio",
    pregunta:
      "Acérquense a Dios y él se acercará a ustedes. Límpiense las manos, pecadores, y purifiquen su corazón, indecisos.",
    respuesta: "Santiago",
  },
  {
    id: 45,
    tipo: "quien lo escribio",
    pregunta:
      "Él es la imagen del Dios invisible, el primogénito de toda la creación",
    respuesta: "Pablo",
  },
  {
    id: 46,
    tipo: "quien lo escribio",
    pregunta:
      "Pero la sabiduría de arriba es en primer lugar pura, luego es pacífica y razonable, está lista para obedecer y llena de misericordia y buenos frutos, es imparcial y no es hipócrita.",
    respuesta: "Santiago",
  },
  {
    id: 47,
    tipo: "quien lo escribio",
    pregunta: "Pero háganlo todo de forma digna y ordenada.",
    respuesta: "Pablo",
  },
  {
    id: 48,
    tipo: "quien lo escribio",
    pregunta:
      "Pero Jehová permitió que el corazón del faraón se pusiera terco otra vez, y él no les hizo caso, tal como Jehová le había dicho a Moisés.",
    respuesta: "Moises",
  },
];

export const greenCards: GreenCard[] = [
  // --- ENSEÑAR CON EJEMPLOS (ID 1, 3-18) ---
  {
    id: 1,
    tipo: "enseñar con ejemplos",
    pregunta: "Eclesiastés 5:10\nPicadura de un mosquito",
    respuesta:
      "Así lo reconoció Salomón en la Biblia: “El que ama el dinero nunca se satisface con lo que tiene, siempre quiere más y más” (Eclesiastés 5:10, La Palabra de Dios para Todos [PDT]). Ocurre igual que con la picadura de un mosquito: cuanto más se rasca uno, más picor produce.",
  },
  // La tarjeta ID 2 es de tipo 'informalmente', aparece más abajo.
  {
    id: 3,
    tipo: "enseñar con ejemplos",
    pregunta: "2 Corintios 4:16\nNadador",
    respuesta: `Pongamos un ejemplo: imaginemos que un barco empieza a hundirse.
      Para sobrevivir, los pasajeros tienen que nadar hasta la playa.
      El que se rinda a pocos metros de la orilla se ahogará igual que el que se dé por vencido mucho antes.
      De manera similar, para sobrevivir tenemos que estar decididos a aguantar hasta que llegue el nuevo mundo.`,
  },
  {
    id: 4,
    tipo: "enseñar con ejemplos",
    pregunta: "1 Pedro 5:6,7\nAtasco vehicular en el trafico",
    respuesta: `Imagínese que va conduciendo por una autopista y queda atrapado en un atasco.
      No sabe cuánto tendrá que esperar hasta que el tráfico vuelva a fluir.
      Si se impacienta y busca otra ruta, quizás acabe perdiéndose y tardando aún más en llegar a su destino.
      Muchas veces es mejor tener paciencia y no desviarse.
      De manera parecida, si se queda en el camino que le indica la Palabra de Dios, él le ayudará a aguantar y llegar a la meta.`,
  },
  {
    id: 5,
    tipo: "enseñar con ejemplos",
    pregunta: "Filipenses 3:16\nAndar en bicicleta",
    respuesta: `Los que han tratado de equilibrar una bicicleta que ha perdido velocidad casi hasta detenerse comprenden la importancia de seguir adelantando.
      De igual manera, mientras usted adelanta a buen paso en la rutina de la actividad espiritual, está protegido de perder su equilibrio y caer. `,
  },
  {
    id: 6,
    tipo: "enseñar con ejemplos",
    pregunta: "Salmo 19:1, 2\nUn amigo talentoso",
    respuesta: `Existe otro motivo más para alabar a Jehová. Recuerda el ejemplo que pusimos sobre tu talentoso amigo.
      Si escucharas a otras personas diciendo falsedades sobre él y difamándolo, ¿no te sentirías aún más determinado a defenderlo?`,
  },
  {
    id: 7,
    tipo: "enseñar con ejemplos",
    pregunta: "Juan 13:34,35\nCadena de un ancla",
    respuesta: `LA CADENA que sujeta el ancla de un barco tiene que soportar muchísima tensión para impedir que la nave se vaya a la deriva.
      A menos que sus eslabones estén enlazados con firmeza, se partirá.`,
  },
  {
    id: 8,
    tipo: "enseñar con ejemplos",
    pregunta: "Ir a la cárcel \nHacerse una radiografía",
    respuesta: `Eso fue lo que le pasó a Nikolái,c a quien metieron preso a pesar de estar muy enfermo. Él explica: “Ir a la cárcel es como hacerse una radiografía: permite ver las cualidades de un cristiano”.
      Cuando identificamos nuestros puntos débiles, podemos hacer algo para mejorar.`,
  },
  {
    id: 9,
    tipo: "enseñar con ejemplos",
    pregunta: "1 Tesalonicenses 5:14\nMedico de emergencias",
    respuesta: `Pongamos un ejemplo. Cuando un motociclista herido llega a una sala de emergencias, ¿intenta el equipo médico determinar si fue él quien causó el accidente?
    Claro que no. Más bien, se apresura a curarlo. Del mismo modo, si un hermano en la fe se ha debilitado por problemas personales, lo más importante para nosotros debe ser ayudarlo espiritualmente`,
  },
  {
    id: 10,
    tipo: "enseñar con ejemplos",
    pregunta: "Salmo 119:105\nLinterna",
    respuesta: `En varios sentidos, la Biblia es como esa linterna.
      Tal como vimos en los artículos anteriores, la Palabra de Dios nos ayuda a afrontar lo que tenemos justo ante nosotros: los problemas cotidianos que todos encaramos en este mundo impredecible.
      Pero logra algo más. También ilumina nuestro futuro, pues nos permite ver la senda que nos conduce a la felicidad permanente y nos ayuda a seguirla `,
  },
  {
    id: 11,
    tipo: "enseñar con ejemplos",
    pregunta: "Isaías 48:17, 18\nManual de Instrucciones",
    respuesta: `Digamos que usted compra una cámara o una computadora.
      Lo que espera es que el fabricante incluya un manual de instrucciones que muestre la mejor manera de usar el equipo y sacarle provecho, ¿verdad?
      La Biblia es como ese manual; es el manual que Dios, el “fabricante”, nos ha dado para enseñarnos a vivir. Este “manual” explica para qué fue diseñado el “producto” y cómo se ha de usar para obtener los mejores resultados.`,
  },
  {
    id: 12,
    tipo: "enseñar con ejemplos",
    pregunta: "2 Pedro 1:21\nSecretario",
    respuesta: "",
  },
  {
    id: 13,
    tipo: "enseñar con ejemplos",
    pregunta: "1 Corintios 2:8-10\nArrecife de coral",
    respuesta: ` A simple vista no puede ver con claridad la maravillosa escena.
      Pero si mira a través de una máscara de bucear o del fondo de cristal de un barco turístico, sentirá la emoción de ver por primera vez corales, peces, anémonas y otras hermosas criaturas de brillantes colores.
      En nuestro caso pasó algo parecido: cuando nos ayudaron a comprender las Santas Escrituras, vimos por primera vez “las cosas profundas de Dios”`,
  },
  {
    id: 14,
    tipo: "enseñar con ejemplos",
    pregunta: "Mateo 24:42\nCambiar un foco o bombilla",
    respuesta: `Para responder a esta pregunta, imagínese que usted se pone a leer de noche usando una bombilla de 100 vatios, pero de pronto se funde.
      El problema es obvio: se ha quedado a oscuras. Así que coloca otra bombilla, y la habitación se ilumina de nuevo.
      Ahora bien, sin que usted se entere, esa bombilla es reemplazada al día siguiente por una de 95 vatios.
      ¿Notará la diferencia la próxima vez que la encienda? Puede que no. Y si al otro día se la cambian por una de 90 vatios, a lo mejor tampoco lo percibirá.
      ¿Por qué no? Porque la intensidad de la luz ha disminuido de forma tan gradual que el problema no resulta obvio.
      De igual modo, la influencia de este mundo puede reducir poco a poco la intensidad de nuestro celo en el servicio a Jehová.
      Un cristiano que no esté alerta quizá no perciba, por decirlo así, si el Diablo ha cambiado su bombilla espiritual.`,
  },
  {
    id: 15,
    tipo: "enseñar con ejemplos",
    pregunta: "Proverbios 27:6\nUn amigo que nos salva de ser atropellados",
    respuesta: `Imaginemos que estamos esperando para cruzar en una calle muy transitada y nos distraemos mirando nuestro teléfono.
    Comenzamos a cruzar sin levantar la vista. Entonces, un amigo nos agarra del brazo y tira de nosotros hacia atrás.
    Nos agarra con tanta fuerza que nos hace un moretón. Pero, gracias a que actúa rápido, nos salva de un atropello seguro.
    Quizás nos duela el brazo por unos cuantos días, pero ¿verdad que no estaremos molestos con nuestro amigo?
    Más bien, estaremos agradecidos por su ayuda. De modo parecido, si un amigo nos hace ver que nuestra forma de hablar o de actuar va en contra de las justas normas de Dios, puede que al principio estemos dolidos, pero ofendernos o enojarnos con él sería de tontos`,
  },
  {
    id: 16,
    tipo: "enseñar con ejemplos",
    pregunta: "1 Corintios 7:11\nAncla",
    respuesta: `El sentido de compromiso es como un ancla que evita que el matrimonio naufrague cuando surgen problemas.`,
  },
  {
    id: 17,
    tipo: "enseñar con ejemplos",
    pregunta: "Santiago 1:19\nPuerta engrasada",
    respuesta: `¿Ha tratado alguna vez de abrir una puerta que no se ha utilizado por algún tiempo? Las bisagras chirrían al ceder poco a poco.
      Pero ¿y si la puerta suele usarse y las bisagras están bien engrasadas? Entonces abrirla no presenta ninguna dificultad.
      Así es en el caso de la comunicación. Si tienen por norma comunicarse y “engrasan” con amor cristiano las bisagras de la puerta de la comunicación, les resultará más fácil transmitir sus ideas aun cuando surjan graves discrepancias.`,
  },
  {
    id: 18,
    tipo: "enseñar con ejemplos",
    pregunta: "Hechos 24:16\nLuces de emergencia de un auto",
    respuesta: `Podemos comparar la conciencia bien formada con las luces de advertencia del tablero de mandos de un automóvil.
      Supongamos que se enciende la luz que indica que la presión del aceite está baja.
      ¿Qué ocurrirá si no le damos atención inmediata y seguimos conduciendo el vehículo? Le causaremos un daño grave al motor.
      De igual manera, nuestra conciencia, nuestra voz interior, puede advertirnos de que cierto comportamiento es malo. `,
  },

  // --- INFORMALMENTE (ID 2, 19-28) ---
  {
    id: 2,
    tipo: "informalmente",
    pregunta: "Veo a una persona quejándose de la alza del precio del pan",
    respuesta: "",
  },
  {
    id: 19,
    tipo: "informalmente",
    pregunta:
      "Quien viaja a nuestro lado menciona que no sabe por quién votar en las elecciones",
    respuesta: "",
  },
  {
    id: 20,
    tipo: "informalmente",
    pregunta:
      "Nuestro compañero de trabajo se queja del duro trabajo que realiza",
    respuesta: "",
  },
  {
    id: 21,
    tipo: "informalmente",
    pregunta:
      "Una persona con su mascota nos comenta de que le preocupa cómo maltratan a los animales",
    respuesta: "",
  },
  {
    id: 22,
    tipo: "informalmente",
    pregunta: "Nos encontramos en el parque a alguien dibujando un paisaje",
    respuesta: "",
  },
  {
    id: 23,
    tipo: "informalmente",
    pregunta: "Vemos a alguien llorando en un asiento del parque",
    respuesta: "",
  },
  {
    id: 24,
    tipo: "informalmente",
    pregunta:
      "Un conocido nos cuenta de que le estafaron y ha perdido mucho dinero",
    respuesta: "",
  },
  {
    id: 25,
    tipo: "informalmente",
    pregunta: "Alguien nos habla de un desastre natural que sucedió hace poco",
    respuesta: "",
  },
  {
    id: 26,
    tipo: "informalmente",
    pregunta:
      "Un colega le muestra en su celular la foto de su hijo recien nacido",
    respuesta: "",
  },
  {
    id: 27,
    tipo: "informalmente",
    pregunta: "La madre de su jefe ha fallecido y usted le dara el pesame",
    respuesta: "",
  },
  {
    id: 28,
    tipo: "informalmente",
    pregunta: "Un familiar nos dice que no cree que Dios lo pueda perdonar",
    respuesta: "",
  },

  // --- VENCE OBJECIONES (ID 29-40) ---
  {
    id: 29,
    tipo: "vence objeciones",
    pregunta: "No creo que sea necesario pertenecer a una religion",
    respuesta: "",
  },
  {
    id: 30,
    tipo: "vence objeciones",
    pregunta: "Ya tengo mi religion",
    respuesta: "",
  },
  {
    id: 31,
    tipo: "vence objeciones",
    pregunta: "Soy judio",
    respuesta: "",
  },
  {
    id: 32,
    tipo: "vence objeciones",
    pregunta: "Creo que la Biblia fue escrita por hombres",
    respuesta: "",
  },
  {
    id: 33,
    tipo: "vence objeciones",
    pregunta: "La Biblia se contradice",
    respuesta: "",
  },
  {
    id: 34,
    tipo: "vence objeciones",
    pregunta: "Ya tengo mi propia Biblia",
    respuesta: "",
  },
  {
    id: 35,
    tipo: "vence objeciones",
    pregunta: "Creo solo en lo que puedo ver",
    respuesta: "",
  },
  {
    id: 36,
    tipo: "vence objeciones",
    pregunta: "Creo en la evolución",
    respuesta: "",
  },
  {
    id: 37,
    tipo: "vence objeciones",
    pregunta: "Ustedes no creen en el infierno",
    respuesta: "",
  },
  {
    id: 38,
    tipo: "vence objeciones",
    pregunta: "Ustedes no creen en la Virgen María",
    respuesta: "",
  },
  {
    id: 39,
    tipo: "vence objeciones",
    pregunta: "No tengo dinero",
    respuesta: "",
  },
  {
    id: 40,
    tipo: "vence objeciones",
    pregunta:
      "Sencillamente leo la Biblia en mi hogar y oro a Dios que me dé entendimiento",
    respuesta: "",
  },
];

export const blueCards: BlueCard[] = [
  {
    id: 1,
    tipo: "actualo",
    pregunta: "Moises separando el mar rojo",
    respuesta: "",
  },
  {
    id: 2,
    tipo: "deletrea al reves",
    pregunta: "ZOROBABEL",
    respuesta: "",
  },
  {
    id: 3,
    tipo: "deletrea al reves",
    pregunta: "JEFTE",
    respuesta: "",
  },
  {
    id: 4,
    tipo: "deletrea al reves",
    pregunta: "HABACUC",
    respuesta: "",
  },
  {
    id: 5,
    tipo: "deletrea al reves",
    pregunta: "SALOMON",
    respuesta: "",
  },
  {
    id: 6,
    tipo: "deletrea al reves",
    pregunta: "NABUCODONOSOR",
    respuesta: "",
  },
  {
    id: 7,
    tipo: "deletrea al reves",
    pregunta: "CANAAN",
    respuesta: "",
  },
  { id: 8, tipo: "deletrea al reves", pregunta: "ZABULON", respuesta: "" },
  { id: 9, tipo: "deletrea al reves", pregunta: "ABRAHAN", respuesta: "" },
  { id: 10, tipo: "deletrea al reves", pregunta: "SENAQUERIB", respuesta: "" },
  { id: 11, tipo: "deletrea al reves", pregunta: "LUCAS", respuesta: "" },
  { id: 12, tipo: "deletrea al reves", pregunta: "ESTEBAN", respuesta: "" },
  { id: 13, tipo: "deletrea al reves", pregunta: "TABITA", respuesta: "" },
  { id: 14, tipo: "deletrea al reves", pregunta: "TIMOTEO", respuesta: "" },
  { id: 15, tipo: "deletrea al reves", pregunta: "JAMBRES", respuesta: "" },
  { id: 16, tipo: "deletrea al reves", pregunta: "MOISES", respuesta: "" },
  { id: 17, tipo: "deletrea al reves", pregunta: "LEVIATAN", respuesta: "" },
  { id: 18, tipo: "deletrea al reves", pregunta: "NEFTALI", respuesta: "" },
  {
    id: 19,
    tipo: "actualo",
    pregunta: "Los animales entrando en el arca",
    respuesta: "",
  },
  {
    id: 20,
    tipo: "actualo",
    pregunta: "La burra le habla a Balaam",
    respuesta: "",
  },
  {
    id: 21,
    tipo: "actualo",
    pregunta: "La esposa de lot se convierte en un pilar de sal",
    respuesta: "",
  },
  {
    id: 22,
    tipo: "actualo",
    pregunta: "Jacob lucha con un angel",
    respuesta: "",
  },
  {
    id: 23,
    tipo: "actualo",
    pregunta: "José es echado en prision",
    respuesta: "",
  },
  {
    id: 24,
    tipo: "actualo",
    pregunta: "Moises ve un arbusto en llamas",
    respuesta: "",
  },
  {
    id: 25,
    tipo: "actualo",
    pregunta: "David mata a Goliat",
    respuesta: "",
  },
  {
    id: 26,
    tipo: "actualo",
    pregunta: "Jonas es tragado por un gran pez",
    respuesta: "",
  },
  {
    id: 27,
    tipo: "actualo",
    pregunta: "Júan bautiza a Jesús",
    respuesta: "",
  },
  {
    id: 28,
    tipo: "actualo",
    pregunta: "Jesús camina sobre el agua",
    respuesta: "",
  },
  {
    id: 29,
    tipo: "actualo",
    pregunta: "La última cena",
    respuesta: "",
  },
  {
    id: 30,
    tipo: "presentate",
    pregunta: "Abrahan",
    respuesta: "",
  },
  {
    id: 31,
    tipo: "presentate",
    pregunta: "Josué",
    respuesta: "",
  },
  {
    id: 32,
    tipo: "presentate",
    pregunta: "Nemrod",
    respuesta: "",
  },
  {
    id: 33,
    tipo: "presentate",
    pregunta: "Jeremias",
    respuesta: "",
  },
  {
    id: 34,
    tipo: "presentate",
    pregunta: "Daniel",
    respuesta: "",
  },
  {
    id: 35,
    tipo: "presentate",
    pregunta: "Job",
    respuesta: "",
  },
  {
    id: 36,
    tipo: "presentate",
    pregunta: "Juan, el apostol",
    respuesta: "",
  },
  {
    id: 37,
    tipo: "presentate",
    pregunta: "Esteban",
    respuesta: "",
  },
  {
    id: 38,
    tipo: "presentate",
    pregunta: "Pedro",
    respuesta: "",
  },
  {
    id: 39,
    tipo: "presentate",
    pregunta: "Manases",
    respuesta: "",
  },
  {
    id: 40,
    tipo: "presentate",
    pregunta: "Josias",
    respuesta: "",
  },
  {
    id: 41,
    tipo: "presentate",
    pregunta: "Levi",
    respuesta: "",
  },
  {
    id: 42,
    tipo: "presentate",
    pregunta: "José",
    respuesta: "",
  },
  {
    id: 43,
    tipo: "presentate",
    pregunta: "Cornelio",
    respuesta: "",
  },
  {
    id: 44,
    tipo: "presentate",
    pregunta: "Sedequias",
    respuesta: "",
  },
  {
    id: 45,
    tipo: "presentate",
    pregunta: "Acab",
    respuesta: "",
  },
  {
    id: 46,
    tipo: "presentate",
    pregunta: "La hija de jefte",
    respuesta: "",
  },
  {
    id: 47,
    tipo: "presentate",
    pregunta: "Judas Tadeo",
    respuesta: "",
  },
  {
    id: 48,
    tipo: "presentate",
    pregunta: "Judas Iscariote",
    respuesta: "",
  },
];
