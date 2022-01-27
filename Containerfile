from node
workdir /app
copy package.json /app
run npm install
copy index.mjs /app
expose 3000
cmd ["node", "index.mjs"]
