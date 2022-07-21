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
                sh 'git push heroku'
            }
        }
    }
}