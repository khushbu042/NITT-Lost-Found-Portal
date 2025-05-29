import axios from "axios"


export const reportItem = async(formData) => {
  const res = await axios.post("http://localhost:8000/api/item/report-item",formData,{
    withCredentials: true
  });
  return res.data;
}

export const searchItems = async (searchTerm,location,category) => {
  const res = await axios.get(`http://localhost:8000/api/item/search?search=${searchTerm}&location=${location}&category=${category}`)
  console.log("Backend Search API:", res);
  return res.data.data;
}

export const recentItem = async() => {
  const res = await axios.get("http://localhost:8000/api/item/recent-item",{
    withCredentials: true
  });
  console.log("Bacnend Recent Item",res);
  return res.data;
}
