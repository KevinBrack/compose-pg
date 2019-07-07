pipeline {
    agent any

    stages {
        stage('BUILD EXPRESS') {
            steps {
                echo 'BUILDING EXPRESS'
                sh 'docker build -t express:mine ./express'
                echo 'EXPRESS BUILD COMPLETE'
            }
        }
        stage('BUILD NEXTJS') {
            steps {
                echo 'BUILDING NEXTJS'
                sh 'docker build -t client:mine ./client'
                echo 'NEXTJS BUILD COMPLETE'
            }
        }
        stage('LAUNCH EXPRESS') {
            steps {
                echo 'RUNNING EXPRESS CONTAINER'
                sh 'docker run -d --rm -p 1337:1337 --name express express:mine'
                echo 'CONTAINER MOUNTED ON PORT 1337'
            }
        }
        stage('LAUNCH NEXTJS') {
            steps {
                echo 'RUNNING NEXT CONTAINER'
                sh 'docker run -d --rm -p  80:3000 --name nextjs client:mine'
                echo 'NEXTJS MOUNTED ON PORT 80'
            }
        }
        stage('LAUNCH POSTGRES') {
            steps {
                echo 'LAUNCHING POSTGRES'
                sh 'docker run -d --rm -p 5432:5432 --name pg postgres'
                echo 'POSTGRES MOUNTED ON PORT 5432'
            }
        }
    }
}