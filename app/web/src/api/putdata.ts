import { api } from 'web-init'

export default api('/api/putdata', async ({ req, reply, db, ext }) => {
    const putdata = await db.todo.update({
        where: {id: req.query.id},
        data:{
            title : req.body.title,
            status : req.body.status
         }
    })
    reply.send(putdata)
})
