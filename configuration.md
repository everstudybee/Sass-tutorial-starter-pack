1. Utworzyć nowy projekt w WebStorm
1. Połączyć go z GitHubem
1. W folderze `.idea` skonfigurować `.gitignore`
1. Dodać `.gitignore` do folderu głównego
1. Zainicjować w folderze `npm init`
1. `npm install` spowoduje, że jeśli w pliku `package.json` były zapisane moduły do zostaną ściągnięte do prejektu i
zainstalowane
1. `npm install gulp -g` instaluje gulp'a globalnie dzięki fladze `-g`
1. `npm install gulp --save-dev` instaluje gulp'a lokalnie dzięki fladze `--save-dev` co oznacza, że paszka jest
 instalowana tylko do development. Flaga `--save` instaluje paczki potrzebne w wersji produkcyjnej np. Bootstrap
1. `npm install gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-imagemin --save-dev` instalacja dodatkowych paczek
1. Ręczne stworzenie pliku `gulpfile.js` gdzie wszystkie zainstalowane moduły są podpięte jako zmienne
1. Utworzenie folderu `app` gdzie będą trzymane pliki aplikacji, które posłużą do wygenerowania plików wyjściowych
1. Utworzenie folderu `dist` gdzie będą trzymane pliki gotowe do działania w przeglądarce, wygenerowane przez gulp
1. Utworzenie pliku `app|sass|main.scss`
1. Utworzenie folderu `dist|css`
1. Po skonfigurowaniu pliku `gulpfile.js` komendą `gulp sass` generujemy odpowiednie pliki css