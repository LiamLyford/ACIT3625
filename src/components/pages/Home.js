import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Todo from '../Todo';
import Form from '../Form';
import FilterButton from '../FilterButton';
import DATA from '../../data.json';

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home() {
    const [tasks, setTasks] = useState(DATA);
    const [filter, setFilter] = useState('All');
    const [warning, setWarning] = useState('');

    // if there are tasks stored for the user, then load those. Otherwise, start with the defaults
    useEffect(() => {
        const data = localStorage.getItem('listOfTasks');
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('listOfTasks', JSON.stringify(tasks));
    });

    function addTask(name) {
        if (name === '') {
            setWarning('You must enter a name')
        } else {
            var newTask = { id: "todo-" + nanoid(), name: name, completed: false };
            // var temp = tasks;
            // temp.push(newTask);
            // console.log(typeof(tasks))
            // console.log(typeof(temp)); 
            // setTasks(temp);
            // console.log(tasks);
            // console.log(typeof(tasks))
            setTasks([...tasks, newTask]);
            setWarning('');
        }
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        });
        setTasks(updatedTasks)
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    const editTask = (id, newName) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, name: newName }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const taskList = tasks
        .filter(task => FILTER_MAP[filter](task))
        .map(task =>
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />);

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask} />
            <div style={{ textAlign: 'center' }}><span className="name-warning">{warning}</span></div>
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h2 id="list-heading">
                    {headingText}
                </h2>
                <button type="button" className="btn toggle-btn" onClick={() => { localStorage.clear(); setTasks([]) }}>
                    <span className="visually-hidden">Clear </span>
                    <span>Clear All Tasks</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            </div>
            <ul
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
}

export default Home;
