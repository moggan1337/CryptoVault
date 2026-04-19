# CryptoVault 🔐

**Cryptography Made Simple** - AES encryption, hashing, key derivation.

## Features

- **🔒 AES-256-CBC** - Strong symmetric encryption
- **💎 SHA-256 Hashing** - Secure hash functions
- **🎲 Random Generation** - Cryptographically secure
- **🔑 Key Derivation** - PBKDF2 support

## Installation

```bash
npm install cryptovault
```

## Usage

```typescript
import { CryptoVault } from 'cryptovault';

const vault = new CryptoVault();

// Encrypt
const encrypted = vault.encrypt('Hello World', 'my-secret-key');
console.log(encrypted); // "iv:encrypted:final"

// Decrypt
const decrypted = vault.decrypt(encrypted, 'my-secret-key');
console.log(decrypted); // "Hello World"

// Hash
const hash = vault.hash('password');
console.log(hash); // "64-bit hex hash"

// Generate random
const random = vault.randomBytes(32); // 64 char hex string
```

## API

| Method | Description |
|--------|-------------|
| `encrypt(data, key)` | Encrypt with AES-256-CBC |
| `decrypt(encrypted, key)` | Decrypt ciphertext |
| `hash(data)` | SHA-256 hash |
| `randomBytes(n)` | Generate n random bytes |

## Security

- Uses Node.js `crypto` module
- Random IV for each encryption
- Key must be 32 bytes (256 bits)

## License

MIT
