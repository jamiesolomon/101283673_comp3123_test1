const fs = require('fs');
const path = require('path');

const directory = 'logFiles';

//delete method
const remove = () => {
    fs.readdir(directory, (error, files) => {
        if(error) throw error;
        for(const file of files){
            console.log('delete files... ' + file);
            fs.unlink(path.join(directory, file), error => {
                if(error) throw error;
            });
        }
        fs.rmdirSync(directory);
    });
};

//create method
const create = async () => {
    if(!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }
    try{
        process.chdir(directory);
        for(let i=0; i<10; i++){
            const fName = 'log' + i + '.txt';
            const fData = i.toString();
            fs.writeFileSync(`${fName}`, fData);
            console.log('creating files... ' + fName)
        }
    }catch(error){
        return console.log(error);
    }
}

//create()
//remove()