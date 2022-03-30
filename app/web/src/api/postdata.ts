import { api } from 'web-init'

export default api('/api/postdata', async ({ req, reply, db, ext }) => {
   await db.todo.create({
       data:{
          title : req.body.title,
          status : req.body.status
       }
   })
    reply.send({mesage:"data telah terkirim"})
})
