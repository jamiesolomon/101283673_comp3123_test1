const resolvedPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        let succeed = {'message': 'delayed success!'}
        reslove(succeed);
    }, 500)
});

const rejectedPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        try {
            throw new Error('error delayed excepetion!');
        } catch (err) {
            reject(err);
        }
    }, 500)
})

resolvedPromise.then((messege) => {
    console.log(messege)
});
rejectedPromise.catch(messege => {
    console.error(messege)
});