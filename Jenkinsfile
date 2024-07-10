pipeline {
 stages {
    stage('docker') {
      steps {
        sh '''
          sudo chmod 666 /var/run/docker.sock
        '''
      }
    } 
 } 
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.45.1'
      args '-u root:root'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
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
          archiveArtifacts(artifacts: 'test-results/*/tracer.zip', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}