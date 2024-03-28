import dbConnection from "../db/db.config.js";


export const retrieveAllRes = async (req, res) => {
  const db = await dbConnection();
  const data = await db.collection("data").find({restaurant_id:'all'}).toArray();
  res.send(data);
};

export const retrieveById = async (req, res) => {
  const id = req.params.resId;
  console.log(id);
  const db = await dbConnection();
  const data = await db.collection("data").find({restaurant_id:id}).toArray();
  res.send(data);
};

