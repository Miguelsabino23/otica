import React from "react";
import '../Content/style.css';
import CoverSection from "../CoverSection";
import ProductsSection from "../ProductsSection";
import SectionAbout from "../SectionAbout";
import ContactSection from "../ContactSection";


function Content() {
    return (
        <main>
            <CoverSection />
            <ProductsSection />
            <SectionAbout />
            <ContactSection />
        </main>
    )
}

export default Content;