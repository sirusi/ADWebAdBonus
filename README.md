# Changes
This is the same as the web version of the game, but with mobile ad bonuses included.  
Only one bonus is applied at a time, with the lowest in the list having higher priority.
<details>
<summary>Bonuses list (spoiler warning) </summary><br>
  
| Bonus  | Value | Condition |
| :---: | :---: | :---: |
| Antimatter Dimension Multiplier  | x2  | none |
| Infinity Points Multiplier  | x2 or (current IP)^0.01  | Infinities >= 10 |
| Eternity Points Multiplier | x1.5 or (current EP)^0.01, capped at x1e10 | Eternities >= 10 |
| Dilated Time Multiplier | x2 | Dilation is unlocked |
| Game Speed multiplier | x2 | First reality completed AND Reality is available |
| Reality Machines Multiplier | x2 | Teresa is unlocked |
| Relic Shard Multiplier | x2 | Effarig is unlocked |
| Glyph Rarity boost | +5% | The Nameless Ones is unlocked |
| Memory multiplier | x2 | Ra is unlocked | 
| Dark Energy multiplier | x2 | Lai'tela is unlocked |

<b>Bonuses are disabled on the last Celestial.</b>
  
</details>

# Antimatter Dimensions

## Run

To run the game locally, you will need to install
[Node.js](https://nodejs.org/) (LTS suggested).

First, run the following command in your terminal (or command line) while being
inside the checked out repository:

```
npm ci
```

After all the packages are installed, start up the game:

```
npm run serve
```

This will make the game served via your localhost, and the playable link will
be displayed in your terminal. The server **doesn't** need to be restarted
after you've made changes - just reload the page. The server **can**
occasionally crash, so check your terminal from time to time and run `serve`
again if needed.
