//import axios from 'axios'

let serverAPI  = {
    //getTickets: () => (axios.get('http://localhost:3001/tickets'))
    getTickets: () => (fetch('http://localhost:3000/tickets.json'))
}

export default serverAPI;