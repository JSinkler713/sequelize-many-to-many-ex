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



// const postRouteEx = async() => {
//   try{
//     console.log("in the post route")
//     // pretendng we have a req.body like we will
//     const req = {}
//     req.body= {
//       name: 'hey',
//       githubLink: 'aslkdfj.com',
//       deployedLink: 'www.google.com',
//       description: 'project description here',
//       category: 'category name here'
//     }
//     const project = await db.project.create({
//       name: req.body.name,
//       githubLink: req.body.githubLink,
//       deployLink: req.body.deployedLink,
//       description: req.body.description,
//     })
//     const [category, wasCreated] = await db.category.findOrCreate({
//       where:{
//         name: req.body.category
//       },
//       include: [db.project]
//     })
//       await category.addProject(project)
//       
//       console.log(category)
//       console.log(category.projects)
//       // not a real route res.redirect('/project/catshow')
//   } catch(e){
//     console.log(e.message)
//   }
// }
// call the function
// postRouteEx()

