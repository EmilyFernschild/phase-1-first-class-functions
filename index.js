const spy = () => ('Hi');

const receivesAFunction = (callback) => {
    return callback(spy);
}

const returnsANamedFunction = () => spy;

const returnsAnAnonymousFunction = () => {
    return function(){
        
    };
};