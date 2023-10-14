"use client"
import { useState } from "react";
import { supabase } from "../utils/supabase"
import {
  Button,
  Dialog,
  Spinner, Alert,
  DialogHeader, DialogBody, DialogFooter,
} from "@material-tailwind/react";
import jsPDF from "jspdf";
import { UploadSimple } from "phosphor-react"
                   
export function FormPay() {

  const [url, setUrl] = useState("")
  const [data, setData] = useState("")
  const [name,setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [content,setContent] = useState("")
  const [load,setLoad] = useState(false)
  const [sms, setSms] = useState<string | null>(null)
  const [ispay, setIspay] = useState(false)
  const [ibanC, setIbanC] = useState("")
  const [loadFile,setLoadFile] = useState(false)
  const [date, setDate] = useState("")
  const [hora,setHora] = useState("")
  
  const uploadFile = async (e: any) => {
    setLoadFile(true)
    const file = e.target.files && e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file)
          setUrl(url)
          const urlApi = 'https://pdf-to-text-converter.p.rapidapi.com/api/pdf-to-text/convert';
          
          const data = new FormData();
          data.append('file', file);
          data.append('page', '1');
          
          const options = {
            method: 'POST', headers: {
              'X-RapidAPI-Key': '38b70d2c00msh63f6624ddd518abp1bb9bajsn46c9697bf823',
              
              'X-RapidAPI-Host': 'pdf-to-text-converter.p.rapidapi.com'
            },
            body: data
          };
          try {
            const response = await fetch(urlApi, options);
            const result = await response.text();
            setData(result)
            setLoadFile(false)
          } catch (error)
          {
            console.error(error)
            setLoadFile(false)
          }
          
        }
} 
  const verificationPay = async (e:any) => {
    e.preventDefault()
    setSms(null)
    setLoad(true)
    const IBAN = /AO060040000093684573 10 158/
    const valor = /10\.000,00/
    const hora = /(\d{2}:\d{2}:\d{2})/
    const date = /(\d{2}\/\d{2}\/\d{4})/
    const IBANCliente = /[A-Z]{2}\d{2}\s\d{14}/;

    const verificationIBAN = IBAN.test(data)
    const verificationValor = valor.test(data)
    const searchHora = data.match(hora)
    const searchDate = data.match(date)
    const searchIBANCliente = data.match(IBANCliente)
    setDate(`${searchDate?.[0]}`)
    setHora(`${searchHora?.[0]}`)

    const datapay = {
      IBAN: verificationIBAN, valor: verificationValor, data: searchDate?.[0],
      hora: searchHora?.[0], IBANClient: searchIBANCliente?.[0],
      name: name,
      telefone: tel,
      email,
      content,
    }

    setIbanC(`${datapay.IBANClient}`)

    if (datapay.IBAN === true && datapay.valor === true) {
      const resfilter = await supabase
        .from('client')
        .select()
        .eq('IBAN', datapay.IBAN)
        .eq('valor', datapay.valor)
        .eq("date", datapay.data)
        .eq("hora", datapay.hora)
        .eq("IBANCliente", datapay.IBANClient,)

        const payExists = resfilter.data !== null ? resfilter.data : []
        
      if (payExists.length == 0) {

        const resInsert = await supabase
          .from('client')
            .insert([
              {
                IBAN:datapay.IBAN,
                valor:datapay.valor,
                date: datapay.data,
                hora: datapay.hora,
                IBANCliente: datapay.IBANClient,
                name:name,
                telefone:tel,
                email: datapay.email,
                content: datapay.content,
              },
                  ])
          .select()
        
        console.log("pagamento verificado com sucesso")
        setSms("Pagamsnto Verificadl Com Sucesso.")
        setLoad(false)
        setIspay(true)
        
      } else {
        console.log("Esse pagamento já foi verificado.")
        setSms("Esse pagamento já foi verjficado.")
        setLoad(false)
      }

    }else {
      console.log("informações incorrectas")
      setSms("Informações de pagamento incorrectas.")
      setLoad(false)
    }
    
  }
                     
  return (
    <form onSubmit={verificationPay} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 min-w-full flex flex-col items-center"> 
      <div className="mb-4 flex flex-col"> 
        <div className="mb-4"> <label className="block text-sm font-medium text-white">Nome</label> 
        <input type="text" name="nome" className="mt-1 p-2 block w-full bg-zinc-900 text-white" onChange={(e) => {
          setName(e.target.value)
        }} required /> 
        </div>

        <div className="mb-4"> <label className="block text-sm font-medium text-white">Email</label> 
        <input type="email" name="email" className="mt-1 p-2 block w-full bg-zinc-900 text-white" onChange={(e) => {
          setEmail(e.target.value)
        }} required /> 
        </div>

        <div className="mb-4"> <label className="block text-sm font-medium text-white">Telefone</label> 
        <input type="tel" name="telefone" className="mt-1 p-2 block w-full bg-zinc-900 text-white" onChange={(e) => {
          setTel(e.target.value)
        }} required /> 
        </div>

        <div className="mb-4"> <label className="block text-sm font-medium text-white">Como soube do Fórum de Empreendedorismo</label> 
        <input type="text" name="comoSoube" className="mt-1 p-2 block w-full bg-zinc-900 text-white" onChange={(e) => {
          setContent(e.target.value)
        }} required /> 
        </div>

        <div className="mb-4"> <label className="text-sm font-medium text-white flex flex-col gap-2 jsustify-center items-center" htmlFor="comp">Comprovativo do Pagamento (PDF)
          <UploadSimple size={64} className="hover:text-zinc-400 transition-500 text-3xl" />
          {
            loadFile == true && <Spinner className="animate-spin" color="blue" />
          }
        </label> 
          <input type="file" id="comp" className="hidden" required onChange={(e) => {
            uploadFile(e)
          }} /> 
        </div>

        <div className="mb-4"> <label className="block text-sm font-medium text-white">
          <input type="checkbox" name="aceitaTermos" className="mr-2"
          required
          /> Aceito os Termos e Condições </label>
        </div>
        {sms !== null && <Alert className="m-3">{sms}</Alert>}
        <button type="submit" className="bg-white text-black py-4 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-opacity-50 flex gap-3 justify-center items-center" >
          {load === true && <Spinner className="animate-spin" color="blue" />}Enviar</button>
        </div>
        <div className="min-w-full min-h-screen flex justify-center items-center ">{
          ispay === true && <div className="min-w-full min-h-screen flex justify-center items-center">

            <Dialog open={true} handler={() => {

            }} className="min-w-full fixed top-1 left-1 bg-[#000] flex flex-col justify-center items-center">
              
            <DialogHeader>Pagemento Verificado Com Sucesso</DialogHeader>
              
              <DialogBody divider id="comprovativo" className="w-[248px] h-[716] bg-black tex-center"> 
              O cliente {name} com IBAN {ibanC} fez um pagamento de 10.000,00kz para a empresa Lidera com o IBAN  AO060040000093684573 10 158 no dia {date} as {hora}.
              </DialogBody>
               
            <DialogFooter> <Button className="mr-1 p-3 bg-white text-black hover:bg-black hover:text-white trabsituon-500" onClick={() => {
              const elementoHTML = document.getElementById("comprovativo") as HTMLElement

              const doc = new jsPDF();
              
              const options = { format: 'a4' };
              
              doc.html(elementoHTML,{
                callback: (doc1: any) => {
                  doc1.save('comprovativo.pdf')
                },
                margin: 0,
                filename: 'comprovativo.pdf', 
              } )
              
              }}> <span>Baixar Comprovativo</span> </Button> 
            </DialogFooter>
            </Dialog>
          </div>
        }
      </div>   
  </form>
  )
}