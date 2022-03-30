import { api } from 'web-init'

export default api('/api/deletedata', async ({ req, reply, db, ext }) => {
    const deletedata = await db.todo.delete({
            where: {id: req.query.id}
    })
    reply.send(deletedata)
})
