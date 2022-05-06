import TextTitle from "@/website/common/TextTitle";
import GridCard from "@/website/section/UpComing/GridCard";
import ListCard from "@/website/section/UpComing/ListCard";

function Upcoming({ isList = true, haveTitle = true, pTop = 100 }) {
    return (
        <>
            <div className="Upcoming">
                <div className="container-fluid ">{haveTitle && <TextTitle small_text="Discover" big_text="Upcoming shows" />}</div>
                {isList ? <ListCard /> : <GridCard />}
            </div>
            <style jsx>{`
                .Upcoming {
                    position: relative;
                    padding-top: ${pTop}px;
                }
                .container-fluid {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </>
    );
}

export default Upcoming;
