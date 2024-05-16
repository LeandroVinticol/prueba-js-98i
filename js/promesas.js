// const datos = [
//   {
//     id: 1,
//     nombre: "Juan",
//   },
//   {
//     id: 2,
//     nombre: "Maria",
//   },
//   {
//     id: 3,
//     nombre: "Firulais",
//   },
// ];

// const getDatos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (datos.length === 0) {
//         const miError = new Error("No hay datos");
//         reject(miError);
//       }

//       resolve(datos);
//     }, 1000);
//   });
// };
// // getDatos()
// //   .then((contactosData) => {
// //     console.log(contactosData);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const fetchDatos = async () => {
//   try {
//     const contactosData = await getDatos();
//     console.log(contactosData);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchDatos();

const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
const data = await res.json();

const $img = document.createElement("img");
$img.src = data[0].image;
document.body.appendChild($img);

console.log(data);
