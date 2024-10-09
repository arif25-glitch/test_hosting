export default function About() {
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
              <a href="/" className="nav-item nav-link">Home</a>
              <a href="/about" className="nav-item nav-link active">About</a>
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
            <div className="row align-items-center">
              <div className="col-lg-12 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft mb-5 text-center mt-5">Tentang Kami</h1>
                <p className="text-white animated slideInLeft mb-4 pb-2 mt-5 py-5 me-5 ms-5 pb-5 text-center" style={{fontSize: "24px", fontFamily: 'cursive'}}>Awalnya pemilik kafe ini yaitu Diana Ika Sari, sejak pertengahan tahun 2021
                  melakukan  penjualan aneka produk makanan secara online dengan sistem Pre order,
                  yang di  distribusikan secara langsung maupun pengiriman oleh kurir kepada pelanggan.
                  Seiring bertambahnya minat konsumen terhadap produk nya, pemilik melebarkan
                  usaha ke catering rumahan dengan menu ayam bakar,ikan bakar dan juga ayam  geprek.
                  Pada momentum Ramadhan dan lebaran Idhul Fitri 2022 dan 2023 pemilik juga
                  menjual berbagai produk khas lebaran berupa kue kering,kue basah,
                  aneka bolu dan  brownies,serta cemilan seperti pempek, tekwan,dimsum dan siomay.
                  Waroengnongkie by Cha-Cha Brownie berdiri sejak bulan Maret 2023,
                  merupakan  sebuah kafe rumahan yang berkonsep minimalis modern dengan tema
                  kekinian yang  menyajikan berbagai menu makanan, minuman serta cemilan .
                  Selain itu,  waroengnongkie menyajikan beberapa menu andalan yang sudah
                  terjual laris  dipasaran yaitu Home Made pizza, brownies panggang,aneka bolu dan pempek ikan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}