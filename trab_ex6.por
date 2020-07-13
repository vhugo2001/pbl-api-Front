programa
{
	
	funcao inicio()
	{
		inteiro n1, n2, soma = 0, i
		
		escreva("Digite um valor: ")
		leia(n1)
		escreva("Digite um outro valor: ")
		leia(n2)

		se(n1 < n2){
			para(i = n1; i <= n2; i++){
				se(i % 2 == 0){
					soma = soma + i
				}
			}
			escreva("A soma dos números pares entre ", n1, " e ", n2, " = ", soma)
		}
		senao{
			para(i = n2; i <= n1; i++){
				se(i % 2 == 0){
					soma = soma + i
				}
			}
			escreva("A soma dos números pares entre ", n1, " e ", n2, " = ", soma)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */