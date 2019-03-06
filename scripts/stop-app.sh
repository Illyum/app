#!/bin/bash

pid=$(pgrep 'node')
if [ ! -z $pid ]
then
    kill $pid
fi
