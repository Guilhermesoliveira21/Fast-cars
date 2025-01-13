import { formatCurrency } from "../../utils/formatCurrency";
import { ContainerInfos, ContainerNameCar, Info } from "./styles";

export const CardDescription = ({ data }) => {

    return (
        <div>
            <ContainerNameCar>
                <div>
                    {data.attributes.map((d) => {
                        if (d.id === 'MODEL') {
                            return (
                                <h1 key={d.id}>{d.value_name ? d.value_name : data.title}</h1> // Exibindo o nome do carro
                            );
                        }
                    })}
                    <p>{data.title}</p>
                </div>
                <div>
                    <h2>{formatCurrency(data.price)}</h2>
                </div>

            </ContainerNameCar>
            <ContainerInfos>
                <Info>
                    <p>Cidade:</p>
                    <h4>{data.seller_address.state.name} - {data.seller_address.state.id.split('-')[1]}</h4>
                </Info>

                {data.attributes.map((d) => {
                    if (d.id === 'KILOMETERS') {
                        return (
                            <Info>
                                <p>KM:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "TRANSMISSION") {
                        return (
                            <Info>
                                <p>Câmbio:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "VEHICLE_BODY_TYPE") {
                        return (
                            <Info>
                                <p>Carroceria:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "FUEL_TYPE") {
                        return (
                            <Info>
                                <p>Carroceria:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "FUEL_TYPE") {
                        return (
                            <Info>
                                <p>Combustível:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "COLOR") {
                        return (
                            <Info>
                                <p>Cor:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}

                {data.attributes.map((d) => {
                    if (d.id === "STEERING") {
                        return (
                            <Info>
                                <p>Direção:</p>
                                <h4>{d.value_name}</h4>
                            </Info>
                        );
                    }
                })}






            </ContainerInfos>
        </div>
    )
}