import fs from 'fs';
import path from 'path';
import { File } from 'buffer';
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
  try {
    const formData = await req.formData();
    const file = formData.get('gambar');
    const harga = formData.get('harga');
    const deskripsi = formData.get('deskripsi');
    const kategori = formData.get('kategori');
    const nama = formData.get('nama');
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // input sanitization
    const sanitizedKategori = kategori && typeof kategori === 'string' ? kategori : 'defaultCollection';
    const sanitizedNama = nama && typeof nama === 'string' ? nama : 'defaultCollection';
    const sanitizedDeskripsi = deskripsi && typeof deskripsi === 'string' ? deskripsi : 'defaultCollection';
    const sanitizedHarga = harga && typeof harga === 'string' ? harga : 'defaultCollection';

    // variable instances

    if (file instanceof File) {
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
    
      const fileName = file.name;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, buffer);

      try {
        await client.connect();
        const database = client.db('waroengnongkie');
        
        const collection = database.collection(sanitizedKategori);
        const result = await collection.insertOne({
          'nama': sanitizedNama,
          'harga': sanitizedHarga,
          'deskripsi': sanitizedDeskripsi,
          'gambar': `/uploads/${fileName}`,
        });
    
        return Response.json({
          'status': 201,
          'insertedID': result.insertedId,
          'message': 'successful inserted',
        });  
      } catch (err) {
        console.error("An error occured: ", err);
        
      } finally {
        await client.close();
      }
    }

    return Response.json({
      'message': 'success',
    });

  }
  catch (err) {
    console.error(err)
    return Response.json({
      'error': 'api only accept form-data',
    })
  } finally {
    return Response.json({
      'status': 'success',
      'message': 'api succesful accessed',
    });
  }
}