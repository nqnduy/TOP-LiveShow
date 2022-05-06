import React from "react";
import AboutUs from "../section/AboutUs";
import FAQ from "../section/FAQ";
import HeroBanner from "../section/HeroBanner/index";
import Organizational from "../section/Organizational";
import OurTeam from "../section/OurTeam";
import ShowList from "../section/ShowList";
import Upcoming from "../section/UpComing/index";
import WhatNew from "../section/WhatNew/index";

const Homepage = (props) => {
    return (
        <>
            <HeroBanner searchBar={true} />
            <Upcoming />
            <ShowList />
            <FAQ />
            <Organizational />
            <AboutUs />
            <OurTeam />
            <WhatNew />
            <style jsx global>{`
                .Upcoming,
                .FAQ {
                    margin-bottom: 50px;
                }
                .PreviousShow,
                .AboutUs,
                .OurTeam {
                    margin-bottom: 100px;
                }
            `}</style>
        </>
    );
};

Homepage.propTypes = {};

export default Homepage;
