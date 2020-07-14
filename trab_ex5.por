programa
{
   
    funcao inicio()
    {
        real = numero[10], menor, media = 0.0
        para(inteiro i = 0; i<=9; i++)
        {
            escreva("Digite o ", i+1,"° número: ")
            leia(numero[i])
        }
        para(inteiro i = 0; i <= 9; i++)
        {
            para(inteiro j = i+1; j <= 9; j++)	
            {
                se(numero[i] > numero[j])
                {
                    menor = numero[i]
                    numero[i] = numero[j]
                    numero[j] = menor
                }
            }
        }
        escreva("O menor número é o ", numero[0], ", o maior é o ", numero[9],"\n")
        para(inteiro i = 0; i <= 9; i++)
        {
            media += numero[i]
        }
       media = media/10
        escreva("A media dos valores é: ", media)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 175; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */