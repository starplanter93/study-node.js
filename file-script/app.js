const path = require('path');
const os = require('os');
const fs = require('fs');

const folder = process.argv[2];
const workDir = path.join(os.homedir(), 'Pictures', folder);
if (!folder || !fs.existsSync(workDir)) {
  console.error('사진 폴더 안의 폴더이름을 입력해주세요');
  return;
}

console.log(workDir);

const videoDir = path.join(workDir, 'video');
console.log(videoDir);
const capturedDir = path.join(workDir, 'captured');
const duplicatedDir = path.join(workDir, 'duplicated');
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises.readdir(workDir).then(processFiles).catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) return false;
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.log);
}
// const path = require('path');
// const fs = require('fs');

// const currentDirectory = process.cwd();
// const sep = path.sep;
// const testFolderDir = currentDirectory + sep + 'test';

// const makeDir = () => {
//   fs.mkdir('video', (err) => {
//     if (err) {
//       console.log('비디오 폴더 생성 실패', err);
//     } else {
//       console.log('비디오 폴더 생성 성공');
//     }
//   });

//   fs.mkdir('captured', (err) => {
//     if (err) {
//       console.log('captured 폴더 생성 실패', err);
//     } else {
//       console.log('captured 폴더 생성 성공');
//     }
//   });

//   fs.mkdir('duplicated', (err) => {
//     if (err) {
//       console.log('duplicated 폴더 생성 실패', err);
//     } else {
//       console.log('duplicated 폴더 생성 성공');
//     }
//   });
// };

// const moveFile = () => {

// }

// makeDir();
