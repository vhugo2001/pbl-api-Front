programa
{
	funcao pontilhado(){
		escreva("----------------------------------------------------------------------------------------\n")
		}
	funcao inicio()
	{
		real val1[10],val2[10],val3[10],media[10]
		inteiro cont
		cadeia nome[10],situacao[10]
		cadeia turma[10]


		para(cont = 0;cont<10;cont++){
			escreva("\nO nome do aluno: ")
			leia(nome[cont])
			
			faca{
				escreva("Digite uma nota de 0 a 10 da primeira prova de ",nome[cont],": ")
				leia(val1[cont])
			}enquanto(val1[cont]<0 ou val1[cont]>10)
			
			faca{
				escreva("Digite uma nota de 0 a 10 da segunda prova de ",nome[cont],": ")
				leia(val2[cont])
			}enquanto(val2[cont]<0 ou val2[cont]>10)
			
			media[cont] = (val1[cont] + val2[cont])/2
	
			se(media[cont] >= 6){
				situacao[cont] ="Aprovado"
			}
			senao{
				situacao[cont]="Reprovado"
			}
		}

		para(cont = 0;cont<10;cont++){
				pontilhado()
				escreva(cont +1,")O aluno: ",nome[cont]," tirou ",val1[cont]," na P1, ",
				val2[cont]," na P2 e ficou com media: ",media[cont], ", assim ficando ",situacao[cont],"\n")
				
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 132; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */