function productsFetch (time, task, filter) {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            if (task.length > 0)
                resolve(filter != undefined ? task.filter(x => x.category === filter) : task);
            else
                reject("ERROR: no se pudieron obtener los productos.");

        }, time)
    })
}

export default productsFetch;