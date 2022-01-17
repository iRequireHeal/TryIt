import {Title,Text,SubTitle,Imgs} from "./styles";
import {Razdel} from "./styles";
import image from "../umg/r2i.jpg";

export const Razd3 =() => {
    return (
        <Razdel>
            <Title>РАЗДЕЛ 3</Title>
            <SubTitle>Выживание в дикой природе. Очистка питьевой воды.</SubTitle>
                <Text>
                    <ol>
                        <li> Грязную воду необходимо профильтровать через любую плотную ткань.</li>
                        <li> Положить на нее песок, измельченный древесный уголь и мелкие камешки, проделать снизу отверстия и пропустить через сделанный вами фильтр воду.</li>
                        <li> Профильтрованную воду следует прокипятить в течение 10 минут.</li>
                    </ol>
                </Text>
            <Imgs src={image} alt=""/>
        </Razdel>


    )
}