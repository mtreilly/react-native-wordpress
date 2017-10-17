# Wordpress and React Native

This is the very rough and very quickly done code of the react native example from my WordCamp Dublin talk

If you want to set this up yourself. I've used expo to create and run the react-native app. You will
need to download that first

To get started run

```
yarn install
or
npm install
```

Then open up the project in expo. For the firebase details, you'll need to create your own firebase account and then 
create a web project, fill those details into "Posts.js"

Finally you need a WordPress site to query, the query url is at the top of the file "Posts.js" and "Home.js" just change that
to what your own wordpress url

There is also a wordpress folder in the project and this contains the 
functions.php of the twentyseventeen theme with the REST Api modifications

You will need to modifiy the firebase url to work with your project url. WordPress sends a HTTP PUT request on every update
The url is at the end of the functions.php
