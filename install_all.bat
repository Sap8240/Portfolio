@echo off
echo Installing Root Dependencies...
call npm install
cd client
echo Installing Client Dependencies...
call npm install
cd ../server
echo Installing Server Dependencies...
call npm install
cd ..
echo Done!
