
export async function FecthPost(id){
  
    const response=  await fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`);

    const data= await response.json();

    return data;
}


