import { useContext, useState } from "react";
import { CardVeiculo } from "../../components/CardVeiculo"
import { CarsContext } from "../../context/useCars";
import { ContainerBody } from "../../theme/globalTheme"
import { AsideContainer, ContainerCars, ContainerVeiculo, Paginacao } from "./styles"
import { Formulario } from "../../components/CardPriceDetail/styles";
import { http } from "../../api/http";

export const Veiculos = () => {
    
    const {pageFront, pageBack, data} = useContext(CarsContext);

    const [forms, setForms] = useState({});
    const [filter, setFilter] = useState([])

    async function submit(event) {

        event.preventDefault();      
        
    }

    function handleDatas(event) {

        const {name, value} = event.target;

        setForms((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

    }

    console.log(data)

    return (
        <ContainerBody bg='#e5e7eb' pd='1rem 8rem'>
        <ContainerVeiculo>
            <AsideContainer style={{padding: "1rem", height: '100%'}}>
                <div>
                    <h2>Filtre a melhor opção</h2>
                </div>
                <Formulario onSubmit={submit}>
                    <label>Localização</label>
                    <input 
                        type="text" 
                        placeholder="Ex: São Paulo"
                        name="state" 
                        onChange={handleDatas}
                        />
                    <label>Marca</label>
                    <select 
                    name="marca" 
                    onChange={handleDatas}
                    id="">
                        <option value="fiat">Fiat</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="ford">Ford</option>
                        <option value="volkswagem">Volkswagem</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="renalt">Renalt</option>
                        <option value="kia">Kia</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="nissan">Nissan</option>
                    </select>

                    <label htmlFor="">Ano</label>
                    <input 
                        type="text" 
                        name="year" 
                        placeholder="Ex: 2022"
                        onChange={handleDatas}
                    />

                    <label htmlFor="">Carros</label>
                    <select name="" id="">
                        <option value="usados">Usados</option>
                        <option value="novos">Novos</option>
                    </select>

                    <button>Filtrar</button>
                </Formulario>
            </AsideContainer>
            <ContainerCars>
                <CardVeiculo data={data}/>
                <Paginacao>
                    <button onClick={pageBack}>Anterior</button>
                    <button onClick={pageFront}>Próxima</button>
                </Paginacao>
            </ContainerCars>
        </ContainerVeiculo>
        </ContainerBody>
    )
}