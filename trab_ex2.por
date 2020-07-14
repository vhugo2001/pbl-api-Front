programa
{
	funcao real somar(real val1, real val2, inteiro repetir){
		real guardado
		se(repetir!=2){
			escreva("Digite o primeiro valor: ")
			leia(val1)
		}
		escreva("Digite o segundo valor: ")
		leia(val2)
		guardado = val1 + val2
		retorne  guardado
	}
	funcao real subtrair(real val1, real val2, inteiro repetir){
		real guardado
		se(repetir!=2){
			escreva("Digite o primeiro valor: ")
			leia(val1)
		}
		escreva("Digite o segundo valor: ")
		leia(val2)
		guardado = val1 - val2
		retorne  guardado
	}
	funcao real multiplicar(real val1, real val2, inteiro repetir){ 
		real guardado
		se(repetir!=2){
			escreva("Digite o primeiro valor: ")
			leia(val1)
		}
		escreva("Digite o segundo valor: ")
		leia(val2) 
		guardado = val1 * val2
		retorne  guardado
		}
		
	funcao real dividir(real val1, real val2, inteiro repetir){
		real guardado
		se(repetir!=2){
			escreva("Digite o primeiro valor: ")
			leia(val1)
		}
		faca{
		
		escreva("Nao e possivel dividir por numeros negativos ou por 0\n")	
		escreva("Digite o segundo valor: ")
		leia(val2)
			
			}enquanto(val2 <= 0)
		guardado = val1 / val2
		retorne  guardado
	}
	
	funcao inicio(){
		real val1 = 1.0,val2 = 1.0, guardado=0.0
		inteiro repetir = 1,resp
			
		enquanto(repetir == 1 ou repetir ==2){	
			se (repetir==2){
				val1 = guardado	
			}
			escreva("\nDigite: \n 1-Somar \n 2-Subtrair \n 3-Multiplicar \n 4-Dividir \n R: ")
			leia(resp)
	
			se(resp == 1){
				guardado = somar(val1,val2,repetir))
				escreva(guardado)
			}
			se(resp == 2){
				guardado = subtrair(val1,val2,repetir))
				escreva(guardado)
			}
			se(resp == 3){
				guardado = multiplicar(val1,val2,repetir))
				escreva(guardado)
			}
			se(resp == 4){
				guardado = dividir(val1,val2,repetir))
				escreva(guardado)
			}
			faca{
				escreva("\n\nDeseja calcular mais vezes?\n1)Sim,com valor diferente \n2)Sim, com o mesmo valor \n3)Nao \nR: ")
				leia(repetir)
				se(repetir ==1 ou repetir==3){
					limpa()
				}
			}enquanto(repetir != 1 e repetir !=2 e repetir !=3)
		}
		escreva("\nACABOU O PROGRAMA")	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */