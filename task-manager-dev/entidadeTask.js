const tasks = [
]

function criarTasks(titulo,descricao,status,prioridade,data_vencimento){
   return{
    titulo,
    descricao,
    status,
    prioridade,
    data_vencimento
   };
}

function retornarTasks(tasks){
    return tasks;
}
function filtrarTasks(status){
   
    return tasks.filter(task=>task.status===status);
   
}
function findTask(titulo){
  return tasks.find(task => task.titulo===titulo)
}
function atualizarTask(titulo,alteracao){
    const taskAtualizada= tasks.map(task => {
        if(task.titulo===titulo){
            return {...alteracao}
        }
        return task;
    });
    
}

tasks.push(criarTasks("fazer login","criar login","em andamento",2,"07/09/26"))
tasks.push(criarTasks("fazer APIA","criar api","em andamento",2,"05/09/26"))//dado teste

console.log("Task atualizar: \n")
    const taskUpdate=atualizarTask("fazer APIA",{
      titulo: "fazer API",
      descricao: "criar API",
      status: "em andamento",
      prioridade: 2,
      data_vencimento: "07/09/26",});
      console.log(JSON.stringify(taskUpdate),null,2)