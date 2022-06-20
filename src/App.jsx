import React, { useState, useRef, useEffect } from 'react'
import { TodoList } from './components/TodoList'
import { Button, Container, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import uuid from 'react-uuid'

const KEY = 'todoApp.todos';

export function App() {
    const [todos, setTodos] = useState([{ id: 1, task: "Test 1", completed: false }]);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos])

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        let task = todoTaskRef.current.value;
        if (task === '') return;

        task = " " + task;

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid(), task, completed: false }];
        });

        todoTaskRef.current.value = "";
    }

    const handleClearCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.completed)
        setTodos(newTodos);
    }

    return (
        <>
            <Container className='p-3'>
                <Row>
                    <Col xs={8}>
                        <TodoList todos={todos} toggleTodo={toggleTodo} />
                        <InputGroup className="mb-3" >
                            <FormControl
                                className='bordersNone padding05 buttonShadow'
                                placeholder="New Task"
                                ref={todoTaskRef}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Button variant="outline-success" className='me-3 buttonShadow' onClick={handleTodoAdd}>Add</Button>
                <Button variant="outline-danger" className='buttonShadow' onClick={handleClearCompleted}>Delete</Button>
            </Container>
        </>
    )
}