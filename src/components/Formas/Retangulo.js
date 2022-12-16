import Forma from '../../assets/img/Imagem 233.png';

function Retangulo(props) {
    const { className } = props


    return <img src={Forma} alt="Imagem de retangulo" className={className}/>;
}

export default Retangulo;

//Nesse caso é necessário fazer uma funcao no css ao invés de um import