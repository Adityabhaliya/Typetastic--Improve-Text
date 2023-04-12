import Alert from './components/Alert';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {


  const [mode, setMode] = useState('light');  // Whether  dark mode is enabled or not ...
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0d2539'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'Typetestic - Dark Mode'

      //its a use to attract user to downlod your app or install any software 

      // setInterval(()=>{
      // document.title='Typetestic  is Amazing Mode';

      // },2000)
      // setAlert(()=>{
      // document.title='Install Typetestic Now 🔥🔥🔥';

      // },1500)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled ", "success")
      // document.title = 'Typetestic - Light Mode'

    }
  }

  // const removeBodyClasses = ()=> {
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  // }

  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls)
  //   document.body.classList.add('bg-'+cls) 
  //   if(mode === 'light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor = '#0d2539'
  //     showAlert("Dark mode has been enabled" ,"success")
  //   }else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode has been enabled " ,"success")
  //   } 
  // }

  return (
    <>
      <Router>
        <Navbar title="Typetestic" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* {<Navbar/>} */}
        <div className="container my-3">
          <Switch>
            <Route path='/about'><About mode={mode} /></Route>
            <Route path='/'>       
             <TextForm showAlert={showAlert} heading="Use Typetestic -Word counter, Charcater counter, Remove extra spaces" mode={mode} />
            </Route>
          </Switch>

        </div>

      </Router>
    </>

  );
}

export default App;
