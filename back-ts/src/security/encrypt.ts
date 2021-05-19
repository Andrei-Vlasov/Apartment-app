import * as bcrypt from 'bcrypt';

async function encryptPassword(password: string, saltOrRounds: number | string): Promise<string> {
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
}

async function checkPassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}

export { encryptPassword, checkPassword };
