import { BannerOne, BannerOneContainerContent, BannerOneNew, Banners, BannerTwo, BannerTwoBtn, ContainerBanner } from "./styles"
import banner01 from '../../assets/banner01.jpg'
import banner02 from '../../assets/banner02.jpg'
import banner03 from '../../assets/banner03.jpg'

export const Banner = () => {

    return (
        <ContainerBanner>
            <BannerOne>
                <BannerOneContainerContent>
                    <BannerOneNew>
                        <h2><span>Ano</span> novo</h2>
                        <h3>Carro <span>novo</span></h3>
                    </BannerOneNew>
                    <div>
                        <p>Sua</p>
                    </div>
                    <div>
                        <p>garagem merece</p>
                    </div>
                    <div>
                        <p>renovação</p>
                    </div>
                </BannerOneContainerContent>
                <img src={banner01} alt="" />
            </BannerOne>
            <Banners>
                <BannerTwo>
                <img src={banner02} alt="" />
                <BannerTwoBtn>
                    <h4>Carros mais populares</h4>
                </BannerTwoBtn>
                </BannerTwo>
                <BannerTwo>
                <img src={banner03} alt="" />
                <BannerTwoBtn>
                    <h4>Motos mais populares</h4>
                </BannerTwoBtn>
                </BannerTwo>
            </Banners>
        </ContainerBanner>
    )
}