import Forma from '../../assets/img/Imagem 233.png';

function IcoSeta(props) {
    const { className } = props


    return <img src={Forma} alt="Imagem de icone seta" className={className}/>;
}

export default IcoSeta;

//Nesse caso é necessário fazer uma funcao no css ao invés de um import