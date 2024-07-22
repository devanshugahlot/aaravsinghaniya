import React from "react";
import "./home.css";
import img1 from "../assets/images/IMG_20240718_114921_628.jpg";
import certificate1 from "../assets/images/cer1.jpg";
import certificate2 from "../assets/images/cer2.jpg";
import certificate3 from "../assets/images/cer3.jpg";
import certificate4 from "../assets/images/cer4.png";
import roimg from "../assets/images/rohan.jpeg";
import ridimg from "../assets/images/ridi.jpeg";
import sbi from "../assets/images/sbi.jpg";
import gov from "../assets/images/gov.png";
import bai from "../assets/images/bai.jpeg";
import bin from "../assets/images/bin.jpeg";
import bit from "../assets/images/bit.png";
import cry from "../assets/images/cry.jpeg";
const Home = () => {
  return (
    <div className="maincont">
      <div className="mainbackground">
        <div className="main-heading">
          <h1>
            Aarav Singhaniya <br /> TRADING
          </h1>
        </div>
      </div>
      <div className="second-div">
        <div className="second-text-div">
          <p>
            Our vision is to increase the freedom of money globally. We believe
            that by spreading this freedom, we can significantly improve lives
            around the world. Our mission is to provide the core infrastructure
            services for organizing the world's crypto.
          </p>
        </div>
        <div className="second-img">
          <img src={gov} alt="" />
        </div>
      </div>

      <div className="third-div">
        <p class="responsive-text">
          Our mission is to create more economic freedom in the world We define
          economic freedom as the ability to make choices with respect to one's
          personal resources, unencumbered by trusted third parties or borders
          or lack of access.
        </p>
      </div>

      <div className="fourth">
        <section className="about-us">
          <h1>ABOUT US</h1>
          <p>
            Our mission is to help bring financial services into the 21st
            century by creating new products for different types of traders. We
            want our name to be the first that comes to mind when anybody thinks
            about online trading. Every project we work on will be in service of
            our clients and we will continue to improve our offering to
            accommodate their needs. We will make a significant contribution to
            our industry while maintaining a standard of excellence throughout
            the company and everything we produce.
          </p>
        </section>
        <section className="placement">
          <img src={img1} alt="I am Placed By DYPCET" />
        </section>
      </div>

      <hr />

      <div className="fifth">
        <div className="fifth-text">
          <h2>PARTNERS</h2>
        </div>
        <div className="partners-img">
          <img src={bai} alt="" />
          <img src={bin} alt="" />
          <img src={bit} alt="" />
          <img src={cry} alt="" />
        </div>
      </div>

      <div style={{ marginTop: "150px" }} className="fifth">
        <div className="fifth-text">
          <h2>TRADING CERTIFICATE</h2>
        </div>
        <div className="partners-img">
          <img src={certificate1} alt="" />
          <img src={certificate2} alt="" />
          <img src={certificate3} alt="" />
          <img src={certificate4} alt="" />
        </div>
      </div>
      <div className="sixth">
        <div className="six-div">
          <div className="imgdiv">
            <img src={sbi} alt="" />
          </div>
          <div className="tetxsix">
            <p>
              The SEBI-Registered Investment Advisor meaning is a professional
              authorised and registered with the Securities and Exchange Board
              of India (SEBI) to provide financial advisory services to clients.
              A SEBI-Registered Investment Advisor must comply with the code of
              conduct, disclosure norms, and minimum qualifications and
              experience requirements set by SEBI. The primary objective of a
              SEBI-Registered Investment Advisor is to offer unbiased and
              personalised investment advice to clients based on their financial
              goals, risk profile, and investment preferences. Investors can
              receive trustworthy and transparent advice from a SEBI-Registered
              Investment Advisor.
            </p>
          </div>
        </div>
      </div>
      <section id="testimonials">
        <div className="testimonial-heading">
          <h1>1000+ SATISFY CUSTOMER</h1>
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={roimg} />
                </div>
                <div className="name-user">
                  <strong>Rohan Sharma</strong>
                  <span>@rohan</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <div className="client-comment">
              <p>
                The platform itself was intuitive and reliable, offering
                real-time market data and seamless trade execution. This made my
                trading experience efficient and enjoyable. Overall, I am
                extremely satisfied and would highly recommend this trading
                service to others looking for a dependable partner.
              </p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={ridimg} />
                </div>
                <div className="name-user">
                  <strong>Ridhi gupta</strong>
                  <span>@ridhi</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
            <div className="client-comment">
              <p>
                I recently engaged in trading and was thoroughly impressed with
                the experience. The customer service was top-notch, with
                representatives who were both knowledgeable and attentive. They
                patiently answered all my questions and provided valuable
                insights that helped me make informed trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <h3>WhatsApp Business Number:</h3>
            <p>
              <a href="https://wa.me/8168235174">8168235174</a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Office Address:</h3>
            <p>No. G 4 & 5, Ground Floor, No.12</p>
            <p>Richmond Road, Bangalore - 560025</p>
            <p>Near HDFC Bank & Petrol Bunk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
