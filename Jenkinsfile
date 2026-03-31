pipeline {
    agent any

    environment {
        IMAGE_NAME = "openshift-app"
        REGISTRY = "docker.io/<your-docker-username>"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/VijendraKumar-Mummidi/openshiftproject.git'
            }
        }

        stage('Build') {
            steps {
                echo "Build successful"
            }
        }
    }
}
