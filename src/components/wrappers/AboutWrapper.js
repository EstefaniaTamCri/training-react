import { Outlet } from "react-router-dom";
import SubMenu from "../layout/Navigation/SubMenu";

const AboutWrapper = () => {
    return(
        <section>
            <SubMenu />
            <Outlet /> {/* Outlet es el componente que renderiza las rutas hijas de AboutWrapper y de forma dinámica*/}
        </section>
    )
};

export default AboutWrapper;