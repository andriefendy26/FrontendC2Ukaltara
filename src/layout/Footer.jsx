import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

// import gambarlogo from "../assests/logo.png";
import gambarlogo from "../../public/logo.png"

const Footers = () => {
  return (
    <Footer container>
      <div className="w-full border-t border-black lg:px-20 " data-aos="fade-down">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* <div>
            <Footer.Brand
              href="https://flowbite.com"
              src={gambarlogo}
              alt="Flowbite Logo"
              name="C2UKaltara"
            />
          </div> */}
          <div className="my-10">
            <img src={gambarlogo} className="w-40"></img>
            {/* <h1 className="font-bold flex text-3xl xl:text-4xl">
              <p className="text-primary">C2U</p>Kaltara
            </h1> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://portofolio-six-snowy.vercel.app/">
                  Developer
                </Footer.Link>
                <Footer.Link href="#">Info</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="FPIK dan FT UBT™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
            <Footer.Icon href="https://www.instagram.com/c2ukaltara.id?igsh=MTY1bGUzanEyZDI4bg==" icon={BsInstagram} />
            {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
};
export default Footers;
