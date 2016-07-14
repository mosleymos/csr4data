clean:
	rm -rf build/css/*.css \
	rm -rf build/css/*.css.map \
	rm -rf build/js/*.js   \
	rm -rf build/*.html    \
# Construction de HTML a partir de jade
html:
	jade src/templates/*.jade --out build/

# Construction de js compilé a partir javascript 
js:
	browserify src/js/app.js -o build/js/app.js

# Construction de css compilé a partir sass 
css:
	sass src/css/site.scss  build/css/site.css

# Build our site
site: html js css
	echo 'build du site'
