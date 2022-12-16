import Forma from '../../assets/img/Imagem 233.png';

function QuadradoMenorFundo(props) {
    const { className } = props


    return <img src={Forma} alt="Imagem de quadrado menor" className={className}/>;
}

export default QuadradoMenorFundo;

//Nesse caso é necessário fazer uma funcao no css ao invés de um import