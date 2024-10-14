/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Waroeng Nongkie",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        {/* <link href="img/favicon.ico" rel="icon"> */}

        {/* JQuery CDN Link */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet" />

        {/* <!-- Icon Font Stylesheet --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

        {/* <!-- Libraries Stylesheet --> */}
        <link href="lib/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="lib/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="lib/css/style.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* <!-- JavaScript Libraries --> */}
        <Script src="lib/lib/wow/wow.min.js" />
        <Script src="lib/lib/easing/easing.min.js" />
        {/* <Script src="lib/lib/waypoints/waypoints.min.js" /> */}
        {/* <Script src="lib/lib/counterup/counterup.min.js" /> */}
        <Script src="lib/lib/owlcarousel/owl.carousel.min.js" />
        <Script src="lib/lib/tempusdominus/js/moment.min.js" />
        <Script src="lib/lib/tempusdominus/js/moment-timezone.min.js" />
        <Script src="lib/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" />

        {/* <!-- Template Javascript --> */}
        <Script src="lib/js/main.js" />
      </body>
    </html>
  );
}
