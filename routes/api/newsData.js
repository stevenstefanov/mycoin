// const router = require("express").Router();

// router.get("/", (req, res) => {

//   async function getNewsAPI(search) {
//     try {
//         if( search ) {
//       const res = await axios.get(
//         `http://api.mediastack.com/v1/news?access_key=b586f17605bd4e43196259000bb30837&keywords=${search}&countries=us,gb`
//       );} else {
//           //api static call
//       }
//       res.json(res.data);
//     } catch (err) {
//       res.status(404).send(err.data);
//     }
//   }
// });

// router.post('/', (req, res ) => {
//     try {
//         const res = await axios.post(//apistatic)
//     }
// })

// router.post('/:search', (req, res) => {
//     try {
//         const res = await axios.post(//apidynamic search = req.body.search)
//     }
// })

// module.exports = router;
