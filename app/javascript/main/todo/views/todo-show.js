import React from 'react'
import { TodoHeader } from '../components';
import { TodoList } from '../components';
import { TodoFooter } from '../components';

function Show() {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  )
}

export default Show
