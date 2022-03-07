import axios from "axios";

const update = (id, data) => {
    return axios.post(`http://localhost:5000/api/propreataire/${id}`, data);
  };
  export default {
   
    update,

  };
  