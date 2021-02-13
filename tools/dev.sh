#!/bin/bash
docker run --rm -it -v ${PWD}:/workspace -p 8080:8080 gridsome gridsome develop