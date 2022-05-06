import asset from "@/plugins/assets/asset";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Button from "@/website/common/Button/ButtonMain";
import PreviousShowCard from "@/website/common/Card/PreviousShowCard";
import Slider from "react-slick";

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
PreviousShowList.propTypes = {};

export default PreviousShowList;
