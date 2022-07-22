pipeline {
    agent any

    stages {

        stage("test") {

            steps {
                echo 'testing the app'
            }
        }

        stage("deploy") {

            steps {
                echo 'deploying the app'
                sh 'npm -v'
                
            }
        }
    }
}