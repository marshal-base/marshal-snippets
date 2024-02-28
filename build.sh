#!/bin/bash

echo $1
mkdir out
cd out
mkdir snippets
cp -r ../src/snippets/** ./snippets/
cd ..

tsc $1 -p ./