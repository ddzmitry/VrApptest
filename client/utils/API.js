import axios from "axios";

export default {

  // Saves an article to the database
  saveScore: function(score) {
    console.log('Score')
    console.log(score)
    let body = {score:score}
    return axios.post("http://localhost:3001/test",body)
    .then(data=>console.log(data.data))
  }
};
