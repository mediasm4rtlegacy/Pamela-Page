"use client"

import Image from 'next/image'
import Link from 'next/link'
import Star from '@/app/images/star.png'
import Card1 from '@/app/images/card-1-full.png'
import Card2 from '@/app/images/card-2-full.png'
import Selo from '@/app/images/selo.png'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <main>

      {/* BANNER 1 */}

      <section className='banner-1-container'>
        <article className="banner-1 container">
          <motion.div className="text"
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          >
            <h1>O guia completo para morar em Portugal em 2024!</h1>
            <p>Morar em um país de primeiro mundo, <b>compras no mercado com menos de 100 euros, tomar bons vinhos, viver em um clima europeu e ter qualidade de vida.</b>
            </p>
            {/* <br /> */}
            <p>Sim! Esses entre outros inúmeros motivos me fizeram <b>mudar para Portugal</b> e aqui eu te entrego <b>tudo que gostaria de saber</b> quando tomei essa decisão.</p>

            <Link href='/'><button className='btn'>Quero <b>morar</b> em <b>Portugal</b></button></Link>
          </motion.div>
          <div className='blank-field'></div>
        </article>
      </section>

      {/* BANNER 2 */}

      <section className='banner-2-container'>
        <article className='banner-2 container'>
          <div className='blank-field'></div>
            <motion.div className='text'
            initial={{ opacity: 0, x: -100}}
            whileInView={{ opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            >
              <p>
                <b>Viver no Brasil está cada vez mais complicado,</b> cada
                ano que passa a única certeza é o <b>aumento dos preços</b>
                e da <b>dificuldade de conquistar algo grandios</b> o com
                o suor e trabalho duro do brasileiro.
              </p>

              <p>
                Quando pensamos em <b>soluções</b>, já visamos <b>mudar de país</b>. Afinal, é bem mais fácil chegar em um país pronto
                e dedicar-se a um crescimento financeiro que logo trará bons frutos devido à economia saudável dele. 
              </p>

              <p>
                <b>Com isso, em 2009 decidi sair do país e arriscar uma
                vida em um gigante europeu,</b> logo cheguei a portugal
                e em poucos meses de trabalho já vi resultado financeiro, consegui pagar as contas e ainda sobrar dinheiro para viagens e um bom vinho.
              </p>
            </motion.div>
        </article>
      </section>

      {/* BANNER 3 */}

      <section className="banner-3-container">
        <article className="banner-3 container">

          <div className="sub-1">
              <motion.div className="text"
              initial={{ opacity: 0, x: -100}}
              whileInView={{ opacity: 1, x: 0}}
              exit={{opacity: 0, x: -100}}
              transition={{duration: 0.5}}
              >
                <h2>O guia completo que te levará em Portugal em 2024!</h2>
                <span>obs* sem burocracia</span>
                <p>Aqui desenvolvi um e-book completo onde você
                terá mais de 70 páginas ensinando como se
                preparar para ir a portugal!
                </p>
              </motion.div>
              <div className="blank-field"></div>
          </div>

          {/* <Image src={Arrow} width={1200} height={1200} alt='arrow'/> */}

          <div className="sub-2">
            <div className="blank-field"></div>
              <motion.div className="text"
              initial={{ opacity: 0, x: -100}}
              whileInView={{ opacity: 1, x: 0}}
              exit={{opacity: 0, x: -100}}
              transition={{duration: 0.5}}
              >
                <h2>Neste e-book você aprenderá:</h2>
                <ul>
                  <li>
                      <Image src={Star} width={20} height={20} alt='arrow'/>
                    Imposto de Renda</li>
                  <li>
                      <Image src={Star} width={20} height={20} alt='arrow'/>
                    Abrir uma conta bancária</li>
                  <li>
                      <Image src={Star} width={20} height={20} alt='arrow'/>
                    O manual para vir para Portugal</li>
                  <li>
                      <Image src={Star} width={20} height={20} alt='arrow'/>
                    Onde ir para fazer a documentção</li>
                  <li>
                      <Image src={Star} width={20} height={20} alt='arrow'/>
                    Como fazer os documentos básicos (NIF, NISS, Passaporte, Comprovante de morada, SEF, entre outros).</li>
                </ul>
                <Link href='/'>
                  <button className='btn'>Quero <b>morar</b> em <b>Portugal</b></button>
                </Link>
              </motion.div>
          </div>

        </article>
      </section>

      {/* BANNER 4 */}

      <section className="banner-4-container">
        <article className="banner-4 container">
          <div className="cards-container">
            <motion.div className="card"
            initial={{ opacity: 0, y: -100}}
            whileInView={{ opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            >
              <Image src={Card1} alt='cards' width={600} height={600}/>
              <button className='btn' id='btn1'>Ofertas <b>válidas</b> até dia <b>31/12/2023*</b></button>
            </motion.div>
            <motion.div className="card"
            initial={{ opacity: 0, y: -100}}
            whileInView={{ opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            >
              <Image src={Card2} alt='cards' width={600} height={600}/>
              <Link href='/'>
                <button className='btn'>Quero <b>morar</b> em <b>Portugal</b></button>
              </Link>
            </motion.div>
          </div>
        </article>
      </section>

      {/* BANNER 5 */}

      <section className="banner-5-container">
        <article className="banner-5 container">
        <div className="cards-container">
            <motion.div className="card"
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
            >
              <h2>Oferta Exclusiva</h2>
              <div>
                <p>Guia completo de documentação para sair do Brasil e morar em Portugal <b>(R$499,90)</b></p>
                <p>Aulão completo com passo a passo para iniciar sua jornada <b>(R$199,90)</b></p>
                <p>Checklist de documentação <b>(R$47,90)</b></p>
                <p>Grupo exclusivo <b>(R$97,90)</b></p>
                <p>Live de acompanhamento <b>(R$149,90)</b></p>
              </div>

              <span id='price'>
                <p>
                  DE R$ 995,50
                </p>

                <p>
                  POR 10X de
                </p>

                <h3>
                  15,90
                </h3>

                <small>
                  OU R$147,00 à vista
                </small>
              </span>

              <Link href='/'>
                <button className='btn'>Quero <b>meu desconto</b></button>
              </Link>
            </motion.div>

            <motion.div className="card" id='b5-card-2'
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
            >

              <Image src={Selo} alt='selo' width={0} height={0}/>
              <p>Após adquirir o e-book, <b>você terá 7 dias</b> para acompanhar os conteúdos e se adaptar.
              </p>
              <p>Se dentro desse período, <b>você sentir que não é pra você,</b> é só me pedir que eu devolvo 100% do valor investido.</p>
            </motion.div>
          </div>
        </article>
      </section>

    </main>
  )
}
