import { useParams } from "react-router-dom"
import { ContainerBody } from "../../theme/globalTheme"
import { useContext, useEffect, useState } from "react";
import { CarUniqueContext } from "../../context/useCarUnique";
import { SliderCars } from "../../components/SliderCars";
import { ContainerAside, ContainerContent, ContainerDetail, ContainerMenu, ContainerVeiculo, TableFipe } from "./styles";
import { CardDescription } from "../../components/CardDescription";
import { theme } from "../../theme/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import { CardPriceDetail } from "../../components/CardPriceDetail";
import { useSessionLocal } from "../../hooks/useSessionLocal";
import { CardVeiculo } from "../../components/CardVeiculo";
import { CarsContext } from "../../context/useCars";

export const Veiculo = () => {

    
    const { car } = useParams();
    const { data, setCar, loading } = useContext(CarUniqueContext)
    const {data: carRelacion, setPage} = useContext(CarsContext);
    setCar(car);

    console.log(carRelacion)
    return (
        <>
            {loading ? 'carregando...' : (

                <ContainerBody bg='#e5e7eb'>
                    <ContainerVeiculo>
                        <ContainerContent>
                            <ContainerDetail>
                                <SliderCars slider={data.pictures} />

                            </ContainerDetail>
                            <ContainerDetail pd='2rem 4rem'>
                                <CardDescription data={data} />
                            </ContainerDetail>

                            <ContainerDetail pd='2rem 4rem' style={{ background: '#2e2d37', color: theme.colors.white.white100 }}>
                                <p>Compare os preços</p>
                                <TableFipe>
                                    <div>
                                        <h4>Valor anunciado</h4>
                                        <h3>{formatCurrency(data.price)}</h3>
                                    </div>
                                    <div>
                                        <h4>Fipe</h4>
                                        {data.attributes.map((d) => {
                                            if (d.id === "FIPE_PRICE") {

                                                const price = (d.value_name.split(' ')[1]);
                                                return (
                                                    <h3 key={d.id}>R$ {(price)}</h3>
                                                );
                                            }
                                        })}

                                    </div>
                                </TableFipe>

                            </ContainerDetail>

                        </ContainerContent>

                        <ContainerMenu>


                                <CardPriceDetail data={data} />

                           
                        </ContainerMenu>
                    </ContainerVeiculo>
                    {/* <h2 style={{color: '#333333', marginTop: '1rem'}}>Veiculos semelhantes</h2>
                    <CardVeiculo data={carRelacion}/> */}
                </ContainerBody>
            )}
        </>
    )

}