pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }
  
  tools{
    nodejs "nodejs"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Hazzimov/nodeApp.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'pm2 delete nodeApp || true'

          sh 'pm2 start dist/app.js --name nodeApp'

          sh 'pm2 save'
        }
      }
    }
  }

  post {
    success {
      echo '✅ NodeApp deployed successfully!'
    }
    failure {
      echo 'Build or deployment failed!'
    }
  }
}
