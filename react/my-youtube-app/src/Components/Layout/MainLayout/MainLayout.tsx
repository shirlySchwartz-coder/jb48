import { MainFooter } from '../MainFooter/MainFooter';
import { MainHeader } from '../MainHeader/MainHeader';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainPage } from '../MainPage/MainPage';
import MainRoute from '../Routes/MainRoute/MainRoute';
import './MainLayout.css';

export function MainLayout(): JSX.Element {
  return (
    <div className='MainLayout'>
      <header>
        <MainHeader />
      </header>
      <aside>
        <MainMenu />
      </aside>
      <main>
        <MainRoute />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
