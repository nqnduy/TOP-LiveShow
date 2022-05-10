// import NextPrev from "../NextPrev";
import TextTitle from "../../common/TextTitle";
import Previous from "./Previous";

function ShowList() {
    return (
        <div className="PreviousShow">
            <div className="container flexSB">
                <TextTitle small_text="Watch it again" big_text="Previous shows" />
                {/* <NextPrev /> */}
            </div>
            <Previous />
        </div>
    );
}

export default ShowList;
