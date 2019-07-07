pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..',
                docker build -t express:mine ./express ,
                docker build -t client:mine ./client 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....',
                docker run -d -p 1337:1337 --name express express:mine ,
                docker run -d -p 80:3000 --name nextjs client:mine ,
                docker run -d -p 5432:5432 --name pg postgres
            }
        }
    }
}