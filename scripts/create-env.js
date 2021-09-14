const fs = requiere('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\`)