programa
{

	funcao real dividir(real val1, real val2){
		
		escreva("Digite o primeiro valor ")
		leia(val1)
		faca{
			se(val2 <= 0){
				escreva("O valor 0 ou valores negativos nao sao permitidos\n")
			}
		escreva("Digite o segundo valor ")
		leia(val2)
			
			}enquanto(val2 <= 0)
			
			retorne val1/val2
		
		}
	funcao inicio()
	{
		real val1 = 0.0,val2 = 1.0,div
		inteiro resp = 1
		
		enquanto(resp == 1){

			escreva("O resultado e ",dividir(val1,val2))
			
			faca{
				escreva("\n\nDeseja continuar a dividir?\n1)Sim \n2)Nao \nR: ")
				leia(resp)
				se(resp ==1){
					limpa()
				}
			}enquanto(resp != 1 e resp !=2)
		}
		escreva("\nFIM DO PROGRAMA")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 559; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */