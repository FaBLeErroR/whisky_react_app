import Footer from "../../../core/presentation/components/Footer";
import Navbar from "../../../core/presentation/components/Navbar";
import BuildingsGrid from "./components/BuildingsGrid";

function List() {
    return (
        <div>
            <Navbar active="2" />
            <BuildingsGrid />
            <Footer />
        </div>
    );
}

export default List;