#!/bin/bash
cd api-gateway
npm i
echo 'api-gateway done'
cd ..
cd contacts
npm i
echo 'contacts done'
cd ..
cd history
npm i
echo 'history done'

echo 'exit'
exit