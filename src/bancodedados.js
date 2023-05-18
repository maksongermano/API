const bancoDeDados = {
   identificadorInstrutor: 3,
   instrutores: [
      {
         id: 1,
         nome: "Makson",
         idade: 32,
         email: 'maksongermano@gmail.com',
         status: true

      },

      {
         id: 2,
         nome: "Italo",
         idade: 28,
         email: 'italocastro@gmail.com',
         status: true
      }
   ],

   identificadorAula: 2,

   aulas: [
      {
         id: 1,
         instrutor_id: 1,
         tituloDaAula: 'primeiro servidor',
         descricao: 'construindo o primeiro servidor'

      }


   ]


}
module.exports = bancoDeDados