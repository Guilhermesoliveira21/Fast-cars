import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, ContainerHeader, ContainerInstallment, ContainerInstallmentForm, Formulario, InstallmentLiberado } from "./styles";
import { useSessionLocal } from "../../hooks/useSessionLocal";
import { ContainerAside } from "../../pages/Veiculo/styles";

export const CardPriceDetail = ({ data }) => {

    const [installments, setInstallments] = useState(false);
    const [installmentsSimulation, setInstallmentsSimulation] = useState({
        entrada: '',
        parcela: 36
    });

    const [forms, setForms] = useState({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        location: ""
    });

    const { setSession, getSession } = useSessionLocal();

    function submit(event) {
        event.preventDefault();
        setSession(forms);
        setInstallments(true)
    }

    function handleSimulation(event) {

        const { value, name } = event.target;

        setInstallmentsSimulation((prevSimulation) => ({
            ...prevSimulation,
            [name]: parseInt(value)
        }))

    }

    function handleChange(event) {
        const { name, value } = event.target;

        setForms((form) => ({
            ...form,
            [name]: value
        }))
    }

    const valorLiberado = data.price - installmentsSimulation.entrada;
    const taxaJuros = 0.01;
    const numParcelas = installmentsSimulation.parcela;

    const valorParcelado = (valorLiberado * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numParcelas));

    console.log(valorParcelado)
    const user = getSession();


    return (

        <>

            <ContainerAside pd='2rem'>
                <Container>
                    <ContainerHeader>
                        <h2>{formatCurrency(data.price)}</h2>
                        <p>Veja as parcelas desse veículo</p>
                    </ContainerHeader>
                    <Formulario onSubmit={submit}>
                        <input
                            type="text"
                            placeholder="Nome*"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Telefone*"
                            name="phone"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="CPF*"
                            name="cpf"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Localizacao*"
                            name="location"
                            onChange={handleChange}
                        />

                        <button>Ver Parcelas</button>
                    </Formulario>
                </Container>

            </ContainerAside>

            {user && (
                <ContainerAside pd='2rem'>
                    <ContainerInstallment>
                        <h3>{user.name}, <span>Falta pouco!</span></h3>
                        <p>Garanta as <strong>melhores condições</strong> pra financiar este carro e mande uma proposta <strong>sem compromisso!</strong></p>

                        <ContainerInstallmentForm>
                            <Formulario onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    name='entrada'
                                    placeholder="Entrada*"
                                    onBlur={handleSimulation} />
                                <select
                                    onChange={handleSimulation}
                                    name="parcela">
                                    <option>Selecione um valor*</option>
                                    <option value="03">03 x</option>
                                    <option value="06">06 x</option>
                                    <option value="09">09 x</option>
                                    <option value="12">12 x</option>
                                    <option value="15">15 x</option>
                                    <option value="18">18 x</option>
                                    <option value="24">24 x</option>
                                    <option value="30">30 x</option>
                                    <option value="36">36 x</option>
                                </select>
                            </Formulario>
                        </ContainerInstallmentForm>
                        <InstallmentLiberado>
                            <div>
                                <p>Valor liberado:</p>
                                <p><span>{formatCurrency(valorLiberado)}</span></p>
                            </div>
                            <div>
                                <p>Valor das parcelas:</p>
                                <p><span>{installmentsSimulation.parcela}x {formatCurrency(valorParcelado)}</span></p>
                            </div>
                        </InstallmentLiberado>
                    </ContainerInstallment>
                </ContainerAside>
            )}

        </>

    );

}