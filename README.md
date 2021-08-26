# NodeFlix
 ### Service media interface based on user files
 ![NodeFlix](https://mir-s3-cdn-cf.behance.net/projects/original/88e13e98481321.Y3JvcCwxMTI4LDg4MywyNSww.png)

##  Features
* Posters and infos about the medias
* Genre classification
* Season selector

## Requirements
* Node.js 12 or latest
## Install
```bash
  npm install
```
## Guide

* The folders name must be the same name of the media in english
* The folders name must write in kebab case style
* Folders structure must stay inside medias folder
```
medias 
│
└───movies
│   │   folder-movie-name-1
│   │   folder-movie-name-2
│       │
│       └───│movie-file
└───series
    │   folder-serie-name-1
    │   folder-serie-name-2
        │
        └───│   folder-season-01
            │   folder-season-02
                │
                └───│file-episode-S02E01
                    │file-episode-S02E02
```
## Comand
- Start
```bash
npm start
```
- Development
```bash
npm run dev
```
- Production
```bash
npm run build
```
