import './MainMenu.css';
import { NavLink } from 'react-router-dom';

export function MainMenu(): JSX.Element {
  return (
    <div className='MainMenu'>
      <NavLink to='/'><h1>MainMenu</h1></NavLink>
      <br /><hr />
      <NavLink to='/addToList'>Add a song</NavLink>
    </div>
  );
}
