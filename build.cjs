const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.SRC_ASSETS);
console.log(process.env.DIST_ASSETS);

const src = path.join(__dirname, process.env.SRC_ASSETS);
const dest = path.join(__dirname, process.env.DIST_ASSETS);

console.log(src);
console.log(dest);

// nodejs 16이하 재귀함수 버전

async function deleteFolder(folderPath) {
    try {
        await fs.access(folderPath)
        await fs.rm(folderPath, { recursive: true, force: true })
        
        console.log('Deleted folder: ', folderPath);
    } catch (error) {
        console.error('Error deleting folder: ', folderPath);
    }
}

async function copyDirectory(source, destination) {
    try {
        await fs.mkdir(destination, { recursive: true })
        const entries = await fs.readdir(source, { withFileTypes: true })

        for (const entry of entries) {
            const srcPath = path.join(source, entry.name)
            const destPath = path.join(destination, entry.name)

            if (entry.isDirectory()) {
                await copyDirectory(srcPath, destPath)
            } else {
                fs.copyFile(srcPath, destPath)
            }
        }

        console.log(`Copied from ${source} to ${destination}`);
    } catch (error) {
        console.error('Error Copying');
    }
}

async function folderExists(folderPath) {
    try {
        await fs.access(folderPath);
        console.log('there is yes path: ', folderPath);
        return true;
    } catch {
        console.log('there is no path: ', folderPath);
        return false;
    }
}

async function copyAssets() {
    try {
        // await fs.access(dest)
    
        if (await folderExists(dest)) {
            await fs.rm(dest, { recursive: true, force: true })
            console.log(`Deleting completed ${dest}`);
        }
    

    } catch (error) {
        console.error('Error deleting');
        console.error(error);
    } finally {
        await fs.cp(src, dest, { recursive: true })
        console.log(`Copying completed from ${src} to ${dest}`);
    }
}

async function main() {
    // await deleteFolder();
    // await copyDirectory(src, dest)
    await copyAssets();
}

main();