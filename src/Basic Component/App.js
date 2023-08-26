import Skills from "./Components of APP/Skills"
const App=()=>{

    const alvi=['wp','Javascript','clowd computing']
    const billal=['wp','psycopath','Data entry']
    const Soleman=['wp','Java','Python']
    return(
        <div className="app">
              <Skills
                Skillsar={alvi}
                name="Hamed Hasan Alvi"
              />
              <hr/>
              <Skills
                Skillsar={billal}
                name="Billal Hossain"
              />
              <hr/>
              <Skills
                Skillsar={Soleman}
                name="Soleman Khan"
                demo={{a:10}}
              />
        </div>
    )
}
export default App