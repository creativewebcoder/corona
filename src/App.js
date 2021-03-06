import React from 'react';

import { Cards, Chart, CountryPicker } from './components/'
import { fetchData } from './api';
import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchDatas = await fetchData();
        this.setState({data:fetchDatas});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);    
        this.setState({ data, country: country });
      }


    render(){
        const { data, country } = this.state;
        return (
            <div>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="COVID-19" />
                    <Cards data={data} />                
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />                    
                </div>
                <div className={styles.developer}>
                        Developed By 
                        <a href="https://www.razibhossain.com/" target="_blank">&nbsp;Md. Razib Hossain&nbsp;</a>
                    </div>
            </div>
        )
    }
}

export default App;