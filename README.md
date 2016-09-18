Mobile app for tagger nfc retail system

Setup instructions

1. Clone the repo and navigate into project directory
2. Run `npm install -g ionic cordova` to install ionic and cordova
3. Run `npm install` and `bower install` to fetch dependencies
4. Do `cordova plugin add phonegap-nfc` to add nfc plugin
5. Do `ionic platform add android` to add native android platform
6. Connect android phone with USB debugging enabled and run `ionic run android -l -c --device` 
