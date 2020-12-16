let verse = [
  "Grace be to you,and peace from God our father, and from the Lord Jesus Christ",
  "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come. Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God. which is in Chirst Jesus our Lord",
  "Now Faith is the substance of things hoped for, the evidence of things not seen",
  "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord which made Heaven and earth",
  "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful",
  "I laid me down and slept; I awaked; for the Lord sustained me",
  "Yea, though I walk through the valley of the shadow of death, I will fear no evil; for thou are with me; thy rod and thy staff they comfort me"];

let ref = ["Galatians 1:3", "Romans 8:38-39", "Hebrews 11:1", "Psalm 121:1", "Psalm 1:1", "Psalm 3:3", "Psalm 23:4"];
let num = Math.floor(Math.random() * 7) + 0;
document.getElementById("Psalm-ver").innerHTML = verse[num];
document.getElementById("Psalm-ref").innerHTML = ref[num];
