import axios from 'axios'

let serverAPI  = {
    //getTickets: () => (axios.get('http://localhost:3001/tickets'))
    //getTickets: () => (fetch('http://localhost:3000/tickets.json')),

    getSearchId: () => (axios.get('https://front-test.beta.aviasales.ru/search')),
    
    getTiketsApiV2: (searchId) => (axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`))

}

export default serverAPI;