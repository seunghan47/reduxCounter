
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterActions.increment())
  }

  function increase() {
    dispatch(counterActions.increase(10))
  }

  function decrementHandler() {
    dispatch(counterActions.decrement())
  }

  function toggleHandler() {
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
