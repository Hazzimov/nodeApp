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
        // Ejecuta Jest con los tests dentro de src/tests
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        script {
          // Si ya hay un proceso corriendo con ese nombre, lo eliminamos
          sh 'pm2 delete nodeApp || true'

          // Iniciamos la nueva versión desde la carpeta dist/
          sh 'pm2 start dist/app.js --name nodeApp'

          // Guardamos la configuración de PM2 para reinicio automático
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
      echo '❌ Build or deployment failed!'
    }
  }
}
