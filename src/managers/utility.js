export const verifyLocalStorageObjectData = async (key) =>{
    let data = {}
    if(localStorage.getItem(key))
        data = JSON.parse(localStorage.getItem(key))
    return data;
}

export const makeid = length => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}