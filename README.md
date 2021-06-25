# Strapi application managing RedSys API
### Testing strapi API (should be used as reference)
```text
http://45.76.97.89:3000
```
#### Login Credentials : 
```html
redsys@admin.com/Redsys2021
```
#### Postgres is the used Database (it must be installed and running):
```html
DB_NAME = redsys
Username = redsys_admin
Password = redsys_admin
```
#### To create such db , copy these commands after installing postgresql in your local machine :
```shell
psql postgres
CREATE DATABASE redsys;
CREATE ROLE redsys_admin WITH LOGIN PASSWORD 'redsys_admin' CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE redsys TO redsys_admin;
```

### ! ngrok must be started and configured in order to test OAuth
####Google Account: (https://console.cloud.google.com/apis/)
```text
Email: redsysowner@gmail.com
Password: redsys-admin-0
OAuth Client ID : 193757322738-lo4hk2jfb45n9mr5tn923c61j1a42137.apps.googleusercontent.com
Client Secret : wRNjmb5bbdUFTy3pcfTVBSvK
```
####Facebook Account: (https://developers.facebook.com)
```text
Email: redsysowner@gmail.com
Password: redsys-admin-0
OAuth Client ID : Not Created Yet
Client Secret : Not created Yet
```


## Specific To dynamic-content branch only

* on roles and permissions , public role has all the privileges which should be set to false in production!
* Run sql_data_script.sql for testing values


