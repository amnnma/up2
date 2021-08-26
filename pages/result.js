import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function Tamanho( {livros} ) {
  const [livroAtual, setLivroAtual] = useState(0)
  console.log(livros)

  const PassarLivro = (e) => {
    console.log(livroAtual)

    const proximoLivro = livroAtual + 1
    if(livroAtual < (livros.length - 1)){
      setLivroAtual(proximoLivro)
    }else{
      setLivroAtual(livroAtual)
    }
  }

  const VoltarLivro = (e) => {
    console.log(livroAtual)

    const proximoLivro = livroAtual - 1
    if(livroAtual > 0){
      setLivroAtual(proximoLivro)
    }else{
      setLivroAtual(livroAtual)
    }
  }

  return (
    <>
      <div>
        <main>

          <div >
            <p>test</p>
            <p><b>go</b></p>
          </div>

          
          <div >
            <div >
                รูปหาย
            </div>
            <div>
              <div >
                <p >ชื่อ</p>
                <p >ชื่อ2</p>
              </div>

              <div >
                <button onClick={(e) => VoltarLivro(e)}>
                รูปหาย
                </button>

                <div>
                  <p>sd</p>
                </div>

                <button  onClick={(e) => PassarLivro(e)}>
                รูปหาย
                </button>
              </div>

              <p >
               ไม่รู้
              </p>
            </div> 
          </div>
        </main>

        <div>
          
          <div>
          รูปหาย
            <div>
              <p><b>test</b></p>
              <p>test</p>
            </div>
          </div>

          <button>
              <Link href="/">
                  <a>ย้อน</a>
              </Link>
          </button>
        </div>
      </div>
    </>
  )
}

