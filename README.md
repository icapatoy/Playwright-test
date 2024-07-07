# Playwright-test
nyobain playwright CI/CD pake jenkins

# guide (hehehhe)
Download playwright
 ```bash
npm init playwright@latest
 ```
Install playwright
 ```bash
npx playwright install
```
Run test playwright
 ```bash
npx playwright test
```
# Troubleshooting
### docker no permision  
    sudo chmod 666 /var/run/docker.sock

### Your cache folder contains root-owned files, due to a bug in 
    tambahin "args '-u root:root'" dibawah image di Jenkinsfile

### java error 
    sudo apt update 
    sudo apt install fontconfig openjdk-17-jre