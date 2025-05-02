# Updating GitHub Page
`ng build --configuration production --base-href "https://nikuzejl.github.io/CollegeGuide/"`

`git add .`

`git commit -m "new changes"`

`git push --force`

# Docker
Start a container: `docker container start name`

Stop a container: `docker container stop name`

Delete: `docker container rm stop name`

List containers: `docker container ls -a`

Run docker image: `docker run -p 8000:8080 image-name`

Docker build path in angular.js:
          "options": {
            "outputPath": "dist/college-guide",
             ...
            }

Does github pages require /docs?


# test
