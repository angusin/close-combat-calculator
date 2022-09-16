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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

In the bottom part you can see a big chart with all the 3 attacks merged, for a better visualization and comparison between them:

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

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
