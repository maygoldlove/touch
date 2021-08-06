
const lt= document.querySelector('ul');
fetch ('https://jsonplaceholder.typicode.com/tdos').then ((resp)=>resp.json())
    .then( function (data){
        let items= data.results;
        return items.map((items)=> {
            const li= document.createElement('li');
            
            let li= item.first;
            console.log(items);

        });
    })