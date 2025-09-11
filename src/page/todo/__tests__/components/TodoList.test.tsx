import {render, screen} from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import TodoList from '../../components/TodoList'

describe('testing TodoList', ()=>{
    test('shows empty message when list is empty',()=>{
        render(<TodoList todolist={[]}/>)
        expect(screen.getByText("Data not found")).toBeInTheDocument()
    })

    test('shows data when list has data',()=>{
        render(<TodoList todolist={[{id:"1", task:"Hello World"}, {id:"2", task:"user says hi"}]}/>)
        expect(screen.getByText("Hello World")).toBeInTheDocument()
        expect(screen.getByText("user says hi")).toBeInTheDocument()
        expect(screen.queryByText("Data not found")).not.toBeInTheDocument()
    })
})
