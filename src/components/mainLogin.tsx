import { FormPay } from "./formpay"
export function MainLogin() {
  return (
    <main className="max-auto max-w-screen-xl py-2 p-x4 lg:px-8 lg:py-4 flex flex-col gap-6 justify-center items-center ">
      <div className="p-2">
        <h1 className="text-2xl font-bold text-center">
          Inscrição - IV Fórum de Empreendedorismo Emergente
        </h1>
        <p className="mt-4 text-center text-xs">
          Comunicação, Networking, Gestão Financeira, Gestão Emocional, Inovação e Presença no Digital. Vamos falar de Empreendedorismo Emergente?
        </p>
      </div>
      <FormPay />

      <div className="flex flex-col gap-3 p-3 md:max-w-[60%]">
        <h1 className="text-1xl">Termo e Condições</h1>

        <p className="text-xs">Ao efetuar a inscrição no IV Fórum de Empreendedorismo Emergente, declara ter lido, compreendido e concordado com todos os termos e condições mencionados abaixo:</p>

        <ol className="flex flex-col gap-2 text-xs">
        <li>
        <strong>Cancelamentos, Reembolso e Transferências:</strong>
        <ul className="flex flex-col gap-2">
                                        <li>a) A LIDERA não prevê reembolso de valores pagos por cancelamento, desistência ou indisponibilidade do inscrito. Em caso de cancelamento por parte do formando independentemente do motivo, a LIDERA permite a transferência do valor pago a favor de outra pessoa para acesso ao evento.</li>
                                      <li>b) O pagamento referente ao ingresso é válido apenas para este fórum, não serve para outros eventos realizados pela LIDERA.</li>
                                    </ul>
                                    </li>
    <li>
    <strong>Adiamento por parte da LIDERA:</strong>
    <ul className="flex flex-col gap-2">
    <li>a) A LIDERA reserva-se ao direito de adiar o evento para uma data futura, sempre que o número pretendido de inscritos não for alcançado.</li>
    <li>b) Quando um evento for adiado e/ou cancelado pela LIDERA, o formando inscrito terá direito a um reembolso de 100% do valor investido, desde que solicite o reembolso.</li>
    </ul>
    </li>
    <li>
    <strong>Utilização dos dados de contato:</strong>
    <ul className="flex flex-col gap-2">
    <li>a) O formando autoriza a LIDERA a utilizar os dados de contato fornecidos para futuras comunicações sobre campanhas e descontos.</li>
    </ul>
    </li>
    </ol>  
      </div>
    </main>
  )
}