import React from "react";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechnicalStar</h1>
          <p>Solution of all technical problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Grafics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to <b>TECHNICALSTAR</b>, where innovation meets excellence. We are
            a dynamic tech solutions company dedicated to transforming your
            ideas into reality through cutting-edge technology and unparalleled
            expertise. Founded by a team of passionate technologists and
            industry veterans, TechSolutions has grown into a trusted partner
            for businesses of all sizes, offering a comprehensive suite of
            services that drive digital transformation and business growth. Our
            mission is to empower businesses with tailored tech solutions that
            enhance efficiency, drive innovation, and create value. From custom
            software development and IT consulting to cloud services and
            cybersecurity, our diverse range of offerings ensures that we can
            meet the unique needs of each client. We pride ourselves on our
            ability to stay ahead of the curve, leveraging the latest
            technologies and methodologies to deliver solutions that are not
            only effective but also future-proof.
          </p>
        </div>
      </div>
      <di className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s",

                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s",

}}>
    <AiFillAmazonCircle/>
    <p>Amazon</p>
</div>
<div style={{animationDelay:"1s",

}}>
    <AiFillInstagram/>
    <p>Instagram</p>
</div>
<div style={{animationDelay:"0.7s",

}}>
    <AiFillYoutube/>
    <p>Youtube</p>
</div>

            </article>
        </div>
      </di>
    </>
  );
};

export default Home;
