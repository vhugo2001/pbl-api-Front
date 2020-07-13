programa
{
	funcao real somar(real val1, real val2){
		 
		escreva("Digite o primeiro valor ")
		leia(val1)
		escreva("Digite o segundo valor ")
		leia(val2)
		
		retorne  val1 + val2
	}
	funcao real subtrair(real val1, real val2){
		
		escreva("Digite o primeiro valor ")
		leia(val1)
		escreva("Digite o segundo valor ")
		leia(val2)
		
		retorne val1 - val2
	}
	funcao real multiplicar(real val1, real val2){ 
		
		escreva("Digite o primeiro valor ")
		leia(val1)
		escreva("Digite o segundo valor ")
		leia(val2) 
		
		retorne val1 * val2
		}
		
	funcao real dividir(real val1, real val2){
		escreva("Digite o primeiro valor ")
		leia(val1)
		faca{
			se(val2 <= 0){
				escreva("Nao e possivel dividir por numeros negativos ou por 0\n")
			}
		escreva("Digite o segundo valor ")
		leia(val2)
			
			}enquanto(val2 <= 0)
			
		retorne val1 / val2
	}
	
	funcao inicio(){
		real val1 = 1.0,val2 = 1.0,resp
		inteiro repetir = 1
			
		enquanto(repetir == 1){	
				
			escreva("\nDigite: \n 1-Somar \n 2-Subtrair \n 3-Multiplicar \n 4-Dividir \n R: ")
			leia(resp)
	
			se(resp == 1){
				escreva(somar(val1,val2))
			}
			se(resp == 2){
				escreva(subtrair(val1,val2))
			}
			se(resp == 3){
				escreva(multiplicar(val1,val2))
			}
			se(resp == 4){
				escreva(dividir(val1,val2))
			}
			faca{
				escreva("\n\nDeseja calcular mais vezes?\n1)Sim \n2)Nao \nR: ")
				leia(repetir)
				se(repetir ==1){
					limpa()
				}
			}enquanto(repetir != 1 e repetir !=2)
		}
		escreva("\nACABOU O PROGRAMA")	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1317; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */