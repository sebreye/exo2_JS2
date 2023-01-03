function divPar2(x) {
    switch (x % 2) {
      case 0:
        console.log(`Le num ${x} est divisible par 2  ${x}:2 = ${x / 2}`);
        break;
      default:
        console.log(`Ce nombre n'est pas divisible par 2`);
    }
  }
  