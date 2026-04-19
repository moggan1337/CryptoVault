import * as crypto from 'crypto';
export class CryptoVault {
  encrypt(data: string, key: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    return iv.toString('hex') + ':' + cipher.update(data, 'utf8', 'hex') + ':' + cipher.final('hex');
  }
  decrypt(encrypted: string, key: string) {
    const [iv, data, final] = encrypted.split(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv, 'hex'));
    return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
  }
  hash(data: string) { return crypto.createHash('sha256').update(data).digest('hex'); }
  randomBytes(n: number) { return crypto.randomBytes(n).toString('hex'); }
}
export default CryptoVault;
