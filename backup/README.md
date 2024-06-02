# Formateur de Paroles pour ProPresenter


## Description
Ce projet est une application simple qui permet de formater rapidement les paroles de chansons pour les copier et les coller facilement dans le logiciel ProPresenter. Cela permet de gagner du temps et d'assurer que les paroles sont dans le format correct avant de les utiliser dans ProPresenter.

## Installation

### Prérequis
 * Docker
 * Docker compose

### Etapes
1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone git@github.com:rzjosia/trame.git
   ```
   ou
   ```bash
   git clone https://github.com/rzjosia/trame.git
   ```

2. Accéder au repertoire du projet :
   ```bash
   cd trame
   ```

3. Démarrez les services Docker :
   ```bash
   docker compose up --build -d
   ```

4. Si vous n'avez plus besoin de l'application vous pouvez arrêter les services docker :
    ```bash
   docker compose down --remove-orphans
   ```

### Commandes utiles

* Formater le code avec prettier :
  ```bash
  docker compose exec node npm run format
  ```

### Utilisation
1. Accédez à l'application dans votre navigateur [http://localhost:8084](http://localhost:8084)
   
2. Utilisez l'interface pour copier-coller les paroles ou saisissez directement les paroles dans le champ de texte.

3. Prévisualisez les paroles formatées en temps réel.

4. Copiez les paroles formatées et collez-les dans ProPresenter.

