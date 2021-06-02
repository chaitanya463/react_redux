import classes from './Header.module.css';
import {authActions} from '../store/index'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Header = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const onLogOutHandler = () => {
    dispatch(authActions.logout());
  }

  const navBarOptions = (
    <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && navBarOptions}
    </header>
  );
};

export default Header;
