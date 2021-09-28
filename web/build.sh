# Docker commands
docker stop nuxt:nginx
docker rm $(docker ps -a -f status=exited -q)
sudo docker build -t nuxt:nginx .
sudo docker run --name website --rm -d -p 80:80 nuxt:nginx
