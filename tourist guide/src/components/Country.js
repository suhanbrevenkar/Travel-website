import React from 'react'
import PageSection from './PageSection'
import '../css/style2.css'


export default class Country extends React.Component {
  constructor(props){
    super(props);
    this.state = {countries: [] , filteredCountry: []}
  }

  componentWillMount(){
    fetch("http://localhost:5000/countries").then(res =>res.json())
    .then(data => this.setState({
      countries:data
    }))
  }
  render() {
    this.state.filteredCountry = this.state.countries.filter(a => a.country === this.props.country)
    console.log(this.state.filteredCountry)

    const Places = this.state.filteredCountry.map(country =>(
      <PageSection 
        img={`/img/${country.name}.jpg`}
        h3={country.name}
        para={country.description}
      />
      ))
    return (
      <div >
        <img src= {`/img/${this.props.country}.jpg`} style={{"width": "100%" , "height": "500px"}}/>
        <h1>{this.props.country}</h1>
         {Places}
      </div> 
    )
  }
}
