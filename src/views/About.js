import { useParams, useSearchParams } from "react-router-dom"; // detecta el id de la url

const About = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    for (const p of searchParams) {
        console.log(p);
    }
    console.log(searchParams.toString());
    const {id} = useParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));
    return(
        <>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus.</p>
        {id && <p>El id es: {id}</p>}
        </>
    )
}
export default About;