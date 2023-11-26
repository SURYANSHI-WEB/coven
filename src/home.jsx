import { hello_world_backend } from "../../src/declarations/hello_world_backend";

const fetchAllData = async () =>{
  let img1 = await hello_world_backend.getAllData('img1');
  let img2 = await hello_world_backend.getAllData('img2');
  let data1 = await hello_world_backend.getAllData('data1');
  let data2 = await hello_world_backend.getAllData('data2');
  let imgTag1 = document.getElementById("img1");
  let imgTag2 = document.getElementById("img2");
  let dataTag1 = document.getElementById("data1");
  let dataTag2 = document.getElementById("data2");
  dataTag1.innerText = data1;
  dataTag2.innerText = data2;
  imgTag1.src=img1;
  imgTag2.src=img2;
}

fetchAllData();