const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.SRC_ASSETS_VENDOR);
console.log(process.env.DIST_ASSETS_VENDOR);

const src = path.join(__dirname, process.env.SRC_ASSETS_VENDOR);
const dest = path.join(__dirname, process.env.DIST_ASSETS_VENDOR);
const DIST_ASSETS = path.join(__dirname, process.env.DIST_ASSETS);
const DIST = path.join(__dirname, process.env.DIST);
const filePatternJs = /^index.*\.js$/;
const filePatternCss = /^index.*\.css$/;
// const filePattern = /^index.*\.(css|js)$/;

console.log('debug1: ', src);
console.log('debug2: ', dest);
console.log('debug3: ', DIST_ASSETS);

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

async function changeLoadPath() {
    console.log('changeLoadPath');
    // index.html 내 /assets -> ./assets
    const indexFile = path.join(DIST, 'index.html')
    try {
        // 파일 읽기
        let data = await fs.readFile(indexFile, 'utf8');
        
        // 단어 변경
        const updatedData = data.replace(new RegExp('"/assets/', 'g'), '"./assets/');
        
        // 변경된 내용 저장
        await fs.writeFile(indexFile, updatedData, 'utf8');
        console.log(`${indexFile}이(가) 성공적으로 수정되었습니다.`);

    
    // css file 내 /assets -> ./assets
        // 디렉토리 내 파일 읽기
        const files = await fs.readdir(DIST_ASSETS);
        
        // 특정 패턴에 맞는 파일 찾기
        for (const file of files) {
            if (filePatternCss.test(file)) {
                const filePath = path.join(DIST_ASSETS, file);
                console.log('jsdno0 debug6 filePath: ', filePath);
                try {
                    // 파일 읽기
                    let dataCss = await fs.readFile(filePath, 'utf8');
                    
                    // 단어 변경
                    if (dataCss.includes('(/assets/')) {
                        console.log('jsdno0 debug3');
                    }
                    // const updatedData = data.replace(new RegExp('\(/assets/', 'g'), '(./');
                    const updatedData = dataCss.replaceAll('(/assets/', '(./');
                    
                    // 변경된 내용 저장
                    await fs.writeFile(filePath, updatedData, 'utf8');
                    console.log(`${file}이(가) 성공적으로 수정되었습니다.`);
                } catch (fileError) {
                    console.error(`${file}을(를) 처리하는 중 오류 발생:`, fileError);
                }
            } 
            // if (filePatternJs.test(file)) {
            if (false) {
                const filePath = path.join(DIST_ASSETS, file);
                console.log('jsdno0 debug5 filePath: ', filePath);
                // 파일 읽기
                let dataJs = await fs.readFile(filePath, 'utf8');
                
                if (dataJs.includes('"/assets/')) {
                    console.log('jsdno0 debug4');
                }
                // 단어 변경
                // const updatedData = data.replace(new RegExp('"/assets/', 'g'), '"./');
                const updatedData = dataJs.replaceAll('"/assets/', '"./');
                
                // 변경된 내용 저장
                await fs.writeFile(filePath, updatedData, 'utf8');
                console.log(`${file}이(가) 성공적으로 수정되었습니다.`);

            }
        }
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

async function main() {
    // await deleteFolder();
    // await copyDirectory(src, dest)
    const args = process.argv.slice(2)
    console.log('build0: ', args);
    await copyAssets();
    if (args !== null && args !== undefined && Array.isArray(args) && args.length > 0 ) {
        console.log('jsdno0 debug1');
        if (args[0] === 'git') {
            console.log('jsdno0 debug2');
            await changeLoadPath();
        }
    }
}

main();