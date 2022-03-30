import Header from 'src/components/Header'
import TodoList from 'src/components/TodoList'
import { useState } from 'react'
import { page } from 'web-init'


export default page({
  url: '/',
  layout: 'blank',
  component: ({}) => {
    
  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  )
  },
})
