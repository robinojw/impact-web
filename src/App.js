import './App.css'
import Header from './header/header'
import Title from './title/title'
import Phone from './phone/phone'
import Info from './info-section/info';
import { ScrollService } from './scroll-service';

function App() {
  new ScrollService();
  return (
    <div className="App">
      <Header></Header>
      <Title></Title>
      <Phone></Phone>
      <Info></Info>
    </div>
  )
}

export default App
