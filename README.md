<p align="center">
<a href=""><img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" /></a>
<a href=""><img src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white" /></a>
<a href=""><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a>
<a href=""><img src="https://img.shields.io/github/package-json/v/angusin/close-combat-calculator?style=for-the-badge" /></a>
<a href=""><img src="https://img.shields.io/github/last-commit/angusin/close-combat-calculator/develop?style=for-the-badge" /></a>
<a href=""><img src="https://img.shields.io/github/repo-size/angusin/close-combat-calculator?style=for-the-badge" /></a>
</p>

# Close Combat - Stats Calculator

This app helps us creating better stats for the units in the Close Combat board game.
By changing the Dice Type, the Dice Number and the Defense (armor) of the objective, we can better estimate the average wound that an attack will cause, changing the stats of the attacker for a better leveling between all of them.

## Demo

You can view a demo here: http://close-combat-calculator.modelbrush.com

## Tech Stack

**Client:** Angular 14 (https://angular.io/)

**Styles:** Halfmoon (https://www.gethalfmoon.com/)

**Visualization:** Chart.js (https://www.chartjs.org/) and ng2-charts (https://valor-software.com/ng2-charts/)

**Toasts:** Angular Toastr (https://ngx-toastr.vercel.app/)

## Screenshots

You can tweak with 3 different attacks at the same time, changing all values. The chats will update at real time:

![Screenshot 2022-09-16 at 11 30 34](https://user-images.githubusercontent.com/8282153/190616161-7bb90fad-56e8-4ba8-867f-47703d74b963.png)

In the bottom part you can see a big chart with all the 3 attacks merged, for a better visualization and comparison between them:

![Screenshot 2022-09-16 at 11 29 41](https://user-images.githubusercontent.com/8282153/190616187-7075e06d-7400-4873-8434-872006437b05.png)

## Run Locally

Clone the project

```bash
  git clone git@github.com:angusin/close-combat-calculator.git
```

Go to the project directory

```bash
  cd close-combat-calculator
```

Install the dependencies

```bash
  npm install
```

Start the app

```bash
  ng serve -o
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
