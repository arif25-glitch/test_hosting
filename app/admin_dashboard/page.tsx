/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";

interface MyData {
  _id: string;
  nama: string;
  harga: string;
  gambar: string;
  deskripsi: string;
  kategori: string,
};

export default function AdminDashboard() {
  // initiate variables
  const [data, setData] = useState<MyData[]>([]);
  const [viewKategori, setViewKategori] = useState('Pilih Kategori');

  // const btnCloseTambahModal = document.getElementById('btn-tambah-close');

  // Product Desc
  const [itemNama, setItemNama] = useState('');
  const [itemHarga, setItemHarga] = useState('');
  const [itemDeskripsi, setItemDeskripsi] = useState('');
  const [itemKategori, setItemKategori] = useState('makanan');
  const [itemFile, setItemFile] = useState<File | null>(null);

  // Product desc edit
  const [itemNamaEdit, setItemNamaEdit] = useState('');
  const [itemHargaEdit, setItemHargaEdit] = useState('');
  const [itemDeskripsiEdit, setItemDeskripsiEdit] = useState('');
  const [itemKategoriEdit, setItemKategoriEdit] = useState('makanan');
  const [itemFileEdit, setItemFileEdit] = useState<File | null>(null);
  const [item_id, setItem_id] = useState('');

  const data_edit_value = async (_id: string, nama: string, harga: string, deskripsi: string, kategori: string) => {
    setItemNamaEdit(nama);
    setItemHargaEdit(harga);
    setItemDeskripsiEdit(deskripsi);
    setItemKategoriEdit(kategori);
    setItem_id(_id);
  }

  const data_edit = async () => {
    const formData = new FormData();

    formData.append('_id', item_id);
    formData.append('nama', itemNamaEdit);
    formData.append('deskripsi', itemDeskripsiEdit);
    formData.append('harga', itemHargaEdit);
    formData.append('kategori', itemKategoriEdit);

    if (itemFileEdit) {
      formData.append('gambar', itemFileEdit);
    } else {
      formData.append('gambar', 'no_image');
    }

    await fetch('/api/data_edit', {
      method: "POST",
      body: formData,
    });

    setItemFileEdit(null);

    location.reload();
  }

  const data_read = async (type: string) => {
    const response = await fetch('/api/data_read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'type': type,
      }),
    });
    const jsonData = await response.json();
    setData(jsonData);
    setViewKategori(type);
  };

  const data_write = async (nama: string, deskripsi: string, harga: string, kategori: string, gambar: any) => {
    const formData = new FormData();

    formData.append('nama', nama);
    formData.append('deskripsi', deskripsi);
    formData.append('harga', harga);
    formData.append('kategori', kategori);
    formData.append('gambar', gambar);

    const response = await fetch('/api/data_write', {
      method: 'POST',
      body: formData,
    });

    await response.json();
    location.reload();
  }

  const data_delete = async (_id: string, kategori: string) => {
    const formData = new FormData();

    formData.append('_id', _id);
    formData.append('kategori', kategori);

    await fetch('/api/data_delete', {
      method: 'POST',
      body: formData,
    });

    location.reload();
  }

  return (
    <>
      {/* <!-- Spinner Start --> */}
      {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}>
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container-fluid mt-3 pe-5 ps-5 d-flex" style={{ textAlign: 'center' }}>
                <button type="button" className="btn btn-primary w-25" data-bs-toggle="modal" data-bs-target="#kategori-modal">{viewKategori}</button>
              </div>
            </div>
            <div className="col">
              <div className="container-fluid text-end mt-3 pe-5 ps-5">
                <button type="button" className="btn btn-success w-25" data-bs-toggle="modal" data-bs-target="#tambah-modal">Tambah</button>
              </div>
            </div>
          </div>
          <div className="container-fluid pe-5 ps-5 mt-3">
            <table className="table table-striped table-dashboard">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Gambar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    // closure to handle data deletion
                    const handleDelete = () => {
                      data_delete(item['_id'], item['kategori']);
                    }
                    const handleEdit = () => {
                      data_edit_value(item['_id'], item['nama'], item['harga'], item['deskripsi'], item['kategori']);
                    }
                    return (
                      <tr key={item['_id']}>
                        <td>{index + 1}</td>
                        <td>{item['nama']}</td>
                        <td>{item['deskripsi']}</td>
                        <td>{item['harga']}</td>
                        <td>
                          <Image
                            src={item['gambar']}
                            alt="Gambar tidak dapat ditampilkan"
                            width={100}
                            height={100} />
                        </td>
                        {/* <td>{item['gambar']}</td> */}
                        <td>
                          <button type='button' className='btn btn-primary mb-1 w-100' data-bs-toggle='modal' data-bs-target='#edit-modal' onClick={handleEdit}>Edit</button>
                          <br />
                          <button type='button' className='btn btn-danger mt-1 w-100' onClick={handleDelete}>Hapus</button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <!-- Modal Tambah --> */}
      <div className="modal fade" id="tambah-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Tambah Menu</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" id="btn-tambah-close"></button>
            </div>
            {/* <!-- Modal Body --> */}
            <div className="modal-body">
              <form action="/api/data_write" encType="multipart/form-data" method="POST">
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" name="nama_makanan" value={itemNama} id="input-nama-makanan" onChange={(e) => setItemNama(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea rows={5} typeof="text" className="form-control" value={itemDeskripsi} id='input-deskripsi-makanan' name="deskripsi_makanan" onChange={(e) => setItemDeskripsi(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Harga</label>
                  <input type="text" className="form-control" id="input-harga-makanan" value={itemHarga} name="harga_makanan" onChange={(e) => setItemHarga(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gambar</label>
                  <input className="form-control" type="file" id="idFile" name="file" onChange={(e) => setItemFile(e.target.files ? e.target.files[0] : null)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pilih Kategori:</label>
                  <select className="form-select" id="exampleInputMenu" name="menu_kategori" onChange={(e) => setItemKategori(e.target.value)}>
                    <option value="makanan" selected>Makanan</option>
                    <option value="minuman">Minuman</option>
                    <option value="snack">Snack</option>
                    <option value="frozen_food">Frozen Food</option>
                  </select>
                </div>
                <div className="mb-3 form-check text-end">
                  <button type="button" className="btn btn-success me-2" onClick={() => {
                    data_write(itemNama, itemDeskripsi, itemHarga, itemKategori, itemFile);
                  }}>Tambah</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Tutup</button>
                </div>
              </form>
            </div>
            {/* <!-- Modal Footer --> */}
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      {/* <!-- Modal Pilih Kategori --> */}
      <div className="modal fade" id="kategori-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Pilih Kategori</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {/* <!-- Modal Body --> */}
            <div className="modal-body">
              <div className="container-fluid text-center mt-3">
                <button type="button" className="btn btn-light w-75" onClick={() => data_read('makanan')} data-bs-dismiss="modal" id="btn-kategori-makanan">Makanan</button>
              </div>
              <div className="container-fluid text-center mt-3">
                <button type="button" className="btn btn-light w-75" onClick={() => data_read('minuman')} data-bs-dismiss="modal" id="btn-kategori-minuman">Minuman</button>
              </div>
              <div className="container-fluid text-center mt-3">
                <button type="button" className="btn btn-light w-75" onClick={() => data_read('snack')} data-bs-dismiss="modal" id="btn-kategori-makanan">Snack</button>
              </div>
              <div className="container-fluid text-center mt-3">
                <button type="button" className="btn btn-light w-75" onClick={() => data_read('frozen_food')} data-bs-dismiss="modal" id="btn-kategori-minuman">Frozen Food</button>
              </div>
            </div>
            {/* <!-- Modal Footer --> */}
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      {/* <!-- Modal Edit --> */}
      <div className="modal fade" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Edit</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {/* <!-- Modal Body --> */}
            <div className="modal-body">
              <form method="post">
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" name="nama_makanan" value={itemNamaEdit} id="nama_makanan_edit" onChange={(e) => setItemNamaEdit(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea rows={5} typeof="text" className="form-control" value={itemDeskripsiEdit} name="deskripsi_makanan" id="deskripsi_makanan_edit" onChange={(e) => setItemDeskripsiEdit(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Harga</label>
                  <input type="text" className="form-control" name="harga_makanan" value={itemHargaEdit} id="harga_makanan_edit" onChange={(e) => e.target.value}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Gambar</label>
                  <input className="form-control" type="file" name="gambar_makanan" id="gambar_edit" onChange={(e) => setItemFileEdit(e.target.files ? e.target.files[0] : null)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Pilih Kategori:</label>
                  <select className="form-select" id="kategori_makanan_edit" name="menu_kategori">
                    <option value="makanan" selected>Makanan</option>
                    <option value="minuman">Minuman</option>
                    <option value="snack">Snack</option>
                    <option value="frozen_food">Frozen Food</option>
                  </select>
                </div>
                <div className="mb-3 form-check text-end">
                  <button type="button" className="btn btn-primary me-2" onClick={data_edit}>Edit</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Tutup</button>
                </div>
              </form>
            </div>
            {/* <!-- Modal Footer --> */}
            <div className="modal-footer">
            </div>

          </div>
        </div>
      </div>

    </>

  );
}