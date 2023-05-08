//En este caso no lo estamos realizando mediante props, sino que lo estamos haciendo mediante una desestructuración
const Componente2 = ({nombre, apellidos, ficha})=>{
return(
    <>
    <ul>
        <li><strong>Nombre:{nombre}</strong></li>
        <li><strong>Apellidos:{apellidos}</strong></li>
        <li><strong>Altura:{ficha.altura}</strong></li>
        <li><strong>Edad:{ficha.edad}</strong></li>
    </ul>
    </>
)

}
export default Componente2;