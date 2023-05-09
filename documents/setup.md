# Front-end Setup 
1. Install [node v12 (lts/erbium)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04) - nvm is preferred to use as it allows installing and switching between multiple versions.
2. Clone the front-end repository.
```bash
git clone [mailto:git@bitbucket.org:jkapelner/visualivr-client.git]git@bitbucket.org:jkapelner/visualivr-client.git
```
3. Copy the .env.example file to a .env file in the same directory - you should only have to set your stripe public key, although you dont really need it unless you're testing payments.
4. cd into the directory (if you were already in it, cd out of it first). If you get a prompt, enter 'y'.
```bash
cd visualivr-client
```
5. Install node modules
``` 
npm install
```
6. Install angular cli
```bash
npm install -g @angular/cli@7.3.9
```

7. Run the angular app
```bash
npm start 
``` 

----
## Troubleshooter
1. Make sure node 12 lst/erbium is installed.
2. Make sure angular cli version is [compatible](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js) with node 12 lts/erbium. Preferred angular cli version is 7.3.9. [This](https://stackoverflow.com/questions/43344600/how-to-install-a-specific-version-of-angular-with-angular-cli) might help in installation.
3. If need to reinstall then do following 
    1. Remove node_modules
    2. Remove package-lock.json
    3. Run ```bash npm install ```
4. Make sure your [ssh pub key](https://www.google.com/search?q=generate+ssh+key+ubuntu&oq=generate+ss&aqs=chrome.2.69i57j0i512j0i20i263i512j0i512l7.4120j0j7&sourceid=chrome&ie=UTF-8) is added in your bit bucket account.
