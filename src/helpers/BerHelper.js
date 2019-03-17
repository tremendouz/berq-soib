import { erf, sqrt, log10, exp, pow, pi, e } from "mathjs";

let berGaussian = q => 0.5 * (1 - erf(q / sqrt(2)));
let berLaplace = q => 0.5 * exp(-q);
let berRayleigh = q => exp(-0.5 * (q * q));
let max1 = q => q*exp(-0.5 * (q * q));
let max2 = q => sqrt(pi/0.5) * (1 - erf(q / sqrt(2)));
let berMaxwell = q => max1(q) + max2(q);

export const berMethods = [berGaussian, berLaplace, berRayleigh, berMaxwell];

export function generateQfactors(size, method) {
  let data = [];
  let qfactor = 20 * log10(1);
  let increment = method == berLaplace ? 2 : 0.55;
  for (let index = 0; index < size; index++) {
    qfactor += increment;
    let ber = method(qfactor);
    data.push({ x: ber, y: qfactor });
  }
  return data;
}