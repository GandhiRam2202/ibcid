import img0 from "/images/123.jpg";
import img1 from "/images/1231.jpg";
import img2 from "/images/132.jpg";
import img3 from "/images/1321.jpg";
import img4 from "/images/143.jpg";
import img5 from "/images/img0.jpg";
import img6 from "/images/img1.jpeg";
import img7 from "/images/img2.jpeg";
import img8 from "/images/img3.png";
import img9 from "/images/img4.jpg";
import * as Yup from "yup";



export  const slide = [
    { img: img5, text: "Welcome to Our Website" },
    { img: img6, text: "Best Services in the City" },
    { img: img7, text: "Professional & Trusted Team" },
    { img: img8, text: "We Deliver Quality Work" },
    { img: img9, text: "We Deliver Quality Work" },
  ];


export function handleWap() {
    window.open(
        "https://wa.me/+918667403826?text=Hello%20I%20want%20to%20know%20more",
        "_blank"
    );
};

export function linkedIn(){
    window.open("https://www.linkedin.com/in/parthiban-ramachandiran/", "_blank");
};



export function handleMail() {
    window.location.href = "mailto:ibcidetective22@gmail.com"; // your mail id
};


export function handleCall() {
    window.location.href = "tel:+918667403826"; // your phone number

};





export function handleOpenMap() {
    window.open(`https://maps.app.goo.gl/aFxAg3V9eNXRsUM67`, "_blank");
}


export const slides = [
    { text: "Your Peace, Our Mission" },
    { text: "Justice Begins With Facts" },
    { text: "We See What Others Miss" },
    { text: "Truth Delivered With Discretion" },
    { text: "Clarity Behind Every Case" },
    { text: "Truth leaves footprints" },
    { text: "Your truth. Our mission" },
    { text: "Evidence never lies" },
    { text: "We See What Others Miss" },
    { text: "Tracking Truth Relentlessly" },
    { text: "Investigating Beyond Limits" }

];

export const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
};




export const slidesImage = [
    { img: img0 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
];


export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    message: Yup.string().optional(),
});