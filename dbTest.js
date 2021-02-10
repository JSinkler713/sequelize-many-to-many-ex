const db = require('./models')

// RUN THIS FIRST SO WE HAVE A PROJECT WITH ID=1
// db.category.create({
//   name: 'node'
// }).then(function(category) {
//   console.log(category.get())
// })

/* FIND the first project, associate with a found or created category */
// db.project.findOne({
//   where: { id: 1 },
//   include: [db.category]
// })
// .then(function(project) {
//   db.category.findOrCreate({ where: {name: 'awesome'}})
//   .then(([category, created])=> {
//     console.log(category.get())
//     console.log('***********************')
//     console.log(project)
//     project.addCategory(category)
//     console.log(project.get())
//   })
// }).catch((error)=> {
//   console.log(error)
// })

/* FIND a Category, CREATE a new project, Associate them */
// db.category.findOne({
//   where: { name: 'node'}
// })
// .then((category)=> {
//   // we have category, now make a new project to associate it with
//   db.project.create({
//     name: 'PEN Stack',
//     description: 'A project using postgres Express and Node'
//   })
//     .then((project)=> {
//       // addProject takes existing project and makes association
//       category.addProject(project).then(response=> {
//         console.log(response)
//       })
//     })
// })
// .catch((error)=> {
//   console.log(error)
// })

