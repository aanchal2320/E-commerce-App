import brcypt from 'bcrypt'; //this package helps in hashing the password

export const hashPassword = async(password) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await brcypt.hash(password,saltRounds);
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
};

export const comparePassword = async (password,hashedPassword ) => {
    return brcypt.compare(password,hashedPassword);
}