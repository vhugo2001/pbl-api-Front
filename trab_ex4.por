programa
{
    
    funcao inicio()
    {
        inteiro opcao, n
        
        escreva("=====================\n")
        escreva("| [1] Fibonacci      \n")
        escreva("| [2] Fatorial       \n")
        escreva("| [3] Sair           \n")
        escreva("=====================\n")
        escreva("Gostaria de ver qual série: ")
        leia(opcao)

        se(opcao == 1){
            limpa()
            escreva("Quantos elementos gostaria de ver: ")
            leia(n)
            para(inteiro i = 1; i <= n; i++){
                escreva(fibonacci(i), " ")
            }
        }
        senao{
            se(opcao == 2){
                limpa()
                escreva("Gostaria de ver o fatorial de qual número: ")
                leia(n)
                escreva("O fatorial do número ", n, " é ", fatorial(n))
            }
            senao{
                limpa()
                escreva(".......Encerrando")
            }
        }
    
    }
    funcao inteiro fibonacci(inteiro sequencia)
    {        
        se (sequencia == 1)
        {
            retorne 0
        }
        senao se (sequencia == 2)
        {
            retorne 1
        }
        retorne fibonacci(sequencia - 1) + fibonacci(sequencia - 2)        
    }
    funcao inteiro fatorial(inteiro n){
        se(n == 0){
            retorne 1
        }
        senao{
            retorne n * fatorial(n-1)
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1205; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */