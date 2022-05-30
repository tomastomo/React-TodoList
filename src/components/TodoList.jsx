import React from 'react'
import { TodoItem } from './TodoItem'
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/styles.css'

export function TodoList({ todos, toggleTodo }) {
    return (
        <ListGroup>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </ListGroup>
    )
}
