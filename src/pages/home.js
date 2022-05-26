import React from "react";
import Form from "./../components/form";
import { useGlobalContext } from "./../context";
import Todo from "./../components/todo";
import Complete from "./../components/complete";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Home = () => {
  const { todo, complete } = useGlobalContext();
  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const weekday = weeks[date.getDay()];
  const year = date.getFullYear();
  const today = `${weekday}, ${month} ${day}, ${year}`;
  // console.log(today);

  return (
    <>
      <main className='todo'>
        <div className='today'>
          <h1>Todos for today, {today} </h1>
          <Form className='form-div' />
        </div>
        <hr className='line' />
        <div className='todo_header'>
          <div className='header-items'>Time</div>
          <div className='header-items'>Decription</div>
          <div className='header-items status'>Status</div>
        </div>
        <hr className='line' />
        <div className='todos_container'>
          {todo.map((item, index) => {
            return <Todo key={index} {...item} />;
          })}
        </div>
      </main>

      <main className='todo'>
        <h1>Completed Todos</h1>
        <hr className='line' />
        <div className='todo_header'>
          <div className='header-items'>Time</div>
          <div className='header-items'>Decription</div>
          <div className='header-items status'>Status</div>
        </div>
        <hr className='line' />
        <div className='todos_container'>
          {complete.map((item, index) => {
            return <Complete key={index} {...item} />;
          })}
        </div>
      </main>
    </>
  );
};
export default Home;
