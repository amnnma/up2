import Link from 'next/link'
import { useState, useEffect } from 'react'
import image from "../assets/images/index"

export default function Tamanho( {livros} ) {
  const [livroAtual, setLivroAtual] = useState(0)


  const PassarLivro = (e) => {
    const proximoLivro = livroAtual + 1
    if(livroAtual < (livros.length - 1)){
      setLivroAtual(proximoLivro)
    }else{
      setLivroAtual(livroAtual)
    }
  }

  const VoltarLivro = (e) => {
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
        <div>
          
          <div>
          <img src={image.testresult} alt="result"/>
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

