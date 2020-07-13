programa
{
    
    funcao inicio()
    {
        inteiro cont1=1, n, divisores, cont2, primo =0
	   inteiro quant,finalizar =0
	   logico primeiro = verdadeiro
	   escreva("Digite a quantidade de numeros primos que deseja imprimir ")
	   leia(quant)
 		
	  
        enquanto(finalizar<quant){
            n = cont1
            divisores = 0
            para(cont2 = 1; cont2 <= n; cont2++){
                se(n % cont2 == 0){
                    divisores = divisores + 1
                }
            }
            se(divisores == 2){
                primo = primo + 1
                finalizar++
                se(primeiro == verdadeiro){
                	escreva(n)
                	primeiro = falso
                }senao{
                	escreva(" > ",n)
                }
            }
            cont1++
        }
        
        escreva("\nNo total há: ", primo)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 747; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */