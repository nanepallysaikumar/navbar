import { VerticalNavbar } from './Components/VerticalNavbar/VerticalNavbar';
import { Content } from './Container/Content';
import { faCoffee, faLink, faRocket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

function App() {
  const navLinks = [
    { to: "/", name: "Connect", icon: faCoffee },
    { to: "/analyze", name: "Analyze", icon: faMagnifyingGlass },
    { to: "/integrate", name: "Integrate", icon: faLink },
    { to: "/deploy", name: "Deploy", icon: faRocket },
  ];
  return (
    <div className='wrapper'>
      <VerticalNavbar links={navLinks}/>
      <Content />
    </div>
  );
}

export default App;
