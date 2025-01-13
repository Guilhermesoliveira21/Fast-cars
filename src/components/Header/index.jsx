import { ContainerHeaderMobile, ContainerSearchContent, ContainerSearchMobile, HeaderContainer, HeaderContainerLink, HeaderContentMobile, HeaderLinks, HeaderMobile, HeaderTop, LinkSearch, LinkStyle, Search, SearchContainer, SearchResults } from "./styles"
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FaBars, FaHeart, FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { http } from "../../api/http";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const Header = () => {

    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const [openHeader, setOpenHeader] = useState(false);

    function clickOpenHeader() {
        setOpenHeader((prevHeader) => !prevHeader)
    }

    async function fetch() {
        setLoading(true)
        try {
            const response = await http.get(`sites/MLB/search?category=MLB1743&q=${filter}`);
            setData(response.data.results);
            setLoading(false);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetch();
    }, [filter])

    return (
        <>

            <HeaderContainer>
                <HeaderTop>
                    <Link style={{textDecoration: 'none', color: '#333333'}} to='/'>
                        <h2>FastCars</h2>
                    </Link>
                    <Search>
                        <SearchContainer>
                            <input
                                placeholder="Pesquisar"
                                type="text"
                                value={filter}
                                onChange={(event) => setFilter(event.target.value)}
                            />
                            <button>Pesquisar</button>
                        </SearchContainer>
                        {loading ? '' :

                            filter !== '' ? (
                                <SearchResults>
                                    {data.map((car) => {
                                        return (

                                            <LinkSearch onClick={() => setFilter('')} to={`/veiculo/${car.id}/detail`}>{car.title}</LinkSearch>
                                        )
                                    })}

                                </SearchResults>
                            ) : ''

                        }
                    </Search>
                    <div>
                        <IoMdHeartEmpty size={26} />
                    </div>
                </HeaderTop>
                <HeaderLinks>
                    <HeaderContainerLink>
                        <ul>
                            <li><LinkStyle to='/'>Página Inicial</LinkStyle></li>
                            <li><LinkStyle to='/veiculos'>Veiculos</LinkStyle></li>
                            <li><LinkStyle to='/'>Quem somos</LinkStyle></li>
                            <li><LinkStyle to='/'>Contato</LinkStyle></li>
                        </ul>
                    </HeaderContainerLink>
                    <div>
                        (11) 97962-3588
                    </div>
                </HeaderLinks>
            </HeaderContainer>

            <ContainerHeaderMobile>
                <HeaderMobile>
                <Link style={{textDecoration: 'none', color: '#333333'}} to='/'>
                        <h2>FastCars</h2>
                    </Link>
                    <div onClick={clickOpenHeader}>
                        {!openHeader ? <FaBars size={30} /> : <IoClose size={30} />}
                    </div>
                </HeaderMobile>
                <ContainerSearchMobile>
                    <input
                        placeholder="Pesquisar"
                        type="text"
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                    />
                    <button><FaSearch />
                    </button>
                    {loading ? '' :

                        filter !== '' ? (
                            <ContainerSearchContent>
                               <div>
                               {data.map((car) => {
                                    return (

                                        <LinkSearch onClick={() => setFilter('')} to={`/veiculo/${car.id}/detail`}>{car.title}</LinkSearch>
                                    )
                                })}

                               </div>
                            </ContainerSearchContent>
                        ) : ''

                    }
                    
      
                </ContainerSearchMobile>


                {openHeader ? (
                    <HeaderContentMobile>
                        <ul>
                            <li><LinkStyle onClick={() => setOpenHeader(false)} style={{ color: '#313131' }} to='/'>Página Inicial</LinkStyle></li>
                            <li><LinkStyle onClick={() => setOpenHeader(false)} style={{ color: '#313131' }} to='/veiculos'>Veiculos</LinkStyle></li>
                            <li><LinkStyle onClick={() => setOpenHeader(false)} style={{ color: '#313131' }} to='/'>Quem somos</LinkStyle></li>
                            <li><LinkStyle onClick={() => setOpenHeader(false)} style={{ color: '#313131' }} to='/'>Contato</LinkStyle></li>
                        </ul>
                    </HeaderContentMobile>
                ) : ''}

            </ContainerHeaderMobile>
        </>
    )
}