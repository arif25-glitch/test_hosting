import fs from 'fs';
import path from 'path';
import { File } from 'buffer';
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
    const file = formData.get('gambar');
    const harga = formData.get('harga');
    const deskripsi = formData.get('deskripsi');
    const kategori = formData.get('kategori');
    const nama = formData.get('nama');
    const _id = formData.get('_id');

    // input sanitization
    const sanitizedKategori = kategori && typeof kategori === 'string' ? kategori : 'defaultCollection';
    const sanitizedNama = nama && typeof nama === 'string' ? nama : 'defaultCollection';
    const sanitizedDeskripsi = deskripsi && typeof deskripsi === 'string' ? deskripsi : 'defaultCollection';
    const sanitizedHarga = harga && typeof harga === 'string' ? harga : 'defaultCollection';
    const sanitized_id = _id && typeof _id === 'string' ? _id : 'defaultCollection';

    if (file === 'no_image') {
      const newData = {
        'nama': sanitizedNama,
        'deskripsi': sanitizedDeskripsi,
        'harga': sanitizedHarga,
        'kategori': sanitizedKategori,
      };

      try {
        await client.connect();

        const database = client.db('waroengnongkie');
        const collection = database.collection(sanitizedKategori);

        const result = await collection.updateOne({ _id: new ObjectId(sanitized_id) }, { $set: newData });

        return Response.json({
          'status': 200,
          'insertedID': result.upsertedId,
          'message': 'success',
        });
      } catch (err) {
        console.error(err);
      } finally {
        await client.close();
      }
    } else {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');


      // variable instances

      if (file instanceof File) {
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const fileName = file.name;
        const filePath = path.join(uploadDir, fileName);
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(filePath, buffer);

        const newData = {
          'nama': sanitizedNama,
          'deskripsi': sanitizedDeskripsi,
          'harga': sanitizedHarga,
          'kategori': sanitizedKategori,
          'gambar': `/uploads/${fileName}`,
        };

        try {
          await client.connect();

          const database = client.db('waroengnongkie');
          const collection = database.collection(sanitizedKategori);

          const result = await collection.updateOne({ _id: new ObjectId(sanitized_id) }, { $set: newData });

          return Response.json({
            'status': 200,
            'insertedID': result.upsertedId,
            'message': 'success',
          });
        } catch (err) {
          console.error(err);
        } finally {
          await client.close();
        }
      }
      return Response.json({
        'message': 'success',
      });
    }

  } catch (err) {
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