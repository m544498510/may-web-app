#!/usr/bin/env bash

cd `dirname $0`

cd ../backend

bash ./bin/mongoStart.sh &
npm start &
