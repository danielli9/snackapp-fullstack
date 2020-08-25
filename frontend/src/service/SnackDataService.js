import axios from 'axios'

const SNACKAPP_API_URL = 'http://localhost:8080/snackapp-0.0.1-SNAPSHOT'
const SNACKS_URL = `${SNACKAPP_API_URL}/snacks`

class SnackDataService {

    retrieveAllSnacks() {
        return axios.get(SNACKS_URL);
    }

    deleteSnack(id) {
        return axios.delete(`${SNACKS_URL}/${id}`);
    }
    
    updateSnack(id, snack) {
        return axios.put(`${SNACKS_URL}/${id}`, snack);
    }

    addSnack(snack){
        return axios.post(SNACKS_URL, snack);
    }

}

export default new SnackDataService()