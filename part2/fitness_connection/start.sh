#!/bin/bash

for folderName in `ls ./views/components/pages`
do
    echo "Compiling page $folderName "
    browserify -t [ babelify --presets [ react ] ] ./views/components/pages/$folderName/main.js -o ./views/statics/js/$folderName.js
done
set DEBUG=fitness_connection:* & npm start