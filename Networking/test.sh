#!/bin/bash

echo "************PRINT SOME TEXT***************\n"
echo "Hello World!!!"
echo "\n"

echo "Resources:"
vmstat -S M
echo "\n"

echo "Addresses:"
echo "$(ifconfig)"
echo "\n"


