const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const buscar = document.getElementById("buscar");
buscar.addEventListener("click", buscarPropiedades);

function buscarPropiedades(buscando = true) {
  console.log("buscar");

  const desde = document.getElementById("desde").value;
  const hasta = document.getElementById("hasta").value;
  const cuartos = document.getElementById("cuartos").value;


  // si se esta buscando se validan los campos del formulario
  if (buscando == true) {
    if (desde == "") {
      alert("Debes ingresar un valor en el campo desde");
      return;
    }

    if (hasta == "") {
      alert("Debes ingresar un valor en el campo hasta");
      return;
    }

    if (cuartos == "") {
      alert("Debes ingresar un valor en el campo cuartos");
      return;
    }
  }

  const contenedorPropiedades = document.getElementById(
    "contenedor_propiedades"
  );

  contenedorPropiedades.innerHTML = "";

  console.log("wtf");

  contador = 0;
  for (propiedad of propiedadesJSON) {

    // si buscando es falso, o si buscando es verdadero y la propiedad cumple con los requisitos se agrega al html
    if (
      buscando == false ||
      (propiedad.m >= desde &&
      propiedad.m <= hasta &&
      propiedad.rooms == cuartos)
    ) {
      contador += 1;
      let card = document.createElement("div");
      card.classList.add("propiedad");

      card.innerHTML = `
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
      <h5>${propiedad.name}</h5>
      <div class="d-flex justify-content-between">
      <p>Cuartos: ${propiedad.rooms}</p>
      <p>Metros: ${propiedad.m}</p>
      </div>
      <p class="my-3">${propiedad.description}</p>
      <button class="btn btn-info ">Ver más</button>
      </section>
      `;

      contenedorPropiedades.appendChild(card);
    }

    const total = document.getElementById("total");
    total.innerHTML = contador;
  }
}

// para llamar a todas las propiedades se envia false como parametro
buscarPropiedades(false);
