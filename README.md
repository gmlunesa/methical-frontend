# methical

## About

> Do imaginary people dream of electric sheep?

/mēTHək(ə)l/

Generate a non-existent profile with **methical**. An AI-generated photo, names, residence, traits and hobbies that aren't a part of anyone that has been born on Earth (yet).

If you wish to access the API, please visit [Methical API](https://methical-api.herokuapp.com/).

### Stack

| <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/frameworks/react.svg" width="100" height="100" alt="NodeJS"> | <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/frameworks/nodejs.svg" width="100" height="100" alt="NodeJS"> | <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/cloud/docker.svg" width="100" height="100" alt="Docker"> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |

## Setup

The following are the steps on running the server locally.

Clone the repository.

```
git clone https://github.com/gmlunesa/methical-frontend.git
```

Install Node modules.

```
npm install
```

Run the application.

```
npm start
```

If you wish to build and run a Docker image, please follow the following steps.

Build an image upon which your container will be built.

```
docker build -t sample-container:dev .
```

Run container.

```
$ docker run -it --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3001:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  sample-container:dev
```

## License

[MIT 🌱 Fully open-source](https://github.com/gmlunesa/methical/blob/main/LICENSE)

## Credits

- Favicon is from the open source project [Twemoji](https://twemoji.twitter.com/).
- Photos are generated and scraped from [This Person Does Not Exist](https://this-person-does-not-exist.com/).
- Color palette is from [Nord](https://www.nordtheme.com/docs/colors-and-palettes).

---

Made with 💫✨ by [gmlunesa](https://gmlunesa.com)
