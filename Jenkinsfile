pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.45.1'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          sudo chown -R 108:117 "/.npm
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}