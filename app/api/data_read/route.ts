import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://nongkiewaroeng:zaGapAi7eT2Hi0AV@cluster0.u5dci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await client.connect();
    const database = client.db('waroengnongkie');

    const collection = database.collection(data['type']);
    const allData = await collection.find({}).toArray();

    return Response.json(allData);  
  } catch (err) {
    console.error("An error occured: ", err);
    
  } finally {
    await client.close();
  }
}