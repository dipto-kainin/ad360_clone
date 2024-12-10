import "../home/main1.css";
import "../home/main2.css";
import "../home/main3.css";
import "../home/book-a-demo.0Wq2dG-X.css";
import "../home/book-a-demo.fuVO6afl.css";
import Navbar from "../navbar/Navbar";
import Heade from "../head/Heade";
import Dash from "../dasb-img/Dash";
import { WhyChooseAd360 } from "../product/Product";
import Support from "../support/Suppot"; // Corrected the typo here
import Partner from "../partner/Partner";
import Pricing from "../pricing/Pricing";
import Testimon from "../testimon/Testimon";
import FAQ from "../faqs/faqs";
import BookDemo from "../bookDemo/BookDemo";
import Footer from "../footer/Footer";

function Main() {
    return (
        <div>
            <Navbar />
            <Heade />
            <Dash />
            <WhyChooseAd360 />
            <Support />
            <Partner />
            <Pricing />
            <Testimon />
            <FAQ />
            <BookDemo />
            <Footer />
            <a
                className="sticky__whatsapp__icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/919884346905?text=Hello, I want to know more about Ad360's ad accounts"
                aria-label="connect-with-us-whatsapp"
            >
                <img
                    className="sticky__whatsapp__icon__img"
                    src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/whatsappicon.svg"
                    alt="whatsapp-icon"
                />
            </a>
        </div>
    );
}

export default Main;
