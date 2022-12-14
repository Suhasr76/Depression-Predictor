import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("[*] Got Request to predict tweet.");
    const url = "http://localhost";
    const payload = req.body;
    console.log("payyyy",payload)
    try {
      const response = await axios.post(url, [payload]);
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
