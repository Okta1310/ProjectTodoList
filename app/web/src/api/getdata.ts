import { api } from 'web-init'

export default api('/api/getdata', async ({ req, reply, db, ext }) => {
    const getdata = await db.todo.findMany()
    reply.send(getdata)
})
