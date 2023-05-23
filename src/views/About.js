import { useParams } from "react-router-dom"; // detecta el id de la url

const About = () =>{
    const {id} = useParams();

    return(
        <>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus.</p>
        {id && <p>El id es: {id}</p>}
        </>
    )
}
export default About;