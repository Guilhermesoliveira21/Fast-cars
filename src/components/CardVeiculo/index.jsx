import { useContext } from "react"
import { Card, CardCity, CardHeader, CardImage, CardPrice, CardYearEKm, ContaineCard, ContainerLink, LinkStyle } from "./styles"
import { CarsContext } from "../../context/useCars";
import { formatCurrency } from "../../utils/formatCurrency.js";
import { IoMdHeartEmpty } from "react-icons/io";

export const CardVeiculo = ({data}) => {

    


    return (
        <ContaineCard>

            {data.map((car) => {


                return (
                    <Card>
                        <CardImage>
                            <img src={car.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={car.title} />
                        </CardImage>
                        <CardHeader>
                            {/* <h3>{car.title}</h3> */}
                            <p>{car.title}</p>
                        </CardHeader>
                        <CardPrice>
                            <h3>{formatCurrency(car.price)}</h3>
                        </CardPrice>
                        <CardYearEKm>
                            {car.attributes.map((d) => {
                                if (d.id === 'VEHICLE_YEAR') {
                                    return (
                                            <p>Ano: {d.value_name}</p>              
                                    );
                                }
                            })}
                            {car.attributes.map((d) => {
                                if (d.id === 'KILOMETERS') {
                                    return (
                                            <p>{d.value_name}</p>              
                                    );
                                }
                            })}
                        </CardYearEKm>
                        <ContainerLink>
                            <LinkStyle to={`/veiculo/${car.id}/detail`}>Ver parcelas</LinkStyle>
                        </ContainerLink>
                        <hr />
                        <CardCity>
                            <p>{car.address.state_name}</p>
                            <p className="icon"><IoMdHeartEmpty /></p>
                        </CardCity>
                    </Card>
                )
            })}

        </ContaineCard>
    )
}