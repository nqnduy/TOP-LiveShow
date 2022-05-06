// import asset from "plugins/assets/asset";
import asset from "@/plugins/assets/asset";
import Slider from "react-slick";
import ArrowNext from "../../common/ArrowNext";
import ArrowPrev from "../../common/ArrowPrev";
import Button from "../../common/Button/Button";
import PreviousShowCard from "../../common/Card/PreviousShowCard";

function PreviousShowList() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <>
            <div className="PreviousShowList PLMain">
                <Slider {...settings}>
                    <PreviousShowCard image={asset("/images/prv1.png")} title="Live show" event="2">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>

                    <PreviousShowCard image={asset("/images/prv2.png")} title="Conference" event="7">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>

                    <PreviousShowCard image={asset("/images/prv3.png")} title="Fashion show" event="4">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>

                    <PreviousShowCard image={asset("/images/prv2.png")} title="Caremony" event="0">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>

                    <PreviousShowCard image={asset("/images/prv3.png")} title="Caremony" event="3">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>

                    <PreviousShowCard image={asset("/images/prv2.png")} title="Caremony" event="3">
                        <Button color="white">Watch now</Button>
                    </PreviousShowCard>
                </Slider>
            </div>
        </>
    );
}

export default PreviousShowList;
