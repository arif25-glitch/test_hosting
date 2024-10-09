"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface MyData {
  _id: string;
  nama: string;
  harga: string;
  gambar: string;
  deskripsi: string;
};

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [dataMakanan, setDataMakanan] = useState<MyData[]>([]);
  const [dataMinuman, setDataMinuman] = useState<MyData[]>([]);
  const [dataSnack, setDataSnack] = useState<MyData[]>([]);
  const [dataFrozenFood, setDataFrozenFood] = useState<MyData[]>([]);

  useEffect(() => {
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
      
      if (type === 'makanan') {
        setDataMakanan(jsonData);
      } else if (type === 'minuman') {
        setDataMinuman(jsonData);
      } else if (type === 'snack') {
        setDataSnack(jsonData);
      } else if (type === 'frozen_food') {
        setDataFrozenFood(jsonData);
      }
    };

    const getData = async () => {
      await data_read('minuman');
      await data_read('makanan');
      await data_read('snack');
      await data_read('frozen_food');
    }

    getData();
  }, []);

  return (
    <div className="container-fluid bg-white p-0">
      {/* <!-- Spinner Start --> */}
      <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand pt-3 pb-3" >
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Waroeng Nongkie</h1>
            <h1 className="m-0">
              <span style={{ color: 'white' }}>By</span>{' '}
              <span className="text-primary">Cha Cha Brownie</span>
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/about" className="nav-item nav-link">About</a>
              <a href="/services" className="nav-item nav-link">Service</a>
              <a href="index.html" className="nav-item nav-link">Menu</a>
              <a href="https://wa.me/+6282182897993" className="nav-item nav-link">Kontak</a>
              <a href="/admin_login" className="nav-item nav-link">Admin</a>
            </div>
            <a href="https://gofood.co.id/bandar-lampung/restaurant/dapur-kelinci-tirtayasa-28173952-6f98-4a60-87c1-74564d4f83b9"
              className="btn btn-primary py-2 px-4">Pesan Sekarang</a>
          </div>
        </nav>

        <div className="container-fluid py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">Nikmati Hidangan <br />Lezat Kami</h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">Waroeng Nongkie by Cha-Cha Brownie adalah sebuah
                  usaha kafe rumahan yang mengusung konsep berupa tempat untuk bersantai dan berbincang - bincang
                  dimana pengunjung dapat memesan makanan, cemilan serta minuman sesuai dengan aneka menu yang telah disediakan.</p>
                <a href="https://gofood.co.id/bandar-lampung/restaurant/dapur-kelinci-tirtayasa-28173952-6f98-4a60-87c1-74564d4f83b9"
                  className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Pesan
                  Sekarang</a>
              </div>

              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img className="img" src="lib/img/logo21.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="lib/img/cha-cha.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="lib/img/cha-cha2.jpg"
                    style={{ marginTop: "25%" }} />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="lib/img/cha-cha3.png" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="lib/img/kue-1.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Tentang Kami</h5>
              <h1 className="mb-4">Selamat Datang di <i className="fa fa-utensils text-primary me-2"></i>UMKM Cha Cha
                Brownie </h1>
              <p className="mb-4">Cha Cha Brownie merupakan usaha yang beralamatkan
                di Jl. Bengkulu no.14 kelurahan yukum jaya, Kecamatan Terbanggi Besar, Lampung tengah.</p>
              <p className="mb-4">Outlet ini beroperasi setiap hari dari pukul 09.00 - 17.00 WIB dan dapat diakses
                Via WhatsApp.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">3
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Tahun</p>
                      <h6 className="text-uppercase mb-0">Pengalaman</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Populer</p>
                      <h6 className="text-uppercase mb-0">Makanan</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Menu Start --> */}
      <div className="container-fluid py-5">
        <div className="container-fluid">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Menu Makanan</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill"
                  href="#tab-1">
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Drinks</h6>
                      
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Foods</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                  href="#tab-3">
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Snack</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                  href="#tab-4">
                  <i className="fa fa-home fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Frozen</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Drinks' Tab */}
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {
                    dataMinuman.map((item) => {
                      return (
                        <div key={item['_id']} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <Image 
                              className="flex-shrink-0 img-fluid rounded" 
                              src={item['gambar']}
                              alt="Gambar Minuman" 
                              height={80}
                              width={80}/>
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{item['nama']}</span>
                                <span className="text-primary">{item['harga']}</span>
                              </h5>
                              <small className="fst-italic">{item['deskripsi']}</small>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              {/* End of Tab */}

              {/* Foods' Tab   */}
              <div id="tab-2" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                {
                    dataMakanan.map((item) => {
                      return (
                        <div key={item['_id']} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <Image 
                              className="flex-shrink-0 img-fluid rounded" 
                              src={item['gambar']}
                              alt="Gambar Makanan" 
                              height={80}
                              width={80}/>
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{item['nama']}</span>
                                <span className="text-primary">{item['harga']}</span>
                              </h5>
                              <small className="fst-italic">{item['deskripsi']}</small>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              {/* End of Tab */}

              {/* Snacks' Tab   */}
              <div id="tab-3" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                {
                    dataSnack.map((item) => {
                      return (
                        <div key={item['_id']} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <Image 
                              className="flex-shrink-0 img-fluid rounded" 
                              src={item['gambar']}
                              alt="Gambar Sack" 
                              height={80}
                              width={80}/>
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{item['nama']}</span>
                                <span className="text-primary">{item['harga']}</span>
                              </h5>
                              <small className="fst-italic">{item['deskripsi']}</small>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              {/* End of Tab */}

              {/* Frozen Foods' Tab   */}
              <div id="tab-4" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                {
                    dataFrozenFood.map((item) => {
                      return (
                        <div key={item['_id']} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <Image 
                              className="flex-shrink-0 img-fluid rounded" 
                              src={item['gambar']}
                              alt="Gambar Sack" 
                              height={80}
                              width={80}/>
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{item['nama']}</span>
                                <span className="text-primary">{item['harga']}</span>
                              </h5>
                              <small className="fst-italic">{item['deskripsi']}</small>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              {/* End of Tab */}

            </div>
            {/* End of Menu */}

          </div>
        </div>
      </div>
      {/*  */}

      {/* Footer */}
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Internal</h4>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Reservation</a>
              <a className="btn btn-link" href="">Privacy Policy</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Alamat apakah benar,
                Jl. Bengkulu no.14 kelurahan yukum jaya Kecamatan Terbanggi Besar, Lampung tengah</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+6282182897993</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>dapurkelinci024@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social"
                  href="https://web.facebook.com/dapurkelinci?_rdc=1&_rdr"><i
                    className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/dapur_kelinci/"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://wa.me/+6282182897993"><i
                  className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Senin - Minggu</h5>
              <p>09AM - 17PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter
              </h4>
              <p>Jika Ada Pertanyaan, Silahkan Hubungi Kami.</p>
              <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text"
                  placeholder="Email Anda" />
                  <button type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">Waroeng Nongkie</a> | All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

    </div>
  );
}
