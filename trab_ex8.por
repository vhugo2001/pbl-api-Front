programa
{
	
	funcao inicio()
	{
		inteiro num[10],cont,cont2,numeracao = 0,aux
	     inteiro resp
	     logico primeiro = verdadeiro
		para(cont = 0;cont<10;cont++){
			escreva("Digite ", numeracao +1, "° numero: ")
			leia(num[cont])
			numeracao++
		}
		escreva("Deseja ordenar:\n1)Decrescente \n2)Crescente\nR: ")
		leia(resp)
		se(resp == 1){
			escreva("---------------Decrescente---------------\n")
			para(cont = 0;cont<10;cont++){
				para(cont2=0; cont2<cont +1;cont2++){
					se(num[cont] >num[cont2]){
						aux = num[cont2]
						num[cont2] = num[cont]
						num[cont] = aux
					}
				}	
			}
			para(cont = 0;cont<10;cont++){
				se(primeiro == verdadeiro){
					escreva(num[cont])
					primeiro = falso
				}senao{
					escreva(" > ",num[cont])	
				}
			}
		}
		se(resp ==2){
			escreva("---------------Crescente---------------\n")
			para(cont = 0;cont<10;cont++){
				para(cont2=0; cont2<cont +1;cont2++){
					se(num[cont] <num[cont2]){
						aux = num[cont2]
						num[cont2] = num[cont]
						num[cont] = aux
					}
				}	
			}
			para(cont = 0;cont<10;cont++){
				se(primeiro == verdadeiro){
					escreva(num[cont])
					primeiro = falso
				}senao{
					escreva(" > ",num[cont])	
				}
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 212; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */