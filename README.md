# git 정의

git은 코드의 변경 이력을 기록하는 프로그램
github는 MS사에서 git을 인터넷에서 사용할 수 있게 해주는 소프트웨어이자 사이트

```bash
#기초코드
git add . # .gitignore에 기재된 내용 빼고 현재폴더 내에 있는 모든 파일들을 트랭킹하겠다는 의미
git commit -m "메세지"
```

```bash
git add <파일명 혹은 폴더명> #특정파일이나 폴더를 트래킹 목록에 추가 하겠다는 의미
git commit -m "메세지"
git push
```

```bash
# 셋팅 된 이후에는 아래 명령어 통해서 원격 저장소로 바로 보낼 수 있음

git clone<인터넷 주소> #로컬에 경로로 복사

git pull # 원격저장소에 내경로로
git add .
git commit -m "메세지"
git push

```

```bash
#리덱트 프로젝트는 패키지 설치 후 사용 가능
npm install
npm run start
```

---

no_modules 는패키지가 설치된 경로
