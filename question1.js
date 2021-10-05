const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];

function lowerCaseWords(list){
    let output = new Promise((resolve, reject) => {

        ary = [];
        var size = 0;
        
        for(elm in list){
            
            if(typeof list[elm] == "string"){
                newElm = list[elm].toLowerCase();

                ary[size] = newElm;
                size = size + 1;
            }
        }

        if (size == 0){
            reject('No string found');
        }else{
            resolve(ary);
        }
    })

    return output;

}

lowerCaseWords(mixedArray).then((messege) => {
    console.log(messege);
}).catch((messege) => {
    console.log(messege);
});


