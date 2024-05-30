import express from "express";

// Create http server
const app = express();

app.post("/admin/user/list", async (req, res) => {
  res.send([...Array.from({length:500}).keys()].map(key => (
  {
    "id": key,
    "userType": "测试账号",
    "userName": `测试账号${key}`,
  })))
});
// Start http server
app.listen(5177, () => {
  console.log(`Server started at http://localhost:${5177}`);
});
