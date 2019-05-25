import { erf, sqrt, log10, exp, pow, pi, e, bignumber } from "mathjs";

let berGaussian = q => 0.5 * (1 - erf(q / sqrt(2)));
let berLaplace = q => 0.5 * exp(-q);
let berRayleigh = q => exp(-0.5 * (q * q));
let max1 = q => q*exp(-0.5 * (q * q));
let max2 = q => sqrt(pi/0.5) * (1 - erf(q / sqrt(2)));
let berMaxwell = q => max1(q) + max2(q);
export let berGauAlt = q => (1/(sqrt(2*pi)*q))*exp(-0.5 * (q * q));

export const berMethods = [berGaussian, berLaplace, berRayleigh, berMaxwell];

export function generateQfactors(size, method) {
  let data = [];
  let ind = 1.2
  let increment = method == berLaplace ? 1 : 0.5;
  for (let index = 0; index < size; index++) {
    ind += increment;
    console.log("index" + ind);
    // let qfactor = 20 * log10(ind);
    let qfactor = ind;
    console.log("qfacor" + qfactor);
    let ber = method(qfactor);
    if(ber == 0 && method == berGaussian){
      ber = berGauAlt(qfactor);
    }
    data.push({ x: qfactor, y: ber });
  }
  return data;
}