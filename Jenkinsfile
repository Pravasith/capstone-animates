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
                sh 'heroku login'
                sh 'git push heroku'
            }
        }
    }
}