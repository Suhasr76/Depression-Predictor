import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
<<<<<<< HEAD
    console.log("[*] Got Request to predict");
    const url = "http://localhost";
    const payload = req.body;
    console.log("[*] Payload: ", payload);
    const response = await axios.post(url, payload);

    /* try {
=======
    console.log("[*] Got Request to predict tweet.");
    const url = "http://172.31.110.205:5000/";
    const payload = req.body;
    console.log("payyyy",payload)
    try {
>>>>>>> d5e9876856ebbd33be8a485316cc82fe17b3dad1
      const response = await axios.post(url, payload);
      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(500).json({ error: "Error" });
      }
      //console.log("[X] Response from server", response.data);
    } catch (e) {
      console.log(e);
     // res.status(500).json({ error: "Error" });
    } 
  }
}
