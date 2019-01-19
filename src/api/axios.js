import axios from "axios";

export default axios.create(
  { baseURL: 'https://www.googleapis.com/youtube/v3/search', 
  params: { part: 'snippet', maxResults: 10 ,
  key: 'AIzaSyAbfaWcknZXmmSyFaJs74LInnm3H6MhbV0'
  }
})


