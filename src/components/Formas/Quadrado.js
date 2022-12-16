import Forma from '../../assets/img/Imagem 233.png';

function QuadradoFundo(props) {
    const { className } = props


    return <img src={Forma} alt="Imagem de quadrado" className={className}/>;
}

export default QuadradoFundo;

//Nesse caso é necessário fazer uma funcao no css ao invés de um import