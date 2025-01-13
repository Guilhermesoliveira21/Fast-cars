import { Banner } from "../../components/Banner"
import { CardContainer } from "../../components/CardCategory"
import { Category } from "../../components/Category"
import { ContainerBody } from "../../theme/globalTheme"

export const Home = () => {


    return (
        <ContainerBody>
          
          <Banner />

          <Category name='Categorias'/>
          <CardContainer />

        </ContainerBody>
    )
}