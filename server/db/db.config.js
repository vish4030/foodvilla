import { MongoClient } from "mongodb";
import 'dotenv/config';


const url = process.env.MONGO_URL;
const client = new MongoClient(url);

export default async function dbConnection(){
    try{
       return (await client.connect()).db("food_villa");
    }catch(err){console.log(err); return null}
}


