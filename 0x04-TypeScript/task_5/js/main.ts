interface MajorCredits {
  credits: number;
  __type: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  __type: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
