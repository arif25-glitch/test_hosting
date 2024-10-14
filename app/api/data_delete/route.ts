// import fs from 'fs';
// import path from 'path';
// import { File } from 'buffer';
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://nongkiewaroeng:zaGapAi7eT2Hi0AV@cluster0.u5dci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const _id = formData.get('_id');
    const kategori = formData.get('kategori');

    // Input sanitization
    const sanitized_id = _id && typeof _id === 'string' ? _id : 'defaultCollection';
    const sanitizedKategori = kategori && typeof kategori === 'string' ? kategori : 'defaultCollection';

    try {
      await client.connect();
      const database = client.db('waroengnongkie');

      const collection = database.collection(sanitizedKategori);
      await collection.deleteOne({ _id: new ObjectId(sanitized_id) });

      return Response.json({
        'status': 200,
        'message': 'success',
      });
    } catch (err) {
      console.error("An error occured: ", err);

    } finally {
      await client.close();
    }
  } catch (err) {
    console.error(err);
  }
}