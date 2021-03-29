let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger', 'racoon'];
let domains = ['.com', '.us', '.net']

let pronoun;
let adj;
let noun;
let domain;
let domainDone;

for (let i = 0; i < pronouns.length; i++) {
  pronoun = pronouns[i];
  for (let j = 0; j < adjs.length; j++){
    adj = adjs[j];
    for (let k = 0; k < nouns.length; k++) {
      noun = nouns[k];
      for (let l = 0; l < domains.length; l++) {
        domain = domains[l];
        domainDone = `${pronoun}${adj}${noun}${domain}`;
        console.log(domainDone);
      }
    }
  }
}
