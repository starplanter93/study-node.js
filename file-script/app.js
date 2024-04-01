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
