import React, {useState} from 'react'
import axios from 'axios'

import Header from './components/Header'
import About from './About'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import {Footer} from './components/Footer'
import{
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = " https://www.omdbapi.com/?i=tt3896198&apikey=c25a8490";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({data}) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results}
        })
      });
    }
  }


  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () =>{
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


//toofani
// return(
//   <>
//   <Router>
 {/* <Header title="Movies DB" searchBar={false}/> */}
 {/* <Switch>
 <Route exact path="/" render={()=>
 {
//    return(

  return (
    <div className="App">
      <header>
        <h1>Mern Movies Datebase</h1>
        
      </header>
      <main>
        <Search handleInput = {handleInput} search={search}/>

        <Results results = {state.results} openPopup = {openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} 
        closePopup={closePopup} /> : false}
      </main>
    </div>
  )
// }
//  }} >
  </Route>
           <Route exact path="/about">
             <About />
           </Route>
          
           
          
            
  
         </Switch>
 
 
 
 
 {/* <Footer/> */}
//  </Router>
//   </>
  
//    );
//  } */}
//bakchodi ends

//chalega
//   return (
//     <div className="App">
//       {/* <header>
//         <h1>Movies Datebase</h1>
        

//       </header> */}
//      <Header title="MyMovie" searchBar={false}/>
 
//       <main>
//         <Search handleInput = {handleInput} search={search}/>
//         {/* <Footer/> */}
//         <Results results = {state.results} openPopup = {openPopup} />
// {/* <Footer/> */}
//         {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} 
//         closePopup={closePopup} /> : false}
//       </main>
//       <Footer/>
//     </div>
//   );
// }
//chalega

return (
  <>
    {/* //{" "} */}
    <Router>
      <Header title="Movies DB" searchBar={false} />
      {
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="App">
                  <header>
                    <h1> Movies Datebase</h1>
                  </header>
                  <main>
                    <Search handleInput={handleInput} search={search} />

                    <Results results={state.results} openPopup={openPopup} />

                    {typeof state.selected.Title != "undefined" ? (
                      <Popup
                        selected={state.selected}
                        closePopup={closePopup}
                      />
                    ) : (
                      false
                    )}
                  </main>
                </div>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      }
      <Footer/>
    </Router>
  </> 
 );
    }
export default App
